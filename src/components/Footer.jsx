import React from 'react';
import { Mail, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { COMPANY_DETAILS } from '../data/industrialData';

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
                className="inline-block cursor-pointer hover:opacity-95 transition-opacity"
                aria-label="Rudhira Metal Industries - Home"
              >
                <img
                  src="/assets/rudhira-logo.png"
                  alt="Rudhira Metal Industries Logo"
                  className="h-18 sm:h-22 lg:h-24 w-auto object-contain"
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
            </ul>
          </div>

          {/* Column 3: Contact & Address (4 cols) */}
          <div className="lg:col-span-4">
            <div className="tech-label text-xs sm:text-[13px] text-[#A94728] font-bold tracking-widest uppercase mb-4 sm:mb-5">
              COMMERCIAL OFFICE &amp; CONTACT
            </div>

            <div className="space-y-4 text-sm sm:text-base text-white/85">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A94728] flex-shrink-0 mt-1" />
                <span className="leading-relaxed text-sm text-white/85 font-sans">
                  {COMPANY_DETAILS.address}
                </span>
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
                onClick={onOpenEnquiry}
                className="btn-wave inline-flex items-center gap-2 border border-[#A94728] text-white text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-sm transition-all active:scale-[0.97] cursor-pointer shadow-sm hover:bg-[#A94728]"
              >
                <span>Request Quotation Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
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
