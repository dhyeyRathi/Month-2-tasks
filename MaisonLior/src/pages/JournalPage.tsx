import { useParams, Link } from "react-router-dom";
import journalData from "../data/journals.json";
import FadeInUp from "../components/ui/FadeInUp";
import LeaveThought from "../components/sections/LeaveThought";
import { Helmet } from "react-helmet-async";
import SeoSchema from "../components/SeoSchema";
import NotFound from "../components/layout/PathNotFound";


const JournalPage = () => {
  const { url } = useParams();

  const journal = journalData.find((item) => item.url === url);

  if (!journal) {
    return <NotFound />;
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const article = journalData.find((journal) => journal.url === url);
  return (
    <div>
      <SeoSchema type="article" data={article} />
      <Helmet>
  <title>{journal ? `${journal.title} | Maison Lior` : "Maison Lior"}</title>
  <meta
    name="description"
    content={`Explore ${journal.title}, a beautiful wedding story captured by Maison Lior as ${journal.category}.`}
  />
</Helmet>
      <article className="bg-ivory pt-40 pb-24 ">
        {/* Header */}
        <header className="mx-auto max-w-3xl px-6 text-center">
          <FadeInUp 
            >
            <Link
              to="/journal"
              onClick={handleClick}
              className="eyebrow inline-flex items-center gap-2 hover:text-gold transition-colors"
            >
              ← The Journal
            </Link>

            <p className="eyebrow text-gold mt-8">
              {journal.category} · {journal.date} · {journal.readTime}
            </p>

            <h1 className="font-heading text-espresso text-5xl md:text-7xl mt-6 leading-[1.05]">
              {journal.title}
            </h1>

            <p className="mt-8 font-body text-lg text-muted-foreground italic font-serif">
              {journal.description}
            </p>
          </FadeInUp>
        </header>

        {/* Hero Image */}
        <FadeInUp 
          className="mt-16"
        >
          <div className="mx-auto max-w-[1100px] px-6 aspect-[16/9]">
            <img
              src={journal.image}
              alt={journal.title}
              className="h-full w-full object-cover"
            />
          </div>
        </FadeInUp>

        {/* Hardcoded Article Content */}
        <div className="mx-auto max-w-2xl px-6 mt-20 text-lg leading-[1.85] text-foreground/85 space-y-7 font-heading">
          <p>
            There is a question we ask every couple in our first meeting: what
            do you want your guests to feel when they walk in? The answers are
            almost never about a centerpiece or a color.
          </p>

          <p>
            We build celebrations backwards from those answers. The flowers come
            later, and they come naturally, because the feeling has already been
            decided.
          </p>

          <h2 className="font-heading text-3xl md:text-4xl mt-12 mb-4 italic">
            On restraint
          </h2>

          <p>
            The temptation, especially with a generous budget, is to fill every
            surface. But the most luxurious weddings we have ever designed have
            all shared one quality: they breathe.
          </p>

          <blockquote className="border-l-2 border-gold pl-8 my-12 not-italic">
            <p className="font-heading italic text-3xl leading-[1.3]">
              The most luxurious thing in any room is space.
            </p>
          </blockquote>

          <h2 className="font-heading text-3xl md:text-4xl mt-12 mb-4 italic">
            On trust
          </h2>

          <p>
            We accept only twelve weddings per year. It means that when you hire
            us, you receive the entire attention of the studio.
          </p>
        </div>

        {/* Share Section */}
        <FadeInUp 
          className="mx-auto max-w-2xl px-6"
        >
          <div className="pt-12 border-t border-border mt-16">
            <p className="eyebrow mb-4">Share this piece</p>

            <div className="flex gap-4 text-foreground/60">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:hello@maisonlior.com" className="hover:text-gold transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </a>
            </div>
          </div>
        </FadeInUp>
      </article>
      {/* cta */}
      <LeaveThought></LeaveThought>

      <section className="bg-ivory py-24">
        <FadeInUp 
                      className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div>
            <p className="eyebrow">— Continue reading</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-x-6 gap-y-12">
            {/* Card 1 */}
            <div>
              <Link
                to="/journal/planning-a-destination-wedding"
                className="group block"
              >
                <div className="aspect-[4/5] image-zoom overflow-hidden">
                  <img
                    src="/images/SunTyndalThroughDecor.webp"
                    alt="Planning a Destination Wedding Without Losing Yourself"
                    className="h-full w-full object-cover  hover:scale-105 transition-all duration-800 ease-in-out"
                  />
                </div>

                <p className="eyebrow text-gold mt-4">Guides</p>

                <h3 className="font-heading text-2xl mt-2 group-hover:text-gold transition-colors leading-tight">
                  Planning a Destination Wedding Without Losing Yourself
                </h3>
              </Link>
            </div>

            {/* Card 2 */}
            <div>
              <Link
                to="/journal/a-bride-letter-to-herself"
                className="group block"
              >
                <div className="aspect-[4/5] image-zoom overflow-hidden">
                  <img
                    src="/images/brideholdingwhiteflowers.webp"
                    alt="A Bride's Letter to Herself the Morning Of"
                    className="h-full w-full object-cover  hover:scale-105 transition-all duration-800 ease-in-out"
                  />
                </div>

                <p className="eyebrow text-gold mt-4">Inspiration</p>

                <h3 className="font-heading text-2xl mt-2 group-hover:text-gold transition-colors leading-tight">
                  A Bride&apos;s Letter to Herself the Morning Of
                </h3>
              </Link>
            </div>

            {/* Card 3 */}
            <div>
              <Link
                to="/journal/the-rise-of-multi-day-celebrations"
                className="group block"
              >
                <div className="aspect-[4/5] image-zoom overflow-hidden">
                  <img
                    src="/images/PeopleHavingAFeast.webp"
                    alt="The Rise of the Multi-Day Celebration"
                    className="h-full w-full object-cover hover:scale-105 transition-all duration-800 ease-in-out"
                  />
                </div>

                <p className="eyebrow text-gold mt-4">Trends</p>

                <h3 className="font-heading text-2xl mt-2 group-hover:text-gold transition-colors leading-tight">
                  The Rise of the Multi-Day Celebration
                </h3>
              </Link>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
};

export default JournalPage;
