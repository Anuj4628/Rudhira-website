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
      className="py-24 sm:py-28 bg-[#202427] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Layout */}
        <div className="clients-header text-center mx-auto max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-white/10 border border-white/20 mb-4">
            <Building2 className="w-4 h-4 text-[#A94728]" />
            <span className="tech-label text-[#F4E5DC] font-bold text-xs">
              07 — INDUSTRIAL PARTNERSHIPS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Our Clients
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#F4E5DC]/85 font-normal max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses across industrial and engineering sectors. Supplying precision metal products, fittings, and flanges to premier industrial enterprises.
          </p>
        </div>

        {/* ONE LARGE Premium Clientele Panel with Original Brand Color Logos */}
        <div className="clientele-panel bg-[#272B2E] border-2 border-white/15 p-6 sm:p-10 rounded-sm shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {CLIENT_PARTNERS.map((client) => (
              <div
                key={client.name}
                className="client-logo-card group h-36 sm:h-40 bg-white border border-[#D9D9D6] hover:border-[#A94728] rounded-sm p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-default shadow-sm"
              >
                {/* SVG Logo: Rendered in its ORIGINAL BRAND COLOR with crisp scaling and clean padding */}
                <div className="h-16 w-full flex items-center justify-center px-2 py-1">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-h-14 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Company Name clearly visible below logo */}
                <span className="text-xs font-bold text-[#202427] group-hover:text-[#A94728] transition-colors leading-tight line-clamp-1 mt-1">
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
