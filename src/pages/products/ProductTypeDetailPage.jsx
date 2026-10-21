import React, { useEffect } from 'react';
import {
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  Zap
} from 'lucide-react';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import {
  getProductBySlug,
  getMaterialBySlug,
  getFlangeTypeBySlug,
  getFastenerTypeBySlug,
  getTypesForProduct,
  getGradesForMaterial,
  getMaterialsForProduct,
  getTypeMaterialImage,
  PRODUCT_CATEGORIES,
  MATERIAL_CATEGORIES
} from '../../data/productsData';

export default function ProductTypeDetailPage({
  productSlug,
  materialSlug,
  typeSlug,
  onNavigate,
  onOpenEnquiry
}) {
  const product = getProductBySlug(productSlug) || PRODUCT_CATEGORIES.find((p) => p.slug === 'flanges');
  const material = getMaterialBySlug(materialSlug) || MATERIAL_CATEGORIES[0];

  // Lookup type with material context
  let type = null;
  if (product.slug === 'flanges') {
    type = getFlangeTypeBySlug(typeSlug, material.slug);
  } else if (product.slug === 'fasteners') {
    type = getFastenerTypeBySlug(typeSlug, material.slug);
  } else {
    type = getFlangeTypeBySlug(typeSlug, material.slug) || getFastenerTypeBySlug(typeSlug, material.slug);
  }

  // Graceful fallback if slug is novel
  if (!type) {
    const formattedTitle = typeSlug ? typeSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Standard Configuration';
    type = {
      id: `type-${typeSlug}`,
      slug: typeSlug,
      name: formattedTitle,
      image: product.defaultImage,
      description: `Engineered ${material.name.toLowerCase()} ${formattedTitle.toLowerCase()} manufactured in compliance with international pressure rating and dimensional standards.`,
      applications: [
        `High-pressure pipeline connections and ${material.name} process plants`,
        `Petrochemical refinery systems, power stations, and offshore skids`
      ],
      standards: ['ASME B16.5', 'ASME B16.47', 'ASTM A182 / ASTM A105', 'DIN EN 1092-1'],
      sizeRange: '1/2" NB to 48" NB (Custom large diameters upon request)',
      pressureClass: 'Class 150, 300, 600, 900, 1500, 2500 & PN6 to PN400'
    };
  }

  // Select material-specific image if available
  const displayImage = getTypeMaterialImage(product.slug, type.slug, material.slug) || (type.materialImages && type.materialImages[material.slug]) || type.image || product.defaultImage;

  const allProductTypes = getTypesForProduct(product.slug, material.slug);
  const relatedTypes = allProductTypes.filter((t) => t.slug !== type.slug);
  const materialGrades = getGradesForMaterial(material.slug);
  const applicableMaterials = getMaterialsForProduct(product.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productSlug, materialSlug, typeSlug]);

  return (
    <div className="pt-[88px] sm:pt-[96px] lg:pt-[104px] bg-[#F8F5F1] min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products', path: '/products', page: 'products-landing' },
          { label: product.name, href: `/products/${product.slug}`, path: `/products/${product.slug}`, page: 'product-category' },
          { label: material.name, href: `/products/${product.slug}/${material.slug}`, path: `/products/${product.slug}/${material.slug}`, page: 'product-material' },
          { label: type.name, href: `/products/${product.slug}/${material.slug}/types/${type.slug}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="bg-[#202427] text-white py-14 sm:py-20 relative overflow-hidden border-b border-[#D9D9D6]">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/10 border border-white/20 text-xs font-mono font-bold text-[#F4E5DC] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
                  {material.name}
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-sm bg-[#A94728]/20 border border-[#A94728]/40 text-xs font-mono font-bold text-[#F4E5DC]">
                  {product.name} Configuration
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                {material.name} {type.name}
              </h1>

              <p className="text-lg sm:text-xl text-[#E7EEF2] leading-relaxed mb-6 max-w-2xl">
                {type.description}
              </p>

              {/* Key Specs Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-4 sm:p-5 bg-white/5 rounded-lg border border-white/10 mb-8 max-w-2xl">
                <div>
                  <div className="text-xs font-mono text-white/60 uppercase">Size Range</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1 truncate">
                    {type.sizeRange || '1/2" to 48" NB'}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-white/60 uppercase">Pressure Class / Thread</div>
                  <div className="text-sm sm:text-base font-bold text-[#A94728] mt-1 truncate">
                    {type.pressureClass || 'Class 150 to 2500'}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-white/60 uppercase">Facing / Finish</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">
                    RF, RTJ, FF / 125-250 AARH
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() =>
                    onOpenEnquiry(
                      `${material.name} ${type.name}`,
                      material.name
                    )
                  }
                  className="btn-wave inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#8F371B] border-2 border-[#A94728] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Request Quote for {material.shortName} {type.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#material-switcher"
                  className="btn-wave inline-flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 hover:border-white text-white text-sm sm:text-base font-bold uppercase tracking-wider px-5 py-3.5 rounded-sm transition-all cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-[#A94728]" />
                  <span>Switch Material Family</span>
                </a>
              </div>
            </div>

            {/* Right Product Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl bg-black/40 group">
                <img
                  src={displayImage}
                  alt={`${material.name} ${type.name}`}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#A94728] font-bold">
                    PRECISION MACHINED SPECIFICATION
                  </div>
                  <div className="text-base font-extrabold truncate">
                    {material.name} // {type.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main 8 Cols (Scrollable Content) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12 min-w-0">
            {/* 1. Available Grades for this Material + Type Combination (GRADES FIRST) */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#D9D9D6] gap-2">
                <div>
                  <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                    METALLURGICAL GRADES DIRECTORY
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                    Popular {material.name} Grades for {type.name}
                  </h2>
                </div>
                <span className="text-xs sm:text-sm font-mono text-[#A94728] font-bold">
                  Click to View Detailed Spec
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {materialGrades.length > 0 ? (
                  materialGrades.map((g) => (
                    <button
                      key={g.id}
                      onClick={() =>
                        onNavigate(
                          'grade-detail',
                          null,
                          `/products/${product.slug}/${material.slug}/${g.slug}`
                        )
                      }
                      className="group p-3.5 bg-[#F8F5F1] hover:bg-[#F4E5DC] border border-[#D9D9D6] hover:border-[#A94728] rounded-lg text-left transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-base font-bold text-[#202427] group-hover:text-[#A94728] transition-colors">
                          {g.name}
                        </span>
                        <span className="text-xs font-mono text-[#A94728] font-bold group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </div>
                      <div className="text-xs font-mono text-[#202427]/60 truncate">
                        {g.unNumber}
                      </div>
                    </button>
                  ))
                ) : (
                  material.popularGrades.map((gName) => (
                    <button
                      key={gName}
                      onClick={() =>
                        onOpenEnquiry(
                          `${material.name} ${type.name} Grade ${gName}`,
                          material.name
                        )
                      }
                      className="group p-3.5 bg-[#F8F5F1] hover:bg-[#F4E5DC] border border-[#D9D9D6] hover:border-[#A94728] rounded-lg text-left transition-all cursor-pointer"
                    >
                      <div className="text-base font-bold text-[#202427] group-hover:text-[#A94728]">
                        Grade {gName}
                      </div>
                      <div className="text-xs font-mono text-[#A94728]">
                        RFQ Available
                      </div>
                    </button>
                  ))
                )}
              </div>
            </section>

            {/* 2. Technical Characteristics & Engineering Design (TYPE PROFILE) */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
              <div className="pb-4 mb-6 border-b border-[#D9D9D6]">
                <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                  ENGINEERING CHARACTERISTICS
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                  Design & Connection Profile of {type.name}
                </h2>
              </div>

              <div className="text-base sm:text-lg text-[#202427]/80 leading-relaxed space-y-4">
                <p>
                  The <strong className="text-[#202427]">{material.name} {type.name}</strong> is forged and machined in strict conformity with international dimensional standards such as ASME B16.5, ASME B16.47, and DIN specifications. Its geometry is designed to distribute joint stresses uniformly while providing leak-tight integrity across wide thermal and pressure cycles.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F8F5F1] rounded-lg border border-[#D9D9D6]">
                    <div className="text-xs sm:text-sm font-mono font-bold text-[#A94728] uppercase mb-1">
                      Facing Options
                    </div>
                    <div className="text-sm text-[#202427]/85">
                      Raised Face (RF) with serrated spiral phonographic finish (125–250 AARH), Flat Face (FF), Ring Type Joint (RTJ) for ASME Class 600+ service, Male & Female, Tongue & Groove.
                    </div>
                  </div>

                  <div className="p-4 bg-[#F8F5F1] rounded-lg border border-[#D9D9D6]">
                    <div className="text-xs sm:text-sm font-mono font-bold text-[#A94728] uppercase mb-1">
                      Weld & Connection Prep
                    </div>
                    <div className="text-sm text-[#202427]/85">
                      Beveled ends per ASME B16.25 for full-penetration butt welding, precision socket bore with minimum 1/16" expansion gap, or NPT / BSPT threaded connections.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Applicable Standards & Dimension Range (SPECIFICATIONS THIRD) */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
              <div className="pb-4 mb-6 border-b border-[#D9D9D6]">
                <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                  MANUFACTURING STANDARDS
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                  Applicable Specifications & Pressure Ratings
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#202427] text-white">
                      <th className="py-3 px-4 font-bold rounded-l">Parameter</th>
                      <th className="py-3 px-4 font-bold rounded-r">Specification Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9D9D6]">
                    <tr className="bg-[#F8F5F1]/50">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Dimensional Standards</td>
                      <td className="py-3 px-4 text-[#202427] font-mono">
                        {type.standards ? type.standards.join(', ') : 'ASME B16.5, ASME B16.47, EN 1092-1'}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Nominal Size Range</td>
                      <td className="py-3 px-4 text-[#202427] font-mono">
                        {type.sizeRange || '1/2" NB through 48" NB'}
                      </td>
                    </tr>
                    <tr className="bg-[#F8F5F1]/50">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Pressure Classes</td>
                      <td className="py-3 px-4 text-[#A94728] font-bold font-mono">
                        {type.pressureClass || 'Class 150, 300, 600, 900, 1500, 2500 LBS'}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Testing & Quality</td>
                      <td className="py-3 px-4 text-[#202427] font-mono">
                        Hydrostatic Test, PMI Spectro Test, Ultrasonic (UT), Radiography (RT) on request
                      </td>
                    </tr>
                    <tr className="bg-[#F8F5F1]/50">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Certification</td>
                      <td className="py-3 px-4 text-[#202427] font-mono">
                        EN 10204 3.1 Mill Test Certificate with Heat Number & Chemical Analysis
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Industrial Applications */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
              <div className="pb-4 mb-6 border-b border-[#D9D9D6]">
                <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                  APPLICATION PROFILES
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                  Field Applications for {type.name}
                </h2>
              </div>

              <div className="space-y-3">
                {type.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#F8F5F1] rounded-lg border border-[#D9D9D6]">
                    <CheckCircle2 className="w-5 h-5 text-[#A94728] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#202427] font-medium leading-relaxed">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Types in the same Product Category */}
            {relatedTypes.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D9D9D6]">
                  <div>
                    <div className="tech-label text-xs font-bold text-[#A94728] uppercase">
                      OTHER CONFIGURATIONS
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#202427]">
                      Related {product.name} Configurations in {material.name}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-[#A94728] font-bold">
                    {relatedTypes.length} Available
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {relatedTypes.slice(0, 6).map((relType) => (
                    <div
                      key={relType.id}
                      onClick={() =>
                        onNavigate(
                          'product-type-detail',
                          null,
                          `/products/${product.slug}/${material.slug}/types/${relType.slug}`
                        )
                      }
                      className="group p-3 bg-[#F8F5F1] hover:bg-[#F4E5DC] border border-[#D9D9D6] hover:border-[#A94728] rounded-lg transition-all cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-xs font-bold text-[#202427] group-hover:text-[#A94728] transition-colors truncate">
                        {relType.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A94728] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right 4 Cols: Fixed Sticky Sidebar */}
          <div className="lg:col-span-4">
            <aside className="space-y-6 lg:sticky lg:top-28 max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto sidebar-sticky-scroll">
              {/* Direct Quote Box */}
              <div className="bg-[#202427] text-white p-6 sm:p-7 rounded-xl border border-white/10 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A94728] font-bold uppercase mb-2">
                <Zap className="w-4 h-4 text-[#A94728]" />
                <span>COMMERCIAL QUOTE DESK</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Order {material.name} {type.name}
              </h3>

              <p className="text-sm text-[#D9D9D6] leading-relaxed mb-5">
                Fast quotation for standard ASME/DIN dimensions or custom CNC machined facing requirements.
              </p>

              <div className="space-y-2 mb-6 text-xs sm:text-sm font-mono">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex justify-between items-center">
                  <span className="text-white/60">Product:</span>
                  <span className="font-bold text-white">{product.name}</span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex justify-between items-center">
                  <span className="text-white/60">Material:</span>
                  <span className="font-bold text-white">{material.name}</span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex justify-between items-center">
                  <span className="text-white/60">Configuration:</span>
                  <span className="font-bold text-[#A94728]">{type.name}</span>
                </div>
              </div>

              <button
                onClick={() =>
                  onOpenEnquiry(
                    `${material.name} ${type.name}`,
                    material.name
                  )
                }
                className="btn-wave w-full bg-[#A94728] hover:bg-[#8F371B] border-2 border-[#A94728] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 rounded-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="mt-4 pt-3 border-t border-white/10 text-center">
                <span className="text-xs text-white/60 font-mono">
                  Usually quoted within 2 hours • Mill MTC Included
                </span>
              </div>
            </div>

            {/* MATERIAL SWITCHER SECTION */}
            {/* Requirement: User can switch materials while retaining the selected type! */}
            <div id="material-switcher" className="bg-white p-6 rounded-xl border border-[#D9D9D6] shadow-xs scroll-mt-28">
              <div className="pb-3 mb-4 border-b border-[#D9D9D6]">
                <div className="tech-label text-xs font-bold text-[#A94728] uppercase">
                  MATERIAL CONTEXT
                </div>
                <h4 className="text-base font-extrabold text-[#202427]">
                  View this {type.name} in Another Material
                </h4>
                <p className="text-xs sm:text-sm text-[#202427]/75 mt-1">
                  Retain the {type.name} specification and explore different alloy families:
                </p>
              </div>

              <div className="space-y-1.5">
                {applicableMaterials.map((mat) => {
                  const isCurrent = mat.slug === material.slug;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => {
                        if (!isCurrent) {
                          onNavigate(
                            'product-type-detail',
                            null,
                            `/products/${product.slug}/${mat.slug}/types/${type.slug}`
                          );
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all text-left cursor-pointer ${
                        isCurrent
                          ? 'bg-[#A94728] text-white shadow-xs font-extrabold'
                          : 'bg-[#F8F5F1] hover:bg-[#F4E5DC] text-[#202427] hover:text-[#A94728] border border-[#D9D9D6] hover:border-[#A94728]'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isCurrent ? 'bg-white' : 'bg-[#A94728]'
                          }`}
                        />
                        <span className="truncate">{mat.name}</span>
                      </span>

                      {isCurrent ? (
                        <span className="text-xs font-mono font-bold text-white">● CURRENT</span>
                      ) : (
                        <span className="text-xs font-mono text-[#A94728] font-bold">SWITCH →</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Technical Notice */}
            <div className="p-4 bg-[#F8F5F1] rounded-xl border border-[#D9D9D6] text-xs text-[#202427]/70 space-y-2">
              <div className="flex items-center gap-2 text-[#A94728] font-bold font-mono">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>FLANGE & FASTENER STANDARDS</span>
              </div>
              <p className="leading-relaxed">
                ASME B16.5 governs flange pressure-temperature ratings up to 24" NB; ASME B16.47 Series A & B apply for 26" to 60" NB. Fasteners conform to ASTM A193/A194 or ISO 3506. Verify your engineering pipeline schedules prior to fabrication.
              </p>
            </div>
          </aside>
        </div>
      </div>
      </div>
    </div>
  );
}
