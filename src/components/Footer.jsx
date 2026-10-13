import React from 'react';
import { Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
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
              <div className="bg-white p-2 rounded-sm inline-block shadow-sm">
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

            <div className="p-3 bg-white/5 rounded-sm border border-white/10 max-w-md">
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
              COMMERCIAL OFFICE & STOCKYARD
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A94728] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_DETAILS.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A94728] flex-shrink-0" />
                <div className="flex flex-col text-xs font-mono">
                  <a
                    href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                    className="hover:text-[#A94728] transition-colors"
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

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-mono text-xs transition-colors"
                >
                  Direct WhatsApp Commercial Desk
                </a>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#7E321F] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all active:scale-[0.97] cursor-pointer"
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
