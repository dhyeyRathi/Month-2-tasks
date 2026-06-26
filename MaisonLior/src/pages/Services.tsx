import { Helmet } from "react-helmet-async";
import ServiceCard, { packages } from "../components/ui/ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Bridal Assistance",
      description:
        "Personal styling, fittings, and day-of attention from a dedicated lead.",
      image: "/images/brideholdingwhiteflowers.jpg",
    },
    {
      id: "02",
      title: "Catering Curation",
      description:
        "Menus designed with Michelin-trained chefs and seasonal sourcing.",
      image: "/images/brideholdinpinkflowers.jpg",
    },
    {
      id: "03",
      title: "Decor & Floral Styling",
      description:
        "Bespoke design direction with editorial florals and tactile textures.",
      image: "/images/CandlesOnTable.jpg",
    },
    {
      id: "04",
      title: "Destination Weddings",
      description:
        "Curated celebrations in Europe's most romantic estates and coastlines.",
      image: "/images/SunTyndalThroughDecor.jpg",
    },
    {
      id: "05",
      title: "Entertainment & Music",
      description:
        "From string quartets to headline DJs — every cue, perfectly timed.",
      image: "/images/acoupledancing.jpg",
    },
    {
      id: "06",
      title: "Full Wedding Planning",
      description:
        "End-to-end orchestration of every detail, from concept to last dance.",
      image: "/images/GateWithWhiteFlowers.jpg",
    },
    {
      id: "07",
      title: "Photography Coordination",
      description:
        "We pair you with photographers whose eye matches your story.",
      image: "/images/bridenearsea.jpg",
    },
    {
      id: "08",
      title: "Venue Management",
      description:
        "Sourcing, negotiation, and stewardship of unforgettable settings.",
      image: "/images/PeopleHavingAFeast.jpg",
    },
  ];
  return (
    <div className="font-light">
      <Helmet>
        <title>Services | Maison Lior</title>
        <meta name="description" content="Services we provide to plan and enhance your happy moments" />
      </Helmet>
      {/* hero */}
      <section className="pt-40 pb-24 bg-ivory ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12"
        >
          <div
            style={{
              opacity: 1,
              transform: "none",
            }}
          >
            <p className="eyebrow">— Services</p>

            <h1 className="font-heading text-espresso text-6xl md:text-8xl mt-6 max-w-4xl leading-[1]">
              <span className="block">
                From the first{" "}
                <em className="italic" style={{ color: "rgb(184, 145, 84)" }}>
                  spark
                </em>{" "}
                to the last dance.
              </span>
            </h1>
          </div>
        </motion.div>
      </section>

      {/* services */}
      <section className="bg-ivory pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={service.id}
            >
              <div
                className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 border-t border-border ${
                  index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="aspect-[4/5] image-zoom overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover hover:scale-105 transition-all duration-800 ease-in-out"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 lg:px-12">
                  <p className="eyebrow text-gold">{service.id}</p>

                  <h2 className="font-heading text-espresso text-4xl md:text-5xl mt-4">
                    {service.title}
                  </h2>

                  <p className="mt-6 text-lg  font-body text-muted-foreground leading-relaxed max-w-xl">
                    {service.description}
                  </p>

                  <p className="mt-6 text-muted-foreground font-body leading-relaxed max-w-xl">
                    Every engagement is custom. We share preliminary direction
                    within two weeks of our discovery call, then iterate until
                    the vision is unmistakably yours.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* service cards */}
      <section className="bg-champagne/60 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12"
        >
          <div
            style={{
              opacity: 1,
              transform: "none",
            }}
          >
            <p className="eyebrow">— Investment</p>

            <h2 className="font-heading text-espresso text-5xl md:text-6xl mt-4 max-w-2xl">
              <span className="block">Three ways to begin.</span>
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                style={{
                  opacity: 1,
                  transform: "none",
                }}
              >
                <ServiceCard {...pkg} />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
