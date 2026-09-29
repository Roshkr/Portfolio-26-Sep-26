import { useCallback, useEffect, useState } from 'react';
import type { CaseStudy, PortfolioRoute } from '../types';

const CASE_STUDY_HASH_PREFIX = 'case-study-';

const getRouteFromHash = (hash: string, caseStudies: CaseStudy[]): PortfolioRoute => {
  const routeHash = hash.replace(/^#/, '');

  if (routeHash === 'about') return { page: 'about' };

  if (routeHash.startsWith(CASE_STUDY_HASH_PREFIX)) {
    const studyId = routeHash.slice(CASE_STUDY_HASH_PREFIX.length);
    const caseStudy = caseStudies.find((study) => study.id === studyId);
    if (caseStudy) return { page: 'case-study', caseStudy };
  }

  return { page: 'home' };
};

export const usePortfolioNavigation = (caseStudies: CaseStudy[]) => {
  const [route, setRoute] = useState<PortfolioRoute>(() =>
    typeof window === 'undefined'
      ? { page: 'home' }
      : getRouteFromHash(window.location.hash, caseStudies)
  );

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRouteFromHash(window.location.hash, caseStudies));
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, [caseStudies]);

  const navigateTo = useCallback((page: 'home' | 'about') => {
    setRoute({ page });
    const nextHash = page === 'home' ? '' : `#${page}`;
    if (window.location.hash !== nextHash) window.location.hash = nextHash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const selectCaseStudy = useCallback((study: CaseStudy) => {
    const selectedStudy = caseStudies.find((candidate) => candidate.id === study.id) ?? study;
    setRoute({ page: 'case-study', caseStudy: selectedStudy });
    const nextHash = `#${CASE_STUDY_HASH_PREFIX}${selectedStudy.id}`;
    if (window.location.hash !== nextHash) window.location.hash = nextHash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [caseStudies]);

  return { route, navigateTo, selectCaseStudy };
};
