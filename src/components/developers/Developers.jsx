import React from 'react';
import { ArrowUpRight, Building2, Bus, Cctv, Shield, Train } from 'lucide-react';

const industries = [
  { id: 'railways', name: 'Rail & transit', icon: Train, detail: 'Rugged onboard compute' },
  { id: 'public-transportation', name: 'Public transport', icon: Bus, detail: 'Connected passenger systems' },
  { id: 'security-surveillance', name: 'Security & vision', icon: Cctv, detail: 'Real-time visual intelligence' },
  { id: 'smart-city', name: 'Smart infrastructure', icon: Building2, detail: 'Distributed edge platforms' },
  { id: 'defense', name: 'Mission critical', icon: Shield, detail: 'Reliable embedded systems' },
];

export default function Developers() {
  return (
    <section id="industries" className="industry-section" aria-labelledby="industries-title">
      <span id="industries-we-serve" className="anchor-alias" />
      <span id="developers" className="anchor-alias" />
      <div className="section-container industry-section__layout">
        <div className="industry-section__intro">
          <div className="section-kicker">BUILT FOR REAL-WORLD DEPLOYMENT</div>
          <h2 id="industries-title">Engineered to work<br />where it <span>matters.</span></h2>
          <p>Purpose-built embedded platforms for the environments where uptime, deterministic performance and long-term support are essential.</p>
        </div>
        <div className="industry-list">
          {industries.map(({ id, name, icon: Icon, detail }) => (
            <a className="industry-row" href="#contact" key={id}>
              <span className="industry-row__index" aria-hidden="true" />
              <span className="industry-row__icon"><Icon size={20} aria-hidden="true" /></span>
              <span className="industry-row__copy"><strong>{name}</strong><small>{detail}</small></span>
              <ArrowUpRight className="industry-row__arrow" size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
