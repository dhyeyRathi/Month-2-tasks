import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import couples from "../data/couples.json";
import Hero from "../components/sections/Hero";
import FadeInUp from "../components/ui/FadeInUp";
import SeoSchema from "../components/SeoSchema";

const CouplePage = () => {
  const { slug } = useParams();

  const couple: any = couples.find((item) => item.slug === slug);

  const currentIndex = couples.findIndex((couple) => couple.slug === slug);

  const previousCouple = currentIndex > 0 ? couples[currentIndex - 1] : null;

  const nextCouple =
    currentIndex < couples.length - 1 ? couples[currentIndex + 1] : null;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <SeoSchema type="couple" data={couple} />
      <Helmet>
        <title>
          {couple ? `${couple.couples} | Maison Lior` : "Maison Lior"}
        </title>
        <meta name="description" content={`${couple.type} * ${couple.location} * ${couple.year}`} />
      </Helmet>
      {/* hero */}
      <Hero variant="couple" img={couple?.coverImage}>
        <div className="relative z-10 mx-auto max-w-[1400px] h-full px-6 lg:px-12 flex flex-col justify-end pb-20">
          <Link
            onClick={handleClick}
            className="text-ivory/80 text-xs tracking-[0.25em] font-body uppercase inline-flex items-center gap-2 mb-8 hover:text-champagne transition-colors"
            to="/portfolio"
          >
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
              className="h-3 w-3"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            All weddings
          </Link>

          <p className="eyebrow text-champagne">
            {couple.location} · {couple.year}
          </p>

          <h1 className=" text-ivory text-[14vw] md:text-[8vw] lg:text-[7vw] italic leading-none tracking-[-0.025em] mt-4 font-heading">
            {couple.couples}
          </h1>
        </div>
      </Hero>

      {/* story section */}
      <section className="bg-ivory py-32 font-body">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div
            className="lg:col-span-4"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="eyebrow">— The story</p>
          </div>

          <div
            className="lg:col-span-8"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className=" text-3xl md:text-4xl font-heading text-espresso leading-[1.2]">
              “{couple.description}”
            </p>

            <p className="mt-8 text-muted-foreground leading-relaxed">
              We spent eighteen months designing this celebration with the
              couple — from the first conversation in our Paris studio to the
              final goodnight at the villa. The result was a three-day weekend
              that felt utterly theirs: tactile, slow, candlelit, and entirely
              free of spectacle.
            </p>

            <dl className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-border pt-12">
              <div>
                <dt className="eyebrow">Venue</dt>
                <dd className="font-heading text-espresso text-xl mt-2 italic">
                  Villa del Balbianello
                </dd>
              </div>

              <div>
                <dt className="eyebrow">Guests</dt>
                <dd className="font-heading text-espresso text-xl mt-2 italic">
                  {couple.guestsInvited} invited
                </dd>
              </div>

              <div>
                <dt className="eyebrow">Duration</dt>
                <dd className="font-heading text-espresso text-xl mt-2 italic">
                  Three days
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="bg-champagne/60 py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div style={{ opacity: 1, transform: "none" }}>
            <p className="eyebrow">— The day</p>
            <h2 className="font-heading text-espresso text-5xl md:text-6xl mt-4">
              A timeline.
            </h2>
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            {(
              Object.entries(couple.timeline) as [
                string,
                { title: string; description: string },
              ][]
            ).map(([time, details]) => (
              <FadeInUp 
                key={time}
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 py-8 border-t border-border last:border-b">
                  <p className="font-heading  text-2xl italic text-gold">
                    {time}
                  </p>

                  <div>
                    <h3 className="font-heading text-espresso text-2xl">
                      {details.title}
                    </h3>

                    <p className="text-muted-foreground mt-2">
                      {details.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* gallery */}
      <section className="bg-ivory py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div>
            <p className="eyebrow">— Gallery</p>
            <h2 className=" font-heading text-espresso text-5xl md:text-6xl mt-4">
              Moments from the weekend.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {couple.images.map((src: string, index: number) => {
              const isLarge = index === 0 || index === 5;

              return (
                <FadeInUp key={index}>
                  <button
                    aria-label="Open image"
                    className={`relative overflow-hidden cursor-zoom-in group w-full h-full ${
                      isLarge ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/5]"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/15 transition-colors duration-300" />
                  </button>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* review */}
      <section className="bg-espresso text-ivory py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeInUp 
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="font-heading text-3xl md:text-4xl italic leading-[1.3]">
              “Maison Lior turned our wedding into a piece of art. Every detail
              felt considered, every moment intentional. We still receive notes
              from guests about it.”
            </p>

            <p className="mt-10 eyebrow text-champagne">— {couple.couples}</p>
          </FadeInUp>
        </div>
      </section>

      {/* next section */}
      <section className="bg-ivory py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {previousCouple ? (
            <Link
              onClick={handleClick}
              className="group text-left"
              to={`/portfolio/${previousCouple.slug}`}
            >
              <p className="eyebrow text-gold">Previous wedding</p>

              <p className="font-heading text-espresso text-2xl italic mt-2 group-hover:text-gold transition-colors inline-flex items-center gap-3">
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
                  aria-hidden="true"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>

                {previousCouple.couples}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {/* Back to Portfolio */}
          <Link
            onClick={handleClick}
            className="eyebrow inline-flex items-center gap-2 hover:text-gold transition-colors"
            to="/portfolio"
          >
            All weddings
          </Link>

          {nextCouple ? (
            <Link
              onClick={handleClick}
              className="group text-right"
              to={`/portfolio/${nextCouple.slug}`}
            >
              <p className="eyebrow text-gold">Next wedding</p>

              <p className="font-heading text-espresso  text-2xl italic mt-2 group-hover:text-gold transition-colors inline-flex items-center gap-3">
                {nextCouple.couples}

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
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
};

export default CouplePage;
