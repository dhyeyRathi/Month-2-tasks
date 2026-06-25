
import Hero from "../components/sections/Hero";
import services from "../data/services.json";
import Button from "../components/ui/Button";
import { NavLink } from "react-router-dom";
import pfs from "../data/couples.json";
import {  motion } from "motion/react";
import StatsSection from "../components/layout/StatsSection";
import { Star, ArrowRight } from "lucide-react";
import CTA from "../components/sections/CTA"
import Card from "../components/ui/Card";
import arrowRight from "/icons/arrow-right.svg";



const Home = () => {
  const selectedIds = ["06", "04", "03", "08"];
  const portfolios = ["01", "02", "03", "04"];


  const homeServices = selectedIds.map((id) =>
    services.find((service) => service.id === id),
  );

  const homeStories = portfolios.map((id) => pfs.find((pf) => pf.id === id));

  return (
    <div className="">
      <Hero variant="home">
        <div className="relative z-10 max-w-[1400px] h-full flex flex-col pb-24 lg:pb-32 justify-end mx-auto px-6 lg:px-12">
        <p className="eyebrow">Wedding Atelier · Est. 2008</p>
        <h1 className="  text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[1.02] text-ivory font-heading max-w-5xl mt-6 -tracking-[0.02em]">
          <span className="block ">
            Weddings,{" "}
            <span className="italic text-[#b89154] font-heading font-[300] ">
              composed
            </span>{" "}
            like a love letter.
          </span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button
            className="inline-flex items-center gap-3 px-8 py-4 bg-ivory text-foreground text-xs tracking-[0.25em] uppercase hover:bg-champagne transition-colors"
            
          >
           <NavLink to="/contact">Begin your story{" "}</NavLink> 
            
            <img src={arrowRight} className="w-4 h-4"/>
          </Button>
          <a
            className="text-ivory/90 text-xs tracking-[0.25em] uppercase border-b border-ivory/40 pb-1 hover:text-champagne hover:border-champagne transition-colors"
            href="/portfolio"
          >
            View our weddings
          </a>
        </div>
        </div>
      </Hero>
      {/* text section */}
      <section className="bg-ivory py-32 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-3 ">
            <p className="eyebrow">— A few words</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-9 "
          >
            <p className=" text-3xl md:text-5xl lg:text-6xl font-heading text-espresso font-thin tracking-[-0.02em]">
              <span className="block tracking-[-0.25]">
                We design <em className="italic text-gold ">a dozen</em>{" "}
                weddings each year — no more — for couples who value craft over
                spectacle, and presence over performance.
              </span>
            </p>
            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="h-px w-12 bg-gold"></div>
              <p className="">Lior Amari, Founder</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* services section */}
      <section className="bg-champagne/40 py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          >
            <div>
              <p className="eyebrow">— What we do</p>
              <h2 className=" text-5xl md:text-6xl font-heading text-espresso mt-4 max-w-xl">
                <span className="block font-heading ">
                  Services tailored to your story.
                </span>
              </h2>
            </div>
            <div>
              <a
                className="text-xs tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-colors"
                href="/services"
              >
                All services
              </a>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {homeServices.map((services, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.2 * (index + 1) }}
                viewport={{ once: true }}
                key={services?.id}
              >
                <a className="group block" href="/services">
                  <div className="aspect-[3/4] image-zoom overflow-hidden">
                    <img
                      alt="Venue Management"
                      className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
                      loading="lazy"
                      src={services?.image}
                    />
                  </div>
                  <p className="eyebrow text-gold mt-6">0{index + 1}</p>
                  <h3 className="font-heading text-2xl mt-2 group-hover:text-gold transition-colors">
                    {services?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {services?.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* home our stories section */}
  <section className="bg-ivory py-32">
  <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="eyebrow">— Featured weddings</p>

      <h2 className=" text-5xl md:text-6xl mt-4">
        <span className="block font-heading">Stories worth telling.</span>
      </h2>
    </motion.div>

    {/* Cards */}
    <div className="mt-20 grid md:grid-cols-2 gap-x-6 gap-y-20">
      {homeStories.map((couple, index) =>
        couple ? (
          <div
            key={couple.id}
            className={index % 2 !== 0 ? "md:mt-24" : ""}
          >
            <Card couple={couple} index={index} variant="home"/>
          </div>
        ) : null
      )}
    </div>

    {/* CTA */}
    <div className="mt-20 text-center">
      <Button className="inline-flex items-center group gap-3 px-8 py-4 border border-foreground text-xs tracking-[0.25em] uppercase hover:bg-foreground hover:text-ivory transition-colors">
        <NavLink
          to="/portfolio"
          className="flex justify-center items-center gap-2"
        >
          The full portfolio

          <div className="w-6 h-6 relative scale-70">
            <div className="absolute inset-0 bg-black mask-arrow-1" />
            <div className="absolute inset-0 w-0 group-hover:w-full bg-white mask-arrow-1 transition-all duration-100" />
          </div>
        </NavLink>
      </Button>
    </div>
  </div>
</section>

    {/* numbers section */}
    <StatsSection></StatsSection>

    {/* text section */}
    <section className="bg-ivory py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ opacity: 1, transform: "none" }}>
          <p className="eyebrow">— The process</p>

          <h2 className=" text-5xl md:text-6xl mt-4 max-w-2xl">
            <span className="block font-heading text-espresso">Five movements, gently composed.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-5 gap-8 md:gap-4">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-border pt-6"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="font-heading text-2xl text-gold italic">I</p>
            <h3 className="font-heading text-2xl mt-4 font-heading text-espresso">Discovery</h3>
            <p className="text-sm text-muted-foreground mt-3 font-body leading-relaxed">
              An unhurried conversation to learn your story, taste, and dream.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-border pt-6"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="font-heading text-2xl text-gold italic">II</p>
            <h3 className="text-2xl mt-4 font-heading text-espresso">Design</h3>
            <p className="text-sm text-muted-foreground mt-3 font-body leading-relaxed">
              Moodboards, palette, paper goods, and a full creative direction.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="border-t border-border pt-6"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="font-heading text-2xl text-gold italic">III</p>
            <h3 className="font-heading text-2xl mt-4  text-espresso">Curation</h3>
            <p className="text-sm text-muted-foreground mt-3 font-body leading-relaxed">
              We assemble the right vendors, venues, and craftspeople for you.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="border-t border-border pt-6"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="font-heading text-2xl text-gold italic">IV</p>
            <h3 className="font-heading text-2xl mt-4 text-espresso">Production</h3>
            <p className="text-sm text-muted-foreground mt-3 font-body leading-relaxed">
              Detailed run-of-show, rehearsals, and on-site orchestration.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
            className="border-t border-border pt-6"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="font-heading text-2xl text-gold italic">V</p>
            <h3 className="font-heading text-2xl mt-4 text-espresso">Celebration</h3>
            <p className="text-sm text-muted-foreground mt-3 font-body leading-relaxed">
              You are present. We hold every thread so you don&apos;t have to.
            </p>
          </motion.div>

        </div>
      </div>
    </section>


    {/* testimonial section */}
    <section className="relative py-40 overflow-hidden">
      <motion.div className="absolute inset-0">
        <img
          src="https://cdn.sanity.io/images/xfzlvuer/production/2dfa20a0c53cdee61d35245d5b495a9fd648d85d-1280x1600.jpg?w=1600&q=80&auto=format"
          alt="Wedding tablescape"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-ivory/85"></div>
      </motion.div>

       <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl px-6 text-center">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="flex justify-center gap-1 text-gold mb-8">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>

          <p className=" text-3xl md:text-5xl font-heading leading-[1.2] italic">
            “Maison Lior turned our wedding into a piece of art. Every detail
            felt considered, every moment intentional. We still receive notes
            from guests about it.”
          </p>

          <p className="mt-10 eyebrow text-gold">
            — Elena & Marco, Lake Como
          </p>
        </div>
      </motion.div>
    </section>

    {/* CTA INSTAGRAM */}
    <CTA></CTA>


    {/* extra footer */}
    <section className="bg-espresso text-ivory py-40">
      <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-end">
        <div
          className="lg:col-span-8"
          style={{ opacity: 1, transform: "none" }}
        >
          <p className="eyebrow text-gold">— Begin</p>

          <h2 className=" text-5xl md:text-7xl mt-6 font-heading tracking-[-0.02em] leading-[1.05]">
            <span className="block">
              When you're ready,{" "}
              <em className="italic" style={{ color: "#b89154" }}>
                we'd love to listen.
              </em>
            </span>
          </h2>
        </div>

        <div
          className="lg:col-span-4 lg:text-right"
          style={{ opacity: 1, transform: "none" }}
        >
          <p className="text-ivory/70 max-w-sm lg:ml-auto font-body leading-relaxed">
            We accept a small number of weddings each year. Tell us about yours.
          </p>

          <a
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-champagne text-foreground text-xs tracking-[0.25em] uppercase hover:bg-ivory transition-colors"
            href="/contact"
          >
            Make an enquiry
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>

    </div>

  );
};

export default Home;
