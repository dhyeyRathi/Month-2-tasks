import { Helmet } from "react-helmet-async";

const BASE_URL = "https://maisonlior-dhyey.vercel.app";

type Props = {
  type: | "home" | "about" | "services" | "portfolio" | "couple"
    | "journal"| "article" | "contact";
  data?: any;
};

const generateSchema = (type: string, data?: any) => {
  switch (type) {
    case "home":
      return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Maison Lior",
        url: BASE_URL,
        description:
          "Luxury wedding photography and films capturing timeless love stories.",
        serviceType: ["Wedding Photography", "Wedding Films"],
        areaServed: "India"
      };

    case "about":
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Maison Lior",
        url: `${BASE_URL}/about`,
        description:
          "Learn about Maison Lior and our wedding storytelling philosophy."
      };

    case "services":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Wedding Photography",
        provider: {
          "@type": "ProfessionalService",
          name: "Maison Lior"
        },
        areaServed: "India",
        url: `${BASE_URL}/services`
      };

    case "portfolio":
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Portfolio",
        url: `${BASE_URL}/portfolio`,
        description: "Wedding stories captured by Maison Lior."
      };

    case "couple":
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: data?.title || "Wedding Story",
        description: `${data?.title || "Wedding"} story by Maison Lior`,
        url: `${BASE_URL}/portfolio/${data?.slug}`,
        image: data?.coverImage || `${BASE_URL}/og-image.jpg`,
        creator: {
          "@type": "Organization",
          name: "Maison Lior"
        }
      };

    case "journal":
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Maison Lior Journal",
        url: `${BASE_URL}/journal`,
        description:
          "Wedding stories, inspiration, and photography insights."
      };

    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data?.title || "Journal Article",
        description: data?.description || "",
        datePublished: data?.datePublished || "",
        url: `${BASE_URL}/journal/${data?.url}`,
        author: {
          "@type": "Organization",
          name: "Maison Lior"
        }
      };

    case "contact":
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Maison Lior",
        url: `${BASE_URL}/contact`,
        description:
          "Contact Maison Lior for wedding photography and films."
      };

    default:
      return null;
  }
};

const SeoSchema = ({ type, data }: Props) => {
  const schema = generateSchema(type, data);

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SeoSchema;