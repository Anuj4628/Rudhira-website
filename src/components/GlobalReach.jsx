import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, MapPin } from 'lucide-react';
import { EXPORT_COUNTRIES, INDIAN_STATES } from '../data/industrialData';

gsap.registerPlugin(ScrollTrigger);

export default function GlobalReach({ onOpenEnquiry }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reach-export-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.reach-export-header',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.reach-india-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.reach-india-header',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.country-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.countries-grid',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.india-state-card',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.02,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.india-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="global-reach"
      ref={sectionRef}
      className="py-24 sm:py-28 bg-[#E7EEF2]/50 border-b border-[#D9D9D6] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AREA 01: COUNTRIES WE EXPORT TO - Centered Large Heading */}
        <div className="mb-24">
          <div className="reach-export-header text-center mx-auto max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4">
              <Globe className="w-4 h-4 text-[#A94728]" />
              <span className="tech-label text-[#A94728] font-bold text-xs">
                05 — GLOBAL REACH
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#202427] tracking-tight leading-tight mb-4">
              Countries We Export To
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#202427]/75 font-normal max-w-2xl mx-auto leading-relaxed">
              Global engineering destinations and strategic international supply corridors. Direct container logistics for critical project specifications.
            </p>
          </div>

          {/* 5 Cards Per Row on Desktop */}
          <div className="countries-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {EXPORT_COUNTRIES.map((country) => (
              <div
                key={country.name}
                className="country-card group p-3.5 bg-white border border-[#D9D9D6] hover:border-[#A94728] rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-sm flex flex-col items-center text-center justify-center cursor-default"
              >
                {/* Clean, properly proportioned real flag asset */}
                <div className="w-8 h-5 mb-2.5 overflow-hidden rounded-xs border border-black/10 shadow-xs flex items-center justify-center bg-gray-50">
                  <img
                    src={`https://flagcdn.com/${country.code}.svg`}
                    alt={`${country.name} Flag`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Country Name Only */}
                <span className="text-xs sm:text-sm font-bold text-[#202427] group-hover:text-[#A94728] transition-colors leading-tight">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AREA 02: SERVING REQUIREMENTS ACROSS INDIA - Centered Large Heading */}
        <div>
          <div className="reach-india-header text-center mx-auto max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4">
              <MapPin className="w-4 h-4 text-[#A94728]" />
              <span className="tech-label text-[#A94728] font-bold text-xs">
                06 — NATIONWIDE DISTRIBUTION
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#202427] tracking-tight leading-tight mb-4">
              Serving Requirements Across India
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#202427]/75 font-normal max-w-2xl mx-auto leading-relaxed">
              Designed for nationwide industrial reach with central stockist logistics in Mumbai. Prompt dispatch across all manufacturing clusters and project sites.
            </p>
          </div>

          {/* Premium India Distribution Section on Warm Light Orange / Cream (#F4E5DC) */}
          <div className="india-grid bg-[#F4E5DC] border-2 border-[#D9D9D6] p-6 sm:p-10 rounded-lg relative overflow-hidden shadow-industrial">
            {/* Subtle Abstract Map Watermark */}
            <div className="absolute right-4 bottom-2 opacity-5 pointer-events-none select-none">
              <Globe className="w-96 h-96 text-[#202427]" />
            </div>

            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9D9D6] pb-5">
              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#202427] tracking-tight">
                  Nationwide Distribution Network
                </h4>
                <p className="text-xs sm:text-sm text-[#202427]/75 mt-1">
                  Coordinated multimodal dispatch across Indian states and industrial corridors.
                </p>
              </div>
              <div className="tech-label text-xs font-mono bg-white text-[#A94728] font-bold px-3.5 py-2 rounded-md border border-[#D9D9D6] shadow-xs self-start">
                CENTRAL HUB: MUMBAI, MAHARASHTRA
              </div>
            </div>

            {/* Alternating state cards: cream, white, light orange with small orange dot */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {INDIAN_STATES.map((state, idx) => {
                const bgStyles = [
                  'bg-white',
                  'bg-[#F8F5F1]',
                  'bg-[#F4E5DC]/80',
                ][idx % 3];

                return (
                  <div
                    key={state}
                    className={`india-state-card ${bgStyles} p-3 border border-[#D9D9D6] hover:border-[#A94728] rounded-lg transition-all duration-200 flex items-center gap-2 group hover:-translate-y-0.5 hover:shadow-xs`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A94728] flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-xs sm:text-sm font-bold text-[#202427] group-hover:text-[#A94728] transition-colors truncate">
                      {state}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Logistics Note */}
            <div className="mt-8 pt-5 border-t border-[#D9D9D6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#202427]/70">
              <span className="font-semibold">FREIGHT COORDINATION: DIRECT ROAD & CONTAINER DISPATCH</span>
              <button
                onClick={onOpenEnquiry}
                className="text-[#A94728] font-bold uppercase hover:underline cursor-pointer"
              >
                Inquire Nationwide Delivery Timelines →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
