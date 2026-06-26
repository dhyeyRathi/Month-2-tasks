import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

interface PortfolioCardProps {
  couple: any;
  index?: number;
  variant?: "home" | "portfolio";
}

const handleClick = () => {
  window.scrollTo(0, 0);
};

const PortfolioCard = ({ couple, index = 0, variant }: PortfolioCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity ${0.3 * (index + 1)}s ease, transform ${0.3 * (index + 1)}s ease`,
      }}
    >
      <Link className="group block" to={`/portfolio/${couple.slug}`} onClick={handleClick}>
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={couple.coverImage}
            alt={couple.couples}
            className="h-full w-full object-cover hover:scale-105 transition-all duration-700 ease-in-out"
          />
        </div>

        <div className="mt-6 flex items-end justify-between font-body ">
          <div>
            <p className="eyebrow text-gold">
              {variant === "home"
                ? `${couple.location} · ${couple.year}`
                : `${couple.type} · ${couple.year}`}
            </p>

            <h3 className="text-3xl md:text-4xl mt-3 italic font-heading ">
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
    </div>
  );
};

export default PortfolioCard;
