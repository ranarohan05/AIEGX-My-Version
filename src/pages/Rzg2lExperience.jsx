import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Cable,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  FileText,
  HardDrive,
  Monitor,
} from 'lucide-react';
import {
  hardwareApplications,
  hardwarePlatforms,
} from '../components/products/hardwarePlatforms';
import {
  rzg2lPlatformHighlights,
  rzg2lProductContent,
  rzg2lProductSections,
} from '../components/products/rzg2lContent';

const rzg2lPlatform = hardwarePlatforms.find(({ id }) => id === 'rz-g2l');

const architectureItems = [
  {
    id: 'smarc-som',
    title: 'SMARC SoM',
    description: 'Processor, Memory, Core Interfaces',
    image: '/images/rz-g2l-smarc-som.png',
    alt: rzg2lProductContent['smarc-som'].imageAlt,
  },
  {
    id: 'carrier-board',
    title: 'Carrier Board',
    description: 'Application Interfaces and Expansion',
    image: '/images/rz-g2l-carrier-board.png',
    alt: rzg2lProductContent['carrier-board'].imageAlt,
  },
  {
    id: 'complete-sbc',
    title: 'Complete SBC / Development Platform',
    description: 'SMARC SoM + Carrier Board',
    image: '/images/rz-g2l-complete-sbc.png',
    alt: rzg2lProductContent['complete-sbc'].imageAlt,
  },
];

const featureIcons = [Cpu, Monitor, HardDrive, Cable, Code2];
const formatHighlight = (value) => value.replaceAll('Â·', '·');
const applicationImages = {
  'Industrial HMI': '/images/hmi-solution-hd.jpg',
  'Railway HMI': '/images/industry-railways.jpg',
  'Display Controller': '/images/integrated-solution-hd.jpg',
  'Remote Monitoring & Control': '/images/industry-smart-city.jpg',
  'Connected Embedded Systems': '/images/industrial-computing-hd.jpg',
};

const rzg2lFeatureStrip = [
  { label: 'Quad Cortex-A55', value: '(Up to 1.2 GHz)' },
  { label: '2D/3D Graphics', value: '& Display Support' },
  { label: 'Rich Industrial', value: 'Interfaces' },
  { label: 'Linux / Yocto', value: 'Support' },
  { label: 'Long Product', value: 'Lifecycle' },
];

const hardwareOptions = [
  {
    id: 'smarc-som',
    image: '/images/rz-g2l-smarc-som.png',
    imageAlt: 'RZ/G2L SMARC SoM board',
    imagePhase: 0,
    description: 'Compact SMARC module with essential interfaces for industrial and HMI applications.',
    features: ['Renesas RZ/G2L Processor', 'Optimized for HMI & Display', 'Compact form factor (SMARC)', 'Yocto Linux BSP'],
  },
  {
    id: 'carrier-board',
    image: '/images/rz-g2l-carrier-board.png',
    imageAlt: 'RZ/G2L carrier board',
    imagePhase: 1,
    description: 'Expansion board with additional interfaces and connectivity.',
    features: ['Supports RZ/G2L SMARC SoM', 'Rich I/O and expansion', 'Industrial connectors', 'Flexible for custom designs'],
  },
  {
    id: 'complete-sbc',
    image: '/images/rz-g2l-complete-sbc.png',
    imageAlt: 'RZ/G2L complete SBC development platform',
    imagePhase: 2,
    description: 'Complete ready-to-use single board computer (SMARC SoM + Carrier Board).',
    features: ['All required interfaces', 'Ideal for prototyping', 'Validated configuration', 'Yocto Linux BSP'],
  },
];

const typicalApplications = [
  {
    title: 'Industrial HMI',
    image: '/images/hmi-solution-hd.jpg',
    description: 'Support responsive operator interfaces for industrial monitoring and control.',
  },
  {
    title: 'Railway HMI',
    image: '/images/industry-railways.jpg',
    description: 'Enable onboard or trackside displays for railway information and system status.',
  },
  {
    title: 'Display Controller',
    image: '/images/integrated-solution-hd.jpg',
    description: 'Drive embedded display experiences for information, monitoring and control.',
  },
  {
    title: 'Remote Monitoring',
    image: '/images/industry-smart-city.jpg',
    description: 'Connect edge systems for remote visualization and operational monitoring.',
  },
  {
    title: 'Connected Systems',
    image: '/images/industrial-computing-hd.jpg',
    description: 'Bring embedded processing and connectivity to networked industrial equipment.',
  },
];

const whyRzg2l = [
  'Optimized for HMI and display',
  'Rich industrial interfaces',
  'Flexible modular architecture',
  'Linux / Yocto long-term support',
  'Proven and reliable platform',
  'Suitable for industrial and transportation applications',
];

function Breadcrumbs({ product }) {
  return (
    <nav className="hardware-detail__breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <ChevronRight size={14} aria-hidden="true" />
      <a href="/#hardware-platforms">Products</a>
      <ChevronRight size={14} aria-hidden="true" />
      {product ? <a href={rzg2lPlatform.route}>RZ/G2L</a> : <span aria-current="page">RZ/G2L</span>}
      {product && (
        <>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page">{product.title}</span>
        </>
      )}
    </nav>
  );
}

function Rzg2lShell({ children, product, platformPage = false }) {
  return (
    <div className={`hardware-detail rzg2l-experience${platformPage ? ' rzg2l-experience--platform' : ''}`}>
      <div className="hardware-detail__inner">
        <Breadcrumbs product={product} />
        {children}
      </div>
    </div>
  );
}

function PlatformPage() {
  return (
    <Rzg2lShell platformPage>
      <section className="hardware-detail__hero rzg2l-platform-hero">
        <svg className="rzg2l-platform-hero__circuits" viewBox="0 0 1400 520" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="var(--accent-color)" strokeWidth="1.5">
            <path d="M600 90h120v-34h140v54h100v-44h190" />
            <path d="M560 150h164v40h112v-58h142v-38h172" />
            <path d="M585 228h110v-36h150v54h126v-42h180" />
            <path d="M640 314h130v-42h116v54h155v-38h126" />
            <path d="M720 390h118v-34h154v46h112v-40h94" />
            <path d="M900 66v76h-38v90h56v86h-32v72" />
            <path d="M1110 80v80h-42v84h74v92h-36v92" />
          </g>
          <g fill="var(--accent-color)">
            <circle cx="600" cy="90" r="3" />
            <circle cx="1150" cy="66" r="3" />
            <circle cx="560" cy="150" r="3" />
            <circle cx="1270" cy="94" r="3" />
            <circle cx="585" cy="228" r="3" />
            <circle cx="1157" cy="244" r="3" />
            <circle cx="640" cy="314" r="3" />
            <circle cx="1165" cy="326" r="3" />
            <circle cx="720" cy="390" r="3" />
            <circle cx="1198" cy="446" r="3" />
          </g>
        </svg>
        <div className="hardware-detail__copy rzg2l-platform-hero__copy">
          <p className="hardware-detail__eyebrow"><Cpu size={15} aria-hidden="true" /> EMBEDDED PLATFORM</p>
          <h1><span>RZ/G2L</span><br />Embedded Control &amp; HMI Platform</h1>
          <span className="rzg2l-platform-hero__accent" aria-hidden="true" />
          <p className="hardware-detail__description">Renesas RZ/G2L based platform for industrial HMI, display control, connectivity and embedded applications. Designed for long product lifecycle and reliable industrial use.</p>
          <div className="hardware-detail__actions">
            <a className="hardware-detail__button" href="/#contact">Contact / Enquiry <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hardware-detail__image rzg2l-platform-hero__visual">
          <img
            className="rzg2l-platform-hero__board"
            src="/images/rz-g2l-complete-sbc.png"
            alt="RZ/G2L complete SBC development platform board"
            decoding="async"
          />
        </div>
      </section>

      <section className="rzg2l-feature-strip" aria-label="RZ/G2L platform highlights">
        {rzg2lFeatureStrip.map(({ label, value }, index) => {
          const Icon = featureIcons[index];
          return (
            <div className="rzg2l-feature" key={label}>
              <Icon size={18} aria-hidden="true" />
              <div><span>{label}</span><strong>{value}</strong></div>
            </div>
          );
        })}
      </section>

      <section className="rzg2l-section rzg2l-architecture-section">
        <div className="rzg2l-architecture-intro">
          <h2>Hardware Architecture</h2>
          <p>The RZ/G2L platform supports a modular architecture. SMARC SoM provides the core computing module, Carrier Board provides application interfaces and expansion. Together they form a complete SBC / Development Platform.</p>
        </div>
        <div className="rzg2l-architecture-grid">
          {architectureItems.map(({ id, title, description, image, alt }) => (
            <React.Fragment key={id}>
              {id !== 'smarc-som' && <span className="rzg2l-architecture-operator" aria-hidden="true">{id === 'carrier-board' ? '+' : '='}</span>}
            <article className="rzg2l-architecture-card">
              <div className="rzg2l-architecture-card__image"><img src={image} alt={alt} loading="lazy" decoding="async" /></div>
              <div className="rzg2l-architecture-card__copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="rzg2l-section">
        <div className="rzg2l-section__heading">
          <p className="hardware-detail__eyebrow">CHOOSE A HARDWARE OPTION</p>
          <h2>Available Hardware</h2>
          <p>Choose the right form factor for your application.</p>
        </div>
        <div className="rzg2l-products-grid">
          {hardwareOptions.map((option) => {
            const product = rzg2lPlatform.products.find(({ id }) => id === option.id);
            const detail = rzg2lProductContent[product.id];
            return (
              <a className="rzg2l-product-card" href={product.route} key={product.id}>
                <div className="rzg2l-product-card__image">
                  <div className="rzg2l-product-card__image-motion">
                    <img
                      src={option.image}
                      alt={option.imageAlt}
                      loading="lazy"
                      decoding="async"
                      style={{ animationDelay: `${option.imagePhase * -1.8}s` }}
                    />
                  </div>
                </div>
                <div className="rzg2l-product-card__body">
                  <h3>{detail.title}</h3>
                  <p>{option.description}</p>
                  <ul>
                    {option.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <span className="rzg2l-product-card__action">View Product <ArrowRight size={16} aria-hidden="true" /></span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <div className="rzg2l-platform-lower-grid">
        <section className="hardware-detail__section rzg2l-applications">
          <h2>Typical Applications</h2>
          <div className="rzg2l-applications__grid">
            {typicalApplications.map(({ title, image, description }) => <article key={title} tabIndex={0}>
              <img src={image} alt="" loading="lazy" decoding="async" />
              <div className="rzg2l-applications__caption">
                <span aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>)}
          </div>
        </section>
        <section className="hardware-detail__section">
          <h2>Why RZ/G2L</h2>
          <ul className="rzg2l-why-list">{whyRzg2l.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>
    </Rzg2lShell>
  );
}

function ProductGallery({ product }) {
  const images = product.images ?? [{ src: product.image, alt: product.imageAlt }];
  const [activeImage, setActiveImage] = useState(0);
  const selectedImage = images[activeImage] ?? images[0];
  const selectImage = (offset) => setActiveImage((current) => (current + offset + images.length) % images.length);

  return (
    <div className="rzg2l-gallery">
      <div className="rzg2l-gallery__main">
        <img src={selectedImage.src} alt={selectedImage.alt} />
      </div>
      <div className="rzg2l-gallery__controls">
        {images.length > 1 && <button type="button" onClick={() => selectImage(-1)} aria-label="Previous product image"><ChevronLeft size={18} /></button>}
        <div className="rzg2l-gallery__thumbs" aria-label="Product image gallery">
          {images.map((image, index) => (
            <button className={index === activeImage ? 'is-active' : ''} type="button" key={image.src} onClick={() => setActiveImage(index)} aria-label={`Show product image ${index + 1}`} aria-pressed={index === activeImage}>
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
        {images.length > 1 && <button type="button" onClick={() => selectImage(1)} aria-label="Next product image"><ChevronRight size={18} /></button>}
      </div>
      {product.imageNote && <p>{product.imageNote}</p>}
    </div>
  );
}

function ProductPage({ product }) {
  const [activeSection, setActiveSection] = useState('overview');
  const overviewId = `overview-${product.id}`;
  const productInfo = (
    <>
      <section className="hardware-detail__hero rzg2l-product-hero" aria-labelledby={overviewId}>
        <ProductGallery product={product} />
        <div className="hardware-detail__copy">
          <p className="hardware-detail__eyebrow"><Cpu size={15} aria-hidden="true" /> {product.category.toUpperCase()}</p>
          <h1 id={overviewId}><span>RZ/G2L</span><br />{product.title.replace('RZ/G2L ', '')}</h1>
          <p className="hardware-detail__description">{product.description}</p>
          <p className="rzg2l-product-hero__overview">{product.overview}</p>
          <div className="hardware-detail__actions">
            <a className="hardware-detail__button" href="/#contact">Request Quote <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="hardware-detail__button hardware-detail__button--secondary" href="/#contact">Request Evaluation <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <ul className="rzg2l-product-highlights" aria-label="Platform highlights">
            {rzg2lPlatformHighlights.map(({ label, value }, index) => {
              const Icon = featureIcons[index];
              return <li key={label}><Icon size={18} aria-hidden="true" /><span>{formatHighlight(value)}</span></li>;
            })}
          </ul>
        </div>
      </section>

      <nav className="rzg2l-product-tabs" aria-label="Product information">
        {rzg2lProductSections.map(({ id, label }) => <a className={activeSection === id ? 'is-active' : ''} aria-current={activeSection === id ? 'location' : undefined} href={`#${id}`} key={id} onClick={() => setActiveSection(id)}>{label}</a>)}
      </nav>

      <div className="rzg2l-details-layout">
        <div className="rzg2l-details-main">
          <section className="hardware-detail__section" id="overview">
            <h2>Overview</h2>
            <p>{product.overview}</p>
          </section>
          <section className="hardware-detail__section" id="key-features">
            <h2>Key Features</h2>
            <div className="rzg2l-feature-cards">
              {rzg2lPlatformHighlights.map(({ label, value }, index) => {
                const Icon = featureIcons[index];
                return <article id={label === 'Software' ? 'software-support' : undefined} key={label}>
                  <Icon size={19} aria-hidden="true" />
                  <div><h3>{label}</h3><p>{formatHighlight(value)}</p></div>
                </article>;
              })}
            </div>
          </section>
          <section className="hardware-detail__section" id="applications">
            <h2>Applications</h2>
            <div className="rzg2l-product-applications">
              {hardwareApplications.map((application) => <article key={application}>
                <img src={applicationImages[application]} alt="" loading="lazy" decoding="async" />
                <h3>{application.replace(' & Control', '').replace(' Embedded Systems', ' Systems')}</h3>
              </article>)}
            </div>
          </section>
        </div>
        <aside className="rzg2l-product-sidebar">
          <section className="hardware-detail__section rzg2l-quick-specs" id="specifications" aria-label="Quick specifications">
            <h2>Quick Specifications</h2>
            <dl>{rzg2lPlatformHighlights.map(({ label, value }) => <div id={label === 'Connectivity' ? 'interfaces' : undefined} key={label}><dt>{label === 'Processing' ? 'Processor' : label}</dt><dd>{formatHighlight(value)}</dd></div>)}</dl>
            <p className="hardware-detail__notice">Available platform-level information; product-specific configuration details are not supplied.</p>
          </section>
          <section className="hardware-detail__section rzg2l-documents" id="documents">
            <h2>Documents &amp; Downloads</h2>
            <div className="rzg2l-no-documents"><FileText size={18} aria-hidden="true" /><p>No verified product documents are available in the project assets.</p></div>
          </section>
        </aside>
      </div>

      <section className="hardware-detail__section rzg2l-related">
        <h2>Other RZ/G2L Hardware</h2>
        <div className="rzg2l-related__links">
          {rzg2lPlatform.products.filter(({ id }) => id !== product.id).map((item) => (
            <a className="hardware-detail__product-link" href={item.route} key={item.id}><span>{rzg2lProductContent[item.id].title}</span><ArrowRight size={17} aria-hidden="true" /></a>
          ))}
          <a className="hardware-detail__product-link" href={rzg2lPlatform.route}><span>RZ/G2L Platform Overview</span><ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </section>
    </>
  );

  return <Rzg2lShell product={product}>{productInfo}</Rzg2lShell>;
}

export default function Rzg2lExperience({ page }) {
  if (page.type === 'product') {
    const product = rzg2lProductContent[page.product.id];
    return product ? <ProductPage key={page.product.id} product={product} /> : <PlatformPage />;
  }
  return <PlatformPage />;
}
