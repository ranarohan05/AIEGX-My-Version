import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getHardwarePage, hardwarePlatforms } from '../src/components/products/hardwarePlatforms.js';
import { hardwarePlatformImages } from '../src/components/products/hardwarePlatformImages.js';

const templateCss = await readFile(new URL('../src/styles/template.css', import.meta.url), 'utf8');
const logoSource = await readFile(new URL('../src/components/common/Logo.jsx', import.meta.url), 'utf8');
const homeSource = await readFile(new URL('../src/pages/Home.jsx', import.meta.url), 'utf8');

test('header active states and mega-menu selections use Copperline theme accents', () => {
  assert.match(templateCss, /\.site-header__link\.is-current,[\s\S]*?color: var\(--accent-color\) !important;/);
  assert.match(templateCss, /\.mega-menu-panel \.mega-menu-selectable-item\.mega-menu-item--selected \{[\s\S]*?color: var\(--menu-accent\);/);
  assert.match(templateCss, /\.mega-menu-panel \[class\*="bg-blue-50"\] \{[\s\S]*?background-color: var\(--menu-hover\) !important;/);
});

test('logo focus treatment follows the theme accent instead of a fixed blue', () => {
  assert.ok(logoSource.includes('focus-visible:ring-[var(--accent-color)]'));
  assert.ok(!logoSource.includes('#2DD4F0'));
  assert.ok(!logoSource.includes('#3285FF'));
});

test('hardware section has the requested platform cards and feature content in order', () => {
  const cardNames = ['RZ/G2L', 'RZ/G2N', 'RZ/V2L', 'RZ/V2H'];

  assert.deepEqual(hardwarePlatforms.map(({ name }) => name), cardNames);
  assert.ok(homeSource.includes('EMBEDDED HARDWARE PLATFORMS'));
  assert.deepEqual(hardwarePlatforms.map(({ category }) => category), [
    'Embedded Control & HMI',
    'Multimedia & Video',
    'Entry Vision AI',
    'High-Performance Edge AI',
  ]);
  assert.ok(homeSource.includes('Explore Platform'));
  assert.ok(homeSource.includes('Optimized for Real-World Applications'));
  assert.ok(homeSource.includes('Stable supply and lifecycle management'));
});

test('hardware availability and platform/product routes follow the supported hierarchy', () => {
  const [g2l, g2n, v2l, v2h] = hardwarePlatforms;

  assert.deepEqual(g2l.products.map(({ name }) => name), [
    'SMARC SoM',
    'Carrier Board',
    'Complete SBC / Development Platform',
  ]);
  assert.deepEqual(g2n.products.map(({ name }) => name), ['SBC']);
  assert.match(g2n.architecture, /processor is mounted directly on the main PCB/);
  assert.deepEqual(v2l.products.map(({ name }) => name), [
    'SMARC SoM',
    'Carrier Board',
    'Complete SBC / Development Platform',
  ]);
  assert.deepEqual(v2h.products, []);
  assert.equal(v2h.imageId, 'rz-v2h');
  assert.equal(hardwarePlatformImages['rz-v2h'].src, '/images/platform-rzv2h-16x10-hq.jpg');

  for (const platform of hardwarePlatforms) {
    assert.equal(getHardwarePage(platform.route)?.type, 'platform');
    for (const product of platform.products) {
      const page = getHardwarePage(product.route);
      assert.equal(page?.type, 'product');
      assert.equal(page?.platform.id, platform.id);
    }
  }
  assert.equal(getHardwarePage('/products/rzv2h/smarc-som/'), null);
});

test('integrated solutions section contains the requested introduction and all solution statuses', () => {
  const solutionTitles = [
    'Vehicle & Mobility Solutions',
    'Video & Surveillance Solutions',
    'Industrial & Machine Vision Solutions',
    'Defence & Advanced Vision Solutions',
  ];
  const positions = solutionTitles.map((title) => homeSource.indexOf(`title: '${title}'`));

  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual(positions, [...positions].sort((a, b) => a - b));
  assert.ok(homeSource.includes('INTEGRATED SOLUTIONS'));
  assert.ok(homeSource.includes('Application-ready embedded systems combining hardware, software and AI for transportation, video surveillance, industrial automation and defence applications.'));
  assert.ok(homeSource.includes('Intelligent vision and monitoring systems for vehicles, traffic and transportation.'));
  assert.ok(homeSource.includes('Recording, monitoring and intelligent video analytics for enhanced security.'));
  assert.ok(homeSource.includes('Embedded control, HMI and vision systems for industrial automation and inspection.'));
  assert.ok(homeSource.includes('Specialized vision and guidance systems for defence and strategic applications.'));
  assert.ok(homeSource.includes('Smart Parking — Planned'));
  assert.ok(homeSource.includes('Multi-Camera Video Analytics — Planned'));
  assert.ok(homeSource.includes('Infrastructure Control Systems — Planned'));
  assert.ok(homeSource.includes('Seeker — In Development'));
  assert.ok(homeSource.includes('Target Tracking & Recognition — Planned'));
});
