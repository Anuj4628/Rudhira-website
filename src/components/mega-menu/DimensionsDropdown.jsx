import React from 'react';
import { DIMENSIONS_CATEGORIES } from '../../data/dimensionsData';

export default function DimensionsDropdown({
  isOpen,
  onClose,
  onNavigate,
  onMouseEnter,
  onMouseLeave
}) {
  if (!isOpen) return null;

  const handleSelectCategory = (e, cat) => {
    e.preventDefault();
    if (!cat.active) return;
    if (onClose) onClose();
    if (onNavigate) {
      onNavigate(cat.slug, null, cat.path);
    }
  };

  return (
    <div
      role="menu"
      aria-label="Dimensions Dropdown"
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[210px] pointer-events-auto z-50 select-none dimensions-dropdown-enter"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Seamless invisible bridge extending up into the parent navbar item to guarantee zero hover gap */}
      <div
        className="absolute -top-3 left-0 right-0 h-6 bg-transparent pointer-events-auto"
        aria-hidden="true"
      />

      {/* Upward notch pointing directly to the Dimensions nav link */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#123F91] rotate-45 border-t border-l border-[#0B2863] pointer-events-none z-10" />

      {/* Actual Dropdown Card */}
      <div className="relative bg-[#123F91] border border-[#0B2863] rounded-xl shadow-2xl shadow-black/35 p-1.5 text-white overflow-hidden">
        <div className="flex flex-col space-y-0.5">
          {DIMENSIONS_CATEGORIES.map((cat) => {
            const isActive = cat.active;

            return (
              <button
                key={cat.id}
                type="button"
                disabled={!isActive}
                onClick={(e) => handleSelectCategory(e, cat)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150 flex items-center justify-between ${
                  isActive
                    ? 'text-white hover:bg-white/15 cursor-pointer'
                    : 'text-white/40 cursor-not-allowed opacity-60'
                }`}
              >
                <span>{cat.name}</span>
                {!isActive && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                    Soon
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
