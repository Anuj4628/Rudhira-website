import React from 'react';
import { MATERIALS_LIST } from '../data/industrialData';
import { getMaterialSeoSlug } from '../data/productsData';

export default function MaterialsMarquee({ onSelectMaterial, onNavigate }) {
  // Repeated twice to create an exact 50% loop for seamless infinite continuous slide
  const marqueeItems = [...MATERIALS_LIST, ...MATERIALS_LIST];

  const getMaterialSlug = (name) => {
    const clean = name.toLowerCase();
    if (clean.includes('super duplex')) return 'super-duplex-stainless-steel';
    if (clean.includes('duplex')) return 'duplex-stainless-steel';
    if (clean.includes('stainless')) return 'stainless-steel';
    if (clean.includes('carbon')) return 'carbon-steel';
    if (clean.includes('high alloy')) return 'high-alloy-steel';
    if (clean.includes('exotic')) return 'exotic-alloys';
    if (clean.includes('nickel') || clean.includes('inconel') || clean.includes('monel') || clean.includes('hastelloy')) return 'nickel-alloys';
    if (clean.includes('titanium')) return 'titanium';
    if (clean.includes('alloy')) return 'alloy-steel';
    return 'stainless-steel';
  };

  return (
    <section
      id="materials"
      className="relative py-20 bg-[#344B5C] overflow-hidden flex flex-col justify-center border-y border-white/15 select-none"
      aria-label="Industrial Materials Categories"
    >
      {/* Subtle Lighter-Blue Technical Grid Texture */}
      <div className="absolute inset-0 bg-steel-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-white/10 border border-white/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
          <span className="tech-label text-[#F4E5DC] font-bold text-xs">
            02 — METALLURGICAL SPECTRUM
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Materials We Work With
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#E7EEF2]/85 font-normal max-w-2xl mx-auto leading-relaxed mb-6">
          High Performance Alloys & Specialty Steel Grades. Certified inventory selected for demanding industrial applications and diverse engineering requirements.
        </p>

        {onNavigate && (
          <button
            onClick={() => onNavigate('materials-landing', null, '/materials')}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#A94728] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm border border-white/20 transition-all cursor-pointer"
          >
            <span>View All 9 Certified Material Families →</span>
          </button>
        )}
      </div>

      {/* CONTINUOUS MARQUEE BANNER WITH LOGO ORANGE CARDS */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="marquee-track-continuous flex items-center gap-5 sm:gap-6">
          {marqueeItems.map((mat, i) => (
            <div
              key={`mat-${i}`}
              onClick={() => {
                if (onNavigate) {
                  const slug = getMaterialSlug(mat);
                  onNavigate('material-family', null, `/materials/${getMaterialSeoSlug(slug)}`);
                } else if (onSelectMaterial) {
                  onSelectMaterial(mat);
                }
              }}
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-[#A94728] hover:bg-[#90391D] border-2 border-[#F4E5DC]/30 hover:border-white text-white rounded-lg transition-all duration-200 cursor-pointer group shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95"
            >
              <span className="text-[#F4E5DC] group-hover:text-white font-mono text-base sm:text-lg font-bold transition-colors">
                [
              </span>
              <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wider uppercase text-white whitespace-nowrap">
                {mat}
              </span>
              <span className="text-[#F4E5DC] group-hover:text-white font-mono text-base sm:text-lg font-bold transition-colors">
                ]
              </span>
              <span className="text-white/60 ml-2 group-hover:text-white font-mono text-sm">
                —
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Technical Line */}
      <div className="relative z-10 text-center mt-8">
        <span className="text-xs font-mono text-[#E7EEF2]/75 tracking-wider">
          Standard Mill Test Reports & Positive Material Identification Available On Request
        </span>
      </div>
    </section>
  );
}
