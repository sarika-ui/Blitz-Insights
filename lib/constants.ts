export const SITE_CONFIG = {
  name: 'Blitz-Insights',
  description: 'Strategic consulting and insights for modern businesses',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/blitzinsights',
    linkedin: 'https://linkedin.com/company/blitz-insights',
    github: 'https://github.com/blitz-insights',
  },
};

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Industries', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  services: [
    { name: 'Strategy Consulting', href: '/services#strategy' },
    { name: 'Digital Transformation', href: '/services#digital' },
    { name: 'Data Analytics', href: '/services#analytics' },
    { name: 'Process Optimization', href: '/services#process' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'Newsletter', href: '/newsletter' },
  ],
};