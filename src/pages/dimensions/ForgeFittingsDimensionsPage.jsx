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
  FORGED_SCREWED_FITTINGS_B16_11,
  FORGED_SOCKET_WELD_FITTINGS_B16_11
} from '../../data/dimensionsData';
import FinalCTA from '../../components/FinalCTA';

// Diagram asset imports
import threadedDiagram from '../../assets/dimensions/diagrams/forged_fittings_threaded_types.png';
import socketWeldDiagram from '../../assets/dimensions/diagrams/forged_fittings_socket_weld_types.png';

export default function ForgeFittingsDimensionsPage({ onNavigate, onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('threaded');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filterRows = (rows) => {
    if (!searchQuery.trim()) return rows;
    const q = searchQuery.toLowerCase().trim();
    return rows.filter(
      (r) =>
        String(r.nomBore).toLowerCase().includes(q) ||
        String(r.pipeOd).toLowerCase().includes(q)
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
            <span className="text-white font-semibold">Forge Fittings</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <Ruler className="w-3.5 h-3.5" />
                TECHNICAL SPECIFICATION CATALOGUE
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
                Forge Fittings Dimensions
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#EEF3FA]/90 leading-relaxed font-sans">
                High-pressure forged screwed (threaded) and socket-weld fittings manufactured to ASME B16.11 & ASA B2.1 across Class 3000# and 6000# LBS ratings from 1/8" NB to 4" NB.
              </p>
            </div>

            {/* Action Button: Request Quote */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Forge Fittings', 'ASME B16.11')}
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
              { id: 'forge-fittings', name: 'Forge Fitting (Current)', path: '/dimensions/forge-fittings', current: true },
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
        {/* Subcategory Tabs & Search Filter */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            {[
              { id: 'threaded', label: '1. Forged Screwed (Threaded) Fittings — ASME B16.11' },
              { id: 'socket-weld', label: '2. Socket Weld Fittings — ASME B16.11' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === t.id
                    ? 'bg-[#123F91] text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search nominal bore, OD..."
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

        {/* TAB 1: Forged Screwed (Threaded) Fittings */}
        {activeTab === 'threaded' && (
          <div className="space-y-8">
            {/* Technical Diagram */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-extrabold text-base sm:text-lg text-[#102D65]">
                    Threaded Fitting Technical Diagrams (ANSI B16.11 / ASA B2.1)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    90° Elbows, Tees, 45° Elbows, Unions, Couplings, Pipe Caps, Bushings, Hex Head Plugs, and Half Couplings (G/2).
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(threadedDiagram)}
                  className="p-2 text-gray-500 hover:text-[#123F91] rounded-lg hover:bg-gray-100 transition-colors"
                  title="Expand Diagram"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              <div
                onClick={() => setLightboxImage(threadedDiagram)}
                className="cursor-pointer bg-slate-50 p-4 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden hover:opacity-95"
              >
                <img
                  src={threadedDiagram}
                  alt="Forged Threaded Fittings"
                  className="w-full max-h-[160px] object-contain"
                />
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#123F91] text-white px-5 py-4 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FORGED_SCREWED_FITTINGS_B16_11.title}</h2>
                  <span className="text-xs text-white/80">{FORGED_SCREWED_FITTINGS_B16_11.standard} • 3000# & 6000# LBS</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-3 py-1 rounded text-white font-bold">
                  1/8" TO 4" BORE
                </span>
              </div>

              <div className="overflow-x-auto max-h-[700px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300 text-center">
                    <tr>
                      <th rowSpan="2" className="px-3 py-2.5 border-r border-gray-200">Nom Bore</th>
                      <th rowSpan="2" className="px-3 py-2.5 border-r border-gray-200">Pipe O.D.</th>
                      <th colSpan="6" className="px-3 py-1.5 border-r border-gray-200 bg-blue-100/70">3000 L.B.S.</th>
                      <th colSpan="6" className="px-3 py-1.5 border-r border-gray-200 bg-gray-200/80">Common Factors</th>
                      <th colSpan="6" className="px-3 py-1.5 bg-blue-200/70">6000 L.B.S.</th>
                    </tr>
                    <tr className="border-t border-gray-200 text-[11px]">
                      {/* 3000# */}
                      <th className="px-2.5 py-1.5 border-r border-gray-200">A</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">B</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">C</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">G</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">H</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">K</th>
                      {/* Common */}
                      <th className="px-2.5 py-1.5 border-r border-gray-200">D</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">E</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">F</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">I</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">J</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">L</th>
                      {/* 6000# */}
                      <th className="px-2.5 py-1.5 border-r border-gray-200">A</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">B</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">C</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">G</th>
                      <th className="px-2.5 py-1.5 border-r border-gray-200">H</th>
                      <th className="px-2.5 py-1.5">K</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono text-center">
                    {filterRows(FORGED_SCREWED_FITTINGS_B16_11.rows).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        <td className="px-3 py-2.5 font-bold text-[#123F91] border-r border-gray-200">{r.nomBore}</td>
                        <td className="px-3 py-2.5 font-semibold border-r border-gray-200">{r.pipeOd}</td>
                        {/* 3000# */}
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.a3k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.b3k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.c3k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.g3k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.h3k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.k3k}</td>
                        {/* Common */}
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.d}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.e}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.f}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.i}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.j}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.l}</td>
                        {/* 6000# */}
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.a6k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.b6k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.c6k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.g6k}</td>
                        <td className="px-2.5 py-2 border-r border-gray-200">{r.h6k}</td>
                        <td className="px-2.5 py-2">{r.k6k}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-extrabold text-base text-[#102D65] mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#123F91]" />
                <span>Forged Screwed Fittings Technical Reference</span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-700 font-sans">
                {FORGED_SCREWED_FITTINGS_B16_11.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-gray-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#123F91] mt-0.5 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: Socket Weld Fittings */}
        {activeTab === 'socket-weld' && (
          <div className="space-y-8">
            {/* Technical Diagram */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-extrabold text-base sm:text-lg text-[#102D65]">
                    Socket Weld Fitting Technical Diagrams (ANSI B16.11 - 2016)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    90° Elbows, Tees, 45° Elbows, Unions, Couplings, Reducers, Half Couplings, and Caps.
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(socketWeldDiagram)}
                  className="p-2 text-gray-500 hover:text-[#123F91] rounded-lg hover:bg-gray-100 transition-colors"
                  title="Expand Diagram"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              <div
                onClick={() => setLightboxImage(socketWeldDiagram)}
                className="cursor-pointer bg-slate-50 p-4 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden hover:opacity-95"
              >
                <img
                  src={socketWeldDiagram}
                  alt="Socket Weld Fittings"
                  className="w-full max-h-[160px] object-contain"
                />
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#0B2863] text-white px-5 py-4 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base sm:text-lg">{FORGED_SOCKET_WELD_FITTINGS_B16_11.title}</h2>
                  <span className="text-xs text-white/80">{FORGED_SOCKET_WELD_FITTINGS_B16_11.standard} • 3000# & 6000# LBS</span>
                </div>
                <span className="text-xs font-mono bg-white/20 px-3 py-1 rounded text-white font-bold">
                  1/8" TO 4" BORE
                </span>
              </div>

              <div className="overflow-x-auto max-h-[700px] sidebar-sticky-scroll">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF3FA] text-[#102D65] uppercase font-bold sticky top-0 z-10 border-b border-gray-300 text-center">
                    <tr>
                      <th rowSpan="2" className="px-3 py-2.5 border-r border-gray-200">Nom Bore</th>
                      <th rowSpan="2" className="px-3 py-2.5 border-r border-gray-200">Pipe O.D.</th>
                      <th colSpan="9" className="px-3 py-1.5 border-r border-gray-200 bg-blue-100/70">3000 L.B.S.</th>
                      <th colSpan="4" className="px-3 py-1.5 border-r border-gray-200 bg-gray-200/80">Common Factors</th>
                      <th colSpan="5" className="px-3 py-1.5 bg-blue-200/70">6000 L.B.S.</th>
                    </tr>
                    <tr className="border-t border-gray-200 text-[11px]">
                      {/* 3000# */}
                      <th className="px-2 py-1.5 border-r border-gray-200">A</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">B</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">K</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">J</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">L</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">M</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">N</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">P</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">Q</th>
                      {/* Common */}
                      <th className="px-2 py-1.5 border-r border-gray-200">C min</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">D min</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">O min</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">O max</th>
                      {/* 6000# */}
                      <th className="px-2 py-1.5 border-r border-gray-200">A</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">B</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">M</th>
                      <th className="px-2 py-1.5 border-r border-gray-200">K</th>
                      <th className="px-2 py-1.5">N</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-mono text-center">
                    {filterRows(FORGED_SOCKET_WELD_FITTINGS_B16_11.rows).map((r, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC] hover:bg-blue-50/50'}>
                        <td className="px-3 py-2.5 font-bold text-[#123F91] border-r border-gray-200">{r.nomBore}</td>
                        <td className="px-3 py-2.5 font-semibold border-r border-gray-200">{r.pipeOd}</td>
                        {/* 3000# */}
                        <td className="px-2 py-2 border-r border-gray-200">{r.a3k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.b3k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.k3k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.j3k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.l3k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.m3k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.n3k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.p3k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.q3k}</td>
                        {/* Common */}
                        <td className="px-2 py-2 border-r border-gray-200">{r.cMin}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.dMin}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.oMin}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.oMax}</td>
                        {/* 6000# */}
                        <td className="px-2 py-2 border-r border-gray-200">{r.a6k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.b6k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.m6k}</td>
                        <td className="px-2 py-2 border-r border-gray-200">{r.k6k}</td>
                        <td className="px-2 py-2">{r.n6k}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-extrabold text-base text-[#102D65] mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#123F91]" />
                <span>Socket Weld Fittings Technical Reference</span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-700 font-sans">
                {FORGED_SOCKET_WELD_FITTINGS_B16_11.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-gray-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#123F91] mt-0.5 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
              <h3 className="font-bold text-base text-[#102D65]">Technical Diagram</h3>
              <button
                onClick={() => setLightboxImage(null)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs font-bold cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
            <div className="flex items-center justify-center bg-slate-50 p-4 rounded-xl max-h-[75vh] overflow-auto">
              <img src={lightboxImage} alt="Forge Fittings Drawings" className="max-w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* SHARED CTA */}
      <FinalCTA onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
