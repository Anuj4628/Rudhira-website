import React from 'react';
import industrialMaterialsBg from '../assets/Product BG/materials-industrial-plant-bg.jpg';
import { getMaterialSeoSlug } from '../data/productsData';

// Authentic local product images representing each material family
import carbonSteelImg from '../assets/Product Section/Material Imges/carbon.png';
import stainlessSteelImg from '../assets/Product Section/Material Imges/stainless steel.jpg';
import alloySteelImg from '../assets/Product Section/Material Imges/alloy steel.jpg';
import duplexSteelImg from '../assets/Product Section/Material Imges/duplex.jpg';
import superDuplexSteelImg from '../assets/Product Section/Material Imges/super duplex.webp';
import nickelAlloysImg from '../assets/Product Section/Material Imges/nikle alloy.png';
import highAlloySteelImg from '../assets/Product Section/Material Imges/high Alloy.webp';
import titaniumImg from '../assets/Product Section/Material Imges/titanium.png';
import exoticAlloysImg from '../assets/Product Section/Material Imges/exotic.jpeg';

const MATERIAL_CARDS = [
  {
    name: 'Carbon Steel',
    slug: 'carbon-steel',
    image: carbonSteelImg,
    alt: 'Carbon Steel Industrial Flanges & Products'
  },
  {
    name: 'Stainless Steel',
    slug: 'stainless-steel',
    image: stainlessSteelImg,
    alt: 'Stainless Steel High Integrity Fittings'
  },
  {
    name: 'Alloy Steel',
    slug: 'alloy-steel',
    image: alloySteelImg,
    alt: 'Alloy Steel Precision Heavy Duty Fittings'
  },
  {
    name: 'Duplex Steel',
    slug: 'duplex-stainless-steel',
    image: duplexSteelImg,
    alt: 'Duplex Steel Forged Pressure Fittings'
  },
  {
    name: 'Super Duplex Steel',
    slug: 'super-duplex-stainless-steel',
    image: superDuplexSteelImg,
    alt: 'Super Duplex Steel Marine & Chemical Components'
  },
  {
    name: 'Nickel Alloys',
    slug: 'nickel-alloys',
    image: nickelAlloysImg,
    alt: 'Nickel Alloy Corrosion Resistant Industrial Products'
  },
  {
    name: 'High Alloy Steel',
    slug: 'high-alloy-steel',
    image: highAlloySteelImg,
    alt: 'High Alloy Steel High Pressure Compression Fittings'
  },
  {
    name: 'Titanium',
    slug: 'titanium',
    image: titaniumImg,
    alt: 'Titanium Industrial Mesh and Piping Solutions'
  },
  {
    name: 'Exotic Alloys',
    slug: 'exotic-alloys',
    image: exoticAlloysImg,
    alt: 'Exotic Alloy Process Valves & Specialty Assemblies'
  }
];

export default function MaterialsMarquee({ onSelectMaterial, onNavigate }) {
  // Repeated twice per track to ensure complete continuous coverage across any screen resolution
  const sequenceItems = [...MATERIAL_CARDS, ...MATERIAL_CARDS];

  const handleCardClick = (card) => {
    if (onNavigate) {
      onNavigate('material-family', null, `/materials/${getMaterialSeoSlug(card.slug)}`);
    } else if (onSelectMaterial) {
      onSelectMaterial(card.name);
    }
  };

  const renderCard = (card, uniqueKey) => (
    <div
      key={uniqueKey}
      onClick={() => handleCardClick(card)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick(card);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${card.name} material inventory`}
      className="material-card group flex-shrink-0 w-36 sm:w-44 md:w-48 lg:w-52 bg-[#0C151D]/90 hover:bg-[#16222E] border border-white/20 hover:border-[#123F91]/80 rounded-xl p-2.5 sm:p-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer flex flex-col items-center select-none backdrop-blur-md"
    >
      {/* Material/Product Image Container */}
      <div className="w-full h-24 sm:h-28 md:h-32 rounded-lg bg-white overflow-hidden flex items-center justify-center p-2 relative shadow-inner">
        <img
          src={card.image}
          alt={card.alt}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Material Name Underneath - Always high visibility white */}
      <div className="w-full mt-2.5 sm:mt-3 text-center px-1">
        <span
          className="material-card-title block text-white group-hover:text-[#EEF3FA] font-bold text-xs sm:text-sm tracking-wide line-clamp-1 transition-colors drop-shadow"
          style={{ color: '#FFFFFF' }}
        >
          {card.name}
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="materials"
      className="materials-marquee-section relative py-20 overflow-hidden flex flex-col justify-center border-y border-white/15 select-none"
      aria-label="Industrial Materials Categories"
    >
      {/* 1. Realistic Industrial Steel / Plant Background Image (85% Clear & Visible) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
        style={{ backgroundImage: `url(${industrialMaterialsBg})` }}
      />

      {/* 2. Light 15% Dark Overlay so Background is 85% Clear & Vivid */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* 3. Subtle Edge Transition Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B121A]/35 via-transparent to-[#0B121A]/40 pointer-events-none" />

      {/* 4. Subtle Technical Steel Grid Texture */}
      <div className="absolute inset-0 bg-steel-grid-pattern opacity-10 pointer-events-none" />

      {/* Section Header with Soft Frosted Panel for Readability over Clear Background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-10 sm:mb-12">
        <div className="inline-block max-w-4xl mx-auto bg-[#081017]/70 backdrop-blur-md px-6 sm:px-10 py-7 sm:py-8 rounded-2xl border border-white/15 shadow-2xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 border border-white/20 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#123F91] animate-pulse" />
            <span className="tech-label text-[#EEF3FA] font-bold text-xs sm:text-[13px] tracking-wider">
              02 — METALLURGICAL SPECTRUM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-5 font-sans drop-shadow-md">
            Materials We Work With
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#E7EEF2]/95 font-normal max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-7 font-sans">
            High Performance Alloys &amp; Specialty Steel Grades. Certified inventory selected for demanding industrial applications and diverse engineering requirements.
          </p>

          {onNavigate && (
            <button
              onClick={() => onNavigate('materials-landing', null, '/materials')}
              className="materials-view-btn inline-flex items-center gap-2 bg-[#123F91] hover:bg-[#0B2863] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-7 py-2.5 sm:py-3 rounded-sm border border-white/30 hover:border-white/50 transition-all cursor-pointer shadow-lg hover:shadow-xl backdrop-blur-sm"
              style={{ color: '#FFFFFF' }}
            >
              <span style={{ color: '#FFFFFF' }}>View All 9 Certified Material Families →</span>
            </button>
          )}
        </div>
      </div>

      {/* Continuous Automatic Slider Track */}
      <div className="relative z-10 w-full overflow-hidden py-3 marquee-container group/slider">
        {/* Soft Left & Right Edge Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-black/50 via-black/20 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max items-center marquee-slider-track">
          {/* Track Half 1 */}
          <div className="flex items-center gap-3.5 sm:gap-5 md:gap-6 pr-3.5 sm:pr-5 md:pr-6 flex-shrink-0">
            {sequenceItems.map((card, i) => renderCard(card, `track1-${i}`))}
          </div>

          {/* Track Half 2 (Exact Duplicate for Seamless Endless Loop) */}
          <div className="flex items-center gap-3.5 sm:gap-5 md:gap-6 pr-3.5 sm:pr-5 md:pr-6 flex-shrink-0" aria-hidden="true">
            {sequenceItems.map((card, i) => renderCard(card, `track2-${i}`))}
          </div>
        </div>
      </div>

      {/* Bottom Technical Line */}
      <div className="relative z-10 text-center mt-6 sm:mt-8 px-4">
        <span className="inline-block text-xs font-mono text-white bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/15 tracking-wider drop-shadow">
          Standard Mill Test Reports &amp; Positive Material Identification Available On Request
        </span>
      </div>
    </section>
  );
}
