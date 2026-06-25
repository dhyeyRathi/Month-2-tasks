import React from "react";
import { motion } from "motion/react";
import StatsSection from "../components/layout/StatsSection";

const About = () => {
  const team = [
    {
      name: "Lior Amari",
      role: "Founder & Creative Director",
      description:
        "Eighteen years designing celebrations across four continents.",
      image: "/images/people/LiorAmari.jpg",
    },
    {
      name: "Camille Devereaux",
      role: "Head of Design",
      description:
        "Former editor at Vogue Living, now shaping our visual language.",
      image: "/images/people/CamilleDevereaux.jpg",
    },
    {
      name: "Henri Marchetti",
      role: "Director of Production",
      description:
        "Logistics maestro, fluent in five languages and every venue's quirks.",
      image: "/images/people/HenriMarchetti.jpg",
    },
  ];
  return (
    <div className="bg-ivory font-light">
      {/* title */}
      <section className="relative pt-40 pb-32 font-light bg-ivory">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-end"
        >
          <div
            style={{ opacity: 1, transform: "none" }}
            className="lg:col-span-7"
          >
            <p className="eyebrow">— The Atelier</p>

            <h1 className="font-heading text-espresso text-6xl md:text-8xl mt-6 leading-[0.95]">
              <span className="block">
                An atelier of{" "}
                <em className="italic" style={{ color: "#b89154" }}>
                  attentive
                </em>{" "}
                design.
              </span>
            </h1>
          </div>

          <div
            style={{ opacity: 1, transform: "none" }}
            className="lg:col-span-5"
          >
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              Founded in 2008 by Lior Amari in a quiet Parisian courtyard,
              Maison Lior is built on a single conviction: that a wedding should
              feel like the truest version of the couple at its center.
            </p>
          </div>
        </motion.div>
      </section>

      {/* image */}
      <section className="bg-ivory pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12"
        >
          <div className="aspect-[16/9] image-zoom overflow-hidden">
            <img
              src="/images/brideholdingwhiteflowers.jpg"
              alt="Bride at window"
              className="h-full w-full object-cover hover:scale-105 transition-all duration-800 ease-in-out"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </section>

      {/* what we believe */}
      <section className="bg-champagne/40 py-32">
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div
            className="lg:col-span-4"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="eyebrow">— Philosophy</p>

            <h2 className="font-heading text-espresso text-4xl md:text-5xl mt-4">
              <span className="block">What we believe.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div style={{ opacity: 1, transform: "none" }}>
              <h3 className="font-heading text-2xl italic">
                Restraint over spectacle
              </h3>
              <p className="text-muted-foreground mt-3 font-body leading-relaxed max-w-2xl">
                The most luxurious thing in a room is space. We design with
                breathing room — empty chairs, quiet corners, candles allowed to
                burn down.
              </p>
            </div>

            <div style={{ opacity: 1, transform: "none" }}>
              <h3 className="font-heading text-2xl italic">
                Couples first, always
              </h3>
              <p className="text-muted-foreground font-body  mt-3 leading-relaxed max-w-2xl">
                Our work is never about us. It is shaped entirely around the two
                people getting married, and the world they want to gather around
                them.
              </p>
            </div>

            <div style={{ opacity: 1, transform: "none" }}>
              <h3 className="font-heading text-2xl italic">
                Beauty earned slowly
              </h3>
              <p className="text-muted-foreground mt-3 font-body  leading-relaxed max-w-2xl">
                We resist the trend cycle. The aesthetic choices we make are
                built to feel as right in twenty years as they do on the day.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* team */}
      <section className="bg-ivory py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div>
            <p className="eyebrow">— The team</p>

            <h2 className="text-5xl md:text-6xl mt-4">
              <span className="block font-heading text-espresso">
                Hands that shape your day.
              </span>
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-x-6 gap-y-16">
            {team.map((member, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.3 * (index + 1) }}
                viewport={{ once: true }}
                key={index}
              >
                <div className="aspect-[4/5] image-zoom overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-all duration-800 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-heading tex-espresso text-2xl mt-6">
                  {member.name}
                </h3>

                <p className="eyebrow text-gold mt-2">{member.role}</p>

                <p className="text-sm text-muted-foreground mt-4 font-body leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* stats */}
      <StatsSection/>
    </div>
  );
};

export default About;
