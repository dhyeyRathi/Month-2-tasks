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

const organization = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Maison Lior",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
};

const generateSchema = (type: string, data?: any) => {
  switch (type) {
    case "home":
      return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${BASE_URL}/#service`,
        name: "Maison Lior",
        url: BASE_URL,
        description:
          "Luxury wedding photography and films capturing timeless love stories.",
        serviceType: ["Wedding Photography", "Wedding Films"],
        areaServed: "India",
        provider: organization,
      };

    case "about":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        ...organization,
        description:
          "Maison Lior is a luxury wedding atelier crafting timeless and cinematic celebrations.",
      };

    case "services":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${BASE_URL}/services#service`,
        serviceType: ["Wedding Photography", "Wedding Films"],
        provider: organization,
        areaServed: "India",
        url: `${BASE_URL}/services`,
      };

    case "portfolio":
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/portfolio`,
        name: "Portfolio",
        url: `${BASE_URL}/portfolio`,
        description: "Wedding stories captured by Maison Lior.",
      };

    case "couple":
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${BASE_URL}/portfolio/${data?.slug}`,
        name: data?.title || "Wedding Story",
        description: `${data?.title || "Wedding"} story by Maison Lior`,
        url: `${BASE_URL}/portfolio/${data?.slug}`,
        image: data?.coverImage || LOGO_URL,
        creator: organization,
      };

    case "journal":
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${BASE_URL}/journal`,
        name: "Maison Lior Journal",
        url: `${BASE_URL}/journal`,
        description:
          "Wedding stories, inspiration, and photography insights.",
        publisher: organization,
      };

    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${BASE_URL}/journal/${data?.url}`,
        headline: data?.title || "Journal Article",
        description: data?.description || "",
        image: data?.image || LOGO_URL,
        datePublished: data?.datePublished || "",
        author: organization,
        publisher: organization,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${BASE_URL}/journal/${data?.url}`,
        },
      };

    case "contact":
      return {
        "@context": "https://schema.org",
        ...organization,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: `${BASE_URL}/contact`,
        },
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