import React, { useRef } from 'react';
import { CaseStudy } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';

interface HomePageProps {
  caseStudies: CaseStudy[];
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  caseStudies,
  onSelectCaseStudy,
}) => {
  const heroGradientRef = useRef<HTMLDivElement>(null);

  const handleHeroPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || !heroGradientRef.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 48;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 34;

    heroGradientRef.current.style.setProperty('--hero-pointer-x', `${offsetX}px`);
    heroGradientRef.current.style.setProperty('--hero-pointer-y', `${offsetY}px`);
  };

  const resetHeroPointer = () => {
    heroGradientRef.current?.style.setProperty('--hero-pointer-x', '0px');
    heroGradientRef.current?.style.setProperty('--hero-pointer-y', '0px');
  };

  return (
    <div className="w-full">
      {/* Hero Section with Viewport Presence & Subtle UXfolio Dot Grid Background */}
      <section
        className="relative w-full min-h-0 md:min-h-[calc(100vh-5rem)] md:min-h-[calc(100dvh-5rem)] flex items-center justify-center overflow-hidden py-10 md:py-24"
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroPointer}
      >
        {/* Subtle UXfolio Background: Micro Dot Pattern & Ambient Lighting */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Dot Grid */}
          <div className="absolute inset-0 bg-dot-pattern opacity-40" />

          {/* Subtle pointer-responsive gradient */}
          <div
            ref={heroGradientRef}
            aria-hidden="true"
            className="hero-gradient-pointer absolute top-1/2 left-1/2"
          >
            <div className="hero-gradient-float" />
          </div>

          {/* Vertical Architectural Guide Lines */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
            <div className="w-full h-full border-x border-slate-200/50" />
          </div>
        </div>

        {/* Hero Content (Centered within Viewport) */}
        <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8 md:space-y-10">
            {/* Subtitle / Kicker */}
            <div className="inline-flex items-center gap-2.5 md:gap-3 text-xs md:text-sm font-medium text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2b35ee] shrink-0" />
              <span className="tracking-normal leading-relaxed">{DESIGNER_INFO.headlineGreeting}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold tracking-tight text-slate-500 leading-[1.24] sm:leading-[1.2] md:leading-[1.18]">
              {DESIGNER_INFO.headlineHero}{' '}
              <span className="text-[#2b35ee] font-bold">
                {DESIGNER_INFO.headlineHighlight}
              </span>
              {DESIGNER_INFO.headlineSuffix}
            </h1>
          </div>
        </div>
      </section>

      {/* Selected Projects Section - UXfolio Showcase Style */}
      <section
        id="projects"
        className="py-16 md:py-24 max-w-6xl mx-auto px-6 border-t border-slate-200/60"
      >
        {/* Section Header */}
        <div className="mb-10 md:mb-12 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950">
            Work
          </h2>
        </div>

        {/* Project Cards - UXfolio Single Project Showcase Style (Adjusted to 80% Viewport on Desktop) */}
        <div className="flex flex-col gap-8 md:gap-12">
          {caseStudies.map((study, index) => (
            <ProjectCard
              key={study.id}
              study={study}
              onSelectCaseStudy={onSelectCaseStudy}
              stackIndex={index}
            />
          ))}
        </div>
      </section>

    </div>
  );
};
