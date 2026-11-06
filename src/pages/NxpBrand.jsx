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
  Play, 
  X, 
  ExternalLink, 
  Calendar, 
  Users, 
  Layers, 
  Server, 
  FileText, 
  Award,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function NxpBrand() {
  const [activeFamily, setActiveFamily] = useState('all');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
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

  const imx9Products = [
    {
      id: 'verdin-imx95',
      name: 'Verdin iMX95',
      family: 'i.MX 9',
      formFactor: 'Verdin Form Factor',
      image: '/images/hero-som-module.jpg',
      badge: 'Flagship 6-Core + NPU',
      processor: '6x Cortex-A55 @ 2.0 GHz',
      realTime: 'Cortex-M7 @ 800 MHz + Cortex-M33 Safety Island',
      ram: 'Up to 16GB LPDDR5',
      flash: 'Up to 128GB eMMC 5.1',
      npu: 'eIQ® Neutron NPU (High-Efficiency Edge ML)',
      gpu: 'Arm Mali™-G310 V2 (4K UI & OpenGL ES 3.2)',
      ispVpu: 'Integrated Dual ISP (4K60 HDR) + 4K H.265/H.264 VPU',
      connectivity: '2x 10GbE / GbE with TSN, PCIe Gen3, USB 3.0, Dual CAN-FD, Dual MIPI-CSI',
      osList: ['TorizonCore', 'Linux Yocto', 'FreeRTOS', 'Android'],
      longevity: '15+ Years Supply Commitment',
      highlights: [
        'Dedicated functional safety island with lockstep capabilities',
        'Next-gen LPDDR5 memory architecture with high memory bandwidth',
        'Pin-compatible within the Verdin Computer on Module ecosystem'
      ]
    },
    {
      id: 'aquila-imx95',
      name: 'Aquila iMX95',
      family: 'i.MX 9',
      formFactor: 'Aquila High-Density',
      image: '/images/pcb-modules-transparent.png',
      badge: 'Rugged Vision AI',
      processor: '6x Cortex-A55 @ 2.0 GHz',
      realTime: 'Cortex-M7 Real-Time Coprocessor',
      ram: 'Up to 16GB LPDDR5 with Inline ECC',
      flash: 'Up to 64GB eMMC 5.1',
      npu: 'Integrated Neural Accelerator',
      gpu: 'High-Throughput Arm Mali 3D GPU',
      ispVpu: 'Synchronous Quad MIPI-CSI2 + 4K Video Perception',
      connectivity: 'Dual GbE TSN, Dual CAN-FD, Wi-Fi 6E & BT 5.3 on-board',
      osList: ['Linux LTS', 'Yocto Project', 'Zephyr RTOS', 'QNX'],
      longevity: '15+ Years Industrial Lifecycle',
      highlights: [
        'Optimized for harsh industrial environments (-40°C to +85°C)',
        'Pre-integrated wireless radio with worldwide regulatory certifications',
        'Direct hardware telemetry for mission-critical robotics'
      ]
    },
    {
      id: 'smarc-imx95',
      name: 'SMARC iMX95',
      family: 'i.MX 9',
      formFactor: 'SMARC 2.1 Standard',
      image: '/images/why_aiegx_product.png',
      badge: 'Industry Standard Pinout',
      processor: 'Up to 6x Cortex-A55 @ 2.0 GHz',
      realTime: 'Cortex-M7 Real-Time Core',
      ram: 'Up to 16GB LPDDR5',
      flash: 'Up to 64GB eMMC',
      npu: 'eIQ® Neutron NPU Acceleration',
      gpu: 'Arm Mali™-G310 3D GPU Engine',
      ispVpu: 'Hardware HDR ISP + 4K Multi-Format Codec',
      connectivity: 'Dual GbE (TSN), 2x PCIe Gen3, 4x USB 3.0/2.0, LVDS & HDMI',
      osList: ['Yocto Linux', 'TorizonCore', 'FreeRTOS', 'Android'],
      longevity: '15+ Years Longevity Support',
      highlights: [
        'Compliant with standard SMARC 2.1 edge connector specification',
        'Dual independent display outputs with 4K HDMI support',
        'Engineered for rapid integration into existing carrier baseboards'
      ]
    }
  ];

  const imx8Products = [
    {
      id: 'verdin-imx8m-mini',
      name: 'Verdin iMX8M Mini',
      family: 'i.MX 8M',
      formFactor: 'Verdin Form Factor',
      image: '/images/hero-som-module.jpg',
      badge: 'Ultra-Low Power Multicore',
      processor: 'Up to 4x Cortex-A53 @ 1.8 GHz',
      realTime: 'Cortex-M4 @ 400 MHz',
      ram: 'Up to 4GB LPDDR4',
      flash: 'Up to 32GB eMMC 5.1',
      gpu: '2D/3D GC NanoUltra Graphics Engine',
      vpu: '1080p60 H.265 / H.264 Video Decoder & Encoder',
      connectivity: 'Gigabit Ethernet, USB 2.0 OTG, MIPI-DSI, MIPI-CSI, PCIe Gen2',
      osList: ['TorizonCore', 'Linux Yocto', 'FreeRTOS', 'Android'],
      longevity: '15+ Years Industrial Availability',
      highlights: [
        'Fanless passive thermal operation under 3W TDP',
        'Optimized for battery-powered instruments and edge HMI panels',
        'Extended operating temperature rating: -40°C to +85°C'
      ]
    },
    {
      id: 'verdin-imx8m-plus',
      name: 'Verdin iMX8M Plus',
      family: 'i.MX 8M Plus',
      formFactor: 'Verdin Form Factor',
      image: '/images/pcb-modules-transparent.png',
      badge: 'Flagship Edge AI CoM',
      processor: '4x Cortex-A53 @ 1.8 GHz',
      realTime: 'Cortex-M7 @ 800 MHz',
      ram: 'Up to 8GB LPDDR4 with ECC Support',
      flash: 'Up to 64GB eMMC 5.1',
      npu: '2.3 TOPS Dedicated Neural Processing Unit (NPU)',
      gpu: 'Vivante GC7000UL 3D GPU + HiFi4 Audio DSP',
      ispVpu: 'Dual Camera ISP (Dual 1080p / 1x 4K) + 1080p60 Codec',
      connectivity: 'Dual GbE with TSN, Dual CAN-FD, Dual MIPI-CSI, PCIe Gen3, USB 3.0',
      osList: ['Linux Yocto', 'TorizonCore', 'ROS 2 Humble', 'FreeRTOS'],
      longevity: '15+ Years Longevity Guarantee',
      highlights: [
        'Hardware neural inference for on-module object tracking and classification',
        'Integrated Dual CAN-FD for automotive and industrial factory networks',
        'Full ROS 2 Humble pre-built integration with camera driver acceleration'
      ]
    },
    {
      id: 'smarc-imx8m-plus',
      name: 'SMARC iMX8M Plus',
      family: 'i.MX 8M Plus',
      formFactor: 'SMARC 2.1 Standard',
      image: '/images/why_aiegx_product.png',
      badge: 'SMARC AI Acceleration',
      processor: 'Quad Cortex-A53 @ 1.8 GHz',
      realTime: 'Cortex-M7 Real-Time Control Subsystem',
      ram: 'Up to 8GB LPDDR4',
      flash: 'Up to 32GB eMMC 5.1',
      npu: '2.3 TOPS NPU Core (MobileNet / YOLO)',
      gpu: '3D Graphics Acceleration Engine',
      ispVpu: 'Integrated Dual ISP + Full HD Multi-Stream Codec',
      connectivity: '2x GbE (1x TSN), 2x CAN-FD, HDMI 2.0a / LVDS, PCIe Gen3, USB 3.0',
      osList: ['Linux Yocto', 'Android', 'Windows 10 IoT Core', 'FreeRTOS'],
      longevity: '15+ Years Supply Commitment',
      highlights: [
        'Standard 82 x 50 mm SMARC 2.1 mechanical footprint',
        'Dual independent display outputs with HDMI 2.0a and LVDS',
        'Rugged industrial temperature qualification with conformal coating'
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[var(--page-bg)] dark:bg-[#101936] text-[var(--text-primary)] dark:text-white relative selection:bg-[#3478F6]/30 selection:text-[#42D9F5] transition-colors duration-300">
      
      {/* =========================================================================
          HERO SECTION: NXP i.MX - Computer on Modules (Two-column responsive)
         ========================================================================= */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0e1630] via-[#122047] to-[#101936]">
        
        {/* Subtle Geometric Background Circuit Lines Matching Homepage Hero */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="nxp-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(66, 217, 245, 0.05)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nxp-grid)" />
          <path d="M 50 160 L 240 160 L 300 220 L 750 220" fill="none" stroke="rgba(66, 217, 245, 0.25)" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="50" cy="160" r="2.5" fill="rgba(66, 217, 245, 0.6)" />
          <circle cx="750" cy="220" r="2.5" fill="rgba(66, 217, 245, 0.6)" />
          <path d="M 450 80 L 680 80 L 740 140 L 1150 140" fill="none" stroke="rgba(52, 120, 246, 0.3)" strokeWidth="1" />
          <circle cx="740" cy="140" r="2" fill="rgba(52, 120, 246, 0.6)" />
        </svg>

        {/* Ambient Radial Glow Lights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-[#3478F6]/25 via-[#42D9F5]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-gradient-to-bl from-[#3478F6]/20 via-[#42D9F5]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

        {/* Large Outer Section Container */}
        <div className="section-container relative">
          
          {/* Breadcrumb Navigation: Home > Brands > NXP i.MX */}
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
                  NXP i.MX
                </span>
              </li>
            </ol>
          </nav>

          {/* Two-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Description, Family Links & Partner Badge */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Partner Badge Header Tag */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17264D]/80 border border-white/10 text-xs font-mono text-[#42D9F5] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Industrial Applications Processors</span>
                </div>

                {/* NXP Platinum Partner Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/10 border border-amber-400/40 text-xs font-mono text-amber-300 font-semibold shadow-xs">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>NXP Platinum Partner</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-[clamp(2.1rem,4.2vw,3.65rem)] font-normal tracking-tight text-white leading-[1.16] mb-6">
                NXP i.MX - Computer on Modules
              </h1>

              {/* Comprehensive Description */}
              <p className="text-base sm:text-lg lg:text-xl text-[#F5F7FC]/80 leading-relaxed font-normal mb-8 max-w-2xl">
                Accelerate edge computing and industrial innovation with Aiegx Computer on Modules built on the industry-leading NXP® i.MX applications processor family. Delivering exceptional compute scalability from ultra-low power IoT microcontrollers to hexa-core neural vision engines, NXP i.MX modules integrate hardware-enforced EdgeLock® security, advanced 2D/3D GPU multimedia acceleration, and deterministic real-time control for demanding medical devices, automotive telematics, smart energy, and autonomous robotics.
              </p>

              {/* Supported i.MX Processor Family Fast-Links */}
              <div className="w-full mb-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-white/50 font-semibold block mb-3">
                  EXPLORE PROCESSOR FAMILIES
                </span>
                
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => {
                      setActiveFamily('imx9');
                      scrollToSection('imx9');
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 bg-[#17264D] hover:bg-[#1f3366] text-[#42D9F5] border border-[#42D9F5]/40 hover:shadow-md hover:shadow-[#42D9F5]/20 focus:outline-none focus:ring-1 focus:ring-[#42D9F5]"
                  >
                    <span>i.MX 9 Series</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      setActiveFamily('imx8');
                      scrollToSection('imx8');
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 bg-[#17264D] hover:bg-[#1f3366] text-[#42D9F5] border border-[#42D9F5]/40 hover:shadow-md hover:shadow-[#42D9F5]/20 focus:outline-none focus:ring-1 focus:ring-[#42D9F5]"
                  >
                    <span>i.MX 8 Series</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => scrollToSection('legacy-families')}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
                  >
                    <span>i.MX 6 Series</span>
                    <span className="text-[10px] text-white/40">10+ Yr Longevity</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('legacy-families')}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
                  >
                    <span>i.MX 7 Series</span>
                    <span className="text-[10px] text-white/40">Low Power</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('imx9')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white font-semibold text-sm shadow-lg shadow-[#3478F6]/25 hover:shadow-[#42D9F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#42D9F5]"
                >
                  <span>Explore i.MX 9 Modules</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('webinar-section')}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/10 hover:border-white/20 text-sm font-medium transition-all duration-200 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#42D9F5]" />
                  <span>Technical Webinar</span>
                </button>
              </div>

            </div>

            {/* Right Column: Media / Video Showcase Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#121c3d]/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60 relative group hover:border-[#42D9F5]/40 transition-all duration-300">
                
                {/* Decorative Top Cyan Accent */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#42D9F5]/40 to-transparent" />

                {/* Video Preview Card */}
                <div 
                  onClick={() => setVideoModalOpen(true)}
                  className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0a1024] border border-white/10 cursor-pointer group/video flex items-center justify-center shadow-lg shadow-black/40"
                  role="button"
                  aria-label="Play NXP i.MX Computer on Modules overview video"
                >
                  <img 
                    src="/images/hero-som-module.jpg"
                    alt="NXP i.MX Hardware Architecture Overview Video"
                    className="w-full h-full object-cover opacity-60 group-hover/video:scale-105 group-hover/video:opacity-75 transition-all duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute z-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#3478F6] to-[#42D9F5] flex items-center justify-center text-white shadow-xl shadow-[#3478F6]/50 group-hover/video:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 ml-0.5 fill-current text-white" />
                  </div>

                  {/* Video Runtime Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-md border border-white/10">
                    12:45
                  </div>
                </div>

                {/* Video Info Beneath */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#42D9F5] mb-1 font-semibold uppercase tracking-wider">
                    <span>TECHNICAL VIDEO BRIEF</span>
                    <span>WATCH ON DEMAND</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#42D9F5] transition-colors line-clamp-1">
                    NXP i.MX Architecture & Edge Machine Learning Bring-Up
                  </h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">
                    Aiegx senior hardware architects dive into eIQ Neutron NPU acceleration, Yocto BSP integration, and pinout compatibility.
                  </p>
                </div>

                {/* Partner Details Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>EdgeLock® Certified</span>
                  </span>
                  <span className="text-[#42D9F5] font-semibold">15+ Yr Longevity</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          WEBINAR & TECHNICAL RESOURCES CALLOUT BANNER
         ========================================================================= */}
      <section 
        id="webinar-section"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#0d1633] via-[#152347] to-[#0d1633] relative overflow-hidden"
      >
        {/* Section Content Wrapper */}
        <div className="section-container relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#17264D] border border-[#42D9F5]/30 flex items-center justify-center text-[#42D9F5] flex-shrink-0 shadow-md">
                <Calendar className="w-6 h-6 text-[#42D9F5]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#42D9F5] uppercase tracking-wider">
                    UPCOMING TECHNICAL WEBINAR
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold">
                    Free Registration
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-white">
                  Next-Gen Edge Intelligence: Accelerating Inference with NXP i.MX 95 & eIQ® Neutron NPU
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-3xl">
                  Learn how to design industrial-grade carrier boards, reduce system power draw, and deploy pre-trained neural networks with sub-millisecond deterministic latency.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-full lg:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white font-semibold text-sm shadow-lg shadow-[#3478F6]/25 hover:shadow-[#42D9F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Register for Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: NXP i.MX 9 PRODUCT SECTION (Verdin, Aquila, SMARC)
         ========================================================================= */}
      <section 
        id="imx9" 
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#101936] text-white"
      >
        {/* Section Content Wrapper */}
        <div className="section-container relative">
          
          {/* Section Header */}
          <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider mb-1 font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>NXP i.MX 9 Applications Processors</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1733] tracking-tight">
                NXP i.MX 9 <span className="bg-gradient-to-r from-[#0284C7] to-[#3285FF] bg-clip-text text-transparent">Computer on Modules</span>
              </h2>
            </div>

            <span className="text-xs font-mono text-slate-600 bg-white/80 border border-[#BAE6FD] px-3 py-1 rounded-full self-start sm:self-center font-semibold">
              3 Configurations Available
            </span>
          </div>

          {/* Three Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imx9Products.map((prod) => (
              <div 
                key={prod.id}
                className="rounded-2xl bg-[#121c3d]/90 border border-white/10 hover:border-[#42D9F5]/50 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top: Image & Header Badges */}
                <div>
                  <div className="p-6 bg-[#0e1630] border-b border-white/10 relative flex items-center justify-center overflow-hidden">
                    
                    {/* Top Status Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20">
                      <span className="text-[11px] font-mono font-bold text-[#42D9F5] bg-[#17264D]/90 border border-[#42D9F5]/30 px-2.5 py-0.5 rounded-md">
                        {prod.badge}
                      </span>
                      <span className="text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                        {prod.formFactor}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="h-48 w-full flex items-center justify-center p-2 relative z-10 pt-6">
                      <img 
                        src={prod.image} 
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Card Content & Specifications */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#42D9F5] transition-colors">
                      {prod.name}
                    </h3>
                    
                    <p className="text-xs font-mono text-[#42D9F5] mt-1 mb-5">
                      {prod.processor}
                    </p>

                    {/* Specifications Grid */}
                    <div className="space-y-2.5 text-xs border-y border-white/10 py-4 mb-5">
                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">Real-Time Core</span>
                        <span className="text-white font-mono text-right font-medium text-[11px]">{prod.realTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">Memory & Storage</span>
                        <span className="text-white font-mono text-right font-medium text-[11px]">{prod.ram} • {prod.flash}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">Neural Engine</span>
                        <span className="text-[#42D9F5] font-mono text-right font-medium text-[11px]">{prod.npu}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">3D GPU Graphics</span>
                        <span className="text-white font-mono text-right font-medium text-[11px]">{prod.gpu}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">Vision & Codec</span>
                        <span className="text-white font-mono text-right font-medium text-[11px]">{prod.ispVpu}</span>
                      </div>
                    </div>

                    {/* Operating System Badges */}
                    <div className="mb-4">
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
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
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
          SECTION 4: NXP i.MX 8M Mini/Nano | Plus (Separate Section)
         ========================================================================= */}
      <section 
        id="imx8" 
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#101936] via-[#122047] to-[#101936] text-white"
      >
        {/* Section Content Wrapper */}
        <div className="section-container relative">
          
          {/* Section Header */}
          <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider mb-1 font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>NXP i.MX 8M Multiprocessor Lineup</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1733] tracking-tight">
                NXP i.MX 8M <span className="bg-gradient-to-r from-[#0284C7] to-[#3285FF] bg-clip-text text-transparent">Mini/Nano | Plus</span>
              </h2>
            </div>

            <span className="text-xs font-mono text-slate-600 bg-white/80 border border-[#BAE6FD] px-3 py-1 rounded-full self-start sm:self-center font-semibold">
              15+ Year Longevity Commitment
            </span>
          </div>

          {/* Three Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imx8Products.map((prod) => (
              <div 
                key={prod.id}
                className="rounded-2xl bg-[#121c3d]/90 border border-white/10 hover:border-[#42D9F5]/50 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top: Image & Header Badges */}
                <div>
                  <div className="p-6 bg-[#0e1630] border-b border-white/10 relative flex items-center justify-center overflow-hidden">
                    
                    {/* Top Status Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20">
                      <span className="text-[11px] font-mono font-bold text-[#42D9F5] bg-[#17264D]/90 border border-[#42D9F5]/30 px-2.5 py-0.5 rounded-md">
                        {prod.badge}
                      </span>
                      <span className="text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                        {prod.formFactor}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="h-48 w-full flex items-center justify-center p-2 relative z-10 pt-6">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Card Content & Specifications */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#42D9F5] transition-colors">
                      {prod.name}
                    </h3>
                    
                    <p className="text-xs font-mono text-[#42D9F5] mt-1 mb-5">
                      {prod.processor}
                    </p>

                    {/* Specifications Grid */}
                    <div className="space-y-2.5 text-xs border-y border-white/10 py-4 mb-5">
                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">Real-Time Core</span>
                        <span className="text-white font-mono text-right font-medium text-[11px]">{prod.realTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">Memory & Flash</span>
                        <span className="text-white font-mono text-right font-medium text-[11px]">{prod.ram} • {prod.flash}</span>
                      </div>

                      {prod.npu && (
                        <div className="flex items-center justify-between">
                          <span className="text-white/50 font-medium">Neural NPU</span>
                          <span className="text-[#42D9F5] font-mono text-right font-medium text-[11px]">{prod.npu}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">Graphics & VPU</span>
                        <span className="text-white font-mono text-right font-medium text-[11px]">{prod.gpu || prod.ispVpu}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/50 font-medium">Connectivity</span>
                        <span className="text-white font-mono text-right font-medium text-[11px] truncate max-w-[180px]">{prod.connectivity}</span>
                      </div>
                    </div>

                    {/* Operating System Badges */}
                    <div className="mb-4">
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
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
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
          SECTION 5: LEGACY i.MX 6 & i.MX 7 LONGEVITY NOTICE & COMPARISON
         ========================================================================= */}
      <section 
        id="legacy-families"
        className="py-16 sm:py-20 lg:py-24 bg-[#0e1630] relative"
      >
        {/* Section Content Wrapper */}
        <div className="section-container relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#42D9F5] uppercase tracking-wider font-semibold block mb-2">
                LEGACY ARCHITECTURE LIFECYCLE COMMITMENT
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                NXP i.MX 6 & i.MX 7 Supply Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Aiegx maintains active production and long-term hardware support for Colibri i.MX 6, Apalis i.MX 6, and Colibri i.MX 7 System on Modules. Designed for medical instrumentation and aerospace retrofits requiring 10+ to 15+ years of continuous guaranteed availability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <a 
                href="#developers"
                onClick={handleNavigateHome}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#17264D] hover:bg-[#1f3366] border border-white/10 hover:border-[#42D9F5] text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 text-center"
              >
                Request Lifecycle Document
              </a>
              <a 
                href="#products"
                onClick={handleNavigateHome}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 text-center"
              >
                Pin-Upgrade Guide
              </a>
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
                  <span className="text-xs font-mono text-white/50 block mb-1">PROCESSOR CORES</span>
                  <p className="text-sm font-semibold text-white">{selectedProduct.processor}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#17264D]/60 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">REAL-TIME COPROCESSOR</span>
                  <p className="text-sm font-semibold text-white">{selectedProduct.realTime}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#17264D]/60 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">RAM & EMBEDDED FLASH</span>
                  <p className="text-sm font-semibold text-white">{selectedProduct.ram} • {selectedProduct.flash}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#17264D]/60 border border-white/10">
                  <span className="text-xs font-mono text-white/50 block mb-1">LIFECYCLE SUPPLY</span>
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
                Evaluation kits available for immediate dispatch
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

      {/* =========================================================================
          INTERACTIVE MODAL: Video Playback Modal
         ========================================================================= */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setVideoModalOpen(false)}
          />
          <div className="relative bg-[#101936] border border-white/20 rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl z-10 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs font-mono text-[#42D9F5] font-semibold">
                NXP i.MX Hardware Architecture & eIQ ML Deep Dive
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-lg text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center relative p-6 border border-white/10">
              <img 
                src="/images/hero-som-module.jpg"
                alt="Video preview" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center max-w-md p-6 rounded-2xl bg-[#101936]/80 backdrop-blur-md border border-white/10">
                <Play className="w-12 h-12 text-[#42D9F5] mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  Session Replay & Architecture Stream
                </h4>
                <p className="text-xs text-white/70 mb-4 leading-relaxed">
                  The complete 45-minute technical briefing by Aiegx hardware engineers covering NXP i.MX 95 eIQ Neural Processing is scheduled for live streaming.
                </p>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white text-xs font-mono uppercase font-bold"
                >
                  Download Presentation Slides (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
