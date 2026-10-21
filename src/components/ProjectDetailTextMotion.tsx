import React, { useEffect, useRef } from 'react';
import { animate, useReducedMotion } from 'motion/react';

interface ProjectDetailTextMotionProps {
  children: React.ReactNode;
}

const TEXT_SELECTOR = 'h1:not([data-text-reveal]), h2:not([data-text-reveal]), h3:not([data-text-reveal]), h4:not([data-text-reveal]), p:not(.sr-only):not([data-text-reveal]), li, blockquote, figcaption, dt, dd';

export const ProjectDetailTextMotion: React.FC<ProjectDetailTextMotionProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldReduceMotion || typeof IntersectionObserver === 'undefined') return;

    const textElements = Array.from(container.querySelectorAll<HTMLElement>(TEXT_SELECTOR));
    const animations: Array<ReturnType<typeof animate>> = [];
    const pendingElements = new Set<HTMLElement>();
    let batchFrame = 0;
    let nextStartAt = 0;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        pendingElements.add(element);
      });

      if (pendingElements.size && !batchFrame) {
        batchFrame = requestAnimationFrame(() => {
          batchFrame = 0;
          const now = performance.now();
          const orderedElements = [...pendingElements].sort((first, second) => {
            const position = first.compareDocumentPosition(second);
            return (position & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 ? -1 : 1;
          });
          pendingElements.clear();
          orderedElements.forEach((element) => {
            const delay = Math.max(0, nextStartAt - performance.now()) / 1000;
            animations.push(animate(
              element,
              { opacity: 1, y: 0 },
              { duration: 0.28, delay, ease: [0.22, 1, 0.36, 1] as const },
            ));
            nextStartAt = Math.max(now, nextStartAt) + 105;
          });
        });
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    textElements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(14px)';
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(batchFrame);
      animations.forEach((animation) => animation.stop());
      textElements.forEach((element) => {
        element.style.removeProperty('opacity');
        element.style.removeProperty('transform');
      });
    };
  }, [shouldReduceMotion]);

  return <div ref={containerRef}>{children}</div>;
};
