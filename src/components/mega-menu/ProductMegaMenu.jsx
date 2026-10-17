import React from 'react';
import { ArrowRight, ChevronRight, Factory, Layers } from 'lucide-react';
import { PRODUCT_CATEGORIES, getProductSeoSlug } from '../../data/productsData';

export default function ProductMegaMenu({
  isOpen,
  onClose,
  onNavigate,
  onMouseEnter,
  onMouseLeave
}) {
  if (!isOpen) return null;

  const mfgCategories = PRODUCT_CATEGORIES.filter((p) => p.division === 'Manufacturer');
  const supCategories = PRODUCT_CATEGORIES.filter((p) => p.division === 'Supplier');

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
      role="menu"
      aria-label="Products Dropdown"
      className="nav-dropdown-menu mt-2 w-[580px] max-w-[calc(100vw-32px)] bg-[#A94728] border border-[#923C20] rounded-xl shadow-2xl shadow-black/35 z-50 select-none before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 text-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Upward notch pointing directly to the Product nav link */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A94728] rotate-45 border-t border-l border-[#923C20] pointer-events-none z-10" />

      {/* Inner rounded container */}
      <div className="rounded-xl overflow-hidden">
        {/* Top Header Banner Strip */}
        <div className="bg-black/15 border-b border-white/15 px-4 sm:px-5 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono font-bold tracking-wider uppercase text-white text-[11px]">
              PRODUCT CATALOG ({PRODUCT_CATEGORIES.length} CATEGORIES)
            </span>
          </div>
          <span className="text-white/80 text-[11px] font-medium hidden sm:inline">
            Manufacturing & Supply Divisions
          </span>
        </div>

        {/* Main Content: 2-Column Grid (Manufacturing & Stockist & Supply) */}
        <div className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Left Column: Manufacturing Division */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-white/20 text-white">
              <Factory className="w-3.5 h-3.5 text-white/90" />
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                MANUFACTURING ({mfgCategories.length})
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-0.5 pt-1">
              {mfgCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/products/${getProductSeoSlug(cat.slug)}`}
                  onClick={(e) => handleCategoryClick(e, cat.slug)}
                  className="group flex items-center justify-between px-2.5 py-1 rounded-md text-white/95 hover:text-white hover:bg-white/15 transition-all duration-150 cursor-pointer"
                  title={`Explore ${cat.name}`}
                >
                  <span className="text-[12.5px] font-medium tracking-tight group-hover:translate-x-0.5 transition-transform truncate">
                    {cat.name}
                  </span>
                  <ChevronRight className="w-3 h-3 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Stockist & Supply Division */}
          <div className="space-y-1 sm:border-l sm:border-white/20 sm:pl-4">
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-white/20 text-white">
              <Layers className="w-3.5 h-3.5 text-white/90" />
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                STOCKIST & SUPPLY ({supCategories.length})
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-0.5 pt-1">
              {supCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/products/${getProductSeoSlug(cat.slug)}`}
                  onClick={(e) => handleCategoryClick(e, cat.slug)}
                  className="group flex items-center justify-between px-2.5 py-1 rounded-md text-white/95 hover:text-white hover:bg-white/15 transition-all duration-150 cursor-pointer"
                  title={`Explore ${cat.name}`}
                >
                  <span className="text-[12.5px] font-medium tracking-tight group-hover:translate-x-0.5 transition-transform truncate">
                    {cat.name}
                  </span>
                  <ChevronRight className="w-3 h-3 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Footer Assurance & View All Strip */}
        <div className="bg-black/15 border-t border-white/15 px-4 sm:px-5 py-2 flex items-center justify-between text-xs">
          <span className="text-white/80 font-mono text-[11px] hidden sm:inline">
            EN 10204 3.1 Certified Stock
          </span>
          <a
            href="/products"
            onClick={handleViewAllProducts}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-white/90 uppercase tracking-wider hover:underline ml-auto cursor-pointer"
          >
            <span>View All {PRODUCT_CATEGORIES.length} Categories Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
