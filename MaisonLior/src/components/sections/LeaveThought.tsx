import React from "react";
import {motion} from "motion/react"

const LeaveThought = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="bg-champagne/50 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl px-6"
      >
        <div>
          <p className="eyebrow">— A note</p>

          <h2 className="font-heading text-espresso text-3xl md:text-4xl mt-4">
            Leave a thought.
          </h2>

          <p className="mt-4 font-body text-sm text-muted-foreground">
            Thoughts are reviewed before appearing here.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 font-body space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-serif text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 border-foreground/30 focus:border-gold"
              />
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors resize-none font-serif text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-sm placeholder:text-foreground/40 border-foreground/30 focus:border-gold"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-3 px-8 py-3 text-xs tracking-[0.25em] uppercase border border-foreground hover:bg-foreground hover:text-ivory transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send
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
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default LeaveThought;
