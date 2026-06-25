import { useState } from "react";
import { motion } from "motion/react";

import couplesData from "../data/couples.json";
import Card from "../components/ui/Card";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", ...Array.from(new Set(couplesData.map((item) => item.type))).sort(),];

  const filteredData =
    selectedFilter === "All"
      ? couplesData
      : couplesData.filter((item) => item.type === selectedFilter);

  const middle = Math.ceil(filteredData.length / 2);

const leftColumn = filteredData.slice(0, middle);
const rightColumn = filteredData.slice(middle);

  return (
    <div className="bg-ivory font-light">
      <section className="pt-40 pb-16 bg-ivory font-light">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12"
        >
          <div style={{ opacity: 1, transform: "none" }}>
            <p className="eyebrow">— Portfolio</p>

            <h1 className=" text-6xl md:text-8xl mt-6 max-w-4xl text-espresso tracking-[-0.02em] font-heading">
              <span className="block">
                A quiet archive of{" "}
                <em className="italic" style={{ color: "rgb(184, 145, 84)" }}>
                  love.
                </em>
              </span>
            </h1>
          </div>
        </motion.div>
      </section>

      {/* cards and routings */}

      {/* Portfolio Grid */}
      <section className="bg-ivory pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mt-16 flex flex-wrap gap-3 border-t border-border pt-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border font-body transition-colors ${
                    selectedFilter === filter
                      ? "bg-foreground text-ivory border-foreground"
                      : "border-border hover:border-foreground"
                  }`}
                  onClick={() => {
                    console.log(filter);
                    setSelectedFilter(filter);
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="space-y-20">
              {leftColumn.map((couple, index) => (
                <Card key={couple.id} couple={couple} index={index} variant="portfolio"/>
              ))}
            </div>

            <div className="space-y-20 md:mt-24">
              {rightColumn.map((couple, index) => (
                <Card key={couple.id} couple={couple} index={index} variant="portfolio"/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
