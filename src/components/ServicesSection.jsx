import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scissors, Ruler, SearchCode, Sparkles, Box, Sliders, ArrowUpRight } from 'lucide-react';
import { VALUE_ADDED_SERVICES } from '../data/industrialData';

// Authentic service images mapped to each service (updated with precision cutting & export packaging)
import cuttingImg from '../assets/services/service-01-cutting.jpg';
import customSizingImg from '../assets/services/service-02-custom-sizing.jpg';
import inspectionImg from '../assets/services/service-03-material-inspection.jpg';
import surfaceFinishingImg from '../assets/services/service-04-surface-finishing.jpg';
import packagingImg from '../assets/services/service-05-packaging.jpg';
import customRequirementsImg from '../assets/services/service-06-custom-requirements.png';

const SERVICE_IMAGES = [
  cuttingImg,
  customSizingImg,
  inspectionImg,
  surfaceFinishingImg,
  packagingImg,
  customRequirementsImg
];

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection({ onOpenEnquiry }) {
  const sectionRef = useRef(null);
  const [flippedCards, setFlippedCards] = useState({});

  const icons = [
    <Scissors className="w-7 h-7 stroke-[1.5]" key="s1" />,
    <Ruler className="w-7 h-7 stroke-[1.5]" key="s2" />,
    <SearchCode className="w-7 h-7 stroke-[1.5]" key="s3" />,
    <Sparkles className="w-7 h-7 stroke-[1.5]" key="s4" />,
    <Box className="w-7 h-7 stroke-[1.5]" key="s5" />,
    <Sliders className="w-7 h-7 stroke-[1.5]" key="s6" />,
  ];

  const handleCardClick = (serviceId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const handleCardMouseLeave = (serviceId) => {
    if (flippedCards[serviceId]) {
      setFlippedCards((prev) => ({
        ...prev,
        [serviceId]: false,
      }));
    }
  };

  const handleKeyDown = (e, serviceId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(serviceId);
    }
  };

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
            const isFlipped = !!flippedCards[service.id];

            return (
              <div
                key={service.id}
                onMouseLeave={() => handleCardMouseLeave(service.id)}
                onClick={() => handleCardClick(service.id)}
                onKeyDown={(e) => handleKeyDown(e, service.id)}
                role="region"
                tabIndex={0}
                aria-label={`Service: ${service.title}. Press Enter or tap to flip card.`}
                className={`service-card service-card-3d-wrapper group relative ${colSpan} cursor-pointer select-none ${isFlipped ? 'is-flipped' : ''}`}
              >
                <div className="service-card-inner">
                  {/* FRONT FACE - Preserved identical to existing design */}
                  <div
                    className={`service-card-front service-card-face relative w-full h-full min-h-[380px] sm:min-h-[420px] ${service.cardBg} ${service.borderColor} border rounded-lg p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-2xl`}
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
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenEnquiry) onOpenEnquiry(service.title);
                        }}
                        className={`inline-flex items-center gap-1 font-bold ${service.textColor} hover:opacity-80 transition-opacity cursor-pointer`}
                        aria-label={`Request specification for ${service.title}`}
                      >
                        <span>REQUEST SPEC</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* BACK FACE - Full Bleed Real Industrial Photography with Gradient & Metadata */}
                  <div
                    className="service-card-back service-card-face absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-white/25 shadow-2xl flex flex-col justify-between"
                  >
                    {/* Background Service Image */}
                    <img
                      src={SERVICE_IMAGES[index]}
                      alt={`${service.title} industrial process`}
                      className="absolute inset-0 w-full h-full object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Base Subtle Dark Overlay */}
                    <div className="absolute inset-0 bg-[#0B1520]/40 pointer-events-none" />

                    {/* Top Scrim Gradient */}
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />

                    {/* Bottom Heavy Contrast Scrim Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/95 via-black/75 to-transparent pointer-events-none" />

                    {/* Corner Brackets */}
                    <div className="corner-bracket-tl z-20" />
                    <div className="corner-bracket-br z-20" />

                    {/* Back Header: Service Number Badge + Tag */}
                    <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
                        <span className="font-mono text-xs font-bold text-white tracking-widest">
                          {service.id} / 06
                        </span>
                      </div>

                      <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-sm bg-[#A94728] text-white uppercase shadow-md border border-white/20">
                        {service.tag}
                      </span>
                    </div>

                    {/* Back Bottom: Title & Clean Action */}
                    <div className="relative z-10 p-6 sm:p-7">
                      <div className="tech-label text-xs font-bold tracking-widest mb-1.5 text-[#F4E5DC] drop-shadow">
                        {service.id} — VALUE ADDED
                      </div>

                      <h3 className="text-2xl sm:text-[28px] font-extrabold text-white mb-2 tracking-tight font-sans drop-shadow-lg">
                        {service.title}
                      </h3>

                      <div className="mt-4 pt-3 border-t border-white/25 flex items-center justify-between text-xs font-mono">
                        <span className="text-white/85 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                          SPEC READY
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenEnquiry) onOpenEnquiry(service.title);
                          }}
                          className="inline-flex items-center gap-1.5 font-bold text-white bg-[#A94728] hover:bg-[#8F371B] px-3.5 py-1.5 rounded-sm border border-white/30 transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                          aria-label={`Request specification for ${service.title}`}
                        >
                          <span>REQUEST SPEC</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
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

