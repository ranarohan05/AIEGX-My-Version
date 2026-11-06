import React from 'react';
import { ArrowDown, ArrowRight, Move3d } from 'lucide-react';
import PCBModel from './PCBModel';

export default function Hero() {
  return (
    <section className="showcase-hero" id="hero" aria-labelledby="hero-title">
      <div className="showcase-hero__grid" aria-hidden="true" />
      <div className="showcase-hero__glow" aria-hidden="true" />
      <div className="showcase-hero__inner">
        <div className="showcase-hero__copy">
          <div className="eyebrow"><span className="eyebrow__dot" /> ENGINEERED FOR THE EDGE</div>
          <h1 id="hero-title">Intelligence,<br />built <span>into the edge.</span></h1>
          <p className="showcase-hero__description">
            Embedded platforms, custom hardware and edge AI engineering—designed to move your product from first prototype to dependable production.
          </p>
          <div className="showcase-hero__actions">
            <a className="button-primary" href="#hardware-platforms">
              Explore platforms <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#contact">
              Talk to an engineer
            </a>
          </div>
          <div className="showcase-hero__proof">
            <div><strong>01</strong><span>Purpose-built platforms</span></div>
            <span className="showcase-hero__proof-divider" aria-hidden="true" />
            <div><strong>360°</strong><span>Engineering support</span></div>
          </div>
        </div>

        <div className="showcase-hero__visual">
          <div className="showcase-hero__visual-top">
            <span><span className="status-dot" /> INTERACTIVE HARDWARE STUDY</span>
            <span className="showcase-hero__index">A / 001</span>
          </div>
          <div className="showcase-hero__model">
            <PCBModel />
          </div>
          <div className="hardware-callout hardware-callout--top" aria-hidden="true">
            <span className="hardware-callout__line" /><span>EDGE COMPUTE MODULE</span>
          </div>
          <div className="hardware-callout hardware-callout--side" aria-hidden="true">
            <span className="hardware-callout__line" /><span>DESIGNED TO INTEGRATE</span>
          </div>
          <div className="showcase-hero__model-note">
            <span className="showcase-hero__drag-icon"><Move3d size={16} aria-hidden="true" /></span>
            <span><strong>Explore in 3D</strong><small>Drag to rotate · Scroll to zoom</small></span>
            <ArrowDown className="showcase-hero__hint-arrow" size={16} aria-hidden="true" />
          </div>
          <div className="showcase-hero__visual-caption">AIEGX / EDGE COMPUTE MODULE</div>
        </div>
      </div>

      <a className="showcase-hero__scroll" href="#hardware-platforms">
        <span>SCROLL TO EXPLORE</span><span className="showcase-hero__scroll-line" />
      </a>
    </section>
  );
}
