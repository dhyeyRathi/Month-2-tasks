import { type ReactNode } from "react";
import HeroBg from "/images/SunTyndalThroughDecor.jpg";

import { easeInOut, motion } from "motion/react";



interface HeroProps {
  variant?: "home" | "couple"
  img?: string
  children?: ReactNode
}

const Hero = ({variant, img, children}: HeroProps) => {
  return (
    <div className={`w-full relative overflow-hidden font-light ${variant === "home"?'h-screen':' h-[90svh] min-h-[680px]'}`}>
      <motion.img
        src={variant === "home" ? `${HeroBg}`:`${img}`}
        className={`w-full h-full object-cover overflow-hidden absolute inset-0 -z-10`}
        initial={{ scale: 1.05, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut }}
        alt="Hero Image"
      />
      <div className="absolute -z-10 inset-0 bg-gradient-hero" />

      
        {children}
     


      {variant ==="home" &&<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70 text-[10px] tracking-[0.4em] uppercase">Scroll</div>}
    </div>
  );
};

export default Hero;
