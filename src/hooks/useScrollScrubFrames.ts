import { useEffect, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollScrubFrames = (
  trackRef: RefObject<HTMLElement | null>,
  stageRef: RefObject<HTMLElement | null>,
  frameCount: number,
  setFramePosition: (framePosition: number) => void,
) => {
  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage || frameCount < 2) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFramePosition(0);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const playhead = { frame: 0 };
    const phoneLayout = window.matchMedia('(max-width: 760px)');
    const context = gsap.context(() => {
      gsap.to(playhead, {
        frame: frameCount - 1,
        ease: 'none',
        onUpdate: () => setFramePosition(Math.round(playhead.frame)),
        scrollTrigger: {
          trigger: stage,
          start: () => {
            // On phones, let the TV move naturally through the viewport instead
            // of pinning it over the whole hero copy.
            if (phoneLayout.matches) return 'top bottom';
            const stickyTop = Number.parseFloat(getComputedStyle(stage).top) || 0;
            return `top top+=${stickyTop}`;
          },
          end: () => {
            if (phoneLayout.matches) return 'bottom top';
            const layout = track.querySelector<HTMLElement>('.about-hero-layout');
            const trackRect = track.getBoundingClientRect();
            const layoutRect = layout?.getBoundingClientRect();
            const layoutOffset = layoutRect ? layoutRect.top - trackRect.top : 0;
            const stageOffset = layoutOffset + stage.offsetTop;
            const trackTravel = trackRect.height - stageOffset - stage.offsetHeight;
            return `+=${Math.max(1, trackTravel)}`;
          },
          scrub: true,
          invalidateOnRefresh: true,
          onEnter: () => stage.classList.add('retro-tv-glitch-active'),
        },
      });
    }, track);

    return () => context.revert();
  }, [trackRef, stageRef, frameCount, setFramePosition]);
};
