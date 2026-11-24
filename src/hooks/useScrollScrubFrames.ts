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

    const previousStickyTop = stage.style.getPropertyValue('--retro-tv-sticky-top');
    stage.style.setProperty('--retro-tv-sticky-top', `${stage.getBoundingClientRect().top}px`);

    gsap.registerPlugin(ScrollTrigger);
    const playhead = { frame: 0 };
    const context = gsap.context(() => {
      gsap.to(playhead, {
        frame: frameCount - 1,
        ease: 'none',
        onUpdate: () => setFramePosition(Math.round(playhead.frame)),
        scrollTrigger: {
          trigger: stage,
          start: () => {
            const stickyTop = Number.parseFloat(getComputedStyle(stage).top) || 0;
            return `top top+=${stickyTop}`;
          },
          end: () => {
            const isPhoneLayout = window.matchMedia('(max-width: 760px)').matches;
            const stickyTravel = isPhoneLayout
              ? Number.parseFloat(getComputedStyle(track).paddingBottom)
              : track.clientHeight - stage.offsetTop - stage.offsetHeight;
            return `+=${Math.max(1, stickyTravel)}`;
          },
          scrub: true,
          invalidateOnRefresh: true,
          onEnter: () => stage.classList.add('retro-tv-glitch-active'),
        },
      });
    }, track);

    return () => {
      context.revert();
      if (previousStickyTop) {
        stage.style.setProperty('--retro-tv-sticky-top', previousStickyTop);
      } else {
        stage.style.removeProperty('--retro-tv-sticky-top');
      }
    };
  }, [trackRef, stageRef, frameCount, setFramePosition]);
};
