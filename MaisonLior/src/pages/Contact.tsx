import { useState } from "react";
import FadeInUp from "../components/ui/FadeInUp";
import { Helmet } from "react-helmet-async";
import SeoSchema from "../components/SeoSchema";

const faqData = [
  {
    question: "How far in advance should we book?",
    answer:
      "Most couples reserve us 12–18 months ahead, though we accept a small number of short-notice weddings each year.",
  },
  {
    question: "Do you travel internationally?",
    answer:
      "Yes. Roughly half of our weddings take place outside our home studio, primarily across Europe and the Mediterranean.",
  },
  {
    question: "What is your typical investment?",
    answer:
      "Our full-service celebrations begin at €45,000 in planning fees, with total wedding budgets typically ranging from €150,000 upward.",
  },
  {
    question: "Do you offer partial planning?",
    answer:
      "We offer a refined month-of coordination package for couples who have planned independently and need a steady hand for execution.",
  },
  {
    question: "How many weddings do you take per year?",
    answer: "A maximum of twelve. We believe in deep attention over volume.",
  },
  {
    question: "Can you work with our existing vendors?",
    answer:
      "Absolutely. We collaborate with vendors you love and supplement with our trusted network where helpful.",
  },
];
const Contact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    partnerName: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    location: "",
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your first name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    }
    if (!formData.details.trim()) {
      newErrors.details = "Please tell us a little about your day.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle successful submission
      console.log("Form submitted", formData);
    }
  };
  return (
    <div className="">
      <SeoSchema type="contact" />
      <Helmet>
        <title>Contact Us | Maison Lior</title>
        <meta
          name="description"
          content="Contact us for Queries, Quotes and Bookings."
        />
      </Helmet>
      {/* header */}
      <section className="pt-40 pb-20 bg-ivory">
        <FadeInUp
          className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-end"
        >
          <div className="lg:col-span-8">
            <p className="eyebrow">— Enquiries</p>

            <h1 className="font-heading text-espresso text-6xl md:text-8xl mt-6 tracking-[-0.025em] leading-[0.95]">
              <span className="block">
                We&apos;d <em className="italic text-gold">love</em> to hear
                about your day.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-muted-foreground font-body leading-relaxed">
              Tell us a little about yourselves and your wedding. We respond to
              every enquiry personally, within three days.
            </p>
          </div>
        </FadeInUp>
      </section>
      {/* feedback form */}
      <section className="bg-ivory pb-32">
        <FadeInUp
          className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-16"
        >
          {/* Left */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8 font-body">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="eyebrow block mb-3">First name *</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Elena"
                    className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-heading text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 ${errors.firstName
                      ? "border-destructive text-destructive"
                      : "border-foreground/30 focus:border-gold"
                      }`}
                  />
                  {errors.firstName && (
                    <p className="text-destructive text-sm mt-2">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="eyebrow block mb-3">
                    Partner&apos;s name
                  </label>
                  <input
                    name="partnerName"
                    value={formData.partnerName}
                    onChange={handleChange}
                    placeholder="Marco"
                    className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-heading text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 border-foreground/30 focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="eyebrow block mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-heading text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 ${errors.email
                      ? "border-destructive text-destructive"
                      : "border-foreground/30 focus:border-gold"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="eyebrow block mb-3">Phone</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 ..."
                    className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-heading text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 border-foreground/30 focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="eyebrow block mb-3">
                    Wedding date or season
                  </label>
                  <input
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="June 2027"
                    className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-heading text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 border-foreground/30 focus:border-gold"
                  />
                </div>

                <div>
                  <label className="eyebrow block mb-3">Estimated guests</label>
                  <input
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="80"
                    className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-heading text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 border-foreground/30 focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="eyebrow block mb-3">
                  Where would you like to celebrate?
                </label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Lake Como, the Cotswolds..."
                  className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-heading text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 border-foreground/30 focus:border-gold"
                />
              </div>

              <div>
                <label className="eyebrow block mb-3">
                  Tell us about your day *
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={6}
                  placeholder="The feeling, the people..."
                  className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors resize-none font-heading text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-sm placeholder:text-foreground/40 ${errors.details
                    ? "border-destructive text-destructive"
                    : "border-foreground/30 focus:border-gold"
                    }`}
                />
                {errors.details && (
                  <p className="text-destructive text-sm mt-2">{errors.details}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-ivory text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-foreground transition-colors"
              >
                SEND ENQUIRY
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right */}
          <div className="lg:col-span-5 space-y-12">
            <div className="aspect-[4/5] image-zoom overflow-hidden">
              <img
                src="/images/brideholdinpinkflowers.webp"
                alt="Wedding bouquet"
                className="h-full w-full object-cover hover:scale-105 transition-all duration-800 ease-in-out"
              />
            </div>

            <div className="space-y-6 text-sm tracking-[0.025em]">
              <div>
                <p className="eyebrow">Studio</p>
                <div className="flex items-center gap-2 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold shrink-0">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="font-heading text-lg italic">
                    14 Rue de Sévigné, 75004 Paris
                  </p>
                </div>
              </div>

              <div>
                <p className="eyebrow">By telephone</p>
                <div className="flex items-center gap-2 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <p className="font-heading text-lg italic">
                    +33 1 42 78 00 00
                  </p>
                </div>
              </div>

              <div>
                <p className="eyebrow">By letter</p>
                <div className="flex items-center gap-2 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <p className="font-heading text-lg italic">
                    hello@maisonlior.com
                  </p>
                </div>
              </div>

              <div>
                <p className="eyebrow">Follow</p>
                <div className="flex items-center gap-2 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold shrink-0">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <p className="font-heading text-lg italic">@maisonlior</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* map section */}
      <section className="bg-ivory pb-32">
        <FadeInUp
          className="mx-auto max-w-[1400px] px-6 lg:px-12"
        >
          <div className="aspect-[21/9] overflow-hidden border border-border">
            <iframe
              title="Studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.358%2C48.853%2C2.368%2C48.860&layer=mapnik&marker=48.8566%2C2.3522"
              className="h-full w-full grayscale-[40%] sepia-[10%]"
              loading="lazy"
            />
          </div>
        </FadeInUp>
      </section>
      {/* FAQs */}
      <section className="bg-champagne/50 py-32">
        <FadeInUp
          className="mx-auto max-w-4xl px-6">
          <div>
            <p className="eyebrow">— Frequently asked</p>

            <h2 className="font-heading text-espresso text-5xl md:text-6xl mt-4">
              <span className="block">Questions, gently answered.</span>
            </h2>
          </div>

          <div className="mt-16">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <FadeInUp
                  key={index}
                  className="border-t border-foreground/15 last:border-b"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-7 text-left gap-6"
                  >
                    <span className="font-heading text-xl md:text-2xl">
                      {faq.question}
                    </span>

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
                      className={`h-5 w-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                        }`}
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 pb-6" : "max-h-0"
                      }`}
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </FadeInUp>
      </section>
    </div>
  );
};

export default Contact;
