import { useEffect } from 'react';
import type { PortfolioRoute } from '../types';

export const usePageMetadata = (route: PortfolioRoute) => {
  useEffect(() => {
    const studyMetadata: Record<string, { title: string; description: string }> = {
      roushani: {
        title: 'Roushani Case Study | Mobile Invoicing UX Design - Roushan Kumar',
        description: 'A mobile-first B2B invoicing UX case study: how Roushan designed a simpler way for service businesses to create branded invoices and reuse client details.',
      },
      umbrella: {
        title: 'Umbrella Case Study | Enterprise Onboarding UX - Roushan Kumar',
        description: 'An enterprise UX case study redesigning a complex third-party NDA onboarding form using five usability sessions, clearer structure, and improved validation.',
      },
      'design-system-icons': {
        title: 'Design System & Iconography Case Study | Roushan Kumar',
        description: 'A product design project exploring reusable interface components, visual consistency, and iconography for digital product experiences.',
      },
      bridge2business: {
        title: 'Bridge2Business Case Study | B2B Website UX Design - Roushan Kumar',
        description: 'A B2B website redesign by Roushan Kumar, focused on clear service messaging, responsive information hierarchy, and brand credibility.',
      },
      maxlence: {
        title: 'Maxlence Case Study | HR and Project Management SaaS - Roushan Kumar',
        description: 'Roushan Kumar designed connected HR and project management workflows for Maxlence, from user journeys to reusable product components.',
      },
      naie: {
        title: 'Naie Case Study | Salon Booking UX by Roushan Kumar',
        description: 'Roushan Kumar designed a mobile salon discovery and booking experience to make services and appointment availability easier to understand.',
      },
    };
    const title = route.page === 'case-study'
      ? studyMetadata[route.caseStudy.id]?.title ?? `${route.caseStudy.title} Case Study | Roushan Kumar`
      : route.page === 'about'
        ? 'About Roushan Kumar | UX/UI & Product Designer in Ahmedabad'
        : 'Roushan Kumar | UX/UI & Product Designer in Ahmedabad';
    const description = route.page === 'case-study'
      ? studyMetadata[route.caseStudy.id]?.description ?? route.caseStudy.subtitle
      : route.page === 'about'
        ? 'About Roushan Kumar, sometimes searched as Roshan Kumar or Roshni: a UX/UI and product designer in Ahmedabad working across B2B SaaS, fintech, and enterprise workflows.'
        : 'Roushan Kumar is a UX/UI and product designer in Ahmedabad, India, focused on B2B SaaS, fintech, enterprise workflows, and mobile products.';

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    const canonicalPath = route.page === 'case-study'
      ? `/case-studies/${route.caseStudy.id}`
      : route.page === 'about' ? '/about' : '/';
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://roushan.in${canonicalPath}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://roushan.in${canonicalPath}`);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    const jsonLd = route.page === 'case-study'
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: title,
          url: `https://roushan.in${canonicalPath}`,
          description,
          creator: { '@type': 'Person', name: 'Roushan Kumar', url: 'https://roushan.in/' },
          keywords: route.caseStudy.tags?.join(', '),
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Roushan Kumar',
          alternateName: ['Roshan Kumar', 'Roshni'],
          url: 'https://roushan.in/',
          jobTitle: 'Product Designer',
          description,
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
          ],
        };
    const schemaTag = document.querySelector<HTMLScriptElement>('#page-jsonld');
    if (schemaTag) schemaTag.textContent = JSON.stringify(jsonLd);
  }, [route]);
};
