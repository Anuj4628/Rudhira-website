import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/industrialData';

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesCarousel({ onSelectIndustry }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // ONE SINGLE ROW continuous horizontal carousel moving Right to Left
    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: 'none',
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.industries-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      ctx.revert();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) gsap.to(tweenRef.current, { timeScale: 0.2, duration: 0.4 });
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) gsap.to(tweenRef.current, { timeScale: 1, duration: 0.4 });
  };

  const shiftManual = (direction) => {
    if (!trackRef.current || !tweenRef.current) return;
    const currentProgress = tweenRef.current.progress();
    const delta = direction === 'next' ? 0.05 : -0.05;
    let newProgress = (currentProgress + delta) % 1;
    if (newProgress < 0) newProgress += 1;
    tweenRef.current.progress(newProgress);
  };

  // Repeated 4 times to ensure seamless infinite single-row loop
  const carouselItems = [...INDUSTRIES_SERVED, ...INDUSTRIES_SERVED, ...INDUSTRIES_SERVED, ...INDUSTRIES_SERVED];

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-24 sm:py-28 bg-[#F8F5F1] text-[#202427] relative overflow-hidden select-none border-b border-[#D9D9D6]"
      aria-label="Industries We Serve Carousel"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="industries-header text-center mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#A94728]" />
            <span className="tech-label text-[#A94728] font-bold text-xs sm:text-[13px]">
              04 — SECTOR APPLICATIONS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-[#202427] tracking-tight leading-[1.12] mb-4 sm:mb-5 font-sans">
            Industries We Serve
          </h2>

          <p className="text-base sm:text-lg lg:text-[19px] text-[#202427]/80 font-normal max-w-2xl mx-auto leading-relaxed mb-6 font-sans">
            Supplying critical engineering materials and precision components across heavy industrial and export manufacturing sectors.
          </p>

          {/* Centered Manual Control Buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => shiftManual('prev')}
              className="p-3 bg-white hover:bg-[#A94728] hover:text-white text-[#202427] rounded-sm border border-[#D9D9D6] shadow-sm transition-colors cursor-pointer active:scale-95"
              aria-label="Scroll industries previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#5D7382] font-semibold tracking-wider uppercase px-2">
              DRAG OR SCROLL
            </span>
            <button
              onClick={() => shiftManual('next')}
              className="p-3 bg-white hover:bg-[#A94728] hover:text-white text-[#202427] rounded-sm border border-[#D9D9D6] shadow-sm transition-colors cursor-pointer active:scale-95"
              aria-label="Scroll industries next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ONE SINGLE ROW Continuous Card Track */}
      <div
        className="w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-6 whitespace-nowrap will-change-transform px-4"
        >
          {carouselItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => onSelectIndustry(item.name)}
              className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[410px] flex-shrink-0 bg-[#202427] rounded-lg overflow-hidden border border-[#D9D9D6] hover:border-[#A94728] transition-all duration-300 group cursor-pointer shadow-industrial hover:shadow-industrial-hover"
            >
              {/* Dominant Industrial Image from user folder */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Dark overlay at bottom as specified */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#202427] via-[#202427]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              {/* Bottom content: industry name only as specified in 19 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-[#F4E5DC] group-hover:translate-x-1 transition-all">
                  {item.name}
                </h3>

                {/* Orange line */}
                <div className="mt-3 h-1 w-10 bg-[#A94728] group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
