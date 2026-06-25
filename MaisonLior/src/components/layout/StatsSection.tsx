"use client";

import { animate, useInView, easeOut } from "motion/react";
import { useEffect, useState, useRef } from "react";

type CounterProps = {
  target: number;
  isInView: boolean;
};

const Counter = ({ target, isInView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
      const controls = animate(0 as number, target, { duration: 2, ease: easeOut,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
    

    return () => controls.stop();
  }, [isInView]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  const reference = useRef(null);
  const isInView = useInView(reference, {
    once: true,
  });
  return (
    <section className="bg-espresso text-ivory py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12" ref={reference}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 ">
          <div>
            <p className=" text-6xl md:text-7xl font-heading text-champagne">
              <Counter target={240} isInView={isInView} />+
            </p>
            <p className="mt-4 eyebrow text-ivory/60">Weddings Designed</p>
          </div>

          <div>
            <p className=" text-6xl md:text-7xl font-heading  text-champagne">
              <Counter target={32} isInView={isInView} />
            </p>
            <p className="mt-4 eyebrow text-ivory/60">Countries</p>
          </div>

          <div>
            <p className=" text-6xl md:text-7xl font-heading  text-champagne">
              <Counter target={18} isInView={isInView} />
            </p>
            <p className="mt-4 eyebrow text-ivory/60">Years of Craft</p>
          </div>

          <div>
            <p className=" text-6xl md:text-7xl font-heading  text-champagne">
              <Counter target={99} isInView={isInView} />%
            </p>
            <p className="mt-4 eyebrow text-ivory/60">Couples Referred Us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
