import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileCheck, Search, Ruler, Box } from 'lucide-react';
import { QUALITY_STANDARDS_ITEMS } from '../data/industrialData';

gsap.registerPlugin(ScrollTrigger);

export default function QualityStandards() {
  const sectionRef = useRef(null);

  const icons = [
    <FileCheck className="w-6 h-6 text-[#F4E5DC]" key="q1" />,
    <Search className="w-6 h-6 text-[#F4E5DC]" key="q2" />,
    <Ruler className="w-6 h-6 text-[#F4E5DC]" key="q3" />,
    <Box className="w-6 h-6 text-[#F4E5DC]" key="q4" />,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.quality-module',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="py-24 sm:py-28 bg-[#344B5C] text-white border-b border-white/15 relative overflow-hidden"
      aria-label="Quality Standards Framework"
    >
      {/* Lighter-blue technical grid background */}
      <div className="absolute inset-0 bg-steel-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Layout */}
        <div className="quality-header text-center mx-auto max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-white/10 border border-white/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
            <span className="tech-label text-[#F4E5DC] font-bold text-xs">
              08 — SPECIFICATION ASSURANCE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Quality & Inspection Standards
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#E7EEF2]/85 font-normal max-w-2xl mx-auto leading-relaxed">
            Compliance, verification, and zero-tolerance dimensional deviation. Strict material traceability and positive material identification (PMI) on every dispatched batch.
          </p>
        </div>

        {/* 4 Large Editorial Feature Modules (Not basic white Bootstrap cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {QUALITY_STANDARDS_ITEMS.map((item, index) => {
            const moduleBgs = [
              'bg-[#273845] border-white/20',
              'bg-[#415A6B] border-white/25',
              'bg-[#273845] border-white/20',
              'bg-[#415A6B] border-white/25',
            ][index % 4];

            return (
              <div
                key={item.id}
                className={`quality-module group relative p-7 sm:p-8 ${moduleBgs} border rounded-sm flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-2 hover:border-[#A94728] transition-all duration-300`}
              >
                {/* Orange Corner Details */}
                <div className="corner-bracket-tl" />
                <div className="corner-bracket-br" />

                {/* Large Background Watermark Number */}
                <div className="absolute -bottom-4 -right-1 font-mono text-7xl font-black text-white/5 select-none pointer-events-none group-hover:scale-110 transition-transform">
                  {item.id}
                </div>

                <div>
                  {/* Top Bar: Icon Container & Technical Code */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-2.5 bg-[#344B5C] rounded-sm border border-white/20 group-hover:bg-[#A94728] transition-colors shadow-sm">
                      {icons[index]}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#F4E5DC] bg-white/10 px-2.5 py-1 rounded-sm border border-white/15">
                      {item.code}
                    </span>
                  </div>

                  {/* Module ID */}
                  <div className="tech-label text-xs font-bold text-[#A94728] mb-1.5 tracking-widest">
                    MODULE // {item.id}
                  </div>

                  {/* Module Title */}
                  <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight group-hover:text-[#F4E5DC] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#E7EEF2]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Technical Frame */}
                <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-[#E7EEF2]/60">
                  <span>SPEC COMPLIANT</span>
                  <span className="text-[#A94728] font-bold group-hover:translate-x-1 transition-transform">
                    PASS 100% →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
