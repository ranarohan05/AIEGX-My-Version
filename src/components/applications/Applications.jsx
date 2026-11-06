import React from 'react';
import { ArrowUpRight, Camera, Eye, Gauge, ScanLine } from 'lucide-react';

export const serviceSolutions = [
  {
    code: '01',
    shortName: 'HMI',
    title: 'Human-machine interface',
    copy: 'Responsive, graphics-rich display systems for industrial control, medical devices, and the next generation of smart cockpits.',
    image: '/images/solution-hmi.jpg',
    alt: 'Industrial human-machine interface display system',
    icon: Gauge,
    className: 'solution-tile--hmi',
  },
  {
    code: '02',
    shortName: 'DMS',
    title: 'Driver monitoring',
    copy: 'On-device in-cabin vision for a more attentive and informed driving experience.',
    image: '/images/solution-dms.jpg',
    alt: 'In-cabin driver monitoring camera solution',
    icon: Eye,
    className: 'solution-tile--dms',
  },
  {
    code: '03',
    shortName: 'VDC',
    title: 'Vehicle domain control',
    copy: 'A dependable compute core for connected vehicle systems and real-time control.',
    image: '/images/solution-vdc.jpg',
    alt: 'Embedded vehicle domain controller',
    icon: Camera,
    className: 'solution-tile--vdc',
  },
  {
    code: '04',
    shortName: 'ANPR',
    title: 'Edge vision & recognition',
    copy: 'Real-time visual intelligence for intelligent traffic, access, and infrastructure.',
    image: '/images/solution-anpr.jpg',
    alt: 'Edge vision camera for automatic number plate recognition',
    icon: ScanLine,
    className: 'solution-tile--anpr',
  },
];

function handleSolutionImageError(event) {
  if (event.currentTarget.dataset.fallbackApplied !== 'true') {
    event.currentTarget.dataset.fallbackApplied = 'true';
    event.currentTarget.src = '/images/integrated-solution-hd.jpg';
  } else {
    event.currentTarget.style.display = 'none';
  }
}

export default function Applications() {
  const [featured, ...supporting] = serviceSolutions;

  return (
    <section className="solutions-section" id="integrated-solutions" aria-labelledby="solutions-title">
      <div className="section-container">
        <div className="section-kicker" aria-hidden="true">&nbsp;</div>
        <div className="solutions-section__heading">
          <h2 id="solutions-title">Intelligence that<br /><span>meets the real world.</span></h2>
          <p>From the vehicle cabin to the factory floor, we bring compute, cameras, and software together to solve practical problems.</p>
        </div>

        <article className={`solution-feature ${featured.className}`}>
          <div className="solution-feature__image">
            <img
              src={featured.image}
              alt={featured.alt}
              loading="lazy"
              onError={handleSolutionImageError}
            />
            <span className="solution-image-label">APPLICATION / {featured.shortName}</span>
          </div>
          <div className="solution-feature__copy">
            <span className="solution-feature__number">FEATURED SOLUTION</span>
            <featured.icon size={22} aria-hidden="true" />
            <h3>{featured.title}</h3>
            <p>{featured.copy}</p>
            <a href="#contact" className="text-link">Discuss your application <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </article>

        <div className="solution-rail">
          {supporting.map((solution) => {
            const Icon = solution.icon;
            return (
              <article className={`solution-tile ${solution.className}`} key={solution.code}>
                <div className="solution-tile__image">
                  <img
                    src={solution.image}
                    alt={solution.alt}
                    loading="lazy"
                    onError={handleSolutionImageError}
                  />
                </div>
                <div className="solution-tile__copy">
                  <div className="solution-tile__meta"><span>{solution.shortName}</span><Icon size={17} aria-hidden="true" /></div>
                  <h3>{solution.title}</h3>
                  <p>{solution.copy}</p>
                  <a href="#contact" aria-label={`Discuss ${solution.title}`}>Explore solution <ArrowUpRight size={15} aria-hidden="true" /></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
