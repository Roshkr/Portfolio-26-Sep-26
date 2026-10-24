import { useEffect, useRef } from 'react';

export const useGoogleAnalytics = (measurementId: string | undefined, routePath: string, pageTitle: string) => {
  const lastTrackedPage = useRef('');

  useEffect(() => {
    if (!measurementId || !window.gtag) return;
    const pagePath = routePath;
    if (lastTrackedPage.current === pagePath) return;
    lastTrackedPage.current = pagePath;

    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
    });
  }, [measurementId, routePath, pageTitle]);
};
