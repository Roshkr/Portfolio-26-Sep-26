import React, { useRef, useEffect, useState } from 'react';

interface PhoneMockupProps {
  imageSrc?: string;
  /** If provided, renders a high-performance lazy-loading looping video */
  videoSrc?: string;
  /** Optional poster frame image for the video (defaults to imageSrc if available) */
  poster?: string;
  className?: string;
  wireframe?: boolean;
  wireframeType?: 'search' | 'card' | 'detail' | 'grid';
  label?: string;
}

/**
 * LazyVideo — High-performance viewport-aware video renderer.
 * 
 * Performance features:
 * 1. preload="none" — 0 bytes transferred until entering viewport
 * 2. IntersectionObserver (250px margin) — begins buffering just before entering screen
 * 3. Auto-pause when scrolled out of view — frees GPU decode buffers and CPU
 * 4. Poster image placeholder — prevents layout shift and blank rectangles
 * 5. Smooth fade-in once video frame is decoded and ready
 */
export const LazyVideo: React.FC<{
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  objectFit?: 'cover' | 'contain';
  frameClassName?: string;
}> = ({ src, poster, className = '', ariaLabel = 'Product video preview', objectFit = 'cover', frameClassName = 'bg-slate-900' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const objectFitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover';

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: '250px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (inView) {
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser autoplay policy / low power mode handled gracefully
        });
      }
    } else if (!el.paused) {
      el.pause();
    }
  }, [inView]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${frameClassName}`}>
      {/* Poster background displayed while video is idle or buffering */}
      {poster && !isReady && (
        <img
          src={poster}
          alt="Video thumbnail placeholder"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}
      <video
        ref={videoRef}
        src={inView ? src : undefined}
        poster={poster}
        preload="none"
        muted
        loop
        playsInline
        aria-label={ariaLabel}
        onCanPlay={() => setIsReady(true)}
        className={`w-full h-full ${objectFitClass} transition-opacity duration-300 ${
          isReady ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  imageSrc,
  videoSrc,
  poster,
  className = '',
  wireframe = false,
  label,
}) => {
  const activePoster = poster || imageSrc;

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Outer Phone Shell */}
      <div className="relative w-full aspect-[9/19] max-w-[280px] bg-black rounded-[42px] p-[6px] shadow-2xl ring-1 ring-black/10 transition-transform duration-300 hover:scale-[1.01]">
        {/* Dynamic Island / Speaker */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-[#18181b] mr-2"></div>
          <div className="w-2 h-2 rounded-full bg-[#101012]"></div>
        </div>

        {/* Screen Bezel / Container */}
        <div className="relative w-full h-full bg-[#f4f5f7] rounded-[36px] overflow-hidden flex flex-col justify-between select-none">
          {!wireframe && (videoSrc || imageSrc) ? (
            /* High Fidelity Rendered Screen — prefers video over image */
            <div className="relative w-full h-full">
              {videoSrc ? (
                <LazyVideo src={videoSrc} poster={activePoster} />
              ) : (
                <img
                  src={imageSrc}
                  alt="Mobile UI Screen"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              )}
              <div className="hidden absolute inset-0 bg-slate-900 text-white flex-col items-center justify-center p-6 text-center">
                <span className="text-xs uppercase tracking-widest text-slate-400">Mobile Interface</span>
                <span className="text-sm font-semibold mt-1">Screen Preview</span>
              </div>
            </div>
          ) : (
            /* UX Wireframe Placeholder */
            <div className="w-full h-full pt-8 pb-4 px-4 flex flex-col justify-between bg-white text-slate-800 text-xs">
              {/* Status Header */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium px-1">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-4 h-2 border border-slate-400 rounded-[2px] p-[1px]">
                    <div className="w-full h-full bg-slate-400 rounded-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* Wireframe Navigation Bar */}
              <div className="flex items-center justify-between mt-2 pt-1 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                  <span className="text-sm">‹</span>
                  <span>Back</span>
                </div>
                <div className="flex flex-col gap-[3px] w-4">
                  <div className="h-[2px] bg-slate-400 rounded-full"></div>
                  <div className="h-[2px] bg-slate-400 rounded-full"></div>
                  <div className="h-[2px] bg-slate-400 rounded-full"></div>
                </div>
              </div>

              {/* Wireframe Content Body */}
              <div className="flex-1 flex flex-col gap-3 mt-3 overflow-hidden">
                {/* Search / Placeholder Header */}
                <div className="bg-[#f1f3f6] rounded-md p-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-600">Placeholder image</span>
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Wireframe Card 1 */}
                <div className="flex-1 bg-[#eaedf1] rounded-lg p-3 flex flex-col items-center justify-center border border-slate-200/60 relative">
                  <div className="w-8 h-8 rounded border border-slate-300 flex items-center justify-center text-slate-400 mb-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="w-16 h-2 bg-slate-300 rounded-full mt-1"></div>
                  <div className="w-10 h-1.5 bg-slate-200 rounded-full mt-1"></div>
                </div>

                {/* Wireframe Card 2 */}
                <div className="h-20 bg-[#eaedf1] rounded-lg p-2 flex items-center justify-center border border-slate-200/60">
                  <div className="w-6 h-6 rounded border border-slate-300 flex items-center justify-center text-slate-400">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Wireframe */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-around text-slate-400">
                <div className="w-5 h-5 rounded-md border border-slate-300"></div>
                <div className="w-5 h-5 rounded-md border border-slate-300"></div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center text-[10px]">+</div>
              </div>

              {/* Home indicator bar */}
              <div className="w-24 h-1 bg-slate-300 rounded-full mx-auto mt-2"></div>
            </div>
          )}
        </div>
      </div>

      {label && (
        <span className="mt-4 text-base font-medium text-slate-800 tracking-tight">
          {label}
        </span>
      )}
    </div>
  );
};
