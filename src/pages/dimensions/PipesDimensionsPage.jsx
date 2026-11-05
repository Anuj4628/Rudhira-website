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
  PIPES_ASME_B36_10M
} from '../../data/dimensionsData';
import FinalCTA from '../../components/FinalCTA';

export default function PipesDimensionsPage({ onNavigate, onOpenEnquiry }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('standard-schedules');

  const filteredRows = PIPES_ASME_B36_10M.rows.filter((row) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      String(row.inch).toLowerCase().includes(q) ||
      String(row.od).toLowerCase().includes(q)
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
            <span className="text-white font-semibold">Pipes & Tubes</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <Ruler className="w-3.5 h-3.5" />
                TECHNICAL SPECIFICATION CATALOGUE
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
                Pipes & Tubes Dimensions
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#EEF3FA]/90 leading-relaxed font-sans">
                Comprehensive dimensional charts and nominal weights for ANSI / ASME B36.10M (welded and seamless wrought steel pipe) and ASME B36.19M (stainless steel) across wall thickness schedules 5S to XXS from 1/8" NB to 48" NB.
              </p>
            </div>

            {/* Action Button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Pipes & Tubes', 'ASME B36.10M / B36.19M')}
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
              { id: 'fasteners', name: 'Fasteners', path: '/dimensions/fasteners' },
              { id: 'pipes-tubes', name: 'Pipes & Tubes (Current)', path: '/dimensions/pipes-tubes', current: true }
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
        {/* Search & Sub-Tabs Filter */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* View Sub-Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('standard-schedules')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'standard-schedules'
                    ? 'bg-[#123F91] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Carbon & Commercial Schedules (STD, 40, XS, 80, 160, XXS)
              </button>
              <button
                onClick={() => setActiveTab('stainless-schedules')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'stainless-schedules'
                    ? 'bg-[#123F91] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Stainless Steel Schedules (5S, 10S, 40S, 80S)
              </button>
              <button
                onClick={() => setActiveTab('all-schedules')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all-schedules'
                    ? 'bg-[#123F91] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Comprehensive Master Matrix (All Schedules)
              </button>
            </div>

            {/* Instant Filter Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by NPS or OD (e.g. 2, 60.3, 10)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs font-sans rounded-lg border border-gray-200 focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91]"
              />
            </div>
          </div>
        </div>

        {/* DIMENSIONS TABLE */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-100 bg-[#FAF9F7] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 className="text-base font-bold text-[#1C2024]">
                ANSI / ASME B36.10M & B36.19M Dimensional Specification Table
              </h2>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                All dimensions in Millimeter (mm) • Weights in kg/mtr • Showing {filteredRows.length} pipe sizes
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#123F91]/10 text-[#123F91] font-bold">
              1/8" to 48" NB
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#123F91] text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-3.5 font-bold border-r border-[#0B2863] sticky left-0 bg-[#123F91] z-10">
                    NPS (inch)
                  </th>
                  <th className="py-3 px-3.5 font-bold border-r border-[#0B2863]">
                    OD (mm)
                  </th>

                  {/* Dynamic schedule columns based on active tab */}
                  {(activeTab === 'standard-schedules' || activeTab === 'all-schedules') && (
                    <>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center" colSpan="2">
                        STD (Standard)
                      </th>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center" colSpan="2">
                        SCH 40
                      </th>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center" colSpan="2">
                        XS (Extra Strong)
                      </th>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center" colSpan="2">
                        SCH 80
                      </th>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center" colSpan="2">
                        SCH 160
                      </th>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center" colSpan="2">
                        XXS
                      </th>
                    </>
                  )}

                  {(activeTab === 'stainless-schedules' || activeTab === 'all-schedules') && (
                    <>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center bg-[#0B2863]" colSpan="2">
                        SCH 5S
                      </th>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center bg-[#0B2863]" colSpan="2">
                        SCH 10S
                      </th>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center bg-[#0B2863]" colSpan="2">
                        SCH 40S
                      </th>
                      <th className="py-3 px-3 border-r border-[#0B2863] text-center bg-[#0B2863]" colSpan="2">
                        SCH 80S
                      </th>
                    </>
                  )}
                </tr>

                {/* Sub-header row for W.T. (mm) and Weight (kg/m) */}
                <tr className="bg-[#EEF3FA] text-[#123F91] font-mono text-[10px] border-b border-gray-200">
                  <th className="py-1.5 px-3.5 sticky left-0 bg-[#EEF3FA] z-10 border-r border-gray-200">Size</th>
                  <th className="py-1.5 px-3.5 border-r border-gray-200">mm</th>

                  {(activeTab === 'standard-schedules' || activeTab === 'all-schedules') && (
                    <>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300">kg/m</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300">kg/m</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300">kg/m</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300">kg/m</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300">kg/m</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300">kg/m</th>
                    </>
                  )}

                  {(activeTab === 'stainless-schedules' || activeTab === 'all-schedules') && (
                    <>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200 bg-blue-50/70">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300 bg-blue-50/70">kg/m</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200 bg-blue-50/70">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300 bg-blue-50/70">kg/m</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200 bg-blue-50/70">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300 bg-blue-50/70">kg/m</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-200 bg-blue-50/70">mm</th>
                      <th className="py-1.5 px-2 text-center border-r border-gray-300 bg-blue-50/70">kg/m</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRows.length > 0 ? (
                  filteredRows.map((row, idx) => (
                    <tr
                      key={row.inch}
                      className={`hover:bg-[#EEF3FA]/70 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'
                      }`}
                    >
                      <td className="py-2.5 px-3.5 font-bold font-mono text-[#123F91] border-r border-gray-100 sticky left-0 bg-inherit z-10 whitespace-nowrap">
                        {row.inch}"
                      </td>
                      <td className="py-2.5 px-3.5 font-mono text-gray-800 border-r border-gray-100 whitespace-nowrap">
                        {row.od.toFixed(2)}
                      </td>

                      {(activeTab === 'standard-schedules' || activeTab === 'all-schedules') && (
                        <>
                          <td className="py-2 px-2 text-center font-mono text-gray-700 border-r border-gray-100">
                            {row.std_wt ? row.std_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200">
                            {row.std_kg ? row.std_kg.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-700 border-r border-gray-100">
                            {row.sch40_wt ? row.sch40_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200">
                            {row.sch40_kg ? row.sch40_kg.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-700 border-r border-gray-100">
                            {row.xs_wt ? row.xs_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200">
                            {row.xs_kg ? row.xs_kg.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-700 border-r border-gray-100">
                            {row.sch80_wt ? row.sch80_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200">
                            {row.sch80_kg ? row.sch80_kg.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-700 border-r border-gray-100">
                            {row.sch160_wt ? row.sch160_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200">
                            {row.sch160_kg ? row.sch160_kg.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-700 border-r border-gray-100">
                            {row.xxs_wt ? row.xxs_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200">
                            {row.xxs_kg ? row.xxs_kg.toFixed(2) : '-'}
                          </td>
                        </>
                      )}

                      {(activeTab === 'stainless-schedules' || activeTab === 'all-schedules') && (
                        <>
                          <td className="py-2 px-2 text-center font-mono text-[#123F91] border-r border-gray-100 bg-blue-50/30">
                            {row.sch5s_wt ? row.sch5s_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200 bg-blue-50/30">
                            {row.sch5s_kg ? row.sch5s_kg.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-[#123F91] border-r border-gray-100 bg-blue-50/30">
                            {row.sch10s_wt ? row.sch10s_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200 bg-blue-50/30">
                            {row.sch10s_kg ? row.sch10s_kg.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-[#123F91] border-r border-gray-100 bg-blue-50/30">
                            {row.sch40s_wt ? row.sch40s_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200 bg-blue-50/30">
                            {row.sch40s_kg ? row.sch40s_kg.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-[#123F91] border-r border-gray-100 bg-blue-50/30">
                            {row.sch80s_wt ? row.sch80s_wt.toFixed(2) : '-'}
                          </td>
                          <td className="py-2 px-2 text-center font-mono text-gray-500 border-r border-gray-200 bg-blue-50/30">
                            {row.sch80s_kg ? row.sch80s_kg.toFixed(2) : '-'}
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="18" className="py-8 text-center text-gray-400 font-mono text-xs">
                      No pipe sizes matching "{searchQuery}". Try searching by NPS (e.g. 1/2, 2, 8) or OD (e.g. 60.3, 219.1).
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Notes Card */}
        <div className="bg-[#FAF9F7] rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-[#123F91]" />
            <h4 className="font-bold text-sm text-[#1C2024]">
              ASME B36.10M / B36.19M Engineering Specifications & Tolerances
            </h4>
          </div>
          <ul className="space-y-2 text-xs font-sans text-gray-600">
            {PIPES_ASME_B36_10M.notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123F91] mt-1.5 shrink-0" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SHARED CTA */}
      <FinalCTA onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
