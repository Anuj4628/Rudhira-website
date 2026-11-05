import React, { useState } from 'react';
import {
  FileText,
  Search,
  Ruler,
  Layers,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Info
} from 'lucide-react';
import {
  DIMENSIONS_CATEGORIES,
  BUTTWELD_FITTINGS_B16_9
} from '../../data/dimensionsData';
import FinalCTA from '../../components/FinalCTA';

// Diagram asset import
import buttweldDiagram from '../../assets/dimensions/diagrams/buttweld_fittings_types.png';

export default function ButtweldFittingsDimensionsPage({ onNavigate, onOpenEnquiry }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredRows = BUTTWELD_FITTINGS_B16_9.rows.filter((row) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      String(row.inch).toLowerCase().includes(q) ||
      String(row.nb).toLowerCase().includes(q) ||
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
            <span className="text-white font-semibold">Buttweld Fittings</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <Ruler className="w-3.5 h-3.5" />
                TECHNICAL SPECIFICATION CATALOGUE
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
                Buttweld Fittings Dimensions
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#EEF3FA]/90 leading-relaxed font-sans">
                Dimensional reference standards for factory-made wrought butt-welding fittings to ANSI/ASME B16.9 (2018), including 90° & 45° elbows, equal tees, 180° returns, caps, and stub-ends from 1/2" NB to 36" NB.
              </p>
            </div>

            {/* Action Button: Request Quote */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Buttweld Fittings', 'ANSI B16.9')}
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
              { id: 'flanges', name: 'Flanges', path: '/dimensions/flanges' },
              { id: 'forge-fittings', name: 'Forge Fitting', path: '/dimensions/forge-fittings' },
              { id: 'buttweld-fittings', name: 'Buttweld Fitting (Current)', path: '/dimensions/buttweld-fittings', current: true },
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
        {/* Engineering Diagrams Showcase */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-extrabold text-base sm:text-lg text-[#102D65]">
                ANSI B16.9 Technical Fitting Profiles & Dimension Identifiers
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                90° Long Radius Elbow (A), 45° Elbow (B), 90° Short Radius Elbow (N), 180° Returns (F, G, R, M), Equal Tee (C, D), Caps (E), and Stub-Ends (S, L).
              </p>
            </div>
            <button
              onClick={() => setLightboxOpen(true)}
              className="p-2 text-gray-500 hover:text-[#123F91] rounded-lg hover:bg-gray-100 transition-colors"
              title="Expand Diagram"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
          <div
            onClick={() => setLightboxOpen(true)}
            className="cursor-pointer bg-slate-50 p-4 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden hover:opacity-95"
          >
            <img
              src={buttweldDiagram}
              alt="ANSI B16.9 Fitting Diagrams"
              className="w-full max-h-[190px] object-contain"
            />
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold bg-[#123F91]/10 text-[#123F91] px-3 py-1.5 rounded-lg">
              STANDARD: ANSI B16.9 (2018)
            </span>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Showing {filteredRows.length} of {BUTTWELD_FITTINGS_B16_9.rows.length} nominal sizes
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search size, NB, OD..."
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

        {/* Technical Data Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-10">
          <div className="bg-[#123F91] text-white px-5 py-4 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-base sm:text-lg">{BUTTWELD_FITTINGS_B16_9.title}</h2>
              <span className="text-xs text-white/80">{BUTTWELD_FITTINGS_B16_9.standard} • All Dimensions in Millimeters</span>
            </div>
            <span className="text-xs font-mono bg-white/20 px-3 py-1 rounded text-white font-bold">
              1/2" NB TO 36" NB
            </span>
          </div>

          <div className="overflow-x-auto max-h-[700px] sidebar-sticky-scroll">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300">
                <tr>
                  {BUTTWELD_FITTINGS_B16_9.columns.map((c) => (
                    <th key={c.key} className="px-3.5 py-3 whitespace-nowrap border-r border-gray-200 text-center">
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-mono text-center">
                {filteredRows.map((r, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                    <td className="px-3 py-2.5 font-bold text-[#123F91] border-r border-gray-200">{r.inch}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.nb}</td>
                    <td className="px-3 py-2.5 font-semibold border-r border-gray-200">{r.od}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.a}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.b}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.c}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.n}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.e}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.f}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.g}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.r}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.m}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.s}</td>
                    <td className="px-3 py-2.5 border-r border-gray-200">{r.shortL}</td>
                    <td className="px-3 py-2.5">{r.longL}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Notes Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-extrabold text-base text-[#102D65] mb-3 flex items-center gap-2">
            <Info className="w-4 h-4 text-[#123F91]" />
            <span>ANSI B16.9 Dimensional Reference Notes</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-gray-700 font-sans">
            {BUTTWELD_FITTINGS_B16_9.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#123F91] mt-0.5 shrink-0" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
              <h3 className="font-bold text-base text-[#102D65]">Buttweld Fitting Diagrams (ANSI B16.9)</h3>
              <button
                onClick={() => setLightboxOpen(false)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs font-bold cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
            <div className="flex items-center justify-center bg-slate-50 p-4 rounded-xl max-h-[75vh] overflow-auto">
              <img src={buttweldDiagram} alt="Buttweld Drawings" className="max-w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* SHARED CTA */}
      <FinalCTA onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
