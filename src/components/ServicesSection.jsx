import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scissors, Ruler, SearchCode, Sparkles, Box, Sliders, ArrowUpRight } from 'lucide-react';
import { VALUE_ADDED_SERVICES } from '../data/industrialData';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection({ onOpenEnquiry }) {
  const sectionRef = useRef(null);

  const icons = [
    <Scissors className="w-7 h-7 stroke-[1.5]" key="s1" />,
    <Ruler className="w-7 h-7 stroke-[1.5]" key="s2" />,
    <SearchCode className="w-7 h-7 stroke-[1.5]" key="s3" />,
    <Sparkles className="w-7 h-7 stroke-[1.5]" key="s4" />,
    <Box className="w-7 h-7 stroke-[1.5]" key="s5" />,
    <Sliders className="w-7 h-7 stroke-[1.5]" key="s6" />,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-header',
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
        '.service-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 sm:py-28 bg-[#7E321F] text-white border-b border-black/20 relative overflow-hidden"
    >
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Layout */}
        <div className="services-header text-center mx-auto max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 border border-white/20 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#F4E5DC]" />
            <span className="tech-label text-[#F4E5DC] font-bold text-xs sm:text-[13px]">
              03 — VALUE ADDED SERVICES
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-5 font-sans">
            Value Added Services
          </h2>

          <p className="text-base sm:text-lg lg:text-[19px] text-[#F4E5DC]/95 font-normal max-w-2xl mx-auto leading-relaxed font-sans">
            Supporting your requirements beyond standard supply. Precision secondary processing, specialized cutting, testing, finishing, and export packaging.
          </p>
        </div>

        {/* Editorial Asymmetric Layout (01 large, 02 med, 03 med, 04 med, 05 large, 06 med) */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {VALUE_ADDED_SERVICES.map((service, index) => {
            const isLarge = index === 0 || index === 4;
            const colSpan = isLarge ? 'lg:col-span-6' : 'lg:col-span-3';

            return (
              <div
                key={service.id}
                onClick={onOpenEnquiry}
                className={`service-card group relative ${colSpan} ${service.cardBg} ${service.borderColor} border rounded-lg p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
              >
                {/* Corner Brackets */}
                <div className="corner-bracket-tl" />
                <div className="corner-bracket-br" />

                {/* Oversized Background Number */}
                <div className="absolute -bottom-4 -right-2 font-mono text-8xl font-black opacity-10 select-none pointer-events-none transition-transform group-hover:scale-110 group-hover:-translate-y-2">
                  {service.id}
                </div>

                <div>
                  {/* Top Bar: Icon + Technical Service Code */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-3 rounded-md ${service.textColor} bg-black/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}>
                      {icons[index]}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md ${service.textColor} bg-black/10`}>
                        {service.tag}
                      </span>
                      <span className="font-mono text-sm font-bold opacity-60">
                        #{service.id}
                      </span>
                    </div>
                  </div>

                  {/* Eyebrow */}
                  <div className={`tech-label text-xs font-bold tracking-widest mb-1.5 ${service.accentColor}`}>
                    {service.id} — SERVICE
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl sm:text-[26px] font-extrabold ${service.textColor} mb-3 tracking-tight group-hover:translate-x-0.5 transition-transform font-sans`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-[15px] sm:text-base ${service.textColor} opacity-90 leading-relaxed font-sans`}>
                    {service.description}
                  </p>
                </div>

                {/* Bottom Arrow & Action */}
                <div className="mt-8 pt-4 border-t border-current/15 flex items-center justify-between text-xs font-mono">
                  <span className={`${service.textColor} opacity-70 uppercase tracking-wider`}>
                    SPECIFICATION READY
                  </span>
                  <div className={`flex items-center gap-1 font-bold ${service.textColor} group-hover:translate-x-1 transition-transform`}>
                    <span>REQUEST SPEC</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
