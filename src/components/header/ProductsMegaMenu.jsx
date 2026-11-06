import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ChevronRight, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Server, 
  Zap 
} from 'lucide-react';

// Comprehensive Aiegx Product Catalog Data Structure
const megaMenuData = {
  com: {
    id: 'com',
    name: 'Computer on Modules',
    badge: 'Flagship Architecture',
    subcategories: [
      { id: 'overview', name: 'Overview' },
      { id: 'by-brand', name: 'By Brand' },
      { id: 'by-type', name: 'By Type' },
      { id: 'accessories', name: 'Accessories' }
    ],
    thumbnail: {
      image: '/images/aiegx-hardware-som-hd.jpg',
      title: 'Aiegx Apalis & Verdin CoM Modules',
      subtitle: 'Pin-compatible system-on-modules with 10+ year longevity guarantee.',
      linkText: 'Explore Module Lineup',
      href: '#products'
    },
    content: {
      'overview': [
        {
          heading: 'Featured System on Modules',
          subheading: 'Most Popular Hardware Architectures',
          items: [
            { name: 'Aiegx Verdin i.MX 8M Plus', family: 'Verdin Family', specs: 'NXP i.MX 8M Plus, 2.3 TOPS NPU, Dual CAN-FD', href: '#products' },
            { name: 'Aiegx Apalis AM69', family: 'Apalis Family', specs: 'TI AM69, 32 TOPS Deep Learning, 8x Cortex-A72', href: '#products' },
            { name: 'Aiegx Verdin AM62', family: 'Verdin Family', specs: 'TI Sitara AM62, Quad Cortex-A53, Ultra-Low TDP', href: '#products' },
            { name: 'Aiegx Apalis i.MX 8QM', family: 'Apalis Family', specs: 'NXP i.MX 8QM, Dual Cortex-A72 + Quad A53, 4K Video', href: '#products' },
            { name: 'Aiegx Verdin i.MX 95', family: 'Verdin Family', specs: 'NXP i.MX 95, eIQ Neutron NPU, Real-Time Cortex-M7', href: '#products' },
            { name: 'Aiegx Colibri i.MX 8X', family: 'Colibri Family', specs: 'Ultra-Compact SO-DIMM, ECC Memory, Low Power', href: '#products' }
          ]
        },
        {
          heading: 'Why Build with Aiegx CoMs?',
          subheading: 'Speed, Scalability & Lifecycle Planning',
          items: [
            { name: '10+ Years Product Longevity', family: 'Supply Guarantee', specs: 'Designed for medical, aerospace & industrial lifecycles', href: '#why-aiegx' },
            { name: 'Pin-Compatible Upgrades', family: 'Design Flexibility', specs: 'Swap SoM generations without redesigning carrier PCBs', href: '#why-aiegx' },
            { name: 'Pre-Certified Linux & RTOS', family: 'Software Stack', specs: 'Production-ready Yocto, TorizonCore, ROS2 Humble', href: '#developers' }
          ]
        }
      ],
      'by-brand': [
        {
          heading: 'Brand 1',
          href: '/brands/qualcomm',
          items: []
        },
        {
          heading: 'Brand 2',
          href: '/brands/nxp',
          items: []
        },
        {
          heading: 'Brand 3',
          href: '/brands/ti',
          items: []
        }
      ],
      'by-type': [
        {
          heading: 'Type 1',
          href: '/products/type-1',
          subheading: '16 to 64 TOPS Deep Learning Power',
          items: [
            { name: 'Verdin i.MX 8M Plus (2.3 TOPS)', family: 'Smart Sensors', specs: 'Integrated NPU for on-die YOLO & MobileNet', href: '#products' },
            { name: 'Apalis AM69 (32 TOPS)', family: 'Heavy Vision AI', specs: 'Multi-camera stream object tracking & segmentation', href: '/products/type-1' },
            { name: 'NeuroCore X1 M.2 Coprocessor', family: 'Silicon Accelerator', specs: '32 TOPS plug-and-play PCIe neural accelerator', href: '#products' }
          ]
        },
        {
          heading: 'Type 2',
          subheading: '-40°C to +85°C Operating Tolerance',
          items: [
            { name: 'Industrial Grade Verdin AM62', family: 'Harsh Environment', specs: 'Shock & vibration resistant, conformal coated', href: '#products' },
            { name: 'Automotive Grade Apalis i.MX 8QM', family: 'Transportation Grade', specs: 'AEC-Q100 qualified silicon, 24/7/365 continuous run', href: '#products' }
          ]
        },
        {
          heading: 'Type 3',
          subheading: 'Lockstep Cores & Low-Jitter Buses',
          items: [
            { name: 'Dedicated Cortex-M Real-Time Cores', family: 'Deterministic Control', specs: 'Zero-latency motor loops & CAN-FD fieldbus', href: '#developers' },
            { name: 'Dual Gigabit Ethernet with TSN', family: 'Time-Sensitive Networking', specs: 'Deterministic IEEE 802.1 industrial communications', href: '#developers' }
          ]
        }
      ],
      'accessories': [
        {
          heading: 'Thermal Management & Enclosures',
          subheading: 'Engineered for Heavy Duty Workloads',
          items: [
            { name: 'Apalis Industrial Heat Spreader', family: 'Passive Cooling', specs: 'Direct die-contact aluminum spreader with thermal pads', href: '#products' },
            { name: 'Verdin Active Fan Heatsink', family: 'High-TDP Cooling', specs: 'PWM controlled 5V fan for 15W+ thermal dissipation', href: '#products' }
          ]
        },
        {
          heading: 'Sensors, Cables & Peripherals',
          subheading: 'Certified Plug & Play Add-Ons',
          items: [
            { name: 'MIPI-CSI Camera Module Kit', family: 'Vision Sensor', specs: 'Global shutter 1080p60 & 4K camera sensors', href: '#products' },
            { name: 'Industrial Wi-Fi 6 & BT 5.3 Antennas', family: 'RF Connectivity', specs: 'Dual-band dipole antennas with U.FL pigtails', href: '#products' },
            { name: 'Debug & JTAG Console Cables', family: 'Lab Accessories', specs: 'USB-UART multi-channel debug breakout', href: '#developers' }
          ]
        }
      ]
    }
  },
  sbc: {
    id: 'sbc',
    name: 'Single Board Computers',
    badge: 'Turnkey Hardware',
    subcategories: [
      { id: 'overview', name: 'Overview' },
      { id: 'high-perf', name: 'High-Performance SBCs' },
      { id: 'low-power', name: 'Low-Power IoT SBCs' },
      { id: 'carrier-boards', name: 'Carrier & Baseboards' },
      { id: 'enclosures', name: 'Industrial Enclosures' },
      { id: 'accessories', name: 'Accessories' }
    ],
    thumbnail: {
      image: '/images/sbc-platform-hd.jpg',
      title: 'Aiegx Industrial SBC Family',
      subtitle: 'Complete standalone computers ready for deployment out of the box.',
      linkText: 'View SBC Models',
      href: '#products'
    },
    content: {
      'overview': [
        {
          heading: 'Complete Single Board Computers',
          subheading: 'Ready-to-Deploy Autonomous Edge Hardware',
          items: [
            { name: 'Synapse SBC Pro', family: 'Industrial Flagship', specs: '64 TOPS Dual NPU, 5G Sub-6, Dual CAN-FD, IP67', href: '#products' },
            { name: 'QuantumEdge SBC', family: 'Developer Platform', specs: 'ROS2 Humble Native, 16GB LPDDR5, Dual PCIe', href: '#products' },
            { name: 'CompactEdge Micro SBC', family: 'Ultra-Dense Embedded', specs: 'Quad Cortex-A53, Fanless, Under 5W TDP', href: '#products' },
            { name: 'VisionSBC 4K Global Shutter', family: 'Integrated Perception', specs: 'On-die 16 TOPS neural classifier with 4K optics', href: '#products' }
          ]
        }
      ],
      'high-perf': [
        {
          heading: 'High-Performance Edge AI Systems',
          subheading: 'Deterministic Robotic & Autonomous Compute',
          items: [
            { name: 'Synapse SBC Pro (64 TOPS)', family: 'Dual Neural Engine', specs: 'Heavy industrial compute with Milled Aviation Enclosure', href: '#products' },
            { name: 'QuantumEdge Dev Board', family: 'Robotics Evaluation', specs: 'Breakout headers, dual PCIe x4, quad MIPI-CSI', href: '#products' }
          ]
        }
      ],
      'low-power': [
        {
          heading: 'Low-Power & Battery-Operated SBCs',
          subheading: 'Energy Harvesting & Solar Autonomous IoT',
          items: [
            { name: 'CompactEdge Micro SBC', family: 'Low-Power Telemetry', specs: 'Wide 9–36V DC input, deep sleep under 50mW', href: '#products' },
            { name: 'NanoSensor SBC Gateway', family: 'Wireless Field Sensor', specs: 'Integrated LoRaWAN, NB-IoT, BLE 5.3', href: '#products' }
          ]
        }
      ],
      'carrier-boards': [
        {
          heading: 'Baseboards & Carrier Solutions',
          subheading: 'Ruggedized Backplanes & Interface Carriers',
          items: [
            { name: 'Synapse Industrial Backplane', family: 'DIN-Rail Mount', specs: 'Isolated RS485, digital I/O, dual power redundancy', href: '#products' },
            { name: 'Mobile Robotics Carrier', family: 'Vehicle Integration', specs: 'M12 rugged ethernet connectors, 12-48V vehicle power', href: '#products' }
          ]
        }
      ],
      'enclosures': [
        {
          heading: 'Rugged Enclosures & Thermal Housings',
          subheading: 'IP66, IP67 & Extended Vibration Rated',
          items: [
            { name: 'Milled Aviation Aluminum Housing', family: 'IP67 Sealed', specs: 'Heavy mining, marine, rail vibration certified', href: '#products' },
            { name: 'DIN-Rail Substation Chassis', family: 'Industrial Rack', specs: 'Substation EMC Class 4 compliant enclosure', href: '#products' }
          ]
        }
      ],
      'accessories': [
        {
          heading: 'Cables, Antennas & Power Modules',
          subheading: 'Certified Field Add-Ons',
          items: [
            { name: 'Wide-Input Industrial DC/DC Converter', family: 'Power Supply', specs: '9-36V input with galvanic isolation', href: '#products' },
            { name: '5G MIMO Industrial Antennas', family: 'Cellular Kit', specs: 'IP67 puck antenna with dual SIM breakout', href: '#products' }
          ]
        }
      ]
    }
  },
  solutions: {
    id: 'solutions',
    name: 'Embedded Solutions',
    badge: 'Turnkey Applications',
    subcategories: [
      { id: 'overview', name: 'Overview' },
      { id: 'robotics', name: 'Autonomous Robotics' },
      { id: 'vision', name: 'Industrial Computer Vision' },
      { id: 'gateways', name: 'Edge Telemetry & Gateways' },
      { id: 'custom-carrier', name: 'Custom Carrier Services' },
      { id: 'hardware-accel', name: 'Hardware Acceleration' }
    ],
    thumbnail: {
      image: '/images/edge_robotics_ai.jpg',
      title: 'Aiegx Autonomous Solutions',
      subtitle: 'Complete field-proven architectures for automated mobile robotics and industrial vision.',
      linkText: 'Explore Solutions',
      href: '#applications'
    },
    content: {
      'overview': [
        {
          heading: 'End-to-End System Architectures',
          subheading: 'Hardware + Firmware + Neural Models',
          items: [
            { name: 'Autonomous Mobile Robotics (AMR)', family: 'Robotics', specs: 'Pre-integrated SLAM, obstacle avoidance, ROS2 Humble', href: '#applications' },
            { name: 'Automated Optical Inspection (AOI)', family: 'Vision Inspection', specs: 'Sub-2ms defect detection, 4K high-speed imaging', href: '#applications' },
            { name: 'Mission-Critical Energy Telemetry', family: 'Smart Grid', specs: 'IEC 61850 protocol gateway with hardware encryption', href: '#applications' },
            { name: 'Custom Carrier Engineering Services', family: 'Turnkey ODM', specs: 'Rapid design & manufacturing of custom baseboards', href: '#developers' }
          ]
        }
      ],
      'robotics': [
        {
          heading: 'Autonomous Robotics Platforms',
          subheading: 'Deterministic Sensor Fusion & Navigation',
          items: [
            { name: 'Aiegx AMR Navigation Stack', family: 'Robotics Suite', specs: 'Synchronous LiDAR, wheel odometry, and depth camera processing', href: '#applications' },
            { name: 'Dual CAN-FD Motor Control Loops', family: 'Actuator Control', specs: 'Real-time microsecond determinism on lockstep Cortex-M', href: '#applications' }
          ]
        }
      ],
      'vision': [
        {
          heading: 'Industrial Computer Vision',
          subheading: 'High-Throughput Optical Classification',
          items: [
            { name: 'High-Speed Conveyor Defect Sorter', family: 'Quality Assurance', specs: '99.98% accuracy at 120 frames per second', href: '#applications' },
            { name: 'Multi-Camera Perception Pipeline', family: 'Edge Inference', specs: 'Synchronous quad 4K video stream processing', href: '#applications' }
          ]
        }
      ],
      'gateways': [
        {
          heading: 'Edge Telemetry & Industrial Gateways',
          subheading: 'Protocol Translation & Zero-Trust Cloud Ingestion',
          items: [
            { name: 'Synapse Protocol Gateway', family: 'Modbus / OPC-UA / MQTT', specs: 'Bridges legacy PLC sensors to modern cloud endpoints', href: '#products' },
            { name: 'Rugged Substation Telemetry Node', family: 'Grid Computing', specs: 'Hardened against electromagnetic surges & power drops', href: '#products' }
          ]
        }
      ],
      'custom-carrier': [
        {
          heading: 'Custom Carrier Design & Turnkey ODM',
          subheading: 'From Concept to Mass Production',
          items: [
            { name: 'Carrier Board Layout Services', family: 'Engineering ODM', specs: 'Schematics, PCB layout, prototype run in 4 weeks', href: '#developers' },
            { name: 'Regulatory & EMC Pre-Compliance', family: 'Certifications', specs: 'CE, FCC, RoHS, UL testing support and documentation', href: '#developers' }
          ]
        }
      ],
      'hardware-accel': [
        {
          heading: 'Hardware Neural Acceleration',
          subheading: 'Custom NPU Pipeline Deployment',
          items: [
            { name: 'NeuroCore Model Quantizer', family: 'Compiler Suite', specs: 'INT8 quantization with zero accuracy degradation', href: '#developers' },
            { name: 'Hardware-Assisted Cryptography', family: 'Security Core', specs: 'Secure boot, encrypted flash, TPM 2.0 integration', href: '#developers' }
          ]
        }
      ]
    }
  },
  software: {
    id: 'software',
    name: 'Software',
    badge: 'Enterprise Platform',
    subcategories: [
      { id: 'overview', name: 'Overview' },
      { id: 'linux-yocto', name: 'Linux BSP & Yocto' },
      { id: 'rtos', name: 'Real-Time OS (RTOS)' },
      { id: 'ai-sdk', name: 'AI Model Zoo & SDK' },
      { id: 'fleet-ota', name: 'Fleet Ops & OTA Updates' },
      { id: 'developer-tools', name: 'Developer Tools' }
    ],
    thumbnail: {
      image: '/images/neurocore_chip.jpg',
      title: 'Aiegx TorizonCore & SDK',
      subtitle: 'Production-ready embedded Linux distribution with container runtime and remote device management.',
      linkText: 'Explore Software Stack',
      href: '#developers'
    },
    content: {
      'overview': [
        {
          heading: 'Industrial Software & OS Stack',
          subheading: 'Built for Maintainability & 10+ Year Lifecycles',
          items: [
            { name: 'Aiegx Linux BSP (Yocto / Torizon)', family: 'Operating System', specs: 'Pre-built kernel, bootloader, verified hardware drivers', href: '#developers' },
            { name: 'FreeRTOS & Zephyr Real-Time Stacks', family: 'Deterministic OS', specs: 'Microsecond latency on integrated Cortex-M coprocessors', href: '#developers' },
            { name: 'Aiegx Neural Inference Engine', family: 'AI Runtime', specs: 'Accelerated PyTorch, TensorFlow Lite, ONNX runtime', href: '#developers' },
            { name: 'Zero-Trust Fleet Management (OTA)', family: 'Cloud Ops', specs: 'Atomic A/B updates, cryptographic rollback defense', href: '#developers' }
          ]
        }
      ],
      'linux-yocto': [
        {
          heading: 'Enterprise Embedded Linux',
          subheading: 'Yocto Project & Torizon Ecosystem',
          items: [
            { name: 'Aiegx Yocto Meta Layers', family: 'BSP Layer', specs: 'Maintained for Long-Term Support (LTS) kernels', href: '#developers' },
            { name: 'Containerized Linux Runtime', family: 'Docker / Podman', specs: 'Deploy microservices safely without breaking base OS', href: '#developers' }
          ]
        }
      ],
      'rtos': [
        {
          heading: 'Deterministic Real-Time OS',
          subheading: 'Sub-Microsecond Control & Functional Safety',
          items: [
            { name: 'Zephyr RTOS Native Integration', family: 'Open Source RTOS', specs: 'Full hardware driver support for on-board peripherals', href: '#developers' },
            { name: 'FreeRTOS Industrial Port', family: 'Safety Certified', specs: 'IEC 61508 SIL-3 certified software architecture', href: '#developers' }
          ]
        }
      ],
      'ai-sdk': [
        {
          heading: 'Edge AI Model Zoo & Neural Tooling',
          subheading: 'Pre-Trained Weights & Silicon Optimization',
          items: [
            { name: 'Aiegx Model Zoo (YOLO, MobileNet, Segment-Anything)', family: 'Pre-Trained Weights', specs: 'Optimized for on-chip NPU execution', href: '#developers' },
            { name: 'Neural Quantization & Benchmark CLI', family: 'Developer Utility', specs: 'Profile TOPS, latency, and memory draw in real time', href: '#developers' }
          ]
        }
      ],
      'fleet-ota': [
        {
          heading: 'Over-The-Air (OTA) Fleet Management',
          subheading: 'Zero-Touch Security & Device Diagnostics',
          items: [
            { name: 'Atomic A/B Dual Partition Updates', family: 'Fault Tolerance', specs: 'Guaranteed rollback in case of power interruption', href: '#developers' },
            { name: 'Remote Telemetry & Fleet Monitoring', family: 'Dashboard Platform', specs: 'Real-time CPU temp, memory, and network health', href: '#developers' }
          ]
        }
      ],
      'developer-tools': [
        {
          heading: 'Command Line & IDE Extensions',
          subheading: 'Fast Track Embedded Workflow',
          items: [
            { name: 'Aiegx VS Code Extension', family: 'Developer Environment', specs: 'One-click cross-compilation and container deployment', href: '#developers' },
            { name: 'Hardware Emulation QEMU Images', family: 'Virtual Prototyping', specs: 'Test firmware before physical carrier boards arrive', href: '#developers' }
          ]
        }
      ]
    }
  }
};

const categoryList = [
  { id: 'com', name: 'Computer on Modules', icon: Cpu },
  { id: 'sbc', name: 'Single Board Computers', icon: Server },
  { id: 'solutions', name: 'Embedded Solutions', icon: Zap },
  { id: 'software', name: 'Software', icon: Layers }
];

export default function ProductsMegaMenu({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('com');
  const [selectedSubcategory, setSelectedSubcategory] = useState('overview');
  const [mobileStep, setMobileStep] = useState(1); // 1 = Categories, 2 = Subcategories, 3 = Products (mobile view)
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
        const toggleBtn = document.getElementById('navbar-products-toggle');
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

  const currentCategoryData = megaMenuData[selectedCategory] || megaMenuData.com;
  const currentSubcategoryObj = currentCategoryData.subcategories.find(s => s.id === selectedSubcategory) || currentCategoryData.subcategories[0];
  const sections = currentCategoryData.content[selectedSubcategory] || currentCategoryData.content['overview'] || [];

  return (
    <>
      {/* Dark Ambient Backdrop Overlay */}
      <div 
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Full-Width Mega Menu Panel */}
      <div 
        ref={menuRef}
        id="products-mega-menu"
        className="mega-menu-panel fixed left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
        role="dialog"
        aria-label="Products Mega Menu"
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
                {mobileStep === 1 && 'Select Category'}
                {mobileStep === 2 && currentCategoryData.name}
                {mobileStep === 3 && currentSubcategoryObj?.name}
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
            
            {/* COLUMN 1 — Product Categories (Left Sidebar) */}
            <div className={`lg:w-[260px] xl:w-[280px] flex-shrink-0 bg-[#F1F6FC] dark:bg-[#0e1630] border-b lg:border-b-0 lg:border-r border-[#DCE6F3] dark:border-white/10 flex flex-col p-4 sm:p-5 h-full overflow-y-auto mega-menu-scroll ${
              mobileStep !== 1 ? 'hidden lg:flex' : 'flex'
            }`}>
              {/* Column 1 Header with Close Icon & PRODUCTS heading */}
              <div className="hidden lg:flex items-center justify-between pb-3.5 mb-4 border-b border-[#DCE6F3] dark:border-white/10">
                <span className="text-xs font-mono font-bold tracking-widest text-slate-900 dark:text-white uppercase">
                  PRODUCTS
                </span>
                <button 
                  onClick={onClose}
                  className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0284C7] dark:focus-visible:ring-[#42D9F5]"
                  aria-label="Close menu"
                  title="Close Menu (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Categories List */}
              <nav className="space-y-2.5" aria-label="Product Categories">
                {categoryList.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        const firstSub = megaMenuData[cat.id]?.subcategories[0]?.id || 'overview';
                        setSelectedSubcategory(firstSub);
                        setMobileStep(2);
                      }}
                      className={`mega-menu-selectable-item w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between focus:outline-none ${
                        isSelected 
                          ? 'mega-menu-item--selected mega-menu-item--selected-primary' 
                          : 'text-slate-700 dark:text-white/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isSelected ? '' : 'text-slate-500 dark:text-white/60'}`} />
                        <span>{cat.name}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 ${
                        isSelected ? 'translate-x-0.5' : 'text-slate-400 dark:text-white/30'
                      }`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* COLUMN 2 — Category Navigation (Subcategories & Product Thumbnail) */}
            <div className={`lg:w-[270px] xl:w-[300px] flex-shrink-0 bg-[#F8FAFD] dark:bg-[#121c3d] border-b lg:border-b-0 lg:border-r border-[#DCE6F3] dark:border-white/10 flex flex-col justify-between p-4 sm:p-5 h-full overflow-y-auto mega-menu-scroll ${
              mobileStep !== 2 ? 'hidden lg:flex' : 'flex'
            }`}>
              <div className="space-y-1 mb-4">
                <div className="px-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/70 font-bold">
                    {currentCategoryData.name}
                  </span>
                </div>

                {/* Subcategories list */}
                <div className="space-y-2" role="tablist" aria-label="Subcategories">
                  {currentCategoryData.subcategories.map((sub) => {
                    const isSelected = selectedSubcategory === sub.id;
                    return (
                      <button
                        key={sub.id}
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => {
                          setSelectedSubcategory(sub.id);
                          setMobileStep(3);
                        }}
                        className={`mega-menu-selectable-item w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between focus:outline-none ${
                          isSelected 
                            ? 'mega-menu-item--selected mega-menu-item--selected-secondary' 
                            : 'text-slate-700 dark:text-white/80'
                        }`}
                      >
                        <span className="truncate pr-1">{sub.name}</span>
                        <ChevronRight className={`w-3 h-3 flex-shrink-0 ${
                          isSelected ? 'translate-x-0.5' : 'text-slate-400 dark:text-white/40'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Column 2 Thumbnail Card */}
              {currentCategoryData.thumbnail && (
                <div className="pt-3 border-t border-[#DCE6F3] dark:border-white/10 hidden sm:block">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#101936] border border-[#DCE6F3] dark:border-white/10 shadow-xs">
                    <div className="h-24 w-full rounded-lg overflow-hidden bg-[#F1F6FC] dark:bg-[#0b1226] mb-2 flex items-center justify-center p-1 relative border border-[#E2EAF4] dark:border-white/5">
                      <img 
                        src={currentCategoryData.thumbnail.image} 
                        alt={currentCategoryData.thumbnail.title}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                      {currentCategoryData.thumbnail.title}
                    </h4>
                    <a 
                      href={currentCategoryData.thumbnail.href} 
                      onClick={onClose}
                      className="mt-2 text-[11px] font-mono text-[#0284C7] dark:text-[#42D9F5] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>{currentCategoryData.thumbnail.linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* COLUMN 3 — Dynamic Product Links */}
            <div className={`flex-1 bg-white dark:bg-[#101936] p-4 sm:p-6 h-full overflow-y-auto mega-menu-scroll ${
              mobileStep !== 3 ? 'hidden lg:block' : 'block'
            }`}>
              
              {/* Header Breadcrumb */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DCE6F3] dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="text-slate-500 dark:text-white/60">{currentCategoryData.name}</span>
                  <ChevronRight className="w-3 h-3 text-slate-400 dark:text-white/30" />
                  <span className="text-[#0284C7] dark:text-[#42D9F5] font-semibold">{currentSubcategoryObj?.name}</span>
                </div>
              </div>

              {/* Dynamic Grid of Product Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    
                    {/* Hardware Group Heading */}
                    {sec.href ? (
                      <a
                        href={sec.href}
                        onClick={(e) => {
                          e.preventDefault();
                          onClose();
                          window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: sec.href }));
                        }}
                        className="block pb-1.5 border-b border-[#DCE6F3] dark:border-white/10 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0284C7] dark:focus-visible:ring-[#42D9F5] rounded-xs"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                            {sec.heading}
                          </h3>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-white/30" />
                        </div>
                      </a>
                    ) : (
                      <div className="pb-1.5 border-b border-[#DCE6F3] dark:border-white/10">
                        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                          {sec.heading}
                        </h3>
                      </div>
                    )}

                    {/* Product Items */}
                    {sec.items && sec.items.length > 0 && (
                      <div className="space-y-1">
                        {sec.items.map((item, iIdx) => (
                          <a
                            key={iIdx}
                            href={item.href}
                            onClick={(e) => {
                              onClose();
                              if (item.href && item.href.startsWith('/')) {
                                e.preventDefault();
                                window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: item.href }));
                              } else if (item.href && item.href.startsWith('#') && window.location.pathname !== '/') {
                                e.preventDefault();
                                window.location.href = `/${item.href}`;
                              }
                            }}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-white/80 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0284C7] dark:focus-visible:ring-[#42D9F5]"
                          >
                            <span>{item.name}</span>
                            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-white/20 flex-shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}

                  </div>
                ))}
              </div>

              {/* Bottom Quick Callout */}
              <div className="mt-8 pt-4 border-t border-[#DCE6F3] dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-white/60">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#0284C7] dark:text-[#42D9F5]" />
                  <span>Custom carrier design or volume procurement?</span>
                </div>
                <a
                  href="#why-aiegx"
                  onClick={(e) => {
                    onClose();
                    if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.location.href = '/#why-aiegx';
                    }
                  }}
                  className="font-mono text-[#0284C7] dark:text-[#42D9F5] hover:underline flex items-center gap-1 text-[11px] font-semibold"
                >
                  <span>Connect with Hardware Specialist</span>
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
