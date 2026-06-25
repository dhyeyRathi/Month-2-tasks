import {  Mail } from "lucide-react";
import { FaFacebookF ,  FaInstagram } from "react-icons/fa";

export default function Footer() {
  const footerImages = [
    "/images/GateWithWhiteFlowers.jpg",
    "/images/bridenearsea.jpg",
    "/images/CandlesOnTable.jpg",
    "/images/brideholdinpinkflowers.jpg",
    "/images/PeopleHavingAFeast.jpg",
    "/images/acoupledancing.jpg",
  ];

  return (
    <footer className="bg-espresso text-ivory font-body font-light">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-gold">Maison Lior</p>

            <h3 className="font-heading tracking-[-0.01em]  text-3xl mt-4 leading-tight">
              Letters from the atelier — once a season, never more.
            </h3>

            <form className="mt-8">
              <div className="flex border-b border-ivory/30 pb-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-ivory placeholder:text-ivory/40 text-sm focus:outline-none"
                />

                <button
                  type="submit"
                  className="text-xs tracking-[0.25em] uppercase text-gold hover:text-ivory transition-colors ml-3 shrink-0"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Studio */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-ivory/50">Studio</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-gold transition-colors">
                  Our story
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-gold transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-gold transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/journal"
                  className="hover:text-gold transition-colors"
                >
                  Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-ivory/50">Contact</p>

            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              <li>14 Rue de Sévigné</li>
              <li>75004 Paris, France</li>
              <li>+33 1 42 78 00 00</li>
              <li>
                <a
                  href="mailto:hello@maisonlior.com"
                  className="hover:text-gold transition-colors"
                >
                  hello@maisonlior.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                className="hover:text-gold transition-colors"
              >
                < FaInstagram  className="h-5 w-5" />
              </a>

              <a
                href="https://facebook.com"
                className="hover:text-gold transition-colors"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href="mailto:hello@maisonlior.com"
                className="hover:text-gold transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-ivory/50">@maisonlior</p>

            <div className="grid grid-cols-3 gap-2 mt-6">
              {footerImages.map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden">
                  <img
                    src={img}
                    alt="Maison Lior"
                    className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>© 2026 Maison Lior. All rights reserved.</p>

          <p className="tracking-[0.25em] uppercase">
            Paris · Como · Provence · Santorini
          </p>
        </div>
      </div>
    </footer>
  );
}