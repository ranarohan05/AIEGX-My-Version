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
  X, 
  Layers, 
  Server, 
  Award, 
  Sparkles,
  ArrowDown,
  Activity,
  HardDrive
} from 'lucide-react';

export default function TiBrand() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigateHome = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const am69Product = {
    id: 'aquila-am69',
    name: 'Aquila AM69 / TDA4',
    family: 'TI AM69 / TDA4',
    formFactor: 'Aquila High-Density Form Factor',
    image: '/images/hero-som-module.jpg',
    badge: '32 TOPS Deep Learning Flagship',
    processor: '8x Arm® Cortex®-A72 @ 2.0 GHz',
    a72Cores: 8,
    coprocessor: 'Dual-Core Arm® Cortex®-R5F @ 800 MHz',
    gpu: 'IMG BXS-4-64 3D GPU (OpenCL 3.0, Vulkan 1.2)',
    npu: '32 TOPS Dedicated Deep Learning MMA (Matrix Multiply Accelerator)',
    ispVpu: 'Hardware Vision Accelerator + 8-Camera MIPI-CSI2 + 4K60 VPU',
    ram: '16GB',
    flash: '128GB',
    connectivity: 'Dual PCIe Gen3 x4, 2x 10GbE / GbE TSN, USB 3.0, Dual CAN-FD, Isolated PRU-ICSS',
    osList: ['Linux Yocto', 'TorizonCore', 'ROS 2 Humble', 'FreeRTOS'],
    longevity: '15+ Years Industrial Availability',
    highlights: [
      '32 TOPS Deep Learning accelerator optimized for autonomous robotics and ADAS perception',
      'Simultaneous processing of up to 8 high-resolution camera sensor streams',
      'Lockstep Cortex-R5F functional safety island for ASIL-D / SIL-3 certified systems',
      'Hardware PRU-ICSS for deterministic industrial Ethernet protocols (EtherCAT, Profinet)'
    ]
  };

  const am62Products = [
    {
      id: 'verdin-am62',
      name: 'Verdin AM62',
      family: 'TI AM62',
      formFactor: 'Verdin Form Factor',
      image: '/images/pcb-modules-transparent.png',
      badge: 'Ultra-Low TDP & Fanless',
      processor: '4x Arm® Cortex®-A53 @ 1.4 GHz',
      a53Cores: 4,
      coprocessor: 'Arm® Cortex®-M4F @ 400 MHz',
      gpu: 'PowerVR Rogue AXE-1-16 3D GPU',
      npu: 'Analytics & Smart HMI Engine',
      ram: '2GB',
      flash: '16GB',
      connectivity: 'Dual Gigabit Ethernet (1x TSN), Dual USB 2.0, Isolated PRU-ICSS, CAN-FD, MIPI-CSI, LVDS',
      osList: ['TorizonCore', 'Linux Yocto', 'FreeRTOS', 'Zephyr'],
      longevity: '10+ Years Longevity Commitment',
      highlights: [
        'Ultra-low power draw under 1.5W typical TDP with deep sleep under 50mW',
        'Dedicated isolated PRU-ICSS for real-time industrial fieldbuses',
        'Direct die thermal dissipation with passive cooling compatibility'
      ]
    },
    {
      id: 'verdin-am62p',
      name: 'Verdin AM62P',
      family: 'TI AM62',
      formFactor: 'Verdin Form Factor',
      image: '/images/why_aiegx_product.png',
      badge: 'Upgraded 3D Graphics & TSN',
      processor: '4x Arm® Cortex®-A53 @ 1.4 GHz',
      a53Cores: 4,
      coprocessor: 'Arm® Cortex®-R5F @ 800 MHz',
      gpu: 'Upgraded 3D GPU Engine with Quad Multi-Display Support',
      npu: 'Edge Classification & Optical Inspection',
      ram: '4GB',
      flash: '32GB',
      connectivity: 'Dual Gigabit Ethernet with TSN, USB 3.0 / 2.0, Dual CAN-FD, MIPI-CSI, RGB/LVDS/HDMI',
      osList: ['Linux Yocto', 'TorizonCore', 'FreeRTOS', 'Android'],
      longevity: '10+ Years Availability Guarantee',
      highlights: [
        'Higher graphics throughput and multi-display rendering for complex industrial HMI',
        'Real-time deterministic networking with Dual GbE IEEE 802.1 TSN support',
        'Pin-compatible upgrade for Verdin carrier boards with zero PCB redesign'
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[var(--page-bg)] dark:bg-[#101936] text-[var(--text-primary)] dark:text-white relative selection:bg-[#3478F6]/30 selection:text-[#42D9F5] transition-colors duration-300">
      
      {/* =========================================================================
          HERO SECTION: TI AM6x Computer on Modules (Two-column layout)
         ========================================================================= */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0e1630] via-[#122047] to-[#101936]">
        
        {/* Subtle Geometric Background Circuit Lines Matching Homepage Hero */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="ti-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(66, 217, 245, 0.05)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ti-grid)" />
          <path d="M 60 170 L 250 170 L 310 230 L 730 230" fill="none" stroke="rgba(66, 217, 245, 0.25)" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="60" cy="170" r="2.5" fill="rgba(66, 217, 245, 0.6)" />
          <circle cx="730" cy="230" r="2.5" fill="rgba(66, 217, 245, 0.6)" />
          <path d="M 470 90 L 690 90 L 750 150 L 1120 150" fill="none" stroke="rgba(52, 120, 246, 0.3)" strokeWidth="1" />
          <circle cx="750" cy="150" r="2" fill="rgba(52, 120, 246, 0.6)" />
        </svg>

        {/* Ambient Radial Glow Lights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-[#3478F6]/25 via-[#42D9F5]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-gradient-to-bl from-[#3478F6]/20 via-[#42D9F5]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

        {/* Large Outer Section Container */}
        <div className="section-container relative">
          
          {/* Breadcrumb Navigation: Home > Brands > TI AM6x */}
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
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
                  TI AM6x
                </span>
              </li>
            </ol>
          </nav>

          {/* Two-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading and Exact Description */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17264D]/80 border border-white/10 text-xs font-mono text-[#42D9F5] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sitara™ & Jacinto™ Architecture</span>
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300 font-semibold shadow-xs">
                  <Award className="w-3.5 h-3.5 text-red-400" />
                  <span>TI Premium Partner</span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-[clamp(2.1rem,4.2vw,3.65rem)] font-normal tracking-tight text-white leading-[1.16] mb-6">
                TI AM6x Computer on Modules
              </h1>

              {/* Exact Description Provided */}
              <p className="text-base sm:text-lg lg:text-xl text-[#F5F7FC]/80 leading-relaxed font-normal mb-8 max-w-2xl">
                TI (Texas Instruments) AM6x application processors are multi-core Arm-based solutions. Aiegx offers System on Modules (SoMs) based on TI AM62 and AM69 processors. These platforms are designed for connectivity and IoT applications, combining performance, power efficiency, advanced security, and heterogeneous computing for industrial automation, automotive, medical, and other applications.
              </p>

              {/* Quick Jump Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('am69')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white font-semibold text-sm shadow-lg shadow-[#3478F6]/25 hover:shadow-[#42D9F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#42D9F5]"
                >
                  <span>Explore TI AM69 / TDA4</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </button>

                <button
                  onClick={() => scrollToSection('am62')}
                  className="px-6 py-3 rounded-xl bg-[#17264D] hover:bg-[#1f3366] text-white font-semibold text-sm border border-white/10 hover:border-[#42D9F5]/40 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Explore TI AM62 Series</span>
                  <ArrowRight className="w-4 h-4 text-[#42D9F5]" />
                </button>
              </div>

            </div>

            {/* Right Column: Texas Instruments Premium Partner Badge Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl bg-[#121c3d]/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60 relative group hover:border-[#42D9F5]/40 transition-all duration-300">
                
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                {/* Texas Instruments Premium Partner Mark */}
                <div className="flex flex-col items-center justify-center text-center">
                  
                  {/* TI Emblem SVG Representation */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-900/40 border border-red-500/40 flex items-center justify-center mb-5 shadow-lg shadow-red-900/30">
                    <span className="font-mono font-black text-2xl tracking-tighter text-red-400">
                      TI
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
                    TEXAS INSTRUMENTS
                  </span>
                  
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    Premium Partner
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed max-w-xs mb-6">
                    Authorized hardware development and long-term design partner for Sitara™ & Jacinto™ high-reliability industrial embedded platforms.
                  </p>

                  <div className="w-full border-t border-white/10 pt-4 space-y-2 text-[11px] font-mono text-left">
                    <div className="flex items-center justify-between text-white/50">
                      <span>PROCESSOR FAMILIES</span>
                      <span className="text-white font-semibold">AM62 & AM69</span>
                    </div>
                    <div className="flex items-center justify-between text-white/50">
                      <span>LIFECYCLE SUPPLY</span>
                      <span className="text-emerald-400 font-semibold">10+ to 15+ Years</span>
                    </div>
                    <div className="flex items-center justify-between text-white/50">
                      <span>HARDWARE SECURITY</span>
                      <span className="text-[#42D9F5] font-semibold">Hardware HSM Core</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: TI AM69 / TDA4 PRODUCT SECTION
         ========================================================================= */}
      <section 
        id="am69" 
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#101936] text-white"
      >
        {/* Section Content Wrapper */}
        <div className="section-container relative">
          
          {/* Section Heading */}
          <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider mb-1 font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>Heavy AI & Autonomous Vision Platform</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1733] tracking-tight">
                TI AM69 / <span className="bg-gradient-to-r from-[#0284C7] to-[#3285FF] bg-clip-text text-transparent">TDA4</span>
              </h2>
            </div>

            <span className="text-xs font-mono text-[#0369A1] bg-white border border-[#BAE6FD] px-3 py-1 rounded-full self-start sm:self-center font-semibold">
              32 TOPS Deep Learning MMA
            </span>
          </div>

          {/* Single Product Entry: Aquila AM69 / TDA4 */}
          <div className="rounded-3xl bg-[#121c3d]/90 border border-white/10 hover:border-[#42D9F5]/50 transition-all duration-300 shadow-2xl shadow-black/50 p-6 sm:p-10 lg:p-12 overflow-hidden relative group">
            
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#42D9F5]/50 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Product Board Image & Status */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full aspect-square max-w-[390px] bg-[#0e1630] rounded-2xl border border-white/10 p-6 flex items-center justify-center shadow-inner group/img overflow-hidden">
                  
                  {/* Subtle Tech Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3478F6]/15 via-[#42D9F5]/10 to-transparent pointer-events-none" />

                  <img 
                    src={am69Product.image} 
                    alt={am69Product.name}
                    className="max-h-full max-w-full object-contain transform group-hover/img:scale-105 transition-transform duration-500 drop-shadow-2xl relative z-10"
                    loading="lazy"
                  />

                  {/* Form Factor Label Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#101936]/95 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between text-xs z-20 shadow-xs">
                    <span className="font-mono text-white/50 font-semibold text-[11px]">FORM FACTOR</span>
                    <span className="font-mono font-bold text-white text-[11px]">{am69Product.formFactor}</span>
                  </div>
                </div>

                <span className="mt-3 text-xs text-white/40 font-mono">
                  * Industrial-grade high-density SoM with integrated heat spreader mount
                </span>
              </div>

              {/* Specifications & Core Blocks Area */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* Header Title & Badges */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[#42D9F5] bg-[#17264D] border border-[#42D9F5]/30 px-2.5 py-0.5 rounded-md font-semibold">
                      {am69Product.badge}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-md font-semibold">
                      {am69Product.longevity}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white group-hover:text-[#42D9F5] transition-colors">
                    {am69Product.name}
                  </h3>
                </div>

                {/* Processor Specification Blocks Displaying A72 Cores */}
                <div className="mb-6 p-4 rounded-2xl bg-[#0e1630] border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#42D9F5]" />
                      <span>Octa-Core Arm® Cortex®-A72 Processing Subsystem</span>
                    </span>
                    <span className="text-xs font-mono text-[#42D9F5] font-semibold">2.0 GHz</span>
                  </div>

                  {/* 8 Processor Core Blocks Visual Display */}
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {Array.from({ length: am69Product.a72Cores }).map((_, idx) => (
                      <div 
                        key={idx}
                        className="py-2.5 px-1 rounded-lg bg-[#17264D] border border-[#42D9F5]/30 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#42D9F5] transition-colors"
                      >
                        <span className="text-[11px] font-mono font-bold text-white">A72</span>
                        <span className="text-[9px] font-mono text-[#42D9F5]">Core {idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Specifications Matrix */}
                <div className="mb-6 bg-[#101936] border border-white/10 rounded-2xl overflow-hidden shadow-xs">
                  <div className="divide-y divide-white/5 text-xs">
                    
                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/50 font-medium">Real-Time Coprocessor</span>
                      <span className="text-white font-mono font-semibold text-right">{am69Product.coprocessor}</span>
                    </div>

                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/50 font-medium">3D Graphics Acceleration</span>
                      <span className="text-white font-mono font-semibold text-right">{am69Product.gpu}</span>
                    </div>

                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/50 font-medium">Neural Processing (NPU)</span>
                      <span className="text-[#42D9F5] font-mono font-bold text-right">{am69Product.npu}</span>
                    </div>

                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/50 font-medium">Vision ISP & VPU Codec</span>
                      <span className="text-white font-mono font-semibold text-right">{am69Product.ispVpu}</span>
                    </div>

                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/50 font-medium">System RAM</span>
                      <span className="text-white font-mono font-bold text-right">{am69Product.ram} LPDDR4 with ECC</span>
                    </div>

                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/50 font-medium">Flash Storage</span>
                      <span className="text-white font-mono font-bold text-right">{am69Product.flash} eMMC 5.1</span>
                    </div>

                    <div className="px-5 py-3 flex items-center justify-between">
                      <span className="text-white/50 font-medium">Connectivity</span>
                      <span className="text-white/80 font-mono text-right text-[11px] truncate max-w-[280px]">{am69Product.connectivity}</span>
                    </div>

                  </div>
                </div>

                {/* Operating System Support Badges */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2 font-semibold">
                    VERIFIED OPERATING SYSTEM ECOSYSTEM
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {am69Product.osList.map((os, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[#17264D] border border-white/10 text-white/90 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#42D9F5]" />
                        <span>{os}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button 
                    onClick={() => setSelectedProduct(am69Product)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#3478F6]/25 hover:shadow-[#42D9F5]/40 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TI AM62 PRODUCT SECTION (Verdin AM62 & Verdin AM62P side by side)
         ========================================================================= */}
      <section 
        id="am62" 
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#101936] via-[#122047] to-[#101936] text-white"
      >
        {/* Section Content Wrapper */}
        <div className="section-container relative">
          
          {/* Section Heading */}
          <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider mb-1 font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Cost & Power-Optimized Multiprocessors</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1733] tracking-tight">
                TI <span className="bg-gradient-to-r from-[#0284C7] to-[#3285FF] bg-clip-text text-transparent">AM62</span>
              </h2>
            </div>

            <span className="text-xs font-mono text-slate-600 bg-white/80 border border-[#BAE6FD] px-3 py-1 rounded-full self-start sm:self-center font-semibold">
              2 Hardware Configurations
            </span>
          </div>

          {/* Responsive Two-Column Layout (Side by side on desktop, stacked on mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {am62Products.map((prod) => (
              <div 
                key={prod.id}
                className="rounded-3xl bg-[#121c3d]/90 border border-white/10 hover:border-[#42D9F5]/50 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between overflow-hidden group p-6 sm:p-8"
              >
                <div>
                  
                  {/* Top Image & Status */}
                  <div className="p-6 bg-[#0e1630] rounded-2xl border border-white/10 relative flex items-center justify-center overflow-hidden mb-6">
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                      <span className="text-[11px] font-mono font-bold text-[#42D9F5] bg-[#17264D]/90 border border-[#42D9F5]/30 px-2.5 py-0.5 rounded-md">
                        {prod.badge}
                      </span>
                      <span className="text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                        {prod.formFactor}
                      </span>
                    </div>

                    <div className="h-44 w-full flex items-center justify-center p-2 pt-6 relative z-10">
                      <img 
                        src={prod.image} 
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#42D9F5] transition-colors mb-4">
                    {prod.name}
                  </h3>

                  {/* Four A53 Processor Blocks Visual Display */}
                  <div className="mb-5 p-3.5 rounded-xl bg-[#0e1630] border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#42D9F5]" />
                        <span>Four A53 Cores</span>
                      </span>
                      <span className="text-[11px] font-mono text-[#42D9F5] font-semibold">1.4 GHz</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: prod.a53Cores }).map((_, idx) => (
                        <div 
                          key={idx}
                          className="py-2 px-1 rounded-lg bg-[#17264D] border border-[#42D9F5]/30 flex flex-col items-center justify-center text-center shadow-xs"
                        >
                          <span className="text-[11px] font-mono font-bold text-white">A53</span>
                          <span className="text-[9px] font-mono text-[#42D9F5]">Core {idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specification Table */}
                  <div className="space-y-2.5 text-xs border-y border-white/10 py-4 mb-5">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 font-medium">Real-Time Coprocessor</span>
                      <span className="text-white font-mono text-right font-medium text-[11px]">{prod.coprocessor}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/50 font-medium">3D Graphics GPU</span>
                      <span className="text-white font-mono text-right font-medium text-[11px] truncate max-w-[200px]">{prod.gpu}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/50 font-medium">System RAM</span>
                      <span className="text-[#42D9F5] font-mono text-right font-bold text-[11px]">{prod.ram}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/50 font-medium">Flash Storage</span>
                      <span className="text-white font-mono text-right font-bold text-[11px]">{prod.flash}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/50 font-medium">Connectivity</span>
                      <span className="text-white font-mono text-right text-[11px] truncate max-w-[200px]">{prod.connectivity}</span>
                    </div>

                  </div>

                  {/* Operating System Badges */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2 font-semibold">
                      SUPPORTED OS & RUNTIMES
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.osList.map((os, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#17264D] border border-white/10 text-white/80"
                        >
                          {os}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button 
                    onClick={() => setSelectedProduct(prod)}
                    className="w-full py-3 px-4 rounded-xl bg-[#17264D] hover:bg-[#1f3366] text-[#42D9F5] hover:text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 border border-[#42D9F5]/30 hover:border-[#42D9F5] flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE MODAL: Product Details Drawer / Modal
         ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-[#101936] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl shadow-black text-white z-10 overflow-hidden my-8">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#42D9F5] font-semibold uppercase tracking-wider">
                  {selectedProduct.family} • {selectedProduct.formFactor}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedProduct.name} Detailed Specifications
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#17264D]/60 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">MAIN APPLICATION CORES</span>
                  <p className="text-sm font-semibold text-white">{selectedProduct.processor}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#17264D]/60 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">REAL-TIME COPROCESSOR</span>
                  <p className="text-sm font-semibold text-white">{selectedProduct.coprocessor}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#17264D]/60 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">RAM & STORAGE CONFIGURATION</span>
                  <p className="text-sm font-semibold text-white">{selectedProduct.ram} RAM • {selectedProduct.flash} Flash</p>
                </div>
                <div className="p-4 rounded-xl bg-[#17264D]/60 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">LIFECYCLE SUPPLY GUARANTEE</span>
                  <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{selectedProduct.longevity}</span>
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/60 font-semibold mb-2">
                  KEY ARCHITECTURAL HIGHLIGHTS
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  {selectedProduct.highlights?.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#42D9F5] flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connectivity Summary */}
              <div className="p-4 rounded-xl bg-[#0e1630] border border-white/10">
                <span className="text-xs font-mono uppercase text-[#42D9F5] font-semibold block mb-1">
                  INTERFACES & PERIPHERALS
                </span>
                <p className="text-xs text-white/70 leading-relaxed font-mono">
                  {selectedProduct.connectivity}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-white/50 font-mono">
                Evaluation carrier boards & samples available for immediate request
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono uppercase font-semibold border border-white/10 w-full sm:w-auto"
                >
                  Close
                </button>
                <a
                  href="#why-aiegx"
                  onClick={(e) => {
                    setSelectedProduct(null);
                    handleNavigateHome(e);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white text-xs font-mono uppercase font-semibold flex items-center justify-center gap-1.5 w-full sm:w-auto"
                >
                  <span>Request Dev Kit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
