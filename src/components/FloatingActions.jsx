import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { COMPANY_DETAILS } from '../data/industrialData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappDefaultMsg
  )}`;
  const callUrl = `tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto select-none"
    >
      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white h-12 min-w-12 px-3.5 rounded-full shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat with Rudhira Metal on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold tracking-wider uppercase transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:pr-1">
          WhatsApp
        </span>
        <FaWhatsapp className="w-5 h-5 shrink-0" />
      </a>

      {/* Direct Phone Call Floating Action Button */}
      <a
        href={callUrl}
        className="group flex items-center justify-center gap-2.5 bg-[#202427] hover:bg-[#A94728] text-white h-12 min-w-12 px-3.5 rounded-full shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label={`Call Rudhira Metal Commercial Desk at ${COMPANY_DETAILS.phone}`}
        title={`Call ${COMPANY_DETAILS.phone}`}
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold tracking-wider uppercase transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:pr-1">
          Call Now
        </span>
        <FaPhone className="w-4 h-4 shrink-0" />
      </a>
    </aside>
  );
}
