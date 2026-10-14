import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  FileText,
  Sparkles,
  HelpCircle,
  Building2,
  Cpu
} from 'lucide-react';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import {
  getProductBySlug,
  getMaterialsForProduct,
  getTypesForProduct,
  getProductMaterialImage,
  getProductMaterialSeoSlug,
  getProductSeoSlug,
  PRODUCT_CATEGORIES
} from '../../data/productsData';

export default function ProductCategoryPage({ productSlug, onNavigate, onOpenEnquiry }) {
  const product = getProductBySlug(productSlug) || PRODUCT_CATEGORIES[0];
  const applicableMaterials = getMaterialsForProduct(product.slug);
  const types = getTypesForProduct(product.slug, 'stainless-steel');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productSlug]);

  return (
    <div className="pt-[88px] sm:pt-[96px] lg:pt-[104px] bg-[#F8F5F1] min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products', path: '/products', page: 'products-landing' },
          { label: product.name, href: `/products/${getProductSeoSlug(product.slug)}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* ========================================================
          SECTION 1 — PRODUCT HERO
          ======================================================== */}
      <section className="bg-[#202427] text-white py-14 sm:py-20 relative overflow-hidden border-b border-[#D9D9D6]">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Product Information */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
                <span className="tech-label text-xs font-bold text-[#F4E5DC] tracking-widest uppercase">
                  {product.division.toUpperCase()} DIVISION // SPECIFICATION CATALOG
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-[#E7EEF2]/90 leading-relaxed mb-6 max-w-2xl">
                {product.heroDesc}
              </p>

              {/* Specification Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 font-mono text-xs">
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <span className="text-[#A94728] font-bold block mb-0.5">SIZE CAPABILITY</span>
                  <span className="text-white/90">{product.sizeRange}</span>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <span className="text-[#A94728] font-bold block mb-0.5">GOVERNING STANDARDS</span>
                  <span className="text-white/90">{product.standards.slice(0, 3).join(', ')}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenEnquiry(product.name, 'Stainless Steel')}
                  className="inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#7E321F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Request a Quote for {product.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#select-material"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all cursor-pointer"
                >
                  <span>Select Material ↓</span>
                </a>
              </div>
            </div>

            {/* Right: Large Product Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 group">
                <div className="corner-bracket-tl z-20" />
                <div className="corner-bracket-br z-20" />
                <img
                  src={product.defaultImage}
                  alt={product.name}
                  className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202427]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#202427]/90 backdrop-blur-md rounded border border-white/20 text-xs font-mono text-[#D9D9D6]">
                  <span className="text-[#A94728] font-bold">RMI SPECIFICATION:</span> Certified prime mill test records available for all batches.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 — SELECT MATERIAL (MATERIAL SELECTION GRID)
          ======================================================== */}
      <section id="select-material" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A94728]" />
            <span className="tech-label text-[#A94728] font-bold text-xs">
              STEP 01 — SELECT MATERIAL FAMILY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202427] tracking-tight mb-3">
            Available Materials for {product.name}
          </h2>

          <p className="text-sm sm:text-base text-[#202427]/75 leading-relaxed">
            Choose a certified metallurgical family below to examine tailored alloy grades, dimensional limits, and mechanical properties specific to {product.name}.
          </p>
        </div>

        {/* Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {applicableMaterials.map((mat) => (
            <div
              key={mat.id}
              onClick={() =>
                onNavigate(
                  'product-material',
                  null,
                  `/products/${getProductSeoSlug(product.slug)}/${getProductMaterialSeoSlug(product.slug, mat.slug)}`
                )
              }
              className="group bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-lg overflow-hidden shadow-xs hover:shadow-industrial transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Material Image Header */}
                <div className="relative h-48 overflow-hidden bg-black/5">
                  <img
                    src={getProductMaterialImage(product.slug, mat.slug) || mat.image}
                    alt={`${mat.name} ${product.name}`}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#202427]/90 text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold backdrop-blur-xs">
                    {mat.shortName.toUpperCase()}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-extrabold text-[#202427] group-hover:text-[#A94728] transition-colors mb-1.5">
                    {mat.name} {product.name}
                  </h3>

                  <p className="text-xs text-[#202427]/75 line-clamp-2 leading-relaxed mb-4">
                    {mat.tagline}
                  </p>

                  {/* Popular Grades Chips */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono text-[#A94728] font-bold block mb-1.5">
                      COMMONLY TRADED GRADES:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {mat.popularGrades.slice(0, 5).map((grade) => (
                        <span
                          key={grade}
                          className="px-2 py-0.5 text-xs font-mono font-bold bg-[#F8F5F1] border border-[#D9D9D6] text-[#202427] rounded"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[#D9D9D6]/50">
                <div className="w-full inline-flex items-center justify-between text-xs font-bold text-[#A94728] group-hover:text-[#7E321F] uppercase font-mono tracking-wider py-2 group-hover:underline">
                  <span>Explore {mat.shortName} {product.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — RELEVANT PRODUCT TYPES (FOR FLANGES & FASTENERS)
          ======================================================== */}
      {types.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F4E5DC]/50 border-t border-b border-[#D9D9D6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#A94728]" />
                <span className="tech-label text-[#A94728] font-bold text-xs">
                  TYPES ARCHITECTURE // {product.name.toUpperCase()}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202427] tracking-tight mb-3">
                Types of {product.name}
              </h2>

              <p className="text-sm sm:text-base text-[#202427]/75 leading-relaxed">
                Explore individual design configurations, face connection types, and standard pressure classes available across all material combinations.
              </p>
            </div>

            {/* Types Cards Grid — Enlarged & Balanced Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {types.map((type) => (
                <div
                  key={type.id}
                  onClick={() =>
                    onNavigate(
                      'product-type-detail',
                      null,
                      `/products/${getProductSeoSlug(product.slug)}/${getProductMaterialSeoSlug(product.slug, 'stainless-steel')}/types/${type.slug}`
                    )
                  }
                  className="group bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl overflow-hidden shadow-xs hover:shadow-industrial transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Enlarged, consistent image area */}
                    <div className="relative h-52 sm:h-56 overflow-hidden bg-black/5">
                      <img
                        src={type.image}
                        alt={type.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-[#202427]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded font-bold border border-white/10">
                        {type.standards ? type.standards[0] : 'STANDARD'}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-extrabold text-[#202427] group-hover:text-[#A94728] transition-colors">
                          {type.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#202427]/75 line-clamp-2 leading-relaxed mb-4">
                        {type.shortDesc}
                      </p>

                      {type.connectionType && (
                        <div className="p-2.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-xs font-mono text-[#202427]/80 mb-3 truncate">
                          <span className="text-[#A94728] font-bold">JOINT: </span>
                          <span>{type.connectionType}</span>
                        </div>
                      )}

                      {type.pressureClasses && (
                        <div className="text-xs font-mono text-[#A94728] font-bold truncate">
                          RATING: {type.pressureClasses}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-0 border-t border-[#D9D9D6]/50">
                    <button
                      onClick={() =>
                        onNavigate(
                          'product-type-detail',
                          null,
                          `/products/${getProductSeoSlug(product.slug)}/${getProductMaterialSeoSlug(product.slug, 'stainless-steel')}/types/${type.slug}`
                        )
                      }
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-[#A94728] hover:text-[#7E321F] uppercase font-mono tracking-wider py-2 group-hover:underline cursor-pointer"
                    >
                      <span>Explore {type.name}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          SECTION 4 — APPLICATIONS & SPECIFICATIONS TABLE
          ======================================================== */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border-2 border-[#D9D9D6] shadow-xs">
            <h3 className="text-xl font-extrabold text-[#202427] mb-4 pb-2 border-b border-[#D9D9D6]">
              Technical Specifications & Compliance
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-3 py-2 border-b border-[#D9D9D6]/60">
                <span className="font-bold text-[#202427]">Nominal Sizes</span>
                <span className="col-span-2 text-[#202427]/80 font-mono">{product.sizeRange}</span>
              </div>
              <div className="grid grid-cols-3 py-2 border-b border-[#D9D9D6]/60">
                <span className="font-bold text-[#202427]">Applicable Standards</span>
                <span className="col-span-2 text-[#202427]/80 font-mono">{product.standards.join(', ')}</span>
              </div>
              <div className="grid grid-cols-3 py-2 border-b border-[#D9D9D6]/60">
                <span className="font-bold text-[#202427]">Wall Schedules / Class</span>
                <span className="col-span-2 text-[#202427]/80 font-mono">{product.schedules}</span>
              </div>
              <div className="grid grid-cols-3 py-2 border-b border-[#D9D9D6]/60">
                <span className="font-bold text-[#202427]">Testing & Certification</span>
                <span className="col-span-2 text-[#202427]/80 font-mono">
                  EN 10204 3.1 MTC, PMI Inspection, Ultrasonic Tested, Hydrostatic Test
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#202427] text-white p-6 sm:p-8 rounded-lg border border-white/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="tech-label text-xs font-bold text-[#A94728] uppercase mb-2">
                MISSION-CRITICAL SECTORS
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4">
                Common Industrial Applications
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D9D9D6]">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A94728] flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <button
                onClick={() => onOpenEnquiry(product.name, 'All Grades')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#A94728] hover:bg-[#7E321F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3 rounded-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Request Custom Sizing & RFQ</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
