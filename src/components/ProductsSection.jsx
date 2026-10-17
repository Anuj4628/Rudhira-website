import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/industrialData';
import { getProductSeoSlug } from '../data/productsData';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection({ onSelectProduct, onNavigate }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const getProductSlug = (name) => {
    const clean = name.toLowerCase();
    if (clean.includes('flange')) return 'flanges';
    if (clean.includes('fastener')) return 'fasteners';
    if (clean.includes('pipe') && clean.includes('tube')) return 'pipes-and-tubes';
    if (clean.includes('fitting')) return 'butt-weld-fittings';
    if (clean.includes('sheet') || clean.includes('plate')) return 'sheets-and-plates';
    if (clean.includes('bar')) return 'rods-and-bars';
    return 'flanges';
  };

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
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.products-grid',
            start: 'top 85%',
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
      className="py-24 sm:py-28 bg-[#F4E5DC]/60 relative overflow-hidden border-b border-[#D9D9D6]"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Layout */}
        <div className="products-header text-center mx-auto max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#A94728]" />
            <span className="tech-label text-[#A94728] font-bold text-xs sm:text-[13px]">
              01 — PRODUCT RANGE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-[#202427] tracking-tight leading-[1.12] mb-4 sm:mb-5 font-sans">
            Our Products
          </h2>

          <p className="text-base sm:text-lg lg:text-[19px] text-[#202427]/80 font-normal max-w-2xl mx-auto leading-relaxed font-sans">
            Metal Products for Diverse Industrial Requirements. Precision-engineered solutions designed for demanding engineering applications.
          </p>
        </div>

        {/* 3x2 Grid Desktop - Increased Width (380-400px) & Expanded Clear Images */}
        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 justify-items-center">
          {PRODUCTS_DATA.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => {
                if (onNavigate) {
                  const slug = getProductSlug(product.name);
                  onNavigate('product-category', null, `/products/${getProductSeoSlug(slug)}`);
                } else if (onSelectProduct) {
                  onSelectProduct(product.name);
                }
              }}
              className="group relative w-full max-w-[390px] lg:max-w-[400px] bg-[#7E321F] border border-[#90391D]/60 rounded-lg overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#F4E5DC]/60 p-3.5 sm:p-4 shadow-xl"
            >
              {/* Subtle Inset Frame & Orange Corner Brackets */}
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-br" />

              {/* Increased Image Height (270-290px) for Crystal-Clear Product View */}
              <div className="relative w-full h-[270px] sm:h-[290px] overflow-hidden rounded-md bg-black/25">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                />

                {/* Product ID Tag (Dark Graphite) */}
                <div className="absolute top-3 left-3 bg-[#202427]/95 text-white px-2.5 py-1 text-xs font-mono font-bold tracking-wider rounded-sm border border-white/15 shadow-sm">
                  {product.id}
                </div>

                {/* Category Badge (Crisp White with Dark Mono Text) */}
                <div className="absolute top-3 right-3 bg-white text-[#202427] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm border border-black/10">
                  {product.category}
                </div>

                {/* Orange Accent Line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F4E5DC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Bottom Content Area: Deep Burnt Orange with Crisp White Title and Soft Cream Description */}
              <div className="pt-5 pb-2 px-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight group-hover:text-[#F4E5DC] transition-colors font-sans">
                      {product.name}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-white/10 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#7E321F] transition-all duration-200 flex-shrink-0 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-[15px] sm:text-base text-[#F4E5DC]/95 font-normal leading-relaxed line-clamp-2 font-sans">
                    {product.description}
                  </p>
                </div>

                {/* Technical Bottom Line */}
                <div className="mt-5 pt-3.5 border-t border-white/20 flex items-center justify-between text-xs sm:text-[13px] font-mono text-[#F4E5DC]/80">
                  <span className="tracking-wide">{product.spec}</span>
                  <span className="text-[#F4E5DC] font-bold group-hover:translate-x-1 transition-transform">
                    Inquire →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Products Button Centered Below the 6th Product Card (15–17px, Bold 700) */}
        <div className="mt-12 sm:mt-16 text-center flex justify-center">
          <a
            href="/products"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate('products-landing', null, '/products');
              }
            }}
            className="btn-wave inline-flex items-center gap-2.5 border-2 border-[#A94728] text-[#A94728] text-sm sm:text-base font-extrabold uppercase tracking-widest px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 group cursor-pointer"
          >
            <span>All Products</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
