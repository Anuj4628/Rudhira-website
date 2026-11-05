import React, { useState } from 'react';
import {
  FileText,
  Search,
  Ruler,
  Layers,
  ShieldCheck,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  ExternalLink,
  Info
} from 'lucide-react';
import {
  DIMENSIONS_CATEGORIES,
  FLANGES_CLASS_150,
  FLANGES_CLASS_300,
  FLANGES_CLASS_600,
  FLANGES_CLASS_900,
  FLANGES_CLASS_1500,
  FLANGES_CLASS_2500,
  FLANGES_WELDING_NECK_BORES,
  FLANGES_ANSI_WEIGHTS,
  FLANGES_PN10,
  FLANGES_PN16,
  FLANGES_BS10_TABLES,
  FLANGES_GENERAL_TOLERANCES
} from '../../data/dimensionsData';
import FinalCTA from '../../components/FinalCTA';

// Diagram asset imports
import asmeDiagram from '../../assets/dimensions/diagrams/flanges_asme_b16_5_types.png';
import wnBoreDiagram from '../../assets/dimensions/diagrams/flange_welding_neck_bore.png';
import dinDiagram from '../../assets/dimensions/diagrams/flanges_din_en1092_types.png';
import bs10Diagram from '../../assets/dimensions/diagrams/flanges_bs10_plate.png';

export default function FlangesDimensionsPage({ onNavigate, onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('asme-150-300');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filterRows = (rows, keys) => {
    if (!searchQuery.trim()) return rows;
    const q = searchQuery.toLowerCase().trim();
    return rows.filter((row) =>
      keys.some((k) => String(row[k] || '').toLowerCase().includes(q))
    );
  };

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
            <span className="text-white font-semibold">Flanges</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <Ruler className="w-3.5 h-3.5" />
                TECHNICAL SPECIFICATION CATALOGUE
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
                Flanges Dimensions
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#EEF3FA]/90 leading-relaxed font-sans">
                Explore comprehensive technical dimensions, dimensional tables, weights, and engineering drawings for ASME B16.5, EN 1092-1 / DIN, and BS-10 industrial flanges across all pressure classes.
              </p>
            </div>

            {/* Action Button: Request Quote */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Flanges', 'All Standards')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#123F91] hover:bg-[#EEF3FA] font-bold text-sm shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Request Quote</span>
              </button>
            </div>
          </div>

          {/* 3 Active Categories Switcher Tabs */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/70 mr-2">
              SELECT CATALOGUE:
            </span>
            {[
              { id: 'flanges', name: 'Flanges (Current)', path: '/dimensions/flanges', current: true },
              { id: 'forge-fittings', name: 'Forge Fitting', path: '/dimensions/forge-fittings' },
              { id: 'buttweld-fittings', name: 'Buttweld Fitting', path: '/dimensions/buttweld-fittings' },
              { id: 'fasteners', name: 'Fasteners', path: '/dimensions/fasteners' },
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
        {/* Table Group Navigation & Search Filter */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Horizontal Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 sidebar-sticky-scroll">
              {[
                { id: 'asme-150-300', label: 'ASME Class 150 & 300' },
                { id: 'asme-600-900', label: 'ASME Class 600 & 900' },
                { id: 'asme-1500-2500', label: 'ASME Class 1500 & 2500' },
                { id: 'bores-weights', label: 'Bores & Weights' },
                { id: 'din-pn', label: 'DIN EN 1092-1 (PN 10 & 16)' },
                { id: 'bs10', label: 'BS-10 Tables D, E, F, H' },
                { id: 'tolerances', label: 'General Tolerances' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === t.id
                      ? 'bg-[#123F91] text-white shadow-sm'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search pipe size, OD, DN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#123F91] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 3. TECHNICAL DRAWINGS & TABLES ACCORDING TO ACTIVE TAB */}

        {/* TAB 1: ASME Class 150 & 300 */}
        {activeTab === 'asme-150-300' && (
          <div className="space-y-10">
            {/* Diagram Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#102D65]">
                    ASME B16.5 Flange Cross-Sectional Engineering Reference
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Threaded, Socket Weld (1/2" to 2 1/2"), Slip-On, Blind, Lapped, and Welding Neck.
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(asmeDiagram)}
                  className="p-2 text-gray-500 hover:text-[#123F91] rounded-lg hover:bg-gray-100 transition-colors"
                  title="Expand Diagram"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              <div
                onClick={() => setLightboxImage(asmeDiagram)}
                className="cursor-pointer bg-slate-50 p-3 sm:p-4 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden hover:opacity-95"
              >
                <img
                  src={asmeDiagram}
                  alt="ASME B16.5 Flange Cross Sections"
                  className="w-full max-h-[180px] object-contain"
                />
              </div>
            </div>

            {/* Table 1: Class 150 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#123F91] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_CLASS_150.title}</h2>
                  <span className="text-xs text-white/80">{FLANGES_CLASS_150.standard} • Height of RF: 1.5 mm</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  {FLANGES_CLASS_150.rows.length} SIZES (1/2" - 24")
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_CLASS_150.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_CLASS_150.rows, ['nps', 'o', 'w']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_CLASS_150.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Class 300 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#0B2863] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_CLASS_300.title}</h2>
                  <span className="text-xs text-white/80">{FLANGES_CLASS_300.standard} • Height of RF: 1.5 mm</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  {FLANGES_CLASS_300.rows.length} SIZES (1/2" - 24")
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_CLASS_300.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_CLASS_300.rows, ['nps', 'o', 'w']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_CLASS_300.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ASME Class 600 & 900 */}
        {activeTab === 'asme-600-900' && (
          <div className="space-y-10">
            {/* Table 1: Class 600 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#123F91] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_CLASS_600.title}</h2>
                  <span className="text-xs text-white/80">{FLANGES_CLASS_600.standard} • Height of RF: 6.4 mm</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  {FLANGES_CLASS_600.rows.length} SIZES (1/2" - 24")
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_CLASS_600.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_CLASS_600.rows, ['nps', 'o', 'w']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_CLASS_600.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Class 900 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#0B2863] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_CLASS_900.title}</h2>
                  <span className="text-xs text-white/80">{FLANGES_CLASS_900.standard} • Height of RF: 6.4 mm</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  {FLANGES_CLASS_900.rows.length} SIZES (1/2" - 24")
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_CLASS_900.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_CLASS_900.rows, ['nps', 'o', 'w']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_CLASS_900.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ASME Class 1500 & 2500 */}
        {activeTab === 'asme-1500-2500' && (
          <div className="space-y-10">
            {/* Table 1: Class 1500 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#123F91] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_CLASS_1500.title}</h2>
                  <span className="text-xs text-white/80">{FLANGES_CLASS_1500.standard} • Height of RF: 6.4 mm</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  {FLANGES_CLASS_1500.rows.length} SIZES (1/2" - 24")
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_CLASS_1500.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_CLASS_1500.rows, ['nps', 'o', 'w']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_CLASS_1500.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Class 2500 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#0B2863] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_CLASS_2500.title}</h2>
                  <span className="text-xs text-white/80">{FLANGES_CLASS_2500.standard} • Height of RF: 6.4 mm</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  {FLANGES_CLASS_2500.rows.length} SIZES (1/2" - 12")
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_CLASS_2500.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_CLASS_2500.rows, ['nps', 'o', 'w']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_CLASS_2500.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Bores & Weights */}
        {activeTab === 'bores-weights' && (
          <div className="space-y-10">
            {/* Diagram Card for WN Bore */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#102D65]">
                    Welding Neck Flange Bore Profile (B)
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Standard schedule bore matching to pipe schedules (Sch 20 through XXS).
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(wnBoreDiagram)}
                  className="p-2 text-gray-500 hover:text-[#123F91] rounded-lg hover:bg-gray-100 transition-colors"
                  title="Expand Diagram"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              <div
                onClick={() => setLightboxImage(wnBoreDiagram)}
                className="cursor-pointer bg-slate-50 p-4 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden hover:opacity-95"
              >
                <img
                  src={wnBoreDiagram}
                  alt="Welding Neck Flange Bore Diagram"
                  className="max-h-[160px] object-contain"
                />
              </div>
            </div>

            {/* Table 1: Welding Neck Bores */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#123F91] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_WELDING_NECK_BORES.title}</h2>
                  <span className="text-xs text-white/80">Class 150# • All dimensions in Millimeters</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  15 MM - 600 MM
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_WELDING_NECK_BORES.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_WELDING_NECK_BORES.rows, ['nps', 'od']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_WELDING_NECK_BORES.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: ANSI Weights */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#0B2863] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_ANSI_WEIGHTS.title}</h2>
                  <span className="text-xs text-white/80">Standard Weld Neck & Slip-On Flanges (150# to 900#)</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  WEIGHT (KGS)
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_ANSI_WEIGHTS.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_ANSI_WEIGHTS.rows, ['nb', 'inch']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_ANSI_WEIGHTS.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: DIN EN 1092-1 (PN 10 & PN 16) */}
        {activeTab === 'din-pn' && (
          <div className="space-y-10">
            {/* Diagram Card for DIN Types */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#102D65]">
                    EN 1092-1 / DIN Flange Types Engineering Reference
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Types 01, 02/32, 02/33, 02/35, 02/36, 02/37, 04/34, 05, 11, 12, 13, 21.
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(dinDiagram)}
                  className="p-2 text-gray-500 hover:text-[#123F91] rounded-lg hover:bg-gray-100 transition-colors"
                  title="Expand Diagram"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              <div
                onClick={() => setLightboxImage(dinDiagram)}
                className="cursor-pointer bg-slate-50 p-4 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden hover:opacity-95"
              >
                <img
                  src={dinDiagram}
                  alt="EN 1092-1 / DIN Flange Types"
                  className="w-full max-h-[220px] object-contain"
                />
              </div>
            </div>

            {/* Table 1: PN 10 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#123F91] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_PN10.title}</h2>
                  <span className="text-xs text-white/80">{FLANGES_PN10.standard} • DN 10 to DN 800</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  PN 10 RATING
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_PN10.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_PN10.rows, ['dn', 'd', 'k']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_PN10.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: PN 16 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#0B2863] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FLANGES_PN16.title}</h2>
                  <span className="text-xs text-white/80">{FLANGES_PN16.standard} • DN 10 to DN 800</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-2.5 py-1 rounded text-white">
                  PN 16 RATING
                </span>
              </div>

              <div className="overflow-x-auto max-h-[600px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                    <tr>
                      {FLANGES_PN16.columns.map((c) => (
                        <th key={c.key} className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono">
                    {filterRows(FLANGES_PN16.rows, ['dn', 'd', 'k']).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        {FLANGES_PN16.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 whitespace-nowrap border-r border-gray-200">
                            {r[c.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: BS-10 (Tables D, E, F, H) */}
        {activeTab === 'bs10' && (
          <div className="space-y-10">
            {/* Diagram Card for BS-10 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#102D65]">
                    BS-10 Plate Flange Cross Section
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    British Standard BS-10 Tables D, E, F, and H plate dimensions.
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(bs10Diagram)}
                  className="p-2 text-gray-500 hover:text-[#123F91] rounded-lg hover:bg-gray-100 transition-colors"
                  title="Expand Diagram"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              <div
                onClick={() => setLightboxImage(bs10Diagram)}
                className="cursor-pointer bg-slate-50 p-4 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden hover:opacity-95"
              >
                <img
                  src={bs10Diagram}
                  alt="BS-10 Plate Flange Diagram"
                  className="max-h-[140px] object-contain"
                />
              </div>
            </div>

            {/* 4 Tables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {FLANGES_BS10_TABLES.tables.map((tbl) => (
                <div key={tbl.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="bg-[#123F91] text-white px-5 py-3">
                    <h3 className="font-bold text-base">{tbl.name}</h3>
                    <p className="text-[11px] text-white/80 leading-snug mt-0.5">{tbl.subtitle}</p>
                  </div>

                  <div className="overflow-x-auto max-h-[460px] sidebar-sticky-scroll">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                        <tr>
                          <th className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">Size (mm)</th>
                          <th className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">Dia Flange</th>
                          <th className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">PCD</th>
                          <th className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">Bolts</th>
                          <th className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200">Bolt Dia</th>
                          <th className="px-3 py-2.5 whitespace-nowrap">Thickness</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 font-mono">
                        {filterRows(tbl.rows, ['nps', 'diaFlange', 'pcd']).map((r, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                            <td className="px-3 py-2 whitespace-nowrap border-r border-gray-200">{r.nps}</td>
                            <td className="px-3 py-2 whitespace-nowrap border-r border-gray-200">{r.diaFlange}</td>
                            <td className="px-3 py-2 whitespace-nowrap border-r border-gray-200">{r.pcd}</td>
                            <td className="px-3 py-2 whitespace-nowrap border-r border-gray-200">{r.numBolts}</td>
                            <td className="px-3 py-2 whitespace-nowrap border-r border-gray-200">{r.diaBolt}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{r.thk}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: General Tolerances */}
        {activeTab === 'tolerances' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <span className="font-mono text-xs font-bold text-[#123F91] uppercase tracking-wider">
                  SPECIFICATION COMPLIANCE
                </span>
                <h2 className="text-2xl font-extrabold text-[#102D65] mt-1">
                  {FLANGES_GENERAL_TOLERANCES.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Applicable standard dimensional tolerances across facings, flange thickness, welding ends, hubs, bores, and bolt circles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FLANGES_GENERAL_TOLERANCES.sections.map((sec, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#F7F9FC] border border-gray-200 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base text-[#102D65] mb-2">{sec.title}</h3>
                      <p className="text-xs text-gray-600 mb-3">{sec.description}</p>
                      <ul className="space-y-2">
                        {sec.items.map((item, i) => (
                          <li key={i} className="text-xs font-mono text-gray-800 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#123F91] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL FOR DIAGRAMS */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
              <h3 className="font-bold text-base text-[#102D65]">Technical Engineering Diagram</h3>
              <button
                onClick={() => setLightboxImage(null)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs font-bold cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
            <div className="flex items-center justify-center bg-slate-50 p-4 rounded-xl max-h-[75vh] overflow-auto">
              <img src={lightboxImage} alt="Engineering Drawing" className="max-w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* SHARED CTA */}
      <FinalCTA onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
