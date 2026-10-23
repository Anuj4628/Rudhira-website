import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
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
      role="menu"
      aria-label="Materials Dropdown"
      className="nav-dropdown-menu mt-2 w-[500px] max-w-[calc(100vw-32px)] bg-[#A94728] border border-[#923C20] rounded-xl shadow-2xl shadow-black/35 select-none text-white pointer-events-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Continuous invisible hover bridge between navbar item and dropdown */}
      <div
        className="absolute -top-3.5 left-0 right-0 h-4 bg-transparent pointer-events-auto"
        aria-hidden="true"
      />

      {/* Upward notch pointing directly to the Material nav link */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A94728] rotate-45 border-t border-l border-[#923C20] pointer-events-none z-10" />

      {/* Inner rounded container */}
      <div className="rounded-xl overflow-hidden">
        {/* Top Header Banner Strip */}
        <div className="bg-black/15 border-b border-white/15 px-4 sm:px-5 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-white/90" />
            <span className="font-mono font-bold tracking-wider uppercase text-white text-[11px]">
              METALLURGICAL SPECTRUM ({MATERIAL_CATEGORIES.length} FAMILIES)
            </span>
          </div>
          <span className="text-white/80 text-[11px] font-medium hidden sm:inline">
            100% Spectro PMI Verified Stock
          </span>
        </div>

        {/* Main Content: Compact 3-Column Grid of Material Names */}
        <div className="p-3.5 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-1.5">
            {MATERIAL_CATEGORIES.map((mat) => (
              <a
                key={mat.id}
                href={`/materials/${getMaterialSeoSlug(mat.slug)}`}
                onClick={(e) => handleMaterialClick(e, mat.slug)}
                className="group flex items-center justify-between px-2.5 py-1.5 rounded-md text-white/95 hover:text-white hover:bg-white/15 transition-all duration-150 cursor-pointer"
                title={`Explore ${mat.name} Alloys`}
              >
                <span className="text-[12.5px] font-medium tracking-tight group-hover:translate-x-0.5 transition-transform truncate">
                  {mat.name}
                </span>
                <ChevronRight className="w-3 h-3 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer Assurance & View All Strip */}
        <div className="bg-black/15 border-t border-white/15 px-4 sm:px-5 py-2 flex items-center justify-between text-xs">
          <span className="text-white/80 font-mono text-[11px] hidden sm:inline">
            EN 10204 3.1 MTC Provided
          </span>
          <a
            href="/materials"
            onClick={handleViewAllMaterials}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-white/90 uppercase tracking-wider hover:underline ml-auto cursor-pointer"
          >
            <span>View All Metallurgy Families</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
