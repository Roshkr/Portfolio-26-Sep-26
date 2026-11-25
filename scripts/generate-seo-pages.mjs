import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const siteUrl = 'https://www.roushan.in';
const source = await readFile(resolve('dist/index.html'), 'utf8');
const manifest = JSON.parse(await readFile(resolve('dist/.vite/manifest.json'), 'utf8'));
const builtAssets = Object.fromEntries(
  Object.entries(manifest)
    .filter(([key]) => key.startsWith('src/assets/'))
    .flatMap(([key, value]) => {
      const builtPath = `/${value.file}`;
      const sourcePath = `/${key}`;
      return [[sourcePath, builtPath], [encodeURI(sourcePath), encodeURI(builtPath)]];
    }),
);

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Roushan Kumar',
  '@id': `${siteUrl}/#person`,
  url: `${siteUrl}/`,
  jobTitle: 'UX/UI Designer and Product Designer',
  description: 'UX/UI designer in Ahmedabad, India, with 6+ years designing B2B SaaS, fintech, enterprise workflows, and mobile products.',
  image: `${siteUrl}/social-preview.png`,
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Product Designer',
    skills: 'B2B SaaS, Fintech, Enterprise Workflows, Design Systems, UX/UI Design',
    experienceRequirements: '6+ years of professional experience',
  },
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

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Roushan Kumar | UX/UI Designer',
      description: person.description,
      inLanguage: 'en-IN',
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
};

const pages = [
  {
    path: '/',
    title: 'UX/UI Designer in Ahmedabad | Roushan Kumar',
    description: 'Roushan Kumar is a UX/UI designer in Ahmedabad, India, with 6+ years designing B2B SaaS, fintech, enterprise workflows, and mobile products.',
    heading: 'Roushan Kumar - UX/UI Designer in Ahmedabad',
    jsonLd: homeSchema,
  },
  {
    path: '/about',
    title: 'About Roushan Kumar | UX/UI Designer in Ahmedabad',
    description: 'Meet Roushan Kumar, a UX/UI and product designer in Ahmedabad, India, working across B2B SaaS, fintech, enterprise workflows, and mobile UX.',
    heading: 'About Roushan Kumar',
    paragraphs: [
      'Roushan Kumar is a UX/UI and product designer based in Ahmedabad, India. He designs B2B SaaS, fintech, enterprise workflows, and mobile experiences.',
      'Roushani is a mobile-first invoicing product he designed for service businesses.',
      'His work includes user research, information architecture, interface design, and design systems. He is open to product design roles and freelance projects.',
    ],
    jsonLd: person,
  },
  {
    path: '/case-studies/roushani',
    title: 'Roushani Case Study | Mobile Invoicing UX Design - Roushan Kumar',
    description: 'A mobile-first B2B invoicing UX case study: how Roushan designed a simpler way for service businesses to create branded invoices and reuse client details.',
    heading: 'Roushani: mobile-first invoicing for service businesses',
    summary: {
      role: 'Product Designer; owned product design and first MVP implementation.',
      industry: 'B2B SaaS / invoicing for service businesses',
      problem: 'Invoice creation relied on repeated manual entry and took about 18 minutes.',
      solution: 'Designed a mobile-first invoicing flow with reusable client and service details, live calculations, branded invoices, and PDF export.',
      impact: 'Invoice creation and export reduced from 18 minutes to under 3 minutes.',
    },
    paragraphs: [
      'Roushani is a mobile-first invoicing product for service businesses that relied on spreadsheets and repeated manual entry. Roushan designed the product and built its first version with AI coding tools.',
      'The work included user research, invoice creation, saved customer and service details, branding, and PDF export. The MVP was delivered in four weeks.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Article',
      name: 'Roushani - Mobile-first B2B invoicing product design case study',
      url: `${siteUrl}/case-studies/roushani`,
      description: 'Product design case study for a mobile-first invoicing product for service businesses.',
      creator: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['B2B SaaS', 'Product design', 'Mobile UX', 'Invoicing', 'User research'],
      author: { '@id': `${siteUrl}/#person` },
      mainEntityOfPage: `${siteUrl}/case-studies/roushani`,
    },
  },
  {
    path: '/case-studies/umbrella',
    title: 'Umbrella Case Study | Enterprise Onboarding UX - Roushan Kumar',
    description: 'An enterprise UX case study redesigning a complex third-party NDA onboarding form using five usability sessions, clearer structure, and improved validation.',
    heading: 'Umbrella: clearer third-party onboarding for enterprise teams',
    summary: {
      role: 'UX Designer',
      industry: 'Enterprise legal and third-party onboarding',
      problem: 'The NDA flow was difficult to scan and left users unsure which company or individual details were required.',
      solution: 'Tested the existing flow with five participants, then clarified information hierarchy, validation, and step-by-step structure.',
      impact: 'The redesigned flow addresses observed confusion; no post-launch outcome metric is documented.',
    },
    paragraphs: [
      'The Umbrella project focused on an NDA onboarding form used to add third parties. The original multi-step flow was difficult to scan and raised questions about company versus individual information and required fields.',
      'Roushan tested the existing flow with five participants, mapped points of confusion, and redesigned the information hierarchy, validation, and step-by-step experience for a clearer enterprise workflow.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Article',
      name: 'Umbrella - Enterprise third-party onboarding UX case study',
      url: `${siteUrl}/case-studies/umbrella`,
      description: 'Enterprise UX case study of research and redesign for a third-party NDA onboarding flow.',
      creator: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['Enterprise UX', 'Onboarding', 'Usability testing', 'User research', 'Workflow design'],
      author: { '@id': `${siteUrl}/#person` },
      mainEntityOfPage: `${siteUrl}/case-studies/umbrella`,
    },
  },
  {
    path: '/case-studies/design-system-icons',
    title: 'Design System & Iconography Case Study | Roushan Kumar',
    description: 'A product design project exploring reusable interface components, visual consistency, and iconography for digital product experiences.',
    heading: 'Design systems, reusable components, and iconography',
    summary: {
      role: 'UX Designer, collaborating with a design manager and development team.',
      industry: 'Enterprise product platform',
      problem: 'Product screens needed shared visual and interaction patterns across different workflows.',
      solution: 'Defined foundations, reusable components and states, usage guidance, and an icon family over two months.',
      impact: 'Adoption and delivery metrics are not documented; the case study outlines measures for future evaluation.',
    },
    paragraphs: [
      'This ongoing project explores how reusable components and a consistent icon set can make digital product interfaces feel more coherent and easier to extend.',
      'The portfolio page documents the current design system and iconography work. Further project details and visuals will be added as the work develops.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Article',
      name: 'Design system, reusable components, and iconography project',
      url: `${siteUrl}/case-studies/design-system-icons`,
      description: 'An ongoing product design project focused on reusable components and iconography.',
      creator: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['Design systems', 'UI components', 'Iconography', 'Product design'],
      author: { '@id': `${siteUrl}/#person` },
      mainEntityOfPage: `${siteUrl}/case-studies/design-system-icons`,
    },
  },
  {
    path: '/case-studies/bridge2business',
    title: 'Bridge2Business Case Study | B2B Website UX Design - Roushan Kumar',
    description: 'A B2B website redesign focused on clearer service messaging, responsive information hierarchy, and stronger brand credibility.',
    heading: 'Bridge2Business: a clearer B2B website experience',
    summary: {
      role: 'UX/UI Designer, working with a developer.',
      industry: 'B2B professional services',
      problem: 'The existing website made services difficult to find and understand, especially on mobile.',
      solution: 'Interviewed five B2B clients, reorganized content, and designed a responsive website proposal.',
      impact: 'Delivered a clearer responsive direction; post-launch performance data is not documented.',
    },
    paragraphs: [
      'Bridge2Business needed to make its services easier to find and understand. The existing website was cluttered and difficult to use on mobile.',
      'Roushan interviewed five B2B clients, reorganized the website content, and designed responsive pages with a developer.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Article',
      name: 'Bridge2Business B2B website redesign case study',
      url: `${siteUrl}/case-studies/bridge2business`,
      description: 'A responsive B2B website redesign focused on information hierarchy and brand credibility.',
      creator: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['B2B', 'Website redesign', 'UX strategy', 'Responsive design'],
      author: { '@id': `${siteUrl}/#person` },
      mainEntityOfPage: `${siteUrl}/case-studies/bridge2business`,
    },
  },
  {
    path: '/case-studies/maxlence',
    title: 'Maxlence Case Study | HR and Project Management SaaS - Roushan Kumar',
    description: 'Product design for HR, attendance, and project management workflows used by distributed teams.',
    heading: 'Maxlence: connected HR and project workflows',
    summary: {
      role: 'Product Designer, collaborating with the development team.',
      industry: 'HR and project management SaaS',
      problem: 'Distributed teams needed connected HR, attendance, project tracking, and client delivery workflows.',
      solution: 'Mapped team workflows and designed onboarding, dashboard screens, and reusable Figma components.',
      impact: 'The case study documents shipped design work but does not report quantified product outcomes.',
    },
    paragraphs: [
      'Maxlence Consulting needed one platform for HR management, project tracking, attendance, and client deliverables across distributed teams.',
      'Roushan mapped team workflows, designed onboarding and dashboard screens, and created reusable Figma components with the development team.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Article',
      name: 'Maxlence HR and project management SaaS case study',
      url: `${siteUrl}/case-studies/maxlence`,
      description: 'UX design for an integrated HR and project management SaaS platform.',
      creator: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['HR SaaS', 'Project management', 'Enterprise UX', 'Design systems'],
      author: { '@id': `${siteUrl}/#person` },
      mainEntityOfPage: `${siteUrl}/case-studies/maxlence`,
    },
  },
  {
    path: '/case-studies/naie',
    title: 'Naie Case Study | Salon Booking and Discovery UX - Roushan Kumar',
    description: 'A salon booking concept with service details, appointment availability, and tools for salon owners.',
    heading: 'Naie: salon appointments with less uncertainty',
    summary: {
      role: 'Product Designer',
      industry: 'Salon discovery, booking, and operations',
      problem: 'Customers relied on calls and messages to check availability while salon teams managed appointments manually.',
      solution: 'Designed a mobile booking and salon operations experience with clearer service and availability details.',
      impact: 'The case study presents a design concept; validated business or usability outcomes are not documented.',
    },
    paragraphs: [
      'Local salon bookings often depend on calls and messages, leaving customers unsure about availability and salon teams juggling appointments manually.',
      'Roushan designed a mobile booking and salon operations experience that makes services and availability easier to understand and schedule.',
    ],
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Article',
      name: 'Naie salon appointment and discovery case study',
      url: `${siteUrl}/case-studies/naie`,
      description: 'A mobile salon discovery and booking experience for customers and salon owners.',
      creator: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Roushan Kumar', url: `${siteUrl}/` },
      keywords: ['Mobile UX', 'Salon booking', 'Appointment scheduling', 'User research'],
      author: { '@id': `${siteUrl}/#person` },
      mainEntityOfPage: `${siteUrl}/case-studies/naie`,
    },
  },
];

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const safeJson = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');
const renderSummary = (summary) => {
  const items = Object.entries(summary)
    .map(([label, value]) => `<div><dt class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">${escapeHtml(label[0].toUpperCase() + label.slice(1))}</dt><dd class="mt-2 text-sm leading-relaxed text-slate-700">${escapeHtml(value)}</dd></div>`)
    .join('');
  return `<section aria-label="Case study summary" class="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-8 sm:grid-cols-2 sm:px-6 md:gap-6 xl:px-8 lg:grid-cols-5"><h2 class="sr-only">Case study summary</h2><dl class="col-span-full grid grid-cols-1 gap-4 border-y border-slate-200 bg-white p-4 md:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-5">${items}</dl></section>`;
};

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');

  for (const page of pages) {
    const canonical = `${siteUrl}${page.path}`;
    const markup = renderToString(React.createElement(App, { initialPath: page.path }));
    const schema = page.jsonLd['@type'] === 'Article'
      ? {
          ...page.jsonLd,
          headline: page.title,
          abstract: page.summary
            ? Object.entries(page.summary).map(([key, value]) => `${key[0].toUpperCase() + key.slice(1)}: ${value}`).join(' ')
            : page.description,
        }
      : page.jsonLd;
    const tags = [
      [/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`],
      [/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(page.description)}" />`],
      [/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`],
      [/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`],
      [/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`],
      [/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`],
      [/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`],
      [/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`],
      [/<script id="page-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="page-jsonld" type="application/ld+json">${safeJson(schema)}</script>`],
    ];
    let html = source;
    for (const [pattern, replacement] of tags) html = html.replace(pattern, replacement);
    html = html
      .replace(/<main id="home-seo-fallback"[\s\S]*?<\/main>/, '')
      .replace(/<main id="seo-fallback"[\s\S]*?<\/main>/, '')
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    if (page.summary) {
      html = html.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/, (heading) => `${heading}${renderSummary(page.summary)}`);
    }
    for (const [sourcePath, builtPath] of Object.entries(builtAssets)) {
      html = html.replaceAll(sourcePath, builtPath);
    }

    const output = page.path === '/'
      ? resolve('dist/index.html')
      : resolve('dist', `${page.path.slice(1)}.html`);
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html, 'utf8');
  }
} finally {
  await vite.close();
}

console.log(`Pre-rendered ${pages.length} route documents with static React content and SEO metadata.`);
