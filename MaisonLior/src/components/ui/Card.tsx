import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  couple: any;
  index?: number;
  variant?: "home" | "portfolio";
}

const handleClick = () => {
  window.scrollTo(0, 0);
};

const PortfolioCard = ({ couple, index = 0, variant }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 * (index + 1) }}
      viewport={{ once: true }}
    >
      <Link className="group block" to={`/portfolio/${couple.slug}`} onClick={handleClick}>
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={couple.coverImage}
            alt={couple.couples}
            className="h-full w-full object-cover hover:scale-105 transition-all duration-700 ease-in-out"
          />
        </div>

        <div className="mt-6 flex items-end justify-between font-body font-light">
          <div>
            <p className="eyebrow text-gold">
              {variant === "home"
                ? `${couple.location} · ${couple.year}`
                : `${couple.type} · ${couple.year}`}
            </p>

            <h3 className="text-3xl md:text-4xl mt-3 italic font-heading font-light">
              {couple.couples}
            </h3>

             {variant === "portfolio" &&<p className="text-sm text-muted-foreground mt-2">
               
                {couple.location}
            </p> }

            {variant === "home" && <p className="text-sm text-muted-foreground mt-3 max-w-md">
              {couple.description}
            </p>}
          </div>

          <div className="group w-6 h-6 relative">
            <div className="absolute inset-0 bg-black mask-arrow" />
            <div className="absolute inset-0 w-0 group-hover:w-full bg-gold mask-arrow transition-all duration-100" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
