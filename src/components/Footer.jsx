import React from 'react';
import { Mail, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { COMPANY_DETAILS } from '../data/industrialData';

export default function Footer({ onOpenEnquiry }) {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappDefaultMsg
  )}`;

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#202427] text-white relative select-none">
      {/* Subtle Warm-Orange Top Border as specified in 26 */}
      <div className="h-1.5 w-full bg-[#A94728]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Credentials (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white p-2 rounded-md inline-block shadow-sm">
                <img
                  src="/assets/rudhira-logo.png"
                  alt="Rudhira Metal Industries Logo"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-[#D9D9D6] leading-relaxed mb-5 max-w-md">
              Industrial metal products and engineering solutions for demanding applications. Stockist and suppliers of stainless steel, pipes, tubes, forge fittings, flanges, plates, rounds, and all ferrous metals.
            </p>

            <div className="p-3 bg-white/5 rounded-lg border border-white/10 max-w-md">
              <div className="tech-label text-[10px] text-[#A94728] mb-1 font-bold">
                COMMERCIAL SCOPE // VISITING CARD DETAILS
              </div>
              <p className="text-xs font-mono text-[#E7EEF2]/80 leading-relaxed">
                {COMPANY_DETAILS.specialization}
              </p>
            </div>
          </div>

          {/* Column 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <div className="tech-label text-xs text-[#A94728] font-bold tracking-widest uppercase mb-4">
              QUICK NAVIGATION
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, '#hero')}
                  className="text-white/80 hover:text-[#A94728] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#A94728] text-xs">›</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollTo(e, '#why-us')}
                  className="text-white/80 hover:text-[#A94728] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#A94728] text-xs">›</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => scrollTo(e, '#products')}
                  className="text-white/80 hover:text-[#A94728] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#A94728] text-xs">›</span> Products
                </a>
              </li>
              <li>
                <a
                  href="#materials"
                  onClick={(e) => scrollTo(e, '#materials')}
                  className="text-white/80 hover:text-[#A94728] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#A94728] text-xs">›</span> Materials
                </a>
              </li>
              <li>
                <a
                  href="#quality"
                  onClick={(e) => scrollTo(e, '#quality')}
                  className="text-white/80 hover:text-[#A94728] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#A94728] text-xs">›</span> Certificates & Quality
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  onClick={(e) => scrollTo(e, '#footer')}
                  className="text-white/80 hover:text-[#A94728] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#A94728] text-xs">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address (4 cols) */}
          <div className="lg:col-span-4">
            <div className="tech-label text-xs text-[#A94728] font-bold tracking-widest uppercase mb-4">
              COMMERCIAL OFFICE & CONTACT
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/85">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A94728] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs sm:text-sm text-white/80">
                  {COMPANY_DETAILS.address}
                </span>
              </div>

              {/* Direct Phone Numbers & WhatsApp */}
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#A94728] font-bold flex items-center justify-between">
                  <span>KEY CONTACT DESK</span>
                  <span>CALL / WHATSAPP</span>
                </div>

                {COMPANY_DETAILS.contacts.map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-white/90">{contact.name}</span>
                    <div className="flex items-center gap-2 font-mono">
                      <a
                        href={`tel:${contact.cleanPhone}`}
                        className="text-white hover:text-[#A94728] transition-colors inline-flex items-center gap-1.5 font-bold"
                        title={`Call ${contact.name}`}
                      >
                        <FaPhone className="w-2.5 h-2.5 text-[#A94728] shrink-0" />
                        <span>{contact.phone}</span>
                      </a>
                      <a
                        href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-xs"
                        title={`Chat with ${contact.name} on WhatsApp`}
                        aria-label={`Chat with ${contact.name} on WhatsApp`}
                      >
                        <FaWhatsapp className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emails */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#A94728] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-xs font-mono space-y-0.5">
                  <a
                    href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                    className="hover:text-[#A94728] transition-colors text-white/90 font-medium"
                  >
                    {COMPANY_DETAILS.emails[0]}
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.emails[1]}`}
                    className="hover:text-[#A94728] transition-colors text-white/60"
                  >
                    {COMPANY_DETAILS.emails[1]}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#A94728] flex-shrink-0" />
                <a
                  href={`https://${COMPANY_DETAILS.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A94728] font-mono text-xs text-white/80 transition-colors"
                >
                  {COMPANY_DETAILS.website}
                </a>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#7E321F] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all active:scale-[0.97] cursor-pointer shadow-sm"
              >
                <span>Request Quotation Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            © {COMPANY_DETAILS.year} {COMPANY_DETAILS.name}. All Rights Reserved.
          </div>

          <div className="text-white/60">
            Design and SEO by{' '}
            <a
              href="https://sunmargindia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-[#A94728] font-semibold transition-colors underline decoration-white/30 hover:decoration-[#A94728]"
            >
              Sunmarg India
            </a>
          </div>

          <div className="flex items-center gap-5">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </span>
            <span>•</span>
            <span className="text-[#A94728] font-bold">
              MUMBAI, INDIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
