import { useEffect, useRef, useState, type RefObject } from 'react';
import { useScrollScrubFrames } from '../hooks/useScrollScrubFrames';
import animationFrame1 from '../assets/images/RoushanTVFrame01.webp';
import animationFrame2 from '../assets/images/RoushanTVFrame02.webp';
import animationFrame3 from '../assets/images/RoushanTVFrame03.webp';
import animationFrame4 from '../assets/images/RoushanTVFrame04.webp';
import animationFrame5 from '../assets/images/RoushanTVFrame05.webp';
import animationFrame6 from '../assets/images/RoushanTVFrame06.webp';
import animationFrame7 from '../assets/images/RoushanTVFrame07.webp';
import animationFrame8 from '../assets/images/RoushanTVFrame08.webp';
import animationFrame9 from '../assets/images/RoushanTVFrame09.webp';
import animationFrame10 from '../assets/images/RoushanTVFrame10.webp';

const portraitFrames = [
  animationFrame1,
  animationFrame2,
  animationFrame3,
  animationFrame4,
  animationFrame5,
  animationFrame6,
  animationFrame7,
  animationFrame8,
  animationFrame9,
  animationFrame10,
];

export const ScrollTvPortrait = ({
  trackRef,
}: {
  trackRef: RefObject<HTMLDivElement | null>;
}) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [framePosition, setFramePosition] = useState(0);
  const frameIndex = Math.floor(framePosition);
  const nextFrameIndex = Math.min(frameIndex + 1, portraitFrames.length - 1);
  const frameBlend = framePosition - frameIndex;

  useScrollScrubFrames(trackRef, stageRef, portraitFrames.length, setFramePosition);

  useEffect(() => {
    portraitFrames.forEach((src) => {
      const frame = new Image();
      frame.src = src;
    });
  }, []);

  return (
    <div ref={stageRef} className="retro-hero-tv-stack md:col-span-5">
      <div className="retro-hero-tv">
        <div className="retro-hero-tv-screen">
          <div className="retro-hero-tv-picture">
            <img
              className="retro-hero-sequence-image"
              src={portraitFrames[frameIndex]}
              alt={`Roushan Kumar portrait, animation frame ${frameIndex + 1} of ${portraitFrames.length}.`}
              draggable={false}
              fetchPriority="high"
            />
            {nextFrameIndex !== frameIndex && (
              <img
                className="retro-hero-sequence-image retro-hero-sequence-image-next"
                src={portraitFrames[nextFrameIndex]}
                alt=""
                aria-hidden="true"
                draggable={false}
                style={{ opacity: frameBlend }}
              />
            )}
          </div>
        </div>
        <div className="retro-hero-tv-lower" aria-hidden="true">
          <span className="retro-hero-tv-lower-seam" />
          <span className="retro-hero-tv-indicator"><i /> ROUSHAN 01</span>
          <span className="retro-hero-tv-av-inputs"><i /><i /></span>
          <span className="retro-hero-tv-power" />
        </div>
      </div>
    </div>
  );
};
