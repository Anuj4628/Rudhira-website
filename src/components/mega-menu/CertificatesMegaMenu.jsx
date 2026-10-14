import React from 'react';
import { ShieldCheck, Download, Eye, FileText, ArrowRight, ExternalLink } from 'lucide-react';
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

  const handleCardClick = (e, certId) => {
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
      className="absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-[740px] bg-[#FDFCFB] border border-[#D9D9D6] border-t-2 border-t-[#A94728] rounded-b-xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 select-none before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-4 sm:p-5">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#D9D9D6]/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <ShieldCheck className="w-4 h-4 text-[#A94728]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#202427]">
              Official Company Accreditations
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-2 py-0.5 rounded border border-[#A94728]/20">
            2 Verified Documents
          </span>
        </div>

        {/* 2 Certificate Cards Side-by-Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
          {COMPANY_CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="group p-3.5 bg-white hover:bg-[#F4E5DC]/40 border border-[#D9D9D6] hover:border-[#A94728] rounded-lg transition-all duration-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-2 py-0.5 rounded">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[#202427]/60">
                    VERIFIED
                  </span>
                </div>

                {/* Thumbnail and Title Row */}
                <div
                  onClick={(e) => handleCardClick(e, cert.id)}
                  className="flex items-start gap-3 cursor-pointer mb-2.5"
                >
                  <div className="w-14 h-18 bg-[#FAF9F6] border border-[#D9D9D6] rounded p-1 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-2xs">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain filter contrast-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-[#202427] group-hover:text-[#A94728] transition-colors leading-snug mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] font-mono text-[#A94728] font-bold truncate">
                      {cert.certificateNo}
                    </p>
                    <p className="text-[10px] text-[#202427]/70 truncate mt-0.5">
                      {cert.issuingBody}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2.5 border-t border-[#D9D9D6]/60 flex items-center justify-between gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={(e) => handleCardClick(e, cert.id)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A94728] hover:underline cursor-pointer"
                >
                  <Eye className="w-3 h-3" />
                  <span>Inspect</span>
                </button>

                <a
                  href={cert.pdfUrl}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-[#202427] hover:text-[#A94728] bg-[#F8F5F1] hover:bg-white px-2 py-1 rounded border border-[#D9D9D6] transition-colors"
                >
                  <Download className="w-3 h-3 text-[#A94728]" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner & Link to /certificates */}
        <div className="pt-2.5 border-t border-[#D9D9D6] flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-2 text-[#202427]/70 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
            <span>EN 10204 3.1 Mill Certificates • 100% PMI Spectro Verified</span>
          </div>

          <a
            href="/certificates"
            onClick={handleGoToCertificatesPage}
            className="inline-flex items-center gap-1 font-bold text-[#A94728] hover:text-[#7E321F] hover:underline transition-colors"
          >
            <span>View Full Certificates Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
