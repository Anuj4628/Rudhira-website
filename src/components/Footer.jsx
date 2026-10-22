import React from 'react';
import { Mail, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { COMPANY_DETAILS } from '../data/industrialData';
import brandLogo from '../assets/New Logo/Rudhira Metal Logo Emblem.png';

export default function Footer({ onNavigate, onOpenEnquiry }) {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappDefaultMsg
  )}`;

  const handleFooterNav = (e, page, anchor = null) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, anchor);
    } else if (anchor) {
      const el = document.querySelector(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
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
              <a
                href="/"
                onClick={(e) => handleFooterNav(e, 'home')}
                className="inline-flex items-center bg-white rounded-xl px-3.5 py-2.5 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all border border-white/20"
                aria-label="Rudhira Metal Industries - Home"
              >
                <img
                  src={brandLogo}
                  alt="Rudhira Metal Industries Logo"
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                />
              </a>
            </div>

            <p className="text-[15px] sm:text-base text-[#D9D9D6] leading-relaxed mb-5 max-w-md font-sans">
              Industrial metal products and engineering solutions for demanding applications. Stockist and suppliers of stainless steel, pipes, tubes, forge fittings, flanges, plates, rounds, and all ferrous metals.
            </p>

            <div className="p-3.5 bg-white/5 rounded-lg border border-white/10 max-w-md">
              <div className="tech-label text-xs text-[#A94728] mb-1.5 font-bold">
                COMMERCIAL SCOPE // VISITING CARD DETAILS
              </div>
              <p className="text-xs sm:text-[13px] font-mono text-[#E7EEF2]/90 leading-relaxed mb-2.5">
                {COMPANY_DETAILS.specialization}
              </p>
              <div className="pt-2.5 border-t border-white/10 flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#F4E5DC]">
                <span className="inline-flex items-center gap-1.5 bg-[#A94728]/30 px-2.5 py-1 rounded border border-[#A94728]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  ISO 9001:2015 CERTIFIED
                </span>
                <span className="text-white/40">•</span>
                <span>GSTIN: {COMPANY_DETAILS.gstin}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <div className="tech-label text-xs sm:text-[13px] text-[#A94728] font-bold tracking-widest uppercase mb-4 sm:mb-5">
              QUICK NAVIGATION
            </div>
            <ul className="space-y-2.5 text-[15px] sm:text-base font-sans">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleFooterNav(e, 'home', '#hero')}
                  className="text-white/85 hover:text-[#A94728] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span className="text-[#A94728] text-sm">›</span> Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleFooterNav(e, 'about')}
                  className="text-white/85 hover:text-[#A94728] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span className="text-[#A94728] text-sm">›</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('products-landing', null, '/products');
                  }}
                  className="text-white/85 hover:text-[#A94728] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span className="text-[#A94728] text-sm">›</span> Product
                </a>
              </li>
              <li>
                <a
                  href="/materials"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('materials-landing', null, '/materials');
                  }}
                  className="text-white/85 hover:text-[#A94728] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span className="text-[#A94728] text-sm">›</span> Material
                </a>
              </li>
              <li>
                <a
                  href="/certificates"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('certificates', null, '/certificates');
                  }}
                  className="text-white/85 hover:text-[#A94728] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span className="text-[#A94728] text-sm">›</span> Certificates
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleFooterNav(e, 'contact')}
                  className="text-white/85 hover:text-[#A94728] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span className="text-[#A94728] text-sm">›</span> Contact
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rudhira+Metal+Industries+Shop+No+6+Shantabi+Building+4th+Cross+Lane+Khetwadi+Mumbai+400004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-[#A94728] transition-colors flex items-center gap-1.5 font-medium"
                  title="Get Directions to Rudhira Metal Industries on Google Maps"
                >
                  <span className="text-[#A94728] text-sm">›</span> Get Directions
                  <ArrowUpRight className="w-3 h-3 text-[#A94728]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address (4 cols) */}
          <div className="lg:col-span-4">
            <div className="tech-label text-xs sm:text-[13px] text-[#A94728] font-bold tracking-widest uppercase mb-4 sm:mb-5">
              COMMERCIAL OFFICE &amp; CONTACT
            </div>

            <div className="space-y-4 text-sm sm:text-base text-white/85">
              {/* Address with Get Directions Action */}
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A94728] flex-shrink-0 mt-1" />
                  <span className="leading-relaxed text-sm text-white/85 font-sans">
                    {COMPANY_DETAILS.address}
                  </span>
                </div>
                <div className="pl-6.5">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Rudhira+Metal+Industries+Shop+No+6+Shantabi+Building+4th+Cross+Lane+Khetwadi+Mumbai+400004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#A94728] hover:text-[#E05A36] transition-colors group/dir"
                    title="Get Directions to Rudhira Metal Industries on Google Maps"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/dir:translate-x-0.5 group-hover/dir:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Direct Phone Numbers & WhatsApp */}
              <div className="p-3.5 bg-white/5 rounded-lg border border-white/10 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A94728] font-bold flex items-center justify-between">
                  <span>KEY CONTACT DESK</span>
                  <span>CALL / WHATSAPP</span>
                </div>

                {COMPANY_DETAILS.contacts.map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between gap-2 text-sm">
                    <span className="font-semibold text-white font-sans">{contact.name}</span>
                    <div className="flex items-center gap-2.5 font-mono">
                      <a
                        href={`tel:${contact.cleanPhone}`}
                        className="text-white hover:text-[#A94728] transition-colors inline-flex items-center gap-1.5 font-bold text-sm"
                        title={`Call ${contact.name}`}
                      >
                        <FaPhone className="w-3 h-3 text-[#A94728] shrink-0" />
                        <span>{contact.phone}</span>
                      </a>
                      <a
                        href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-xs"
                        title={`Chat with ${contact.name} on WhatsApp`}
                        aria-label={`Chat with ${contact.name} on WhatsApp`}
                      >
                        <FaWhatsapp className="w-4 h-4 shrink-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emails */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#A94728] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm font-mono space-y-1">
                  <a
                    href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                    className="hover:text-[#A94728] transition-colors text-white font-medium"
                  >
                    {COMPANY_DETAILS.emails[0]}
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.emails[1]}`}
                    className="hover:text-[#A94728] transition-colors text-white/70"
                  >
                    {COMPANY_DETAILS.emails[1]}
                  </a>
                </div>
              </div>

              {/* Website */}
              {/* Website */}
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#A94728] flex-shrink-0" />
                <a
                  href={`https://${COMPANY_DETAILS.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A94728] font-mono text-sm text-white/90 transition-colors"
                >
                  {COMPANY_DETAILS.website}
                </a>
              </div>
            </div>

            <div className="mt-5">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="footer-quote-btn contact-hero-btn inline-flex items-center gap-2.5 bg-[#A94728] hover:bg-[#8F3B20] border-2 border-[#A94728] hover:border-[#C34B2B] text-white !text-white text-sm font-black uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-xl shadow-[#A94728]/35 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer group"
              >
                <span className="text-white !text-white font-black tracking-wider">Request Quotation Proposal</span>
                <ArrowUpRight className="w-4 h-4 text-white !text-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
