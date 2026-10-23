import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Mail, MapPin, ChevronDown, ShieldCheck } from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { COMPANY_DETAILS, COMPANY_CERTIFICATES } from '../data/industrialData';
import ProductMegaMenu from './mega-menu/ProductMegaMenu';
import MaterialsMegaMenu from './mega-menu/MaterialsMegaMenu';
import CertificatesMegaMenu from './mega-menu/CertificatesMegaMenu';
import CertificateModal from './common/CertificateModal';
import { PRODUCT_CATEGORIES, MATERIAL_CATEGORIES, getMaterialSeoSlug, getProductSeoSlug } from '../data/productsData';
import brandLogo from '../assets/New Logo/Rudhira Metal Logo Emblem.png';

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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const headerRef = useRef(null);
  const mobileDrawerRef = useRef(null);
  const productTimeoutRef = useRef(null);
  const materialTimeoutRef = useRef(null);
  const certificatesTimeoutRef = useRef(null);

  const handleProductMouseEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    if (materialTimeoutRef.current) clearTimeout(materialTimeoutRef.current);
    if (certificatesTimeoutRef.current) clearTimeout(certificatesTimeoutRef.current);
    setMaterialsMegaOpen(false);
    setCertificatesMegaOpen(false);
    setProductMegaOpen(true);
  };

  const handleProductMouseLeave = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    productTimeoutRef.current = setTimeout(() => {
      setProductMegaOpen(false);
    }, 280);
  };

  const handleMaterialMouseEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    if (materialTimeoutRef.current) clearTimeout(materialTimeoutRef.current);
    if (certificatesTimeoutRef.current) clearTimeout(certificatesTimeoutRef.current);
    setProductMegaOpen(false);
    setCertificatesMegaOpen(false);
    setMaterialsMegaOpen(true);
  };

  const handleMaterialMouseLeave = () => {
    if (materialTimeoutRef.current) clearTimeout(materialTimeoutRef.current);
    materialTimeoutRef.current = setTimeout(() => {
      setMaterialsMegaOpen(false);
    }, 280);
  };

  const handleCertificatesMouseEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    if (materialTimeoutRef.current) clearTimeout(materialTimeoutRef.current);
    if (certificatesTimeoutRef.current) clearTimeout(certificatesTimeoutRef.current);
    setProductMegaOpen(false);
    setMaterialsMegaOpen(false);
    setCertificatesMegaOpen(true);
  };

  const handleCertificatesMouseLeave = () => {
    if (certificatesTimeoutRef.current) clearTimeout(certificatesTimeoutRef.current);
    certificatesTimeoutRef.current = setTimeout(() => {
      setCertificatesMegaOpen(false);
    }, 280);
  };

  const closeAllMenus = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    if (materialTimeoutRef.current) clearTimeout(materialTimeoutRef.current);
    if (certificatesTimeoutRef.current) clearTimeout(certificatesTimeoutRef.current);
    setProductMegaOpen(false);
    setMaterialsMegaOpen(false);
    setCertificatesMegaOpen(false);
    setMobileMenuOpen(false);
    setHoveredIndex(null);
  };

  // Clear pending timeouts on component unmount
  useEffect(() => {
    return () => {
      if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
      if (materialTimeoutRef.current) clearTimeout(materialTimeoutRef.current);
      if (certificatesTimeoutRef.current) clearTimeout(certificatesTimeoutRef.current);
    };
  }, []);

  // Close menus on Escape key or outside click (preserving mobile drawer interactions)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeAllMenus();
      }
    };
    const handleClickOutside = (e) => {
      // If user clicked inside the mobile drawer panel, do not prematurely close
      if (mobileDrawerRef.current && mobileDrawerRef.current.contains(e.target)) {
        return;
      }
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop Navigation Links (Preserves finalized desktop UI & spacing)
  const navLinks = [
    { name: 'Home', page: 'home', href: '/', anchor: '#hero', isMega: null },
    { name: 'About Us', page: 'about', href: '/about', anchor: null, isMega: null },
    { name: 'Product', page: 'products-landing', href: '/products', anchor: null, isMega: 'product' },
    { name: 'Material', page: 'materials-landing', href: '/materials', anchor: null, isMega: 'material' },
    { name: 'Certificates', page: 'certificates', href: '/certificates', anchor: null, isMega: 'certificates' },
    { name: 'Contact', page: 'contact', href: '/contact', anchor: null, isMega: null },
  ];

  // Mobile Navigation Links (Comprehensive catalog including Services & Industries)
  const mobileNavLinks = [
    { name: 'Home', page: 'home', href: '/', anchor: '#hero', isMega: null },
    { name: 'About Us', page: 'about', href: '/about', anchor: null, isMega: null },
    { name: 'Products', page: 'products-landing', href: '/products', anchor: null, isMega: 'product' },
    { name: 'Materials', page: 'materials-landing', href: '/materials', anchor: null, isMega: 'material' },
    { name: 'Services', page: 'home', href: '/#services', anchor: '#services', isMega: null },
    { name: 'Industries', page: 'home', href: '/#industries', anchor: '#industries', isMega: null },
    { name: 'Certificates', page: 'certificates', href: '/certificates', anchor: null, isMega: 'certificates' },
    { name: 'Contact', page: 'contact', href: '/contact', anchor: null, isMega: null },
  ];

  const isLinkActive = (link) => {
    if (currentPage === 'about') return link.page === 'about';
    if (currentPage === 'contact') return link.page === 'contact';
    if (currentPage === 'certificates') return link.name === 'Certificates';
    if (
      currentPage === 'products-landing' ||
      currentPage === 'product-category' ||
      currentPage === 'product-material' ||
      currentPage === 'grade-detail' ||
      currentPage === 'product-type-detail'
    ) {
      return link.isMega === 'product' || link.name === 'Product' || link.name === 'Products';
    }
    if (currentPage === 'materials-landing' || currentPage === 'material-family') {
      return link.isMega === 'material' || link.name === 'Material' || link.name === 'Materials';
    }
    if (currentPage === 'home') {
      if (link.name === 'Services' || link.anchor === '#services') return false;
      if (link.name === 'Industries' || link.anchor === '#industries') return false;
      return link.name === 'Home';
    }
    return false;
  };

  const handleMobileNav = (page, anchor = null, urlPath = null) => {
    if (onNavigate) {
      onNavigate(page, anchor, urlPath);
    }
    closeAllMenus();
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (onNavigate) {
      if (link.isMega === 'product') {
        onNavigate('products-landing', null, '/products');
      } else if (link.isMega === 'material') {
        onNavigate('materials-landing', null, '/materials');
      } else if (link.isMega === 'certificates' || link.name === 'Certificates') {
        onNavigate('certificates', null, '/certificates');
      } else {
        onNavigate(link.page, link.anchor, link.href);
      }
    } else if (link.anchor) {
      const target = document.querySelector(link.anchor);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeAllMenus();
  };

  return (
    <>
      {/* Fixed Architectural Industrial Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        onMouseLeave={() => {
          handleProductMouseLeave();
          handleMaterialMouseLeave();
          handleCertificatesMouseLeave();
          setHoveredIndex(null);
        }}
      >
        {/* TOP INFORMATION STRIP (Full-Width Terracotta Orange with White Angled Location Block) */}
        <div className="hidden md:block bg-[#A94728] text-white select-none border-b border-[#923C20] shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            {/* 1. Left: Contrasting White Angled Location Block */}
            <div className="relative bg-white text-[#A94728] py-1 pl-4 sm:pl-5 pr-7 sm:pr-9 flex items-center gap-1.5 text-xs font-sans font-bold [clip-path:polygon(0_0,100%_0,calc(100%-16px)_100%,0_100%)] shadow-xs flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0 stroke-[2.2]" />
              <span className="whitespace-nowrap">Khetwadi, Mumbai - 400 004</span>
            </div>

            {/* Right Row: 2. ISO Badge | 3. Email | 4. Bharat | 5. Navin */}
            <div className="flex items-center gap-3.5 lg:gap-4.5 pr-4 sm:pr-6 lg:pr-8 py-1 text-xs font-sans text-white">
              
              {/* 2. ISO 9001:2015 Certification with Reference */}
              <button
                type="button"
                onClick={() => {
                  setActiveCertId('iso-9001-2015');
                  setCertModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-sans text-xs font-bold tracking-wider uppercase transition-all cursor-pointer group shadow-xs flex-shrink-0"
                title="Click to view Official ISO 9001:2015 Certificate"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="whitespace-nowrap">ISO 9001:2015 CERTIFIED</span>
              </button>

              <span className="text-white/40">|</span>

              {/* 3. Email */}
              <a
                href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                className="inline-flex items-center gap-1.5 text-white hover:text-white/85 transition-colors group flex-shrink-0"
                title="Send Quotation Email"
              >
                <Mail className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="whitespace-nowrap font-medium">{COMPANY_DETAILS.emails[0]}</span>
              </a>

              <span className="text-white/40">|</span>

              {/* 4. Bharat Phone & WhatsApp */}
              <div className="inline-flex items-center gap-1.5 flex-shrink-0">
                <span className="text-white/80 hidden xl:inline text-xs">Bharat:</span>
                <a
                  href={`tel:${COMPANY_DETAILS.contacts[0].cleanPhone}`}
                  className="font-sans font-semibold text-white hover:text-white/85 transition-colors flex items-center gap-1 whitespace-nowrap"
                  title="Call Bharat Kumar"
                >
                  <FaPhone className="w-2.5 h-2.5 text-white/90 sm:hidden" />
                  <span>{COMPANY_DETAILS.contacts[0].phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.contacts[0].whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-200 hover:scale-115 transition-transform p-0.5"
                  title="Chat with Bharat Kumar on WhatsApp"
                  aria-label="Chat with Bharat Kumar on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-300 drop-shadow-xs" />
                </a>
              </div>

              <span className="text-white/40 hidden sm:inline">|</span>

              {/* 5. Navin Phone & WhatsApp */}
              <div className="hidden sm:inline-flex items-center gap-1.5 flex-shrink-0">
                <span className="text-white/80 hidden xl:inline text-xs">Navin:</span>
                <a
                  href={`tel:${COMPANY_DETAILS.contacts[1].cleanPhone}`}
                  className="font-sans font-semibold text-white hover:text-white/85 transition-colors flex items-center gap-1 whitespace-nowrap"
                  title="Call Navin Kumar"
                >
                  <FaPhone className="w-2.5 h-2.5 text-white/90 sm:hidden" />
                  <span>{COMPANY_DETAILS.contacts[1].phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.contacts[1].whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-200 hover:scale-115 transition-transform p-0.5"
                  title="Chat with Navin Kumar on WhatsApp"
                  aria-label="Chat with Navin Kumar on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-300 drop-shadow-xs" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION BAR (Crisp White Background, Compact & Premium) */}
        <div
          className={`transition-all duration-300 relative bg-white border-b border-gray-200/90 flex items-center ${
            isScrolled
              ? 'shadow-md h-[56px] sm:h-[60px] md:h-[64px] lg:h-[72px] xl:h-[78px]'
              : 'shadow-xs h-[68px] sm:h-[80px] md:h-[88px] lg:h-[104px] xl:h-[108px]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
            
            {/* LEFT: Rudhira Metal Logo */}
            <div className="flex items-center">
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
                  src={brandLogo}
                  alt="Rudhira Metal Industries Logo"
                  className={`w-auto object-contain transition-all duration-300 origin-left ${
                    isScrolled
                      ? 'h-[50px] sm:h-[54px] md:h-[58px] lg:h-[66px] xl:h-[74px]'
                      : 'h-[62px] sm:h-[74px] md:h-[82px] lg:h-[98px] xl:h-[104px]'
                  }`}
                  loading="eager"
                />
              </a>
            </div>

            {/* RIGHT SIDE: Navigation Items + GET A QUOTE Button */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              
              <nav
                className="flex items-center gap-5 xl:gap-7"
                aria-label="Main Navigation"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {navLinks.map((link, index) => {
                  const active = isLinkActive(link);
                  const isHovered = hoveredIndex === index;
                  const isTarget = hoveredIndex !== null ? isHovered : active;

                  const isOpen =
                    (link.isMega === 'product' && productMegaOpen) ||
                    (link.isMega === 'material' && materialsMegaOpen) ||
                    (link.isMega === 'certificates' && certificatesMegaOpen);

                  return (
                    <div
                      key={link.name}
                      className={`relative py-1.5 select-none group ${
                        isOpen ? 'z-50' : 'z-20'
                      }`}
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                        if (link.isMega === 'product') handleProductMouseEnter();
                        else if (link.isMega === 'material') handleMaterialMouseEnter();
                        else if (link.isMega === 'certificates') handleCertificatesMouseEnter();
                      }}
                      onMouseLeave={() => {
                        if (link.isMega === 'product') handleProductMouseLeave();
                        else if (link.isMega === 'material') handleMaterialMouseLeave();
                        else if (link.isMega === 'certificates') handleCertificatesMouseLeave();
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        aria-expanded={link.isMega ? isOpen : undefined}
                        aria-haspopup={link.isMega ? 'menu' : undefined}
                        className={`inline-flex items-center gap-1.5 text-[14.5px] xl:text-[15.5px] font-bold font-sans tracking-tight transition-colors duration-200 cursor-pointer ${
                          isTarget || isOpen
                            ? 'text-[#A94728]'
                            : 'text-[#171A1C] hover:text-[#A94728]'
                        }`}
                      >
                        <span>{link.name}</span>
                        {link.isMega && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isOpen
                                ? 'rotate-180 text-[#A94728]'
                                : isTarget
                                ? 'text-[#A94728]'
                                : 'text-gray-400 group-hover:text-[#A94728]'
                            }`}
                          />
                        )}
                      </a>

                      {/* Brand-Colored Subtle Underline Indicator */}
                      <span
                        className={`absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#A94728] rounded-full transition-all duration-200 ${
                          isTarget || isOpen
                            ? 'opacity-100 scale-x-100'
                            : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                        }`}
                      />

                      {/* Dropdown 1: Product Dropdown directly beneath Product */}
                      {link.isMega === 'product' && (
                        <ProductMegaMenu
                          isOpen={productMegaOpen}
                          onClose={() => setProductMegaOpen(false)}
                          onMouseEnter={handleProductMouseEnter}
                          onMouseLeave={handleProductMouseLeave}
                          onNavigate={(view, anchor, urlPath) => {
                            closeAllMenus();
                            if (onNavigate) onNavigate(view, anchor, urlPath);
                          }}
                          onOpenEnquiry={(prod) => {
                            closeAllMenus();
                            if (onOpenEnquiry) onOpenEnquiry(prod);
                          }}
                        />
                      )}

                      {/* Dropdown 2: Material Dropdown directly beneath Material */}
                      {link.isMega === 'material' && (
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
                      )}

                      {/* Dropdown 3: Certificates Dropdown directly beneath Certificates */}
                      {link.isMega === 'certificates' && (
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
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* GET A QUOTE Corporate CTA Button */}
              <button
                onClick={() => {
                  closeAllMenus();
                  if (onOpenEnquiry) onOpenEnquiry('Navbar Header RFQ');
                }}
                className="btn-wave group relative inline-flex items-center justify-center gap-2 border-2 border-[#A94728] bg-[#A94728] hover:bg-[#8F371B] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider px-5 sm:px-6 py-2 sm:py-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5 active:scale-95"
                aria-label="Get A Quote"
              >
                <span className="relative z-10 text-white font-bold">GET A QUOTE</span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 stroke-[2.5] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

            </div>

            {/* Responsive Header Controls (Hamburger Toggle) */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-lg border border-gray-200 text-[#171A1C] hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Redesigned Mobile Drawer Navigation with Active Indicator Bars */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeAllMenus();
            }
          }}
        >
          <div
            ref={mobileDrawerRef}
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white border-l border-gray-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              {/* Header with Logo & Close Button */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <img
                  src={brandLogo}
                  alt="Rudhira Metal Industries"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links Accordion */}
              <div className="mt-5">
                <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase tracking-widest mb-2">
                  NAVIGATION MENU
                </div>

                <nav className="flex flex-col space-y-1">
                  {mobileNavLinks.map((link) => {
                    const active = isLinkActive(link);

                    // Product Accordion
                    if (link.isMega === 'product') {
                      return (
                        <div
                          key={link.name}
                          className={`border-b border-gray-100 py-1.5 rounded-xl transition-colors ${
                            active ? 'border-l-4 border-l-[#A94728] bg-[#A94728]/5 pl-2.5' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => handleMobileNav('products-landing', null, '/products')}
                              className={`text-base font-bold transition-colors cursor-pointer ${
                                active ? 'text-[#A94728] font-black' : 'text-[#1C2024]'
                              }`}
                            >
                              Products
                            </button>
                            <button
                              type="button"
                              onClick={() => setMobileProductExpanded(!mobileProductExpanded)}
                              className="p-1.5 text-gray-500 hover:text-[#A94728] rounded cursor-pointer"
                              aria-label="Expand product categories"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  mobileProductExpanded ? 'rotate-180 text-[#A94728]' : ''
                                }`}
                              />
                            </button>
                          </div>

                          {mobileProductExpanded && (
                            <div className="mt-2 pl-3 py-2 space-y-2 bg-[#FAF9F7] rounded-xl border border-[#A94728]/20 max-h-60 overflow-y-auto sidebar-sticky-scroll">
                              <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase">
                                TOP PRIORITY PRODUCTS (9)
                              </div>
                              <div className="grid grid-cols-1 gap-1">
                                {[
                                  'forged-fittings',
                                  'flanges',
                                  'butt-weld-fittings',
                                  'ferrule-fittings',
                                  'dairy-pharma-fittings',
                                  'pipes-tubes',
                                  'sheets-plates',
                                  'fasteners',
                                  'rods-bars'
                                ]
                                  .map((slug) => PRODUCT_CATEGORIES.find((p) => p.slug === slug))
                                  .filter(Boolean)
                                  .map((cat) => (
                                    <button
                                      key={cat.id}
                                      type="button"
                                      onClick={() => handleMobileNav('product-category', null, `/products/${getProductSeoSlug(cat.slug)}`)}
                                      className="text-left text-xs font-medium text-gray-700 hover:text-[#A94728] py-1 truncate cursor-pointer"
                                    >
                                      • {cat.name}
                                    </button>
                                  ))}
                              </div>

                              <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase pt-2 border-t border-gray-200">
                                EXTENDED CATALOG (9)
                              </div>
                              <div className="grid grid-cols-1 gap-1">
                                {PRODUCT_CATEGORIES.filter((p) => ![
                                  'forged-fittings',
                                  'flanges',
                                  'butt-weld-fittings',
                                  'ferrule-fittings',
                                  'dairy-pharma-fittings',
                                  'pipes-tubes',
                                  'sheets-plates',
                                  'fasteners',
                                  'rods-bars'
                                ].includes(p.slug)).map((cat) => (
                                  <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => handleMobileNav('product-category', null, `/products/${getProductSeoSlug(cat.slug)}`)}
                                    className="text-left text-xs font-medium text-gray-700 hover:text-[#A94728] py-1 truncate cursor-pointer"
                                  >
                                    • {cat.name}
                                  </button>
                                ))}
                              </div>

                              <div className="pt-2 border-t border-gray-200">
                                <button
                                  type="button"
                                  onClick={() => handleMobileNav('products-landing', null, '/products')}
                                  className="text-[11px] font-mono font-bold text-[#A94728] hover:underline cursor-pointer"
                                >
                                  View All {PRODUCT_CATEGORIES.length} Products Directory →
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Material Accordion
                    if (link.isMega === 'material') {
                      return (
                        <div
                          key={link.name}
                          className={`border-b border-gray-100 py-1.5 rounded-xl transition-colors ${
                            active ? 'border-l-4 border-l-[#A94728] bg-[#A94728]/5 pl-2.5' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => handleMobileNav('materials-landing', null, '/materials')}
                              className={`text-base font-bold transition-colors cursor-pointer ${
                                active ? 'text-[#A94728] font-black' : 'text-[#1C2024]'
                              }`}
                            >
                              Materials
                            </button>
                            <button
                              type="button"
                              onClick={() => setMobileMaterialExpanded(!mobileMaterialExpanded)}
                              className="p-1.5 text-gray-500 hover:text-[#A94728] rounded cursor-pointer"
                              aria-label="Expand materials"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  mobileMaterialExpanded ? 'rotate-180 text-[#A94728]' : ''
                                }`}
                              />
                            </button>
                          </div>

                          {mobileMaterialExpanded && (
                            <div className="mt-2 pl-3 py-2 space-y-1.5 bg-[#FAF9F7] rounded-xl border border-[#A94728]/20 max-h-60 overflow-y-auto sidebar-sticky-scroll">
                              <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase">
                                {MATERIAL_CATEGORIES.length} ALLOY FAMILIES
                              </div>
                              {MATERIAL_CATEGORIES.map((mat) => (
                                <button
                                  key={mat.id}
                                  type="button"
                                  onClick={() => handleMobileNav('material-family', null, `/materials/${getMaterialSeoSlug(mat.slug)}`)}
                                  className="block text-left text-xs font-medium text-gray-700 hover:text-[#A94728] py-1 truncate cursor-pointer"
                                >
                                  • {mat.name}
                                </button>
                              ))}

                              <div className="pt-2 border-t border-gray-200">
                                <button
                                  type="button"
                                  onClick={() => handleMobileNav('materials-landing', null, '/materials')}
                                  className="text-[11px] font-mono font-bold text-[#A94728] hover:underline cursor-pointer"
                                >
                                  View All {MATERIAL_CATEGORIES.length} Metallurgy Families →
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Certificates Accordion
                    if (link.isMega === 'certificates') {
                      return (
                        <div
                          key={link.name}
                          className={`border-b border-gray-100 py-1.5 rounded-xl transition-colors ${
                            active ? 'border-l-4 border-l-[#A94728] bg-[#A94728]/5 pl-2.5' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => handleMobileNav('certificates', null, '/certificates')}
                              className={`text-base font-bold transition-colors cursor-pointer ${
                                active ? 'text-[#A94728] font-black' : 'text-[#1C2024]'
                              }`}
                            >
                              Certificates
                            </button>
                            <button
                              type="button"
                              onClick={() => setMobileCertificatesExpanded(!mobileCertificatesExpanded)}
                              className="p-1.5 text-gray-500 hover:text-[#A94728] rounded cursor-pointer"
                              aria-label="Expand certificates"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  mobileCertificatesExpanded ? 'rotate-180 text-[#A94728]' : ''
                                }`}
                              />
                            </button>
                          </div>

                          {mobileCertificatesExpanded && (
                            <div className="mt-2 pl-3 pr-2 py-2.5 space-y-2 bg-[#FAF9F7] rounded-xl border border-[#A94728]/20">
                              <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase flex items-center justify-between">
                                <span>OFFICIAL ACCREDITATIONS</span>
                                <span className="text-[9px] text-gray-400">{COMPANY_CERTIFICATES.length} DOCUMENTS</span>
                              </div>

                              {/* ISO 9001:2015 Button */}
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveCertId('iso-9001-2015');
                                  setCertModalOpen(true);
                                  closeAllMenus();
                                }}
                                className="w-full text-left p-2.5 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors flex items-center justify-between cursor-pointer"
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="text-xs font-bold text-[#1C2024] truncate">
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
                                type="button"
                                onClick={() => {
                                  setActiveCertId('gst-registration');
                                  setCertModalOpen(true);
                                  closeAllMenus();
                                }}
                                className="w-full text-left p-2.5 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors flex items-center justify-between cursor-pointer"
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="text-xs font-bold text-[#1C2024] truncate">
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

                              <div className="pt-2 border-t border-gray-200">
                                <button
                                  type="button"
                                  onClick={() => handleMobileNav('certificates', null, '/certificates')}
                                  className="text-[11px] font-mono font-bold text-[#A94728] hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                  <span>View Quality & Compliance Center</span>
                                  <span>→</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Standard Links (Home, About Us, Services, Industries, Contact)
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMobileNav(link.page, link.anchor, link.href);
                        }}
                        className={`flex items-center justify-between text-base font-bold py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
                          active
                            ? 'bg-[#A94728]/10 text-[#A94728] border-l-4 border-[#A94728] pl-3.5 font-extrabold shadow-2xs'
                            : 'text-[#1C2024] hover:text-[#A94728] hover:bg-gray-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="text-xs font-mono font-bold">
                          {active ? '● ACTIVE' : '→'}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Direct Contact Desk Section */}
            <div className="pt-5 border-t border-gray-200 space-y-4">
              <div className="text-[10px] font-mono font-bold text-[#A94728] tracking-widest uppercase">
                DIRECT SALES DESK
              </div>

              {/* Contacts with Direct Call & WhatsApp */}
              <div className="space-y-2.5 bg-[#FAF9F7] p-3 rounded-xl border border-gray-200/80">
                {COMPANY_DETAILS.contacts.map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-[#1C2024]">{contact.name}</div>
                      <a href={`tel:${contact.cleanPhone}`} className="text-[#A94728] font-mono font-semibold">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${contact.cleanPhone}`}
                        className="p-1.5 bg-white hover:bg-[#A94728] hover:text-white rounded-md text-[#202427] transition-colors border border-gray-200"
                        title={`Call ${contact.name}`}
                      >
                        <FaPhone className="w-3 h-3" />
                      </a>
                      <a
                        href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white rounded-md transition-colors border border-emerald-200"
                        title={`WhatsApp ${contact.name}`}
                      >
                        <FaWhatsapp className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Get Quote Action */}
              <button
                type="button"
                onClick={() => {
                  if (onOpenEnquiry) onOpenEnquiry('Mobile Drawer RFQ');
                  closeAllMenus();
                }}
                className="btn-wave w-full inline-flex items-center justify-center gap-2 bg-[#A94728] hover:bg-[#8D381D] text-white text-sm font-extrabold uppercase tracking-wider py-3 rounded-md shadow-md transition-all active:scale-[0.97] cursor-pointer"
              >
                <span className="text-white">GET A QUOTE</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-white" />
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
