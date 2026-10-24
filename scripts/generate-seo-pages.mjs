import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const siteUrl = 'https://roushan.in';
const source = await readFile(resolve('dist/index.html'), 'utf8');

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Roushan Kumar',
  alternateName: ['Roshan Kumar', 'Roshni'],
  url: `${siteUrl}/`,
  jobTitle: 'UX/UI and Product Designer',
  description: 'UX/UI and product designer in Ahmedabad, India, focused on B2B SaaS, fintech, enterprise workflows, and mobile products.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/roushankuma/',
    'https://www.behance.net/roushankuma',
    'https://dribbble.com/roushankr',
  ],
  knowsAbout: [
    'UX design', 'UI design', 'Product design', 'SaaS', 'B2B', 'Fintech',
    'Enterprise workflows', 'Mobile experiences', 'User research', 'Design systems',
    'HR software', 'Project management', 'Salon booking',
  ],
};

const pages = [
  {
    path: '/about',
    title: 'About Roushan Kumar | UX/UI & Product Designer in Ahmedabad',
    description: 'About Roushan Kumar, sometimes searched as Roshan Kumar or Roshni: a UX/UI and product designer in Ahmedabad working across B2B SaaS, fintech, and enterprise workflows.',
    heading: 'About Roushan Kumar',
    paragraphs: [
      'Roushan Kumar is a UX/UI and product designer based in Ahmedabad, India. He works on SaaS, B2B, fintech, enterprise workflows, and mobile experiences.',
      'His name is sometimes searched as Roshan Kumar or Roshni. Roushani is the name of his mobile invoicing product.',
      'His process spans user research, information architecture, interaction design, production-ready interfaces, and design systems. He is open to product design opportunities and interesting product challenges.',
    ],
    jsonLd: person,
  },
  {
    path: '/case-studies/roushani',
    title: 'Roushani Case Study | Mobile Invoicing UX Design - Roushan Kumar',
    description: 'A mobile-first B2B invoicing UX case study: how Roushan designed a simpler way for service businesses to create branded invoices and reuse client details.',
    heading: 'Roushani: mobile-first invoicing for service businesses',
    paragraphs: [
      'Roushani is a mobile-first invoicing product for service businesses that were relying on spreadsheets and repetitive manual billing. Roushan owned product design and AI-assisted implementation from research through a production MVP.',
      'The work covered product strategy, user research, information architecture, invoice creation, reusable customer and service details, visual identity, and PDF export. The MVP was delivered in four weeks.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'CreativeWork',
      name: 'Roushani - Mobile-first B2B invoicing product design case study',
      url: `${siteUrl}/case-studies/roushani`,
      description: 'Product design case study for a mobile-first invoicing product for service businesses.',
      creator: { '@type': 'Person', name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['B2B SaaS', 'Product design', 'Mobile UX', 'Invoicing', 'User research'],
    },
  },
  {
    path: '/case-studies/umbrella',
    title: 'Umbrella Case Study | Enterprise Onboarding UX - Roushan Kumar',
    description: 'An enterprise UX case study redesigning a complex third-party NDA onboarding form using five usability sessions, clearer structure, and improved validation.',
    heading: 'Umbrella: clearer third-party onboarding for enterprise teams',
    paragraphs: [
      'The Umbrella project focused on an NDA onboarding form used to add third parties. The original multi-step flow was difficult to scan and raised questions about company versus individual information and required fields.',
      'Roushan tested the existing flow with five participants, mapped points of confusion, and redesigned the information hierarchy, validation, and step-by-step experience for a clearer enterprise workflow.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'CreativeWork',
      name: 'Umbrella - Enterprise third-party onboarding UX case study',
      url: `${siteUrl}/case-studies/umbrella`,
      description: 'Enterprise UX case study of research and redesign for a third-party NDA onboarding flow.',
      creator: { '@type': 'Person', name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['Enterprise UX', 'Onboarding', 'Usability testing', 'User research', 'Workflow design'],
    },
  },
  {
    path: '/case-studies/design-system-icons',
    title: 'Design System & Iconography Case Study | Roushan Kumar',
    description: 'A product design project exploring reusable interface components, visual consistency, and iconography for digital product experiences.',
    heading: 'Design systems, reusable components, and iconography',
    paragraphs: [
      'This ongoing project explores how reusable components and a consistent icon set can make digital product interfaces feel more coherent and easier to extend.',
      'The portfolio page documents the current design system and iconography work. Further project details and visuals will be added as the work develops.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'CreativeWork',
      name: 'Design system, reusable components, and iconography project',
      url: `${siteUrl}/case-studies/design-system-icons`,
      description: 'An ongoing product design project focused on reusable components and iconography.',
      creator: { '@type': 'Person', name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['Design systems', 'UI components', 'Iconography', 'Product design'],
    },
  },
  {
    path: '/case-studies/bridge2business',
    title: 'Bridge2Business Case Study | B2B Website UX Design - Roushan Kumar',
    description: 'A B2B website redesign focused on clearer service messaging, responsive information hierarchy, and stronger brand credibility.',
    heading: 'Bridge2Business: a clearer B2B website experience',
    paragraphs: [
      'Bridge2Business needed to explain complex services clearly and help potential clients act with confidence. The existing website was cluttered, difficult to use on mobile, and unclear about its value.',
      'Roushan restructured the content, improved the responsive experience, and delivered a focused redesign proposal with a clearer path to connect.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'CreativeWork',
      name: 'Bridge2Business B2B website redesign case study',
      url: `${siteUrl}/case-studies/bridge2business`,
      description: 'A responsive B2B website redesign focused on information hierarchy and brand credibility.',
      creator: { '@type': 'Person', name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['B2B', 'Website redesign', 'UX strategy', 'Responsive design'],
    },
  },
  {
    path: '/case-studies/maxlence',
    title: 'Maxlence Case Study | HR and Project Management SaaS - Roushan Kumar',
    description: 'Designing connected HR and project management workflows for a distributed team in a scalable SaaS platform.',
    heading: 'Maxlence: connected HR and project workflows',
    paragraphs: [
      'Maxlence Consulting needed one platform for HR management, project tracking, attendance, and client deliverables across distributed teams.',
      'Roushan translated product requirements into user journeys, end-to-end UX design, and reusable components ready for engineering.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'CreativeWork',
      name: 'Maxlence HR and project management SaaS case study',
      url: `${siteUrl}/case-studies/maxlence`,
      description: 'UX design for an integrated HR and project management SaaS platform.',
      creator: { '@type': 'Person', name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['HR SaaS', 'Project management', 'Enterprise UX', 'Design systems'],
    },
  },
  {
    path: '/case-studies/naie',
    title: 'Naie Case Study | Salon Booking and Discovery UX - Roushan Kumar',
    description: 'A salon discovery and appointment booking experience designed to improve slot visibility and reduce waiting for customers and salon owners.',
    heading: 'Naie: salon appointments with less uncertainty',
    paragraphs: [
      'Local salon bookings often depend on calls and messages, leaving customers unsure about availability and salon teams juggling appointments manually.',
      'Roushan designed a mobile booking and salon operations experience that makes services and availability easier to understand and schedule.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'CreativeWork',
      name: 'Naie salon appointment and discovery case study',
      url: `${siteUrl}/case-studies/naie`,
      description: 'A mobile salon discovery and booking experience for customers and salon owners.',
      creator: { '@type': 'Person', name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['Mobile UX', 'Salon booking', 'Appointment scheduling', 'User research'],
    },
  },
];

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const safeJson = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');

for (const page of pages) {
  const canonical = `${siteUrl}${page.path}`;
  const tags = [
    [/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`],
    [/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(page.description)}" />`],
    [/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`],
    [/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`],
    [/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`],
    [/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`],
    [/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`],
    [/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`],
    [/<script id="page-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="page-jsonld" type="application/ld+json">${safeJson(page.jsonLd)}</script>`],
  ];
  let html = source;
  for (const [pattern, replacement] of tags) html = html.replace(pattern, replacement);
  html = html.replace(/<main id="home-seo-fallback"[\s\S]*?<\/main>/, '');

  const copy = page.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n');
  const fallback = `<main id="seo-fallback" style="max-width:760px;margin:9vh auto;padding:0 24px;font:18px/1.65 system-ui,sans-serif;color:#1e293b"><p style="font-size:14px;color:#64748b">ROUSHAN KUMAR | UX/UI &amp; PRODUCT DESIGNER | AHMEDABAD, INDIA</p><h1 style="font-size:clamp(34px,6vw,56px);line-height:1.1;letter-spacing:-.04em;color:#0f172a">${escapeHtml(page.heading)}</h1>${copy}<nav aria-label="Portfolio pages" style="display:flex;flex-wrap:wrap;gap:16px;margin-top:32px"><a href="/">Home</a><a href="/about">About</a><a href="/case-studies/roushani">Roushani case study</a><a href="/case-studies/umbrella">Umbrella case study</a><a href="/case-studies/design-system-icons">Design system case study</a><a href="/case-studies/bridge2business">Bridge2Business case study</a><a href="/case-studies/maxlence">Maxlence case study</a><a href="/case-studies/naie">Naie case study</a><a href="mailto:roushan.ux@gmail.com">Contact Roushan</a></nav></main>`;
  html = html.replace('<div id="root"></div>', `${fallback}\n    <div id="root"></div>`);

  const output = resolve('dist', `${page.path.slice(1)}.html`);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, 'utf8');
}

console.log(`Generated ${pages.length} SEO route documents.`);
