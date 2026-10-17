import React, { useState } from 'react';
import { ArrowRight, Factory, Layers, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PRODUCT_CATEGORIES, getProductSeoSlug } from '../../data/productsData';

export default function ProductMegaMenu({
  isOpen,
  onClose,
  onNavigate,
  onOpenEnquiry,
  onMouseEnter,
  onMouseLeave
}) {
  const [activeDivision, setActiveDivision] = useState('all'); // 'all', 'Manufacturer', 'Supplier'

  if (!isOpen) return null;

  const filteredCategories = activeDivision === 'all'
    ? PRODUCT_CATEGORIES
    : PRODUCT_CATEGORIES.filter((p) => p.division === activeDivision);

  const handleCategoryClick = (e, slug) => {
    e.preventDefault();
    if (onClose) onClose();
    if (onNavigate) {
      onNavigate('product-category', null, `/products/${getProductSeoSlug(slug)}`);
    }
  };

  const handleViewAllProducts = (e) => {
    e.preventDefault();
    if (onClose) onClose();
    if (onNavigate) {
      onNavigate('products-landing', null, '/products');
    }
  };

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[96vw] max-w-[1180px] bg-white border border-[#E3CEBF] border-t-2 border-t-[#A94728] rounded-xl shadow-xl z-50 mega-menu-enter select-none before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Top Header Banner */}
      <div className="bg-[#FAF9F7] border-b border-[#E3CEBF]/60 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
          <div>
            <span className="text-xs font-mono font-bold text-[#A94728] tracking-widest uppercase block leading-none">
              EXPLORE PRODUCTS
            </span>
            <span className="text-[11px] text-gray-500 font-medium">
              ENGINEERED FOR DEMANDING INDUSTRIAL SECTORS • 18 SPECIALIZED CATEGORIES
            </span>
          </div>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex items-center gap-1.5 bg-gray-200/60 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => setActiveDivision('all')}
            className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
              activeDivision === 'all'
                ? 'bg-white text-[#A94728] shadow-xs'
                : 'text-gray-600 hover:text-[#202427]'
            }`}
          >
            All Lines (18)
          </button>
          <button
            type="button"
            onClick={() => setActiveDivision('Manufacturer')}
            className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeDivision === 'Manufacturer'
                ? 'bg-white text-[#A94728] shadow-xs'
                : 'text-gray-600 hover:text-[#202427]'
            }`}
          >
            <Factory className="w-3 h-3" />
            <span>Manufacturing (9)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveDivision('Supplier')}
            className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeDivision === 'Supplier'
                ? 'bg-white text-[#A94728] shadow-xs'
                : 'text-gray-600 hover:text-[#202427]'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Stockist & Supply (9)</span>
          </button>
        </div>
      </div>

      {/* Main Content Area: Products Grid + Featured Right Showcase Card */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left & Center: Dynamic Product Catalogue Grid */}
        <div className="lg:col-span-8 xl:col-span-9 max-h-[460px] overflow-y-auto pr-2 sidebar-sticky-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {filteredCategories.map((cat) => (
              <a
                key={cat.id}
                href={`/products/${getProductSeoSlug(cat.slug)}`}
                onClick={(e) => handleCategoryClick(e, cat.slug)}
                className="group flex items-start gap-3 p-2.5 rounded-xl border border-gray-100 hover:border-[#A94728]/35 bg-white hover:bg-[#FAF9F7] transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer"
                title={cat.name}
              >
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200/80 flex-shrink-0 bg-gray-50 flex items-center justify-center group-hover:border-[#A94728]/40 transition-colors">
                  <img
                    src={cat.defaultImage}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-[#1C2024] group-hover:text-[#A94728] truncate transition-colors leading-tight">
                      {cat.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A94728] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>

                  <p className="text-[10.5px] text-gray-500 font-medium line-clamp-2 leading-snug mt-1">
                    {cat.shortDesc}
                  </p>

                  <div className="mt-2 flex items-center gap-1.5">
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      cat.division === 'Manufacturer'
                        ? 'bg-[#A94728]/10 text-[#A94728]'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {cat.division}
                    </span>
                    {cat.hasTypes && (
                      <span className="text-[9px] font-mono text-gray-400">
                        • 12+ ASME Types
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Featured Industrial Showcase & Quick RFQ Card */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between p-5 rounded-xl bg-gradient-to-br from-[#1B2228] to-[#12161A] text-white shadow-lg border border-gray-800 relative overflow-hidden">
          {/* Subtle background industrial pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#A94728]/25 border border-[#A94728]/50 text-[#F4E5DC] font-mono text-[10px] font-bold tracking-wider uppercase mb-3">
              <ShieldCheck className="w-3 h-3 text-[#A94728]" />
              <span>QUALITY ACCREDITED</span>
            </div>

            <h4 className="text-base font-black text-white tracking-tight uppercase leading-snug">
              Precision Metals & Industrial Supply
            </h4>

            <p className="mt-2 text-xs text-white/80 leading-relaxed font-sans">
              Supplying certified stainless steel, duplex, carbon, and exotic alloy components with complete Mill Test Certificates (EN 10204 3.1).
            </p>

            {/* Bullet features */}
            <div className="mt-4 space-y-2 pt-3 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0" />
                <span>100% Spectro PMI Verified Stock</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0" />
                <span>Custom Sizing & Precision Cutting</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0" />
                <span>Prompt Dispatch from Mumbai</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-5 pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                if (onClose) onClose();
                if (onOpenEnquiry) onOpenEnquiry('Industrial Piping & Fitting Quotation');
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#A94728] hover:bg-[#8D381D] text-white text-xs font-extrabold uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <span>Get Instant Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="/products"
              onClick={handleViewAllProducts}
              className="w-full inline-flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold text-white/70 hover:text-white transition-colors py-1 cursor-pointer"
            >
              <span>View Full 18-Line Catalog</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer Assurance Strip */}
      <div className="bg-[#FAF9F7] border-t border-gray-100 px-6 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-gray-500 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
          <span>ASME B16.9 • B16.5 • ASTM A403 • ASTM A182 • ASTM A240 Compliant</span>
        </div>

        <a
          href="/products"
          onClick={handleViewAllProducts}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#A94728] hover:text-[#7E321F] uppercase tracking-wider hover:underline cursor-pointer"
        >
          <span>Explore All 18 Product Categories Directory</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
