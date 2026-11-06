import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronRight, Cpu } from 'lucide-react';
import PlatformImage from '../components/products/PlatformImage';
import Rzg2lExperience from './Rzg2lExperience';
import {
  hardwareApplications,
  hardwareCapabilities,
  softwareSupportItems,
} from '../components/products/hardwarePlatforms';

function Breadcrumbs({ platform, product }) {
  return (
    <nav className="hardware-detail__breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <ChevronRight size={14} aria-hidden="true" />
      <a href="/#hardware-platforms">Products</a>
      {product && (
        <>
          <ChevronRight size={14} aria-hidden="true" />
          <a href={platform.route}>{platform.name}</a>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page">{product.name}</span>
        </>
      )}
      {!product && <span aria-current="page">{platform.name}</span>}
    </nav>
  );
}

function ContactActions() {
  return (
    <div className="hardware-detail__actions">
      <a className="hardware-detail__button" href="/#contact">
        Contact / Enquiry <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}

function InformationSection({ title, children, className = '' }) {
  return (
    <section className={`hardware-detail__section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function NotProvided({ children = 'Platform-specific details have not been provided in the available project materials.' }) {
  return <p className="hardware-detail__notice">{children}</p>;
}

function PlatformPage({ platform }) {
  return (
    <>
      <div className="hardware-detail__hero">
        <div className="hardware-detail__copy">
          <p className="hardware-detail__eyebrow"><Cpu size={15} aria-hidden="true" /> EMBEDDED PLATFORM</p>
          <h1><span>{platform.name}</span></h1>
          <p className="hardware-detail__description">{platform.description}</p>
          <ContactActions />
        </div>
        <div className="hardware-detail__image">
          <PlatformImage productId={platform.imageId} className="hardware-detail__image-element" />
        </div>
      </div>

      <div className="hardware-detail__grid">
        <InformationSection title="Key Platform Capabilities">
          <ul className="hardware-detail__capabilities">
            {hardwareCapabilities.map((capability) => (
              <li key={capability}>
                <strong>{capability}</strong>
                <NotProvided />
              </li>
            ))}
          </ul>
        </InformationSection>

        <InformationSection title="Hardware Architecture">
          <p>{platform.architecture}</p>
        </InformationSection>

        <InformationSection title="Available Hardware" className="hardware-detail__wide">
          {platform.products.length ? (
            <div className="hardware-detail__products">
              {platform.products.map((product) => (
                <a className="hardware-detail__product-link" href={product.route} key={product.id}>
                  <span>{product.name}</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          ) : (
            <NotProvided>
              No hardware product availability has been confirmed for this platform. This page intentionally remains at platform level.
            </NotProvided>
          )}
        </InformationSection>

        <InformationSection title="Typical Applications">
          <ul className="hardware-detail__tag-list">
            {hardwareApplications.map((application) => <li key={application}>{application}</li>)}
          </ul>
          <NotProvided>Platform-specific application mapping has not been provided.</NotProvided>
        </InformationSection>

        <InformationSection title="Software Support">
          <ul className="hardware-detail__list">
            {softwareSupportItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <NotProvided>Platform-specific support details and versions have not been provided.</NotProvided>
        </InformationSection>
      </div>

      <div className="hardware-detail__cta">
        <div>
          <h2>Discuss your {platform.name} project</h2>
          <p>Contact AIEGX to enquire about this platform.</p>
        </div>
        <ContactActions />
      </div>
    </>
  );
}

function ProductPage({ platform, product }) {
  const relatedProducts = platform.products.filter((item) => item.id !== product.id);

  return (
    <>
      <div className="hardware-detail__hero hardware-detail__hero--product">
        <div className="hardware-detail__copy">
          <p className="hardware-detail__eyebrow"><Cpu size={15} aria-hidden="true" /> HARDWARE PRODUCT</p>
          <h1>{platform.name} <span>{product.name}</span></h1>
          <p className="hardware-detail__description">
            {product.name} option for the {platform.name} platform. Product-specific details have not been supplied.
          </p>
          <div className="hardware-detail__actions">
            <a className="hardware-detail__button" href="/#contact">
              Request Quote <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="hardware-detail__button hardware-detail__button--secondary" href="/#contact">
              Request Evaluation <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hardware-detail__image hardware-detail__image--product">
          <PlatformImage productId={platform.imageId} className="hardware-detail__image-element" />
          <p>Existing platform image; product-specific image not provided.</p>
        </div>
      </div>

      <div className="hardware-detail__grid">
        <InformationSection title="Overview">
          <NotProvided>
            A product-specific overview for {product.name} has not been supplied.
          </NotProvided>
        </InformationSection>
        <InformationSection title="Key Features">
          <NotProvided>Confirmed product-specific features have not been supplied.</NotProvided>
        </InformationSection>
        <InformationSection title="Technical Specifications">
          <NotProvided>Confirmed technical specifications have not been supplied.</NotProvided>
        </InformationSection>
        <InformationSection title="Interfaces">
          <NotProvided>Confirmed product-specific interfaces have not been supplied.</NotProvided>
        </InformationSection>
        <InformationSection title="Software Support">
          <ul className="hardware-detail__list">
            {softwareSupportItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <NotProvided>Product-specific support details and versions have not been provided.</NotProvided>
        </InformationSection>
        <InformationSection title="Applications">
          <ul className="hardware-detail__tag-list">
            {hardwareApplications.map((application) => <li key={application}>{application}</li>)}
          </ul>
          <NotProvided>Product-specific application mapping has not been provided.</NotProvided>
        </InformationSection>
        <InformationSection title="Documents">
          <NotProvided>No confirmed product documents are available in the project materials.</NotProvided>
        </InformationSection>
        <InformationSection title="Related Products">
          {relatedProducts.length ? (
            <div className="hardware-detail__products">
              {relatedProducts.map((item) => (
                <a className="hardware-detail__product-link" href={item.route} key={item.id}>
                  <span>{platform.name} {item.name}</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          ) : (
            <NotProvided>No other confirmed hardware products are related to this option.</NotProvided>
          )}
        </InformationSection>
      </div>

      <div className="hardware-detail__cta">
        <div>
          <h2>Enquire about {platform.name} {product.name}</h2>
          <p>Contact AIEGX for product availability and project enquiries.</p>
        </div>
        <ContactActions />
      </div>
    </>
  );
}

export default function HardwarePlatformPage({ page }) {
  const { platform, product, type } = page;

  if (platform.id === 'rz-g2l') {
    return <Rzg2lExperience page={page} />;
  }

  return (
    <div className="hardware-detail">
      <div className="hardware-detail__inner">
        <Breadcrumbs platform={platform} product={product} />
        {type === 'product'
          ? <ProductPage platform={platform} product={product} />
          : <PlatformPage platform={platform} />}
      </div>
    </div>
  );
}
