import React from 'react';
import { ArrowRight, Sparkles, Plus } from 'lucide-react';
import { CaseStudy } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { LazyVideo } from '../components/PhoneMockup';

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
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              style={{ '--stack-offset': `${index * 44}px`, zIndex: index + 1 } as React.CSSProperties}
              className={`project-stack-card group cursor-pointer bg-white rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col lg:flex-row overflow-hidden items-stretch ${study.heroVideo || ['umbrella', 'maxlence', 'naie'].includes(study.id) ? 'lg:h-auto lg:max-h-none' : 'lg:h-[min(80vh,540px)] lg:max-h-[80vh]'}`}
            >
              {/* Visual Mockup Container - Uncropped High-Resolution Showcase */}
              <div className="w-full lg:w-7/12 bg-gradient-to-b from-[#f8f9fb] to-[#edf0f5] p-4 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-slate-200/70 relative overflow-hidden flex items-center justify-center shrink-0 lg:h-full">
                {/* Status Badge */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-700 shadow-2xs border border-slate-200/70 backdrop-blur-xs">
                    {study.status || 'Case Study'}
                  </span>
                </div>

                {/* Entire Showcase (Lazy video if heroVideo provided, else optimized image) */}
                <div className={`w-full h-full ${study.heroVideo ? '' : 'min-h-[220px] sm:min-h-[280px]'} flex items-center justify-center relative p-1 sm:p-2`}>
                  {study.heroVideo ? (
                    <div className="w-full max-w-full max-h-[300px] sm:max-h-[360px] lg:max-h-[460px] aspect-video">
                      <LazyVideo
                        src={study.heroVideo}
                        poster={study.heroImage}
                        ariaLabel={`${study.title} preview`}
                        objectFit="contain"
                        frameClassName="rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-slate-200/80 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <img
                      src={study.heroImage}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-[300px] sm:max-h-[360px] lg:max-h-[460px] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-slate-200/80 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>

              {/* UXfolio Content Section */}
              <div className={`w-full lg:w-5/12 p-5 sm:p-6 lg:p-8 flex flex-col ${['umbrella', 'maxlence', 'naie'].includes(study.id) ? 'justify-start' : 'justify-between'} space-y-4 lg:h-full`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-wider text-[#2b35ee]">
                      {study.category}
                    </span>
                    <span className="text-slate-400 font-medium">
                      {study.timeline || '4 Weeks'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-[#2b35ee] transition-colors leading-snug line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {study.subtitle}
                  </p>
                </div>

                {/* Deliverable Tags & Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {study.tags?.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-slate-100 hover:bg-slate-200/80 text-slate-600 text-[11px] font-medium rounded-md transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#2b35ee] group-hover:translate-x-1 transition-all shrink-0">
                    <span>Read case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
