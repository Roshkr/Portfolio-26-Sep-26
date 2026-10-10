import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';
import { LazyVideo } from './PhoneMockup';

type ProjectCardVariant = 'default' | 'editorial';

interface ProjectCardProps {
  study: CaseStudy;
  onSelectCaseStudy: (study: CaseStudy) => void;
  stackIndex?: number;
  variant?: ProjectCardVariant;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  study,
  onSelectCaseStudy,
  stackIndex,
  variant = 'default',
}) => {
  const isStacked = stackIndex !== undefined;
  const stackPosition = stackIndex ?? 0;
  const handleSelect = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onSelectCaseStudy(study);
  };

  if (variant === 'editorial') {
    const stories: Record<string, { headline: string; person: string; decision: string; shipped: string }> = {
      roushani: { headline: 'Make invoicing feel effortless.', person: 'Small businesses lose time repeating the same billing work.', decision: 'Save the details. Keep every invoice simple.', shipped: 'A mobile-first invoicing product, from concept to live MVP.' },
      umbrella: { headline: 'Make complex onboarding feel clear.', person: 'Enterprise teams need to collect detailed third-party information.', decision: 'Break a demanding process into clear, manageable steps.', shipped: 'A streamlined onboarding experience for enterprise workflows.' },
      bridge2business: { headline: 'Turn a website into a business tool.', person: 'Business owners need to understand the offer and act with confidence.', decision: 'Lead with clarity, useful proof, and a direct path to connect.', shipped: 'A focused B2B website redesign proposal.' },
      maxlence: { headline: 'Bring people and projects into focus.', person: 'Teams were managing connected work across fragmented tools.', decision: 'Give HR and project workflows a consistent, shared language.', shipped: 'A scalable SaaS experience and reusable design system.' },
      naie: { headline: 'Make salon visits easier to plan.', person: 'Customers want a good salon without the uncertainty of walk-ins.', decision: 'Make services, availability, and waiting time visible up front.', shipped: 'A salon discovery and booking experience for customers and owners.' },
    };
    const story = stories[study.id] ?? { headline: study.title, person: study.subtitle, decision: study.role, shipped: [study.company, study.timeline].filter(Boolean).join(' / ') };
    return (
      <a href={`#case-study-${study.id}`} onClick={handleSelect} aria-label={`Read the ${study.title} case study`} className="group block cursor-pointer text-left text-slate-950 no-underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#2b35ee]">
        <div className="grid min-w-0 items-center gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:pb-14 xl:gap-16">
          <div className="relative aspect-[1.28/1] min-w-0 overflow-hidden rounded-sm bg-transparent sm:aspect-[1.45/1] lg:aspect-[1.16/1]">
            {study.heroVideo ? (
              <LazyVideo src={study.heroVideo} poster={study.heroImage} ariaLabel={`${study.title} project preview`} objectFit="contain" frameClassName="bg-transparent transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.02]" />
            ) : (
              <img src={study.heroImage} alt={`${study.title} project preview`} referrerPolicy="no-referrer" loading="lazy" className="h-full w-full object-contain transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.02]" />
            )}
            <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/75 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">{String(stackPosition + 1).padStart(2, '0')}</span>
          </div>
          <div className="min-w-0 lg:py-5">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#2b35ee]">{study.category}</p>
            <h3 className="max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-slate-950 transition-colors duration-300 group-hover:text-[#2b35ee] sm:text-5xl lg:text-[clamp(2.25rem,3.1vw,3.35rem)]">{story.headline}</h3>
            <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
              {([['The person', story.person], ['The decision', story.decision], ['What shipped', story.shipped]] as const).map(([label, copy]) => (
                <div key={label} className="grid min-w-0 gap-2 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.11em] text-[#2b35ee]">{label}</span>
                  <p className="min-w-0 text-sm font-medium leading-[1.45] text-slate-700">{copy}</p>
                </div>
              ))}
            </div>
            <span className="mt-4 inline-flex items-center gap-2 border-b border-slate-400 pb-1.5 text-sm font-bold text-slate-900 transition-all duration-300 group-hover:gap-3 group-hover:border-[#2b35ee] group-hover:text-[#2b35ee] motion-reduce:transition-none">View<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
          </div>
        </div>
      </a>
    );
  }
  return (
    <a
      href={`#case-study-${study.id}`}
      onClick={handleSelect}
      style={isStacked ? { '--stack-offset': `${stackPosition * 44}px`, zIndex: stackPosition + 1 } as React.CSSProperties : undefined}
      aria-label={`Read the ${study.title} case study`}
      className={`${isStacked ? 'project-stack-card ' : ''}group cursor-pointer bg-white rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col lg:flex-row overflow-hidden items-stretch no-underline ${study.heroVideo || ['umbrella', 'maxlence', 'naie'].includes(study.id) ? 'lg:h-auto lg:max-h-none' : 'lg:h-[min(80vh,540px)] lg:max-h-[80vh]'}`}
    >
      <div className="w-full lg:w-7/12 bg-gradient-to-b from-[#f8f9fb] to-[#edf0f5] p-4 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-slate-200/70 relative overflow-hidden flex items-center justify-center shrink-0 lg:h-full">
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-700 shadow-2xs border border-slate-200/70 backdrop-blur-xs">
            {study.id === 'bridge2business'
              ? 'Redesign Proposal'
              : study.status || 'Case Study'}
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
