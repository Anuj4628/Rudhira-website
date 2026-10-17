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
      className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1040px] bg-white border border-[#E3CEBF] border-t-2 border-t-[#A94728] rounded-xl shadow-xl z-50 mega-menu-enter select-none before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Top Header Banner */}
      <div className="bg-[#FAF9F7] border-b border-[#E3CEBF]/60 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
          <div>
            <span className="text-xs font-mono font-bold text-[#A94728] tracking-widest uppercase block leading-none">
              METALLURGICAL SPECTRUM
            </span>
            <span className="text-[11px] text-gray-500 font-medium">
              9 CERTIFIED ALLOY FAMILIES FROM AUSTENITIC STAINLESS TO SUPER DUPLEX & TITANIUM
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-2 py-0.5 rounded border border-[#A94728]/20">
            EN 10204 3.1 MTC
          </span>
          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            PMI SPECTRO VERIFIED
          </span>
        </div>
      </div>

      {/* Main 3x3 Metallurgy Cards Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[460px] overflow-y-auto pr-1 sidebar-sticky-scroll">
          {MATERIAL_CATEGORIES.map((mat) => (
            <a
              key={mat.id}
              href={`/materials/${getMaterialSeoSlug(mat.slug)}`}
              onClick={(e) => handleMaterialClick(e, mat.slug)}
              className="group flex flex-col justify-between p-3.5 rounded-xl border border-gray-100 hover:border-[#A94728]/40 bg-white hover:bg-[#FAF9F7] transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer relative"
              title={mat.name}
            >
              <div>
                {/* Header with thumbnail & name */}
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-lg overflow-hidden border border-gray-200/80 flex-shrink-0 bg-gray-50 flex items-center justify-center group-hover:border-[#A94728]/40 transition-colors">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-[#1C2024] group-hover:text-[#A94728] truncate transition-colors leading-tight">
                        {mat.name}
                      </h4>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A94728] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </div>

                    <p className="text-[10.5px] text-gray-500 font-medium line-clamp-2 leading-snug mt-1">
                      {mat.tagline}
                    </p>
                  </div>
                </div>

                {/* Popular Grades Micro Chips */}
                <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-gray-100">
                  {mat.popularGrades.slice(0, 3).map((grade) => (
                    <span
                      key={grade}
                      className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-gray-100 group-hover:bg-white text-gray-700 rounded border border-gray-200/60"
                    >
                      {grade}
                    </span>
                  ))}
                  {mat.popularGrades.length > 3 && (
                    <span className="text-[9px] font-mono font-bold text-[#A94728] px-1 py-0.5">
                      +{mat.popularGrades.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Footer Assurance Strip */}
      <div className="bg-[#FAF9F7] border-t border-gray-100 px-6 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-gray-500 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
          <span>Full Chemical Composition & Tensile Test Certification to EN 10204 3.1</span>
        </div>

        <a
          href="/materials"
          onClick={handleViewAllMaterials}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#A94728] hover:text-[#7E321F] uppercase tracking-wider hover:underline cursor-pointer"
        >
          <span>View Complete 9-Family Metallurgy Directory</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
