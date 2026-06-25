import { Check, ArrowRight } from "lucide-react";

export const packages = [
  {
    id: "01",
    title: "L'Essentiel",
    description:
      "Month-of coordination for couples who've planned and want a flawless day.",
    price: "From €18,000",
    features: [
      "Six weeks of coordination",
      "Vendor management",
      "Day-of leadership",
      "Two coordinators on site",
    ],
    variant: "light",
  },
  {
    id: "02",
    title: "Atelier",
    description:
      "Full design and planning for an editorial celebration.",
    price: "From €45,000",
    features: [
      "Concept & creative direction",
      "Full vendor curation",
      "Bespoke stationery suite",
      "Three on-site coordinators",
      "Rehearsal dinner planning",
    ],
    variant: "dark",
  },
  {
    id: "03",
    title: "Maison",
    description:
      "Multi-day destination experiences with no detail spared.",
    price: "Bespoke",
    features: [
      "Welcome to farewell programming",
      "Private travel coordination",
      "Custom-built installations",
      "Dedicated concierge per couple",
      "Pre-wedding moodboard retreat",
    ],
    variant: "light",
  },
] as const;

type PricingCardProps = {
  id?: string;
  title?: string;
  description?: string;
  price?: string;
  features?: readonly string[];
  variant?: "light" | "dark";
};


const ServiceCard = ({
  id,
  title,
  description,
  price,
  features,
  variant = "light",
}: PricingCardProps) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`h-full p-10 flex flex-col ${
        isDark
          ? "bg-espresso text-ivory"
          : "bg-ivory text-espresso"
      }`}
    >
      <p className="eyebrow text-gold">{id}</p>

      <h3 className="font-heading text-4xl mt-4">{title}</h3>

      <p
        className={`mt-3 text-sm font-body ${
          isDark ? "text-ivory/70" : "text-espresso/70"
        }`}
      >
        {description}
      </p>

      <p className="font-heading italic text-2xl mt-8">{price}</p>

      <ul className="mt-8 font-body space-y-3 flex-1">
        {(features || []).map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="/contact"
        className={`mt-10 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase border-b pb-1 self-start hover:text-gold hover:border-gold transition-colors ${
          isDark ? "border-border" : "border-espresso"
        }`}
      >
        Enquire
        <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  );
};

export default ServiceCard;