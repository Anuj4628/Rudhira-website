import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export default function DimensionsPdfViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  categoryName
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !pdfUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl h-[94vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#123F91] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0 border-b border-[#0B2863]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 bg-white/10 rounded-lg shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white">
                  RUDHIRA OFFICIAL CATALOGUE
                </span>
                <span className="text-white/70 text-xs hidden sm:inline">• ISO 9001:2015</span>
              </div>
              <h2 className="font-bold text-base sm:text-lg truncate tracking-tight text-white mt-0.5">
                {title || `${categoryName} Dimensions Catalogue`}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Download Button */}
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#123F91] hover:bg-white/90 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-102"
              title="Download PDF Catalogue"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Open in New Window */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs sm:text-sm font-semibold transition-colors text-white"
              title="Open Fullscreen in New Window"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden md:inline">Open Tab</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-red-300 transition-colors cursor-pointer ml-1"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Frame */}
        <div className="flex-1 w-full bg-slate-100 relative overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            title={title}
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Information Footer */}
        <div className="bg-[#FAF9F7] border-t border-gray-200 px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#123F91]" />
            <span className="font-medium text-gray-700">
              Rudhira Metal Industries Technical Engineering Specifications
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-gray-500">
            <span>Khetwadi, Mumbai</span>
            <span>•</span>
            <span>+91 98920 71909</span>
            <span>•</span>
            <span>sales@rudhirametal.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

