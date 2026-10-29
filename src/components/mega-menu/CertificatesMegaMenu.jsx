import React from 'react';
import { ArrowRight, Eye, Download, ShieldCheck, FileCheck } from 'lucide-react';
import { COMPANY_CERTIFICATES } from '../../data/industrialData';

export default function CertificatesMegaMenu({
  isOpen,
  onClose,
  onNavigate,
  onOpenCertModal,
  onMouseEnter,
  onMouseLeave
}) {
  if (!isOpen) return null;

  const handleGoToCertificatesPage = (e) => {
    e.preventDefault();
    if (onClose) onClose();
    if (onNavigate) {
      onNavigate('certificates', null, '/certificates');
    }
  };

  const handleInspectCert = (e, certId) => {
    e.preventDefault();
    if (onClose) onClose();
    if (onOpenCertModal) {
      onOpenCertModal(certId);
    } else if (onNavigate) {
      onNavigate('certificates', null, '/certificates');
    }
  };

  return (
    <div
      role="menu"
      aria-label="Certificates Dropdown"
      className="nav-dropdown-menu mt-2 w-[420px] max-w-[calc(100vw-32px)] bg-[#123F91] border border-[#0B2863] rounded-xl shadow-2xl shadow-black/35 select-none text-white pointer-events-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Continuous invisible hover bridge between navbar item and dropdown */}
      <div
        className="absolute -top-3.5 left-0 right-0 h-4 bg-transparent pointer-events-auto"
        aria-hidden="true"
      />

      {/* Upward notch pointing directly to the Certificates nav link */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#123F91] rotate-45 border-t border-l border-[#0B2863] pointer-events-none z-10" />

      {/* Inner rounded container */}
      <div className="rounded-xl overflow-hidden">
        {/* Top Header Banner Strip */}
        <div className="bg-black/15 border-b border-white/15 px-4 sm:px-5 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-white/90" />
            <span className="font-mono font-bold tracking-wider uppercase text-white text-[11px]">
              QUALITY ACCREDITATIONS
            </span>
          </div>
          <span className="text-white/80 text-[11px] font-medium hidden sm:inline">
            {COMPANY_CERTIFICATES.length} Official Documents
          </span>
        </div>

        {/* Main Content: Clean Text-Focused Certificate Rows */}
        <div className="p-3.5 sm:p-4 space-y-2">
          {COMPANY_CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="group p-2.5 sm:p-3 rounded-lg bg-black/10 hover:bg-white/15 border border-white/15 transition-all duration-150 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5"
            >
              {/* Left: Certificate Text & Reference */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <FileCheck className="w-4 h-4 text-white/90 flex-shrink-0" />
                  <h4 className="text-[13px] font-bold text-white tracking-tight truncate">
                    {cert.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-white/80 font-mono pl-6">
                  <span>{cert.badge}</span>
                  <span>•</span>
                  <span className="truncate">{cert.certificateNo}</span>
                </div>
              </div>

              {/* Right: Quick Action Buttons */}
              <div className="flex items-center gap-1.5 pl-6 sm:pl-0 flex-shrink-0">
                <button
                  type="button"
                  onClick={(e) => handleInspectCert(e, cert.id)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white text-[#123F91] hover:bg-[#EEF3FA] text-[11.5px] font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                  title={`Inspect ${cert.title}`}
                >
                  <Eye className="w-3 h-3" />
                  <span>Inspect</span>
                </button>

                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/20 hover:bg-white/30 text-white text-[11.5px] font-semibold transition-all cursor-pointer"
                    title="Download PDF"
                  >
                    <Download className="w-3 h-3" />
                    <span>PDF</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Assurance & View All Strip */}
        <div className="bg-black/15 border-t border-white/15 px-4 sm:px-5 py-2 flex items-center justify-between text-xs">
          <span className="text-white/80 font-mono text-[11px] hidden sm:inline">
            Govt. of India & International Registrations
          </span>
          <a
            href="/certificates"
            onClick={handleGoToCertificatesPage}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-white/90 uppercase tracking-wider hover:underline ml-auto cursor-pointer"
          >
            <span>View Certificates Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
