import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  FileText,
  AlertCircle,
  Zap
} from 'lucide-react';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import {
  getMaterialBySlug,
  getGradesForMaterial,
  getProductMaterialImage,
  PRODUCT_CATEGORIES,
  MATERIAL_CATEGORIES
} from '../../data/productsData';

export default function MaterialFamilyPage({ materialSlug, onNavigate, onOpenEnquiry }) {
  const material = getMaterialBySlug(materialSlug) || MATERIAL_CATEGORIES[0];
  const grades = getGradesForMaterial(material.slug);

  // Filter products that offer this material
  const availableProducts = PRODUCT_CATEGORIES.filter((p) =>
    p.applicableMaterials.includes(material.slug)
  );

  const otherMaterials = MATERIAL_CATEGORIES.filter((m) => m.slug !== material.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [materialSlug]);

  return (
    <div className="pt-[88px] sm:pt-[96px] lg:pt-[104px] bg-[#F8F5F1] min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Materials', href: '/materials', path: '/materials', page: 'materials-landing' },
          { label: material.name, href: `/materials/${material.slug}` }
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
                <span className="tech-label text-xs font-bold text-[#F4E5DC] tracking-widest uppercase">
                  METALLURGICAL ALLOY FAMILY // {material.shortName.toUpperCase()}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                {material.name}
              </h1>

              <p className="text-lg sm:text-xl text-[#E7EEF2] leading-relaxed mb-6 max-w-2xl">
                {material.overview}
              </p>

              {/* Key Characteristics */}
              <div className="p-4 sm:p-5 bg-white/5 rounded-lg border border-white/10 mb-8 max-w-xl">
                <div className="text-xs sm:text-sm font-mono font-bold text-[#A94728] uppercase mb-2">
                  METALLURGICAL PERFORMANCE PROFILE:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#D9D9D6]">
                  {material.keyCharacteristics.map((char) => (
                    <li key={char} className="flex items-start gap-2">
                      <span className="text-[#A94728] font-bold">›</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenEnquiry(`${material.name} Requirements`, material.name)}
                  className="btn-wave inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#8F371B] border-2 border-[#A94728] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Request Quote for {material.shortName}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#product-forms"
                  className="btn-wave inline-flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 hover:border-white text-white text-sm sm:text-base font-bold uppercase tracking-wider px-5 py-3.5 rounded-sm transition-all cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-white" />
                  <span>View Available Product Forms</span>
                </a>
              </div>
            </div>

            {/* Right Material Showcase Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl bg-black/40 group">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#A94728] font-bold">
                    CERTIFIED ALLOY CLASSIFICATION
                  </div>
                  <div className="text-xl font-extrabold truncate">
                    {material.name}
                  </div>
                  <div className="text-xs text-white/80 font-mono mt-0.5">
                    {material.tagline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Grades in this Material Family */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b border-[#D9D9D6]">
          <div>
            <span className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
              RESEARCHED ALLOY SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202427]">
              Available Grades in {material.name}
            </h2>
          </div>

          <span className="text-xs sm:text-sm font-mono text-[#202427]/70 bg-white px-3.5 py-1 rounded border border-[#D9D9D6]">
            Select a grade below or browse product forms
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {grades.length > 0 ? (
            grades.map((grade) => (
              <div
                key={grade.id}
                onClick={() =>
                  onNavigate(
                    'grade-detail',
                    null,
                    `/products/flanges/${material.slug}/${grade.slug}`
                  )
                }
                className="group p-5 bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl shadow-xs hover:shadow-industrial transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-[#202427] group-hover:text-[#A94728] transition-colors">
                      {grade.name}
                    </span>
                    <span className="text-xs font-mono text-[#A94728] font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#202427]/60 mb-2 truncate">
                    {grade.unNumber}
                  </div>

                  <p className="text-xs sm:text-sm text-[#202427]/75 line-clamp-3 leading-relaxed mb-4">
                    {grade.overview}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D9D9D6]/60 flex items-center justify-between text-xs font-mono text-[#A94728] font-bold">
                  <span>VIEW TECHNICAL DATASHEET</span>
                  <span>›</span>
                </div>
              </div>
            ))
          ) : (
            material.popularGrades.map((gName) => (
              <div
                key={gName}
                onClick={() =>
                  onOpenEnquiry(
                    `${material.name} Grade ${gName} Requirement`,
                    material.name
                  )
                }
                className="group p-5 bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl shadow-xs hover:shadow-industrial transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-[#202427] group-hover:text-[#A94728]">
                      Grade {gName}
                    </span>
                    <span className="text-xs font-mono text-[#A94728] font-bold">RFQ →</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#202427]/70 leading-relaxed mb-4">
                    Standard commercial and high-integrity specification for {material.name.toLowerCase()} components.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D9D9D6]/60 text-xs font-mono text-[#A94728] font-bold">
                  REQUEST SPEC & PRICING
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Available Product Forms in this Material Family */}
      <section id="product-forms" className="bg-white py-16 sm:py-20 border-t border-b border-[#D9D9D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
              PRODUCT ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202427] tracking-tight">
              Product Forms Available in {material.name}
            </h2>
            <p className="text-base sm:text-lg text-[#202427]/75 mt-2">
              Select a product form below to view dedicated configurations, pressure classes, and dimensions for {material.name}:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {availableProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() =>
                  onNavigate(
                    'product-material',
                    null,
                    `/products/${prod.slug}/${material.slug}`
                  )
                }
                className="group bg-[#F8F5F1] hover:bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl overflow-hidden shadow-xs hover:shadow-industrial transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-black/5">
                    <img
                      src={getProductMaterialImage(prod.slug, material.slug) || prod.defaultImage}
                      alt={`${material.name} ${prod.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#202427]/90 text-white text-xs font-mono px-2.5 py-0.5 rounded font-bold">
                      {prod.division}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-[#202427] group-hover:text-[#A94728] transition-colors">
                        {material.name} {prod.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-[#A94728] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>

                    <p className="text-xs sm:text-sm text-[#202427]/75 line-clamp-2 leading-relaxed">
                      {prod.shortDesc || prod.description}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-white/80 border-t border-[#D9D9D6] flex items-center justify-between text-xs font-mono font-bold text-[#A94728]">
                  <span>{prod.hasTypes ? 'SPECIFIC TYPES & GRADES' : 'AVAILABLE GRADES'}</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Material Families */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="pb-4 mb-8 border-b border-[#D9D9D6]">
          <div className="tech-label text-xs font-bold text-[#A94728] uppercase">
            ALTERNATIVE METALLURGY
          </div>
          <h2 className="text-2xl font-extrabold text-[#202427]">
            Other Material Families
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {otherMaterials.map((otherMat) => (
            <button
              key={otherMat.id}
              onClick={() =>
                onNavigate('material-family', null, `/materials/${otherMat.slug}`)
              }
              className="p-3 bg-white hover:bg-[#F4E5DC] border border-[#D9D9D6] hover:border-[#A94728] rounded-lg text-center transition-all cursor-pointer flex flex-col items-center justify-between"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-black/5 mb-2 border border-[#D9D9D6]">
                <img
                  src={otherMat.image}
                  alt={otherMat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-bold text-[#202427] truncate w-full">
                {otherMat.shortName}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
