import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Layers,
  CheckCircle2
} from 'lucide-react';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { MATERIAL_CATEGORIES, PRODUCT_CATEGORIES } from '../../data/productsData';

export default function MaterialsLandingPage({ onNavigate, onOpenEnquiry }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMaterials = MATERIAL_CATEGORIES.filter((mat) => {
    const matchesSearch =
      mat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mat.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mat.popularGrades.some((g) => g.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="pt-[88px] sm:pt-[96px] lg:pt-[104px] bg-[#F8F5F1] min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[{ label: 'Materials', href: '/materials' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="bg-[#202427] text-white py-14 sm:py-20 relative overflow-hidden border-b border-[#D9D9D6]">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
              <span className="tech-label text-xs font-bold text-[#F4E5DC] tracking-widest uppercase">
                METALLURGICAL SPECTRUM // 9 CERTIFIED FAMILIES
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Industrial Materials & Certified Alloys
            </h1>

            <p className="text-base sm:text-lg text-[#E7EEF2]/90 leading-relaxed mb-8">
              Rudhira Metal Industries stocks and procures 9 specialized industrial material families engineered for high-pressure, cryogenic, high-temperature, and corrosive operating environments. Sourced with complete EN 10204 3.1 Mill Test Certificates and 100% PMI verification.
            </p>

            {/* Search Input Bar */}
            <div className="relative max-w-xl">
              <Search className="w-4 h-4 text-[#202427]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search material families or grades (e.g. 316L, Inconel, A105, Titanium)..."
                className="w-full pl-10 pr-4 py-3 bg-white text-[#202427] placeholder-[#202427]/50 text-xs sm:text-sm rounded-lg border border-[#D9D9D6] focus:outline-none focus:border-[#A94728] shadow-md"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#A94728] font-bold"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b border-[#D9D9D6]">
          <div>
            <span className="tech-label text-xs font-bold text-[#A94728] uppercase">
              METALLURGICAL DIRECTORY
            </span>
            <h2 className="text-2xl font-extrabold text-[#202427]">
              Certified Material Families ({filteredMaterials.length})
            </h2>
          </div>

          <button
            onClick={() => onOpenEnquiry('Raw Material Requirement', '')}
            className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#A94728] hover:text-[#7E321F] uppercase tracking-wider"
          >
            <span>Request Alloy Stock Sheet</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {filteredMaterials.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-xl border border-[#D9D9D6]">
            <p className="text-base text-[#202427] font-bold mb-2">No material families match your query.</p>
            <p className="text-xs text-[#202427]/60 mb-4">Try searching for generic terms like "Duplex", "Nickel", "Steel", or grade numbers like "304", "625".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 bg-[#A94728] text-white text-xs font-bold rounded"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMaterials.map((mat) => (
              <div
                key={mat.id}
                className="group bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl overflow-hidden shadow-xs hover:shadow-industrial transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Material Family Image with Tagline Badge */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-black/5">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[10px] font-mono text-[#F4E5DC] font-bold uppercase tracking-widest">
                        METALLURGICAL FAMILY
                      </div>
                      <div className="text-lg font-extrabold truncate text-white">
                        {mat.name}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <p className="text-xs text-[#202427]/75 line-clamp-3 leading-relaxed mb-4">
                      {mat.overview}
                    </p>

                    {/* Key Characteristics */}
                    <div className="mb-4 space-y-1.5">
                      <div className="text-[10px] font-mono font-bold text-[#A94728] uppercase tracking-wider">
                        KEY ADVANTAGES:
                      </div>
                      {mat.keyCharacteristics.slice(0, 2).map((char, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-[#202427]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{char}</span>
                        </div>
                      ))}
                    </div>

                    {/* Popular Researched Grades */}
                    <div className="pt-3 border-t border-[#D9D9D6]/60">
                      <div className="text-[10px] font-mono font-bold text-[#202427]/60 uppercase mb-2">
                        POPULAR TRADED GRADES:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {mat.popularGrades.map((g) => (
                          <span
                            key={g}
                            className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#F8F5F1] border border-[#D9D9D6] text-[#202427] rounded"
                          >
                            {g}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="p-4 bg-[#F8F5F1] border-t border-[#D9D9D6] flex items-center justify-between">
                  <button
                    onClick={() =>
                      onNavigate('material-family', null, `/materials/${mat.slug}`)
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#202427] group-hover:text-[#A94728] transition-colors cursor-pointer"
                  >
                    <span>Explore Material Family</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A94728] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(`${mat.name} Requirements`, mat.name)}
                    className="text-[10px] font-mono font-bold bg-white hover:bg-[#A94728] text-[#202427] hover:text-white px-2.5 py-1 rounded border border-[#D9D9D6] transition-colors cursor-pointer"
                  >
                    RFQ →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cross-Reference Product Matrix Section */}
      <section className="bg-white py-16 border-t border-[#D9D9D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="tech-label text-xs font-bold text-[#A94728] uppercase">
              CROSS-CATEGORY SUPPLY MATRIX
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427] tracking-tight">
              Product Availability by Material Category
            </h2>
            <p className="text-sm text-[#202427]/70 mt-2">
              Explore how each material category maps into our 18 manufacturing and supplying product divisions:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PRODUCT_CATEGORIES.map((prod) => (
              <div
                key={prod.id}
                onClick={() =>
                  onNavigate('product-category', null, `/products/${prod.slug}`)
                }
                className="group p-3 bg-[#F8F5F1] hover:bg-[#F4E5DC] border border-[#D9D9D6] hover:border-[#A94728] rounded-lg text-center transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white mx-auto mb-2 flex items-center justify-center border border-[#D9D9D6]">
                  <Layers className="w-4 h-4 text-[#A94728]" />
                </div>
                <div className="text-xs font-bold text-[#202427] group-hover:text-[#A94728] truncate">
                  {prod.name}
                </div>
                <div className="text-[10px] font-mono text-[#202427]/50 mt-0.5">
                  {prod.division}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
