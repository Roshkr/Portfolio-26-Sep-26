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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        animations.push(animate(
          element,
          { opacity: 1, y: 0 },
          { duration: 0.55, delay: (textElements.indexOf(element) % 5) * 0.035, ease: [0.22, 1, 0.36, 1] as const },
        ));
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    textElements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(14px)';
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.stop());
      textElements.forEach((element) => {
        element.style.removeProperty('opacity');
        element.style.removeProperty('transform');
      });
    };
  }, [shouldReduceMotion]);

  return <div ref={containerRef}>{children}</div>;
};
