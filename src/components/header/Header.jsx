import React, { useEffect, useState } from 'react';
import Logo from '../common/Logo';
import ProductsMegaMenu from './ProductsMegaMenu';
import ApplicationsMegaMenu from './ApplicationsMegaMenu';
import SolutionsMegaMenu from './SolutionsMegaMenu';
import AboutUsMegaMenu from './AboutUsMegaMenu';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

const menuComponents = {
  products: ProductsMegaMenu,
  solutions: SolutionsMegaMenu,
  industries: ApplicationsMegaMenu,
  company: AboutUsMegaMenu,
};

const menuLabels = {
  products: 'Products',
  solutions: 'Solutions',
  industries: 'Industries',
  company: 'Company',
};
const menuIds = {
  products: { toggle: 'navbar-products-toggle', panel: 'products-mega-menu' },
  solutions: { toggle: 'navbar-solutions-toggle', panel: 'solutions-mega-menu' },
  industries: { toggle: 'navbar-applications-toggle', panel: 'applications-mega-menu' },
  company: { toggle: 'navbar-about-toggle', panel: 'about-mega-menu' },
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sectionNavigation = [
      ['home-hero', 'home'],
      ['hardware-platforms', 'products'],
      ['integrated-solutions', 'solutions'],
      ['industries', 'industries'],
      ['engineering-capabilities', 'company'],
      ['contact', 'contact'],
    ];
    const sections = sectionNavigation
      .map(([id, key]) => {
        const element = document.getElementById(id);
        return element ? { element, key } : null;
      })
      .filter(Boolean);

    if (!sections.length) return undefined;

    const updateCurrentSection = () => {
      const activationLine = window.innerHeight * 0.35;
      const visibleSections = sections
        .map(({ element, key }) => ({ key, rect: element.getBoundingClientRect() }))
        .filter(({ rect }) => rect.top <= activationLine && rect.bottom > 80)
        .sort((a, b) => a.rect.top - b.rect.top);
      const nextSection = visibleSections.at(-1)?.key ?? 'home';
      setCurrentSection((current) => current === nextSection ? current : nextSection);
    };

    const observer = new IntersectionObserver(updateCurrentSection, {
      rootMargin: '-80px 0px -65% 0px',
      threshold: 0,
    });

    sections.forEach(({ element }) => observer.observe(element));
    updateCurrentSection();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateHome = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
      return;
    }
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateContact = (event) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      event.preventDefault();
      window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/#contact' }));
      window.setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const toggleMenu = (key) => setActiveMenu((current) => current === key ? null : key);
  const isCurrentSection = (key) => (
    window.location.pathname === '/' && currentSection === key && activeMenu === null
  );

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner container">
          <div className="site-header__brand">
            <Logo
              tagline="Embedded & Edge AI"
              imgClassName="site-header__logo-image"
              className="site-header__logo"
            />
          </div>

          <nav className="site-header__nav" aria-label="Main navigation">
            <button type="button" className={`site-header__link${isCurrentSection('home') ? ' is-current' : ''}`} onClick={navigateHome} aria-current={isCurrentSection('home') ? 'page' : undefined}>Home</button>
            {Object.entries(menuLabels).map(([key, label]) => {
              const isOpen = activeMenu === key;
              const isCurrent = isCurrentSection(key);
              return (
                <button
                  type="button"
                  className={`site-header__link${isOpen ? ' is-active' : ''}${isCurrent ? ' is-current' : ''}`}
                  key={key}
                  id={menuIds[key].toggle}
                  onClick={() => toggleMenu(key)}
                  aria-expanded={isOpen}
                  aria-haspopup="dialog"
                  aria-controls={menuIds[key].panel}
                >
                  {label}
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <a className={`site-header__contact${isCurrentSection('contact') ? ' is-current' : ''}`} href="#contact" onClick={navigateContact}>
              <span>Contact</span><ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="site-header__mobile-toggle"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="site-header__mobile-nav" aria-label="Mobile navigation">
            <button type="button" className={`site-header__mobile-link${isCurrentSection('home') ? ' is-current' : ''}`} onClick={navigateHome} aria-current={isCurrentSection('home') ? 'page' : undefined}>Home</button>
            {Object.entries(menuLabels).map(([key, label]) => {
              const isOpen = activeMenu === key;
              const isCurrent = isCurrentSection(key);
              return (
                <button
                  type="button"
                  className={`site-header__mobile-link${isOpen ? ' is-active' : ''}${isCurrent ? ' is-current' : ''}`}
                  key={key}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveMenu(key);
                  }}
                  aria-expanded={isOpen}
                  aria-haspopup="dialog"
                  aria-controls={menuIds[key].panel}
                >
                  {label}<ArrowUpRight size={15} aria-hidden="true" />
                </button>
              );
            })}
            <a className={`site-header__mobile-link site-header__mobile-contact${isCurrentSection('contact') ? ' is-current' : ''}`} href="#contact" onClick={navigateContact}>
              Contact<ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>

      {Object.entries(menuComponents).map(([key, Component]) => (
        <Component
          key={key}
          isOpen={activeMenu === key}
          onClose={() => setActiveMenu(null)}
        />
      ))}
    </>
  );
}
