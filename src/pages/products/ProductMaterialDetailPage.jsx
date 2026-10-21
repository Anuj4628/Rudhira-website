import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  FileText,
  Phone,
  HelpCircle,
  Zap,
  Check
} from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import {
  getProductBySlug,
  getMaterialBySlug,
  getGradesForMaterial,
  getTypesForProduct,
  getMaterialsForProduct,
  getProductMaterialImage,
  getProductMaterialSeoSlug,
  getProductSeoSlug,
  PRODUCT_CATEGORIES,
  MATERIAL_CATEGORIES
} from '../../data/productsData';
import { COMPANY_DETAILS } from '../../data/industrialData';

// Map recognized product forms for non-types categories
const PRODUCT_FORMS_MAP = {
  'pipes-tubes': [
    { title: 'Seamless Pipes', desc: 'Cold drawn & hot extruded for high-pressure fluid lines' },
    { title: 'Welded / ERW Pipes', desc: 'Electric resistance welded for transmission & structural duty' },
    { title: 'Heat Exchanger Tubes', desc: 'Bright annealed seamless tubes with tight dimensional tolerances' },
    { title: 'Instrumentation Tubing', desc: 'Clean bore tubing for hydraulic & pneumatic sensing lines' },
    { title: 'Hollow Sections', desc: 'Square & rectangular structural box profiles' }
  ],
  'butt-weld-fittings': [
    { title: '90° & 45° Elbows', desc: 'Long and short radius bends with beveled ends' },
    { title: 'Equal & Reducing Tees', desc: 'Branch outlets maintaining laminar fluid flow' },
    { title: 'Concentric & Eccentric Reducers', desc: 'Diameter transitions avoiding air pockets' },
    { title: 'End Caps & Stub Ends', desc: 'Dead-end closures and lap-joint flange stub ends' }
  ],
  'sheets-plates': [
    { title: 'Hot Rolled Plates (HR)', desc: 'Heavy industrial thickness (3mm to 100mm) for vessels & tanks' },
    { title: 'Cold Rolled Sheets (CR)', desc: 'Precision 2B & BA finish (0.5mm to 3mm) for fabrication' },
    { title: 'Chequered Plates', desc: 'Diamond & tear pattern anti-slip flooring plates' },
    { title: 'Polished Sheets', desc: 'No. 4 Hairline, Scotch Brite & No. 8 Mirror architectural sheets' }
  ],
  'rods-bars': [
    { title: 'Bright Round Bars', desc: 'Centerless ground & peeled h9/h11 finish for CNC machining' },
    { title: 'Hexagonal Bars', desc: 'Cold drawn precision hex profiles for fastener manufacture' },
    { title: 'Square Bars', desc: 'Sharp corner cold drawn and hot rolled square profiles' },
    { title: 'Forged Shafts', desc: 'Step-forged and rough-turned shafts for rotating equipment' }
  ],
  'coil': [
    { title: 'Master Coils', desc: 'Full width continuous rolls (1000mm, 1250mm, 1500mm)' },
    { title: 'Slit Coils', desc: 'Custom narrow slit coils with deburred edge' },
    { title: 'Embossed / Textured Coils', desc: 'Surface-patterned decorative and architectural rolls' }
  ],
  'flat-bars': [
    { title: 'Hot Rolled Flat Bars', desc: 'Annealed and pickled (HRAP) for structural fabrication' },
    { title: 'Cold Drawn Flat Bars', desc: 'Sharp 90-degree corners with bright smooth finish' },
    { title: 'Slit Edge Flats', desc: 'Precision sheared from certified prime plates' }
  ],
  'patapatti-strips': [
    { title: 'Cold Rolled Patapatti', desc: 'High-tensile narrow strips for stamping and hardware' },
    { title: 'Shim Strips', desc: 'Ultra-thin precision thickness for alignment shims' },
    { title: 'Deburred Edge Strips', desc: 'Smooth rounded edges for safe manual assembly' }
  ],
  'circle': [
    { title: 'Cold Rolled Circles', desc: 'Deep drawing quality for vessel ends and cookware' },
    { title: 'Hot Rolled Discs', desc: 'Heavy gauge blanks for flange and blind forging stock' },
    { title: 'Waterjet / Plasma Cut Blanks', desc: 'Zero heat-affected zone custom diameter circles' }
  ],
  'ring': [
    { title: 'Seamless Rolled Forged Rings', desc: 'Continuous grain flow for slewing bearings and gears' },
    { title: 'Rough Machined Rings', desc: 'Turned blanks with machining allowance' },
    { title: 'Finish Machined Rings', desc: 'Precision CNC profiled to custom engineering prints' }
  ],
  'dairy-pharma-fittings': [
    { title: 'Tri-Clamp Ferrules', desc: 'Sanitary mirror finish with food-grade silicone gaskets' },
    { title: 'SMS / DIN Sanitary Unions', desc: 'Hygienic threaded connections for dairy processing' },
    { title: 'Sanitary Bends & Tees', desc: 'Electro-polished Ra < 0.4 µm crevice-free fittings' }
  ],
  'ferrule-fittings': [
    { title: 'Double Ferrule Male Connectors', desc: 'Twin compression grip on instrument tubing' },
    { title: 'Union Elbows & Tees', desc: 'Vibration-resistant high-pressure instrument joints' },
    { title: 'Bulkhead & Gauge Adapters', desc: 'Panel-mounted gas & fluid chromatography fittings' }
  ],
  'forged-fittings': [
    { title: 'Socket Weld Fittings', desc: 'Class 3000/6000 elbows, couplings, and unions' },
    { title: 'Threaded NPT / BSP Fittings', desc: 'Forged high-pressure screed pipe fittings' },
    { title: 'Branch Outlets (Weldolets, Sockolets)', desc: 'Integrally reinforced branch connections' }
  ],
  'hose-pipes': [
    { title: 'Single Wire Braid Hoses', desc: 'Flexible stainless steel core with outer protective braid' },
    { title: 'Double Wire Braid Hoses', desc: 'Heavy duty pressure rating up to 250 Bar' },
    { title: 'Flanged & Camlock Assemblies', desc: 'Pre-welded end fittings for immediate plant install' }
  ],
  'perforated-sheets': [
    { title: 'Round Hole Perforated', desc: 'Staggered and inline round apertures for filtration' },
    { title: 'Square Hole Perforated', desc: 'High open-area ventilation and architectural screens' },
    { title: 'Slotted Aperture Sheets', desc: 'Grain sorting and centrifuge dewatering screens' }
  ],
  'wire-mesh': [
    { title: 'Plain Weave Wire Cloth', desc: 'Square mesh with consistent aperture geometry' },
    { title: 'Twill Weave Wire Cloth', desc: 'Heavier wire diameters for high-pressure filtration' },
    { title: 'Dutch Weave Filter Mesh', desc: 'Dense micron-rated weave for liquid and polymer filters' }
  ]
};

export default function ProductMaterialDetailPage({
  productSlug,
  materialSlug,
  onNavigate,
  onOpenEnquiry
}) {
  const product = getProductBySlug(productSlug) || PRODUCT_CATEGORIES[0];
  const material = getMaterialBySlug(materialSlug) || MATERIAL_CATEGORIES[0];
  const applicableMaterials = getMaterialsForProduct(product.slug);
  const grades = getGradesForMaterial(material.slug);
  const types = getTypesForProduct(product.slug, material.slug);
  const productForms = PRODUCT_FORMS_MAP[product.slug] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productSlug, materialSlug]);

  return (
    <div className="pt-[88px] sm:pt-[96px] lg:pt-[104px] bg-[#F8F5F1] min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products', path: '/products', page: 'products-landing' },
          { label: product.name, href: `/products/${getProductSeoSlug(product.slug)}`, path: `/products/${getProductSeoSlug(product.slug)}`, page: 'product-category' },
          { label: material.name, href: `/products/${getProductSeoSlug(product.slug)}/${getProductMaterialSeoSlug(product.slug, material.slug)}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Main 2-Column Responsive Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* ========================================================
              LEFT SIDEBAR: MATERIALS NAVIGATION & CONTACT DESK
              ======================================================== */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-6 lg:sticky lg:top-28 max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto sidebar-sticky-scroll">
            {/* Card 1: Materials Navigation Menu */}
            <div className="bg-white rounded-xl border border-[#D9D9D6] shadow-xs overflow-hidden">
              <div className="p-4 bg-[#202427] text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#A94728] uppercase tracking-wider">
                    MATERIALS / METALS
                  </div>
                  <h3 className="text-base font-extrabold text-white">
                    Select Material
                  </h3>
                </div>
                <span className="text-xs font-mono bg-white/10 text-white px-2.5 py-0.5 rounded font-bold">
                  {applicableMaterials.length} Available
                </span>
              </div>

              {/* Vertical List of Materials for this Product */}
              <div className="p-2 space-y-1">
                {applicableMaterials.map((mat) => {
                  const isActive = mat.slug === material.slug;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => {
                        if (!isActive) {
                          onNavigate(
                            'product-material',
                            null,
                            `/products/${getProductSeoSlug(product.slug)}/${getProductMaterialSeoSlug(product.slug, mat.slug)}`
                          );
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-[#A94728] text-white shadow-xs font-extrabold'
                          : 'bg-white hover:bg-[#F4E5DC]/60 text-[#202427] hover:text-[#A94728] border border-transparent hover:border-[#A94728]/20'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isActive ? 'bg-white' : 'bg-[#A94728]'
                          }`}
                        />
                        <span className="truncate">{mat.name}</span>
                      </span>

                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive ? 'text-white' : 'text-[#A94728]'
                        }`}
                      >
                        {isActive ? '● ACTIVE' : '→'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Card 2: Quick Quotation & Direct Contact Desk */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#D9D9D6] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#A94728] uppercase">
                <Zap className="w-3.5 h-3.5 text-[#A94728]" />
                <span>QUICK QUOTATION DESK</span>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-[#202427]">
                  Need {material.name} {product.name}?
                </h4>
                <p className="text-xs sm:text-sm text-[#202427]/75 mt-1 leading-relaxed">
                  Call our commercial sales desk directly for immediate stock availability and delivery timelines.
                </p>
              </div>

              {/* Contacts */}
              <div className="space-y-2.5 pt-1 border-t border-[#D9D9D6]">
                {COMPANY_DETAILS.contacts.map((c) => (
                  <div key={c.name} className="flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <div className="font-bold text-[#202427]">{c.name}</div>
                      <a href={`tel:${c.cleanPhone}`} className="text-[#A94728] font-mono font-bold">
                        {c.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${c.cleanPhone}`}
                        className="p-2 bg-[#F8F5F1] hover:bg-[#A94728] hover:text-white rounded text-[#202427] transition-colors"
                        title={`Call ${c.name}`}
                      >
                        <FaPhone className="w-3 h-3" />
                      </a>
                      <a
                        href={`https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(
                          `Hello Rudhira Metal, I require a quote for ${material.name} ${product.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded transition-colors"
                        title={`WhatsApp ${c.name}`}
                      >
                        <FaWhatsapp className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  onOpenEnquiry(`${material.name} ${product.name}`, material.name)
                }
                className="btn-wave w-full bg-[#A94728] hover:bg-[#8F371B] border-2 border-[#A94728] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3 rounded shadow-sm transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Request Price & Delivery</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Quality Standards & Testing */}
            <div className="p-5 bg-[#F8F5F1] rounded-xl border border-[#D9D9D6] space-y-2.5 text-xs sm:text-sm text-[#202427]">
              <div className="flex items-center gap-1.5 font-bold font-mono text-[#A94728] uppercase text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>CERTIFIED ASSURANCE</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#202427]/85">
                <li className="flex items-center gap-2">
                  <span className="text-[#A94728] font-bold">✓</span>
                  <span>EN 10204 3.1 Mill Test Certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A94728] font-bold">✓</span>
                  <span>100% Positive Material Identification (PMI)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A94728] font-bold">✓</span>
                  <span>Hydrostatic & Ultrasonic Testing</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* ========================================================
              RIGHT MAIN CONTENT: PRODUCT INFO, SPECS, FORMS & GRADES
              ======================================================== */}
          <main className="flex-1 min-w-0 space-y-8">
            {/* 1. Main Product & Material Hero Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#A94728]/10 text-[#A94728] border border-[#A94728]/25 uppercase">
                  {material.name}
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#202427] text-white uppercase">
                  {product.division} Division
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-mono text-[#202427]/70 bg-[#F8F5F1] border border-[#D9D9D6]">
                  ASTM / ASME / DIN Compliant
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202427] tracking-tight mb-4">
                {material.name} {product.name}
              </h1>

              {/* 2-Column Hero Grid: Description + Industrial Image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
                {/* Left Description & Highlights */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-base sm:text-lg text-[#202427]/85 leading-relaxed">
                    Precision-engineered <strong className="text-[#202427]">{material.name.toLowerCase()} {product.name.toLowerCase()}</strong> manufactured and supplied in accordance with international ASTM, ASME, DIN, and ISO standards. Designed for demanding applications requiring superior metallurgical integrity, corrosion resistance, and verified dimensional tolerances.
                  </p>

                  <div className="p-4 bg-[#F8F5F1] rounded-lg border border-[#D9D9D6] space-y-2">
                    <div className="text-xs font-mono font-bold text-[#A94728] uppercase">
                      KEY METALLURGICAL PERFORMANCE:
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#202427]/85">
                      {material.keyCharacteristics.slice(0, 3).map((char) => (
                        <li key={char} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#A94728] flex-shrink-0 mt-0.5" />
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() =>
                        onOpenEnquiry(
                          `${material.name} ${product.name}`,
                          material.name
                        )
                      }
                      className="btn-wave inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#8F371B] border-2 border-[#A94728] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 rounded shadow-sm transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Request Quote for {material.shortName} {product.name}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href="#available-grades-section"
                      className="inline-flex items-center gap-1.5 bg-[#F8F5F1] hover:bg-[#F4E5DC] text-[#202427] text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-3 rounded border border-[#D9D9D6] transition-colors cursor-pointer"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#A94728]" />
                      <span>Certified Grades ({grades.length}) ↓</span>
                    </a>

                    {types.length > 0 && (
                      <a
                        href="#product-types-section"
                        className="inline-flex items-center gap-1.5 bg-[#F8F5F1] hover:bg-[#F4E5DC] text-[#202427] text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-3 rounded border border-[#D9D9D6] transition-colors cursor-pointer"
                      >
                        <Layers className="w-4 h-4 text-[#A94728]" />
                        <span>Types & Profiles ({types.length}) ↓</span>
                      </a>
                    )}

                    <a
                      href="#specifications-section"
                      className="inline-flex items-center gap-1.5 bg-[#F8F5F1] hover:bg-[#F4E5DC] text-[#202427] text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-3 rounded border border-[#D9D9D6] transition-colors cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-[#A94728]" />
                      <span>Specifications Matrix ↓</span>
                    </a>
                  </div>
                </div>

                {/* Right Product Image */}
                <div className="md:col-span-5">
                  <div className="relative rounded-lg overflow-hidden border-2 border-[#D9D9D6] shadow-sm bg-black/5 group">
                    <img
                      src={getProductMaterialImage(product.slug, material.slug) || material.image}
                      alt={`${material.name} ${product.name}`}
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-[11px] font-mono">
                      <span className="font-bold text-[#F4E5DC]">{material.name}</span> // Prime Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                1. METALLURGICAL GRADES DIRECTORY (GRADES FIRST)
                ======================================================== */}
            <div
              id="available-grades-section"
              className="bg-white p-6 sm:p-8 rounded-xl border-2 border-[#D9D9D6] shadow-xs scroll-mt-28"
            >
              <div className="pb-3 mb-6 border-b border-[#D9D9D6]">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#A94728]" />
                  <span className="text-xs font-mono font-bold text-[#A94728] uppercase tracking-wider">
                    STEP 01 // METALLURGICAL GRADES DIRECTORY
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                    Available Grades — {material.name} {product.name}
                  </h2>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#A94728] bg-[#F8F5F1] px-3 py-1 rounded border border-[#D9D9D6]">
                    {grades.length} Certified Grades
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#202427]/75 mt-1 leading-relaxed">
                  Every grade below is individually certified. Click anywhere on a grade card to open its dedicated specification detail page for {product.name.toLowerCase()}:
                </p>
              </div>

              {/* Grid of Clickable Grade Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {grades.map((grade) => (
                  <div
                    key={grade.id}
                    onClick={() =>
                      onNavigate(
                        'grade-detail',
                        null,
                        `/products/${getProductSeoSlug(product.slug)}/${getProductMaterialSeoSlug(product.slug, material.slug)}/${grade.slug}`
                      )
                    }
                    className="group p-5 bg-[#F8F5F1] hover:bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl shadow-xs hover:shadow-industrial transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Grade Name + Arrow */}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-lg font-bold text-[#202427] group-hover:text-[#A94728] transition-colors">
                          {grade.name.startsWith('Grade') ? grade.name : `Grade ${grade.name}`}
                        </span>
                        <span className="text-sm font-mono text-[#A94728] font-bold group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>

                      {/* UNS / Werkstoff designation */}
                      <div className="text-xs font-mono text-[#202427]/60 mb-2 truncate">
                        {grade.unNumber}
                      </div>

                      {/* Technical Overview snippet */}
                      <p className="text-xs sm:text-sm text-[#202427]/75 line-clamp-2 leading-relaxed mb-3">
                        {grade.overview}
                      </p>
                    </div>

                    {/* Card Footer: Clear action prompt */}
                    <div className="pt-2.5 border-t border-[#D9D9D6]/60 flex items-center justify-between text-xs font-mono font-bold text-[#A94728]">
                      <span>VIEW {product.name.toUpperCase()} SPEC</span>
                      <span>›</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========================================================
                2. DEDICATED TYPES ARCHITECTURE (TYPES SECOND)
                ======================================================== */}
            {types.length > 0 && (
              <div
                id="product-types-section"
                className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs scroll-mt-28"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D9D9D6]">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                      <span className="text-xs font-mono font-bold text-[#A94728] uppercase">
                        STEP 02 // CONFIGURATIONS & TYPES ARCHITECTURE
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                      {material.name} {product.name} Types
                    </h2>
                    <p className="text-sm sm:text-base text-[#202427]/75 mt-0.5">
                      Explore individual design configurations, face connection types, and standard pressure classes in {material.name}:
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#A94728] bg-[#F8F5F1] px-3 py-1 rounded border border-[#D9D9D6]">
                    {types.length} Types
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {types.map((type) => {
                    return (
                      <div
                        key={type.id}
                        onClick={() =>
                          onNavigate(
                            'product-type-detail',
                            null,
                            `/products/${getProductSeoSlug(product.slug)}/${getProductMaterialSeoSlug(product.slug, material.slug)}/types/${type.slug}`
                          )
                        }
                        className="group bg-[#F8F5F1] hover:bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl overflow-hidden shadow-xs hover:shadow-industrial transition-all duration-300 flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          {/* Moderate & consistent image area */}
                          <div className="relative h-44 sm:h-48 overflow-hidden bg-black/5">
                            <img
                              src={type.image}
                              alt={`${material.name} ${type.name}`}
                              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-2.5 right-2.5 bg-[#202427]/90 text-white text-xs font-mono px-2.5 py-1 rounded font-bold border border-white/10 backdrop-blur-xs">
                              {type.standards ? type.standards[0] : 'STANDARD'}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                          </div>

                          <div className="p-5">
                            <h3 className="text-lg sm:text-xl font-bold text-[#202427] group-hover:text-[#A94728] transition-colors mb-1.5">
                              {type.name}
                            </h3>

                            <p className="text-sm text-[#202427]/80 line-clamp-2 leading-relaxed mb-3">
                              {type.shortDesc}
                            </p>

                            {type.pressureClasses && (
                              <div className="text-xs sm:text-sm font-mono text-[#A94728] font-bold truncate">
                                {type.pressureClasses}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="p-5 pt-0 border-t border-[#D9D9D6]/60">
                          <div className="w-full flex items-center justify-between text-xs sm:text-sm font-mono font-bold text-[#A94728] group-hover:text-[#7E321F] py-1">
                            <span>EXPLORE {material.shortName.toUpperCase()} SPEC</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Available Product Forms (for non-types categories) */}
            {productForms.length > 0 && !types.length && (
              <div
                id="product-types-section"
                className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs scroll-mt-28"
              >
                <div className="pb-3 mb-4 border-b border-[#D9D9D6]">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                    <span className="text-xs font-mono font-bold text-[#A94728] uppercase">
                      STEP 02 // AVAILABLE CONFIGURATIONS & FORMS
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                    Product Forms Available in {material.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {productForms.map((form, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#F8F5F1] rounded-lg border border-[#D9D9D6] hover:border-[#A94728] transition-all"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#202427] mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#A94728]" />
                        <span>{form.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#202427]/75 leading-relaxed">
                        {form.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ========================================================
                3. TECHNICAL SPECIFICATIONS & DIMENSION RANGE (SPECIFICATION THIRD)
                ======================================================== */}
            <div
              id="specifications-section"
              className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs scroll-mt-28"
            >
              <div className="pb-3 mb-4 border-b border-[#D9D9D6]">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                  <span className="text-xs font-mono font-bold text-[#A94728] uppercase">
                    STEP 03 // VERIFIED DATA MATRIX & TECHNICAL SPECIFICATIONS
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                  Technical Specifications & Dimensional Limits
                </h2>
                <p className="text-sm sm:text-base text-[#202427]/75 mt-0.5">
                  Engineering limits, governing standards, testing criteria, and manufacturing conditions for {material.name} {product.name}:
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#202427] text-white">
                      <th className="py-3 px-4 font-bold rounded-l">Parameter</th>
                      <th className="py-3 px-4 font-bold rounded-r">Specification Range for {product.name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9D9D6]">
                    <tr className="bg-[#F8F5F1]/50">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Governing Standards</td>
                      <td className="py-3 px-4 text-[#A94728] font-mono font-bold">
                        {product.standards ? product.standards.join(', ') : 'ASTM / ASME / DIN'}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Size / Dimension Range</td>
                      <td className="py-3 px-4 text-[#202427] font-mono">
                        {product.sizeRange || 'Standard Commercial and Custom Diameters'}
                      </td>
                    </tr>
                    <tr className="bg-[#F8F5F1]/50">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Schedule / Pressure Rating</td>
                      <td className="py-3 px-4 text-[#202427] font-mono">
                        {product.schedules || 'Standard, Heavy & Custom Schedules'}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Supply Conditions</td>
                      <td className="py-3 px-4 text-[#202427] font-mono">
                        Seamless, Welded (ERW/EFW), Forged, Hot Rolled, Cold Drawn
                      </td>
                    </tr>
                    <tr className="bg-[#F8F5F1]/50">
                      <td className="py-3 px-4 font-bold text-[#202427] font-mono">Testing & Certification</td>
                      <td className="py-3 px-4 text-[#202427] font-mono">
                        100% PMI Spectro, Hydrostatic, Ultrasonic, Radiography, EN 10204 3.1 MTC
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
