import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import TrustStrip from './components/TrustStrip';
import ProductsSection from './components/ProductsSection';
import MaterialsMarquee from './components/MaterialsMarquee';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import IndustriesCarousel from './components/IndustriesCarousel';
import GlobalReach from './components/GlobalReach';
import Clientele from './components/Clientele';
import QualityStandards from './components/QualityStandards';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import EnquiryModal from './components/EnquiryModal';

// Dedicated Production-Ready Pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CertificatesPage from './pages/CertificatesPage';
import FlangesDimensionsPage from './pages/dimensions/FlangesDimensionsPage';
import ButtweldFittingsDimensionsPage from './pages/dimensions/ButtweldFittingsDimensionsPage';
import ForgeFittingsDimensionsPage from './pages/dimensions/ForgeFittingsDimensionsPage';
import FastenersDimensionsPage from './pages/dimensions/FastenersDimensionsPage';
import PipesDimensionsPage from './pages/dimensions/PipesDimensionsPage';

// Multi-Level Products & Materials System Pages
import ProductsLandingPage from './pages/products/ProductsLandingPage';
import ProductCategoryPage from './pages/products/ProductCategoryPage';
import ProductMaterialDetailPage from './pages/products/ProductMaterialDetailPage';
import GradeDetailPage from './pages/products/GradeDetailPage';
import ProductTypeDetailPage from './pages/products/ProductTypeDetailPage';
import MaterialsLandingPage from './pages/materials/MaterialsLandingPage';
import MaterialFamilyPage from './pages/materials/MaterialFamilyPage';

import {
  getProductBySlug,
  getMaterialBySlug,
  getGradeBySlug,
  getFlangeTypeBySlug,
  getFastenerTypeBySlug,
  getMaterialSeoSlug,
  getProductMaterialSeoSlug,
  getProductSeoSlug,
  extractBaseMaterialSlug,
  extractBaseProductSlug
} from './data/productsData';

// Dynamic SEO helpers for meta description & canonical URL
function updateMetaTag(name, content) {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonicalUrl(url) {
  if (typeof document === 'undefined') return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

// Universal URL Router Parser supporting both SEO-friendly URLs and classic slugs
function parseUrl(pathname) {
  if (!pathname) return { page: 'home', params: {} };
  const clean = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (!clean) return { page: 'home', params: {} };

  const parts = clean.split('/');

  if (parts[0] === 'about' || parts[0] === 'about-us') {
    return { page: 'about', params: {} };
  }
  if (parts[0] === 'contact' || parts[0] === 'contact-us') {
    return { page: 'contact', params: {} };
  }
  if (parts[0] === 'certificates' || parts[0] === 'certificate' || parts[0] === 'certification' || parts[0] === 'certifications') {
    return { page: 'certificates', params: {} };
  }
  if (parts[0] === 'dimension' || parts[0] === 'dimensions') {
    if (parts.length >= 2) {
      if (parts[1] === 'flanges' || parts[1] === 'flange') {
        return { page: 'dimensions-flanges', params: {} };
      }
      if (parts[1] === 'buttweld-fittings' || parts[1] === 'buttweld' || parts[1] === 'butt-weld') {
        return { page: 'dimensions-buttweld-fittings', params: {} };
      }
      if (parts[1] === 'forge-fittings' || parts[1] === 'forged-fittings' || parts[1] === 'forged' || parts[1] === 'forge') {
        return { page: 'dimensions-forge-fittings', params: {} };
      }
      if (parts[1] === 'fasteners' || parts[1] === 'fastener') {
        return { page: 'dimensions-fasteners', params: {} };
      }
      if (parts[1] === 'pipes-tubes' || parts[1] === 'pipes' || parts[1] === 'pipe' || parts[1] === 'tubes' || parts[1] === 'tube') {
        return { page: 'dimensions-pipes-tubes', params: {} };
      }
    }
    return { page: 'dimensions-flanges', params: {} };
  }
  if (parts[0] === 'services' || parts[0] === 'value-added-services') {
    return { page: 'home', params: { scrollTo: '#services' } };
  }
  if (parts[0] === 'industries' || parts[0] === 'sectors') {
    return { page: 'home', params: { scrollTo: '#industries' } };
  }

  // Materials routing (/materials/:materialSlug)
  if (parts[0] === 'materials' || parts[0] === 'material') {
    if (parts.length === 1) {
      return { page: 'materials-landing', params: {} };
    }
    if (parts.length >= 2) {
      const baseMat = extractBaseMaterialSlug(parts[1]) || parts[1];
      return { page: 'material-family', params: { materialSlug: baseMat, seoSlug: parts[1] } };
    }
  }

  // Products routing
  if (parts[0] === 'products' || parts[0] === 'product') {
    if (parts.length === 1) {
      return { page: 'products-landing', params: {} };
    }
    if (parts.length === 2) {
      // Could be a SEO product slug like "flanges-manufactured-in-mumbai"
      const baseProd = extractBaseProductSlug(parts[1]) || parts[1];
      return { page: 'product-category', params: { productSlug: baseProd, seoSlug: parts[1] } };
    }
    if (parts.length === 3) {
      const baseProd = extractBaseProductSlug(parts[1]) || parts[1];
      const baseMat = extractBaseMaterialSlug(parts[2]) || parts[2];
      return {
        page: 'product-material',
        params: { productSlug: baseProd, materialSlug: baseMat, seoSlug: parts[2] }
      };
    }
    if (parts.length === 5 && parts[3] === 'types') {
      const baseProd = extractBaseProductSlug(parts[1]) || parts[1];
      const baseMat = extractBaseMaterialSlug(parts[2]) || parts[2];
      return {
        page: 'product-type-detail',
        params: { productSlug: baseProd, materialSlug: baseMat, typeSlug: parts[4], seoSlug: parts[2] }
      };
    }
    if (parts.length >= 4) {
      const baseProd = extractBaseProductSlug(parts[1]) || parts[1];
      const baseMat = extractBaseMaterialSlug(parts[2]) || parts[2];
      return {
        page: 'grade-detail',
        params: { productSlug: baseProd, materialSlug: baseMat, gradeSlug: parts[3], seoSlug: parts[2] }
      };
    }
  }

  return { page: 'home', params: {} };
}

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');

  // Initial detection based on current URL
  const initialRoute = typeof window !== 'undefined'
    ? parseUrl(window.location.pathname)
    : { page: 'home', params: {} };

  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [routeParams, setRouteParams] = useState(initialRoute.params);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const { page, params } = parseUrl(window.location.pathname);
      setCurrentPage(page);
      setRouteParams(params);
      if (params.scrollTo) {
        setTimeout(() => {
          const el = document.querySelector(params.scrollTo);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle initial scrollTo on direct load with hash or route
  useEffect(() => {
    const hash = window.location.hash || routeParams?.scrollTo;
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Update dynamic page titles, meta descriptions & canonical URLs for SEO & Browser Tabs
  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateCanonicalUrl(window.location.origin + window.location.pathname);
    }

    if (currentPage === 'about') {
      document.title = 'About Us | Rudhira Metal Industries | Precision Metal Products & Sourcing';
      updateMetaTag('description', 'Learn about Rudhira Metal Industries, premier manufacturer and supplier of stainless steel, pipes, tubes, flanges, and fittings in Mumbai.');
    } else if (currentPage === 'contact') {
      document.title = 'Contact Us | Rudhira Metal Industries | Request a Quote & Commercial Desk';
      updateMetaTag('description', 'Contact Rudhira Metal Industries sales and commercial desk in Khetwadi, Mumbai. Fast industrial quotations for flanges, pipes, fasteners, and alloys.');
    } else if (currentPage === 'certificates') {
      document.title = 'Official Quality Certificates & ISO 9001:2015 Accreditations | Rudhira Metal Industries';
      updateMetaTag('description', 'Inspect certified ISO 9001:2015 registration and Government of India GST compliance documents for Rudhira Metal Industries.');
    } else if (currentPage === 'dimensions-flanges' || currentPage === 'flanges') {
      document.title = 'Flanges Dimensions (ASME B16.5, DIN, BS-10) | Technical Catalogue | Rudhira Metal Industries';
      updateMetaTag('description', 'Comprehensive dimensional specifications, bolt hole sizes, weights, and tolerances for industrial pipe flanges (Class 150 to 2500, PN10/16, BS10) by Rudhira Metal Industries.');
    } else if (currentPage === 'dimensions-buttweld-fittings' || currentPage === 'buttweld-fittings') {
      document.title = 'Buttweld Fittings Dimensions (ANSI B16.9) | Technical Catalogue | Rudhira Metal Industries';
      updateMetaTag('description', 'Complete dimensional charts for ASME/ANSI B16.9 buttweld elbows, tees, reducers, and caps from 1/2" to 36" NB by Rudhira Metal Industries.');
    } else if (currentPage === 'dimensions-forge-fittings' || currentPage === 'forge-fittings') {
      document.title = 'Forged Fittings Dimensions (ANSI B16.11 Screwed & Socket Weld) | Rudhira Metal Industries';
      updateMetaTag('description', 'Engineering dimension standards for ANSI B16.11 forged threaded and socket weld pipe fittings (Class 3000# & 6000#) by Rudhira Metal Industries.');
    } else if (currentPage === 'dimensions-fasteners' || currentPage === 'fasteners') {
      document.title = 'Fasteners Dimensions (Screw Sizes & UNC / UNF Threads) | Technical Catalogue | Rudhira Metal Industries';
      updateMetaTag('description', 'Standard machine screw sizes (#1 to #24) and ASME B1.1 unified standard thread specifications (UNC Coarse & UNF Fine) by Rudhira Metal Industries.');
    } else if (currentPage === 'dimensions-pipes-tubes' || currentPage === 'pipes-tubes') {
      document.title = 'Pipes & Tubes Dimensions (ASME B36.10M & B36.19M) | Technical Catalogue | Rudhira Metal Industries';
      updateMetaTag('description', 'Complete pipe dimensions, wall thicknesses (Sch 5S to XXS), and weight tables (kg/mtr) for seamless and welded pipes from 1/8" to 48" NB by Rudhira Metal Industries.');
    } else if (currentPage === 'products-landing') {
      document.title = 'Industrial Products Catalog (18 Categories) | Rudhira Metal Industries';
      updateMetaTag('description', 'Explore 18 industrial product categories including flanges, fasteners, pipes, tubes, butt weld fittings, and sheets manufactured and stocked in Mumbai.');
    } else if (currentPage === 'product-category') {
      const prod = getProductBySlug(routeParams.productSlug);
      document.title = prod
        ? `${prod.name} | Rudhira Metal Industries – Industrial Supply Mumbai`
        : 'Product Category | Rudhira Metal Industries';
      updateMetaTag('description', prod ? `High quality ${prod.name} manufactured and stocked in Mumbai with mill test certificates and full ASME/ANSI compliance.` : '');
    } else if (currentPage === 'product-material') {
      const prod = getProductBySlug(routeParams.productSlug);
      const mat = getMaterialBySlug(routeParams.materialSlug);
      const isStock = routeParams.seoSlug ? routeParams.seoSlug.includes('stock-available') : (routeParams.productSlug === 'flanges');
      const phrase = isStock ? 'Stock Available in Mumbai' : 'Manufactured in Mumbai';
      document.title = prod && mat
        ? `${mat.name} ${prod.name} – ${phrase} | Rudhira Metal Industries`
        : 'Product Material Detail | Rudhira Metal Industries';
      updateMetaTag('description', prod && mat ? `Buy ${mat.name} ${prod.name} with certified MTC, mill standards, and ready industrial stock. ${phrase}. Contact Rudhira Metal Industries.` : '');
    } else if (currentPage === 'grade-detail') {
      const prod = getProductBySlug(routeParams.productSlug);
      const mat = getMaterialBySlug(routeParams.materialSlug);
      const grade = getGradeBySlug(routeParams.gradeSlug, routeParams.materialSlug);
      const gradeName = grade ? grade.name : (routeParams.gradeSlug ? routeParams.gradeSlug.toUpperCase() : 'Grade');
      document.title = `${mat ? mat.name : ''} Grade ${gradeName} ${prod ? prod.name : ''} | Specifications | Rudhira Metal`;
      updateMetaTag('description', `Technical specifications, chemical composition, and mechanical properties of ${mat ? mat.name : ''} Grade ${gradeName} ${prod ? prod.name : ''}.`);
    } else if (currentPage === 'product-type-detail') {
      const prod = getProductBySlug(routeParams.productSlug);
      const mat = getMaterialBySlug(routeParams.materialSlug);
      const type = getFlangeTypeBySlug(routeParams.typeSlug, routeParams.materialSlug) || getFastenerTypeBySlug(routeParams.typeSlug, routeParams.materialSlug);
      const typeName = type ? type.name : 'Type Specification';
      document.title = `${mat ? mat.name : ''} ${typeName} ${prod ? prod.name : ''} | ASME / DIN Specifications | Rudhira Metal`;
      updateMetaTag('description', `Dimensional specifications and pressure ratings for ${mat ? mat.name : ''} ${typeName} ${prod ? prod.name : ''}.`);
    } else if (currentPage === 'materials-landing') {
      document.title = 'Certified Materials & Alloys (9 Categories) | Rudhira Metal Industries';
      updateMetaTag('description', 'Comprehensive metallurgy catalog covering 9 certified material families: Stainless Steel, Carbon Steel, Duplex, Super Duplex, Nickel Alloys, and Titanium.');
    } else if (currentPage === 'material-family') {
      const mat = getMaterialBySlug(routeParams.materialSlug);
      const isMfg = routeParams.seoSlug ? routeParams.seoSlug.includes('manufactured') : (routeParams.materialSlug === 'duplex-stainless-steel' || routeParams.materialSlug === 'carbon-steel' || routeParams.materialSlug === 'nickel-alloys' || routeParams.materialSlug === 'exotic-alloys');
      const phrase = isMfg ? 'Manufactured in Mumbai' : 'Stock Available in Mumbai';
      document.title = mat
        ? `${mat.name} – ${phrase} | Rudhira Metal Industries`
        : 'Material Family | Rudhira Metal Industries';
      updateMetaTag('description', mat ? `Certified ${mat.name} supplier & stockist in Mumbai. ${phrase}. Complete chemical & mechanical MTC to EN 10204 3.1 standard.` : '');
    } else {
      document.title = 'Rudhira Metal Industries | Precision Industrial Metal Products & Fittings Supply';
      updateMetaTag('description', 'Rudhira Metal Industries is an ISO 9001:2015 certified manufacturer and stockist of pipes, tubes, flanges, fasteners, fittings, and ferrous metals based in Mumbai, India.');
    }
  }, [currentPage, routeParams]);

  // Seamless client-side navigation handler supporting path updates and smooth anchor scrolling
  const navigateTo = (page, anchor = null, urlPath = null) => {
    let targetPath = urlPath;
    if (!targetPath) {
      if (page === 'home') {
        targetPath = anchor ? `/${anchor}` : '/';
      } else if (page === 'about') targetPath = '/about';
      else if (page === 'contact') targetPath = '/contact';
      else if (page === 'certificates') targetPath = '/certificates';
      else if (page === 'dimensions-flanges' || page === 'flanges') targetPath = '/dimensions/flanges';
      else if (page === 'dimensions-buttweld-fittings' || page === 'buttweld-fittings') targetPath = '/dimensions/buttweld-fittings';
      else if (page === 'dimensions-forge-fittings' || page === 'forge-fittings') targetPath = '/dimensions/forge-fittings';
      else if (page === 'dimensions-fasteners' || page === 'fasteners') targetPath = '/dimensions/fasteners';
      else if (page === 'dimensions-pipes-tubes' || page === 'pipes-tubes') targetPath = '/dimensions/pipes-tubes';
      else if (page === 'products-landing') targetPath = '/products';
      else if (page === 'materials-landing') targetPath = '/materials';
      else if (page === 'product-category' && routeParams?.productSlug) targetPath = `/products/${routeParams.productSlug}`;
      else if (page === 'material-family' && routeParams?.materialSlug) targetPath = `/materials/${routeParams.materialSlug}`;
      else targetPath = '/';
    }

    const cleanPath = targetPath.split('#')[0] || '/';
    if (window.location.pathname !== cleanPath) {
      window.history.pushState(null, '', targetPath);
    }

    const { page: resolvedPage, params: resolvedParams } = parseUrl(cleanPath);
    const destinationPage = page || resolvedPage;
    setCurrentPage(destinationPage);
    setRouteParams(resolvedParams);

    if (anchor) {
      const doScroll = () => {
        const el = document.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };
      // Multi-phase execution handles both same-page and cross-page anchor scrolling smoothly
      setTimeout(doScroll, 60);
      setTimeout(doScroll, 220);
      setTimeout(doScroll, 400);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (initialProd = '', initialMat = '') => {
    setSelectedProduct(initialProd);
    setSelectedMaterial(initialMat);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const handleSelectProduct = (productName) => {
    handleOpenEnquiry(productName, '');
  };

  const handleSelectMaterial = (materialName) => {
    handleOpenEnquiry('', materialName);
  };

  const handleSelectIndustry = (industryName) => {
    handleOpenEnquiry(`Industrial Requirement for ${industryName}`, '');
  };

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-graphite font-sans selection:bg-brand-navy selection:text-white flex flex-col">
      {/* Sticky Top Navbar with Mega Menus */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Flow: Homepage, About, Contact, or Products/Materials Multi-Level Pages */}
      {currentPage === 'home' && (
        <main className="flex-grow">
          {/* Full-Screen Industrial Hero Slider */}
          <HeroSlider
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={navigateTo}
          />

          {/* Industrial Trust Strip */}
          <TrustStrip />

          {/* 01 — Our Products */}
          <ProductsSection onSelectProduct={handleSelectProduct} onNavigate={navigateTo} />

          {/* 02 — Materials We Work With (Infinite Marquee) */}
          <MaterialsMarquee onSelectMaterial={handleSelectMaterial} onNavigate={navigateTo} />

          {/* 03 — Why Choose Us */}
          <WhyChooseUs onOpenEnquiry={() => handleOpenEnquiry()} onNavigate={navigateTo} />

          {/* 04 — Value Added Services */}
          <ServicesSection onOpenEnquiry={() => handleOpenEnquiry()} />

          {/* 05 — Industries We Serve (Infinite Carousel) */}
          <IndustriesCarousel onSelectIndustry={handleSelectIndustry} />

          {/* 06 — Global Reach (Export Destinations + Pan-India Grid) */}
          <GlobalReach onOpenEnquiry={() => handleOpenEnquiry()} />

          {/* 07 — Clientele / Trusted By */}
          <Clientele />

          {/* Quality & Standards Micro Section */}
          <QualityStandards />

          {/* Final Strong CTA */}
          <FinalCTA onOpenEnquiry={() => handleOpenEnquiry()} />
        </main>
      )}

      {currentPage === 'about' && (
        <main className="flex-grow">
          <AboutPage
            onNavigate={navigateTo}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        </main>
      )}

      {currentPage === 'contact' && (
        <main className="flex-grow">
          <ContactPage
            onNavigate={navigateTo}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        </main>
      )}

      {/* Official Certificates & Accreditations Directory (/certificates) */}
      {currentPage === 'certificates' && (
        <main className="flex-grow">
          <CertificatesPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* Dimensions: Flanges (/dimensions/flanges) */}
      {(currentPage === 'dimensions-flanges' || currentPage === 'flanges') && (
        <main className="flex-grow">
          <FlangesDimensionsPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* Dimensions: Buttweld Fittings (/dimensions/buttweld-fittings) */}
      {(currentPage === 'dimensions-buttweld-fittings' || currentPage === 'buttweld-fittings') && (
        <main className="flex-grow">
          <ButtweldFittingsDimensionsPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* Dimensions: Forge Fittings (/dimensions/forge-fittings) */}
      {(currentPage === 'dimensions-forge-fittings' || currentPage === 'forge-fittings') && (
        <main className="flex-grow">
          <ForgeFittingsDimensionsPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* Dimensions: Fasteners (/dimensions/fasteners) */}
      {(currentPage === 'dimensions-fasteners' || currentPage === 'fasteners') && (
        <main className="flex-grow">
          <FastenersDimensionsPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* Dimensions: Pipes & Tubes (/dimensions/pipes-tubes) */}
      {(currentPage === 'dimensions-pipes-tubes' || currentPage === 'pipes-tubes') && (
        <main className="flex-grow">
          <PipesDimensionsPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* 1. Products Landing Directory (/products) */}
      {currentPage === 'products-landing' && (
        <main className="flex-grow">
          <ProductsLandingPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* 2. Product Category Landing (/products/:productSlug) */}
      {currentPage === 'product-category' && (
        <main className="flex-grow">
          <ProductCategoryPage
            productSlug={routeParams.productSlug}
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* 3. Product + Material Detail Page (/products/:productSlug/:materialSlug) */}
      {currentPage === 'product-material' && (
        <main className="flex-grow">
          <ProductMaterialDetailPage
            productSlug={routeParams.productSlug}
            materialSlug={routeParams.materialSlug}
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* 4. Grade Detail Page (/products/:productSlug/:materialSlug/:gradeSlug) */}
      {currentPage === 'grade-detail' && (
        <main className="flex-grow">
          <GradeDetailPage
            productSlug={routeParams.productSlug}
            materialSlug={routeParams.materialSlug}
            gradeSlug={routeParams.gradeSlug}
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* 5. Product Type Detail Page (/products/:productSlug/:materialSlug/types/:typeSlug) */}
      {currentPage === 'product-type-detail' && (
        <main className="flex-grow">
          <ProductTypeDetailPage
            productSlug={routeParams.productSlug}
            materialSlug={routeParams.materialSlug}
            typeSlug={routeParams.typeSlug}
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* 6. Materials Overview Directory (/materials) */}
      {currentPage === 'materials-landing' && (
        <main className="flex-grow">
          <MaterialsLandingPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* 7. Material Family Detail Page (/materials/:materialSlug) */}
      {currentPage === 'material-family' && (
        <main className="flex-grow">
          <MaterialFamilyPage
            materialSlug={routeParams.materialSlug}
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        </main>
      )}

      {/* Multi-Column Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Hero Contact Floating Actions (WhatsApp & Direct Call) */}
      <FloatingActions onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Quotation / RFQ Modal with Prefilled Values */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialProduct={selectedProduct}
        initialMaterial={selectedMaterial}
      />
    </div>
  );
}
