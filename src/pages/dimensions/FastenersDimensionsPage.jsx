import React, { useState } from 'react';
import {
  FileText,
  Search,
  Ruler,
  Layers,
  ChevronRight,
  CheckCircle2,
  Info
} from 'lucide-react';
import {
  DIMENSIONS_CATEGORIES,
  FASTENERS_SCREW_SIZES,
  FASTENERS_STANDARD_THREADS
} from '../../data/dimensionsData';
import FinalCTA from '../../components/FinalCTA';

export default function FastenersDimensionsPage({ onNavigate, onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('screw-sizes');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter screw sizes
  const filteredScrews = FASTENERS_SCREW_SIZES.rows.filter((row) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      row.screwSize.toLowerCase().includes(q) ||
      row.fraction.toLowerCase().includes(q) ||
      row.decimal.toLowerCase().includes(q) ||
      row.mm.toLowerCase().includes(q)
    );
  });

  // Filter threads
  const filteredThreads = FASTENERS_STANDARD_THREADS.rows.filter((row) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      row.size.toLowerCase().includes(q) ||
      row.unc.toLowerCase().includes(q) ||
      row.unf.toLowerCase().includes(q) ||
      row.majorDia.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#171A1C] pt-[92px] sm:pt-[104px] md:pt-[116px] lg:pt-[128px]">
      {/* 1. TOP HERO & BREADCRUMBS BANNER */}
      <div className="bg-[#123F91] text-white border-b border-[#0B2863] py-10 sm:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-steel-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-4 font-sans">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white/60">Dimensions</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white font-semibold">Fasteners</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <Ruler className="w-3.5 h-3.5" />
                TECHNICAL SPECIFICATION CATALOGUE
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
                Fasteners Dimensions
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#EEF3FA]/90 leading-relaxed font-sans">
                Authoritative dimensional reference for machine screw gauge sizes (#1 to #24), fractional and millimeter equivalents, along with ASME B1.1 Standard Unified Threads (UNC Coarse & UNF Fine) from 1/4" to 1".
              </p>
            </div>

            {/* Action Button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Fasteners', 'Standard UNC / UNF & Metric')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#123F91] hover:bg-[#EEF3FA] font-bold text-sm shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Request Quote</span>
              </button>
            </div>
          </div>

          {/* 5 Active Categories Switcher Tabs */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/70 mr-2">
              SELECT CATALOGUE:
            </span>
            {[
              { id: 'flanges', name: 'Flanges', path: '/dimensions/flanges' },
              { id: 'forge-fittings', name: 'Forge Fitting', path: '/dimensions/forge-fittings' },
              { id: 'buttweld-fittings', name: 'Buttweld Fitting', path: '/dimensions/buttweld-fittings' },
              { id: 'fasteners', name: 'Fasteners (Current)', path: '/dimensions/fasteners', current: true },
              { id: 'pipes-tubes', name: 'Pipes & Tubes', path: '/dimensions/pipes-tubes' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => onNavigate && onNavigate(tab.id, null, tab.path)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  tab.current
                    ? 'bg-white text-[#123F91] shadow-md ring-2 ring-white/50'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN TECHNICAL SPECIFICATION SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Sub-Tabs & Filter Search Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('screw-sizes')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'screw-sizes'
                    ? 'bg-[#123F91] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                1. Screw Sizes Chart (#1 to #24)
              </button>
              <button
                onClick={() => setActiveTab('standard-threads')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'standard-threads'
                    ? 'bg-[#123F91] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                2. Standard Threads (UNC Coarse & UNF Fine)
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search size, thread, mm (e.g. #10, 1/4, 6.35)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs font-sans rounded-lg border border-gray-200 focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91]"
              />
            </div>
          </div>
        </div>

        {/* TAB 1: SCREW SIZES TABLE */}
        {activeTab === 'screw-sizes' && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
            <div className="px-4 sm:px-6 py-4 border-b border-gray-100 bg-[#FAF9F7] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-base font-bold text-[#1C2024]">
                  {FASTENERS_SCREW_SIZES.title}
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Fractional, Decimal & Millimeter Conversions • Showing {filteredScrews.length} entries
                </p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#123F91]/10 text-[#123F91] font-bold">
                ANSI / ASME B18.6.3
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="bg-[#123F91] text-white font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold border-r border-[#0B2863]">
                      Screw Size (Gauge #)
                    </th>
                    <th className="py-3 px-4 font-bold border-r border-[#0B2863]">
                      Fractions (Inch)
                    </th>
                    <th className="py-3 px-4 font-bold border-r border-[#0B2863]">
                      Decimals (Inch)
                    </th>
                    <th className="py-3 px-4 font-bold">
                      Millimeter (mm)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredScrews.length > 0 ? (
                    filteredScrews.map((row, idx) => (
                      <tr
                        key={row.screwSize}
                        className={`hover:bg-[#EEF3FA]/70 transition-colors ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'
                        }`}
                      >
                        <td className="py-3 px-4 font-bold font-mono text-[#123F91] border-r border-gray-100 whitespace-nowrap">
                          {row.screwSize}
                        </td>
                        <td className="py-3 px-4 font-mono text-gray-800 border-r border-gray-100">
                          {row.fraction}
                        </td>
                        <td className="py-3 px-4 font-mono text-gray-700 border-r border-gray-100">
                          {row.decimal}
                        </td>
                        <td className="py-3 px-4 font-mono font-semibold text-[#102D65]">
                          {row.mm} mm
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-gray-400 font-mono text-xs">
                        No screw size matching "{searchQuery}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: STANDARD THREADS (UNC & UNF) */}
        {activeTab === 'standard-threads' && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
            <div className="px-4 sm:px-6 py-4 border-b border-gray-100 bg-[#FAF9F7] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-base font-bold text-[#1C2024]">
                  {FASTENERS_STANDARD_THREADS.title}
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Unified National Coarse (UNC) & Unified National Fine (UNF) • Showing {filteredThreads.length} sizes
                </p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#123F91]/10 text-[#123F91] font-bold">
                ASME / ANSI B1.1
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="bg-[#123F91] text-white font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold border-r border-[#0B2863]">
                      Nominal Diameter
                    </th>
                    <th className="py-3 px-4 font-bold border-r border-[#0B2863] text-center">
                      UNC (Coarse Thread)
                    </th>
                    <th className="py-3 px-4 font-bold border-r border-[#0B2863] text-center">
                      UNF (Fine Thread)
                    </th>
                    <th className="py-3 px-4 font-bold border-r border-[#0B2863] text-center">
                      UNC Pitch (TPI)
                    </th>
                    <th className="py-3 px-4 font-bold border-r border-[#0B2863] text-center">
                      UNF Pitch (TPI)
                    </th>
                    <th className="py-3 px-4 font-bold text-center">
                      Major Diameter (Metric)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredThreads.length > 0 ? (
                    filteredThreads.map((row, idx) => (
                      <tr
                        key={row.size}
                        className={`hover:bg-[#EEF3FA]/70 transition-colors ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'
                        }`}
                      >
                        <td className="py-3 px-4 font-bold font-mono text-[#123F91] border-r border-gray-100 whitespace-nowrap">
                          {row.size}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-[#1C2024] border-r border-gray-100 text-center bg-blue-50/30">
                          {row.unc}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-[#1C2024] border-r border-gray-100 text-center bg-blue-50/30">
                          {row.unf}
                        </td>
                        <td className="py-3 px-4 font-mono text-gray-700 border-r border-gray-100 text-center">
                          {row.uncTpi} threads/in
                        </td>
                        <td className="py-3 px-4 font-mono text-gray-700 border-r border-gray-100 text-center">
                          {row.unfTpi} threads/in
                        </td>
                        <td className="py-3 px-4 font-mono font-semibold text-[#102D65] text-center">
                          {row.majorDia}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-8 text-center text-gray-400 font-mono text-xs">
                        No thread size matching "{searchQuery}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Technical Engineering Reference & Notes */}
        <div className="bg-[#FAF9F7] rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-[#123F91]" />
            <h4 className="font-bold text-sm text-[#1C2024]">
              Industrial Fastener Thread & Sizing Guidelines
            </h4>
          </div>
          <ul className="space-y-2 text-xs font-sans text-gray-600">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123F91] mt-1.5 shrink-0" />
              <span>
                <strong>UNC (Unified National Coarse):</strong> Most commonly used thread for industrial applications, construction, and assembly. Better resistance to stripping and cross-threading.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123F91] mt-1.5 shrink-0" />
              <span>
                <strong>UNF (Unified National Fine):</strong> Higher tensile strength and finer adjustment capability. Extensively specified in aerospace, precision valves, and high-vibration applications.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123F91] mt-1.5 shrink-0" />
              <span>
                <strong>TPI:</strong> Threads Per Inch indicates thread pitch density. Coarse threads feature fewer threads per inch compared to fine threads of the same diameter.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123F91] mt-1.5 shrink-0" />
              <span>
                <strong>Materials Available:</strong> Available in Stainless Steel 304/304L, 316/316L, 310, 321, Duplex 2205, Super Duplex 2507, Inconel, Monel, Hastelloy, and High-Tensile Carbon Steel Grade 8.8 / 10.9 / 12.9.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* SHARED CTA */}
      <FinalCTA onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
