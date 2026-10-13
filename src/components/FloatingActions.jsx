import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/industrialData';

export default function FloatingActions({ onOpenEnquiry }) {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappDefaultMsg
  )}`;

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat with Rudhira Metal on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold tracking-wider uppercase transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:px-1">
          WhatsApp
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

      {/* Call / Enquiry Quick Button */}
      <button
        onClick={onOpenEnquiry}
        className="group flex items-center gap-2 bg-[#202427] hover:bg-[#A94728] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Direct Commercial Enquiry"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold tracking-wider uppercase transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:px-1">
          Direct Enquiry
        </span>
        <Phone className="w-5 h-5 text-[#A94728] group-hover:text-white transition-colors" />
      </button>
    </aside>
  );
}
