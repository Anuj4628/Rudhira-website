import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

// Crystal-clear industrial image assets (preserved exactly)
import heroPlatesCoilsImg from '../assets/Product BG/heavy-engineering-hero-bg.jpg';
import heroPipesImg from '../assets/Product BG/industrial-steel-pipes-hero-bg.jpg';
import heroBarsAlloysImg from '../assets/Product BG/precision-round-bars-hero-bg.jpg';
import heroFlangesImg from '../assets/Product BG/forged-flanges-fittings-hero-bg.jpg';

// Four slides adhering to the exact advertisement design system
const HERO_SLIDES_DATA = [
  {
    id: "01",
    focus: "Custom Product Requirements",
    topRibbon: "PRECISION METALLURGY • STRUCTURAL STOCK",
    darkBadge: "INDUSTRIAL METAL PRODUCTS",
    mainHeading: "METAL STOCK FOR YOUR REQUIREMENTS",
    supportingLine: "PRODUCT RANGE • MATERIAL GRADES • CUT SIZES",
    techHeader: "CONTACT OUR TEAM FOR PRODUCT AVAILABILITY AND QUOTATIONS",
    techSpecs: "CNC PLASMA, LASER & WATERJET PLATE BLANKS",
    techFinish: "FORGED FITTINGS, FLANGES & STRUCTURAL COMPONENTS",
    adPromoEyebrow: "BESPOKE ORDERS",
    adPromoTitle: "CUSTOM CUT SIZES",
    badgeLine1: "EXPERT",
    badgeLine2: "SALES",
    badgeLine3: "DESK",
    image: heroFlangesImg,
    alt: "Custom cut stainless steel profiles and forged fittings"
  },
  {
    id: "02",
    focus: "Industrial Steel Pipes",
    topRibbon: "PRECISION METALLURGY • STRUCTURAL STOCK",
    darkBadge: "INDUSTRIAL METAL PRODUCTS",
    mainHeading: "INDUSTRIAL STEEL PIPES",
    supportingLine: "SEAMLESS • WELDED • ERW PIPES",
    techHeader: "STAINLESS STEEL & ALLOY PIPES",
    techSpecs: "SS 304 • 316L • 321H • DUPLEX 2205 • INCONEL",
    techFinish: "AVAILABLE IN ASTM A312 / A358 • SCH 10S TO SCH XXS",
    adPromoEyebrow: "PIPE SPECIFICATION",
    adPromoTitle: "SEAMLESS & ERW PIPES",
    badgeLine1: "PRIME",
    badgeLine2: "PIPES",
    badgeLine3: "100% PMI",
    image: heroPipesImg,
    alt: "Industrial steel pipes, seamless tubes and ERW piping stock"
  },
  {
    id: "03",
    focus: "Heavy Engineering Plates",
    topRibbon: "PRECISION METALLURGY • STRUCTURAL STOCK",
    darkBadge: "INDUSTRIAL METAL PRODUCTS",
    mainHeading: "HEAVY ENGINEERING PLATES",
    supportingLine: "SHEETS • PLATES • STRUCTURAL STEEL",
    techHeader: "STAINLESS STEEL STOCK",
    techSpecs: "SS 304 • 304L • 316 • 316L • 321 • 310S • DUPLEX 2205",
    techFinish: "HOT & COLD ROLLED • PRECISION FINISH",
    adPromoEyebrow: "SPECIFIED STOCK",
    adPromoTitle: "CUSTOM CUT SIZES",
    badgeLine1: "PRIME",
    badgeLine2: "QUALITY",
    badgeLine3: "100% PMI",
    image: heroPlatesCoilsImg,
    alt: "Heavy engineering plates, sheets and industrial steel stock"
  },
  {
    id: "04",
    focus: "Precision Round Bars",
    topRibbon: "PRECISION METALLURGY • STRUCTURAL STOCK",
    darkBadge: "INDUSTRIAL METAL PRODUCTS",
    mainHeading: "PRECISION ROUND BARS",
    supportingLine: "ROUND • HEX • FLAT BARS",
    techHeader: "ENGINEERED METAL STOCK FOR INDUSTRIAL APPLICATIONS",
    techSpecs: "SS 304 / 316L • 17-4PH • DUPLEX 2205 • INCONEL",
    techFinish: "CENTERLESS GROUND • 3MM TO 450MM DIAMETER",
    adPromoEyebrow: "TOLERANCE GROUND",
    adPromoTitle: "BRIGHT GROUND BARS",
    badgeLine1: "READY",
    badgeLine2: "STOCK",
    badgeLine3: "H9 / H11",
    image: heroBarsAlloysImg,
    alt: "Superior precision round bars, hex bars and structural steel stock"
  }
];

export default function HeroSlider({ onOpenEnquiry, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState('next');
  const slideDuration = 4500; // Fast, energetic 4.5s tenure per slide

  const slidesContainerRef = useRef(null);
  const touchStartXRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setSlideDirection('next');
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES_DATA.length) % HERO_SLIDES_DATA.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay timer runs continuously without pause on hover
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        nextSlide();
      }, slideDuration);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPlaying, nextSlide, currentSlide]);

  // Smooth staggered slide-in animation on slide change
  useEffect(() => {
    const ctx = gsap.context(() => {
      const xOffset = slideDirection === 'next' ? 45 : -45;
      gsap.fromTo(
        '.hero-slide-anim',
        { opacity: 0, x: xOffset },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: 'power3.out'
        }
      );
    }, slidesContainerRef);

    return () => ctx.revert();
  }, [currentSlide, slideDirection]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartXRef.current = null;
  };

  const slide = HERO_SLIDES_DATA[currentSlide];

  return (
    <section
      id="hero"
      ref={slidesContainerRef}
      className="relative w-full min-h-[580px] lg:h-[100dvh] lg:min-h-[620px] lg:max-h-[860px] bg-[#0c0f12] select-none flex flex-col justify-center pt-20 sm:pt-24 lg:pt-[85px] pb-20 sm:pb-24 lg:pb-0 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Rudhira Metal Industries Hero Advertisement Slider"
    >
      {/* 1. FULL-WIDTH BACKGROUND INDUSTRIAL PHOTOGRAPHY WITH ROOM MOVEMENT */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {HERO_SLIDES_DATA.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out overflow-hidden ${
                isActive
                  ? 'opacity-100 z-0'
                  : 'opacity-0 pointer-events-none -z-10'
              }`}
            >
              <img
                key={`${item.id}-${isActive}`}
                src={item.image}
                alt={item.alt}
                className={`w-full h-full object-cover object-center sm:object-[35%_center] lg:object-center ${
                  isActive ? 'hero-room-active' : ''
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Fully clear background without any black overlays */}
      </div>

      {/* 2. ADVERTISEMENT GRAPHIC COMPOSITION WITH STAGGERED SLIDE-IN */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-4 sm:py-6">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Column: Negative Space allowing background photography to breathe */}
          <div className="hidden lg:block lg:flex-1" />

          {/* Right Column: Advertisement Design Layout Cluster */}
          <div className="w-full lg:w-[620px] xl:w-[680px] 2xl:w-[720px] lg:ml-auto flex flex-col items-start text-left">
            
            {/* A. TOP PROMOTIONAL RIBBON */}
            <div className="hero-slide-anim flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5 w-full">
              <div
                className="bg-[#C34B2B] text-white text-xs sm:text-xs md:text-sm font-black tracking-wider uppercase px-4 sm:px-5 py-1.5 sm:py-2 shadow-lg relative inline-block"
                style={{
                  clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              >
                <span>{slide.topRibbon}</span>
              </div>

              {/* Compact Dark Technical Badge */}
              <div className="bg-[#111417]/95 text-[#E7EEF2] text-[11px] sm:text-xs font-mono font-bold tracking-wider px-3.5 sm:px-4 py-1.5 sm:py-2 border border-white/20 uppercase shadow-md">
                <span>{slide.darkBadge}</span>
              </div>
            </div>

            {/* B. MAIN PRODUCT HEADLINE */}
            <div className="hero-slide-anim mb-3 sm:mb-3.5">
              <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-black text-white tracking-tight uppercase leading-[1.08] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] [text-shadow:_0_3px_12px_rgba(0,0,0,0.85)]">
                {slide.mainHeading}
              </h1>
              <div className="text-xs sm:text-sm lg:text-base xl:text-lg font-extrabold text-[#E05A36] tracking-wide uppercase mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
                {slide.supportingLine}
              </div>
            </div>

            {/* C. COMPACT TECHNICAL PRODUCT DETAILS */}
            <div className="hero-slide-anim w-full bg-[#111417]/92 backdrop-blur-md border-l-4 border-l-[#C34B2B] border-y border-r border-white/15 p-3.5 sm:p-4 mb-3.5 sm:mb-4 shadow-xl">
              <div className="text-[11px] sm:text-xs font-mono font-bold text-[#E05A36] uppercase tracking-wider mb-1">
                {slide.techHeader}
              </div>
              <div className="text-xs sm:text-sm lg:text-[15px] font-mono text-white font-bold leading-snug mb-1">
                {slide.techSpecs}
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-white/75 font-medium">
                {slide.techFinish}
              </div>
            </div>

            {/* D. ADVERTISEMENT-STYLE GRAPHIC BADGES */}
            <div className="hero-slide-anim flex items-center w-full max-w-[480px] sm:max-w-[520px] mb-4 sm:mb-5 relative">
              {/* Angled Gold Bar */}
              <div
                className="flex-1 bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-white py-2 sm:py-2.5 px-5 sm:px-7 shadow-lg"
                style={{
                  clipPath: 'polygon(18px 0, 100% 0, 100% 100%, 0 100%)'
                }}
              >
                <div className="text-[10px] sm:text-[11px] font-mono font-black tracking-wider text-black/80 uppercase">
                  {slide.adPromoEyebrow}
                </div>
                <div className="text-base sm:text-xl lg:text-2xl font-black text-white tracking-wide uppercase leading-tight drop-shadow-sm">
                  {slide.adPromoTitle}
                </div>
              </div>

              {/* Overlapping Red Circular Badge */}
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#B91C1C] text-white border-2 border-white shadow-xl flex flex-col items-center justify-center text-center -ml-4 sm:-ml-6 z-20 flex-shrink-0 transform transition-transform hover:scale-105">
                <span className="text-[9px] sm:text-[10px] font-black tracking-wider leading-none uppercase">
                  {slide.badgeLine1}
                </span>
                <span className="text-xs sm:text-sm lg:text-base font-black tracking-wider leading-none uppercase my-0.5">
                  {slide.badgeLine2}
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-[#F4E5DC] leading-none uppercase">
                  {slide.badgeLine3}
                </span>
              </div>
            </div>

            {/* E. CTA BUTTONS */}
            <div className="hero-slide-anim flex flex-wrap items-center gap-3 sm:gap-3.5">
              {/* Primary Solid Terracotta Button */}
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry(slide.focus)}
                className="inline-flex items-center justify-center gap-2 bg-[#C34B2B] hover:bg-[#A93F23] text-black !text-black text-xs sm:text-sm font-black tracking-wider uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-xs shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-0.5 active:scale-95"
                aria-label="Get A Quote"
              >
                <span className="text-black !text-black font-black">GET A QUOTE</span>
                <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5] text-black !text-black" />
              </button>

              {/* Secondary Outlined Button */}
              <a
                href="#products"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('products-landing', '#products', '/products');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-black !text-black text-xs sm:text-sm font-black tracking-wider uppercase px-5 sm:px-6 py-3 sm:py-3.5 border border-white rounded-xs transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5 active:scale-95"
                aria-label="View Product Range"
              >
                <span className="text-black !text-black font-black">VIEW PRODUCT RANGE</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-black !text-black" />
              </a>
            </div>

          </div>
        </div>
      </div>


      {/* 3. FUNCTIONAL LEFT AND RIGHT SIDE SLIDER ARROWS */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#C34B2B] text-white/90 hover:text-white border border-white/20 hover:border-transparent flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-xs shadow-xl hover:scale-105 active:scale-95"
        aria-label="Previous Slide"
        title="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#C34B2B] text-white/90 hover:text-white border border-white/20 hover:border-transparent flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-xs shadow-xl hover:scale-105 active:scale-95"
        aria-label="Next Slide"
        title="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* 4. DEDICATED BOTTOM SLIDE CONTROLS (Positioned bottom-left: never overlaps CTA buttons or floating actions) */}
      <div className="absolute bottom-5 sm:bottom-7 left-6 sm:left-10 lg:left-16 z-30 flex items-center gap-3 bg-[#111417]/85 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 shadow-2xl">
        {/* Slide Counter Numbers */}
        <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-white/90">
          <span className="font-extrabold text-[#E05A36]">0{currentSlide + 1}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/60">04</span>
        </div>

        <div className="h-3.5 w-px bg-white/25" />

        {/* Slide Indicator Pills with Animated Progress Bar for Active Slide */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden ${
                idx === currentSlide
                  ? 'w-10 bg-[#C34B2B]'
                  : 'w-2.5 bg-white/35 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === currentSlide && (
                <span
                  key={`${idx}-${currentSlide}`}
                  className="absolute inset-0 bg-white/90 rounded-full"
                  style={{
                    animation: isPlaying ? `heroProgress ${slideDuration}ms linear forwards` : 'none'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide Focus Name (desktop subtle label) */}
        <div className="hidden md:flex items-center pl-1 border-l border-white/15">
          <span className="font-mono text-[11px] text-white/70 tracking-wider uppercase font-semibold">
            {slide.focus}
          </span>
        </div>
      </div>
    </section>
  );
}


