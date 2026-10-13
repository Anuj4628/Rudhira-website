import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { COMPANY_DETAILS } from '../data/industrialData';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', type: 'active' },
    { name: 'About Us', href: '#why-us', type: 'anchor' },
    { name: 'Products', href: '#products', type: 'anchor' },
    { name: 'Materials', href: '#materials', type: 'anchor' },
    { name: 'Certificates', href: '#quality', type: 'anchor' },
    { name: 'Contact', href: '#footer', type: 'anchor' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Header with Top Contact Bar & Main Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* TOP CONTACT UTILITY BAR - Compact */}
        <div className="bg-[#1A1D20] text-[#D9D9D6] border-b border-white/10 text-xs py-1 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
            {/* Left: Email & Address */}
            <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs">
              <a
                href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                className="inline-flex items-center gap-1.5 hover:text-[#A94728] transition-colors"
                title="Send Inquiry Email"
              >
                <Mail className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0" />
                <span className="font-mono">{COMPANY_DETAILS.emails[0]}</span>
              </a>

              <span className="hidden lg:inline text-white/25">|</span>

              <a
                href={`mailto:${COMPANY_DETAILS.emails[1]}`}
                className="hidden xl:inline-flex items-center gap-1.5 hover:text-[#A94728] transition-colors text-white/70"
                title="Alternative Email"
              >
                <span className="font-mono">{COMPANY_DETAILS.emails[1]}</span>
              </a>

              <span className="hidden md:inline text-white/25">|</span>

              <span className="hidden md:inline-flex items-center gap-1.5 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0" />
                <span>Khetwadi, Mumbai - 400 004</span>
              </span>
            </div>

            {/* Right: Bharat Kumar & Navin Kumar Phone Contacts with WhatsApp */}
            <div className="flex items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs">
              {/* Bharat Kumar */}
              <div className="inline-flex items-center gap-1.5">
                <span className="text-white/60 hidden sm:inline text-[11px]">Bharat Kumar:</span>
                <a
                  href={`tel:${COMPANY_DETAILS.contacts[0].cleanPhone}`}
                  className="font-mono font-bold text-white hover:text-[#A94728] transition-colors flex items-center gap-1"
                  title="Call Bharat Kumar"
                >
                  <FaPhone className="w-2.5 h-2.5 text-[#A94728] sm:hidden" />
                  <span>{COMPANY_DETAILS.contacts[0].phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.contacts[0].whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:scale-110 transition-transform p-0.5"
                  title="Chat with Bharat Kumar on WhatsApp"
                  aria-label="Chat with Bharat Kumar on WhatsApp"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </a>
              </div>

              <span className="text-white/30 hidden xs:inline">|</span>

              {/* Navin Kumar */}
              <div className="inline-flex items-center gap-1.5">
                <span className="text-white/60 hidden sm:inline text-[11px]">Navin Kumar:</span>
                <a
                  href={`tel:${COMPANY_DETAILS.contacts[1].cleanPhone}`}
                  className="font-mono font-bold text-white hover:text-[#A94728] transition-colors flex items-center gap-1"
                  title="Call Navin Kumar"
                >
                  <FaPhone className="w-2.5 h-2.5 text-[#A94728] sm:hidden" />
                  <span>{COMPANY_DETAILS.contacts[1].phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.contacts[1].whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:scale-110 transition-transform p-0.5"
                  title="Chat with Navin Kumar on WhatsApp"
                  aria-label="Chat with Navin Kumar on WhatsApp"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR - Slimmer vertical padding, preserving exact logo size */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#F8F5F1] shadow-md border-b border-[#D9D9D6] py-1 sm:py-1.5'
              : 'bg-[#F8F5F1]/95 backdrop-blur-md border-b border-[#202427]/10 py-1.5 sm:py-2'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo - Size completely untouched */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center focus:outline-none transition-transform duration-200 hover:opacity-95"
              aria-label="Rudhira Metal Industries - Home"
            >
              <img
                src="/assets/rudhira-logo.png"
                alt="Rudhira Metal Industries Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled
                    ? 'h-[46px] sm:h-[54px] lg:h-[66px] xl:h-[72px]'
                    : 'h-[52px] sm:h-[62px] lg:h-[76px] xl:h-[82px]'
                }`}
                loading="eager"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-bold tracking-wide transition-colors py-1 nav-line-effect ${
                    link.type === 'active'
                      ? 'text-[#A94728]'
                      : 'text-[#202427] hover:text-[#A94728]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: ENQUIRE NOW */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#7E321F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-sm transition-all duration-150 active:scale-[0.97] group cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2.5">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#A94728] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm active:scale-[0.97]"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-sm border border-[#D9D9D6] text-[#202427] hover:bg-[#F4E5DC]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#202427]/70 backdrop-blur-sm">
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-[#F8F5F1] border-l border-[#D9D9D6] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Top Header with Logo & Close button */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D9D9D6]">
                <img
                  src="/assets/rudhira-logo.png"
                  alt="Rudhira Metal Industries"
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-sm border border-[#D9D9D6] text-[#202427] hover:bg-[#F4E5DC] transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-5">
                <div className="tech-label text-[#A94728] mb-2 text-xs font-bold">
                  NAVIGATION
                </div>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between text-base font-bold text-[#202427] hover:text-[#A94728] py-2.5 border-b border-[#D9D9D6]/40 transition-colors"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-[#A94728]">→</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Direct Contact Details from Visiting Card */}
            <div className="pt-5 border-t border-[#D9D9D6] space-y-4">
              <div className="tech-label text-[#A94728] text-xs font-bold">
                DIRECT CONTACT DESK
              </div>

              {/* Contacts with Direct Call & WhatsApp */}
              <div className="space-y-2.5 bg-white p-3 rounded-lg border border-[#D9D9D6]">
                {COMPANY_DETAILS.contacts.map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-[#202427]">{contact.name}</div>
                      <a href={`tel:${contact.cleanPhone}`} className="text-[#A94728] font-mono font-semibold">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${contact.cleanPhone}`}
                        className="p-1.5 bg-[#F8F5F1] hover:bg-[#A94728] hover:text-white rounded-sm text-[#202427] transition-colors"
                        title={`Call ${contact.name}`}
                      >
                        <FaPhone className="w-3 h-3" />
                      </a>
                      <a
                        href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-sm transition-colors"
                        title={`WhatsApp ${contact.name}`}
                      >
                        <FaWhatsapp className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emails & Address */}
              <div className="space-y-2 text-xs text-[#202427]">
                <div className="flex flex-col gap-1 font-mono text-xs">
                  <a href={`mailto:${COMPANY_DETAILS.emails[0]}`} className="text-[#A94728] hover:underline flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{COMPANY_DETAILS.emails[0]}</span>
                  </a>
                  <a href={`mailto:${COMPANY_DETAILS.emails[1]}`} className="text-[#202427]/70 hover:underline flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
                    <span>{COMPANY_DETAILS.emails[1]}</span>
                  </a>
                </div>
                <div className="flex items-start gap-2 text-[11px] text-[#202427]/80 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">
                    {COMPANY_DETAILS.address}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#A94728] hover:bg-[#7E321F] text-white text-sm font-bold uppercase tracking-wider py-3 rounded-sm shadow-md transition-colors active:scale-[0.97]"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
