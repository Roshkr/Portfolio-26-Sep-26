import { useCallback, useEffect, useState } from 'react';
import type { CaseStudy, PortfolioRoute } from '../types';

const CASE_STUDY_HASH_PREFIX = 'case-study-';

const getRouteFromLocation = (pathname: string, hash: string, caseStudies: CaseStudy[]): PortfolioRoute => {
  const routeHash = hash.replace(/^#/, '');

  if (pathname === '/about' || routeHash === 'about') return { page: 'about' };

  const pathMatch = pathname.match(/^\/case-studies\/([^/]+)\/?$/);
  const pathStudyId = pathMatch?.[1];
  const hashStudyId = routeHash.startsWith(CASE_STUDY_HASH_PREFIX)
    ? routeHash.slice(CASE_STUDY_HASH_PREFIX.length)
    : undefined;
  const studyId = pathStudyId || hashStudyId;

  if (studyId) {
    const caseStudy = caseStudies.find((study) => study.id === studyId);
    if (caseStudy) return { page: 'case-study', caseStudy };
  }

  return { page: 'home' };
};

export const usePortfolioNavigation = (caseStudies: CaseStudy[]) => {
  const [route, setRoute] = useState<PortfolioRoute>(() =>
    typeof window === 'undefined'
      ? { page: 'home' }
      : getRouteFromLocation(window.location.pathname, window.location.hash, caseStudies)
  );

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRouteFromLocation(window.location.pathname, window.location.hash, caseStudies));
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, [caseStudies]);

  const navigateTo = useCallback((page: 'home' | 'about') => {
    setRoute({ page });
    const nextPath = page === 'home' ? '/' : '/about';
    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState({}, '', nextPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const selectCaseStudy = useCallback((study: CaseStudy) => {
    const selectedStudy = caseStudies.find((candidate) => candidate.id === study.id) ?? study;
    // Reset the viewport before mounting the next study so its reveal observers
    // start with the top of the page, instead of queueing text during a smooth scroll.
    window.scrollTo({ top: 0, behavior: 'auto' });
    setRoute({ page: 'case-study', caseStudy: selectedStudy });
    const nextPath = `/case-studies/${selectedStudy.id}`;
    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState({}, '', nextPath);
    }
  }, [caseStudies]);

  return { route, navigateTo, selectCaseStudy };
};
