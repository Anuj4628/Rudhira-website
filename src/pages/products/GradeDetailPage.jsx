import React, { useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  FileText,
  Zap
} from 'lucide-react';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import {
  getProductBySlug,
  getMaterialBySlug,
  getGradeBySlug,
  getGradesForMaterial,
  getTypesForProduct,
  PRODUCT_CATEGORIES,
  MATERIAL_CATEGORIES
} from '../../data/productsData';

export default function GradeDetailPage({
  productSlug,
  materialSlug,
  gradeSlug,
  onNavigate,
  onOpenEnquiry
}) {
  const product = getProductBySlug(productSlug) || PRODUCT_CATEGORIES[0];
  const material = getMaterialBySlug(materialSlug) || MATERIAL_CATEGORIES[0];
  
  // Lookup grade; fallback if slug is a popular grade not explicitly in GRADES_DATA
  let grade = getGradeBySlug(gradeSlug, material.slug) || getGradeBySlug(gradeSlug);
  
  if (!grade) {
    // Generate fallback data gracefully
    const formattedName = gradeSlug ? gradeSlug.toUpperCase().replace('-', ' ') : 'Standard';
    grade = {
      id: `grade-${gradeSlug}`,
      slug: gradeSlug,
      name: formattedName,
      materialSlug: material.slug,
      materialName: material.name,
      unNumber: `Standard ${formattedName}`,
      overview: `High-integrity ${material.name} specification engineered for demanding ${product.name.toLowerCase()} installations under ASTM, ASME, and DIN standards.`,
      composition: {
        "Iron (Fe)": "Balance",
        "Carbon (C)": "Specification Dependent",
        "Alloy Additions": "Per Applicable Standard"
      },
      properties: {
        "Tensile Strength": "Per ASTM/ASME Standard",
        "Yield Strength": "Per ASTM/ASME Standard",
        "Elongation": "Specification Dependent"
      },
      governingStandards: [
        { productForm: product.name, standard: `ASTM / ASME ${material.shortName} Standard` }
      ],
      applications: [
        `Chemical process equipment and ${product.name.toLowerCase()}`,
        `Oil, gas, and petrochemical transmission systems`,
        `High-reliability marine and industrial piping infrastructure`
      ]
    };
  }

  // Clean grade name (e.g. strip duplicate 'Grade ' if already present in grade.name)
  const cleanGradeName = (grade.name || '').replace(/^Grade\s+/i, '');
  const compositionData = grade.composition || grade.chemicalComposition || {};
  const propertiesData = grade.properties || {};
  const standardsList = (grade.governingStandards && grade.governingStandards.length > 0)
    ? grade.governingStandards
    : [
        { productForm: product.name, standard: `ASTM / ASME ${material.shortName} Specification` },
        { productForm: 'Certified Quality', standard: 'EN 10204 3.1 / PMI Tested' }
      ];
  const applicationsList = (grade.applications && grade.applications.length > 0)
    ? grade.applications
    : [
        `Demanding fluid handling and process systems in ${product.name.toLowerCase()}`,
        `Petrochemical, oil & gas refining, and marine infrastructure`,
        `High-temperature, pressure-retaining structural assemblies`
      ];

  const allMaterialGrades = getGradesForMaterial(material.slug);
  const relatedGrades = allMaterialGrades.filter((g) => g.slug !== grade.slug);
  const types = getTypesForProduct(product.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productSlug, materialSlug, gradeSlug]);

  return (
    <div className="pt-[88px] sm:pt-[96px] lg:pt-[104px] bg-[#F8F5F1] min-h-screen">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products', path: '/products', page: 'products-landing' },
          { label: product.name, href: `/products/${product.slug}`, path: `/products/${product.slug}`, page: 'product-category' },
          { label: material.name, href: `/products/${product.slug}/${material.slug}`, path: `/products/${product.slug}/${material.slug}`, page: 'product-material' },
          { label: `Grade ${cleanGradeName}`, href: `/products/${product.slug}/${material.slug}/${grade.slug}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="bg-[#202427] text-white py-14 sm:py-20 relative overflow-hidden border-b border-[#D9D9D6]">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/10 border border-white/20 text-xs font-mono font-bold text-[#F4E5DC] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
                  {material.name}
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-sm bg-[#A94728]/20 border border-[#A94728]/40 text-xs font-mono font-bold text-[#F4E5DC]">
                  {grade.unNumber || `Grade ${cleanGradeName}`}
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                  {product.name}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                {material.name} Grade {cleanGradeName} {product.name}
              </h1>

              <p className="text-lg sm:text-xl text-[#E7EEF2] leading-relaxed mb-6 max-w-3xl">
                {grade.overview}
              </p>

              {/* Quick Specs Highlight Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-4 sm:p-5 bg-white/5 rounded-lg border border-white/10 mb-8 max-w-3xl">
                <div>
                  <div className="text-xs font-mono text-white/60 uppercase">Material Family</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">{material.shortName}</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-white/60 uppercase">Tensile Strength</div>
                  <div className="text-sm sm:text-base font-bold text-[#A94728] mt-1">
                    {propertiesData['Tensile Strength'] || 'Specification Dep.'}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-white/60 uppercase">Yield (0.2%)</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">
                    {propertiesData['Yield Strength (0.2% Offset)'] || propertiesData['Yield Strength (0.2%)'] || propertiesData['Yield Strength'] || 'Standard'}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-white/60 uppercase">Product Form</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">{product.name}</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() =>
                    onOpenEnquiry(
                      `${material.name} Grade ${cleanGradeName} ${product.name}`,
                      material.name
                    )
                  }
                  className="btn-wave inline-flex items-center gap-2 border-2 border-[#A94728] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Request RFQ for Grade {cleanGradeName}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#standards-table"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold uppercase tracking-wider px-5 py-3.5 rounded-sm border border-white/20 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#A94728]" />
                  <span>View Governing Standards</span>
                </a>
              </div>
            </div>

            {/* Right Card: Inspection & Test Certificate Guarantee */}
            <div className="lg:col-span-4 bg-white/5 backdrop-blur-md p-6 sm:p-7 rounded-xl border border-white/10">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#A94728] uppercase mb-3">
                <ShieldCheck className="w-4 h-4 text-[#A94728]" />
                <span>CERTIFICATION & TESTING</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                EN 10204 3.1 Certified Supply
              </h3>

              <p className="text-xs sm:text-sm text-[#D9D9D6] leading-relaxed mb-4">
                Every dispatch of Grade {cleanGradeName} {product.name.toLowerCase()} includes complete metallurgical Mill Test Certificates (MTC), heat numbers, chemical composition analysis, and mechanical tensile test reports.
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#D9D9D6] border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A94728] flex-shrink-0" />
                  <span>100% PMI Spectro Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A94728] flex-shrink-0" />
                  <span>Hydrostatic / Ultrasonic Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A94728] flex-shrink-0" />
                  <span>Third-Party Inspection (TUV, DNV, BV)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main 8 Cols: Chemical & Mechanical Properties (Scrollable Content) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12 min-w-0">
            {/* Chemical Composition */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#D9D9D6] gap-2">
                <div>
                  <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                    METALLURGICAL ANALYSIS
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                    Chemical Composition of Grade {cleanGradeName}
                  </h2>
                </div>
                <span className="text-xs font-mono text-[#202427]/70 bg-[#F8F5F1] px-3 py-1 rounded border border-[#D9D9D6]">
                  Weight % Max / Nominal
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#202427] text-white">
                      <th className="py-3 px-4 font-bold rounded-l">Element</th>
                      <th className="py-3 px-4 font-bold rounded-r">Percentage by Weight (%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9D9D6]">
                    {Object.entries(compositionData).map(([elem, value], idx) => (
                      <tr
                        key={elem}
                        className={idx % 2 === 0 ? 'bg-[#F8F5F1]/50' : 'bg-white hover:bg-[#F4E5DC]/30'}
                      >
                        <td className="py-3 px-4 font-bold text-[#202427] font-mono">{elem}</td>
                        <td className="py-3 px-4 text-[#202427] font-mono font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-[#202427]/70 font-mono mt-4">
                * Note: Chemical composition limits comply with ASTM / ASME standard requirements. Special heat melts with customized chemistry available upon technical request.
              </p>
            </section>

            {/* Mechanical & Physical Properties */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
              <div className="pb-4 mb-6 border-b border-[#D9D9D6]">
                <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                  MECHANICAL INTEGRITY
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                  Mechanical Properties & Physical Parameters
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(propertiesData).map(([prop, val]) => (
                  <div
                    key={prop}
                    className="p-4 bg-[#F8F5F1] rounded-lg border border-[#D9D9D6] flex flex-col justify-between"
                  >
                    <span className="text-xs sm:text-sm font-mono text-[#202427]/70 uppercase">{prop}</span>
                    <span className="text-lg sm:text-xl font-extrabold text-[#202427] mt-1 font-mono">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Manufacturing Configurations: Product Types Available in this Grade (TYPES SECOND) */}
            {types.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#D9D9D6] gap-2">
                  <div>
                    <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                      MANUFACTURING CONFIGURATIONS
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                      {product.name} Types Available in Grade {cleanGradeName}
                    </h2>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-[#A94728] font-bold">
                    {types.length} Standard Types
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {types.map((type) => (
                    <div
                      key={type.id}
                      onClick={() =>
                        onNavigate(
                          'product-type-detail',
                          null,
                          `/products/${product.slug}/${material.slug}/types/${type.slug}`
                        )
                      }
                      className="group p-3.5 bg-[#F8F5F1] hover:bg-[#F4E5DC] border border-[#D9D9D6] hover:border-[#A94728] rounded-lg transition-all cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#202427] group-hover:text-[#A94728] transition-colors truncate">
                        {type.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A94728] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Governing Standards Table (SPECIFICATIONS THIRD) */}
            <section id="standards-table" className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs scroll-mt-28">
              <div className="pb-4 mb-6 border-b border-[#D9D9D6]">
                <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                  SPECIFICATION DIRECTORY
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                  Governing ASTM / ASME Standards by Product Form
                </h2>
                <p className="text-sm text-[#202427]/75 mt-1">
                  Standards vary based on manufacturing method and product form. Below are the verified governing standards for Grade {cleanGradeName}:
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#202427] text-white">
                      <th className="py-3 px-4 font-bold rounded-l">Product Form</th>
                      <th className="py-3 px-4 font-bold">Standard Specification</th>
                      <th className="py-3 px-4 font-bold rounded-r">Context Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9D9D6]">
                    {standardsList.map((std, idx) => {
                      const pName = product.name.toLowerCase();
                      const sForm = (std.productForm || '').toLowerCase();
                      const isCurrentForm =
                        sForm.includes(pName) ||
                        pName.includes(sForm) ||
                        pName.split(/[\s&]+/).some((w) => w.length > 3 && sForm.includes(w));

                      return (
                        <tr
                          key={idx}
                          className={isCurrentForm ? 'bg-[#F4E5DC] font-bold' : idx % 2 === 0 ? 'bg-[#F8F5F1]/50' : 'bg-white'}
                        >
                          <td className="py-3 px-4 text-[#202427]">
                            <span className="flex items-center gap-1.5">
                              {isCurrentForm && <span className="w-2 h-2 rounded-full bg-[#A94728]" />}
                              <span>{std.productForm}</span>
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-[#A94728] font-bold">{std.standard}</td>
                          <td className="py-3 px-4 text-xs font-mono">
                            {isCurrentForm ? (
                              <span className="text-[#A94728] font-bold">● CURRENT PRODUCT</span>
                            ) : (
                              <span className="text-[#202427]/50">Applicable Form</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Industrial Applications */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#D9D9D6] shadow-xs">
              <div className="pb-4 mb-6 border-b border-[#D9D9D6]">
                <div className="tech-label text-xs sm:text-sm font-bold text-[#A94728] uppercase">
                  END-USE ENVIRONMENTS
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
                  Typical Applications for Grade {cleanGradeName}
                </h2>
              </div>

              <div className="space-y-3">
                {applicationsList.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#F8F5F1] rounded-lg border border-[#D9D9D6]">
                    <CheckCircle2 className="w-5 h-5 text-[#A94728] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#202427] font-medium leading-relaxed">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right 4 Cols: Fixed Sticky Sidebar */}
          <div className="lg:col-span-4">
            <aside className="space-y-6 lg:sticky lg:top-28 max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto sidebar-sticky-scroll">
              {/* Direct Quote Prefilled Box */}
              <div className="bg-[#202427] text-white p-6 sm:p-7 rounded-xl border border-white/10 shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A94728] font-bold uppercase mb-2">
                  <Zap className="w-4 h-4 text-[#A94728]" />
                  <span>QUICK QUOTE DESK</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  Enquire for Grade {cleanGradeName}
                </h3>

                <p className="text-sm text-[#D9D9D6] leading-relaxed mb-4">
                  Need immediate pricing, cut lengths, or Mill Test Certificates for Grade {cleanGradeName} {product.name.toLowerCase()}?
                </p>

                <div className="space-y-2 mb-5 text-xs sm:text-sm font-mono">
                  <div className="p-2.5 bg-white/5 rounded border border-white/10 flex justify-between">
                    <span className="text-white/60">Product:</span>
                    <span className="font-bold text-white">{product.name}</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded border border-white/10 flex justify-between">
                    <span className="text-white/60">Material:</span>
                    <span className="font-bold text-white">{material.name}</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded border border-white/10 flex justify-between">
                    <span className="text-white/60">Grade:</span>
                    <span className="font-bold text-[#A94728]">Grade {cleanGradeName}</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onOpenEnquiry(
                      `${material.name} Grade ${cleanGradeName} ${product.name}`,
                      material.name
                    )
                  }
                  className="btn-wave w-full border-2 border-[#A94728] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 rounded-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Price & Delivery</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <span className="text-xs text-white/60 font-mono">
                    Usually quoted within 2 hours
                  </span>
                </div>
              </div>

              {/* Related Grades in the Same Material Family */}
              <div className="bg-white p-6 rounded-xl border border-[#D9D9D6] shadow-xs">
                <div className="pb-3 mb-4 border-b border-[#D9D9D6]">
                  <div className="tech-label text-xs font-bold text-[#A94728] uppercase">
                    ALTERNATIVE GRADES
                  </div>
                  <h4 className="text-sm font-extrabold text-[#202427]">
                    Related {material.name} Grades
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {relatedGrades.map((relGrade) => {
                    const relCleanName = relGrade.name.replace(/^Grade\s+/i, '');
                    return (
                      <button
                        key={relGrade.id}
                        onClick={() =>
                          onNavigate(
                            'grade-detail',
                            null,
                            `/products/${product.slug}/${material.slug}/${relGrade.slug}`
                          )
                        }
                        className="px-3 py-2 text-xs font-mono font-bold bg-[#F8F5F1] hover:bg-[#F4E5DC] text-[#202427] hover:text-[#A94728] border border-[#D9D9D6] hover:border-[#A94728] rounded-md transition-all cursor-pointer"
                      >
                        Grade {relCleanName}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-[#D9D9D6]">
                  <button
                    onClick={() =>
                      onNavigate(
                        'product-material',
                        null,
                        `/products/${product.slug}/${material.slug}`
                      )
                    }
                    className="text-xs font-bold text-[#A94728] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Back to all {material.name} {product.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Technical Disclaimer */}
              <div className="p-4 bg-[#F8F5F1] rounded-lg border border-[#D9D9D6] text-xs text-[#202427]/70 space-y-2">
                <div className="flex items-center gap-2 text-[#A94728] font-bold font-mono">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>AVAILABILITY NOTICE</span>
                </div>
                <p className="leading-relaxed">
                  Technical compatibility and standard mechanical data presented herein represent industry recognized standards and do not guarantee immediate stock availability. Please verify specific heat treatment, dimensional tolerances, and test requirements with our sales desk.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
