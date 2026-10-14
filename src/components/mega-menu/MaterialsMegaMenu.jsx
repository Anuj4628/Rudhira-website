import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MATERIAL_CATEGORIES, getMaterialSeoSlug } from '../../data/productsData';

export default function MaterialsMegaMenu({
  isOpen,
  onClose,
  onNavigate,
  onMouseEnter,
  onMouseLeave
}) {
  if (!isOpen) return null;

  const handleMaterialClick = (e, slug) => {
    e.preventDefault();
    if (onClose) onClose();
    if (onNavigate) {
      onNavigate('material-family', null, `/materials/${getMaterialSeoSlug(slug)}`);
    }
  };

  const handleViewAllMaterials = (e) => {
    e.preventDefault();
    if (onClose) onClose();
    if (onNavigate) {
      onNavigate('materials-landing', null, '/materials');
    }
  };

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-[800px] bg-[#FDFCFB] border border-[#D9D9D6] border-t-2 border-t-[#A94728] rounded-b-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150 select-none before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-4 sm:p-5">
        {/* Subtle Category Heading */}
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#D9D9D6]/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#A94728]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#202427]">
              Certified Material Spectrum
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-1.5 py-0.5 rounded">
            9 Alloy Families
          </span>
        </div>

        {/* 3x3 Compact Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
          {MATERIAL_CATEGORIES.map((mat) => (
            <a
              key={mat.id}
              href={`/materials/${getMaterialSeoSlug(mat.slug)}`}
              onClick={(e) => handleMaterialClick(e, mat.slug)}
              className="group flex items-start gap-2.5 p-2 bg-white hover:bg-[#F4E5DC]/50 border border-[#D9D9D6] hover:border-[#A94728]/40 rounded-md transition-all cursor-pointer shadow-2xs"
              title={mat.name}
            >
              <img
                src={mat.image}
                alt={mat.name}
                className="w-8 h-8 rounded object-cover border border-[#D9D9D6] flex-shrink-0 group-hover:scale-105 transition-transform"
                loading="lazy"
              />

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#202427] group-hover:text-[#A94728] truncate transition-colors leading-tight">
                    {mat.name}
                  </span>
                  <span className="text-[10px] text-[#A94728] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>

                <p className="text-[9.5px] text-[#202427]/60 truncate leading-tight mt-0.5">
                  {mat.tagline}
                </p>

                {/* Popular Grades Micro Chips */}
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {mat.popularGrades.slice(0, 3).map((g) => (
                    <span
                      key={g}
                      className="px-1 py-0.2 text-[8.5px] font-mono font-bold bg-[#F8F5F1] text-[#202427] rounded border border-[#D9D9D6]/60"
                    >
                      {g}
                    </span>
                  ))}
                  {mat.popularGrades.length > 3 && (
                    <span className="text-[8.5px] font-mono text-[#A94728] font-bold">
                      +{mat.popularGrades.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Compact Footer Strip */}
        <div className="mt-3.5 pt-2.5 border-t border-[#D9D9D6] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#202427]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
            <span>EN 10204 3.1 Mill Certificates • 100% Spectro PMI Verified</span>
          </div>

          <a
            href="/materials"
            onClick={handleViewAllMaterials}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A94728] hover:text-[#7E321F] font-mono uppercase tracking-wider hover:underline cursor-pointer"
          >
            <span>View All Materials Overview</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
