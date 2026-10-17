import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Layers, Truck, Headset, ArrowRight } from 'lucide-react';

// Exactly two authentic industrial photographs for the overlapping collage
import whyUsInspectionImg from '../assets/images/why-us-inspection.jpg';
import whyUsMachineryImg from '../assets/images/why-us-machinery.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs({ onOpenEnquiry, onNavigate }) {
  const sectionRef = useRef(null);
  const collageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth fade & slide-in on scroll
      gsap.fromTo(
        collageRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power2.out',
          delay: 0.1,
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
      id="why-us"
      ref={sectionRef}
      className="py-24 sm:py-28 lg:py-32 bg-[#FAF8F5] border-t border-b border-[#EAE6DE] relative overflow-hidden select-none"
      aria-label="Why Choose Rudhira Metal Industries"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Two-Column Premium Industrial Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-14 lg:gap-16 xl:gap-22">
          
          {/* LEFT SIDE: Exactly Two Industrial Photographs in an Overlapping Collage */}
          <div
            ref={collageRef}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[540px] pb-12 sm:pb-16 pt-2">
              
              {/* Image 1 (Larger Primary Image): Metallurgical Inspection Engineer */}
              <div className="relative z-10 w-[84%] sm:w-[82%] rounded-md overflow-hidden shadow-xl border-2 border-white bg-[#EFECE6]">
                <img
                  src={whyUsInspectionImg}
                  alt="Quality assurance engineer inspecting precision steel flange and bar"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Image 2 (Smaller Secondary Image): Industrial CNC Laser Processing Machinery */}
              <div className="absolute z-20 bottom-0 right-0 w-[58%] sm:w-[56%] rounded-md overflow-hidden shadow-2xl border-4 border-[#FAF8F5] bg-[#EFECE6]">
                <img
                  src={whyUsMachineryImg}
                  alt="Industrial CNC steel plate cutting machinery and steel coils"
                  className="w-full h-[200px] sm:h-[250px] lg:h-[280px] object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Bolder, Larger Why Choose Us Content */}
          <div
            ref={contentRef}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            {/* Small Eyebrow Label (12–14px bold) */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-mono tracking-widest text-[#C34B2B] uppercase font-bold mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C34B2B]" />
              <span>WHY CHOOSE US</span>
            </div>

            {/* Main Section Heading: 44–58px desktop, ExtraBold 800 */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-extrabold text-[#191C1F] tracking-tight leading-[1.12] mb-5 sm:mb-6 font-sans">
              Built on Quality. <br />
              <span className="text-[#C34B2B]">Driven by Reliability.</span>
            </h2>

            {/* Main Description: 18–20px desktop */}
            <p className="text-base sm:text-lg lg:text-[19px] text-[#4A5568] leading-relaxed mb-9 max-w-xl font-normal font-sans">
              Rudhira Metal Industries delivers quality-focused metal products, dependable supply, and professional support to meet demanding industrial requirements.
            </p>

            {/* Four Benefits in a Clean, Well-Spaced Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 mb-9 pt-1">
              
              {/* 1. Quality-Focused Supply */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#C34B2B]/10 text-[#C34B2B] flex-shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#191C1F] tracking-tight font-sans">
                    Quality-Focused Supply
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#555E68] leading-relaxed mt-1 font-sans">
                    Carefully sourced materials with a strong focus on quality and dimensional consistency.
                  </p>
                </div>
              </div>

              {/* 2. Wide Product Range */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#C34B2B]/10 text-[#C34B2B] flex-shrink-0 mt-1">
                  <Layers className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#191C1F] tracking-tight font-sans">
                    Wide Product Range
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#555E68] leading-relaxed mt-1 font-sans">
                    Stainless steel plates, coils, round bars, hex bars, and other available product categories.
                  </p>
                </div>
              </div>

              {/* 3. Reliable Supply */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#C34B2B]/10 text-[#C34B2B] flex-shrink-0 mt-1">
                  <Truck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#191C1F] tracking-tight font-sans">
                    Reliable Supply
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#555E68] leading-relaxed mt-1 font-sans">
                    Organized stock handling and dependable coordination to support customer requirements.
                  </p>
                </div>
              </div>

              {/* 4. Professional Support */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#C34B2B]/10 text-[#C34B2B] flex-shrink-0 mt-1">
                  <Headset className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#191C1F] tracking-tight font-sans">
                    Professional Support
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#555E68] leading-relaxed mt-1 font-sans">
                    Responsive assistance for product enquiries, material specifications, and quotations.
                  </p>
                </div>
              </div>

            </div>

            {/* Learn More Button linking to existing About Us page */}
            <div className="pt-6 border-t border-[#E5E0D8] flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('about', null, '/about');
                  } else {
                    window.location.href = '/about';
                  }
                }}
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-wider uppercase text-[#191C1F] hover:text-[#C34B2B] transition-colors py-1 group cursor-pointer"
                aria-label="Learn More About Rudhira Metal Industries"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-[#C34B2B] group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
