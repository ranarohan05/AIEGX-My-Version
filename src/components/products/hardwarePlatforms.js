export const hardwarePlatforms = [
  {
    id: 'rz-g2l',
    name: 'RZ/G2L',
    category: 'Embedded Control & HMI',
    description: 'For industrial HMI, control, display and connected embedded applications.',
    imageId: 'rz-g2l',
    route: '/products/rzg2l/',
    architecture: 'A SMARC SoM and Carrier Board can be combined to form a Complete SBC / Development Platform.',
    products: [
      { id: 'smarc-som', name: 'SMARC SoM', route: '/products/rzg2l/smarc-som/' },
      { id: 'carrier-board', name: 'Carrier Board', route: '/products/rzg2l/carrier-board/' },
      { id: 'complete-sbc', name: 'Complete SBC / Development Platform', route: '/products/rzg2l/complete-sbc/' },
    ],
  },
  {
    id: 'rz-g2n',
    name: 'RZ/G2N',
    category: 'Multimedia & Video',
    description: 'For multimedia, display and video processing applications.',
    imageId: 'rz-g2n',
    route: '/products/rzg2n/',
    architecture: 'SBC only. The processor is mounted directly on the main PCB; separate SMARC SoM and Carrier Board products are not available.',
    products: [
      { id: 'sbc', name: 'SBC', route: '/products/rzg2n/sbc/' },
    ],
  },
  {
    id: 'rz-v2l',
    name: 'RZ/V2L',
    category: 'Entry Vision AI',
    description: 'Low-power vision AI platform for smart cameras and compact edge AI applications.',
    imageId: 'rz-v2l',
    route: '/products/rzv2l/',
    architecture: 'A SMARC SoM and Carrier Board can be combined to form a Complete SBC / Development Platform.',
    products: [
      { id: 'smarc-som', name: 'SMARC SoM', route: '/products/rzv2l/smarc-som/' },
      { id: 'carrier-board', name: 'Carrier Board', route: '/products/rzv2l/carrier-board/' },
      { id: 'complete-sbc', name: 'Complete SBC / Development Platform', route: '/products/rzv2l/complete-sbc/' },
    ],
  },
  {
    id: 'rz-v2h',
    name: 'RZ/V2H',
    category: 'High-Performance Edge AI',
    description: 'For multi-camera AI, robotics and advanced vision analytics applications.',
    imageId: 'rz-v2h',
    route: '/products/rzv2h/',
    architecture: 'Platform-level information only. Hardware architecture details have not been confirmed in the available project materials.',
    products: [],
  },
];

export const hardwareCapabilities = [
  'Processing',
  'Display / Graphics',
  'Industrial Interfaces',
  'Linux / Yocto Support',
  'Long Product Lifecycle',
];

export const hardwareApplications = [
  'Industrial HMI',
  'Railway HMI',
  'Display Controller',
  'Remote Monitoring & Control',
  'Connected Embedded Systems',
];

export const softwareSupportItems = [
  'Linux / Yocto BSP',
  'Board drivers',
  'Interface validation',
  'Basic samples and documentation',
];

export function getHardwarePage(path) {
  const normalizedPath = path.replace(/\/+$/, '') || '/';

  for (const platform of hardwarePlatforms) {
    if (platform.route.replace(/\/+$/, '') === normalizedPath) {
      return { platform, type: 'platform' };
    }

    const product = platform.products.find(
      (item) => item.route.replace(/\/+$/, '') === normalizedPath,
    );
    if (product) {
      return { platform, product, type: 'product' };
    }
  }

  return null;
}
