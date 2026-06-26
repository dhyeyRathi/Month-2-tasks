import type { ReactNode } from "react";
import { useRef, useEffect, useState } from "react";

export function useFadeInUp(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { 
        if (e.isIntersecting) { 
          setVisible(true); 
          obs.disconnect(); 
        } 
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  
  return { ref, visible };
}

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeInUp({ children, className = "", style = {} }: FadeInUpProps) {
  const { ref, visible } = useFadeInUp();
  return (
    <div
      ref={ref}
      className={`fade-in-up${visible ? " visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
