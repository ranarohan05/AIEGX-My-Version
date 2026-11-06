import React from 'react';

export default function Logo({ 
  className = '', 
  imgClassName = 'w-11 h-11 sm:w-12 sm:h-12 lg:w-[68px] lg:h-[68px]', 
  showText = true, 
  showTagline = true,
  tagline = 'EMBEDDED & EDGE AI',
  href = '/', 
  _variant = 'default',
  onClick
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href === '/' || href === '#') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`inline-flex items-center gap-3 sm:gap-3.5 lg:gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] rounded-2xl p-0.5 ${className}`}
      aria-label="AIEGX Homepage"
    >
      {/* Official AIEGX Logo Mark: 64-72px on desktop, cleanly contained */}
      <div className="relative rounded-2xl overflow-hidden shadow-sm transition-all duration-300 transform group-hover:scale-105 flex-shrink-0 border border-white/10">
        <img 
          src="/images/aiegx-logo-official.png" 
          alt="AIEGX Logo" 
          className={`${imgClassName} object-contain rounded-2xl`}
        />
      </div>

      {/* Brand Wordmark & Compact Tagline */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="aiegx-wordmark text-[1.35rem] sm:text-2xl lg:text-[1.85rem] tracking-wider leading-none select-none">
            AIEGX
          </span>
          {showTagline && (
            <span className="site-header__tagline text-[13px] font-mono tracking-wider sm:tracking-widest text-[#64748B] dark:text-[#AAB6D0] uppercase font-semibold mt-1 sm:mt-1.5 leading-none select-none">
              {tagline}
            </span>
          )}
        </div>
      )}
    </a>
  );
}
