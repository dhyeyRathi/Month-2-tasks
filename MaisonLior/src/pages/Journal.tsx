import journals from "../data/journals.json";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const Journal = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="text-light">
      <Helmet>
        <title>Journal | Maison Lior</title>
        <meta
          name="description"
          content="Read stories from beautiful celebrations, intimate moments, and unforgettable wedding experiences documented by Maison Lior."
        />
      </Helmet>
      {/* header */}
      <section className="pt-40 pb-16 bg-ivory">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12"
        >
          <div style={{ opacity: 1, transform: "none" }}>
            <p className="eyebrow">— The Journal</p>

            <h1 className="font-heading text-espresso text-6xl md:text-8xl mt-6 max-w-4xl tracking-[-0.025em] leading-[1]">
              <span className="block">
                Notes from the{" "}
                <em className="italic" style={{ color: "rgb(184, 145, 84)" }}>
                  atelier.
                </em>
              </span>
            </h1>
          </div>
        </motion.div>
      </section>

      {/* horizantal journal */}
      <section className="bg-ivory pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12"
        >
          <div style={{ opacity: 1, transform: "none" }}>
            <Link
              className="group grid lg:grid-cols-2 gap-10 border-t border-border pt-12"
              to="/journal/0000"
            >
              <div className="aspect-[4/3] image-zoom overflow-hidden">
                <img
                  alt="The Quiet Luxury of Restraint"
                  className="h-full w-full object-cover hover:scale-110 duration-800 transition-all ease-in-out"
                  loading="lazy"
                  decoding="async"
                  src="/images/CandlesOnTable.jpg"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="eyebrow text-gold">Philosophy · May 2026</p>

                <h2 className="font-heading text-espresso text-4xl md:text-5xl mt-4 group-hover:text-gold transition-colors leading-tight">
                  The Quiet Luxury of Restraint
                </h2>

                <p className="text-lg text-muted-foreground mt-6 font-body leading-relaxed">
                  Why the most memorable weddings are often the ones that
                  whisper.
                </p>

                <p className="mt-8 eyebrow inline-flex items-center gap-2">
                  Read · 6 min
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* grid journals */}
      <section className="bg-ivory py-24 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16"
        >
          {journals.slice(1).map((journal, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.3 * (index + 1) }}
              viewport={{ once: true }}
              key={journal.id}
              style={{ opacity: 1, transform: "none" }}
            >
              <Link
                className="group block"
                onClick={handleClick}
                to={`/journal/${journal.url}`}
              >
                <div className="aspect-[4/5] image-zoom overflow-hidden">
                  <img
                    alt={journal.title}
                    className="h-full w-full object-cover hover:scale-110 duration-800 transition-all ease-in-out"
                    loading="lazy"
                    decoding="async"
                    src={journal.image}
                  />
                </div>

                <p className="eyebrow text-gold mt-6">
                  {journal.category} · {journal.date}
                </p>

                <h3 className="font-heading text-espresso text-2xl md:text-3xl mt-3 group-hover:text-gold transition-colors leading-tight">
                  {journal.title}
                </h3>

                <p className="text-muted-foreground font-body text-sm mt-3 leading-relaxed">
                  {journal.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Journal;
