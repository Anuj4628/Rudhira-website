import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

// 8 Completely Distinct & Non-Repeating Industrial Images for Flanges, Forged Fittings & Butt Weld Fittings
import ss304FlangesImg from '../assets/flanges/types/weld-neck-flanges.jpg';
import ss316ForgedImg from '../assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg';
import carbonSteelFlangesImg from '../assets/flanges/types/carbon-steel-flanges.jpg';
import alloySteelBwImg from '../assets/New Product img/pipe fittings/alloy-steel-pipe-fittings.jpg';
import duplexFlangesImg from '../assets/Product Section/Manufacturer division/Flanges/duplex.jpg';
import superDuplexFlangesImg from '../assets/Product Section/Manufacturer division/Flanges/super duplex.jpg';
import nickelAlloyBwImg from '../assets/New Product img/pipe fittings/nickel-pipe-fittings.jpg';
import titaniumBwImg from '../assets/New Product img/pipe fittings/titanium-pipe-fittings.jpg';

gsap.registerPlugin(ScrollTrigger);

// 8 Material/Grade Categories specifically related to Flanges, Forged Fittings, and Butt Weld Fittings
const HOMEPAGE_PRODUCTS = [
  {
    id: '01',
    name: 'STAINLESS STEEL 304 / 304L',
    topLabel: 'SS 304 / 304L',
    description: 'Reliable stainless steel grades for corrosion-resistant industrial applications.',
    spec: 'Flanges • Forged Fittings • Butt Weld Fittings',
    image: ss304FlangesImg,
    productSlug: 'flanges',
    materialSlug: 'stainless-steel',
  },
  {
    id: '02',
    name: 'STAINLESS STEEL 316 / 316L',
    topLabel: 'SS 316 / 316L',
    description: 'Superior corrosion resistance for demanding chemical, marine and process applications.',
    spec: 'Flanges • Forged Fittings • Butt Weld Fittings',
    image: ss316ForgedImg,
    productSlug: 'forged-fittings',
    materialSlug: 'stainless-steel',
  },
  {
    id: '03',
    name: 'CARBON STEEL',
    topLabel: 'CARBON STEEL',
    description: 'High-strength carbon steel solutions for pressure, piping and heavy industrial applications.',
    spec: 'Flanges • Forged Fittings • Butt Weld Fittings',
    image: carbonSteelFlangesImg,
    productSlug: 'flanges',
    materialSlug: 'carbon-steel',
  },
  {
    id: '04',
    name: 'ALLOY STEEL',
    topLabel: 'ALLOY STEEL',
    description: 'High-temperature and high-pressure alloy steel solutions for demanding industrial service.',
    spec: 'Flanges • Forged Fittings • Butt Weld Fittings',
    image: alloySteelBwImg,
    productSlug: 'butt-weld-fittings',
    materialSlug: 'alloy-steel',
  },
  {
    id: '05',
    name: 'DUPLEX STAINLESS STEEL',
    topLabel: 'DUPLEX / UNS S31803',
    description: 'High-strength duplex grades combining excellent corrosion resistance with mechanical performance.',
    spec: 'Flanges • Forged Fittings • Butt Weld Fittings',
    image: duplexFlangesImg,
    productSlug: 'flanges',
    materialSlug: 'duplex-stainless-steel',
  },
  {
    id: '06',
    name: 'SUPER DUPLEX',
    topLabel: 'SUPER DUPLEX / UNS S32750',
    description: 'Premium duplex alloys engineered for highly corrosive and demanding industrial environments.',
    spec: 'Flanges • Forged Fittings • Butt Weld Fittings',
    image: superDuplexFlangesImg,
    productSlug: 'flanges',
    materialSlug: 'super-duplex-stainless-steel',
  },
  {
    id: '07',
    name: 'NICKEL ALLOYS',
    topLabel: 'NICKEL ALLOYS',
    description: 'Specialized nickel-based materials for extreme temperature, corrosion and chemical service.',
    spec: 'Flanges • Forged Fittings • Butt Weld Fittings',
    image: nickelAlloyBwImg,
    productSlug: 'butt-weld-fittings',
    materialSlug: 'nickel-alloys',
  },
  {
    id: '08',
    name: 'TITANIUM ALLOYS',
    topLabel: 'TITANIUM',
    description: 'Lightweight, high-strength and corrosion-resistant materials for specialized industrial applications.',
    spec: 'Flanges • Forged Fittings • Butt Weld Fittings',
    image: titaniumBwImg,
    productSlug: 'butt-weld-fittings',
    materialSlug: 'titanium',
  },
];

export default function ProductsSection({ onSelectProduct, onNavigate }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.products-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.products-grid',
            start: 'top 85%',
            once: true,
          },
          onComplete: () => {
            cardsRef.current.forEach((card) => {
              if (card) {
                gsap.set(card, { clearProps: 'all' });
              }
            });
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-28 bg-[#EEF3FA]/60 relative overflow-hidden border-b border-[#D9D9D6]"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Layout */}
        <div className="products-header text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#123F91]/10 border border-[#123F91]/25 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#123F91]" />
            <span className="tech-label text-[#123F91] font-bold text-xs sm:text-[13px]">
              01 — PRODUCT RANGE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-[#202427] tracking-tight leading-[1.12] mb-4 sm:mb-5 font-sans">
            Our Products
          </h2>

          <p className="text-base sm:text-lg lg:text-[19px] text-[#202427]/80 font-normal max-w-2xl mx-auto leading-relaxed font-sans">
            Precision-engineered Flanges, Forged Fittings, and Butt Weld Fittings designed for critical industrial applications.
          </p>
        </div>

        {/* 4x2 Grid Desktop (4 cols x 2 rows), 2x4 Tablet, 1x8 Mobile */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 xl:gap-6">
          {HOMEPAGE_PRODUCTS.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => {
                if (onNavigate) {
                  onNavigate('product-material', null, `/products/${card.productSlug}/${card.materialSlug}`);
                } else if (onSelectProduct) {
                  onSelectProduct(card.name);
                }
              }}
              className="group relative w-full bg-[#0B2863] border border-[#0B2863]/60 rounded-lg overflow-hidden flex flex-col justify-between cursor-pointer p-3.5 sm:p-4 shadow-xl hover:shadow-2xl hover:border-[#EEF3FA]/60 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Subtle Inset Frame & Corner Brackets */}
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-br" />

              {/* Product Image Container */}
              <div className="relative w-full h-[200px] sm:h-[210px] lg:h-[195px] xl:h-[215px] overflow-hidden rounded-md bg-black/25 flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                />

                {/* Card Number Badge (Dark Graphite) */}
                <div className="absolute top-3 left-3 bg-[#202427]/95 text-white px-2.5 py-1 text-xs font-mono font-bold tracking-wider rounded-sm border border-white/15 shadow-sm select-none">
                  {card.id}
                </div>

                {/* Top Specification Label Badge (Crisp White with Dark Mono Text) */}
                <div className="absolute top-3 right-3 bg-white text-[#202427] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm border border-black/10 select-none max-w-[65%] truncate text-right">
                  {card.topLabel}
                </div>

                {/* Navy/Soft Blue Accent Line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EEF3FA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Bottom Content Area: Deep Navy Blue with Crisp Typography */}
              <div className="pt-4 pb-1 px-1 flex-1 flex flex-col justify-between">
                <div>
                  {/* Heading & Arrow Button Row */}
                  <div className="flex items-start justify-between gap-2.5 mb-2.5 min-h-[46px] sm:min-h-[50px]">
                    <h3 className="text-base sm:text-[17px] lg:text-[15.5px] xl:text-[17px] font-extrabold text-white tracking-tight leading-snug group-hover:text-[#EEF3FA] transition-colors font-sans uppercase line-clamp-2">
                      {card.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0B2863] transition-all duration-200 flex-shrink-0 shadow-sm mt-0.5">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Description Area */}
                  <div className="min-h-[64px] sm:min-h-[68px] lg:min-h-[66px] flex items-start mb-2">
                    <p className="text-[13px] sm:text-[13.5px] lg:text-[12.5px] xl:text-[13px] text-[#EEF3FA]/90 font-normal leading-relaxed line-clamp-3 font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Specification Area - Prominently Displayed Without Truncation */}
                <div className="mt-auto pt-3 border-t border-white/20 min-h-[62px] flex flex-col justify-between">
                  <div className="text-[11.5px] sm:text-[12px] font-mono text-[#EEF3FA] font-semibold leading-snug flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EEF3FA] flex-shrink-0" />
                    <span className="whitespace-normal leading-tight">
                      Flanges • Forged Fittings • Butt Weld Fittings
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#EEF3FA]/75 pt-1.5 mt-1 border-t border-white/10">
                    <span className="uppercase tracking-wider text-[10px] text-[#EEF3FA]/65">ASTM / ASME B16 • EN 10204 3.1</span>
                    <span className="text-[#EEF3FA] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5 text-xs flex-shrink-0">
                      Inquire →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Products Button Centered Below the 8 Cards Grid */}
        <div className="mt-12 sm:mt-16 text-center flex justify-center">
          <a
            href="/products"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate('products-landing', null, '/products');
              }
            }}
            className="btn-wave inline-flex items-center gap-2.5 border-2 border-[#123F91] text-[#123F91] hover:bg-[#123F91] hover:text-white text-sm sm:text-base font-extrabold uppercase tracking-widest px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 group cursor-pointer"
          >
            <span>All Products</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
