import React from 'react';
import { Sparkles, Plus } from 'lucide-react';
import { CaseStudy } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';

interface HomePageProps {
  caseStudies: CaseStudy[];
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenAddModal: () => void;
  onNavigate: (page: 'home' | 'about' | 'case-study') => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  caseStudies,
  onSelectCaseStudy,
  onOpenAddModal,
  onNavigate,
}) => {
  return (
    <div className="w-full">
      {/* Hero Section with Viewport Presence & Subtle UXfolio Dot Grid Background */}
      <section className="relative w-full min-h-0 md:min-h-[calc(100vh-5rem)] md:min-h-[calc(100dvh-5rem)] flex items-center justify-center overflow-hidden py-10 md:py-24">
        {/* Subtle UXfolio Background: Micro Dot Pattern & Ambient Lighting */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Dot Grid */}
          <div className="absolute inset-0 bg-dot-pattern opacity-40" />

          {/* Soft Radial Center Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(43,53,238,0.035),transparent_70%)] rounded-full blur-2xl" />

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-slate-950 leading-[1.24] sm:leading-[1.2] md:leading-[1.18]">
              {DESIGNER_INFO.headlineHero}{' '}
              <span className="text-[#2b35ee] font-medium">
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
          <button
            onClick={onOpenAddModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-black bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors cursor-pointer"
            title="Add a custom case study"
          >
            <Plus className="w-3.5 h-3.5 text-slate-500" />
            <span>Add Project</span>
          </button>
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
