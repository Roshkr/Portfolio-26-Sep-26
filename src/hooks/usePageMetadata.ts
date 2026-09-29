import { useEffect } from 'react';
import type { PortfolioRoute } from '../types';

export const usePageMetadata = (route: PortfolioRoute) => {
  useEffect(() => {
    const title = route.page === 'case-study'
      ? `${route.caseStudy.title} Case Study | Roushan Kumar`
      : route.page === 'about'
        ? 'About Roushan Kumar | UX/UI Designer'
        : 'Roushan Kumar | UX/UI & Product Designer';
    const description = route.page === 'case-study'
      ? route.caseStudy.subtitle
      : route.page === 'about'
        ? 'Learn about Roushan Kumar, a UX/UI and product designer based in Ahmedabad, India.'
        : 'UX/UI and product design portfolio of Roushan Kumar, focused on SaaS, B2B, fintech, enterprise workflows, and mobile experiences.';

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [route]);
};
