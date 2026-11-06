import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Boxes,
  Bus,
  Camera,
  Car,
  CircuitBoard,
  Cctv,
  Clock3,
  Crosshair,
  Cpu,
  Eye,
  Factory,
  Layers,
  Monitor,
  ParkingSquare,
  ScanLine,
  Search,
  Server,
  Settings,
  MonitorCheck,
  Shield,
  ShieldCheck,
  Users,
  Video,
} from 'lucide-react';
import { serviceSolutions } from '../components/applications/Applications';
import ContactSection from '../components/contact/ContactSection';
import { hardwarePlatforms } from '../components/products/hardwarePlatforms';
import SpinBoard from '../components/products/SpinBoard';
import { boardImages } from '../components/products/boardImages';

const HERO_VIDEO_SRC = '/video/aiegx-hero.mp4';
const HERO_VIDEO_POSTER = '/video/aiegx-hero-poster.jpg';

const heroSlides = [
  {
    eyebrow: 'EMBEDDED COMPUTE PLATFORMS',
    headline: "Embedded Computing, Engineered for What's Next",
    description: 'Purpose-built platforms and custom hardware that take your ideas from first prototype to dependable production.',
    cta: 'Explore Hardware',
    target: '#hardware-platforms',
    image: '/images/hero-som-module.jpg',
    fallback: '/images/aiegx-hardware-som-hd.jpg',
  },
  {
    eyebrow: 'INTEGRATED SOLUTIONS',
    headline: 'From Embedded Hardware to Intelligent Solutions',
    description: 'Connect capable embedded platforms with the software and system integration your application needs.',
    cta: 'Explore Solutions',
    target: '#integrated-solutions',
    image: '/images/integrated-solution-hd.jpg',
    fallback: '/images/vdc-solution-hd.jpg',
  },
  {
    eyebrow: 'EDGE AI & COMPUTER VISION',
    headline: 'Bringing Intelligence Closer to the Edge',
    description: 'Build responsive vision and AI applications with compute, cameras, and optimized software working together.',
    cta: 'Discover Edge AI',
    target: '#engineering-capabilities',
    image: '/images/edge_robotics_ai.jpg',
    fallback: '/images/dms-solution-hd.jpg',
  },
  {
    eyebrow: 'ENGINEERING CAPABILITIES',
    headline: 'Your Partner in Embedded Product Development',
    description: 'Work with one engineering team across hardware design, Linux, multimedia, and edge application development.',
    cta: 'Talk to Our Engineers',
    target: '#contact',
    image: '/images/industrial-computing-hd.jpg',
    fallback: '/images/sbc-platform-hd.jpg',
  },
];

const platformHighlights = [
  { title: 'RZ Family', detail: 'Powered Platforms', icon: Cpu },
  { title: 'Multiple', detail: 'Form Factors', icon: Boxes },
  { title: 'Industrial Grade', detail: 'Rugged & Reliable', icon: ShieldCheck },
  { title: 'Long Product', detail: 'Lifecycle Support', icon: Clock3 },
];

const hardwareIcons = {
  'SMARC SoM': CircuitBoard,
  SBC: Cpu,
  'Carrier Board': Layers,
  'Complete SBC / Development Platform': Boxes,
};

const platformBenefits = [
  {
    title: 'Optimized for Real-World Applications',
    detail: 'HMI, multimedia, vision AI and edge computing',
    icon: MonitorCheck,
  },
  {
    title: 'Flexible Hardware Options',
    detail: 'SoM, SBC, carrier boards (platform dependent)',
    icon: Boxes,
  },
  {
    title: 'Ready for Product Development',
    detail: 'From evaluation to production',
    icon: Factory,
  },
  {
    title: 'Long-Term Support',
    detail: 'Stable supply and lifecycle management',
    icon: Shield,
  },
];

const integratedSolutions = [
  {
    code: '01',
    shortName: 'VEHICLE & MOBILITY',
    title: 'Vehicle & Mobility Solutions',
    copy: 'Intelligent vision and monitoring systems for vehicles, traffic and transportation.',
    solutions: [
      'Driver Monitoring System (DMS)',
      'Automatic Number Plate Recognition (ANPR)',
      'Vehicle Detection Camera',
      'Smart Parking — Planned',
    ],
    image: '/images/homepage-refresh/solutions/AI Traffic Surveillance with Plate Detection.png',
    alt: 'AI traffic surveillance with vehicle and license plate detection',
    icon: Bus,
  },
  {
    code: '02',
    shortName: 'VIDEO & SURVEILLANCE',
    title: 'Video & Surveillance Solutions',
    copy: 'Recording, monitoring and intelligent video analytics for enhanced security.',
    solutions: [
      'Network Video Recorder (NVR)',
      'CCTV Monitoring System',
      'AI Video Analytics',
      'People Counting — Planned',
      'Multi-Camera Video Analytics — Planned',
    ],
    image: '/images/homepage-refresh/solutions/AI Security Surveillance at Modern Entrance.png',
    alt: 'AI security surveillance at a modern entrance',
    icon: Cctv,
  },
  {
    code: '03',
    shortName: 'INDUSTRIAL & VISION',
    title: 'Industrial & Machine Vision Solutions',
    copy: 'Embedded control, HMI and vision systems for industrial automation and inspection.',
    solutions: [
      'Industrial / Railway HMI',
      'Display / Video Controller',
      'AI Visual Inspection',
      'Smart Vision AI Camera',
      'Infrastructure Control Systems — Planned',
    ],
    image: '/images/homepage-refresh/solutions/Automated Gear Inspection Line.png',
    alt: 'Automated gear inspection on an industrial production line',
    icon: Factory,
  },
  {
    code: '04',
    shortName: 'DEFENCE & ADVANCED VISION',
    title: 'Defence & Advanced Vision Solutions',
    copy: 'Specialized vision and guidance systems for defence and strategic applications.',
    solutions: [
      'Seeker — In Development',
      'Surveillance Vision System — Planned',
      'Target Tracking & Recognition — Planned',
      'Rugged AI Embedded System — Planned',
    ],
    image: '/images/homepage-refresh/solutions/Futuristic Mountain Surveillance HUD.png',
    alt: 'Mountain surveillance scene with a targeting heads-up display',
    icon: Shield,
  },
];

const solutionIcons = {
  'Driver Monitoring System (DMS)': Eye,
  'Automatic Number Plate Recognition (ANPR)': ScanLine,
  'Vehicle Detection Camera': Car,
  'Smart Parking': ParkingSquare,
  'Network Video Recorder (NVR)': Server,
  'CCTV Monitoring System': Monitor,
  'AI Video Analytics': BrainCircuit,
  'People Counting': Users,
  'Multi-Camera Video Analytics': Video,
  'Industrial / Railway HMI': Monitor,
  'Display / Video Controller': Monitor,
  'AI Visual Inspection': Search,
  'Smart Vision AI Camera': Camera,
  'Infrastructure Control Systems': Settings,
  Seeker: Crosshair,
  'Surveillance Vision System': Eye,
  'Target Tracking & Recognition': Crosshair,
  'Rugged AI Embedded System': Cpu,
};

const industries = [
  {
    name: 'Railways',
    image: '/images/industry-railways.jpg',
    alt: 'Railway tracks and modern rail infrastructure',
    objectPosition: 'center 55%',
  },
  {
    name: 'Public Transport',
    image: '/images/industry-public-transport.jpg',
    alt: 'Modern city bus serving public transportation',
    objectPosition: 'center 50%',
  },
  {
    name: 'Security & Surveillance',
    image: '/images/industry-security.jpg',
    alt: 'Security camera used for facility surveillance',
    objectPosition: 'center 45%',
  },
  {
    name: 'Smart City',
    image: '/images/industry-smart-city.jpg',
    alt: 'Connected city infrastructure and urban skyline',
    objectPosition: 'center 50%',
  },
  {
    name: 'Defense',
    image: '/images/industry-defense.jpg',
    alt: 'Rugged embedded compute hardware for mission-critical systems',
    objectPosition: 'center 50%',
  },
];

const capabilities = [
  {
    name: 'Hardware Design',
    detail: 'SoM, SBC, Carrier Board',
    image: '/images/capability-hardware-design.jpg',
    alt: 'Embedded single-board computer and carrier board',
  },
  {
    name: 'Linux / Yocto',
    detail: 'BSP & Driver Development',
    image: '/images/capability-linux-yocto.jpg',
    alt: 'System-on-module hardware for embedded Linux development',
  },
  {
    name: 'Camera & Multimedia',
    detail: 'Camera and multimedia integration',
    image: '/images/capability-camera-multimedia.jpg',
    alt: 'Industrial multimedia display and embedded camera system',
  },
  {
    name: 'Edge AI',
    detail: 'Application Development',
    image: '/images/neurocore_chip.jpg',
    alt: 'Edge AI processor on an embedded computing board',
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [heroVideoFailed, setHeroVideoFailed] = useState(false);
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (prefersReducedMotion || heroPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [heroPaused, prefersReducedMotion]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = (event) => setPrefersReducedMotion(event.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const moveSlide = (direction) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const handleHeroVideoCanPlay = (event) => {
    const playback = event.currentTarget.play();
    if (!playback?.then) {
      setHeroVideoReady(true);
      return;
    }
    playback.then(() => setHeroVideoReady(true)).catch(() => {
      setHeroVideoReady(false);
      setHeroVideoFailed(true);
    });
  };

  const handleHeroVideoError = () => {
    setHeroVideoReady(false);
    setHeroVideoFailed(true);
  };

  return (
    <div className="home-redesign">
      <section
        className="home-hero"
        id="home-hero"
        aria-label="AIEGX capabilities"
        aria-roledescription="carousel"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
        onFocusCapture={() => setHeroPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHeroPaused(false);
        }}
      >
        <img
          className={`home-hero__poster${heroVideoReady && !prefersReducedMotion && !heroVideoFailed ? ' is-covered' : ''}`}
          src={HERO_VIDEO_POSTER}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {!prefersReducedMotion && !heroVideoFailed && (
          <video
            className={`home-hero__video${heroVideoReady ? ' is-ready' : ''}`}
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            poster={HERO_VIDEO_POSTER}
            onCanPlay={handleHeroVideoCanPlay}
            onError={handleHeroVideoError}
            aria-hidden="true"
          />
        )}
        <button
          className="home-hero__arrow home-hero__arrow--previous"
          type="button"
          onClick={() => moveSlide(-1)}
          aria-label="Previous slide"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div className="home-hero__content" aria-live="polite" aria-atomic="true">
          <p className="home-eyebrow"><span aria-hidden="true" />{slide.eyebrow}</p>
          <h1>{slide.headline}</h1>
          <p className="home-hero__description">{slide.description}</p>
          <a className="home-button" href={slide.target}>
            {slide.cta} <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="home-hero__pagination">
          <div className="home-hero__dots" role="group" aria-label="Choose a slide">
            {heroSlides.map((item, index) => (
              <button
                type="button"
                key={item.eyebrow}
                className={index === activeSlide ? 'is-active' : ''}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}: ${item.eyebrow.toLowerCase()}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </div>
        <button
          className="home-hero__arrow home-hero__arrow--next"
          type="button"
          onClick={() => moveSlide(1)}
          aria-label="Next slide"
        >
          <span aria-hidden="true">›</span>
        </button>
      </section>

      <section className="home-section home-platforms" id="hardware-platforms" aria-labelledby="home-platforms-title">
        <div className="home-section__inner container">
          <div className="home-platforms__intro">
            <div className="home-platforms__intro-copy">
              <p className="home-eyebrow"><span aria-hidden="true" />EMBEDDED HARDWARE PLATFORMS</p>
              <h2 id="home-platforms-title">Our <span>Hardware Platforms</span></h2>
              <p className="home-platforms__description">
                Processor-based embedded platforms for HMI, multimedia, vision AI and edge applications, available in different hardware form factors depending on the platform.
              </p>
            </div>
            <div className="home-platforms__highlights" aria-label="Platform highlights">
              {platformHighlights.map(({ title, detail, icon: Icon }) => (
                <div className="home-platforms__highlight" key={title}>
                  <span className="home-platforms__highlight-icon"><Icon size={19} aria-hidden="true" /></span>
                  <span className="home-platforms__highlight-copy">
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="home-platforms__grid">
            {hardwarePlatforms.map((product) => (
              <a className="home-platform" href={product.route} key={product.name}>
                <div className="home-platform__visual">
                  <SpinBoard
                    {...boardImages[product.id]}
                    className="home-platform__image"
                    height="100%"
                  />
                </div>
                <div className="home-platform__content">
                  <h3>{product.name}</h3>
                  <p className="home-platform__category">{product.category}</p>
                  <p className="home-platform__description">{product.description}</p>
                  <span className="home-platform__hardware-label">Available Hardware</span>
                  <span className="home-platform__badges">
                    {product.products.length ? product.products.map((formFactor) => {
                      const Icon = hardwareIcons[formFactor.name];
                      return (
                        <span className="home-platform__badge" key={formFactor.id}>
                          <Icon size={13} aria-hidden="true" />{formFactor.name}
                        </span>
                      );
                    }) : <span className="home-platform__availability-empty">No confirmed hardware options</span>}
                  </span>
                  <span className="home-platform__button">
                    Explore Platform <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="home-platforms__benefits" aria-label="Platform benefits">
            {platformBenefits.map(({ title, detail, icon: Icon }) => (
              <div className="home-platforms__benefit" key={title}>
                <Icon size={20} aria-hidden="true" />
                <span>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-solutions" id="integrated-solutions" aria-labelledby="home-solutions-title">
        <div className="home-section__inner container">
          <div className="home-platforms__intro home-solutions__intro">
            <div className="home-platforms__intro-copy home-solutions__intro-copy">
              <p className="home-eyebrow"><span aria-hidden="true" />INTEGRATED SOLUTIONS</p>
              <h2 id="home-solutions-title">Our <span>Integrated Solutions</span></h2>
              <p className="home-platforms__description home-solutions__intro-description">
                Application-ready embedded systems combining hardware, software and AI for transportation, video surveillance, industrial automation and defence applications.
              </p>
            </div>
          </div>
          <div className="home-services__grid">
            {integratedSolutions.map((service) => {
              const Icon = service.icon;
              const parsedSolutions = service.solutions.map((item) => {
                const statusMatch = item.match(/\s+—\s+(Planned|In Development)$/);
                return {
                  name: statusMatch ? item.slice(0, statusMatch.index) : item,
                  status: statusMatch?.[1],
                };
              });

              return (
                <article className="home-service-card" key={service.code}>
                  <div className="home-service-card__image">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        if (event.currentTarget.dataset.fallbackApplied !== 'true') {
                          event.currentTarget.dataset.fallbackApplied = 'true';
                          event.currentTarget.src = '/images/integrated-solution-hd.jpg';
                        } else {
                          event.currentTarget.style.visibility = 'hidden';
                        }
                      }}
                    />
                  </div>
                  <div className="home-service-card__content">
                    <div className="home-service-card__meta">
                      <span>{service.shortName}</span>
                      <Icon size={17} aria-hidden="true" />
                    </div>
                    <h3 title={service.title}>{service.title}</h3>
                    <p className="home-service-card__description">{service.copy}</p>
                    <div className="home-service-card__solutions">
                      <span className="home-service-card__solutions-label">Solutions</span>
                      <ul>
                        {parsedSolutions.map(({ name, status }) => {
                          const SolutionIcon = solutionIcons[name] ?? ArrowRight;
                          return (
                            <li key={name}>
                              <SolutionIcon className="home-service-card__solution-icon" size={17} aria-hidden="true" />
                              <span className="home-service-card__solution-name">{name}</span>
                              {status && <small>{status}</small>}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <a className="home-service-card__button" href="#contact">
                      Explore Solutions <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-industries" id="industries" aria-labelledby="home-industries-title">
        <div className="home-section__inner container">
          <div className="home-section__heading">
            <h2 id="home-industries-title">Industries <span>We Serve</span></h2>
          </div>
          <div className="home-industries__row">
            {industries.map(({ name, image, alt, objectPosition }) => (
              <a className="home-industry" href="#contact" key={name}>
                <div className="home-industry__visual">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition }}
                    onError={(event) => {
                      event.currentTarget.dataset.imageFailed = 'true';
                    }}
                  />
                </div>
                <div className="home-industry__content">
                  <span className="home-industry__number" aria-hidden="true" />
                  <strong>{name}</strong>
                  <ArrowUpRight className="home-industry__arrow" size={18} aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-capabilities" id="engineering-capabilities" aria-labelledby="home-capabilities-title">
        <div className="home-section__inner container">
          <div className="home-section__heading">
            <h2 id="home-capabilities-title">Our <span>Engineering Capabilities</span></h2>
          </div>
          <div className="home-capabilities__row">
            {capabilities.map(({ name, detail, image, alt }) => (
              <a className="home-capability" href="#contact" key={name}>
                <div className="home-capability__visual">
                  <img
                    className="home-capability__backdrop"
                    src={image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.dataset.imageFailed = 'true';
                    }}
                  />
                  <img
                    className="home-capability__image"
                    src={image}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.dataset.imageFailed = 'true';
                    }}
                  />
                </div>
                <div className="home-capability__content">
                  <h3>{name}</h3>
                  <p>{detail}</p>
                  <ArrowUpRight className="home-capability__arrow" size={18} aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
