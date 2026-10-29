import React, { useState, useEffect } from 'react';
import {
  Factory,
  Layers,
  ArrowUpRight,
  Search,
  CheckCircle2,
  Filter,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { PRODUCT_CATEGORIES, getProductSeoSlug } from '../../data/productsData';

export default function ProductsLandingPage({ onNavigate, onOpenEnquiry }) {
  const [selectedDivision, setSelectedDivision] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = PRODUCT_CATEGORIES.filter((prod) => {
    const matchesDivision =
      selectedDivision === 'All' || prod.division === selectedDivision;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.standards.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDivision && matchesSearch;
  });

  return (
    <div className="pt-[88px] sm:pt-[96px] lg:pt-[104px] bg-[#F8F5F1] min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[{ label: 'Products Directory', href: '/products' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="bg-[#202427] text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#D9D9D6]">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            <span className="tech-label text-xs font-bold text-[#EEF3FA] tracking-widest uppercase">
              INDUSTRIAL PRODUCT CATALOG // 18 CATEGORIES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            Complete Industrial Metal Products Directory
          </h1>

          <p className="text-lg sm:text-xl text-[#D9D9D6] max-w-3xl leading-relaxed mb-8">
            Manufactured and stocked in strict compliance with ASME, ASTM, and DIN standards. Explore our full range of piping components, forged flanges, fittings, structural bars, and flat-rolled materials.
          </p>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white/5 p-3 rounded-lg border border-white/10 max-w-4xl">
            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {['All', 'Manufacturer', 'Supplier'].map((div) => (
                <button
                  key={div}
                  onClick={() => setSelectedDivision(div)}
                  className={`px-4 py-2.5 rounded text-xs sm:text-sm font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedDivision === div
                      ? 'bg-[#123F91] text-white border border-[#123F91] shadow-sm'
                      : 'bg-[#202427] text-white/90 border border-white/20 hover:border-[#123F91] hover:text-white'
                  }`}
                >
                  {div === 'All' ? 'ALL PRODUCTS (18)' : `${div.toUpperCase()} DIVISION (9)`}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="w-4 h-4 text-white/60 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products or standards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#202427] border border-white/20 rounded text-sm text-white placeholder-white/60 focus:outline-none focus:border-[#123F91] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-[#D9D9D6]">
          <div className="text-sm font-mono font-bold text-[#202427]">
            SHOWING <span className="text-[#123F91]">{filteredProducts.length}</span> CATEGORIES
          </div>
          <div className="text-xs sm:text-sm text-[#202427]/70 font-mono">
            CLICK ANY PRODUCT TO VIEW APPLICABLE MATERIALS & GRADES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white border-2 border-[#D9D9D6] hover:border-[#123F91] rounded-lg overflow-hidden shadow-xs hover:shadow-industrial transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Division Badge */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-black/10">
                  <img
                    src={prod.defaultImage}
                    alt={prod.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded shadow-sm ${
                        prod.division === 'Manufacturer'
                          ? 'bg-[#123F91] text-white'
                          : 'bg-[#202427] text-white'
                      }`}
                    >
                      {prod.division.toUpperCase()}
                    </span>
                    {prod.hasTypes && (
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-white text-[#202427] shadow-sm">
                        DEDICATED TYPES
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#202427] group-hover:text-[#123F91] transition-colors mb-2.5">
                    {prod.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#202427]/80 leading-relaxed mb-4 line-clamp-2">
                    {prod.shortDesc}
                  </p>

                  {/* Size Range & Standards Strip */}
                  <div className="p-3.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] space-y-1.5 text-xs sm:text-sm font-mono mb-4">
                    <div className="text-xs sm:text-sm text-[#202427]/80 truncate">
                      <span className="font-bold text-[#202427]">Sizes:</span> {prod.sizeRange}
                    </div>
                    <div className="text-xs sm:text-sm text-[#123F91] font-bold truncate">
                      <span>Standards:</span> {prod.standards.slice(0, 3).join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 border-t border-[#D9D9D6]/60 mt-auto flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('product-category', null, `/products/${getProductSeoSlug(prod.slug)}`)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#123F91] hover:text-[#0B2863] uppercase tracking-wider cursor-pointer group-hover:underline"
                >
                  <span>Materials & Grades</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenEnquiry(prod.name, '')}
                  className="btn-wave inline-flex items-center gap-1.5 border border-[#202427]/40 hover:border-[#123F91] hover:bg-[#123F91] hover:text-white text-[#202427] text-xs sm:text-sm font-bold px-3.5 py-2 rounded transition-all cursor-pointer"
                >
                  <span>RFQ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
