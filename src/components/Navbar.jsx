import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
      {/* Fixed Navbar with light warm-white/cream background initially and solid on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5F1] shadow-md border-b border-[#D9D9D6] h-[72px] sm:h-[82px] lg:h-[94px] xl:h-[100px]'
            : 'bg-[#F8F5F1]/90 backdrop-blur-md border-b border-[#202427]/10 h-[80px] sm:h-[92px] lg:h-[110px] xl:h-[118px]'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Direct on Navbar (No background/card/border/shadow) */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center focus:outline-none transition-transform duration-200 hover:opacity-95 py-1"
            aria-label="Rudhira Metal Industries - Home"
          >
            <img
              src="/assets/rudhira-logo.png"
              alt="Rudhira Metal Industries Logo"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? 'h-[52px] sm:h-[62px] lg:h-[74px] xl:h-[80px]'
                  : 'h-[60px] sm:h-[72px] lg:h-[88px] xl:h-[96px]'
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
          <div className="flex sm:hidden items-center gap-3">
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
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#202427]/60 backdrop-blur-sm">
          <div className="fixed top-[80px] sm:top-[92px] right-0 w-full max-w-sm h-[calc(100vh-80px)] sm:h-[calc(100vh-92px)] bg-[#F8F5F1] border-l border-[#D9D9D6] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="tech-label text-[#A94728] mb-3 text-xs font-bold">
                NAVIGATION
              </div>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between text-base font-bold text-[#202427] hover:text-[#A94728] py-2 border-b border-[#D9D9D6]/60 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#A94728]">→</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#D9D9D6] space-y-4">
              <div className="tech-label text-[#6B7280] text-xs">COMMERCIAL DESK</div>
              <div className="text-xs text-[#202427] leading-relaxed">
                {COMPANY_DETAILS.address}
              </div>
              <div className="text-xs text-[#A94728] font-mono">
                {COMPANY_DETAILS.emails[0]}
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
