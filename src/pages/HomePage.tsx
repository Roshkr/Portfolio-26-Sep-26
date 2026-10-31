import { useCallback, useEffect, useRef, useState } from 'react';
import type { CaseStudy, SelectCaseStudy } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { WindowControls } from '../components/WindowControls';
import { useScrollScrubFrames } from '../hooks/useScrollScrubFrames';
import animationFrame1 from "../../Roushan's Animation/Roushan1.jpg";
import animationFrame2 from "../../Roushan's Animation/Roushan2.jpg";
import animationFrame3 from "../../Roushan's Animation/Roushan3.jpg";
import animationFrame4 from "../../Roushan's Animation/Roushan4.jpg";
import animationFrame5 from "../../Roushan's Animation/Roushan5.jpg";
import animationFrame6 from "../../Roushan's Animation/Roushan6.jpg";
import animationFrame7 from "../../Roushan's Animation/Roushan7.jpg";

interface HomePageProps {
  caseStudies: CaseStudy[];
  onSelectCaseStudy: SelectCaseStudy;
}

const headlineWords = `${DESIGNER_INFO.headlineHero} ${DESIGNER_INFO.headlineHighlight}${DESIGNER_INFO.headlineSuffix}`
  .trim()
  .replace(/\s+/g, ' ')
  .split(' ');
const heroHeadlineLines = [
  headlineWords.slice(0, 2).join(' '),
  headlineWords.slice(2, 5).join(' '),
  headlineWords.slice(5, 6).join(' '),
  headlineWords.slice(6, 8).join(' '),
  headlineWords.slice(8).join(' '),
];
const heroAnimationFrames = [
  animationFrame1,
  animationFrame2,
  animationFrame3,
  animationFrame4,
  animationFrame5,
  animationFrame6,
  animationFrame7,
];

export const HomePage = ({ caseStudies, onSelectCaseStudy }: HomePageProps) => {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [previousFrameIndex, setPreviousFrameIndex] = useState<number | null>(null);
  const [previousFrameVisible, setPreviousFrameVisible] = useState(false);
  const currentFrameRef = useRef(0);
  const transitionFrameRef = useRef(0);
  const transitionTimeoutRef = useRef(0);
  const handleFrameChange = useCallback((nextFrame: number) => {
    if (nextFrame === currentFrameRef.current) return;

    const previousFrame = currentFrameRef.current;
    currentFrameRef.current = nextFrame;
    setPreviousFrameIndex(previousFrame);
    setFrameIndex(nextFrame);
    setPreviousFrameVisible(true);
    cancelAnimationFrame(transitionFrameRef.current);
    window.clearTimeout(transitionTimeoutRef.current);
    transitionFrameRef.current = requestAnimationFrame(() => setPreviousFrameVisible(false));
    transitionTimeoutRef.current = window.setTimeout(() => setPreviousFrameIndex(null), 220);
  }, []);
  useScrollScrubFrames(trackRef, stageRef, heroAnimationFrames.length, handleFrameChange);

  useEffect(() => {
    heroAnimationFrames.forEach((src) => {
      const frame = new Image();
      frame.src = src;
    });
  }, []);

  return (
    <div className="w-full">
    <section ref={trackRef} className="home-hero-background relative w-full">
      <div ref={stageRef} className="retro-home-grid w-full">
        <div className="retro-window retro-hero-window">
          <div className="retro-window-titlebar">
            <span>ROUSHAN.IN / HOME</span>
            <span aria-hidden="true">01</span>
            <WindowControls />
          </div>
          <div className="retro-hero-body">
            <div className="retro-hero-main">
              <h1>
                <span className="retro-hero-line retro-hero-line-outline">{heroHeadlineLines[0]}</span>
                <span className="retro-hero-line retro-hero-line-paper">{heroHeadlineLines[1]}</span>
                <span className="retro-hero-line retro-hero-line-highlight">{heroHeadlineLines[2]}</span>
                <span className="retro-hero-line retro-hero-line-ink">{heroHeadlineLines[3]}</span>
                <span className="retro-hero-line retro-hero-line-highlight retro-hero-line-highlight-final">{heroHeadlineLines[4]}</span>
              </h1>
            </div>
            <div className="retro-hero-video-frame retro-hero-sequence-frame" role="img" aria-label={`Roushan animation, frame ${frameIndex + 1} of ${heroAnimationFrames.length}`}>
              <img
                className="retro-hero-sequence-image"
                src={heroAnimationFrames[frameIndex]}
                alt=""
                draggable={false}
                fetchPriority="high"
              />
              {previousFrameIndex !== null && (
                <img
                  className={`retro-hero-sequence-image retro-hero-sequence-image-previous${previousFrameVisible ? ' is-visible' : ''}`}
                  src={heroAnimationFrames[previousFrameIndex]}
                  alt=""
                  draggable={false}
                />
              )}
            </div>
          </div>
        </div>

      </div>

    </section>

    <section className="retro-facts-section w-full" aria-label="Quick facts">
      <aside className="retro-window retro-facts-window">
        <div className="retro-window-titlebar">
          <span>QUICK FACTS</span>
          <span aria-hidden="true">INFO.DAT</span>
          <WindowControls />
        </div>
        <div className="retro-facts-body">
          <div className="retro-facts-list">
            {DESIGNER_INFO.stats.map((stat) => (
              <div className="retro-fact-row" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>

    <section id="projects" className="retro-projects">
      <div className="retro-window retro-projects-window">
        <div className="retro-window-titlebar">
          <span>SELECTED WORKS</span>
          <span aria-hidden="true">{String(caseStudies.length).padStart(2, '0')} PROJECTS</span>
          <WindowControls />
        </div>
        <div className="retro-projects-heading">
          <h2>Recent works</h2>
        </div>
        <div className="retro-project-list">
          {caseStudies.map((study, index) => (
            <ProjectCard
              key={study.id}
              study={study}
              onSelectCaseStudy={onSelectCaseStudy}
              stackIndex={index}
              variant="editorial"
            />
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};
