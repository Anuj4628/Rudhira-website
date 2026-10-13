import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Layers, Truck, Headset, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/industrialData';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs({ onOpenEnquiry }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const icons = [
    <ShieldCheck className="w-6 h-6 text-[#A94728] stroke-[1.5]" key="i1" />,
    <Layers className="w-6 h-6 text-[#A94728] stroke-[1.5]" key="i2" />,
    <Truck className="w-6 h-6 text-[#A94728] stroke-[1.5]" key="i3" />,
    <Headset className="w-6 h-6 text-[#A94728] stroke-[1.5]" key="i4" />,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-header',
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
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.why-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 sm:py-28 bg-[#F4E5DC] border-b border-[#D9D9D6] relative overflow-hidden"
    >
      {/* Engineering-grid background on warm light orange */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Layout */}
        <div className="why-header text-center mx-auto max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A94728]" />
            <span className="tech-label text-[#A94728] font-bold text-xs">
              02 — WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#202427] tracking-tight leading-tight mb-4">
            Why Choose Us
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#202427]/75 font-normal max-w-2xl mx-auto leading-relaxed">
            Engineered for Quality. Built for Reliability. Technical integrity, transparent supply chains, and dependable product execution tailored for industry professionals.
          </p>
        </div>

        {/* 4 Premium Industrial Feature Cards */}
        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative p-7 bg-[#F8F5F1] hover:bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-industrial-hover flex flex-col justify-between"
            >
              {/* Corner Accent Details */}
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-br" />

              <div>
                {/* Top Number & Diamond/Icon Container */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-[#202427] group-hover:text-[#A94728] transition-colors">
                    {item.id}
                  </span>
                  <div className="p-2.5 bg-white rounded-sm border border-[#D9D9D6] shadow-sm group-hover:border-[#A94728]/40 group-hover:bg-[#F4E5DC]/50 transition-all">
                    {icons[index]}
                  </div>
                </div>

                {/* Subtitle Eyebrow */}
                <div className="tech-label text-[11px] text-[#A94728] mb-1 font-bold tracking-widest">
                  {item.subtitle}
                </div>

                {/* Main Card Title */}
                <h3 className="text-xl font-extrabold text-[#202427] mb-3 tracking-tight group-hover:text-[#A94728] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#202427]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Layered Border & Technical Badge: RMI / 01 → */}
              <div className="mt-8 pt-4 border-t border-[#D9D9D6] group-hover:border-[#A94728]/40 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#202427] tracking-wider">
                  {item.badge}
                </span>
                <span className="text-[#A94728] font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
