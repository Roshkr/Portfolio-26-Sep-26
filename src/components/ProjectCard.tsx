import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';
import { LazyVideo } from './PhoneMockup';

interface ProjectCardProps {
  study: CaseStudy;
  onSelectCaseStudy: (study: CaseStudy) => void;
  stackIndex?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  study,
  onSelectCaseStudy,
  stackIndex,
}) => {
  const isStacked = stackIndex !== undefined;
  const stackPosition = stackIndex ?? 0;

  return (
    <a
      href={`#case-study-${study.id}`}
      onClick={(event) => {
        event.preventDefault();
        onSelectCaseStudy(study);
      }}
      style={isStacked ? { '--stack-offset': `${stackPosition * 44}px`, zIndex: stackPosition + 1 } as React.CSSProperties : undefined}
      aria-label={`Read the ${study.title} case study`}
      className={`${isStacked ? 'project-stack-card ' : ''}group cursor-pointer bg-white rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col lg:flex-row overflow-hidden items-stretch no-underline ${study.heroVideo || ['umbrella', 'maxlence', 'naie'].includes(study.id) ? 'lg:h-auto lg:max-h-none' : 'lg:h-[min(80vh,540px)] lg:max-h-[80vh]'}`}
    >
      <div className="w-full lg:w-7/12 bg-gradient-to-b from-[#f8f9fb] to-[#edf0f5] p-4 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-slate-200/70 relative overflow-hidden flex items-center justify-center shrink-0 lg:h-full">
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-700 shadow-2xs border border-slate-200/70 backdrop-blur-xs">
            {study.status || 'Case Study'}
          </span>
        </div>

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

        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {study.tags?.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-0.5 bg-slate-100 hover:bg-slate-200/80 text-slate-600 text-[11px] font-medium rounded-md transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#2b35ee] group-hover:translate-x-1 transition-all shrink-0">
            <span>View details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </a>
  );
};
