import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ChevronRight, 
  ArrowRight, 
  ExternalLink, 
  Cpu, 
  Bot, 
  Stethoscope, 
  Truck, 
  Building2, 
  Zap, 
  ShoppingBag, 
  MonitorPlay, 
  FileText, 
  CheckCircle2 
} from 'lucide-react';

// Comprehensive Applications Catalog Data Structure
const applicationsData = {
  industrial: {
    id: 'industrial',
    name: 'Industrial Automation & Robotics',
    icon: Bot,
    subtitle: 'Autonomous manufacturing, robotic precision, and real-time deterministic control.',
    discover: {
      title: 'INDUSTRY AUTOMATION & ROBOTICS',
      subheading: 'Discover the industry',
      description: 'Key applications, technologies and benefits.'
    },
    stories: [
      {
        title: 'Edge AI for Industrial Applications',
        company: 'BE.services & COLIGO',
        href: '#applications'
      },
      {
        title: 'Machine Vision for Printing',
        company: 'Professional Software Associates, Inc.',
        href: '#applications'
      },
      {
        title: '3D Real-Time Computer Vision',
        company: 'Roboception',
        href: '#applications'
      },
      {
        title: 'HMI for Pipeline Inspection Crawler Systems',
        company: 'iPEK',
        href: '#applications'
      },
      {
        title: 'Advanced Cognitive Robotics',
        company: 'Neura Robotics',
        href: '#applications'
      },
      {
        title: 'The Future of Composite Manufacturing',
        company: '9T Labs',
        href: '#applications'
      }
    ],
    overview: {
      summary: 'High-reliability compute platforms engineered for deterministic cycle times, SIL-3 safety certifications, and harsh factory floor environments (-40°C to +85°C).',
      technologies: [
        'Deterministic Real-Time Ethernet & TSN (IEEE 802.1)',
        'ROS 2 Humble & Industrial Linux LTS Kernels',
        'On-die Neural Vision & Real-Time Defect Detection',
        'Multi-axis Industrial Fieldbuses: CAN-FD, EtherCAT, Modbus'
      ],
      products: [
        { name: 'Aiegx Verdin i.MX 8M Plus', type: '2.3 TOPS NPU, Dual GbE, Isolated CAN-FD', href: '#products' },
        { name: 'Aiegx Apalis AM69', type: '32 TOPS Deep Learning, 8x Cortex-A72', href: '#products' },
        { name: 'Synapse Industrial Edge Carrier', type: 'Full Breakout for Factory Automation', href: '#products' }
      ],
      resources: [
        { name: 'Industrial Functional Safety Whitepaper (PDF)', href: '#developers' },
        { name: 'Deterministic RT-Linux Latency Benchmarks', href: '#developers' }
      ]
    }
  },

  healthcare: {
    id: 'healthcare',
    name: 'Healthcare, Medical & Laboratory',
    icon: Stethoscope,
    subtitle: 'Medical-grade diagnostic equipment, laboratory analyzers, and surgical robotics.',
    discover: {
      title: 'HEALTHCARE, MEDICAL & LABORATORY',
      subheading: 'Discover the industry',
      description: 'Key applications, technologies and benefits.'
    },
    stories: [
      {
        title: 'AI-Assisted Diagnostic Ultrasound Systems',
        company: 'MediScan Diagnostics',
        href: '#applications'
      },
      {
        title: 'Automated Hematology & Point-of-Care Analyzers',
        company: 'LabTech Systems',
        href: '#applications'
      },
      {
        title: 'Precision Surgical Robot Arm Controller',
        company: 'Biorobotics Group',
        href: '#applications'
      },
      {
        title: 'Bedside Patient Monitoring & Telemetry Hub',
        company: 'VitalCare Networks',
        href: '#applications'
      },
      {
        title: 'Portable Blood Gas Analyzer System',
        company: 'OptiMed Instruments',
        href: '#applications'
      }
    ],
    overview: {
      summary: 'IEC 60601-1 compliant hardware platforms with guaranteed 10+ year product lifecycle longevity, protecting your investments in FDA and CE certifications.',
      technologies: [
        'Zero-latency Sub-millisecond MIPI-CSI Video Pipelines',
        'Hardware Crypto Engine for Encrypted Patient Telemetry',
        'Fanless Convection Thermal Design for Sterile Cleanrooms',
        'High-resolution Multi-touch DICOM Medical UI Integration'
      ],
      products: [
        { name: 'Aiegx Verdin i.MX 8M Mini', type: 'Low-Power Fanless Audio/Video CoM', href: '#products' },
        { name: 'Aiegx Colibri i.MX 8X', type: 'Ultra-Compact SO-DIMM with ECC Memory', href: '#products' },
        { name: 'Aiegx Medical Evaluation Carrier', type: 'Certified Isolated Power & Medical I/O', href: '#products' }
      ],
      resources: [
        { name: 'Medical Equipment Certification Roadmap', href: '#developers' },
        { name: 'Longevity Planning for 10+ Year Clinical Devices', href: '#why-aiegx' }
      ]
    }
  },

  transportation: {
    id: 'transportation',
    name: 'Transportation, Logistics and Agriculture',
    icon: Truck,
    subtitle: 'Autonomous mobile robots (AMRs), vehicle telematics, and precision ag-tech.',
    discover: {
      title: 'TRANSPORTATION, LOGISTICS AND AGRICULTURE',
      subheading: 'Discover the industry',
      description: 'Key applications, technologies and benefits.'
    },
    stories: [
      {
        title: 'Autonomous Mobile Robot Warehouse Navigation',
        company: 'LogiFleet Automation',
        href: '#applications'
      },
      {
        title: 'Autonomous Vineyard & Crop Sprayer Guidance',
        company: 'AgroVision Tech',
        href: '#applications'
      },
      {
        title: 'Smart Harbor Crane Anti-Collision Radar',
        company: 'Maritime Logistics Automation',
        href: '#applications'
      },
      {
        title: 'Commercial Fleet Telematics & Predictive Fuel AI',
        company: 'FleetPulse Global',
        href: '#applications'
      },
      {
        title: 'Electric Bus Powertrain Gateway & Diagnostics',
        company: 'MetroMobility Systems',
        href: '#applications'
      }
    ],
    overview: {
      summary: 'Automotive and agricultural grade compute modules engineered for wide DC voltage inputs, severe shock/vibration tolerance, and high-precision GNSS tracking.',
      technologies: [
        'Multi-camera Sensor Fusion (LiDAR, Radar & Cameras)',
        'Isolated Dual CAN-FD Buses with SAE J1939 Stacks',
        'Extended Automotive Temperature Range (-40°C to +105°C)',
        'Rugged Sealed IP67 Aluminum Chassis Compatibility'
      ],
      products: [
        { name: 'Aiegx Apalis AM69', type: '32 TOPS Deep Learning, 4x MIPI-CSI Inputs', href: '#products' },
        { name: 'Aiegx Verdin AM62', type: 'Ultra-Low Idle Power for Battery Vehicles', href: '#products' },
        { name: 'Rugged Telematics Vehicle Carrier', type: 'Ignition Sense & 9V-36V Wide Input', href: '#products' }
      ],
      resources: [
        { name: 'Heavy Machinery & AgTech Ruggedization Guide', href: '#developers' },
        { name: 'Autonomous Mobile Robot (AMR) Blueprint', href: '#developers' }
      ]
    }
  },

  infrastructure: {
    id: 'infrastructure',
    name: 'Infrastructure, Building & Security',
    icon: Building2,
    subtitle: 'Smart commercial building automation, surveillance vision, and access management.',
    discover: {
      title: 'INFRASTRUCTURE, BUILDING & SECURITY',
      subheading: 'Discover the industry',
      description: 'Key applications, technologies and benefits.'
    },
    stories: [
      {
        title: 'AI Perimeter Vision & Intrusion Detection',
        company: 'SecureMatrix Systems',
        href: '#applications'
      },
      {
        title: 'Zero-Energy HVAC & Smart Facility Automation',
        company: 'EcoBuilding Controls',
        href: '#applications'
      },
      {
        title: 'Biometric Edge Access & Contactless Turnstiles',
        company: 'GateLock Security',
        href: '#applications'
      },
      {
        title: 'Bridge Structural Health Monitoring Network',
        company: 'InfraCheck Sensor Systems',
        href: '#applications'
      },
      {
        title: 'Subway Passenger Flow Counter & Thermal AI',
        company: 'UrbanTransit Solutions',
        href: '#applications'
      }
    ],
    overview: {
      summary: 'Energy-efficient edge systems designed to run 24/7/365 inside electrical cabinets without active cooling fans, powering smart cities and commercial spaces.',
      technologies: [
        'Local Edge Video Analytics Without Cloud Bandwidth',
        'BACnet/IP, Modbus TCP & KNX Protocol Bridging',
        'Zero-Trust TPM 2.0 Cryptographic Hardware Security',
        'Ultra-Low Idle Draw (< 1.5W) for Solar/POE Endpoints'
      ],
      products: [
        { name: 'Aiegx Verdin AM62', type: 'Quad A53, Dual GbE, Sub-2W Power Profile', href: '#products' },
        { name: 'Aiegx Verdin i.MX 93', type: 'Integrated microNPU for Facial Verification', href: '#products' },
        { name: 'Dahlia Compact Carrier Board', type: 'DIN-Rail Mountable Evaluation Board', href: '#products' }
      ],
      resources: [
        { name: 'Edge AI Video Analytics Deployment Reference', href: '#developers' },
        { name: 'Smart Building BACnet Integration Whitepaper', href: '#developers' }
      ]
    }
  },

  energy: {
    id: 'energy',
    name: 'Energy, Utilities & Renewables',
    icon: Zap,
    subtitle: 'Solar inverter control, smart grid telemetry, and wind turbine pitch optimization.',
    discover: {
      title: 'ENERGY, UTILITIES & RENEWABLES',
      subheading: 'Discover the industry',
      description: 'Key applications, technologies and benefits.'
    },
    stories: [
      {
        title: 'Microgrid Controller & Battery Storage Hub',
        company: 'VoltGrid Solutions',
        href: '#applications'
      },
      {
        title: 'Photovoltaic Solar Inverter String Monitor',
        company: 'SunPeak Energy',
        href: '#applications'
      },
      {
        title: 'Wind Turbine Condition & Vibration Analyzer',
        company: 'AeroPower Systems',
        href: '#applications'
      },
      {
        title: 'Substation SCADA & Power Quality Recorder',
        company: 'GridGuard Utilities',
        href: '#applications'
      },
      {
        title: 'Smart EV Fast-Charging Station Gateway',
        company: 'ChargeCore Networks',
        href: '#applications'
      }
    ],
    overview: {
      summary: 'High electromagnetic immunity (EMC) and lightning surge resistant platforms supporting IEC 61850 substation standards and wide utility voltages.',
      technologies: [
        'IEC 61850 & DNP3 Deterministic Power Grid Protocols',
        'Isolated Galvanic RS-485 / Fiber Optic Interfaces',
        'Hardware Watchdogs for Unattended 15-Year Remote Run',
        'Atomic A/B Over-The-Air Firmware Recovery'
      ],
      products: [
        { name: 'Aiegx Verdin AM62P', type: 'Extended Temperature -40°C to +105°C', href: '#products' },
        { name: 'Aiegx Apalis i.MX 8QM', type: 'High Throughput SCADA Telemetry Engine', href: '#products' },
        { name: 'Substation Edge Gateway Carrier', type: 'Galvanically Isolated Industrial I/O', href: '#products' }
      ],
      resources: [
        { name: 'IEC 61850 Power Substation Architecture', href: '#developers' },
        { name: 'Zero-Downtime Grid Fleet Updates via OTA', href: '#developers' }
      ]
    }
  },

  retail: {
    id: 'retail',
    name: 'Retail and Self-service',
    icon: ShoppingBag,
    subtitle: 'Interactive kiosks, smart checkout stations, and automated POS terminals.',
    discover: {
      title: 'RETAIL AND SELF-SERVICE',
      subheading: 'Discover the industry',
      description: 'Key applications, technologies and benefits.'
    },
    stories: [
      {
        title: 'Autonomous AI Self-Checkout Terminal',
        company: 'QuickCart Systems',
        href: '#applications'
      },
      {
        title: 'Smart Interactive Retail Display Kiosks',
        company: 'OmniPoint Retail',
        href: '#applications'
      },
      {
        title: 'Smart Vending & Telemetry Dispenser',
        company: 'VendDirect Networks',
        href: '#applications'
      },
      {
        title: 'Secure PCI-Compliant Edge Payment Gateway',
        company: 'PayEdge Solutions',
        href: '#applications'
      },
      {
        title: 'AI Smart Locker System for Click & Collect',
        company: 'ParcelDrop Systems',
        href: '#applications'
      }
    ],
    overview: {
      summary: 'High-definition multimedia compute solutions featuring multi-display support, hardware accelerated UI rendering, and secure cryptographic payment processing.',
      technologies: [
        'Dual 4K Multi-display Support (HDMI / MIPI-DSI)',
        'Containerized Microservices for Rapid Feature Rollout',
        'Integrated Barcode & RFID Peripherals Handling',
        'Zero-Touch Remote Diagnostics & Maintenance'
      ],
      products: [
        { name: 'Aiegx Verdin i.MX 8M Plus', type: 'Hardware Video Encoder/Decoder & Dual Camera', href: '#products' },
        { name: 'Aiegx Verdin i.MX 95', type: 'Next-Gen 3D Graphics & Neural Accelerator', href: '#products' },
        { name: 'Commercial Kiosk Carrier Board', type: 'USB-C Power Delivery & Peripheral Headers', href: '#products' }
      ],
      resources: [
        { name: 'Smart Kiosk Interactive UI Performance Guide', href: '#developers' },
        { name: 'PCI-Ready Secure Edge Embedded Design', href: '#developers' }
      ]
    }
  },

  signage: {
    id: 'signage',
    name: 'Digital Signage & Entertainment',
    icon: MonitorPlay,
    subtitle: 'Outdoor large-format displays, transit info screens, and casino gaming terminals.',
    discover: {
      title: 'DIGITAL SIGNAGE & ENTERTAINMENT',
      subheading: 'Discover the industry',
      description: 'Key applications, technologies and benefits.'
    },
    stories: [
      {
        title: 'Ultra-HD Multi-Display Airport Transit Boards',
        company: 'SkySign Media',
        href: '#applications'
      },
      {
        title: 'Sunlight-Readable Outdoor Wayfinding Kiosk',
        company: 'CityVision Display',
        href: '#applications'
      },
      {
        title: 'Multi-screen Casino Gaming Terminal & Audio',
        company: 'ApexGaming Systems',
        href: '#applications'
      },
      {
        title: 'Smart EV Charging Station Video Billboard',
        company: 'VoltAd Media',
        href: '#applications'
      }
    ],
    overview: {
      summary: 'Heavy multimedia compute engines capable of continuous 24/7 video decoding in sunlit outdoor enclosures without thermal throttling.',
      technologies: [
        'Hardware H.265 / VP9 4K60 Ultra-HD Video Decoders',
        'Vulkan & OpenGL ES 3.2 High Frame-Rate Graphics',
        'Thermal Throttling Protection for Enclosed Screens',
        'Synchronized Multi-Screen Video Wall Distribution'
      ],
      products: [
        { name: 'Aiegx Apalis i.MX 8QM', type: 'Dual Cortex-A72 + Quad A53, Dual Vivante GPU', href: '#products' },
        { name: 'Aiegx Synapse SBC Pro', type: 'Turnkey Triple Display Media Board', href: '#products' }
      ],
      resources: [
        { name: 'Outdoor High-Ambient-Temperature Signage Manual', href: '#developers' },
        { name: 'Yocto Wayland/Weston Display Optimization', href: '#developers' }
      ]
    }
  }
};

const categoryList = [
  { id: 'industrial', name: 'Industrial Automation & Robotics' },
  { id: 'healthcare', name: 'Healthcare, Medical & Laboratory' },
  { id: 'transportation', name: 'Transportation, Logistics and Agriculture' },
  { id: 'infrastructure', name: 'Infrastructure, Building & Security' },
  { id: 'energy', name: 'Energy, Utilities & Renewables' },
  { id: 'retail', name: 'Retail and Self-service' },
  { id: 'signage', name: 'Digital Signage & Entertainment' }
];

export default function ApplicationsMegaMenu({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('industrial');
  const [mobileStep, setMobileStep] = useState(1); // 1 = Categories, 2 = Customer Stories, 3 = Tech & Products
  const menuRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        const toggleBtn = document.getElementById('navbar-applications-toggle');
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

  const currentData = applicationsData[selectedCategory] || applicationsData.industrial;
  const CategoryIcon = currentData.icon || Bot;

  return (
    <>
      {/* Dark Ambient Backdrop Overlay */}
      <div 
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Full-Width Applications Mega Menu Panel */}
      <div 
        ref={menuRef}
        id="applications-mega-menu"
        className="mega-menu-panel fixed left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
        role="dialog"
        aria-label="Applications Mega Menu"
      >
        <div className="bg-white/95 dark:bg-[#101936]/98 backdrop-blur-2xl border border-[#DCE6F3] dark:border-white/10 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/80 overflow-hidden text-slate-900 dark:text-white flex flex-col h-[min(590px,calc(100vh-var(--mega-menu-top)-12px))]">
          
          {/* Mobile Drill-Down Bar (Shown on small screens) */}
          <div className="lg:hidden flex items-center justify-between p-3.5 bg-[#F1F6FC] dark:bg-[#0b1226] border-b border-[#DCE6F3] dark:border-white/10">
            <div className="flex items-center gap-2">
              {mobileStep > 1 && (
                <button
                  onClick={() => setMobileStep(prev => prev - 1)}
                  className="px-2 py-1 text-xs text-[#0284C7] dark:text-[#42D9F5] bg-white dark:bg-[#17264D] rounded-lg border border-[#DCE6F3] dark:border-white/10 flex items-center gap-1 font-mono font-semibold"
                >
                  &larr; Back
                </button>
              )}
              <span className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white tracking-wider">
                {mobileStep === 1 && 'Applications by Industry'}
                {mobileStep === 2 && currentData.name}
                {mobileStep === 3 && 'Technology & Products'}
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

          {/* Three-Column Desktop & Tablet Layout */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden h-full">
            
            {/* COLUMN 1 — Applications Categories */}
            <div className={`lg:w-[280px] xl:w-[310px] flex-shrink-0 bg-[#F1F6FC] dark:bg-[#0e1630] border-b lg:border-b-0 lg:border-r border-[#DCE6F3] dark:border-white/10 flex flex-col p-4 sm:p-5 h-full overflow-y-auto mega-menu-scroll ${
              mobileStep !== 1 ? 'hidden lg:flex' : 'flex'
            }`}>
              {/* Column 1 Header with Close Icon & APPLICATIONS heading */}
              <div className="hidden lg:flex items-center justify-between pb-3.5 mb-4 border-b border-[#DCE6F3] dark:border-white/10">
                <span className="text-xs font-mono font-bold tracking-widest text-slate-900 dark:text-white uppercase">
                  APPLICATIONS
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

              {/* "Explore all applications" link */}
              <a
                href="#applications"
                onClick={onClose}
                className="block group p-3 rounded-xl bg-white dark:bg-[#17264D]/50 hover:bg-blue-50/60 dark:hover:bg-[#17264D] border border-[#DCE6F3] dark:border-white/10 hover:border-[#0284C7]/40 dark:hover:border-[#42D9F5]/40 transition-all mb-4 shadow-xs"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#42D9F5] transition-colors">
                  <span>Explore all applications</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#0284C7] dark:text-[#42D9F5]" />
                </div>
              </a>

              {/* Section label: BY INDUSTRY */}
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/60 font-bold mb-2 px-1">
                BY INDUSTRY
              </div>

              {/* Vertically scrollable list of application categories */}
              <nav className="space-y-1.5 overflow-y-auto pr-1" aria-label="Application Industries">
                {categoryList.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setMobileStep(2);
                      }}
                      className={`mega-menu-selectable-item w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-150 flex items-center justify-between group focus:outline-none ${
                        isSelected 
                          ? 'mega-menu-item--selected mega-menu-item--selected-primary' 
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/50 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                        isSelected ? 'translate-x-0.5' : 'text-slate-400 group-hover:text-slate-600 dark:text-white/30 dark:group-hover:text-white/60'
                      }`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* COLUMN 2 — Selected Application Details & Customer Success Stories */}
            <div className={`lg:w-[330px] xl:w-[360px] flex-shrink-0 bg-[#F8FAFD] dark:bg-[#121c3d] border-b lg:border-b-0 lg:border-r border-[#DCE6F3] dark:border-white/10 flex flex-col justify-between p-4 sm:p-5 h-full overflow-y-auto mega-menu-scroll ${
              mobileStep !== 2 ? 'hidden lg:flex' : 'flex'
            }`}>
              <div className="space-y-4">
                
                {/* Industry Header */}
                <div className="pb-3 border-b border-[#DCE6F3] dark:border-white/10 flex items-center gap-2.5">
                  <CategoryIcon className="w-4 h-4 text-[#0284C7] dark:text-[#42D9F5]" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {currentData.name}
                  </h3>
                </div>

                {/* Heading: CUSTOMER STORIES */}
                <div>
                  <div className="mb-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/70 font-bold">
                      CUSTOMER STORIES
                    </span>
                  </div>

                  {/* Vertically scrollable stories list */}
                  <div className="space-y-1.5 overflow-y-auto pr-1">
                    {currentData.stories.map((story, sIdx) => (
                      <a
                        key={sIdx}
                        href={story.href}
                        onClick={onClose}
                        className="block py-2.5 px-3 rounded-xl hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#42D9F5] transition-colors leading-snug">
                            {story.title}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] dark:text-white/40 dark:group-hover:text-[#42D9F5] flex-shrink-0 mt-0.5 transition-colors" />
                        </div>
                        <span className="text-[11px] text-slate-600 dark:text-white/70 block mt-1 font-medium">
                          {story.company}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>

              {/* Mobile next button to Column 3 */}
              <div className="pt-3 border-t border-[#DCE6F3] dark:border-white/10 lg:hidden mt-3">
                <button
                  onClick={() => setMobileStep(3)}
                  className="w-full py-2.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#2563EB] dark:from-[#42D9F5] dark:to-[#3478F6] dark:text-[#101936] rounded-xl flex items-center justify-center gap-1.5"
                >
                  <span>View Technology & Related Products</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* COLUMN 3 — Key Capabilities & Hardware Solutions */}
            <div className={`flex-1 bg-white dark:bg-[#101936] p-4 sm:p-6 h-full overflow-y-auto mega-menu-scroll ${
              mobileStep !== 3 ? 'hidden lg:block' : 'block'
            }`}>
              
              {/* Header Breadcrumb */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DCE6F3] dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="text-slate-500 dark:text-white/60">Applications</span>
                  <ChevronRight className="w-3 h-3 text-slate-400 dark:text-white/30" />
                  <span className="text-[#0284C7] dark:text-[#42D9F5] font-semibold">{currentData.name}</span>
                </div>
              </div>

              <div className="space-y-5">
                
                {/* 1. Technologies & Key Capabilities */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/60 font-bold block mb-2.5">
                    KEY CAPABILITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentData.overview.technologies.map((tech, tIdx) => (
                      <div key={tIdx} className="p-2.5 rounded-xl bg-[#F8FAFD] dark:bg-[#17264D]/40 border border-[#DCE6F3] dark:border-white/5 flex items-start gap-2 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#42D9F5] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-800 dark:text-white/90 leading-snug">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Recommended Hardware Solutions */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/60 font-bold block mb-2.5">
                    RECOMMENDED HARDWARE
                  </span>
                  <div className="space-y-1.5">
                    {currentData.overview.products.map((prod, pIdx) => (
                      <a
                        key={pIdx}
                        href={prod.href}
                        onClick={(e) => {
                          onClose();
                          if (prod.href && prod.href.startsWith('#') && window.location.pathname !== '/') {
                            e.preventDefault();
                            window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: `/${prod.href}` }));
                            setTimeout(() => {
                              const el = document.getElementById(prod.href.replace('#', ''));
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 120);
                          }
                        }}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8FAFD] dark:bg-[#17264D]/40 hover:bg-[#F0F6FE] dark:hover:bg-[#17264D]/70 border border-[#DCE6F3] dark:border-white/5 hover:border-[#0284C7]/40 dark:hover:border-[#42D9F5]/30 transition-all group shadow-2xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <Cpu className="w-4 h-4 text-[#0284C7] dark:text-[#42D9F5]" />
                          <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#42D9F5] transition-colors">
                            {prod.name}
                          </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] dark:text-white/30 dark:group-hover:text-[#42D9F5] group-hover:translate-x-0.5 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* 3. Technical Resources & Documentation */}
                <div className="pt-3 border-t border-[#DCE6F3] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {currentData.overview.resources.map((res, rIdx) => (
                      <a
                        key={rIdx}
                        href={res.href}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-700 dark:text-white/80 hover:text-[#0284C7] dark:hover:text-[#42D9F5] bg-[#F1F6FC] dark:bg-[#17264D]/50 hover:bg-blue-50 dark:hover:bg-[#17264D] px-2.5 py-1.5 rounded-lg border border-[#DCE6F3] dark:border-white/10 transition-colors"
                      >
                        <FileText className="w-3 h-3 text-[#0284C7] dark:text-[#42D9F5]" />
                        <span>{res.name}</span>
                      </a>
                    ))}
                  </div>
                  <a
                    href="#applications"
                    onClick={onClose}
                    className="text-xs font-mono font-semibold text-[#0284C7] dark:text-[#42D9F5] hover:underline flex items-center gap-1"
                  >
                    <span>View All Industry Deployments</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>

          </div>


        </div>
      </div>
    </>
  );
}
