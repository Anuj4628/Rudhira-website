import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Download,
  Eye,
  CheckCircle2,
  FileText,
  ExternalLink,
  Award,
  Building2,
  Check,
  Copy,
  ArrowUpRight,
  Search,
  Ruler,
  Layers,
  FileCheck2
} from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CertificateModal from '../components/common/CertificateModal';
import { COMPANY_DETAILS, COMPANY_CERTIFICATES, QUALITY_STANDARDS_ITEMS } from '../data/industrialData';

export default function CertificatesPage({ onNavigate, onOpenEnquiry }) {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCertId, setActiveCertId] = useState('iso-9001-2015');
  const [selectedTab, setSelectedTab] = useState('all'); // 'all', 'iso-9001-2015', 'gst-registration'
  const [copiedText, setCopiedText] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenCertModal = (certId) => {
    setActiveCertId(certId);
    setCertModalOpen(true);
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const breadcrumbs = [
    { label: 'Official Certificates & Accreditations', href: '/certificates' },
  ];

  const filteredCerts =
    selectedTab === 'all'
      ? COMPANY_CERTIFICATES
      : COMPANY_CERTIFICATES.filter((c) => c.id === selectedTab);

  return (
    <div className="pt-[88px] sm:pt-[96px] lg:pt-[104px] bg-[#F8F5F1] text-[#202427] min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative bg-[#202427] text-white py-16 sm:py-20 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A94728]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-[#A94728]" />
              <span className="tech-label text-xs sm:text-[13px] font-bold tracking-widest text-[#F4E5DC] uppercase">
                OFFICIAL ACCREDITATIONS &amp; STATUTORY COMPLIANCE
              </span>
            </div>

            {/* Main Title (76–96px desktop scale) */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] xl:text-[74px] font-extrabold text-white tracking-tight leading-[1.05] mb-6 font-sans">
              Verified Certificates &amp;{' '}
              <span className="text-[#F4E5DC] block mt-1">
                Quality Management
              </span>
            </h1>

            {/* Subtitle (18–20px desktop) */}
            <p className="text-base sm:text-lg lg:text-[20px] text-[#E7EEF2]/95 leading-relaxed mb-8 max-w-2xl font-normal font-sans">
              Rudhira Metal Industries operates under accredited quality systems and official government registrations. Inspect our third-party audited ISO 9001:2015 certification and Government of India GST credentials below.
            </p>

            {/* Key Credential Badges */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-[13px] text-[#D9D9D6]">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-white/5 border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>ISO 9001:2015 CERTIFIED</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-white/5 border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>GSTIN: 27BXMPP3576J1ZQ</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-white/5 border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>IAF MLA &amp; EIAC Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Filter / Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#D9D9D6]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedTab === 'all'
                  ? 'bg-[#A94728] text-white shadow-sm'
                  : 'bg-white text-[#202427] border border-[#D9D9D6] hover:border-[#A94728]'
              }`}
            >
              All Documents ({COMPANY_CERTIFICATES.length})
            </button>
            <button
              onClick={() => setSelectedTab('iso-9001-2015')}
              className={`px-4 py-2 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedTab === 'iso-9001-2015'
                  ? 'bg-[#A94728] text-white shadow-sm'
                  : 'bg-white text-[#202427] border border-[#D9D9D6] hover:border-[#A94728]'
              }`}
            >
              ISO 9001:2015 Certificate
            </button>
            <button
              onClick={() => setSelectedTab('gst-registration')}
              className={`px-4 py-2 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedTab === 'gst-registration'
                  ? 'bg-[#A94728] text-white shadow-sm'
                  : 'bg-white text-[#202427] border border-[#D9D9D6] hover:border-[#A94728]'
              }`}
            >
              GST Registration Certificate
            </button>
          </div>

          <div className="text-xs font-mono text-[#202427]/70">
            SHOWING {filteredCerts.length} VERIFIED STATUTORY RECORDS
          </div>
        </div>

        {/* Certificate Display Cards */}
        <div className="space-y-12 mb-20">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-2xl shadow-industrial overflow-hidden transition-all duration-300"
            >
              {/* Card Top Header */}
              <div className="bg-[#202427] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-white/10 text-[#A94728] border border-white/15">
                    <ShieldCheck className="w-5 h-5 text-[#F4E5DC]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A94728] font-bold uppercase tracking-wider block">
                      {cert.type}
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                      {cert.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-mono text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>AUTHENTIC & VERIFIED</span>
                  </span>
                </div>
              </div>

              {/* Card Body Grid */}
              <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Certificate Visual Preview with Interactive Zoom Button */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div
                    onClick={() => handleOpenCertModal(cert.id)}
                    className="relative w-full max-w-md bg-[#FAF9F6] p-3 rounded-xl border-2 border-[#D9D9D6] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group/preview"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-white border border-[#D9D9D6]/60 flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-auto object-contain max-h-[460px] filter contrast-105 group-hover/preview:scale-[1.03] transition-transform duration-300"
                        loading="eager"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#202427]/60 opacity-0 group-hover/preview:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-xs text-white p-4">
                        <div className="w-12 h-12 rounded-full bg-[#A94728] flex items-center justify-center text-white shadow-lg">
                          <Eye className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded">
                          Click to Inspect Full Certificate
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-[#202427]/70 font-mono px-1">
                      <span>Preview (Page 1)</span>
                      <span className="text-[#A94728] font-bold group-hover/preview:underline">
                        Zoom Document ↗
                      </span>
                    </div>
                  </div>

                  {/* Actions under image */}
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
                    <button
                      type="button"
                      onClick={() => handleOpenCertModal(cert.id)}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#A94728] hover:bg-[#7E321F] text-white px-4 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>

                    <a
                      href={cert.pdfUrl}
                      download
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#202427] hover:bg-[#171A1C] text-white px-4 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5 text-[#F4E5DC]" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>

                {/* Right: Detailed Certificate Breakdown & Verification Data */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="tech-label text-xs font-bold text-[#A94728] uppercase tracking-wider mb-1">
                      {cert.badge} VERIFICATION DOSSIER
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#202427] mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#202427]/75 leading-relaxed">
                      {cert.subtitle}
                    </p>
                  </div>

                  {/* Metadata Table */}
                  <div className="bg-[#F8F5F1] rounded-xl border border-[#D9D9D6] p-5 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-[#D9D9D6]/60 pb-2.5">
                      <span className="text-[#6B7280] uppercase">Certificate / Reg Number:</span>
                      <div className="flex items-center gap-2">
                        <strong className="text-[#A94728] text-sm">{cert.certificateNo}</strong>
                        <button
                          type="button"
                          onClick={() => handleCopy(cert.certificateNo, cert.id)}
                          className="p-1 text-[#6B7280] hover:text-[#A94728] cursor-pointer"
                          title="Copy certificate number"
                        >
                          {copiedText === cert.id ? (
                            <span className="text-[#25D366] text-[10px]">Copied!</span>
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#D9D9D6]/60 pb-2.5">
                      <span className="text-[#6B7280] uppercase">Issuing Authority:</span>
                      <span className="text-[#202427] font-semibold text-right">{cert.issuingBody}</span>
                    </div>

                    {cert.accreditation && (
                      <div className="flex items-center justify-between border-b border-[#D9D9D6]/60 pb-2.5">
                        <span className="text-[#6B7280] uppercase">Accreditation:</span>
                        <span className="text-[#202427] text-right font-medium text-[11px] max-w-xs">{cert.accreditation}</span>
                      </div>
                    )}

                    {cert.legalName && (
                      <div className="flex items-center justify-between border-b border-[#D9D9D6]/60 pb-2.5">
                        <span className="text-[#6B7280] uppercase">Legal Name:</span>
                        <strong className="text-[#202427]">{cert.legalName}</strong>
                      </div>
                    )}

                    {cert.tradeName && (
                      <div className="flex items-center justify-between border-b border-[#D9D9D6]/60 pb-2.5">
                        <span className="text-[#6B7280] uppercase">Trade Name:</span>
                        <strong className="text-[#A94728]">{cert.tradeName}</strong>
                      </div>
                    )}

                    <div className="flex items-center justify-between border-b border-[#D9D9D6]/60 pb-2.5">
                      <span className="text-[#6B7280] uppercase">Date of Registration:</span>
                      <span className="text-[#202427]">{cert.issueDate}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#6B7280] uppercase">Validity Status:</span>
                      <span className="text-[#25D366] font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                        <span>{cert.expiryDate}</span>
                      </span>
                    </div>
                  </div>

                  {/* Certified Scope & Address */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-[#202427] uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#A94728]" />
                      <span>Certified Scope of Manufacturing & Supply:</span>
                    </div>
                    <div className="p-4 bg-white rounded-lg border-2 border-[#D9D9D6] text-xs text-[#202427]/85 leading-relaxed font-sans shadow-xs">
                      {cert.scope}
                    </div>
                  </div>

                  {/* Security Verification Guarantee */}
                  <div className="p-4 bg-[#202427] text-white rounded-xl border border-white/10 flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#A94728] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#F4E5DC] uppercase tracking-wider mb-1">
                        Third-Party Audit Compliance Guarantee
                      </h4>
                      <p className="text-xs text-[#D9D9D6]/85 leading-relaxed">
                        Every order supplied by Rudhira Metal Industries is backed by our ISO 9001:2015 quality procedures. Full EN 10204 3.1 Mill Test Certificates, chemical heat numbers, and ultrasonic reports are dispatched with each shipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Framework Micro Strip */}
        <div className="bg-white border-2 border-[#D9D9D6] rounded-2xl p-8 sm:p-10 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <div className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase mb-1">
              SPECIFICATION ASSURANCE FRAMEWORK
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202427]">
              Metallurgical Quality Testing & Compliance
            </h3>
            <p className="text-xs sm:text-sm text-[#202427]/75 mt-1">
              In addition to our ISO 9001:2015 quality management procedures, our inventory adheres to stringent international laboratory and nondestructive testing standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {QUALITY_STANDARDS_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border border-[#D9D9D6] bg-[#F8F5F1] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#A94728] px-2 py-0.5 rounded bg-[#A94728]/10 border border-[#A94728]/20">
                      {item.code}
                    </span>
                    <span className="text-[10px] font-mono text-[#202427]/50">
                      MOD // {item.id}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#202427] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#202427]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9D9D6]/60 text-[10px] font-mono text-[#25D366] font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>100% SPEC COMPLIANT</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Action Callout */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#202427] via-[#2A3136] to-[#202427] text-white rounded-2xl border-2 border-white/10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase mb-2">
              NEED CERTIFIED MILL TEST REPORTS (MTC)?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Require Order-Specific Inspection Dossiers?
            </h3>
            <p className="text-xs sm:text-sm text-[#D9D9D6]/85 leading-relaxed">
              We supply EN 10204 3.1 Mill Test Certificates with chemical heat numbers, mechanical test results, and third-party inspection (TUV, DNV, Lloyds, BV, SGS) for project tenders.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Certified Inventory')}
              className="btn-wave inline-flex items-center gap-2 border-2 border-[#A94728] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-md transition-all cursor-pointer"
            >
              <span>Request Quote with MTC</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="btn-wave inline-flex items-center gap-2 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all cursor-pointer"
            >
              <span>Contact Sales Desk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reusable Certificate Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        initialCertId={activeCertId}
      />
    </div>
  );
}
