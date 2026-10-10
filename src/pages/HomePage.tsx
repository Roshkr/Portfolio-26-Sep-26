import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CaseStudy } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { CharacterRevealText } from '../components/CharacterRevealText';
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
  const shouldReduceMotion = useReducedMotion();
  const heroHeadline = `${DESIGNER_INFO.headlineHero} ${DESIGNER_INFO.headlineHighlight}${DESIGNER_INFO.headlineSuffix}`;

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
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-slate-500 leading-[1.24] sm:leading-[1.2] md:leading-[1.18]"
              initial={shouldReduceMotion ? false : 'hidden'}
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.007, delayChildren: 0.05 } },
              }}
            >
              <span className="sr-only">{heroHeadline}</span>
              <span aria-hidden="true">
                <CharacterRevealText text={`${DESIGNER_INFO.headlineHero} `} />
                <span className="text-[#2b35ee] font-bold">
                  <CharacterRevealText text={DESIGNER_INFO.headlineHighlight} />
                </span>
                <CharacterRevealText text={DESIGNER_INFO.headlineSuffix} />
              </span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-24 max-w-6xl mx-auto px-6 border-t border-slate-200/60"
      >
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950">
              Designed around real work.
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
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
      </section>

    </div>
  );
};
