import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
  allCaseStudies?: CaseStudy[];
  onSelectCaseStudy?: (caseStudy: CaseStudy) => void;
  onBack: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  caseStudy,
  allCaseStudies = [],
  onSelectCaseStudy,
  onBack,
}) => {
  const [activeDesignSlide, setActiveDesignSlide] = useState(0);
  const [wireframeMode, setWireframeMode] = useState(false);

  const designScreens = caseStudy.designScreens || [
    { title: 'Screen 1', image: caseStudy.heroImage, note: 'Default screen' },
  ];

  const handlePrevSlide = () => {
    setActiveDesignSlide((prev) =>
      prev === 0 ? designScreens.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setActiveDesignSlide((prev) =>
      prev === designScreens.length - 1 ? 0 : prev + 1
    );
  };

  // Find next project
  const currentIndex = allCaseStudies.findIndex((s) => s.id === caseStudy.id);
  const nextStudy =
    allCaseStudies.length > 1
      ? allCaseStudies[(currentIndex + 1) % allCaseStudies.length]
      : null;

  return (
    <div className="w-full bg-[#fbfbfb]">
      {/* Top Floating Action Bar / Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between border-b border-black/[0.04]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-black transition-colors cursor-pointer py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to projects</span>
        </button>

        {/* Interactive Mode Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 hidden sm:inline">Preview Mode:</span>
          <div className="flex items-center bg-[#eaedf1] p-1 rounded-xl text-xs font-medium text-slate-700">
            <button
              onClick={() => setWireframeMode(false)}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                !wireframeMode
                  ? 'bg-white text-black shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-black'
              }`}
            >
              Hi-Fi UI
            </button>
            <button
              onClick={() => setWireframeMode(true)}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                wireframeMode
                  ? 'bg-white text-black shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-black'
              }`}
            >
              Reference Wireframe
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                {caseStudy.category}
              </span>
              {caseStudy.tags?.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 bg-[#eef0f3] text-slate-700 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-slate-950 leading-[1.12]">
              {caseStudy.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-xl">
              {caseStudy.subtitle}
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <PhoneMockup
              imageSrc={caseStudy.heroImage}
              wireframe={wireframeMode}
              className="w-full max-w-[280px]"
            />
          </div>
        </div>
      </section>

      {/* Overview & Meta Section */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-6 border-t border-black/[0.04]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Overview Story */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl font-normal tracking-tight text-slate-950">
              Overview
            </h2>
            <div className="text-sm md:text-base text-slate-500 font-normal leading-relaxed whitespace-pre-line space-y-4">
              {caseStudy.overview}
            </div>
          </div>

          {/* Right: Project Meta Details */}
          <div className="md:col-span-5 space-y-6 md:pl-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                Role
              </span>
              <p className="text-base font-normal text-slate-900">{caseStudy.role}</p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                Team
              </span>
              <p className="text-base font-normal text-slate-900">{caseStudy.team}</p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                Timeline
              </span>
              <p className="text-base font-normal text-slate-900">{caseStudy.timeline}</p>
            </div>

            {caseStudy.company && (
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Company / Client
                </span>
                <p className="text-base font-normal text-slate-900">{caseStudy.company}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 border-t border-black/[0.04]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Before Mockup Card */}
          <div className="bg-[#eef0f3] rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px]">
            <PhoneMockup
              imageSrc={caseStudy.beforeScreen}
              wireframe={wireframeMode}
              label={caseStudy.beforeLabel || 'Before'}
              className="w-full max-w-[240px]"
            />
          </div>

          {/* After Mockup Card */}
          <div className="bg-[#eef0f3] rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px]">
            <PhoneMockup
              imageSrc={caseStudy.afterScreen}
              wireframe={wireframeMode}
              label={caseStudy.afterLabel || 'After'}
              className="w-full max-w-[240px]"
            />
          </div>
        </div>
      </section>

      {/* Process Ticker Divider */}
      <div className="w-full overflow-hidden py-5 bg-transparent border-y border-black/[0.06] select-none">
        <div className="animate-marquee flex items-center gap-12 text-slate-800 text-xl md:text-2xl font-normal">
          <span>Process</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Process</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Process</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Process</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Process</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Process</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Process</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Process</span>
          <span className="text-slate-400 text-base">◆</span>
        </div>
      </div>

      {/* 01 - Interviews Section */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl space-y-6 mb-12">
          <h2 className="text-3xl font-normal tracking-tight text-slate-950">
            01 - Interviews & Discovery
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-normal leading-relaxed">
            {caseStudy.interviewsText}
          </p>

          <ul className="space-y-2 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-400">
            {caseStudy.interviewBullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>

        {/* 3 Key Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudy.keyInsights.map((insight, idx) => (
            <div
              key={idx}
              className="bg-[#eef0f3] rounded-[24px] p-6 md:p-8 space-y-3"
            >
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                {insight.title}
              </span>
              <p className="text-sm md:text-base text-slate-800 font-normal leading-snug">
                {insight.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 - Design Section with Interactive Device Carousel */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 border-t border-black/[0.04]">
        <div className="max-w-3xl space-y-6 mb-12">
          <h2 className="text-3xl font-normal tracking-tight text-slate-950">
            02 - Design Architecture
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-normal leading-relaxed">
            {caseStudy.designText}
          </p>

          <ul className="space-y-2 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-400">
            {caseStudy.designBullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>

        {/* Carousel Showcase Container */}
        <div className="bg-[#eef0f3] rounded-[32px] p-8 md:p-16 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-md flex items-center justify-center">
            {/* Left Nav Arrow */}
            <button
              onClick={handlePrevSlide}
              className="absolute -left-4 sm:left-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer"
              aria-label="Previous screen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Phone Display */}
            <div className="w-full max-w-[260px] py-4">
              <PhoneMockup
                imageSrc={designScreens[activeDesignSlide]?.image}
                wireframe={wireframeMode}
                className="w-full"
              />
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNextSlide}
              className="absolute -right-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer"
              aria-label="Next screen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center gap-2 mt-6">
            {designScreens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDesignSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeDesignSlide === idx
                    ? 'bg-black w-6'
                    : 'bg-slate-300 hover:bg-slate-400 w-2'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Caption note */}
          <p className="mt-4 text-xs text-slate-500 font-medium text-center max-w-sm">
            {designScreens[activeDesignSlide]?.note}
          </p>
        </div>
      </section>

      {/* 03 - Usability Testing Section */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 border-t border-black/[0.04]">
        <div className="max-w-3xl space-y-6 mb-12">
          <h2 className="text-3xl font-normal tracking-tight text-slate-950">
            03 - Usability Testing & Iteration
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-normal leading-relaxed">
            {caseStudy.usabilityText}
          </p>
        </div>

        {/* Problem 1 & Solution 1 comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="space-y-6">
            <div className="bg-[#eef0f3] rounded-[32px] p-8 md:p-12 flex items-center justify-center min-h-[460px]">
              <PhoneMockup
                imageSrc={caseStudy.problem1.screen}
                wireframe={wireframeMode}
                className="w-full max-w-[240px]"
              />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                {caseStudy.problem1.title}
              </span>
              <p className="text-sm md:text-base text-slate-800 font-normal leading-relaxed">
                {caseStudy.problem1.desc}
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="space-y-6">
            <div className="bg-[#eef0f3] rounded-[32px] p-8 md:p-12 flex items-center justify-center min-h-[460px]">
              <PhoneMockup
                imageSrc={caseStudy.solution1.screen}
                wireframe={wireframeMode}
                className="w-full max-w-[240px]"
              />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                {caseStudy.solution1.title}
              </span>
              <p className="text-sm md:text-base text-slate-800 font-normal leading-relaxed">
                {caseStudy.solution1.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Ticker Divider */}
      <div className="w-full overflow-hidden py-5 bg-transparent border-y border-black/[0.06] select-none">
        <div className="animate-marquee flex items-center gap-12 text-slate-800 text-xl md:text-2xl font-normal">
          <span>Outcome</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Outcome</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Outcome</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Outcome</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Outcome</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Outcome</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Outcome</span>
          <span className="text-slate-400 text-base">◆</span>
          <span>Outcome</span>
          <span className="text-slate-400 text-base">◆</span>
        </div>
      </div>

      {/* Impact Section */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl space-y-6 mb-12">
          <h2 className="text-3xl font-normal tracking-tight text-slate-950">
            Impact
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-normal leading-relaxed">
            {caseStudy.impactText}
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudy.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#eef0f3] rounded-[24px] p-8 text-center flex flex-col items-center justify-center min-h-[160px] space-y-2"
            >
              <span className="text-3xl md:text-4xl font-normal text-slate-950 tracking-tight tabular-nums">
                {metric.value}
              </span>
              <p className="text-xs md:text-sm text-slate-600 font-normal">
                {metric.label}
              </p>
              {metric.context && (
                <span className="text-[11px] text-slate-400">
                  {metric.context}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Learnings & Next Steps */}
      <section className="py-16 md:py-20 max-w-6xl mx-auto px-6 border-t border-black/[0.04]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Learnings Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-normal tracking-tight text-slate-950">
              Learnings
            </h3>
            <ol className="space-y-4 text-sm md:text-base text-slate-600 list-decimal pl-5 leading-relaxed">
              {caseStudy.learnings.map((learning, idx) => (
                <li key={idx} className="pl-1">
                  {learning}
                </li>
              ))}
            </ol>
          </div>

          {/* Next Steps Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-normal tracking-tight text-slate-950">
              Next Steps
            </h3>
            <ol className="space-y-4 text-sm md:text-base text-slate-600 list-decimal pl-5 leading-relaxed">
              {caseStudy.nextSteps.map((step, idx) => (
                <li key={idx} className="pl-1">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Final Screens Gallery Showcase (5 phone mockups row) */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 border-t border-black/[0.04]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
            Final Flow Showcase
          </span>
          <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-950 mt-1">
            Complete User Journey Screens
          </h3>
        </div>

        {/* 5 Phone Screens Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-end justify-center">
          {caseStudy.finalScreens.map((screen, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <PhoneMockup
                imageSrc={screen.image}
                wireframe={wireframeMode}
                className="w-full max-w-[200px]"
              />
              <span className="mt-3 text-xs text-slate-500 font-medium">
                {screen.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Teaser Footer (from Framer) */}
      {nextStudy && onSelectCaseStudy && (
        <section className="py-16 bg-[#eef0f3] border-t border-black/[0.04]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Next Project
              </span>
              <h4 className="text-2xl font-normal text-slate-950">
                {nextStudy.title}
              </h4>
              <p className="text-xs text-slate-500 max-w-md">
                {nextStudy.subtitle}
              </p>
            </div>

            <button
              onClick={() => onSelectCaseStudy(nextStudy)}
              className="px-6 py-3 bg-black hover:bg-neutral-800 text-white rounded-2xl text-sm font-medium inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Explore {nextStudy.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
