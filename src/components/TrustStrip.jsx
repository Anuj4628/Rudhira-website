import React from 'react';
import { VERIFIED_TRUST_METRICS } from '../data/industrialData';

export default function TrustStrip() {
  return (
    <section
      id="trust-strip"
      className="relative z-30 w-full bg-[#123F91] py-7 sm:py-8 lg:py-9 px-4 sm:px-6 lg:px-8 select-none"
      aria-label="Verified Industrial Accreditations & Supply Capabilities"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {VERIFIED_TRUST_METRICS.map((item, index) => (
            <div
              key={item.metric}
              className={`flex flex-col text-left justify-center py-4 sm:py-2 px-3 sm:px-6 lg:px-8 ${
                index === 0 ? 'sm:pl-0' : ''
              } ${index === VERIFIED_TRUST_METRICS.length - 1 ? 'sm:pr-0' : ''}`}
            >
              {/* Primary Large Number / Heading */}
              <div className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold text-white tracking-tight font-sans leading-none">
                {item.metric}
              </div>

              {/* Secondary Label */}
              <div className="mt-2.5 text-sm sm:text-[15px] font-bold text-white uppercase tracking-wider font-sans leading-snug">
                {item.label}
              </div>

              {/* Supporting Detail */}
              <div className="mt-1 text-xs sm:text-sm text-white/80 font-normal font-sans leading-relaxed">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

