import { useEffect, useRef } from 'react';

export const useGoogleAnalytics = (measurementId: string | undefined, routePath: string, pageTitle: string) => {
  const lastTrackedPage = useRef('');

  useEffect(() => {
    if (!measurementId) return;

    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
      window.gtag('js', new Date());
    }

    const existingTag = document.querySelector<HTMLScriptElement>(
      `script[data-ga-measurement-id="${measurementId}"]`,
    );

    if (!existingTag) {
      window.gtag('config', measurementId, { send_page_view: false });
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      script.dataset.gaMeasurementId = measurementId;
      document.head.appendChild(script);
    }

    const pagePath = routePath;
    const trackedPageKey = `${measurementId}:${pagePath}`;
    if (lastTrackedPage.current === trackedPageKey) return;
    lastTrackedPage.current = trackedPageKey;

    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
    });
  }, [measurementId, routePath, pageTitle]);
};
