import React, { useEffect, useRef } from 'react';
import { 
  X, 
  ChevronRight, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

const aboutUsData = [
  {
    category: 'Why Aiegx & Technology',
    icon: Building2,
    items: [
      { name: 'Why Build with Aiegx', href: '#why-aiegx' },
      { name: '10+ Year Longevity Supply Guarantee', href: '#why-aiegx' },
      { name: 'Pin-Compatible System-on-Modules', href: '#products' },
      { name: 'Pre-Certified Linux & RTOS Stacks', href: '#developers' }
    ]
  },
  {
    category: 'Quality & Reliability',
    icon: ShieldCheck,
    items: [
      { name: 'Industrial Quality Standards (ISO 9001)', href: '#why-aiegx' },
      { name: 'Extended Temperature Testing (-40°C to +85°C)', href: '#why-aiegx' },
      { name: 'HALT / HASS Reliability Data', href: '#why-aiegx' },
      { name: 'Lifecycle & Longevity Roadmap', href: '#why-aiegx' }
    ]
  },
  {
    category: 'Ecosystem & Support',
    icon: Users,
    items: [
      { name: 'Global Certified Partner Network', href: '#solutions' },
      { name: 'Carrier Board Engineering Services', href: '#developers' },
      { name: 'Technical Support & Datasheet Library', href: '#developers' },
      { name: 'Connect with Hardware Specialist', href: '#why-aiegx' }
    ]
  }
];

export default function AboutUsMegaMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        const toggleBtn = document.getElementById('navbar-about-toggle');
        if (toggleBtn && toggleBtn.contains(e.target)) return;
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div 
        ref={menuRef}
        id="about-mega-menu"
        className="mega-menu-panel fixed left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
        role="dialog"
        aria-label="About Us Mega Menu"
      >
        <div className="bg-white/95 dark:bg-[#101936]/98 backdrop-blur-2xl border border-[#DCE6F3] dark:border-white/10 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/80 overflow-hidden text-slate-900 dark:text-white flex flex-col max-h-[min(590px,calc(100vh-var(--mega-menu-top)-12px))] p-6 sm:p-7">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DCE6F3] dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-[#17264D] border border-[#DCE6F3] dark:border-white/10 text-[#0284C7] dark:text-[#42D9F5]">
                <Building2 className="w-4 h-4" />
              </div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-900 dark:text-white uppercase">
                ABOUT US
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#0284C7] dark:focus:ring-[#42D9F5]"
              aria-label="Close menu"
              title="Close Menu (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* About Us Navigation Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto mega-menu-scroll pr-1">
            {aboutUsData.map((sec, sIdx) => {
              const Icon = sec.icon;
              return (
                <div key={sIdx} className="space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#DCE6F3] dark:border-white/10">
                    <Icon className="w-4 h-4 text-[#0284C7] dark:text-[#42D9F5]" />
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                      {sec.category}
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    {sec.items.map((item, iIdx) => (
                      <a
                        key={iIdx}
                        href={item.href}
                        onClick={(e) => {
                          onClose();
                          if (item.href && item.href.startsWith('#') && window.location.pathname !== '/') {
                            e.preventDefault();
                            window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: `/${item.href}` }));
                            setTimeout(() => {
                              const el = document.getElementById(item.href.replace('#', ''));
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 120);
                          }
                        }}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/5 group transition-all duration-150"
                      >
                        <span className="group-hover:text-[#0284C7] dark:group-hover:text-[#42D9F5] transition-colors leading-snug">{item.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] dark:text-white/20 dark:group-hover:text-[#42D9F5] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar */}
          <div className="mt-7 pt-4 border-t border-[#DCE6F3] dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-600 dark:text-white/60">
              Pioneering high-reliability embedded compute, edge AI silicon, and carrier board solutions.
            </span>
            <a
              href="#why-aiegx"
              onClick={(e) => {
                onClose();
                if (window.location.pathname !== '/') {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/#why-aiegx' }));
                  setTimeout(() => {
                    const el = document.getElementById('why-aiegx') || document.getElementById('engineering-capabilities');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 120);
                }
              }}
              className="font-mono text-[#0284C7] dark:text-[#42D9F5] hover:underline flex items-center gap-1.5 font-semibold"
            >
              <span>Learn More About Aiegx</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
