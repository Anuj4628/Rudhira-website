import React from 'react';
import { ArrowRight, Layers, Factory } from 'lucide-react';
import { PRODUCT_CATEGORIES, getProductSeoSlug } from '../../data/productsData';

export default function ProductMegaMenu({
  isOpen,
  onClose,
  onNavigate,
  onMouseEnter,
  onMouseLeave
}) {
  if (!isOpen) return null;

  const manufacturerCats = PRODUCT_CATEGORIES.filter((p) => p.division === 'Manufacturer');
  const supplierCats = PRODUCT_CATEGORIES.filter((p) => p.division === 'Supplier');

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
      className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[940px] bg-[#FDFCFB] border border-[#D9D9D6] border-t-2 border-t-[#A94728] rounded-b-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150 select-none before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-4 sm:p-5">
        {/* Main 2-Division Columns: Manufacturer vs Supplier */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-7">
          {/* Division 1: Manufacturer */}
          <div className="lg:pr-5 lg:border-r lg:border-[#D9D9D6]/70">
            {/* Division Subheading */}
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9D9D6]/80">
              <div className="flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-[#A94728]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#202427]">
                  Manufacturer Division
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-1.5 py-0.5 rounded">
                9 Categories
              </span>
            </div>

            {/* 3x3 Compact Grid of Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
              {manufacturerCats.map((cat) => (
                <a
                  key={cat.id}
                  href={`/products/${getProductSeoSlug(cat.slug)}`}
                  onClick={(e) => handleCategoryClick(e, cat.slug)}
                  className="group flex items-center gap-2 p-1.5 rounded-md hover:bg-[#F4E5DC]/60 border border-transparent hover:border-[#A94728]/25 transition-all cursor-pointer"
                  title={cat.name}
                >
                  <img
                    src={cat.defaultImage}
                    alt={cat.name}
                    className="w-7 h-7 rounded object-cover border border-[#D9D9D6] flex-shrink-0 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11.5px] font-bold text-[#202427] group-hover:text-[#A94728] truncate transition-colors leading-tight">
                      {cat.name}
                    </div>
                    <div className="text-[9.5px] text-[#202427]/60 truncate font-mono leading-tight">
                      {cat.hasTypes ? 'Dedicated Types' : 'All Alloys'}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Division 2: Supplier */}
          <div>
            {/* Division Subheading */}
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9D9D6]/80">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#A94728]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#202427]">
                  Supplier Division
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-1.5 py-0.5 rounded">
                9 Categories
              </span>
            </div>

            {/* 3x3 Compact Grid of Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
              {supplierCats.map((cat) => (
                <a
                  key={cat.id}
                  href={`/products/${getProductSeoSlug(cat.slug)}`}
                  onClick={(e) => handleCategoryClick(e, cat.slug)}
                  className="group flex items-center gap-2 p-1.5 rounded-md hover:bg-[#F4E5DC]/60 border border-transparent hover:border-[#A94728]/25 transition-all cursor-pointer"
                  title={cat.name}
                >
                  <img
                    src={cat.defaultImage}
                    alt={cat.name}
                    className="w-7 h-7 rounded object-cover border border-[#D9D9D6] flex-shrink-0 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11.5px] font-bold text-[#202427] group-hover:text-[#A94728] truncate transition-colors leading-tight">
                      {cat.name}
                    </div>
                    <div className="text-[9.5px] text-[#202427]/60 truncate font-mono leading-tight">
                      Stockist & Supply
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Footer Strip */}
        <div className="mt-3.5 pt-2.5 border-t border-[#D9D9D6] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#202427]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
            <span>Complete ASTM / ASME / DIN Sourcing & Cutting</span>
          </div>

          <a
            href="/products"
            onClick={handleViewAllProducts}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A94728] hover:text-[#7E321F] font-mono uppercase tracking-wider hover:underline cursor-pointer"
          >
            <span>View All Products Directory</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
