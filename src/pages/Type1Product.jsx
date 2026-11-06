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
  Activity,
  HardDrive,
  Plus,
  Minus,
  Video,
  Play,
  FileText,
  Network,
  Users,
  Compass,
  Mail,
  ExternalLink,
  Sliders,
  Terminal,
  Camera,
  Thermometer,
  Clock,
  Radio,
  Share2,
  Download
} from 'lucide-react';

export default function Type1Product() {
  // State for interactive modals and expandable cards
  const [activeModal, setActiveModal] = useState(null); // 'datasheet' | 'block-diagram' | 'webinar' | 'contact' | 'edge-ai-studio' | null
  const [expandedHighlight, setExpandedHighlight] = useState(null); // ID of expanded card or null

  const handleNavigateHome = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
  };

  const pillButtons = [
    { id: 'datasheet', label: 'Datasheet', icon: FileText },
    { id: 'block-diagram', label: 'Block Diagram', icon: Network },
    { id: 'developer-center', label: 'Developer Center', icon: Terminal },
    { id: 'toradex-community', label: 'Toradex Community', icon: Users },
    { id: 'why-toradex', label: 'Why Toradex', icon: Compass },
    { id: 'aquila-family', label: 'Aquila Family', icon: Layers },
    { id: 'contact', label: 'Contact Us', icon: Mail }
  ];

  // 8 Hardware highlights (4 per row in 4-column responsive grid)
  const hardwareHighlights = [
    {
      id: 'cortex-a72',
      title: 'Higher Performance with 8x ARM Cortex-A72 Cores',
      category: 'Processing Compute',
      shortDesc: 'Up to 8x Arm® Cortex®-A72 64-bit cores operating up to 2.0 GHz, coupled with dual Cortex-R5F lockstep cores for real-time safety.',
      illustration: 'processor',
      accentColor: 'cyan',
      details: [
        '8x high-performance 64-bit Arm Cortex-A72 cores with 1MB shared L2 cache per cluster',
        'Dual-core Arm Cortex-R5F microcontroller subsystem with split/lockstep execution for SIL-3 safety',
        'Hardware virtualization and ARM TrustZone cryptographic execution environment',
        'Peak compute throughput of ~100k DMIPS for concurrent industrial algorithms'
      ]
    },
    {
      id: 'ai-vision',
      title: 'Built for AI and Computer Vision Applications',
      category: 'Perception Engine',
      shortDesc: 'Massive parallel ISP and multi-camera deserializers supporting up to 12 simultaneous 1080p camera inputs at full 60 FPS.',
      illustration: 'camera',
      accentColor: 'green',
      details: [
        '3x Quad-lane MIPI CSI-2 interfaces supporting up to 12 Full HD cameras concurrently',
        'Integrated hardware ISP with HDR, WDR, demosaicing, lens distortion correction & 3D noise reduction',
        'Hardware video encoder/decoder capable of 4K60 H.264/H.265 multi-stream processing',
        'Direct DMA paths from camera sensors straight into neural network memory spaces'
      ]
    },
    {
      id: 'npu-accel',
      title: 'High-Performance Machine Learning',
      category: 'Neural Accelerator',
      shortDesc: 'Dedicated Deep Learning MMA delivering up to 32 TOPS INT8 performance with sub-5ms low latency inference.',
      illustration: 'ai-chip',
      accentColor: 'cyan',
      details: [
        'Hardware Matrix Multiply Accelerator (MMA) optimized for Convolutional & Transformer architectures',
        'Up to 32 TOPS deep learning inferencing capacity at under 15W total thermal budget',
        'Direct runtime support for PyTorch, TensorFlow Lite, ONNX Runtime, and Apache TVM',
        'Quantization tools for INT8 and FP16 models with minimal accuracy loss'
      ]
    },
    {
      id: 'industrial-reliability',
      title: 'Industrial Reliability',
      category: 'Rugged Design',
      shortDesc: 'Engineered for extreme environments with -40°C to +85°C operating tolerance and 15+ years longevity commitment.',
      illustration: 'shield',
      accentColor: 'green',
      details: [
        '-40°C to +85°C industrial operating temperature qualification with thermal throttling protection',
        'Vibration and shock resistant high-density board-to-board connector pin system',
        'Optional conformal coating for high-humidity, marine, and corrosive dust environments',
        'Guaranteed product availability for 15+ years for long lifecycle industrial & medical deployments'
      ]
    },
    {
      id: 'real-time',
      title: 'Hard Real-Time Ready',
      category: 'Deterministic Control',
      shortDesc: 'Dedicated Cortex-R5F lockstep island and PRU-ICSS for sub-microsecond latency motor loops and industrial fieldbuses.',
      illustration: 'clock',
      accentColor: 'green',
      details: [
        'Programmable Real-Time Unit Industrial Communications SubSystem (PRU-ICSS)',
        'Native hardware implementation of EtherCAT, Profinet, Ethernet/IP, and POWERLINK',
        'Deterministic CAN-FD controllers with zero jitter timing loops for servo motors',
        'Isolated power and clock domains preventing application software crashes from affecting real-time control'
      ]
    },
    {
      id: 'industrial-interfaces',
      title: 'Rich Industrial Interfaces',
      category: 'Connectivity & I/O',
      shortDesc: 'Dual PCIe Gen3 x4 lanes, 2x 10GbE / GbE TSN ports, USB 3.0, and isolated high-speed serial interconnects.',
      illustration: 'network',
      accentColor: 'cyan',
      details: [
        'Dual PCIe Gen3 x4 lanes enabling high-speed NVMe storage, 5G modems, and FPGA expansion',
        'Dual Gigabit Ethernet with IEEE 802.1 Time-Sensitive Networking (TSN) synchronization',
        'USB 3.1 Gen1 Host/Device with multi-gigabit throughput',
        'Comprehensive pinout with UART, SPI, I2C, PWM, and configurable GPIO matrix'
      ]
    },
    {
      id: 'torizon-os',
      title: 'Torizon for Remote Updates, Remote Access and Monitoring',
      category: 'Software Ecosystem',
      shortDesc: 'Enterprise-grade Linux platform with secure containerized OTA updates, fleet telemetry, and zero-touch provisioning.',
      illustration: 'software',
      accentColor: 'green',
      details: [
        'Production-ready Torizon OS based on Debian and Yocto Project with 10+ year security patches',
        'Secure OTA (Over-The-Air) updates powered by Uptane and TUF cryptographic frameworks',
        'Docker container orchestration for rapid microservice deployment and rollback protection',
        'Integrated fleet telemetry, hardware monitoring, and remote web shell access'
      ]
    },
    {
      id: 'aquila-family',
      title: 'Toradex Aquila Family',
      category: 'Form Factor Ecosystem',
      shortDesc: 'High-density board-to-board standard designed for extreme compute SoMs with seamless upgrade paths across processor families.',
      illustration: 'som-family',
      accentColor: 'cyan',
      details: [
        'Proprietary high-speed 400-pin board-to-board connector optimized for multi-gigabit signal integrity',
        'Pin-compatible upgrade roadmap allowing processor swaps without redesigning carrier PCBs',
        'Comprehensive carrier reference designs, Altium schematics, and mechanical 3D CAD files available',
        'Pre-certified modular certifications (FCC, CE, IC) reducing time-to-market by up to 6 months'
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[var(--page-bg)] dark:bg-[#101936] text-[var(--text-primary)] dark:text-white relative selection:bg-[#3478F6]/30 selection:text-[#42D9F5] font-['Times_New_Roman',serif] transition-colors duration-300">
      
      {/* =========================================================================
          HERO SECTION: TI AM69 / TDA4 Computer on Module
         ========================================================================= */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0e1630] via-[#122047] to-[#101936]">
        
        {/* Subtle Geometric Background Circuit Lines */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="aquila-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(66, 217, 245, 0.05)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aquila-grid)" />
          <path d="M 80 180 L 290 180 L 350 240 L 780 240" fill="none" stroke="rgba(66, 217, 245, 0.25)" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="80" cy="180" r="2.5" fill="rgba(66, 217, 245, 0.6)" />
          <circle cx="780" cy="240" r="2.5" fill="rgba(66, 217, 245, 0.6)" />
          <path d="M 520 100 L 740 100 L 800 160 L 1200 160" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
          <circle cx="800" cy="160" r="2" fill="rgba(16, 185, 129, 0.6)" />
        </svg>

        {/* Ambient Radial Glow Lights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] bg-gradient-to-tr from-[#3478F6]/20 via-[#42D9F5]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-[#10B981]/15 via-[#42D9F5]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

        {/* Large Outer Section Container */}
        <div className="section-container relative">
          
          {/* Breadcrumb Navigation: Home > Products > Computer on Modules > By Type > Type 1 */}
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-white/60">
              <li>
                <a 
                  href="/" 
                  onClick={handleNavigateHome}
                  className="flex items-center gap-1.5 hover:text-[#42D9F5] transition-colors focus:outline-none focus:ring-1 focus:ring-[#42D9F5] rounded-sm py-0.5"
                >
                  <HomeIcon className="w-3.5 h-3.5 text-[#42D9F5]" />
                  <span>Home</span>
                </a>
              </li>
              <li className="text-white/30">/</li>
              <li className="text-white/60">Products</li>
              <li className="text-white/30">/</li>
              <li className="text-white/60">Computer on Modules</li>
              <li className="text-white/30">/</li>
              <li className="text-white/60">By Type</li>
              <li className="text-white/30">/</li>
              <li className="text-[#42D9F5] font-semibold flex items-center gap-1.5">
                <span>Type 1 (TI AM69 / TDA4)</span>
              </li>
            </ol>
          </nav>

          {/* Two-Column Hero Grid: Left Content & Right High-Quality Board Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subheading, Description, Bullets, Action Buttons, Webinar */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Family Tag / Top Category */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17264D]/80 border border-[#42D9F5]/30 text-[#42D9F5] text-xs font-mono tracking-wider uppercase font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#42D9F5]" />
                <span>Aquila AM69 / TDA4</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                TI AM69 / TDA4 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#42D9F5] to-[#10B981]">Computer on Module</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                Flagship edge AI performance for complex and demanding workloads, supporting high-speed interfaces for real-time, data-intensive processing at scale.
              </p>

              {/* Key Feature Bullets with Custom Cyan / Green Check Icons */}
              <div className="pt-2 pb-2 space-y-2.5">
                {[
                  'TI AM69 processor with up to 8x Cortex-A72 cores',
                  'Up to 12 concurrent camera streams',
                  'State-of-the-art deep learning accelerator with up to 32 TOPS',
                  'Ideal for robotics, AI, real-time control, and computer vision applications',
                  'Rugged board-to-board connector',
                  'LTS-supported Linux software stack, including OTA, Remote Access, and Device Monitoring'
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#17264D] border border-[#42D9F5]/40 flex items-center justify-center text-[#42D9F5] group-hover:border-[#10B981] group-hover:text-[#10B981] transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-[15px] text-white/90 leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Outlined Pill-Shaped Action Buttons */}
              <div className="pt-4">
                <div className="flex flex-wrap gap-2.5">
                  {pillButtons.map((btn) => {
                    const Icon = btn.icon;
                    return (
                      <button
                        key={btn.id}
                        onClick={() => setActiveModal(btn.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 hover:border-[#42D9F5] bg-[#101936]/60 hover:bg-[#17264D] text-xs sm:text-sm text-white/90 hover:text-[#42D9F5] transition-all duration-200 shadow-sm hover:shadow-[#42D9F5]/10 group focus:outline-none focus:ring-1 focus:ring-[#42D9F5]"
                      >
                        <Icon className="w-3.5 h-3.5 text-white/60 group-hover:text-[#42D9F5] transition-colors" />
                        <span>{btn.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* On-Demand Webinar Callout Card */}
              <div className="pt-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#122047]/90 to-[#0e1630]/90 border border-white/10 hover:border-[#10B981]/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] flex-shrink-0 mt-0.5">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#10B981] font-semibold block">
                        ON-DEMAND WEBINAR
                      </span>
                      <p className="text-sm sm:text-[15px] font-bold text-white mt-0.5">
                        “Next-Gen Industrial PCs: AI-Ready, ARM-Powered, x86-Free”
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveModal('webinar')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#0a1b14] font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[#10B981]/20 flex-shrink-0 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Now</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Texas Instruments Premium Partner Badge & Large Board Image */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              {/* Texas Instruments Premium Partner Badge */}
              <div className="w-full max-w-md mb-4 flex items-center justify-center">
                <div className="px-4 py-2 rounded-xl bg-[#0e1630]/90 border border-red-500/30 flex items-center gap-3 shadow-lg">
                  <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center font-bold text-red-400 text-xs font-mono">
                    TI
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold block">
                      TEXAS INSTRUMENTS
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      Premium Partner Certified Hardware
                    </span>
                  </div>
                </div>
              </div>

              {/* Large Board Image Showcase Container */}
              <div className="w-full max-w-lg relative group">
                
                {/* Glow ring under board */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3478F6]/30 via-[#42D9F5]/20 to-[#10B981]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="relative rounded-3xl bg-[#0b1226]/90 border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center">
                  
                  {/* Top Status Bar on Card */}
                  <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
                    <span className="text-[#42D9F5] font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      32 TOPS FLAGSHIP
                    </span>
                    <span className="text-white/60">AQUILA FORM FACTOR</span>
                  </div>

                  {/* Primary High-Resolution Hardware Image */}
                  <div className="w-full h-64 sm:h-72 flex items-center justify-center relative p-2 overflow-hidden">
                    <img 
                      src="/images/hero-som-module.jpg"
                      alt="TI AM69 / TDA4 Aquila Computer on Module"
                      className="max-h-full max-w-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                      loading="eager"
                    />
                  </div>

                  {/* Board Caption & Quick Specs */}
                  <div className="w-full mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-[#17264D]/60 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">CORES</span>
                      <span className="font-bold text-[#42D9F5]">8x A72</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#17264D]/60 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">NPU</span>
                      <span className="font-bold text-[#10B981]">32 TOPS</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#17264D]/60 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">CAMERAS</span>
                      <span className="font-bold text-white">Up to 12</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          HARDWARE HIGHLIGHTS SECTION (Four-Column Responsive Feature Grid)
         ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0e1630]">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3478F6]/10 blur-[150px] pointer-events-none" />

        {/* Section Content Wrapper */}
        <div className="section-container relative">
          
          {/* Section Header */}
          <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-bold block mb-1">
              HARDWARE HIGHLIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1733] tracking-tight">
              Engineered for High-Bandwidth <span className="bg-gradient-to-r from-[#0284C7] to-[#3285FF] bg-clip-text text-transparent">Autonomous Computing</span>
            </h2>
          </div>

          {/* 4-Column Responsive Grid (2 rows of 4 highlights = 8 total) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareHighlights.map((item, idx) => {
              const isExpanded = expandedHighlight === item.id;
              return (
                <div 
                  key={item.id}
                  className={`rounded-2xl bg-[#101936] border transition-all duration-300 p-6 flex flex-col justify-between relative group ${
                    isExpanded 
                      ? 'border-[#42D9F5] shadow-xl shadow-[#42D9F5]/10 bg-[#122047]' 
                      : 'border-white/10 hover:border-white/25 hover:bg-[#121c3d]'
                  }`}
                >
                  <div>
                    {/* Top Category & Expandable Plus Button */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 font-semibold">
                        {item.category}
                      </span>
                      <button
                        onClick={() => setExpandedHighlight(isExpanded ? null : item.id)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#42D9F5] ${
                          isExpanded 
                            ? 'bg-[#42D9F5] text-[#0e1630]' 
                            : 'bg-white/10 hover:bg-[#42D9F5] hover:text-[#0e1630] text-white/80'
                        }`}
                        title={isExpanded ? 'Collapse' : 'Expand details'}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Feature Illustration / Icon Badge */}
                    <div className="w-12 h-12 rounded-xl bg-[#17264D] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      {item.illustration === 'processor' && <Cpu className="w-6 h-6 text-[#42D9F5]" />}
                      {item.illustration === 'camera' && <Camera className="w-6 h-6 text-[#10B981]" />}
                      {item.illustration === 'ai-chip' && <Sparkles className="w-6 h-6 text-[#42D9F5]" />}
                      {item.illustration === 'shield' && <ShieldCheck className="w-6 h-6 text-[#10B981]" />}
                      {item.illustration === 'clock' && <Clock className="w-6 h-6 text-[#10B981]" />}
                      {item.illustration === 'network' && <Network className="w-6 h-6 text-[#42D9F5]" />}
                      {item.illustration === 'software' && <Layers className="w-6 h-6 text-[#10B981]" />}
                      {item.illustration === 'som-family' && <Server className="w-6 h-6 text-[#42D9F5]" />}
                    </div>

                    {/* Highlight Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-[#42D9F5] transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Concise Description */}
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Expandable Technical Details Drawer */}
                  {isExpanded && (
                    <div className="pt-4 mt-2 border-t border-white/15 space-y-2 animate-in fade-in duration-200">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#42D9F5] font-semibold block mb-1">
                        SPECIFICATION DETAILS
                      </span>
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-xs text-white/90">
                          <ChevronRight className="w-3 h-3 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Subtle Bottom Card Indicator */}
                  {!isExpanded && (
                    <button
                      onClick={() => setExpandedHighlight(item.id)}
                      className="mt-3 text-[11px] font-mono text-[#42D9F5] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          AI AND COMPUTER VISION SECTION
         ========================================================================= */}
      <section className="relative py-24 bg-gradient-to-b from-[#101936] via-[#122047] to-[#101936] overflow-hidden">
        
        {/* Subtle, Low-Opacity Computer-Vision / Neural SVG Vector Visual in Background */}
        <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden flex items-center justify-center">
          <svg className="w-[1200px] h-[800px]" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Neural Graph Nodes and Vision Cones */}
            <circle cx="600" cy="400" r="180" stroke="#42D9F5" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="600" cy="400" r="320" stroke="#10B981" strokeWidth="0.8" />
            <circle cx="600" cy="400" r="460" stroke="#3478F6" strokeWidth="0.5" strokeDasharray="8 6" />
            
            {/* Target Reticles (Simulating Computer Vision Tracking) */}
            <path d="M 450 350 L 500 350 M 450 350 L 450 400" stroke="#42D9F5" strokeWidth="2" />
            <path d="M 750 350 L 700 350 M 750 350 L 750 400" stroke="#42D9F5" strokeWidth="2" />
            <path d="M 450 450 L 500 450 M 450 450 L 450 400" stroke="#42D9F5" strokeWidth="2" />
            <path d="M 750 450 L 700 450 M 750 450 L 750 400" stroke="#42D9F5" strokeWidth="2" />

            {/* Neural Interconnect Rays */}
            <line x1="100" y1="200" x2="600" y2="400" stroke="#42D9F5" strokeWidth="0.75" />
            <line x1="1100" y1="200" x2="600" y2="400" stroke="#10B981" strokeWidth="0.75" />
            <line x1="250" y1="650" x2="600" y2="400" stroke="#3478F6" strokeWidth="0.75" />
            <line x1="950" y1="650" x2="600" y2="400" stroke="#42D9F5" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] font-semibold block mb-2">
              NEURAL INFERENCE & VISION ACCELERATION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              AI and Computer Vision Capabilities
            </h2>
          </div>

          {/* 4 Primary AI Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Pillar 1: 32 TOPS NPU */}
            <div className="p-6 rounded-2xl bg-[#0e1630]/90 border border-white/10 hover:border-[#42D9F5]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#42D9F5]/10 border border-[#42D9F5]/30 flex items-center justify-center text-[#42D9F5] mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                32 TOPS NPU
              </h3>
              <p className="text-xs font-mono text-[#42D9F5] font-semibold uppercase tracking-wider mb-2">
                Low Inference Latency
              </p>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Dedicated Matrix Multiply Accelerator executes complex neural networks (YOLOv8, Transformers, MobileNet) with sub-5ms latency.
              </p>
            </div>

            {/* Pillar 2: ISP and VPU */}
            <div className="p-6 rounded-2xl bg-[#0e1630]/90 border border-white/10 hover:border-[#10B981]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-5">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                ISP and VPU
              </h3>
              <p className="text-xs font-mono text-[#10B981] font-semibold uppercase tracking-wider mb-2">
                Fast Image & Video Processing
              </p>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Hardware Image Signal Processor with WDR, 3D noise reduction, and dedicated 4K60 video codecs without loading main CPU cores.
              </p>
            </div>

            {/* Pillar 3: 3x Quad-Lane MIPI CSI-2 */}
            <div className="p-6 rounded-2xl bg-[#0e1630]/90 border border-white/10 hover:border-[#42D9F5]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#42D9F5]/10 border border-[#42D9F5]/30 flex items-center justify-center text-[#42D9F5] mb-5">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                3x Quad-Lane MIPI CSI-2
              </h3>
              <p className="text-xs font-mono text-[#42D9F5] font-semibold uppercase tracking-wider mb-2">
                Up to 12 Full HD Cameras
              </p>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Massive deserializer bandwidth connects up to 12 cameras concurrently for surround 360° perception in autonomous robotics and vehicles.
              </p>
            </div>

            {/* Pillar 4: State-of-the-Art Tooling */}
            <div className="p-6 rounded-2xl bg-[#0e1630]/90 border border-white/10 hover:border-[#10B981]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-5">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                State-of-the-Art Tooling
              </h3>
              <p className="text-xs font-mono text-[#10B981] font-semibold uppercase tracking-wider mb-2">
                Great Developer Experience
              </p>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Pre-integrated Docker containers, model compiler pipelines, and Python SDKs streamline end-to-end evaluation and deployment.
              </p>
            </div>

          </div>

          {/* Supported Deep Learning Frameworks Card & Edge AI Studio CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0e1630] via-[#122047] to-[#0e1630] border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Framework Logos & Description */}
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-semibold block">
                COMPREHENSIVE FRAMEWORK SUPPORT
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Train Once. Deploy Seamlessly on Aquila AM69.
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Compile and accelerate models trained in your framework of choice with hardware-optimized runtimes:
              </p>

              {/* Framework Badges */}
              <div className="flex flex-wrap gap-3 pt-1">
                {[
                  { name: 'TensorFlow Lite', color: 'border-orange-500/40 text-orange-400 bg-orange-950/20' },
                  { name: 'PyTorch', color: 'border-red-500/40 text-red-400 bg-red-950/20' },
                  { name: 'ONNX Runtime', color: 'border-blue-500/40 text-blue-400 bg-blue-950/20' },
                  { name: 'Apache TVM', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20' }
                ].map((fw, idx) => (
                  <div 
                    key={idx}
                    className={`px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-bold flex items-center gap-2 ${fw.color}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current" />
                    <span>{fw.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Green CTA Button: Try it out on TI's Edge AI Studio */}
            <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center sm:items-start gap-2">
              <button
                onClick={() => setActiveModal('edge-ai-studio')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#0a1b14] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl shadow-[#10B981]/25 flex items-center justify-center gap-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#10B981]"
              >
                <span>Try it out on TI’s Edge AI Studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[11px] font-mono text-white/50 text-center sm:text-left">
                Cloud-based simulation & benchmark reports available
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          JACINTO 7 ARCHITECTURE SECTION
         ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0e1630]">
        
        {/* Section Content Wrapper */}
        <div className="section-container relative">
          
          {/* Section Header */}
          <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-bold block mb-1">
              SOC ARCHITECTURE OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1733] tracking-tight">
              Jacinto™ 7 <span className="bg-gradient-to-r from-[#0284C7] to-[#3285FF] bg-clip-text text-transparent">Architecture</span>
            </h2>
          </div>

          {/* Highlighted Panel: J784S4 Processors */}
          <div className="rounded-3xl bg-gradient-to-b from-[#122047] to-[#101936] border-2 border-[#42D9F5]/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#42D9F5]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Panel Header */}
            <div className="border-b border-white/15 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17264D] border border-[#42D9F5]/40 text-[#42D9F5] text-xs font-mono uppercase font-bold mb-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Flagship Silicon Family</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  J784S4 Processors
                </h3>
                <p className="text-sm text-white/75 mt-1 max-w-2xl">
                  Flagship performance and multi-stream on-device AI inference engineered for high-concurrency industrial automation and ADAS vehicles.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white/60 bg-[#17264D] px-3 py-1.5 rounded-lg border border-white/10">
                  16nm FinFET Architecture
                </span>
                <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/15 px-3 py-1.5 rounded-lg border border-[#10B981]/30 font-semibold">
                  ASIL-D / SIL-3 Ready
                </span>
              </div>
            </div>

            {/* Inside Panel: Two Side-by-Side Cards (Industrial AM69x vs Automotive TDA4x) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: Industrial – AM69x */}
              <div className="rounded-2xl bg-[#0b1226] border border-[#3478F6]/40 p-6 sm:p-7 flex flex-col justify-between hover:border-[#42D9F5] transition-all group">
                <div>
                  
                  {/* Card Title & Badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#42D9F5] font-semibold block">
                        INDUSTRIAL COMPUTING
                      </span>
                      <h4 className="text-xl font-bold text-white group-hover:text-[#42D9F5] transition-colors">
                        Industrial – AM69x
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#17264D] border border-white/10 flex items-center justify-center text-[#42D9F5]">
                      <Server className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Key Applications List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-mono uppercase text-white/50 tracking-wider font-semibold block">
                      TARGET APPLICATIONS
                    </span>
                    {[
                      'Industrial robotics (AMRs, Cobots, Robotic Arms)',
                      'Industrial vision (AOI, defect classification, barcode)',
                      'Industrial PCs (IPC) & Edge AI Gateways'
                    ].map((app, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>

                  {/* AM69 and AM69A Processor Illustrations */}
                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    <span className="text-xs font-mono uppercase text-white/50 tracking-wider font-semibold block">
                      SUPPORTED PROCESSOR SILICON
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-[#17264D]/80 border border-white/10 flex flex-col items-center text-center">
                        <div className="w-8 h-8 rounded-lg bg-[#3478F6]/20 border border-[#42D9F5]/30 flex items-center justify-center mb-1.5">
                          <Cpu className="w-4 h-4 text-[#42D9F5]" />
                        </div>
                        <span className="text-xs font-bold text-white font-mono">AM69</span>
                        <span className="text-[10px] text-[#42D9F5] font-mono">8x A72 • 32 TOPS</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#17264D]/80 border border-white/10 flex flex-col items-center text-center">
                        <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center mb-1.5">
                          <Cpu className="w-4 h-4 text-[#10B981]" />
                        </div>
                        <span className="text-xs font-bold text-white font-mono">AM69A</span>
                        <span className="text-[10px] text-[#10B981] font-mono">Octa-Core • MMA</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                  <span>Pin-Compatible: Aquila CoM</span>
                  <span className="text-[#10B981]">Available Now</span>
                </div>
              </div>

              {/* Card 2: Automotive – TDA4x */}
              <div className="rounded-2xl bg-[#0b1226] border border-[#10B981]/40 p-6 sm:p-7 flex flex-col justify-between hover:border-[#10B981] transition-all group">
                <div>
                  
                  {/* Card Title & Badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#10B981] font-semibold block">
                        AUTOMOTIVE & SAFETY
                      </span>
                      <h4 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors">
                        Automotive – TDA4x
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#17264D] border border-white/10 flex items-center justify-center text-[#10B981]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Key Applications List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-mono uppercase text-white/50 tracking-wider font-semibold block">
                      SAFETY CAPABILITIES & USAGE
                    </span>
                    {[
                      'ADAS and autonomous vehicles (Level 2+ / Level 3)',
                      'Functional Safety Island with dual lockstep Cortex-R5F',
                      'AEC-Q100 automotive temperature grade qualification'
                    ].map((app, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#42D9F5] flex-shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>

                  {/* TDA4AH, TDA4AP, TDA4VH, and TDA4VP Processor Illustrations */}
                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    <span className="text-xs font-mono uppercase text-white/50 tracking-wider font-semibold block">
                      TDA4 SILICON VARIANTS
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { name: 'TDA4AH', desc: '8x A72 ADAS' },
                        { name: 'TDA4AP', desc: 'Lockstep Safe' },
                        { name: 'TDA4VH', desc: 'Multi-Camera' },
                        { name: 'TDA4VP', desc: 'Vision Plus' }
                      ].map((chip, cIdx) => (
                        <div key={cIdx} className="p-2.5 rounded-xl bg-[#17264D]/80 border border-white/10 flex flex-col items-center text-center">
                          <Cpu className="w-3.5 h-3.5 text-[#10B981] mb-1" />
                          <span className="text-xs font-bold text-white font-mono">{chip.name}</span>
                          <span className="text-[9px] text-white/60 font-mono truncate max-w-full">{chip.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                  <span>Safety: ISO 26262 ASIL-D</span>
                  <span className="text-[#42D9F5]">Automotive Grade</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM TECHNICAL CALL-TO-ACTION SECTION
         ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-[#101936]">
        {/* Section Content Wrapper */}
        <div className="section-container relative flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-semibold block mb-2">
              READY TO EVALUATE TYPE 1 HARDWARE?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Accelerate Your Next-Gen Edge AI Platform
            </h3>
            <p className="mt-2 text-sm text-white/70 max-w-xl">
              Get early access to Aquila AM69 evaluation kits, carrier board schematics, and direct engineering support from our embedded specialists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setActiveModal('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#42D9F5] hover:bg-[#38bdf8] text-[#0b1226] font-bold text-sm font-mono uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#42D9F5]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Eval Kit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveModal('datasheet')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm font-mono uppercase tracking-wider border border-white/15 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white/70" />
              <span>Download Specs</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE MODALS FOR PILL BUTTONS, WEBINAR & EDGE AI STUDIO
         ========================================================================= */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setActiveModal(null)}
          />

          {/* Modal Panel */}
          <div className="relative bg-[#101936] border border-white/20 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl shadow-black text-white z-10 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#42D9F5] font-semibold uppercase tracking-wider">
                  TI AM69 / TDA4 AQUILA SOM
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeModal === 'datasheet' && 'Aquila AM69 Hardware Datasheet'}
                  {activeModal === 'block-diagram' && 'Processor & Subsystem Block Diagram'}
                  {activeModal === 'developer-center' && 'Aquila Developer Center & Software Tools'}
                  {activeModal === 'toradex-community' && 'Toradex Community & Technical Forum'}
                  {activeModal === 'why-toradex' && 'Why Toradex: The Modular Advantage'}
                  {activeModal === 'aquila-family' && 'Aquila Form Factor Ecosystem & Carrier Boards'}
                  {activeModal === 'contact' && 'Contact Hardware & FAE Specialist'}
                  {activeModal === 'webinar' && 'Webinar: Next-Gen Industrial PCs'}
                  {activeModal === 'edge-ai-studio' && 'Texas Instruments Edge AI Studio'}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Based on activeModal */}
            <div className="py-6 space-y-5 max-h-[60vh] overflow-y-auto pr-2 text-sm text-white/80">
              
              {/* DATASHEET MODAL */}
              {activeModal === 'datasheet' && (
                <div className="space-y-4">
                  <p>
                    The Aquila AM69 / TDA4 Computer on Module combines the high-performance Texas Instruments J784S4 SoC with up to 32GB LPDDR4x RAM and 128GB eMMC 5.1 storage.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-[#17264D]/60 border border-white/10">
                      <span className="text-white/50 block mb-1">PROCESSOR</span>
                      <p className="text-white font-bold">8x Cortex-A72 @ 2.0 GHz</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#17264D]/60 border border-white/10">
                      <span className="text-white/50 block mb-1">NPU ENGINE</span>
                      <p className="text-[#10B981] font-bold">32 TOPS Deep Learning MMA</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#17264D]/60 border border-white/10">
                      <span className="text-white/50 block mb-1">ETHERNET TSN</span>
                      <p className="text-white font-bold">2x 10GbE / GbE with TSN</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#17264D]/60 border border-white/10">
                      <span className="text-white/50 block mb-1">SAFETY ISOLATION</span>
                      <p className="text-[#42D9F5] font-bold">Dual Lockstep Cortex-R5F</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b1226] border border-white/10 text-xs text-white/70">
                    Full hardware electrical characteristics, signal pinout table, and mechanical drawings (STEP / PDF) are available for verified enterprise accounts.
                  </div>
                </div>
              )}

              {/* BLOCK DIAGRAM MODAL */}
              {activeModal === 'block-diagram' && (
                <div className="space-y-4">
                  <p>
                    Architectural block representation of the J784S4 SoC interconnect on the Aquila module:
                  </p>
                  <div className="p-6 rounded-2xl bg-[#0b1226] border border-white/15 space-y-4 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-[#17264D] border border-[#42D9F5]/40 text-center font-bold text-[#42D9F5]">
                      8x ARM CORTEX-A72 APPLICATION CORES (2.0 GHz)
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-bold">
                        32 TOPS MMA DEEP LEARNING NPU
                      </div>
                      <div className="p-3 rounded-xl bg-[#3478F6]/20 border border-[#3478F6]/40 text-blue-300 font-bold">
                        IMG BXS-4-64 3D GPU + 4K60 VPU
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                        Dual Lockstep R5F
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                        Hardware ISP & 3x MIPI
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                        Dual PCIe Gen3 + TSN
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEVELOPER CENTER MODAL */}
              {activeModal === 'developer-center' && (
                <div className="space-y-4">
                  <p>
                    Access pre-configured BSPs, container recipes, and documentation for the Aquila AM69:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
                      <span><strong>Torizon OS:</strong> Industrial container platform with zero-touch OTA updates.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
                      <span><strong>Yocto Project / OpenEmbedded:</strong> Custom reference Linux BSP layer repository.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
                      <span><strong>ROS 2 Humble / Iron:</strong> Pre-built robotics perception & navigation Docker images.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
                      <span><strong>Edge AI SDK:</strong> Python & C++ model deployment examples with GStreamer pipelines.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* WEBINAR MODAL */}
              {activeModal === 'webinar' && (
                <div className="space-y-4">
                  <div className="aspect-video w-full rounded-2xl bg-black/80 border border-white/15 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="w-16 h-16 rounded-full bg-[#10B981] flex items-center justify-center text-[#0a1b14] shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                    <span className="text-xs font-mono text-white/70 mt-3">
                      Playing On-Demand Technical Session (48 min)
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-base">
                    “Next-Gen Industrial PCs: AI-Ready, ARM-Powered, x86-Free”
                  </h4>
                  <p className="text-xs text-white/75">
                    Learn why leading automation OEMs are replacing legacy x86 box PCs with Arm-based computer-on-modules featuring dedicated neural accelerators and hard real-time safety cores.
                  </p>
                </div>
              )}

              {/* EDGE AI STUDIO MODAL */}
              {activeModal === 'edge-ai-studio' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#0b1226] border border-[#10B981]/40 space-y-2">
                    <span className="text-xs font-mono text-[#10B981] font-bold uppercase block">
                      CLOUD-BASED DEEP LEARNING PROFILER
                    </span>
                    <p className="text-xs text-white/80 leading-relaxed">
                      TI’s Edge AI Studio allows developers to benchmark their custom models on real AM69 silicon remotely before acquiring hardware.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      <span>Upload ONNX, TensorFlow Lite, or PyTorch models</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      <span>Automated 8-bit quantization with accuracy benchmarking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      <span>Measure FPS, milliwatt consumption, and memory footprint on remote testbeds</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* CONTACT MODAL */}
              {activeModal === 'contact' && (
                <div className="space-y-4">
                  <p className="text-xs text-white/80">
                    Connect directly with an Aiegx Field Application Engineer (FAE) to discuss pinout compatibility, custom carrier board requirements, or volume pricing.
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); alert('Thank you! A hardware specialist will contact you shortly.'); }} className="space-y-3">
                    <div>
                      <label className="text-xs font-mono text-white/60 block mb-1">WORK EMAIL</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="engineer@company.com" 
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1630] border border-white/15 text-white text-xs focus:outline-none focus:border-[#42D9F5]" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-white/60 block mb-1">PROJECT DETAILS / VOLUMES</label>
                      <textarea 
                        rows={3} 
                        placeholder="Tell us about your target application, camera requirements, or expected SOP date..." 
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1630] border border-white/15 text-white text-xs focus:outline-none focus:border-[#42D9F5]" 
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#42D9F5] hover:bg-[#38bdf8] text-[#0b1226] font-bold text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Submit Evaluation Request
                    </button>
                  </form>
                </div>
              )}

              {/* GENERIC FALLBACK FOR OTHER PILLS */}
              {['toradex-community', 'why-toradex', 'aquila-family'].includes(activeModal) && (
                <div className="space-y-4">
                  <p>
                    {activeModal === 'toradex-community' && 'Join thousands of embedded Linux developers sharing code, carrier designs, and kernel patches.'}
                    {activeModal === 'why-toradex' && 'Proven 15+ year product longevity, pin-compatible migration paths, and world-class direct FAE support minimize business risk.'}
                    {activeModal === 'aquila-family' && 'The Aquila standard offers high-density board-to-board connectors optimized for ultra-high compute SoMs with high thermal dissipation.'}
                  </p>
                  <div className="p-4 rounded-xl bg-[#0b1226] border border-white/10 text-xs text-white/70">
                    Comprehensive technical reference guides, carrier schematics in Altium Designer, and design checklists are available in our developer portal.
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono uppercase font-semibold border border-white/10"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
