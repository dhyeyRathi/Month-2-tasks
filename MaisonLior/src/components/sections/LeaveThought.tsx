import React, { useState } from "react";
import { useFadeInUp } from "../ui/FadeInUp";

const LeaveThought = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: "", message: "" };

    if (!name.trim()) {
      newErrors.name = "Field is empty";
      hasError = true;
    }
    if (!message.trim()) {
      newErrors.message = "Field is empty";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Form submitted");
    }
  };

  const { ref, visible } = useFadeInUp();

  return (
    <section className="bg-champagne/50 py-24">
      <div
        ref={ref}
        className={`fade-in-up${visible ? " visible" : ""} mx-auto max-w-2xl px-6`}
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-serif text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-base placeholder:text-foreground/40 ${errors.name ? "border-destructive text-destructive" : "border-foreground/30 focus:border-gold"}`}
              />
              {errors.name && <p className="text-destructive text-sm mt-2">{errors.name}</p>}
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Your message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors resize-none font-serif text-lg italic placeholder:not-italic placeholder:font-sans placeholder:text-sm placeholder:text-foreground/40 ${errors.message ? "border-destructive text-destructive" : "border-foreground/30 focus:border-gold"}`}
              />
              {errors.message && <p className="text-destructive text-sm mt-2">{errors.message}</p>}
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
      </div>
    </section>
  );
};

export default LeaveThought;
