import React from 'react';
import { TRUST_STRIP_ITEMS, COMPANY_DETAILS } from '../data/industrialData';

export default function TrustStrip() {
  return (
    <div id="trust-strip" className="w-full bg-[#F4E5DC] border-b border-[#D9D9D6] py-4 sm:py-5 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Verification Tag */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#A94728] uppercase tracking-wider font-bold border-r border-[#A94728]/25 pr-6">
          <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
          <span>INDUSTRIAL GRADE SUPPLY</span>
        </div>

        {/* 4 Strip Items */}
        <div className="w-full flex-1 flex flex-wrap items-center justify-around gap-y-3 gap-x-6 text-center">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="tech-label text-[#202427] font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-[#A94728] transition-colors">
                {item}
              </span>
              {index < TRUST_STRIP_ITEMS.length - 1 && (
                <span className="text-[#A94728] font-mono text-xs hidden sm:inline">
                  •
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Location & Sector indicator */}
        <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#202427]/70 border-l border-[#A94728]/25 pl-6 font-semibold">
          <span>MUMBAI, INDIA</span>
        </div>
      </div>
    </div>
  );
}
