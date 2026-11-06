import React, { useState } from 'react';
import { 
  ChevronRight, 
  Home as HomeIcon, 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Eye, 
  CheckCircle2, 
  Clock, 
  Mail, 
  Sparkles,
  ArrowDown
} from 'lucide-react';

export default function QualcommBrand() {
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState('');

  const handleNavigateHome = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setNotified(true);
      setTimeout(() => {
        setEmail('');
      }, 4000);
    }
  };

  const scrollToProduct = (e) => {
    e.preventDefault();
    const target = document.getElementById('dragonwing-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#101936] text-white relative selection:bg-[#3478F6]/30 selection:text-[#42D9F5]">
      
      {/* =========================================================================
          HERO SECTION: Dark navy-to-deep-blue gradient, 2-column layout, Qualcomm logo
         ========================================================================= */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0e1630] via-[#122047] to-[#101936]">
        
        {/* Subtle Geometric Background Circuit Lines Matching Homepage Hero */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="qualcomm-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(66, 217, 245, 0.05)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#qualcomm-grid)" />
          <path d="M 40 180 L 260 180 L 320 240 L 720 240" fill="none" stroke="rgba(66, 217, 245, 0.25)" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="40" cy="180" r="2.5" fill="rgba(66, 217, 245, 0.6)" />
          <circle cx="720" cy="240" r="2.5" fill="rgba(66, 217, 245, 0.6)" />
          <path d="M 480 90 L 680 90 L 740 150 L 1100 150" fill="none" stroke="rgba(52, 120, 246, 0.3)" strokeWidth="1" />
          <circle cx="740" cy="150" r="2" fill="rgba(52, 120, 246, 0.6)" />
        </svg>

        {/* Ambient Radial Glow Lights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-[#3478F6]/20 via-[#42D9F5]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-gradient-to-bl from-[#3478F6]/20 via-[#42D9F5]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

        {/* Large Outer Section Container */}
        <div className="section-container relative">
          
          {/* Breadcrumb Navigation: Home > Brands > Qualcomm */}
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-12">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-white/60">
              <li>
                <a 
                  href="/" 
                  onClick={handleNavigateHome}
                  className="flex items-center gap-1.5 hover:text-[#42D9F5] transition-colors focus:outline-none focus:ring-1 focus:ring-[#42D9F5] rounded-sm py-0.5"
                >
                  <HomeIcon className="w-3.5 h-3.5" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              </li>
              <li>
                <span className="text-white/60">Brands</span>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              </li>
              <li>
                <span className="text-[#42D9F5] font-semibold" aria-current="page">
                  Qualcomm
                </span>
              </li>
            </ol>
          </nav>

          {/* Two-Column Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#42D9F5] uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Silicon Architecture</span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-[clamp(2.1rem,4.2vw,3.65rem)] font-normal tracking-tight text-white leading-[1.16] mb-6">
                Qualcomm Computer on Modules
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-[#F5F7FC]/80 leading-relaxed font-normal mb-8 max-w-2xl">
                Accelerate the development of advanced edge AI products with Aiegx Computer on Modules powered by Qualcomm Dragonwing IQ8 processors. Combining high-performance AI acceleration, heterogeneous computing and multi-camera vision with industrial reliability and long-term lifecycle support, these modules are built for demanding robotics, industrial automation, medical and intelligent vision applications.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToProduct}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white font-semibold text-sm shadow-lg shadow-[#3478F6]/25 hover:shadow-[#42D9F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#42D9F5]"
                >
                  <span>Explore Dragonwing IQ-8275</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </button>

                <a
                  href="#why-aiegx"
                  onClick={handleNavigateHome}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/10 hover:border-white/20 text-sm font-medium transition-all duration-200"
                >
                  Why Aiegx Architecture
                </a>
              </div>

            </div>

            {/* Right Column: Qualcomm Brand Logo Showcase Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md p-8 sm:p-12 rounded-2xl bg-[#17264D]/60 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 relative group hover:border-[#42D9F5]/40 transition-all duration-300">
                
                {/* Decorative Corner Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#42D9F5]/15 rounded-full blur-2xl pointer-events-none" />

                {/* Qualcomm Official Vector Logo */}
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="w-full max-w-[240px] mb-6 flex items-center justify-center">
                    <img
                      src="/images/qualcomm-logo.png"
                      alt="Qualcomm"
                      className="h-10 sm:h-12 w-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
                      draggable="false"
                    />
                  </div>
                  
                  <span className="text-xs font-mono text-[#42D9F5] tracking-widest uppercase font-semibold">
                    SILICON PARTNER
                  </span>
                  
                  <p className="mt-3 text-xs text-white/60 leading-relaxed text-center">
                    Authorized hardware development partner for Dragonwing IQ8 Edge Computing Solutions.
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/10 w-full flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span>ARCHITECTURE</span>
                    <span className="text-white font-semibold">Dragonwing IQ8</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          PRODUCT SHOWCASE SECTION: Dark navy theme matching Aiegx homepage
         ========================================================================= */}
      <section 
        id="dragonwing-showcase" 
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#101936] via-[#122047] to-[#101936] text-white"
      >
        {/* Background Ambient Radial Glow Lights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#3478F6]/15 via-[#42D9F5]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

        {/* Section Content Wrapper */}
        <div className="section-container relative">
          
          {/* Section Heading & Coming Soon Label */}
          <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider mb-1 font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>Next-Gen Robotics & Edge Compute</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1733] tracking-tight">
                Dragonwing <span className="bg-gradient-to-r from-[#0284C7] to-[#3285FF] bg-clip-text text-transparent">IQ-8275</span>
              </h2>
            </div>

            {/* Coming Soon Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#0369A1] bg-white border border-[#BAE6FD] shadow-xs uppercase self-start sm:self-center">
              <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Coming Soon</span>
            </div>
          </div>

          {/* Main Product Showcase Card — Dark Navy Glass Panel */}
          <div className="bg-[#121c3d]/80 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/40 mb-16 relative overflow-hidden">
            
            {/* Subtle Top Border Cyan Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#42D9F5]/40 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Product Visual Area */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full aspect-square max-w-[380px] bg-[#0e1630]/90 rounded-2xl border border-white/10 p-6 flex items-center justify-center shadow-inner group overflow-hidden">
                  
                  {/* Subtle Background Radial Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3478F6]/10 via-[#42D9F5]/5 to-transparent pointer-events-none" />
                  
                  <img 
                    src="/images/pcb-modules-transparent.png"
                    alt="Aiegx Dragonwing IQ-8275 Computer on Module"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 relative z-10 drop-shadow-2xl"
                    loading="lazy"
                  />

                  {/* Longevity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#101936]/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between text-xs z-20 shadow-xs">
                    <span className="font-mono text-white/50 font-semibold text-[11px]">FORM FACTOR</span>
                    <span className="font-mono font-bold text-white text-[11px]">Aiegx CoM Pinout</span>
                  </div>
                </div>

                <span className="mt-3 text-xs text-white/50 font-mono">
                  * Pre-production engineering evaluation module shown
                </span>
              </div>

              {/* Specifications & Key Features Area */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* Key Features Overview */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4">
                    Architectural Highlights
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#17264D]/70 border border-white/10 hover:border-[#42D9F5]/40 transition-all shadow-md group">
                      <Zap className="w-5 h-5 text-[#42D9F5] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#42D9F5] transition-colors">Neural Acceleration</h4>
                        <p className="text-xs text-white/70 mt-1 leading-relaxed">
                          Integrated multi-core NPU for real-time edge tensor processing.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#17264D]/70 border border-white/10 hover:border-[#42D9F5]/40 transition-all shadow-md group">
                      <Cpu className="w-5 h-5 text-[#42D9F5] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#42D9F5] transition-colors">Heterogeneous Compute</h4>
                        <p className="text-xs text-white/70 mt-1 leading-relaxed">
                          Dynamic multi-core processing with dedicated real-time control.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#17264D]/70 border border-white/10 hover:border-[#42D9F5]/40 transition-all shadow-md group">
                      <Eye className="w-5 h-5 text-[#42D9F5] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#42D9F5] transition-colors">Multi-Camera Vision</h4>
                        <p className="text-xs text-white/70 mt-1 leading-relaxed">
                          Native MIPI-CSI lanes for synchronous high-framerate perception.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#17264D]/70 border border-white/10 hover:border-[#42D9F5]/40 transition-all shadow-md group">
                      <ShieldCheck className="w-5 h-5 text-[#42D9F5] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#42D9F5] transition-colors">Industrial Longevity</h4>
                        <p className="text-xs text-white/70 mt-1 leading-relaxed">
                          10+ year availability guarantee with extended temperature ratings.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="mb-8 bg-[#101936]/80 border border-white/10 rounded-2xl overflow-hidden shadow-md">
                  <div className="px-5 py-3.5 bg-[#17264D]/80 border-b border-white/10 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Verified Technical Profile
                    </span>
                    <span className="text-[11px] font-mono text-[#42D9F5] bg-[#17264D] border border-[#42D9F5]/30 px-2.5 py-0.5 rounded-md font-semibold">
                      Dragonwing IQ8
                    </span>
                  </div>

                  <div className="divide-y divide-white/5 text-xs">
                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/60 font-medium">Processor Silicon</span>
                      <span className="text-white font-semibold font-mono">Qualcomm Dragonwing IQ-8275</span>
                    </div>
                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/60 font-medium">Form Factor</span>
                      <span className="text-white font-semibold font-mono">Computer on Module (CoM)</span>
                    </div>
                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/60 font-medium">Target Applications</span>
                      <span className="text-white/90 font-medium text-right">Autonomous Robotics, Medical Vision, Industrial HMI</span>
                    </div>
                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/60 font-medium">Software Stack</span>
                      <span className="text-white font-semibold font-mono">Yocto Linux, TorizonCore, ROS 2 Humble</span>
                    </div>
                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/60 font-medium">Lifecycle Support</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>10+ Years Longevity Commitment</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Future Product Details Link & Early Access CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button 
                    disabled
                    className="px-6 py-3.5 rounded-xl bg-white/5 text-white/40 font-semibold text-sm cursor-not-allowed flex items-center justify-center gap-2 border border-white/10 shadow-xs"
                    title="Detailed datasheet and pinout schematics will be released upon official launch."
                  >
                    <span>Full Datasheet & Pinout</span>
                    <span className="text-[11px] font-mono uppercase bg-white/10 text-white/50 px-2 py-0.5 rounded-md">Coming Soon</span>
                  </button>

                  <a 
                    href="#developers"
                    onClick={handleNavigateHome}
                    className="px-6 py-3.5 rounded-xl bg-[#17264D] hover:bg-[#1e3266] text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-white/10 hover:border-[#42D9F5]/40 shadow-md"
                  >
                    <span>Carrier Board Design Services</span>
                    <ArrowRight className="w-4 h-4 text-[#42D9F5]" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Pre-Notify & Engineering Inquiries Block */}
          <div className="rounded-3xl bg-gradient-to-br from-[#121c3d] to-[#17264D] text-white p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#42D9F5] uppercase tracking-wider font-semibold block mb-2">
                Stay Ahead of the Release
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-3">
                Register for Dragonwing IQ-8275 Technical Briefs
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Be the first to receive early-access documentation, carrier board reference schematics, and developer kit sample announcements.
              </p>

              {notified ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! You are registered for the Dragonwing IQ-8275 launch notifications.</span>
                </div>
              ) : (
                <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="engineer@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#42D9F5] focus:bg-white/15 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-[#3478F6]/25"
                  >
                    <span>Request Notification</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
