import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2 } from 'lucide-react';
import { CLIENT_PARTNERS } from '../data/industrialData';

gsap.registerPlugin(ScrollTrigger);

export default function Clientele() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.clients-header',
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
        '.client-logo-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.clientele-panel',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-24 sm:py-28 bg-[#0B2863] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Layout */}
        <div className="clients-header text-center mx-auto max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 border border-white/20 mb-4 sm:mb-5">
            <Building2 className="w-4 h-4 text-[#123F91]" />
            <span className="tech-label text-[#EEF3FA] font-bold text-xs sm:text-[13px]">
              07 — INDUSTRIAL PARTNERSHIPS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-5 font-sans">
            Our Clients
          </h2>

          <p className="text-base sm:text-lg lg:text-[19px] text-[#EEF3FA]/90 font-normal max-w-2xl mx-auto leading-relaxed font-sans">
            Trusted by businesses across industrial and engineering sectors. Supplying precision metal products, fittings, and flanges to premier industrial enterprises.
          </p>
        </div>

        {/* ONE LARGE Premium Clientele Panel with Original Brand Color Logos */}
        <div className="clientele-panel bg-[#102D65] border-2 border-white/15 p-5 sm:p-8 rounded-lg shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {CLIENT_PARTNERS.map((client) => (
              <div
                key={client.name}
                className="client-logo-card group h-28 sm:h-[120px] bg-white border border-[#D9D9D6] hover:border-[#123F91] rounded-lg p-2.5 sm:p-3 flex flex-col items-center justify-between text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-default shadow-sm"
              >
                {/* 1. Large, properly scaled company logo maximizing available card space */}
                <div className="w-full flex-1 flex items-center justify-center min-h-0 px-1">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-h-[60px] sm:max-h-[68px] w-full max-w-[92%] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* 2. Company Name neatly aligned underneath */}
                <span className="text-[11px] sm:text-xs font-bold text-[#202427] group-hover:text-[#123F91] transition-colors leading-tight line-clamp-1 mt-1">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
