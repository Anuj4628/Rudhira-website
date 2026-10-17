import React, { useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Target,
  Users,
  Truck,
  Handshake,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  FileCheck2,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPANY_DETAILS, INDUSTRIES_SERVED } from '../data/industrialData';

// Image assets
import aboutHeroImg from '../assets/images/about-hero-steels.jpg';
import whoWeAreImg from '../assets/images/from-steel-to-supply.jpg';
import capabilityImg from '../assets/images/slide-1.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage({ onNavigate, onOpenEnquiry }) {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const setsApartRef = useRef(null);
  const capabilityRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(
        '.about-hero-anim',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power2.out',
        }
      );

      // Who We Are reveal
      gsap.fromTo(
        '.who-we-are-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: whoWeAreRef.current,
            start: 'top 80%',
          },
        }
      );

      // What Sets Us Apart cards stagger
      gsap.fromTo(
        '.apart-card-anim',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: setsApartRef.current,
            start: 'top 80%',
          },
        }
      );

      // Capability reveal
      gsap.fromTo(
        '.capability-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: capabilityRef.current,
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const whatSetsUsApart = [
    {
      id: "01",
      title: "Quality First",
      subtitle: "MATERIAL INTEGRITY",
      description: "Every requirement is approached with a strong focus on material quality, consistency and dependable performance.",
      badge: "RMI / 01",
      icon: <ShieldCheck className="w-6 h-6 text-[#A94728] stroke-[1.5]" />
    },
    {
      id: "02",
      title: "Precision & Consistency",
      subtitle: "EXACT SPECIFICATIONS",
      description: "Attention to specification and detail helps us deliver reliable solutions for demanding industrial requirements.",
      badge: "RMI / 02",
      icon: <Target className="w-6 h-6 text-[#A94728] stroke-[1.5]" />
    },
    {
      id: "03",
      title: "Customer-Centric Service",
      subtitle: "RESPONSIVE DESK",
      description: "We focus on understanding each customer's requirement and providing responsive, practical support.",
      badge: "RMI / 03",
      icon: <Users className="w-6 h-6 text-[#A94728] stroke-[1.5]" />
    },
    {
      id: "04",
      title: "Reliable Supply",
      subtitle: "TIMELY DISPATCH",
      description: "Organized sourcing and supply coordination help customers receive the right material with confidence.",
      badge: "RMI / 04",
      icon: <Truck className="w-6 h-6 text-[#A94728] stroke-[1.5]" />
    },
    {
      id: "05",
      title: "Long-Term Partnerships",
      subtitle: "SUSTAINED TRUST",
      description: "We aim to build lasting relationships based on trust, transparency and dependable service.",
      badge: "RMI / 05",
      icon: <Handshake className="w-6 h-6 text-[#A94728] stroke-[1.5]" />
    }
  ];

  const capabilityBlocks = [
    {
      title: "Material Quality",
      description: "Comprehensive heat number tracking, certified mill test correlation (EN 10204 3.1), and positive material identification (PMI) ensuring uncompromised metallurgical composition.",
      icon: <Award className="w-5 h-5 text-[#A94728]" />
    },
    {
      title: "Product Reliability",
      description: "Strict dimensional compliance to ASME, ASTM, and DIN standards across seamless & welded pipes, forged flanges, butt weld fittings, and heavy plates.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#A94728]" />
    },
    {
      title: "Technical Understanding",
      description: "Deep metallurgical guidance for demanding operating environments—matching alloy chemistry, wall thickness, and pressure classes to exact process requirements.",
      icon: <Layers className="w-5 h-5 text-[#A94728]" />
    },
    {
      title: "Responsive Support",
      description: "Fast turnaround quotation desk, transparent order status updates, tailored cut-to-length processing, and sea-worthy export crating.",
      icon: <FileCheck2 className="w-5 h-5 text-[#A94728]" />
    }
  ];

  // Pick top 6 core industries relevant to Rudhira's product line
  const coreIndustries = INDUSTRIES_SERVED.slice(0, 6);

  return (
    <div ref={pageRef} className="pt-[88px] sm:pt-[96px] lg:pt-[104px]">
      {/* ========================================================
          SECTION 1 — ABOUT HERO
          ======================================================== */}
      <section
        ref={heroRef}
        className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center bg-[#202427] text-white overflow-hidden border-b border-[#202427]/40"
      >
        {/* Background Industrial Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroImg}
            alt="Rudhira Metal Industries - Modern Precision Metal Manufacturing & Supply"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            loading="eager"
          />
          {/* Multi-layered dark gradient overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A1C]/95 via-[#202427]/85 to-[#202427]/65" />
          <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            {/* Small Eyebrow */}
            <div className="about-hero-anim inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
              <span className="tech-label text-xs sm:text-[13px] font-bold tracking-widest text-[#F4E5DC] uppercase">
                ABOUT RUDHIRA METAL INDUSTRIES
              </span>
            </div>

            {/* Main Heading (76–96px desktop) */}
            <h1 className="about-hero-anim text-4xl sm:text-6xl lg:text-[70px] xl:text-[76px] font-extrabold text-white tracking-tight leading-[1.05] mb-6 font-sans">
              Built on Strength.{' '}
              <span className="text-[#F4E5DC] block mt-1">
                Driven by Precision.
              </span>
            </h1>

            {/* Supporting Text (18–20px desktop) */}
            <p className="about-hero-anim text-base sm:text-lg lg:text-[20px] text-[#E7EEF2]/95 font-normal leading-relaxed mb-10 max-w-2xl font-sans">
              Rudhira Metal Industries is committed to delivering dependable metal solutions with a strong focus on quality, precision, consistency and long-term customer relationships.
            </p>

            {/* CTA Buttons (15–17px, Bold 700) */}
            <div className="about-hero-anim flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={() => onNavigate('home', '#products')}
                className="btn-wave inline-flex items-center gap-2.5 border-2 border-[#A94728] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-8 sm:px-9 py-4 rounded-sm shadow-lg transition-all duration-150 active:scale-[0.97] cursor-pointer group"
              >
                <span>Explore Our Products</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="btn-wave inline-flex items-center gap-2.5 border border-white/60 hover:border-white text-white text-sm sm:text-base font-bold uppercase tracking-wider px-8 sm:px-9 py-4 rounded-sm shadow-md transition-all duration-150 active:scale-[0.97] cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Technical Credential Pills */}
            <div className="about-hero-anim mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-[13px] font-mono text-[#D9D9D6]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                <span>MUMBAI CENTRAL INDUSTRIAL STOCKIST</span>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                <span>STAINLESS, CARBON &amp; ALLOY STEELS</span>
              </div>
              <span className="text-white/20 hidden md:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                <span>PAN-INDIA &amp; EXPORT DISPATCH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 — WHO WE ARE (SPLIT LAYOUT)
          ======================================================== */}
      <section
        ref={whoWeAreRef}
        className="py-20 sm:py-24 lg:py-28 bg-[#F8F5F1] border-b border-[#D9D9D6] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Industrial Photography */}
            <div className="who-we-are-anim lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-[#D9D9D6] shadow-industrial group bg-[#202427]">
                {/* Corner Accents */}
                <div className="corner-bracket-tl z-20" />
                <div className="corner-bracket-br z-20" />

                <img
                  src={whoWeAreImg}
                  alt="Industrial metal manufacturing and hot coil rolling mill"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#202427]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Technical Badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#202427]/90 backdrop-blur-md border border-white/20 p-4 rounded-md shadow-xl text-white">
                  <div className="tech-label text-xs text-[#A94728] font-bold mb-1">
                    ESTABLISHED METAL STOCKIST
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white font-sans">
                    Rudhira Metal Industries • Mumbai Central Hub
                  </div>
                  <div className="text-xs text-[#D9D9D6] mt-0.5 font-mono">
                    Pipes • Fittings • Flanges • Plates • Round Bars
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Corporate Copy & Highlights */}
            <div className="who-we-are-anim lg:col-span-6 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4 self-start">
                <span className="w-2 h-2 rounded-full bg-[#A94728]" />
                <span className="tech-label text-[#A94728] font-bold text-xs sm:text-[13px]">
                  WHO WE ARE
                </span>
              </div>

              {/* Heading (44–58px desktop) */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold text-[#202427] tracking-tight leading-[1.14] mb-6 font-sans">
                Engineering Reliability Into Every Metal Solution
              </h2>

              {/* Realistic Corporate Copy (16–18px desktop) */}
              <div className="space-y-4 text-base sm:text-[17px] text-[#202427]/85 leading-relaxed font-normal font-sans">
                <p>
                  <strong className="text-[#202427]">Rudhira Metal Industries</strong> is a dedicated industrial metal supplier and stockist headquartered in Mumbai's historic industrial trading corridor at Khetwadi. We specialize in supplying high-integrity stainless steel, carbon steel, and alloy piping infrastructure, forged fittings, flanges, plates, and round bars to engineering contractors and mission-critical industries.
                </p>
                <p>
                  Industrial projects cannot afford compromise. That is why our supply workflow is anchored in disciplined sourcing, verified material traceability, and strict adherence to international standards including ASME, ASTM, and DIN. Whether fulfilling precision cut-to-length tubing or coordinating complete pipeline flange schedules, our team delivers with commercial clarity and technical accuracy.
                </p>
                <p>
                  With organized stocking yards, close mill associations, and dependable Pan-India and overseas logistics coordination, we serve as a trusted procurement partner focused on consistency, transparent communication, and long-term customer partnerships.
                </p>
              </div>

              {/* Statistics / Highlights Row Below Copy */}
              <div className="mt-8 pt-6 border-t border-[#D9D9D6] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-white border border-[#D9D9D6] rounded-md shadow-xs">
                  <div className="tech-label text-[10px] text-[#A94728] font-bold mb-1">
                    STANDARDS
                  </div>
                  <div className="text-sm font-extrabold text-[#202427]">
                    Quality Focused
                  </div>
                  <div className="text-[11px] text-[#202427]/60 font-mono mt-0.5">
                    100% Verified
                  </div>
                </div>

                <div className="p-3 bg-white border border-[#D9D9D6] rounded-md shadow-xs">
                  <div className="tech-label text-[10px] text-[#A94728] font-bold mb-1">
                    COMPLIANCE
                  </div>
                  <div className="text-sm font-extrabold text-[#202427]">
                    Industry Ready
                  </div>
                  <div className="text-[11px] text-[#202427]/60 font-mono mt-0.5">
                    ASME / ASTM
                  </div>
                </div>

                <div className="p-3 bg-white border border-[#D9D9D6] rounded-md shadow-xs">
                  <div className="tech-label text-[10px] text-[#A94728] font-bold mb-1">
                    SERVICE
                  </div>
                  <div className="text-sm font-extrabold text-[#202427]">
                    Customer Driven
                  </div>
                  <div className="text-[11px] text-[#202427]/60 font-mono mt-0.5">
                    Direct Support
                  </div>
                </div>

                <div className="p-3 bg-white border border-[#D9D9D6] rounded-md shadow-xs">
                  <div className="tech-label text-[10px] text-[#A94728] font-bold mb-1">
                    LOGISTICS
                  </div>
                  <div className="text-sm font-extrabold text-[#202427]">
                    Reliable Supply
                  </div>
                  <div className="text-[11px] text-[#202427]/60 font-mono mt-0.5">
                    Pan-India & Export
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — OUR APPROACH / WHAT SETS US APART
          ======================================================== */}
      <section
        ref={setsApartRef}
        className="py-20 sm:py-24 lg:py-28 bg-[#F4E5DC] border-b border-[#D9D9D6] relative overflow-hidden"
      >
        {/* Engineering grid pattern overlay matching homepage WhyChooseUs */}
        <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#A94728]" />
              <span className="tech-label text-[#A94728] font-bold text-xs">
                OUR APPROACH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202427] tracking-tight leading-tight mb-4">
              What Sets Us Apart
            </h2>

            <p className="text-base sm:text-lg text-[#202427]/75 font-normal max-w-2xl mx-auto leading-relaxed">
              We combine deep metallurgical experience, disciplined quality assurance, and attentive commercial support to deliver reliable outcomes for demanding industrial projects.
            </p>
          </div>

          {/* 5 Premium Industrial Feature Cards using exact homepage card styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatSetsUsApart.map((card, index) => (
              <div
                key={card.id}
                className={`apart-card-anim group relative p-7 bg-[#F8F5F1] hover:bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-industrial-hover flex flex-col justify-between ${
                  index === 3 || index === 4 ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Corner Accent Details */}
                <div className="corner-bracket-tl" />
                <div className="corner-bracket-br" />

                <div>
                  {/* Top Number & Icon Container */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#202427] group-hover:text-[#A94728] transition-colors">
                      {card.id}
                    </span>
                    <div className="p-2.5 bg-white rounded-md border border-[#D9D9D6] shadow-sm group-hover:border-[#A94728]/40 group-hover:bg-[#F4E5DC]/50 transition-all">
                      {card.icon}
                    </div>
                  </div>

                  {/* Subtitle Eyebrow */}
                  <div className="tech-label text-[11px] text-[#A94728] mb-1 font-bold tracking-widest">
                    {card.subtitle}
                  </div>

                  {/* Main Card Title */}
                  <h3 className="text-xl font-extrabold text-[#202427] mb-3 tracking-tight group-hover:text-[#A94728] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#202427]/75 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Layered Border & Technical Badge: RMI / 01 → */}
                <div className="mt-8 pt-4 border-t border-[#D9D9D6] group-hover:border-[#A94728]/40 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#202427] tracking-wider">
                    {card.badge}
                  </span>
                  <span className="text-[#A94728] font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}

            {/* 6th Card: Contact & RFQ Quick Callout */}
            <div className="apart-card-anim group relative p-7 bg-[#202427] text-white border-2 border-[#202427] hover:border-[#A94728] rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-industrial-hover flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase">
                    COMMERCIAL PARTNER
                  </span>
                  <div className="p-2.5 bg-white/10 rounded-md border border-white/20">
                    <Sparkles className="w-6 h-6 text-[#F4E5DC]" />
                  </div>
                </div>

                <div className="tech-label text-[11px] text-[#D9D9D6] mb-1 font-bold">
                  DIRECT DESK ASSISTANCE
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                  Have a Custom Specification?
                </h3>

                <p className="text-xs sm:text-sm text-[#D9D9D6]/85 leading-relaxed">
                  Our commercial and technical team is ready to evaluate your material lists, test requirements, and delivery schedules.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/20">
                <button
                  onClick={onOpenEnquiry}
                  className="btn-wave w-full inline-flex items-center justify-center gap-2 border-2 border-[#A94728] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-sm shadow-sm transition-all cursor-pointer active:scale-95"
                >
                  <span>Request RFQ Assessment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4 — QUALITY, CAPABILITY & INDUSTRIES
          ======================================================== */}
      <section
        ref={capabilityRef}
        className="py-20 sm:py-24 lg:py-28 bg-white border-b border-[#D9D9D6] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#A94728]" />
              <span className="tech-label text-[#A94728] font-bold text-xs">
                CAPABILITY & QUALITY RIGOR
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202427] tracking-tight leading-tight mb-4">
              Built for Industrial Requirements
            </h2>

            <p className="text-base sm:text-lg text-[#202427]/75 font-normal leading-relaxed">
              Quality, capability and dependable service come together to support diverse industrial applications across manufacturing, fabrication, and continuous process plants.
            </p>
          </div>

          {/* Part A: Balanced Split Layout (Image + 4 Capability Blocks) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-24">
            {/* Left: Large Industrial Image */}
            <div className="capability-anim lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-[#D9D9D6] shadow-industrial bg-[#202427] group">
                <div className="corner-bracket-tl z-20" />
                <div className="corner-bracket-br z-20" />

                <img
                  src={capabilityImg}
                  alt="Precision laser cutting and CNC metal plate processing facility"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#202427]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-[#202427]/90 backdrop-blur-md border border-white/20 p-3.5 rounded text-white">
                  <div className="tech-label text-[10px] text-[#A94728] font-bold">
                    PRECISION FABRICATION & TESTING
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    Dimensional Tolerance & Mill Spec Conformance
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 4 Capability Blocks */}
            <div className="capability-anim lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {capabilityBlocks.map((block) => (
                <div
                  key={block.title}
                  className="p-6 bg-[#F8F5F1] hover:bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-lg shadow-xs transition-all duration-300 hover:shadow-industrial flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-white rounded-md border border-[#D9D9D6] group-hover:border-[#A94728]/40 group-hover:bg-[#F4E5DC]/40 transition-colors">
                        {block.icon}
                      </div>
                      <h3 className="text-base font-extrabold text-[#202427] group-hover:text-[#A94728] transition-colors">
                        {block.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#202427]/75 leading-relaxed">
                      {block.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#D9D9D6] text-[10px] font-mono text-[#A94728] font-bold tracking-wider uppercase">
                    CERTIFIED PROCESS
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: Industries We Serve Area */}
          <div className="pt-12 border-t border-[#D9D9D6]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase mb-2">
                  SECTOR APPLICATIONS
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202427] tracking-tight">
                  Industries We Serve
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#202427]/70 max-w-md">
                Supplying essential metals, pipes, fittings and flanges tailored for rigorous mission-critical sectors.
              </p>
            </div>

            {/* Clean Industry Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreIndustries.map((ind) => (
                <div
                  key={ind.id}
                  className="group relative rounded-lg overflow-hidden border-2 border-[#D9D9D6] hover:border-[#A94728] bg-[#202427] shadow-industrial hover:shadow-industrial-hover transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="h-48 sm:h-52 w-full overflow-hidden relative">
                    <img
                      src={ind.image}
                      alt={`${ind.name} metal supply solutions`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#202427]/95 via-[#202427]/50 to-transparent" />
                  </div>

                  <div className="p-5 relative bg-[#202427] border-t border-white/10">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs text-[#A94728] font-bold">
                        SECTOR // {ind.id}
                      </span>
                      <span className="text-xs text-white/50 font-mono">
                        RMI SUPPLY
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F4E5DC] transition-colors">
                      {ind.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5 — OUR COMMITMENT / CLOSING CTA
          ======================================================== */}
      <section
        ref={ctaRef}
        className="relative py-20 sm:py-24 lg:py-28 bg-[#7E321F] text-white overflow-hidden border-b border-black/20"
      >
        {/* Subtle Metallic Technical Grid Overlay */}
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

        {/* Subtle Linear Gradient Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E321F] via-[#90391D] to-[#692919] opacity-95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-white/10 border border-white/20 text-[#F4E5DC] text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>OUR COMMITMENT TO CLIENTS</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
            Strength You Can Rely On
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#F4E5DC]/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
            From product selection to supply, Rudhira Metal Industries is focused on delivering dependable solutions that support your business and project requirements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-wave inline-flex items-center gap-2.5 border-2 border-white text-white text-sm font-extrabold uppercase tracking-wider px-8 py-4 rounded-sm shadow-xl transition-all duration-150 active:scale-[0.97] cursor-pointer group"
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onNavigate('home', '#products')}
              className="btn-wave inline-flex items-center gap-2.5 border border-white/40 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-sm shadow-lg transition-all duration-150 active:scale-[0.97] cursor-pointer"
            >
              <span>View Products</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Quick Info Micro Strip */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-[#F4E5DC]/80">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>{COMPANY_DETAILS.shortAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>{COMPANY_DETAILS.emails[0]}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
