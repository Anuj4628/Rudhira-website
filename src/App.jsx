import React, { useState } from 'react';
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

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');

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
    <div className="min-h-screen bg-brand-offwhite text-brand-graphite font-sans selection:bg-brand-orange selection:text-white flex flex-col">
      {/* Sticky Top Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Homepage Flow */}
      <main className="flex-grow">
        {/* Full-Screen Industrial Hero Slider */}
        <HeroSlider onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Industrial Trust Strip */}
        <TrustStrip />

        {/* 01 — Our Products */}
        <ProductsSection onSelectProduct={handleSelectProduct} />

        {/* 02 — Materials We Work With (Infinite Marquee) */}
        <MaterialsMarquee onSelectMaterial={handleSelectMaterial} />

        {/* 03 — Why Choose Us */}
        <WhyChooseUs onOpenEnquiry={() => handleOpenEnquiry()} />

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

      {/* Multi-Column Corporate Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Hero Contact Floating Actions (WhatsApp & Direct Call) */}
      <FloatingActions onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Quotation / RFQ Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialProduct={selectedProduct}
        initialMaterial={selectedMaterial}
      />
    </div>
  );
}
