import { useEffect, useState, useRef } from "react";

type CounterProps = {
  target: number;
  isInView: boolean;
};

// Native easeOut — replaces motion's easeOut, zero bundle cost
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const Counter = ({ target, isInView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000; // ms
    const start = performance.now();

    const raf = requestAnimationFrame(function tick(now) {
      const elapsed = Math.min((now - start) / duration, 1);
      setCount(Math.floor(easeOut(elapsed) * target));
      if (elapsed < 1) requestAnimationFrame(tick);
    });

    return () => cancelAnimationFrame(raf);
  }, [isInView, target]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  const reference = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = reference.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
