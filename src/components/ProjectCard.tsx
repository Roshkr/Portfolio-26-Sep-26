import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { CaseStudy, SelectCaseStudy } from '../types';
import { LazyVideo } from './PhoneMockup';
import { WindowControls } from './WindowControls';

type ProjectCardVariant = 'default' | 'editorial';

interface ProjectCardProps {
  study: CaseStudy;
  onSelectCaseStudy: SelectCaseStudy;
  stackIndex?: number;
  variant?: ProjectCardVariant;
  compactCorners?: boolean;
  transitionOnSelect?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  study,
  onSelectCaseStudy,
  stackIndex,
  variant = 'default',
  compactCorners = false,
  transitionOnSelect = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isStacked = stackIndex !== undefined;
  const stackPosition = stackIndex ?? 0;
  const handleSelect = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onSelectCaseStudy(study, transitionOnSelect ? 'curtain' : undefined);
  };

  if (variant === 'editorial') {
    const stories: Record<string, { headline: string; person: string; decision: string; shipped: string }> = {
      roushani: { headline: 'Make invoicing feel effortless.', person: 'Small businesses lose time repeating the same billing work.', decision: 'Save the details. Keep every invoice simple.', shipped: 'A mobile-first invoicing product, from concept to live MVP.' },
      'design-system-icons': { headline: 'One system for components and icons.', person: 'The whole platform needed a consistent visual language.', decision: 'Create shared foundations and reusable components with the design manager and development team.', shipped: 'A platform-wide design system, developed over two months.' },
      umbrella: { headline: 'Make complex onboarding feel clear.', person: 'Enterprise teams need to collect detailed third-party information.', decision: 'Break a demanding process into clear, manageable steps.', shipped: 'A streamlined onboarding experience for enterprise workflows.' },
      bridge2business: { headline: 'Turn a website into a business tool.', person: 'Business owners need to understand the offer and act with confidence.', decision: 'Lead with clarity, useful proof, and a direct path to connect.', shipped: 'A focused B2B website redesign proposal.' },
      maxlence: { headline: 'Bring people and projects into focus.', person: 'Teams were managing connected work across fragmented tools.', decision: 'Give HR and project workflows a consistent, shared language.', shipped: 'A scalable SaaS experience and reusable design system.' },
      naie: { headline: 'Make salon visits easier to plan.', person: 'Customers want a good salon without the uncertainty of walk-ins.', decision: 'Make services, availability, and waiting time visible up front.', shipped: 'A salon discovery and booking experience for customers and owners.' },
    };
    const story = stories[study.id] ?? { headline: study.title, person: study.subtitle, decision: study.role, shipped: [study.company, study.timeline].filter(Boolean).join(' / ') };
    return (
      <a href={`/case-studies/${study.id}`} onClick={handleSelect} aria-label={`Read the ${study.title} case study`} className="retro-project-window group block cursor-pointer text-left no-underline">
        <div className="retro-window-titlebar">
          <span>{study.title}</span>
          <span aria-hidden="true">CASE FILE</span>
          <WindowControls />
        </div>
        <div className="retro-project-layout grid min-w-0 items-start gap-5 lg:items-stretch lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-6">
          <div className={`retro-project-media relative aspect-[1.28/1] min-w-0 overflow-hidden rounded-xl bg-transparent sm:aspect-[1.45/1] lg:aspect-auto lg:h-full lg:min-h-0 lg:self-stretch ${study.id === 'umbrella' ? 'lg:mb-14' : ''}`}>
            {study.id === 'design-system-icons' && study.heroVideo ? (
              <LazyVideo src={study.heroVideo} poster={study.heroImage || undefined} ariaLabel="Design system color palette preview" objectFit="contain" frameClassName="rounded-xl bg-[#f1f2f4] transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.02]" />
            ) : study.id === 'design-system-icons' ? (
              <div className="flex h-full w-full flex-col justify-center gap-5 rounded-xl border border-slate-200 bg-[#f1f2f4] p-5 sm:gap-7 sm:p-8" aria-label="Project preview coming soon">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Project preview</span>
                  <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[10px] font-medium text-slate-500">Color system</span>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {['Colors', 'Type', 'Spacing'].map((item, index) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
                      <span className="text-[10px] font-medium text-slate-500">{item}</span>
                      {index === 0 ? (
                        <div className="mt-3 flex gap-1">{['bg-slate-200', 'bg-slate-400', 'bg-slate-700', 'bg-slate-950'].map((color) => <span key={color} className={`h-5 flex-1 rounded-sm ${color}`} />)}</div>
                      ) : index === 1 ? (
                        <div className="mt-2 space-y-1.5"><div className="h-2 w-4/5 rounded bg-slate-300" /><div className="h-1.5 w-3/5 rounded bg-slate-200" /></div>
                      ) : (
                        <div className="mt-2 flex items-end gap-1"><div className="h-2 w-2 rounded-sm bg-slate-200" /><div className="h-3 w-3 rounded-sm bg-slate-300" /><div className="h-5 w-5 rounded-sm bg-slate-400" /></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white">Button</span>
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-slate-300 bg-white"><span className="h-3.5 w-3.5 rounded-full border-2 border-slate-500" /></span>
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-slate-300 bg-white"><span className="h-3.5 w-3.5 rotate-45 border border-slate-500" /></span>
                  <span className="text-xs text-slate-500">Components & icon set</span>
                </div>
              </div>
            ) : study.id === 'umbrella' ? (
              <img
                src="/projects/umbrella-third-party-form.png"
                alt="Umbrella add a new third party form preview"
                loading="lazy"
                className="h-full w-full rounded-xl object-contain transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.02]"
              />
            ) : study.heroVideo ? (
              <LazyVideo src={study.heroVideo} poster={study.heroImage} ariaLabel={`${study.title} project preview`} objectFit="contain" frameClassName="bg-transparent transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.02] rounded-xl" />
            ) : (
              <img src={study.heroImage} alt={`${study.title} project preview`} referrerPolicy="no-referrer" loading="lazy" className="h-full w-full object-contain rounded-xl transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.02]" />
            )}
          </div>
          <motion.div
            className="retro-project-copy min-w-0"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
          >
            <motion.p variants={appearTextVariants} className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600">{study.category}</motion.p>
            <motion.h3 variants={appearTextVariants} className="max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-slate-950 transition-colors duration-300 group-hover:text-slate-700 sm:text-5xl lg:text-[clamp(2.25rem,3.1vw,3.35rem)]">{story.headline}</motion.h3>
            <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
              {([['The person', story.person], ['The decision', story.decision], ['What shipped', story.shipped]] as const).map(([label, copy]) => (
                <motion.div key={label} variants={appearTextVariants} className="grid min-w-0 gap-2 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.11em] text-slate-600">{label}</span>
                  <p className="min-w-0 text-sm font-medium leading-[1.45] text-slate-700">{copy}</p>
                </motion.div>
              ))}
            </div>
            <motion.span variants={appearTextVariants} className="mt-4 inline-flex items-center gap-2 border-b border-slate-400 pb-1.5 text-sm font-bold text-slate-900 transition-all duration-300 group-hover:gap-3 group-hover:border-slate-500 group-hover:text-slate-700 motion-reduce:transition-none">View<ArrowRight className="h-4 w-4" aria-hidden="true" /></motion.span>
          </motion.div>
        </div>
      </a>
    );
  }
  return (
    <a
      href={`/case-studies/${study.id}`}
      onClick={handleSelect}
      style={isStacked ? { '--stack-offset': `${stackPosition * 44}px`, zIndex: stackPosition + 1 } as React.CSSProperties : undefined}
      aria-label={`Read the ${study.title} case study`}
      className={`${isStacked ? 'project-stack-card ' : ''}group cursor-pointer bg-white ${compactCorners ? 'rounded-xl' : 'rounded-3xl'} border border-slate-200/80 hover:border-slate-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col lg:flex-row overflow-hidden items-stretch no-underline ${study.heroVideo || ['umbrella', 'maxlence', 'naie'].includes(study.id) ? 'lg:h-auto lg:max-h-none' : 'lg:h-[min(80vh,540px)] lg:max-h-[80vh]'}`}
    >
      <div className="w-full lg:w-7/12 bg-gradient-to-b from-[#f8f9fb] to-[#edf0f5] p-4 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-slate-200/70 relative overflow-hidden flex flex-col items-center justify-center shrink-0 lg:h-full">
        <div className="relative z-20 mb-4 flex w-full shrink-0 items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-700 shadow-2xs border border-slate-200/70 backdrop-blur-xs">
            {study.id === 'bridge2business'
              ? 'Redesign Proposal'
              : study.status || 'Case Study'}
          </span>
        </div>

        <div className={`w-full ${study.heroVideo ? '' : 'min-h-[220px] sm:min-h-[280px]'} flex items-center justify-center relative p-1 sm:p-2`}>
          {study.heroVideo ? (
            <div className={`w-full max-w-full max-h-[300px] sm:max-h-[360px] lg:max-h-[380px] aspect-video overflow-hidden ${compactCorners ? 'rounded-xl' : 'rounded-[20px] sm:rounded-[28px]'}`}>
              <LazyVideo
                src={study.heroVideo}
                poster={study.heroImage}
                ariaLabel={`${study.title} preview`}
                objectFit="contain"
                frameClassName={`${compactCorners ? 'rounded-xl' : 'rounded-[20px] sm:rounded-[28px]'} shadow-sm sm:shadow-md border border-slate-200/80 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300`}
              />
            </div>
          ) : (
            <img
              src={study.heroImage}
              alt={study.title}
              referrerPolicy="no-referrer"
              className={`max-w-full max-h-[300px] sm:max-h-[360px] lg:max-h-[380px] w-auto h-auto object-contain ${compactCorners ? 'rounded-xl' : 'rounded-[20px] sm:rounded-[28px]'} shadow-sm sm:shadow-md border border-slate-200/80 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300`}
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

const appearTextVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
