import { motion } from "motion/react";

export default function CTA() {
  const images = [
    "/images/GateWithWhiteFlowers.jpg",
    "/images/bridenearsea.jpg",
    "/images/CandlesOnTable.jpg",
    "/images/brideholdinpinkflowers.jpg",
    "/images/PeopleHavingAFeast.jpg",
    "/images/acoupledancing.jpg",
    "/images/brideholdingwhiteflowers.jpg",
    "/images/SunTyndalThroughDecor.jpg",
  ];

  return (
    <section className="bg-ivory py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div style={{ opacity: 1, transform: "none" }}>
            <p className="eyebrow">— Moments</p>

            <h2 className=" text-5xl md:text-6xl mt-4">
              <span className="block font-heading">From the lens.</span>
            </h2>
          </div>

          <div style={{ opacity: 1, transform: "none" }}>
            <a
              href="https://instagram.com"
              className="text-xs tracking-[0.25em] uppercase font-body font-light border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </motion.div>

       <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {/* Big left image */}
          <div
            className="md:row-span-2 aspect-[3/4] md:aspect-[3/5]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="h-full image-zoom overflow-hidden">
              <img
                src={images[0]}
                alt="Wedding moment"
                className="h-full w-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>

          {/* Small images */}
          {images.slice(1, 5).map((img, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="h-full image-zoom overflow-hidden">
                <img
                  src={img}
                  alt="Wedding moment"
                  className="h-full w-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out"
                />
              </div>
            </div>
          ))}

          {/* Big right image */}
          <div
            className="md:row-span-2 aspect-[3/4] md:aspect-[3/5]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="h-full image-zoom overflow-hidden">
              <img
                src={images[5]}
                alt="Wedding moment"
                className="h-full w-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>

          {/* Remaining small images */}
          {images.slice(6).map((img, i) => (
            <div
              key={i + 6}
              className="aspect-square overflow-hidden"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="h-full image-zoom">
                <img
                  src={img}
                  alt="Wedding moment"
                  className="h-full w-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
