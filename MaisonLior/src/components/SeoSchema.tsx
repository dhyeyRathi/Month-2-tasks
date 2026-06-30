import { Helmet } from "react-helmet-async";

const BASE_URL = "https://maisonlior-dhyey.vercel.app";
const LOGO_URL = `${BASE_URL}/og-image.jpg`;

type Props = {
  type:
    | "home"
    | "about"
    | "services"
    | "portfolio"
    | "couple"
    | "journal"
    | "article"
    | "contact";
  data?: any;
};

// const organization = {
//   "@type": "Organization",
//   "@id": `${BASE_URL}/#organization`,
//   name: "Maison Lior",
//   url: BASE_URL,
//   logo: {
//     "@type": "ImageObject",
//     url: LOGO_URL,
//   },
// };

const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

const generateSchema = (type: string, data?: any) => {
  switch (type) {
    case "home":
      return [
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${BASE_URL}/#service`,
          name: "Maison Lior",
          url: BASE_URL,
          description:
            "Luxury wedding photography and films capturing timeless love stories.",
          serviceType: ["Wedding Photography", "Wedding Films"],
          areaServed: "India",
        },
      ];

    case "about":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Maison Lior",
          url: BASE_URL,
        },
        breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "About", url: `${BASE_URL}/about` },
        ]),
      ];

    case "services":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Wedding Photography",
          provider: {
            "@type": "Organization",
            name: "Maison Lior",
          },
          areaServed: "India",
        },
        breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Services", url: `${BASE_URL}/services` },
        ]),
      ];

    case "portfolio":
      return [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Portfolio",
          url: `${BASE_URL}/portfolio`,
        },
        breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Portfolio", url: `${BASE_URL}/portfolio` },
        ]),
      ];

    case "journal":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Maison Lior Journal",
          url: `${BASE_URL}/journal`,
        },
        breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Journal", url: `${BASE_URL}/journal` },
        ]),
      ];

    case "article":
      return [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: data?.title || "Journal Article",
          description: data?.description || "",
          image: data?.image || `${BASE_URL}/og-image.jpg`,
          datePublished: data?.datePublished || "",
          author: {
            "@type": "Organization",
            name: "Maison Lior",
          },
          publisher: {
            "@type": "Organization",
            name: "Maison Lior",
            logo: {
              "@type": "ImageObject",
              url: `${BASE_URL}/og-image.jpg`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/journal/${data?.url}`,
          },
        },
        breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Journal", url: `${BASE_URL}/journal` },
          { name: data?.title || "Article", url: `${BASE_URL}/journal/${data?.url}` },
        ]),
      ];

    case "contact":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Maison Lior",
          url: BASE_URL,
        },
        breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Contact", url: `${BASE_URL}/contact` },
        ]),
      ];

    default:
      return null;
  }
};
const SeoSchema = ({ type, data }: Props) => {
  const schemas = generateSchema(type, data);

if (!schemas) return null;

return (
  <Helmet>
    {schemas.map((schema, index) => (
      <script key={index} type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    ))}
  </Helmet>
);
};

export default SeoSchema;