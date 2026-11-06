import React from 'react';
import { ArrowUpRight, BrainCircuit, Camera, CircuitBoard, Terminal } from 'lucide-react';

const capabilities = [
  { title: 'Custom hardware design', detail: 'SoM, SBC & carrier boards', icon: CircuitBoard },
  { title: 'Embedded Linux & BSP', detail: 'Yocto, drivers & long-term support', icon: Terminal },
  { title: 'Camera & multimedia', detail: 'Sensor integration, ISP & pipelines', icon: Camera },
  { title: 'Edge AI engineering', detail: 'Model optimization & on-device inference', icon: BrainCircuit },
];

export default function FinalCTA() {
  return (
    <section className="capabilities-section" id="engineering-capabilities" aria-labelledby="capabilities-title">
      <div id="capabilities" className="anchor-alias" />
      <div className="section-container capabilities-section__layout">
        <div className="capabilities-section__intro">
          <div className="section-kicker" aria-hidden="true">&nbsp;</div>
          <h2 id="capabilities-title">One team.<br /><span>From silicon to system.</span></h2>
          <p>Practical engineering partnership at every layer of your embedded product, from first prototype through production.</p>
          <a className="text-link" href="#contact">Meet your engineering team <ArrowUpRight size={16} aria-hidden="true" /></a>
          <div className="capabilities-section__stamp" aria-hidden="true"><span>BUILT TO SHIP</span><strong>AIEGX</strong></div>
        </div>
        <div className="capabilities-list">
          {capabilities.map(({ title, detail, icon: Icon }) => (
            <a className="capability-row" href="#contact" key={title}>
              <span className="capability-row__number" aria-hidden="true" />
              <span className="capability-row__icon"><Icon size={20} aria-hidden="true" /></span>
              <span className="capability-row__copy"><strong>{title}</strong><small>{detail}</small></span>
              <ArrowUpRight className="capability-row__arrow" size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
