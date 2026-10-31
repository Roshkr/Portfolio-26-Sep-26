import { useEffect } from 'react';

type ElementRef<T extends HTMLElement> = { current: T | null };

export const useScrollScrubFrames = (
  trackRef: ElementRef<HTMLElement>,
  stageRef: ElementRef<HTMLElement>,
  frameCount: number,
  setFrameIndex: (frameIndex: number) => void,
) => {
  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage || frameCount < 1) return;

    let animationFrame = 0;
    let currentFrame = 0;
    let wheelLocked = false;
    let wheelLockTimeout = 0;
    const trackStartY = track.getBoundingClientRect().top + window.scrollY;
    const stageStartOffset = stage.getBoundingClientRect().top + window.scrollY - trackStartY;
    const stickyTop = Number.parseFloat(getComputedStyle(stage).top) || 0;

    const getStickyRange = () => {
      const stickyStart = trackStartY + stageStartOffset - stickyTop;
      const stickyEnd = trackStartY + track.offsetHeight - stage.offsetHeight - stickyTop;
      return { stickyStart, stickyEnd, scrollRange: Math.max(1, stickyEnd - stickyStart) };
    };

    const updateFrame = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const { stickyStart, scrollRange } = getStickyRange();
        const progress = Math.min(1, Math.max(0, (window.scrollY - stickyStart) / scrollRange));
        const nextFrame = Math.round(progress * (frameCount - 1));
        if (nextFrame !== currentFrame) {
          currentFrame = nextFrame;
          setFrameIndex(nextFrame);
        }
      });
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY === 0) return;

      const { stickyStart, stickyEnd, scrollRange } = getStickyRange();
      const scrollY = window.scrollY;
      if (scrollY < stickyStart - 2 || scrollY > stickyEnd + 2) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      if (direction > 0 && currentFrame === frameCount - 1) {
        if (scrollY < stickyEnd - 2) {
          event.preventDefault();
          window.scrollTo(0, stickyEnd);
        }
        return;
      }

      if (direction < 0 && currentFrame === 0) {
        if (scrollY > stickyStart + 2) {
          event.preventDefault();
          window.scrollTo(0, stickyStart);
        }
        return;
      }

      const nextFrame = currentFrame + direction;
      if (nextFrame < 0 || nextFrame >= frameCount) return;

      event.preventDefault();
      if (wheelLocked) return;

      wheelLocked = true;
      window.clearTimeout(wheelLockTimeout);
      wheelLockTimeout = window.setTimeout(() => {
        wheelLocked = false;
      }, 180);

      currentFrame = nextFrame;
      setFrameIndex(nextFrame);
      const progress = nextFrame / (frameCount - 1);
      const targetScrollY = nextFrame === frameCount - 1
        ? stickyEnd
        : stickyStart + progress * scrollRange;
      window.scrollTo(0, targetScrollY);
    };

    window.addEventListener('scroll', updateFrame, { passive: true });
    window.addEventListener('resize', updateFrame);
    track.addEventListener('wheel', handleWheel, { passive: false });
    updateFrame();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateFrame);
      window.removeEventListener('resize', updateFrame);
      track.removeEventListener('wheel', handleWheel);
      window.clearTimeout(wheelLockTimeout);
    };
  }, [trackRef, stageRef, frameCount, setFrameIndex]);
};
