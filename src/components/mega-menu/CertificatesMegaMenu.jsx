import React from 'react';
import { Download, Eye, ArrowRight } from 'lucide-react';
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
      className="absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-[820px] bg-white border border-[#E3CEBF] border-t-2 border-t-[#A94728] rounded-xl shadow-xl z-50 mega-menu-enter select-none before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Top Header Banner */}
      <div className="bg-[#FAF9F7] border-b border-[#E3CEBF]/60 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <span className="text-xs font-mono font-bold text-[#A94728] tracking-widest uppercase block leading-none">
              QUALITY ACCREDITATIONS & COMPLIANCE
            </span>
            <span className="text-[11px] text-gray-500 font-medium">
              VERIFIED GOVERNMENT OF INDIA & INTERNATIONAL REGISTRATIONS
            </span>
          </div>
        </div>

        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
          2 OFFICIAL DOCUMENTS
        </span>
      </div>

      {/* 2 Certificate Cards Side-by-Side */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMPANY_CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="group p-4 bg-white hover:bg-[#FAF9F7] border border-gray-100 hover:border-[#A94728]/40 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#A94728] bg-[#A94728]/10 px-2 py-0.5 rounded">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 font-semibold">
                    OFFICIAL ATTESTATION
                  </span>
                </div>

                {/* Content Row */}
                <div
                  onClick={(e) => handleCardClick(e, cert.id)}
                  className="flex items-start gap-3.5 cursor-pointer mb-3"
                >
                  <div className="w-14 h-18 bg-gray-50 border border-gray-200 rounded-lg p-1 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-2xs">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain filter contrast-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-[#1C2024] group-hover:text-[#A94728] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] font-mono text-[#A94728] font-bold mt-1">
                      {cert.certificateNo}
                    </p>
                    <p className="text-[10.5px] text-gray-500 font-sans mt-0.5 line-clamp-2">
                      {cert.issuingBody}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={(e) => handleCardClick(e, cert.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A94728] hover:text-[#7E321F] hover:underline cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Document</span>
                </button>

                <a
                  href={cert.pdfUrl}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gray-700 hover:text-[#A94728] bg-gray-50 hover:bg-white px-2.5 py-1 rounded-md border border-gray-200 transition-colors cursor-pointer"
                >
                  <Download className="w-3 h-3 text-[#A94728]" />
                  <span>PDF Copy</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#FAF9F7] border-t border-gray-100 px-6 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-gray-500 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
          <span>Full Quality Audits & Mill Test Reports Provided with Every Consignment</span>
        </div>

        <a
          href="/certificates"
          onClick={handleGoToCertificatesPage}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#A94728] hover:text-[#7E321F] uppercase tracking-wider hover:underline cursor-pointer"
        >
          <span>View Dedicated Quality & Certificates Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
