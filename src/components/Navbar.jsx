import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Mail, MapPin, ChevronDown, ShieldCheck } from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { COMPANY_DETAILS } from '../data/industrialData';
import ProductMegaMenu from './mega-menu/ProductMegaMenu';
import MaterialsMegaMenu from './mega-menu/MaterialsMegaMenu';
import CertificatesMegaMenu from './mega-menu/CertificatesMegaMenu';
import CertificateModal from './common/CertificateModal';
import { PRODUCT_CATEGORIES, MATERIAL_CATEGORIES, getMaterialSeoSlug, getProductSeoSlug } from '../data/productsData';

export default function Navbar({ currentPage = 'home', onNavigate, onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMegaOpen, setProductMegaOpen] = useState(false);
  const [materialsMegaOpen, setMaterialsMegaOpen] = useState(false);
  const [certificatesMegaOpen, setCertificatesMegaOpen] = useState(false);
  const [mobileProductExpanded, setMobileProductExpanded] = useState(false);
  const [mobileMaterialExpanded, setMobileMaterialExpanded] = useState(false);
  const [mobileCertificatesExpanded, setMobileCertificatesExpanded] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCertId, setActiveCertId] = useState('iso-9001-2015');

  const productTimeoutRef = useRef(null);
  const materialTimeoutRef = useRef(null);
  const certificatesTimeoutRef = useRef(null);

  const handleProductMouseEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    setMaterialsMegaOpen(false);
    setCertificatesMegaOpen(false);
    setProductMegaOpen(true);
  };

  const handleProductMouseLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setProductMegaOpen(false);
    }, 180);
  };

  const handleMaterialMouseEnter = () => {
    if (materialTimeoutRef.current) clearTimeout(materialTimeoutRef.current);
    setProductMegaOpen(false);
    setCertificatesMegaOpen(false);
    setMaterialsMegaOpen(true);
  };

  const handleMaterialMouseLeave = () => {
    materialTimeoutRef.current = setTimeout(() => {
      setMaterialsMegaOpen(false);
    }, 180);
  };

  const handleCertificatesMouseEnter = () => {
    if (certificatesTimeoutRef.current) clearTimeout(certificatesTimeoutRef.current);
    setProductMegaOpen(false);
    setMaterialsMegaOpen(false);
    setCertificatesMegaOpen(true);
  };

  const handleCertificatesMouseLeave = () => {
    certificatesTimeoutRef.current = setTimeout(() => {
      setCertificatesMegaOpen(false);
    }, 180);
  };

  const closeAllMenus = () => {
    setProductMegaOpen(false);
    setMaterialsMegaOpen(false);
    setCertificatesMegaOpen(false);
    setMobileMenuOpen(false);
  };

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
    { name: 'Home', page: 'home', href: '/', anchor: '#hero', isMega: null },
    { name: 'About Us', page: 'about', href: '/about', anchor: null, isMega: null },
    { name: 'Product', page: 'products-landing', href: '/products', anchor: null, isMega: 'product' },
    { name: 'Material', page: 'materials-landing', href: '/materials', anchor: null, isMega: 'material' },
    { name: 'Certificates', page: 'certificates', href: '/certificates', anchor: null, isMega: 'certificates' },
    { name: 'Contact', page: 'contact', href: '/contact', anchor: null, isMega: null },
  ];

  const isLinkActive = (link) => {
    if (currentPage === 'about') return link.page === 'about';
    if (currentPage === 'contact') return link.page === 'contact';
    if (currentPage === 'certificates') return link.name === 'Certificates';
    if (currentPage === 'products-landing' || currentPage === 'product-category' || currentPage === 'product-material' || currentPage === 'grade-detail' || currentPage === 'product-type-detail') {
      return link.name === 'Product';
    }
    if (currentPage === 'materials-landing' || currentPage === 'material-family') {
      return link.name === 'Material';
    }
    if (currentPage === 'home') return link.name === 'Home';
    return false;
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    closeAllMenus();
    if (onNavigate) {
      if (link.isMega === 'product') {
        onNavigate('products-landing', null, '/products');
      } else if (link.isMega === 'material') {
        onNavigate('materials-landing', null, '/materials');
      } else if (link.isMega === 'certificates' || link.name === 'Certificates') {
        onNavigate('certificates', null, '/certificates');
      } else {
        onNavigate(link.page, link.anchor);
      }
    } else if (link.anchor) {
      const target = document.querySelector(link.anchor);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Fixed Header with Top Contact Bar & Main Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        onMouseLeave={() => {
          handleProductMouseLeave();
          handleMaterialMouseLeave();
          handleCertificatesMouseLeave();
        }}
      >
        {/* TOP CONTACT & CERTIFICATION UTILITY BAR */}
        <div className="hidden md:block bg-[#1A1D20] text-[#D9D9D6] border-b border-white/10 text-xs py-1 px-4 sm:px-6 lg:px-8">
          {/* Mobile view: hidden to keep top bar clean on small screens */}

          {/* Desktop/Tablet view: full contact info exactly as currently appears */}
          <div className="hidden md:flex max-w-7xl mx-auto flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
            {/* Left: Email & Address */}
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
              <a
                href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                className="inline-flex items-center gap-1.5 hover:text-[#A94728] transition-colors"
                title="Send Inquiry Email"
              >
                <Mail className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0" />
                <span className="font-mono">{COMPANY_DETAILS.emails[0]}</span>
              </a>

              <span className="hidden lg:inline text-white/25">|</span>

              <span className="hidden md:inline-flex items-center gap-1.5 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0" />
                <span>Khetwadi, Mumbai</span>
              </span>
            </div>

            {/* Center / Highlight: ISO 9001:2015 CERTIFIED COMPANY */}
            <div className="flex items-center justify-center my-0.5 sm:my-0">
              <button
                type="button"
                onClick={() => {
                  setActiveCertId('iso-9001-2015');
                  setCertModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#A94728]/25 hover:bg-[#A94728]/40 border border-[#A94728]/60 text-[#F4E5DC] hover:text-white font-mono text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase transition-all shadow-xs cursor-pointer group"
                title="Click to view ISO 9001:2015 Certificate"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <ShieldCheck className="w-3.5 h-3.5 text-[#F4E5DC] group-hover:scale-110 transition-transform" />
                <span>ISO 9001:2015 CERTIFIED COMPANY</span>
              </button>
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

        {/* MAIN NAVIGATION BAR */}
        <div
          className={`transition-all duration-300 relative ${isScrolled
            ? 'bg-[#F8F5F1] shadow-md border-b border-[#D9D9D6] py-1 sm:py-1.5'
            : 'bg-[#F8F5F1]/95 backdrop-blur-md border-b border-[#202427]/10 py-1.5 sm:py-2'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo & ISO 9001:2015 Tag */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  closeAllMenus();
                  if (onNavigate) onNavigate('home');
                }}
                className="flex items-center focus:outline-none transition-transform duration-200 hover:opacity-95"
                aria-label="Rudhira Metal Industries - Home"
              >
                <img
                  src="/assets/rudhira-logo.png"
                  alt="Rudhira Metal Industries Logo"
                  className={`w-auto object-contain transition-all duration-300 ${isScrolled
                    ? 'h-18 xs:h-[42px] sm:h-[54px] lg:h-[66px] xl:h-[72px]'
                    : 'h-18 xs:h-[48px] sm:h-[62px] lg:h-[76px] xl:h-[82px]'
                    }`}
                  loading="eager"
                />
              </a>

              <button
                type="button"
                onClick={() => {
                  setActiveCertId('iso-9001-2015');
                  setCertModalOpen(true);
                }}
                className="hidden sm:flex flex-col border-l-2 border-[#A94728]/35 pl-2.5 sm:pl-3 py-0.5 text-left cursor-pointer group"
                title="View ISO 9001:2015 Certificate"
              >
                <span className="text-[10px] xl:text-[11px] font-mono font-extrabold text-[#A94728] uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  ISO 9001:2015
                </span>
                <span className="text-[9px] font-mono font-semibold text-[#202427]/75 tracking-tight">
                  CERTIFIED COMPANY
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isLinkActive(link);

                if (link.isMega === 'product') {
                  return (
                    <div
                      key={link.name}
                      className="relative py-2"
                      onMouseEnter={handleProductMouseEnter}
                      onMouseLeave={handleProductMouseLeave}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`inline-flex items-center gap-1 text-sm font-bold tracking-wide transition-colors py-1 nav-line-effect cursor-pointer ${active || productMegaOpen
                          ? 'text-[#A94728] font-extrabold after:!w-full'
                          : 'text-[#202427] hover:text-[#A94728]'
                          }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productMegaOpen ? 'rotate-180 text-[#A94728]' : 'text-[#202427]/60'}`} />
                      </a>
                    </div>
                  );
                }

                if (link.isMega === 'material') {
                  return (
                    <div
                      key={link.name}
                      className="relative py-2"
                      onMouseEnter={handleMaterialMouseEnter}
                      onMouseLeave={handleMaterialMouseLeave}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`inline-flex items-center gap-1 text-sm font-bold tracking-wide transition-colors py-1 nav-line-effect cursor-pointer ${active || materialsMegaOpen
                          ? 'text-[#A94728] font-extrabold after:!w-full'
                          : 'text-[#202427] hover:text-[#A94728]'
                          }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${materialsMegaOpen ? 'rotate-180 text-[#A94728]' : 'text-[#202427]/60'}`} />
                      </a>
                    </div>
                  );
                }

                if (link.isMega === 'certificates') {
                  return (
                    <div
                      key={link.name}
                      className="relative py-2"
                      onMouseEnter={handleCertificatesMouseEnter}
                      onMouseLeave={handleCertificatesMouseLeave}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`inline-flex items-center gap-1 text-sm font-bold tracking-wide transition-colors py-1 nav-line-effect cursor-pointer ${active || certificatesMegaOpen
                          ? 'text-[#A94728] font-extrabold after:!w-full'
                          : 'text-[#202427] hover:text-[#A94728]'
                          }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${certificatesMegaOpen ? 'rotate-180 text-[#A94728]' : 'text-[#202427]/60'}`} />
                      </a>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-sm font-bold tracking-wide transition-colors py-1 nav-line-effect ${active
                      ? 'text-[#A94728] font-extrabold after:!w-full'
                      : 'text-[#202427] hover:text-[#A94728]'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: GET QUOTE */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => {
                  closeAllMenus();
                  onOpenEnquiry();
                }}
                className="inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#7E321F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-sm transition-all duration-150 active:scale-[0.97] group cursor-pointer"
              >
                <span>Get Quote</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Button — clean single hamburger toggle */}
            <div className="flex sm:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-sm border border-[#D9D9D6] text-[#202427] hover:bg-[#F4E5DC]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Desktop Mega Menus Mounted with Seamless Hover Handlers */}
          <ProductMegaMenu
            isOpen={productMegaOpen}
            onClose={() => setProductMegaOpen(false)}
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
            onNavigate={(view, anchor, urlPath) => {
              closeAllMenus();
              if (onNavigate) onNavigate(view, anchor, urlPath);
            }}
            onOpenEnquiry={(prod, mat) => {
              closeAllMenus();
              onOpenEnquiry(prod, mat);
            }}
          />

          <MaterialsMegaMenu
            isOpen={materialsMegaOpen}
            onClose={() => setMaterialsMegaOpen(false)}
            onMouseEnter={handleMaterialMouseEnter}
            onMouseLeave={handleMaterialMouseLeave}
            onNavigate={(view, anchor, urlPath) => {
              closeAllMenus();
              if (onNavigate) onNavigate(view, anchor, urlPath);
            }}
          />

          <CertificatesMegaMenu
            isOpen={certificatesMegaOpen}
            onClose={() => setCertificatesMegaOpen(false)}
            onMouseEnter={handleCertificatesMouseEnter}
            onMouseLeave={handleCertificatesMouseLeave}
            onNavigate={(view, anchor, urlPath) => {
              closeAllMenus();
              if (onNavigate) onNavigate(view, anchor, urlPath);
            }}
            onOpenCertModal={(certId) => {
              closeAllMenus();
              setActiveCertId(certId);
              setCertModalOpen(true);
            }}
          />
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
                  className="h-10 w-20 object-contain"
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
                  {navLinks.map((link) => {
                    const active = isLinkActive(link);

                    if (link.isMega === 'product') {
                      return (
                        <div key={link.name} className="border-b border-[#D9D9D6]/40 py-1.5">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() => {
                                closeAllMenus();
                                if (onNavigate) onNavigate('products-landing', null, '/products');
                              }}
                              className={`text-base font-bold transition-colors ${active ? 'text-[#A94728]' : 'text-[#202427]'
                                }`}
                            >
                              Product
                            </button>
                            <button
                              onClick={() => setMobileProductExpanded(!mobileProductExpanded)}
                              className="p-1.5 text-[#202427]/70 hover:text-[#A94728] rounded"
                              aria-label="Expand product categories"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${mobileProductExpanded ? 'rotate-180 text-[#A94728]' : ''
                                  }`}
                              />
                            </button>
                          </div>

                          {mobileProductExpanded && (
                            <div className="mt-2 pl-3 py-2 space-y-2 bg-[#F4E5DC]/30 rounded-lg border border-[#A94728]/20 max-h-60 overflow-y-auto">
                              <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase">
                                MANUFACTURER DIVISION
                              </div>
                              <div className="grid grid-cols-1 gap-1">
                                {PRODUCT_CATEGORIES.filter((p) => p.division === 'Manufacturer').map((cat) => (
                                  <button
                                    key={cat.id}
                                    onClick={() => {
                                      closeAllMenus();
                                      if (onNavigate) onNavigate('product-category', null, `/products/${cat.slug}`);
                                    }}
                                    className="text-left text-xs font-medium text-[#202427] hover:text-[#A94728] py-1 truncate"
                                  >
                                    • {cat.name}
                                  </button>
                                ))}
                              </div>

                              <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase pt-2 border-t border-[#D9D9D6]">
                                SUPPLIER DIVISION
                              </div>
                              <div className="grid grid-cols-1 gap-1">
                                {PRODUCT_CATEGORIES.filter((p) => p.division === 'Supplier').map((cat) => (
                                  <button
                                    key={cat.id}
                                    onClick={() => {
                                      closeAllMenus();
                                      if (onNavigate) onNavigate('product-category', null, `/products/${getProductSeoSlug(cat.slug)}`);
                                    }}
                                    className="text-left text-xs font-medium text-[#202427] hover:text-[#A94728] py-1 truncate"
                                  >
                                    • {cat.name}
                                  </button>
                                ))}
                              </div>

                              <div className="pt-2 border-t border-[#D9D9D6]">
                                <button
                                  onClick={() => {
                                    closeAllMenus();
                                    if (onNavigate) onNavigate('products-landing', null, '/products');
                                  }}
                                  className="text-[11px] font-mono font-bold text-[#A94728] hover:underline"
                                >
                                  View All 18 Products →
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (link.isMega === 'material') {
                      return (
                        <div key={link.name} className="border-b border-[#D9D9D6]/40 py-1.5">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() => {
                                closeAllMenus();
                                if (onNavigate) onNavigate('materials-landing', null, '/materials');
                              }}
                              className={`text-base font-bold transition-colors ${active ? 'text-[#A94728]' : 'text-[#202427]'
                                }`}
                            >
                              Material
                            </button>
                            <button
                              onClick={() => setMobileMaterialExpanded(!mobileMaterialExpanded)}
                              className="p-1.5 text-[#202427]/70 hover:text-[#A94728] rounded"
                              aria-label="Expand materials"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${mobileMaterialExpanded ? 'rotate-180 text-[#A94728]' : ''
                                  }`}
                              />
                            </button>
                          </div>

                          {mobileMaterialExpanded && (
                            <div className="mt-2 pl-3 py-2 space-y-1.5 bg-[#F4E5DC]/30 rounded-lg border border-[#A94728]/20 max-h-60 overflow-y-auto">
                              <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase">
                                9 MATERIAL FAMILIES
                              </div>
                              {MATERIAL_CATEGORIES.map((mat) => (
                                <button
                                  key={mat.id}
                                  onClick={() => {
                                    closeAllMenus();
                                    if (onNavigate) onNavigate('material-family', null, `/materials/${getMaterialSeoSlug(mat.slug)}`);
                                  }}
                                  className="block text-left text-xs font-medium text-[#202427] hover:text-[#A94728] py-1 truncate"
                                >
                                  • {mat.name}
                                </button>
                              ))}

                              <div className="pt-2 border-t border-[#D9D9D6]">
                                <button
                                  onClick={() => {
                                    closeAllMenus();
                                    if (onNavigate) onNavigate('materials-landing', null, '/materials');
                                  }}
                                  className="text-[11px] font-mono font-bold text-[#A94728] hover:underline"
                                >
                                  View All Materials Overview →
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (link.isMega === 'certificates') {
                      return (
                        <div key={link.name} className="border-b border-[#D9D9D6]/40 py-1.5">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() => {
                                closeAllMenus();
                                if (onNavigate) onNavigate('certificates', null, '/certificates');
                              }}
                              className={`text-base font-bold transition-colors ${active ? 'text-[#A94728]' : 'text-[#202427]'
                                }`}
                            >
                              Certificates
                            </button>
                            <button
                              onClick={() => setMobileCertificatesExpanded(!mobileCertificatesExpanded)}
                              className="p-1.5 text-[#202427]/70 hover:text-[#A94728] rounded"
                              aria-label="Expand certificates"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${mobileCertificatesExpanded ? 'rotate-180 text-[#A94728]' : ''
                                  }`}
                              />
                            </button>
                          </div>

                          {mobileCertificatesExpanded && (
                            <div className="mt-2 pl-3 pr-2 py-2.5 space-y-2 bg-[#F4E5DC]/30 rounded-lg border border-[#A94728]/20">
                              <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase flex items-center justify-between">
                                <span>OFFICIAL ACCREDITATIONS</span>
                                <span className="text-[9px] text-[#202427]/60">2 DOCUMENTS</span>
                              </div>

                              {/* ISO 9001:2015 Button */}
                              <button
                                onClick={() => {
                                  closeAllMenus();
                                  setActiveCertId('iso-9001-2015');
                                  setCertModalOpen(true);
                                }}
                                className="w-full text-left p-2 bg-white hover:bg-[#F4E5DC] rounded border border-[#D9D9D6] transition-colors flex items-center justify-between"
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="text-xs font-bold text-[#202427] truncate">
                                    ISO 9001:2015 Certificate
                                  </div>
                                  <div className="text-[10px] font-mono text-[#A94728]">
                                    Cert No: 26DQQC40
                                  </div>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-2 py-0.5 rounded">
                                  VIEW
                                </span>
                              </button>

                              {/* GST REG-06 Button */}
                              <button
                                onClick={() => {
                                  closeAllMenus();
                                  setActiveCertId('gst-registration');
                                  setCertModalOpen(true);
                                }}
                                className="w-full text-left p-2 bg-white hover:bg-[#F4E5DC] rounded border border-[#D9D9D6] transition-colors flex items-center justify-between"
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="text-xs font-bold text-[#202427] truncate">
                                    GST Registration (REG-06)
                                  </div>
                                  <div className="text-[10px] font-mono text-[#A94728]">
                                    GSTIN: 27BXMPP3576J1ZQ
                                  </div>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-2 py-0.5 rounded">
                                  VIEW
                                </span>
                              </button>

                              <div className="pt-2 border-t border-[#D9D9D6]">
                                <button
                                  onClick={() => {
                                    closeAllMenus();
                                    if (onNavigate) onNavigate('certificates', null, '/certificates');
                                  }}
                                  className="text-[11px] font-mono font-bold text-[#A94728] hover:underline flex items-center gap-1"
                                >
                                  <span>View Full Quality & Compliance Center</span>
                                  <span>→</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`flex items-center justify-between text-base font-bold py-2.5 border-b border-[#D9D9D6]/40 transition-colors ${active
                          ? 'text-[#A94728]'
                          : 'text-[#202427] hover:text-[#A94728]'
                          }`}
                      >
                        <span>{link.name}</span>
                        <span className="text-xs text-[#A94728] font-mono font-bold">
                          {active ? '● ACTIVE' : '→'}
                        </span>
                      </a>
                    );
                  })}
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

              {/* Mobile ISO 9001:2015 Accreditation Box */}
              <div
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveCertId('iso-9001-2015');
                  setCertModalOpen(true);
                }}
                className="p-2.5 bg-[#A94728]/10 hover:bg-[#A94728]/20 border border-[#A94728]/30 rounded-lg flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A94728]" />
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#A94728] uppercase">
                      ISO 9001:2015 CERTIFIED
                    </div>
                    <div className="text-[10px] text-[#202427]/70">
                      Cert No: 26DQQC40 • Tap to view
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#A94728]">VIEW →</span>
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
                <span>Get Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Certificate Verification Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        initialCertId={activeCertId}
      />
    </>
  );
}
