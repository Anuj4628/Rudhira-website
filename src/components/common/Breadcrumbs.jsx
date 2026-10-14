import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [], onNavigate }) {
  if (!items || items.length === 0) return null;

  const handleClick = (e, item) => {
    e.preventDefault();
    if (item.onClick) {
      item.onClick();
    } else if (onNavigate && item.page) {
      onNavigate(item.page, item.anchor || null, item.path || item.href);
    } else if (onNavigate && item.path) {
      onNavigate(null, null, item.path);
    } else if (item.href) {
      window.location.href = item.href;
    }
  };

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className="py-3 px-4 sm:px-6 lg:px-8 bg-[#F4E5DC]/40 border-b border-[#D9D9D6] text-xs font-mono select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-[#202427]/70">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
          }}
          className="inline-flex items-center gap-1 text-[#202427] hover:text-[#A94728] transition-colors font-semibold"
          title="Home"
        >
          <Home className="w-3.5 h-3.5 text-[#A94728]" />
          <span>Home</span>
        </a>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.label + index}>
              <ChevronRight className="w-3 h-3 text-[#A94728]/60 flex-shrink-0" />
              {isLast ? (
                <span
                  className="font-bold text-[#A94728] truncate max-w-[200px] sm:max-w-xs md:max-w-md"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || '#'}
                  onClick={(e) => handleClick(e, item)}
                  className="hover:text-[#A94728] transition-colors truncate max-w-[150px] sm:max-w-xs"
                >
                  {item.label}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
