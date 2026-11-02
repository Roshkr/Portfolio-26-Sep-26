import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ElementRef<T extends HTMLElement> = { current: T | null };

export const useScrollScrubFrames = (
  trackRef: ElementRef<HTMLElement>,
  stageRef: ElementRef<HTMLElement>,
  frameCount: number,
  setFramePosition: (framePosition: number) => void,
) => {
  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage || frameCount < 2) return;

    gsap.registerPlugin(ScrollTrigger);
    const playhead = { frame: 0 };
    const context = gsap.context(() => {
      gsap.to(playhead, {
        frame: frameCount - 1,
        ease: 'none',
        onUpdate: () => setFramePosition(playhead.frame),
        scrollTrigger: {
          trigger: track,
          start: () => `top+=${stage.offsetTop} top+=${Number.parseFloat(getComputedStyle(stage).top) || 0}`,
          end: () => `bottom-=${window.innerHeight * 2} bottom`,
          scrub: 0.35,
          invalidateOnRefresh: true,
        },
      });
    }, track);

    return () => context.revert();
  }, [trackRef, stageRef, frameCount, setFramePosition]);
};
