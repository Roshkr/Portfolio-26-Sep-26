import { useEffect, useRef } from 'react';

export const useGoogleAnalytics = (measurementId: string | undefined, routeHash: string, pageTitle: string) => {
  const lastTrackedPage = useRef('');

  useEffect(() => {
    if (!measurementId || window.gaInitialized) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
    window.gaInitialized = true;
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !window.gtag) return;
    const pagePath = `${window.location.pathname}${routeHash}`;
    if (lastTrackedPage.current === pagePath) return;
    lastTrackedPage.current = pagePath;

    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
    });
  }, [measurementId, routeHash, pageTitle]);
};
