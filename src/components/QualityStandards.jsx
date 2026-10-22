import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileCheck, Search, Ruler, Box, ShieldCheck, Download, Eye, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import { QUALITY_STANDARDS_ITEMS, COMPANY_CERTIFICATES } from '../data/industrialData';
import CertificateModal from './common/CertificateModal';

gsap.registerPlugin(ScrollTrigger);

export default function QualityStandards() {
  const sectionRef = useRef(null);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCertId, setActiveCertId] = useState('iso-9001-2015');

  const icons = [
    <FileCheck className="w-6 h-6 text-[#F4E5DC]" key="q1" />,
    <Search className="w-6 h-6 text-[#F4E5DC]" key="q2" />,
    <Ruler className="w-6 h-6 text-[#F4E5DC]" key="q3" />,
    <Box className="w-6 h-6 text-[#F4E5DC]" key="q4" />,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.quality-module',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          onComplete: () => {
            gsap.set('.quality-module', { clearProps: 'all' });
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleOpenCert = (certId) => {
    setActiveCertId(certId);
    setCertModalOpen(true);
  };

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="py-24 sm:py-28 bg-[#344B5C] text-white border-b border-white/15 relative overflow-hidden"
      aria-label="Quality Standards Framework"
    >
      {/* Lighter-blue technical grid background */}
      <div className="absolute inset-0 bg-steel-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Layout */}
        <div className="quality-header text-center mx-auto max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 border border-white/20 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
            <span className="tech-label text-[#F4E5DC] font-bold text-xs sm:text-[13px]">
              08 — SPECIFICATION ASSURANCE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-5 font-sans">
            Quality &amp; Inspection Standards
          </h2>

          <p className="text-base sm:text-lg lg:text-[19px] text-[#E7EEF2]/90 font-normal max-w-2xl mx-auto leading-relaxed font-sans">
            Compliance, verification, and zero-tolerance dimensional deviation. Strict material traceability and positive material identification (PMI) on every dispatched batch.
          </p>
        </div>

        {/* 4 Large Editorial Feature Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-24">
          {QUALITY_STANDARDS_ITEMS.map((item, index) => {
            const moduleBgs = [
              'bg-[#273845] border-white/20',
              'bg-[#415A6B] border-white/25',
              'bg-[#273845] border-white/20',
              'bg-[#415A6B] border-white/25',
            ][index % 4];

            return (
              <div
                key={item.id}
                className={`quality-module group relative p-7 sm:p-8 ${moduleBgs} border rounded-lg flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-2 hover:border-[#A94728] transition-all duration-300`}
              >
                {/* Orange Corner Details */}
                <div className="corner-bracket-tl" />
                <div className="corner-bracket-br" />

                {/* Large Background Watermark Number */}
                <div className="absolute -bottom-4 -right-1 font-mono text-7xl font-black text-white/5 select-none pointer-events-none group-hover:scale-110 transition-transform">
                  {item.id}
                </div>

                <div>
                  {/* Top Bar: Icon Container & Technical Code */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-2.5 bg-[#344B5C] rounded-md border border-white/20 group-hover:bg-[#A94728] transition-colors shadow-sm">
                      {icons[index]}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#F4E5DC] bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                      {item.code}
                    </span>
                  </div>

                  {/* Module ID */}
                  <div className="tech-label text-xs font-bold text-[#A94728] mb-1.5 tracking-widest">
                    MODULE // {item.id}
                  </div>

                  {/* Module Title */}
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-white mb-3 tracking-tight group-hover:text-[#F4E5DC] transition-colors font-sans">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-[#E7EEF2]/85 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Technical Frame */}
                <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-[#E7EEF2]/60">
                  <span>SPEC COMPLIANT</span>
                  <span className="text-[#A94728] font-bold group-hover:translate-x-1 transition-transform">
                    PASS 100% →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            OFFICIAL CERTIFICATES & ACCREDITATION SHOWCASE
            ======================================================== */}
        <div className="pt-12 border-t border-white/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4E5DC]" />
              <span className="tech-label text-[#F4E5DC] font-bold text-xs">
                OFFICIAL ACCREDITATIONS & VERIFIED DOCUMENTS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              Certified Quality & Statutory Compliance
            </h3>
            <p className="text-sm sm:text-base text-[#E7EEF2]/85">
              View and download our authenticated ISO 9001:2015 Quality Management System Certification and Government of India GST Registration Certificate.
            </p>
          </div>

          {/* 2 Official Certificate Showcase Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {COMPANY_CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#202427] border-2 border-white/20 hover:border-[#A94728] rounded-xl p-6 sm:p-7 shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent Top Ribbon */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A94728] via-[#F4E5DC] to-[#A94728]" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A94728]/20 border border-[#A94728]/50 text-[#F4E5DC] font-mono text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span>{cert.badge}</span>
                    </div>

                    <span className="text-[11px] font-mono text-white/60 tracking-wider">
                      VERIFIED RECORD
                    </span>
                  </div>

                  {/* Document Thumbnail Preview Frame */}
                  <div
                    onClick={() => handleOpenCert(cert.id)}
                    className="relative w-full h-52 sm:h-60 bg-[#171A1C] rounded-lg border border-white/15 overflow-hidden mb-5 cursor-pointer group/img flex items-center justify-center p-2"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain filter contrast-105 group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#202427]/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
                      <div className="inline-flex items-center gap-2 bg-[#A94728] text-white px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <h4 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#F4E5DC] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#E7EEF2]/75 leading-relaxed mb-4">
                    {cert.subtitle}
                  </p>

                  <div className="p-3 bg-white/5 rounded border border-white/10 space-y-1.5 font-mono text-xs mb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[#E7EEF2]/60">Certificate / Reg No:</span>
                      <strong className="text-[#F4E5DC]">{cert.certificateNo}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#E7EEF2]/60">Issuing Body:</span>
                      <span className="text-white text-right truncate max-w-[200px]">{cert.issuingBody}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#E7EEF2]/60">Validity:</span>
                      <span className="text-[#25D366] font-bold">{cert.expiryDate}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenCert(cert.id)}
                    className="btn-wave inline-flex items-center gap-1.5 border border-[#A94728] text-[#F4E5DC] px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider font-mono transition-all cursor-pointer shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Full Certificate</span>
                  </button>

                  <a
                    href={cert.pdfUrl}
                    download
                    className="btn-wave inline-flex items-center gap-1.5 border border-white/30 text-[#F4E5DC] px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider font-mono transition-all shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Certificate Viewer Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        initialCertId={activeCertId}
      />
    </section>
  );
}

