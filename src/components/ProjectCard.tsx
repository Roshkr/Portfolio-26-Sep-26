import React from 'react';
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
  const isHomeCard = stackIndex !== undefined;
  const isRoushani = study.id === 'roushani';
  const metaLine = isRoushani
    ? 'B2B SaaS · 4 weeks (concept → live)'
    : `${study.category} · ${study.timeline || '4 Weeks'}`;
  const summary = isRoushani
    ? 'Cut invoice creation from ~18 min in Excel to under 3 min for service businesses.'
    : study.subtitle;
  const displayTags = isRoushani
    ? ['Product design', 'Interaction design', 'Concept to market']
    : study.tags?.slice(0, 3) ?? [];

  return (
    <a
      href={`#case-study-${study.id}`}
      onClick={(event) => {
        event.preventDefault();
        onSelectCaseStudy(study);
      }}
      style={isHomeCard ? { zIndex: stackIndex + 1 } : undefined}
      aria-label={`Read the ${study.title} case study`}
      className={`${isHomeCard ? 'project-stack-card ' : ''}group cursor-pointer bg-white rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col overflow-hidden items-stretch no-underline ${isHomeCard ? 'h-[55dvh] min-h-[360px] max-h-[520px] lg:h-[65dvh] lg:min-h-0 lg:max-h-[65dvh]' : ''}`}
    >
      <div className={`w-full ${isHomeCard ? '' : 'lg:w-7/12'} bg-gradient-to-b from-[#f8f9fb] to-[#edf0f5] ${isHomeCard ? 'min-h-0 flex-[0_0_100%]' : 'p-4 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-slate-200/70'} relative overflow-hidden flex items-center justify-center shrink-0 ${isHomeCard ? 'p-0' : 'lg:h-full'}`}>
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-700 shadow-2xs border border-slate-200/70 backdrop-blur-xs">
            {study.status || 'Case Study'}
          </span>
        </div>

        <div className={`w-full ${isHomeCard ? 'absolute inset-0 h-full' : `h-full ${study.heroVideo ? '' : 'min-h-[220px] sm:min-h-[280px]'}`} flex items-center justify-center relative ${isHomeCard ? 'p-0' : 'p-1 sm:p-2'}`}>
          {study.heroVideo ? (
            <div className={isHomeCard ? 'w-full h-full' : 'w-full max-w-full max-h-[300px] sm:max-h-[360px] lg:max-h-[460px] aspect-video'}>
              <LazyVideo
                src={study.heroVideo}
                poster={study.heroImage}
                ariaLabel={`${study.title} preview`}
                objectFit={isHomeCard ? 'cover' : 'contain'}
                frameClassName={isHomeCard
                  ? 'rounded-none bg-slate-900'
                  : 'rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-slate-200/80 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300'}
              />
            </div>
          ) : (
            <img
              src={study.heroImage}
              alt={study.title}
              referrerPolicy="no-referrer"
              className={isHomeCard
                ? study.id === 'umbrella'
                  ? 'absolute inset-0 h-full w-full object-contain p-4 sm:p-8'
                  : 'absolute inset-0 h-full w-full object-cover'
                : 'max-w-full max-h-[300px] sm:max-h-[360px] lg:max-h-[460px] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-slate-200/80 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300'}
              loading="lazy"
            />
          )}
        </div>

        {isHomeCard && (
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-4 pb-5 pt-28 text-white sm:px-8 sm:pb-8 sm:pt-36 lg:px-10">
            <div className="mx-auto flex max-w-5xl flex-col gap-2.5 sm:gap-3">
              <span className="inline-flex w-fit max-w-full items-center rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:text-xs">
                <span className="truncate">{metaLine}</span>
              </span>
              <h3 className="text-xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                {study.title}
              </h3>
              <p className="max-w-3xl text-xs leading-relaxed text-white/85 line-clamp-2 sm:text-sm lg:text-base">
                {summary}
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {displayTags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white sm:px-3 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {!isHomeCard && (
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

        <div className="pt-4 border-t border-slate-100">
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
        </div>
      </div>
      )}
    </a>
  );
};
