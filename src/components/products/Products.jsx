import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Gauge, Layers3, Network } from 'lucide-react';
import PlatformImage from './PlatformImage';

const platforms = [
  {
    id: 'rz-g2l',
    name: 'RZ/G2L',
    type: 'SMARC SYSTEM-ON-MODULE',
    description: 'A balanced foundation for responsive industrial HMIs, connected devices, and compact edge systems.',
    processor: 'Dual Cortex-A55 + Cortex-M33',
    graphics: 'Arm Mali-G31 3D GPU',
    memory: 'Up to 4 GB DDR4',
    interface: 'Dual GbE · MIPI-CSI · USB',
    icon: Cpu,
  },
  {
    id: 'rz-g2n',
    name: 'RZ/G2N',
    type: 'HIGH-PERFORMANCE SOM',
    description: 'High-throughput embedded compute for rich graphics, video processing, and demanding gateway workloads.',
    processor: 'Dual Cortex-A57',
    graphics: 'PowerVR Series 6XE',
    memory: 'Up to 4 GB DDR3',
    interface: 'PCIe · USB 3.0 · Dual GbE',
    icon: Gauge,
  },
  {
    id: 'rz-v2l',
    name: 'RZ/V2L',
    type: 'VISION AI PROCESSOR',
    description: 'Efficient, always-on vision processing for smart cameras, inspection, and real-time edge analytics.',
    processor: 'Dual Cortex-A55 + Cortex-M33',
    graphics: 'DRP-AI acceleration',
    memory: 'LPDDR4',
    interface: 'MIPI-CSI · ISP · USB',
    icon: Layers3,
  },
  {
    id: 'rz-n2h',
    name: 'RZ/N2H',
    type: 'INDUSTRIAL NETWORKING',
    description: 'Real-time networking and control for deterministic automation, robotics, and next-generation smart factories.',
    processor: 'Quad Cortex-A55 + Dual R52',
    graphics: 'Real-time control architecture',
    memory: 'LPDDR4',
    interface: 'TSN · EtherCAT · PCIe',
    icon: Network,
  },
];

export default function Products() {
  const [activeId, setActiveId] = useState(platforms[0].id);
  const activePlatform = platforms.find((platform) => platform.id === activeId) ?? platforms[0];
  const PlatformIcon = activePlatform.icon;

  return (
    <section className="platform-section" id="hardware-platforms" aria-labelledby="platform-title">
      <div className="section-container platform-section__inner">
        <div className="section-kicker" aria-hidden="true">&nbsp;</div>
        <div className="platform-section__heading">
          <div>
            <h2 id="platform-title">Small boards.<br /><span>Big possibilities.</span></h2>
          </div>
          <p>Pick a platform to explore a few of the building blocks behind our embedded and edge AI systems.</p>
        </div>

        <div className="platform-feature">
          <div className="platform-feature__info" aria-live="polite">
            <div className="platform-feature__type"><PlatformIcon size={15} aria-hidden="true" /> {activePlatform.type}</div>
            <h3>{activePlatform.name}</h3>
            <p>{activePlatform.description}</p>
            <dl className="platform-specs">
              <div><dt>PROCESSOR</dt><dd>{activePlatform.processor}</dd></div>
              <div><dt>ACCELERATION</dt><dd>{activePlatform.graphics}</dd></div>
              <div><dt>MEMORY</dt><dd>{activePlatform.memory}</dd></div>
              <div><dt>CONNECTIVITY</dt><dd>{activePlatform.interface}</dd></div>
            </dl>
            <a className="text-link" href="#contact">Talk to a hardware expert <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="platform-feature__image platform-feature__model">
            <div className="platform-feature__image-grid" aria-hidden="true" />
            <span className="platform-feature__image-tag">PLATFORM / {activePlatform.id.toUpperCase()}</span>
            <PlatformImage
              key={activePlatform.id}
              productId={activePlatform.id}
              className="platform-feature__product-photo"
            />
            <span className="platform-feature__image-index">AIEGX / {activePlatform.id.toUpperCase()}</span>
          </div>
        </div>

        <div className="platform-selectors" role="group" aria-label="Choose a hardware platform">
          {platforms.map((platform) => (
            <button
              className={`platform-selector${platform.id === activeId ? ' platform-selector--active' : ''}`}
              key={platform.id}
              type="button"
              onClick={() => setActiveId(platform.id)}
              aria-pressed={platform.id === activeId}
            >
              <PlatformImage productId={platform.id} className="platform-selector__image" />
              <span className="platform-selector__name">{platform.name}</span>
              <span className="platform-selector__type">{platform.type}</span>
              <ArrowUpRight className="platform-selector__arrow" size={16} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
