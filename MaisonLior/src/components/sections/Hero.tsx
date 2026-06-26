import { type ReactNode } from "react";
import HeroBg from "/images/SunTyndalThroughDecor.webp";

interface HeroProps {
  variant?: "home" | "couple";
  img?: string;
  children?: ReactNode;
}

const Hero = ({ variant, img, children }: HeroProps) => {
  return (
    <div
      className={`w-full relative overflow-hidden  ${
        variant === "home" ? "h-screen" : "h-[90svh] min-h-[680px]"
      }`}
    >
      {/* CSS animation replaces motion.img — same scale+fade, zero JS */}
      <img
        src={variant === "home" ? HeroBg : img}
        className="w-full h-full object-cover absolute inset-0 -z-10"
        style={{ animation: "heroReveal 1s ease-in-out forwards" }}
        alt="Hero Image"
      />
      <style>{`
        @keyframes heroReveal {
          from { transform: scale(1.05); opacity: 0.8; }
          to   { transform: scale(1);    opacity: 1;   }
        }
      `}</style>

      <div className="absolute -z-10 inset-0 bg-gradient-hero" />

      {children}

      {variant === "home" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70 text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </div>
      )}
    </div>
  );
};

export default Hero;
