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
    const context = gsap.context(() => {
      gsap.to(playhead, {
        frame: frameCount - 1,
        ease: 'none',
        onUpdate: () => setFramePosition(playhead.frame),
        scrollTrigger: {
          trigger: track,
          start: () => {
            const trackDocumentTop = window.scrollY + track.getBoundingClientRect().top;
            return `top top+=${trackDocumentTop}`;
          },
          end: () => {
            const stickyTop = Number.parseFloat(getComputedStyle(stage).top) || 0;
            const trackDocumentTop = window.scrollY + track.getBoundingClientRect().top;
            const releaseScrollPosition = trackDocumentTop + track.clientHeight - stage.offsetHeight - stickyTop;
            return `+=${Math.max(1, releaseScrollPosition)}`;
          },
          scrub: 0.12,
          invalidateOnRefresh: true,
          onEnter: () => stage.classList.add('retro-tv-glitch-active'),
        },
      });
    }, track);

    return () => context.revert();
  }, [trackRef, stageRef, frameCount, setFramePosition]);
};
