import { useEffect } from 'react';

type ElementRef<T extends HTMLElement> = { current: T | null };

export const useScrollScrubVideo = (
  trackRef: ElementRef<HTMLElement>,
  stageRef: ElementRef<HTMLElement>,
  videoRef: ElementRef<HTMLVideoElement>,
) => {
  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!track || !stage || !video) return;

    let animationFrame = 0;
    let isSeeking = false;
    const trackStartY = track.getBoundingClientRect().top + window.scrollY;
    const stageStartOffset = stage.getBoundingClientRect().top + window.scrollY - trackStartY;
    const stickyTop = Number.parseFloat(getComputedStyle(stage).top) || 0;

    const updateFrame = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const stickyStart = trackStartY + stageStartOffset - stickyTop;
        const stickyEnd = trackStartY + track.offsetHeight - stage.offsetHeight - stickyTop;
        const range = Math.max(1, stickyEnd - stickyStart);
        const progress = Math.min(1, Math.max(0, (window.scrollY - stickyStart) / range));
        if (video.readyState < HTMLMediaElement.HAVE_METADATA || !Number.isFinite(video.duration)) return;

        const targetTime = Math.min(video.duration, Math.max(0, video.duration - 0.04) * progress);
        if (isSeeking || Math.abs(video.currentTime - targetTime) <= 0.005) return;

        video.pause();
        isSeeking = true;
        try {
          video.currentTime = targetTime;
        } catch {
          isSeeking = false;
        }
      });
    };

    const handleSeeked = () => {
      isSeeking = false;
      updateFrame();
    };

    video.pause();
    video.addEventListener('loadedmetadata', updateFrame);
    video.addEventListener('seeked', handleSeeked);
    window.addEventListener('scroll', updateFrame, { passive: true });
    window.addEventListener('resize', updateFrame);
    updateFrame();

    return () => {
      cancelAnimationFrame(animationFrame);
      video.removeEventListener('loadedmetadata', updateFrame);
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('scroll', updateFrame);
      window.removeEventListener('resize', updateFrame);
    };
  }, [trackRef, stageRef, videoRef]);
};
