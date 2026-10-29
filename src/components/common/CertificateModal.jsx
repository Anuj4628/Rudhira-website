import React, { useEffect } from 'react';
import { X, Download, ShieldCheck, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import { COMPANY_CERTIFICATES } from '../../data/industrialData';

export default function CertificateModal({ isOpen, onClose, initialCertId = 'iso-9001-2015' }) {
  const [selectedCertId, setSelectedCertId] = React.useState(initialCertId);

  useEffect(() => {
    if (initialCertId) {
      setSelectedCertId(initialCertId);
    }
  }, [initialCertId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentCert =
    COMPANY_CERTIFICATES.find((c) => c.id === selectedCertId) || COMPANY_CERTIFICATES[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={currentCert.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-xl shadow-2xl border-2 border-[#D9D9D6] flex flex-col overflow-hidden animate-scale-up">
        {/* Top Header Bar */}
        <div className="bg-[#202427] text-white px-5 sm:px-6 py-3.5 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                OFFICIAL VERIFIED CERTIFICATION
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Switcher Tabs */}
        <div className="bg-[#F8F5F1] px-4 sm:px-6 py-2.5 border-b border-[#D9D9D6] flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            {COMPANY_CERTIFICATES.map((cert) => {
              const active = cert.id === currentCert.id;
              return (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCertId(cert.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold font-mono transition-all cursor-pointer ${
                    active
                      ? 'bg-[#123F91] text-white shadow-xs'
                      : 'bg-white text-[#202427] border border-[#D9D9D6] hover:border-[#123F91]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{cert.badge}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentCert.pdfUrl}
              download
              className="inline-flex items-center gap-1.5 bg-[#202427] hover:bg-[#171A1C] text-white px-3.5 py-1.5 rounded-md text-xs font-bold font-mono transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#EEF3FA]" />
              <span>Download PDF</span>
            </a>
            <a
              href={currentCert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-white hover:bg-[#EEF3FA]/50 text-[#202427] border border-[#D9D9D6] px-3 py-1.5 rounded-md text-xs font-bold font-mono transition-colors"
            >
              <span>Open Raw PDF</span>
              <ExternalLink className="w-3 h-3 text-[#123F91]" />
            </a>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 bg-[#EFECE6]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Certificate Preview Document */}
            <div className="lg:col-span-7 bg-white p-3 rounded-lg border-2 border-[#D9D9D6] shadow-md flex flex-col items-center justify-center">
              <div className="relative w-full max-h-[580px] overflow-hidden rounded bg-[#FAF9F6] border border-[#D9D9D6]/60 flex items-center justify-center">
                <img
                  src={currentCert.image}
                  alt={currentCert.title}
                  className="w-full h-auto object-contain max-h-[560px] shadow-xs"
                  loading="eager"
                />
              </div>
              <div className="mt-2 text-[11px] text-[#202427]/60 font-mono text-center flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Digitally Verified Authentic Document Record</span>
              </div>
            </div>

            {/* Right: Technical Metadata & Compliance Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-5 rounded-lg border-2 border-[#D9D9D6] shadow-xs space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#123F91]/10 border border-[#123F91]/25 text-[#123F91] text-xs font-mono font-bold">
                  <span>{currentCert.type}</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#202427] leading-snug">
                  {currentCert.title}
                </h3>

                <p className="text-xs text-[#202427]/75 leading-relaxed">
                  {currentCert.subtitle}
                </p>

                <div className="pt-3 border-t border-[#D9D9D6] space-y-2.5 font-mono text-xs">
                  <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9D9D6]/40">
                    <span className="text-[#6B7280]">Registration No:</span>
                    <strong className="text-[#123F91] text-right font-bold break-all">
                      {currentCert.certificateNo}
                    </strong>
                  </div>

                  <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9D9D6]/40">
                    <span className="text-[#6B7280]">Issuing Body:</span>
                    <span className="text-[#202427] text-right font-medium">
                      {currentCert.issuingBody}
                    </span>
                  </div>

                  {currentCert.accreditation && (
                    <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9D9D6]/40">
                      <span className="text-[#6B7280]">Accreditation:</span>
                      <span className="text-[#202427] text-right text-[11px]">
                        {currentCert.accreditation}
                      </span>
                    </div>
                  )}

                  {currentCert.legalName && (
                    <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9D9D6]/40">
                      <span className="text-[#6B7280]">Legal Name:</span>
                      <strong className="text-[#202427] text-right">
                        {currentCert.legalName}
                      </strong>
                    </div>
                  )}

                  {currentCert.tradeName && (
                    <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9D9D6]/40">
                      <span className="text-[#6B7280]">Trade Name:</span>
                      <strong className="text-[#123F91] text-right">
                        {currentCert.tradeName}
                      </strong>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9D9D6]/40">
                    <span className="text-[#6B7280]">Issue Date:</span>
                    <span className="text-[#202427] text-right">{currentCert.issueDate}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9D9D6]/40">
                    <span className="text-[#6B7280]">Validity:</span>
                    <span className="text-[#202427] text-right font-bold text-[#25D366]">
                      {currentCert.expiryDate}
                    </span>
                  </div>
                </div>

                {/* Scope of Certification */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono font-bold text-[#202427] uppercase mb-1">
                    Certified Scope / Address:
                  </div>
                  <div className="p-2.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-[11px] text-[#202427]/80 leading-relaxed font-sans">
                    {currentCert.scope}
                  </div>
                </div>
              </div>

              {/* Security & Verification Callout */}
              <div className="p-4 bg-[#202427] text-white rounded-lg border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#EEF3FA]">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Compliance Guarantee</span>
                </div>
                <p className="text-[11px] text-[#D9D9D6]/80 leading-relaxed">
                  All dispatched lots include matching EN 10204 3.1 Mill Test Certificates (MTC), heat numbers, chemical analysis, and ultrasonic test compliance correlating directly to these accreditations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Strip */}
        <div className="bg-white px-5 sm:px-6 py-3 border-t border-[#D9D9D6] flex items-center justify-between text-xs text-[#202427]/70 flex-shrink-0 font-mono">
          <span>RUDHIRA METAL INDUSTRIES // CERTIFIED DOCUMENTATION</span>
          <button
            onClick={onClose}
            className="btn-wave px-4 py-1.5 border border-[#202427]/40 text-[#202427] rounded font-bold cursor-pointer transition-all"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
