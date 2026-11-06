import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ChevronRight, 
  ArrowRight, 
  ExternalLink, 
  Cpu, 
  LifeBuoy, 
  ShieldCheck, 
  Users, 
  CheckCircle2
} from 'lucide-react';

// Comprehensive Developers Navigation Data Structure
const developersData = {
  carrier: {
    id: 'carrier',
    name: 'Design your Carrier Board',
    heading: 'DESIGN YOUR CARRIER BOARD',
    icon: Cpu,
    tagline: 'Complete reference schematics, Altium libraries, and high-speed PCB design guidelines.',
    featured: {
      title: 'Aiegx Hardware Design Guide v3.4',
      description: 'Step-by-step carrier board layout recommendations, impedance matching for PCIe/GbE, and power supply sequencing.',
      badge: 'Official Guide',
      ctaText: 'Download Design Package',
      href: '#developers'
    },
    links: [
      {
        title: 'Carrier Board Design',
        description: 'Design checklists, layout guidelines, high-speed routing rules, and stackup examples.',
        tag: 'Design Rules & Guidelines',
        href: '#developers'
      },
      {
        title: 'HW Service Partners',
        description: 'Certified turnkey hardware engineering firms specialized in custom Aiegx carrier development.',
        tag: 'Engineering Ecosystem',
        href: '#developers'
      },
      {
        title: 'Pinout Designer Tool',
        description: 'Interactive graphical pin multiplexing, signal routing verification, and device tree generator.',
        tag: 'Interactive CAD Tool',
        href: '#developers'
      }
    ]
  },

  support: {
    id: 'support',
    name: 'Technical Support',
    heading: 'TECHNICAL SUPPORT',
    icon: LifeBuoy,
    tagline: 'Direct engineering support, comprehensive datasheets, and active developer community.',
    featured: {
      title: 'Tier-1 Silicon Support Portal',
      description: 'Submit hardware schematics for review by Aiegx design engineers with guaranteed 24h turnaround.',
      badge: 'Direct Engineering',
      ctaText: 'Access Support Portal',
      href: '#developers'
    },
    links: [
      {
        title: 'Technical Documentation',
        description: 'Comprehensive hardware reference manuals, silicon datasheets, and register maps.',
        tag: 'Manuals & Datasheets',
        href: '#developers'
      },
      {
        title: 'Knowledge Base',
        description: 'Searchable developer articles, troubleshooting guides, errata, and tested sample apps.',
        tag: 'Articles & Tutorials',
        href: '#developers'
      },
      {
        title: 'Contact Support',
        description: 'Direct inquiry channel to senior embedded engineers, FAEs, and hardware architects.',
        tag: 'Direct FAE Assistance',
        href: '#developers'
      }
    ]
  },

  quality: {
    id: 'quality',
    name: 'Quality and Reliability',
    heading: 'QUALITY AND RELIABILITY',
    icon: ShieldCheck,
    tagline: 'Industrial-grade standards, extended temperature testing, and 10+ year lifecycle guarantee.',
    featured: {
      title: 'Aiegx Industrial Qualification Benchmark',
      description: 'HALT/HASS stress testing results, MTBF reliability calculations, and RoHS/REACH compliance records.',
      badge: 'Verified Standards',
      ctaText: 'View Reliability Whitepaper',
      href: '#why-aiegx'
    },
    links: [
      {
        title: 'Quality Standards',
        description: 'ISO 9001 certified manufacturing, zero-defect process controls, and rigorous incoming inspection.',
        tag: 'ISO 9001 & IPC-A-610',
        href: '#why-aiegx'
      },
      {
        title: 'Reliability Information',
        description: 'Industrial temperature rating (-40°C to +85°C), shock/vibration tolerance, and FIT rates.',
        tag: 'HALT & Environmental Data',
        href: '#why-aiegx'
      },
      {
        title: 'Product Lifecycle',
        description: '10 to 15-year guaranteed silicon longevity roadmap and proactive EOL management policy.',
        tag: '10+ Year Longevity',
        href: '#why-aiegx'
      }
    ]
  },

  partners: {
    id: 'partners',
    name: 'Partner Network',
    heading: 'PARTNER NETWORK',
    icon: Users,
    tagline: 'A global network of certified software vendors, sensor manufacturers, and systems integrators.',
    featured: {
      title: 'Join the Aiegx Ecosystem Partner Program',
      description: 'Collaborate with Aiegx to certify your sensor drivers, edge AI models, or custom carrier boards.',
      badge: 'Partner Program',
      ctaText: 'Become a Partner',
      href: '#solutions'
    },
    links: [
      {
        title: 'Find a Partner',
        description: 'Search our directory of certified systems integrators, module resellers, and solution builders.',
        tag: 'Global Directory',
        href: '#solutions'
      },
      {
        title: 'Hardware Partners',
        description: 'Camera sensor vendors, industrial enclosure makers, connector suppliers, and power specialists.',
        tag: 'Peripherals & Carriers',
        href: '#solutions'
      },
      {
        title: 'Software Partners',
        description: 'Commercial RTOS vendors, computer vision ISVs, OTA cloud platforms, and security providers.',
        tag: 'AI & OS Ecosystem',
        href: '#solutions'
      }
    ]
  }
};

const categoryOrder = ['support', 'carrier', 'quality', 'partners'];

export default function DevelopersMegaMenu({ 
  isOpen, 
  onClose 
}) {
  const [selectedCategory, setSelectedCategory] = useState('carrier');
  const [mobileStep, setMobileStep] = useState(1); // 1 = categories, 2 = content
  const menuRef = useRef(null);

  // Reset to default category when menu opens
  const prevIsOpen = useRef(isOpen);
  useEffect(() => {
    if (!prevIsOpen.current && isOpen) {
      setSelectedCategory('carrier');
      setMobileStep(1);
    }
    prevIsOpen.current = isOpen;
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        const toggleBtn = document.getElementById('navbar-developers-toggle');
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

  const currentData = developersData[selectedCategory] || developersData.carrier;
  const CategoryIcon = currentData.icon || Cpu;

  return (
    <>
      {/* Dark Ambient Backdrop Overlay */}
      <div 
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Full-Width Developers Mega Menu Panel */}
      <div 
        ref={menuRef}
        id="developers-mega-menu"
        className="mega-menu-panel fixed left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
        role="dialog"
        aria-label="Developers Mega Menu"
      >
        <div className="bg-white/95 dark:bg-[#101936]/98 backdrop-blur-2xl border border-[#DCE6F3] dark:border-white/10 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/80 overflow-hidden text-slate-900 dark:text-white flex flex-col h-[min(590px,calc(100vh-var(--mega-menu-top)-12px))]">
          
          {/* Mobile Drill-Down Bar (Shown on small screens) */}
          <div className="lg:hidden flex items-center justify-between p-3.5 bg-[#F1F6FC] dark:bg-[#0b1226] border-b border-[#DCE6F3] dark:border-white/10">
            <div className="flex items-center gap-2">
              {mobileStep > 1 && (
                <button
                  onClick={() => setMobileStep(1)}
                  className="px-2 py-1 text-xs text-[#0284C7] dark:text-[#42D9F5] bg-white dark:bg-[#17264D] rounded-lg border border-[#DCE6F3] dark:border-white/10 flex items-center gap-1 font-mono font-semibold"
                >
                  &larr; Back
                </button>
              )}
              <span className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white tracking-wider">
                {mobileStep === 1 ? 'Developers Categories' : currentData.name}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Two-Column Desktop & Tablet Layout */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden h-full">
            
            {/* COLUMN 1 — Developer Categories (Left Sidebar) */}
            <div className={`lg:w-[300px] xl:w-[320px] flex-shrink-0 bg-[#F1F6FC] dark:bg-[#0e1630] border-b lg:border-b-0 lg:border-r border-[#DCE6F3] dark:border-white/10 flex flex-col justify-between p-4 sm:p-5 h-full overflow-y-auto mega-menu-scroll ${
              mobileStep !== 1 ? 'hidden lg:flex' : 'flex'
            }`}>
              <div>
                {/* Column 1 Header with Close Icon & DEVELOPERS heading */}
                <div className="hidden lg:flex items-center justify-between pb-3.5 mb-4 border-b border-[#DCE6F3] dark:border-white/10">
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-900 dark:text-white uppercase">
                    DEVELOPERS
                  </span>
                  <button 
                    onClick={onClose}
                    className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#0284C7] dark:focus:ring-[#42D9F5]"
                    aria-label="Close menu"
                    title="Close Menu (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Subtitle / Overview link */}
                <div className="mb-4">
                  <a
                    href="#developers"
                    onClick={onClose}
                    className="text-xs font-semibold text-[#0284C7] dark:text-[#42D9F5] hover:underline flex items-center gap-1 font-mono group"
                  >
                    <span>Developer Resources & Tools</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-white/60 uppercase tracking-wider block mb-2 font-bold">
                    CATEGORIES
                  </span>
                </div>

                {/* Selectable Categories List */}
                <nav className="space-y-2" aria-label="Developer Categories">
                  {categoryOrder.map((catKey) => {
                    const cat = developersData[catKey];
                    const isSelected = selectedCategory === cat.id;
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setMobileStep(2);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center justify-between group focus:outline-none focus:ring-1 focus:ring-[#0284C7] dark:focus:ring-[#42D9F5] ${
                          isSelected 
                            ? 'bg-blue-50 text-[#0284C7] border-l-4 border-[#0284C7] dark:bg-[#17264D] dark:text-[#42D9F5] dark:border-[#42D9F5] font-semibold shadow-xs' 
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/50 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#0284C7] dark:text-[#42D9F5]' : 'text-slate-500 group-hover:text-slate-800 dark:text-white/60 dark:group-hover:text-white'}`} />
                          <span>{cat.name}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                          isSelected ? 'text-[#0284C7] dark:text-[#42D9F5] translate-x-0.5' : 'text-slate-400 group-hover:text-slate-600 dark:text-white/30 dark:group-hover:text-white/60'
                        }`} />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Column 1 Quick Link */}
              <div className="pt-4 mt-4 border-t border-[#DCE6F3] dark:border-white/10 hidden lg:block">
                <a
                  href="#developers"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284C7] dark:text-white/70 dark:hover:text-[#42D9F5] transition-colors font-mono font-medium"
                >
                  <span>API Docs & Neural SDK</span>
                  <ArrowRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* COLUMN 2 — Selected Category Content (Right Column) */}
            <div className={`flex-1 bg-white dark:bg-[#101936] p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full overflow-y-auto mega-menu-scroll ${
              mobileStep === 1 ? 'hidden lg:flex' : 'flex'
            }`}>
              <div className="space-y-6">
                
                {/* Heading with selected category in uppercase */}
                <div className="pb-4 border-b border-[#DCE6F3] dark:border-white/10 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-[#17264D] border border-[#DCE6F3] dark:border-white/10 text-[#0284C7] dark:text-[#42D9F5]">
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm sm:text-base font-mono font-bold tracking-wider text-slate-900 dark:text-white uppercase">
                    {currentData.heading}
                  </h2>
                </div>

                {/* Main Dynamic Links Grid */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/60 font-bold block mb-3">
                    RESOURCES & TOOLS
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                    {currentData.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        onClick={onClose}
                        className="p-4 rounded-xl bg-[#F8FAFD] hover:bg-[#F0F6FE] dark:bg-[#17264D]/40 dark:hover:bg-[#17264D]/70 border border-[#DCE6F3] dark:border-white/10 hover:border-[#0284C7]/40 dark:hover:border-[#42D9F5]/40 transition-all duration-200 group flex flex-col justify-between min-h-[110px] shadow-2xs"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#42D9F5] uppercase tracking-wider px-2 py-0.5 rounded bg-white dark:bg-[#101936] border border-[#DCE6F3] dark:border-white/10 font-bold">
                              {link.tag}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] dark:text-white/40 dark:group-hover:text-[#42D9F5] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#42D9F5] transition-colors mt-1">
                            {link.title}
                          </h3>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-white/60 group-hover:text-[#0284C7] dark:group-hover:text-[#42D9F5] transition-colors font-medium">
                          <span>Access</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Featured Highlight Card */}
                {currentData.featured && (
                  <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-blue-50/50 dark:from-[#17264D]/80 dark:via-[#101936] dark:to-[#17264D]/60 border border-[#DCE6F3] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white dark:bg-[#101936] border border-[#DCE6F3] dark:border-white/10 text-[#0284C7] dark:text-[#42D9F5] flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284C7] dark:text-[#42D9F5] font-bold px-2 py-0.5 rounded bg-white dark:bg-[#101936] border border-[#DCE6F3] dark:border-white/10">
                          {currentData.featured.badge}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono mt-1">
                          {currentData.featured.title}
                        </h4>
                      </div>
                    </div>
                    <a
                      href={currentData.featured.href}
                      onClick={onClose}
                      className="px-3.5 py-2 text-xs font-semibold text-white dark:text-[#101936] bg-gradient-to-r from-[#0284C7] to-[#2563EB] dark:from-[#42D9F5] dark:to-[#3478F6] hover:opacity-95 rounded-lg transition-all flex items-center justify-center gap-1.5 flex-shrink-0 shadow-md shadow-blue-500/20 font-mono"
                    >
                      <span>{currentData.featured.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

              </div>

              {/* Bottom Quick Bar */}
              <div className="pt-4 mt-6 border-t border-[#DCE6F3] dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-600 dark:text-white/60">
                  <span>Aiegx Neural SDK v4.2 • Compatible with Linux LTS & ROS 2</span>
                </div>
                <a
                  href="#developers"
                  onClick={onClose}
                  className="text-[#0284C7] dark:text-[#42D9F5] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Explore Developer Portal</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}
