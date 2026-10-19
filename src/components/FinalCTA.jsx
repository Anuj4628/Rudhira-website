import React from 'react';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/industrialData';

export default function FinalCTA({ onOpenEnquiry }) {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappDefaultMsg
  )}`;

  return (
    <section
      id="final-cta"
      className="relative py-24 sm:py-28 bg-[#7E321F] text-white overflow-hidden border-b border-black/20"
    >
      {/* Subtle Metallic Technical Grid Overlay */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

      {/* Subtle Linear Gradient Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7E321F] via-[#90391D] to-[#692919] opacity-95" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-white/10 border border-white/20 text-[#F4E5DC] text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>DIRECT FACTORY & STOCKIST PROCUREMENT</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] mb-6 max-w-3xl mx-auto font-sans">
          Looking for the Right Metal Product for Your Requirement?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-[19px] text-[#F4E5DC]/95 font-normal max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Let's discuss your material and product requirements. Our technical sales team is ready to evaluate specifications, verify stock availability, and submit quotation proposals.
        </p>

        {/* Buttons (15–17px, Bold 700) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenEnquiry}
            className="btn-wave inline-flex items-center gap-2.5 border-2 border-white bg-white hover:bg-white/90 text-black !text-black text-sm sm:text-base font-extrabold uppercase tracking-wider px-8 sm:px-9 py-4 rounded-sm shadow-xl transition-all duration-150 active:scale-[0.97] cursor-pointer group"
          >
            <span className="text-black !text-black">Send an Enquiry</span>
            <ArrowUpRight className="w-4 h-4 text-black !text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wave inline-flex items-center gap-2.5 border border-white bg-white/95 hover:bg-white text-black !text-black text-sm sm:text-base font-bold uppercase tracking-wider px-7 sm:px-8 py-4 rounded-sm shadow-lg transition-all duration-150 active:scale-[0.97]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-black !text-black">WhatsApp Us</span>
          </a>
        </div>

        {/* Quick Contact Micro Strip */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-[#F4E5DC]/80">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>{COMPANY_DETAILS.emails[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>MUMBAI CENTRAL INDUSTRIAL SUPPLY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
