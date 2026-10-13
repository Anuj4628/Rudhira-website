import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ArrowRight, Layers, Phone, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, COMPANY_DETAILS } from '../data/industrialData';

export default function HeroSlider({ onOpenEnquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideDuration = 6000; // 6s per slide

  const slidesContainerRef = useRef(null);
  const touchStartXRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay timer
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

  // Handle slide transitions with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline container
      gsap.fromTo(
        `.hero-slide-${currentSlide} .hero-headline-card`,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );

      // Animate buttons
      gsap.fromTo(
        `.hero-slide-${currentSlide} .hero-buttons-row`,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.15 }
      );

      // Animate specs
      gsap.fromTo(
        `.hero-slide-${currentSlide} .hero-specs-row`,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.25 }
      );

      // Background subtle scale 1.05 -> 1.0
      gsap.fromTo(
        `.hero-bg-${currentSlide}`,
        { scale: 1.05 },
        { scale: 1.0, duration: 6.0, ease: 'power1.out' }
      );
    }, slidesContainerRef);

    return () => ctx.revert();
  }, [currentSlide]);

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

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      ref={slidesContainerRef}
      className="relative w-full min-h-[820px] lg:h-[100svh] bg-[#121B22] overflow-hidden select-none flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-4 sm:pb-6"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Industrial Hero Showcase"
    >
      {/* 4 Background Slides with user-provided images */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Authentic Industrial Image - 100% Clear, No Black Darkening */}
          <img
            src={item.image}
            alt={item.alt}
            className={`hero-bg-${index} absolute inset-0 w-full h-full object-cover object-center transform will-change-transform`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Main Hero Content - Aligned with website layout container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center my-auto">
        <div className={`hero-slide-${currentSlide} max-w-4xl text-left`}>
          {/* 1. Frosted Translucent Dark Glass Card with High Blur */}
          <div className="hero-headline-card hero-glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl">
            {/* Title with Orange Highlight */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 uppercase drop-shadow-sm">
              {slide.titlePrefix}
              <span className="text-[#A94728]">{slide.titleHighlight}</span>
              {slide.titleSuffix}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-white/95 font-medium leading-relaxed max-w-3xl drop-shadow-xs">
              {slide.description}
            </p>
          </div>

          {/* 2. Action Buttons in a Row Directly Underneath */}
          <div className="hero-buttons-row mt-4 sm:mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* GET A QUOTE */}
            <button
              onClick={() => onOpenEnquiry('Industrial Piping & Metal Products Requirement')}
              className="inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#8D381D] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-xl transition-all active:scale-95 cursor-pointer group"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* EXPLORE PRODUCTS - Frosted Glass Blur */}
            <a
              href="#products"
              className="inline-flex items-center gap-2 hero-glass-pill hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all active:scale-95 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#A94728]" />
              <span>EXPLORE PRODUCTS</span>
            </a>

            {/* SALES HOTLINE - Frosted Glass Blur */}
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2.5 hero-glass-pill hover:bg-white/10 text-white px-4 sm:px-5 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-[#A94728]/25 flex items-center justify-center text-[#A94728]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] font-mono font-bold text-white/70 uppercase tracking-widest leading-none mb-1">
                  SALES HOTLINE
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white font-mono leading-none">
                  {COMPANY_DETAILS.phone}
                </div>
              </div>
            </a>
          </div>

          {/* 3. Row of 3 Technical Spec Cards with Frosted Glass Blur */}
          <div className="hero-specs-row mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 max-w-3xl">
            {slide.specs.map((spec) => (
              <div
                key={spec.label}
                className="hero-glass-spec rounded-xl p-3 sm:p-3.5 flex flex-col justify-center"
              >
                <div className="text-[10px] font-mono text-white/70 uppercase tracking-wider mb-1 font-semibold">
                  {spec.label}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Area: Catalogue Specs + Pagination + Alloy Strip + Dots */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-auto pt-4">
        {/* Row 1: Catalogue Specs & Slide Pagination Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          {/* Left Catalogue Spec Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <div className="bg-[#A94728]/25 border border-[#A94728]/50 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 backdrop-blur-xl shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A94728] animate-pulse" />
              <span className="text-[#ff784f]">CATALOGUE SPECS:</span>
            </div>

            {slide.catalogueSpecs.map((item) => (
              <div
                key={item}
                className="hero-glass-pill text-white/95 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A94728]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Right Pagination Pill */}
          <div className="hero-glass-pill px-3 py-1.5 rounded-xl flex items-center gap-3">
            <span className="font-mono text-xs font-bold">
              <span className="text-[#A94728]">0{currentSlide + 1}</span>
              <span className="text-white/40 mx-1">/</span>
              <span className="text-white/70">0{HERO_SLIDES.length}</span>
            </span>

            <div className="flex items-center gap-1 border-l border-white/20 pl-2">
              <button
                onClick={prevSlide}
                className="p-1 text-white/70 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1 text-white/70 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Bottom Alloy Specs Ticker Strip with Frosted Glass */}
        <div className="hero-glass-strip rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs font-mono text-white/90">
          {slide.bottomStrip.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span className="text-white/60">{item.label}</span>
              <span className="text-white font-bold">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Row 3: Bottom Slide Navigation Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? 'w-6 bg-[#A94728] shadow-md'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
