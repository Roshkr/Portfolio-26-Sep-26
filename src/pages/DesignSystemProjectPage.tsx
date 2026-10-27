import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { CaseStudy, SelectCaseStudy } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { LazyVideo } from '../components/PhoneMockup';

interface DesignSystemProjectPageProps {
  onBack: () => void;
  nextStudy?: CaseStudy | null;
  onSelectCaseStudy?: SelectCaseStudy;
}

const projectFacts = [
  ['My role', 'UX Designer'],
  ['In collaboration', 'Design manager and development team'],
  ['Timeframe', '2 months'],
  ['Focus', 'Design systems · Components · Iconography'],
];

const approachItems = [
  ['01', 'Foundations', 'Set shared color, type, spacing, and hierarchy rules so common decisions stay consistent across screens and teams. Keep tokens legible and adaptable as product needs grow.'],
  ['02', 'Components', 'Build repeatable controls and patterns around real interface needs, with clear states for default, focus, error, disabled, and success. Document when to reuse a pattern and when a new one is justified.'],
  ['03', 'Iconography', 'Use a coherent visual weight, grid, and metaphor style. Prefer familiar, purposeful symbols; pair icons with labels when meaning is ambiguous, and avoid decoration that competes with task information.'],
];

const outcomeItems = [
  ['Reusable patterns', 'Shared foundations, interface components, state guidance, and icon rules give recurring product needs a dependable starting point.'],
  ['Less design debt', 'Teams can extend established patterns instead of recreating controls and resolving visual inconsistencies screen by screen.'],
  ['Designed to evolve', 'A system is useful when it supports change: document decisions, review exceptions, and refine components as product workflows reveal new needs.'],
];

const SectionReveal: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({
  id,
  className = '',
  children,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

const MediaPlaceholder: React.FC<{ label: string; className?: string }> = ({ label, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative grid aspect-[16/9] place-items-center overflow-hidden rounded-2xl border border-slate-200 bg-[#eef0f3] ${className}`}
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#cbd0d8_0.7px,transparent_0.7px)] [background-size:16px_16px] opacity-50" />
      <div className="relative mx-5 text-center">
        <div className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-xl border border-slate-300 bg-white text-slate-500" aria-hidden="true">
          <span className="text-xl leading-none">+</span>
        </div>
        <p className="text-sm font-medium text-slate-700">{label}</p>
        <p className="mt-1 text-xs text-slate-400">Project visual to be added</p>
      </div>
    </motion.div>
  );
};

export const DesignSystemProjectPage: React.FC<DesignSystemProjectPageProps> = ({ onBack, nextStudy, onSelectCaseStudy }) => (
  <div id="top" className="case-study-page w-full bg-[#fbfbfb] text-slate-950">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back
      </button>
      <span className="text-xs font-medium text-slate-400">Selected work / Design systems</span>
    </div>

    <header className="mx-auto max-w-6xl px-6 pb-12 pt-14 md:px-10 md:pb-16 md:pt-20">
      <div className="max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Design systems / Components / Iconography</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl md:text-8xl">
          Design system, components &amp; icons
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl">
          A practical foundation for consistent product interfaces: reusable components, clear usage rules, and an icon family that supports fast, confident scanning.
        </p>
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-6 border-y border-slate-200 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {projectFacts.map(([label, value]) => (
          <div key={label}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{label}</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{value}</p>
          </div>
        ))}
      </div>
    </header>

    <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-24">
      <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-[#eef0f3]">
        <LazyVideo src="/projects/color-system.mp4" ariaLabel="Color system design walkthrough" objectFit="contain" frameClassName="rounded-2xl bg-[#eef0f3]" />
      </div>
      <p className="mt-3 text-xs text-slate-400">Color system walkthrough</p>
    </section>

    <SectionReveal id="challenge" className="border-y border-slate-200 bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
        <div className="project-section-sticky">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">The challenge</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">One clear language for components and icons.</h2>
        </div>
        <div className="space-y-6">
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            I created a design system for the entire platform so its screens and workflows could stay visually consistent. I collaborated with the design manager and development team to define shared foundations and reusable patterns that fit the platform’s needs.
          </p>
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img
          src="/projects/design-system-components.png"
          alt="Design system component library showing radio buttons, checkboxes, switches, form fields, dropdowns, calendars, and button states."
          loading="lazy"
          className="block h-auto w-full"
        />
      </figure>
        </div>
      </div>
    </SectionReveal>

    <SectionReveal id="approach" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div className="project-section-sticky">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">The approach</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Build the foundations, then make them usable.</h2>
        </div>
        <div>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Over two months, I worked with the design manager and development team to establish the system’s foundations, reusable components, and icon rules. The shared color, type, spacing, hierarchy, and component states give the full platform a consistent visual language while supporting its different workflows.
          </p>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {approachItems.map(([number, title, description]) => (
              <article key={number} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                <span className="text-xs font-medium text-slate-400">{number}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <figure className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img
          src="/projects/design-system-icon-legend.png"
          alt="Design system icon library with product icons and descriptions for their use across the platform."
          loading="lazy"
          className="block h-auto w-full"
        />
      </figure>
    </SectionReveal>

    <SectionReveal id="what-changed" className="border-y border-slate-200 bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
        <div className="project-section-sticky">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">What changed</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">A shared foundation for consistent product work.</h2>
        </div>
        <div className="space-y-5">
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            The system brings the platform’s visual and interaction patterns into one consistent foundation. Reusable components and documented states give designers and developers a shared reference as they work on product-specific needs.
          </p>
              <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-[#eef0f3]">
            <LazyVideo
              src="/projects/design-system-in-context.mp4"
              ariaLabel="Design system applied across the platform"
              objectFit="contain"
              frameClassName="rounded-2xl bg-[#eef0f3]"
            />
          </div>
        </div>
      </div>
    </SectionReveal>

    <SectionReveal id="outcomes" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div className="project-section-sticky">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Outcomes</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">What the system made reusable.</h2>
        </div>
        <div>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            The platform-wide system gives the design and development teams a consistent starting point for product work. Shared foundations and reusable components reduce the need to redefine patterns from one area of the platform to another.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {outcomeItems.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                <h3 className="font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>

    <SectionReveal id="next" className="border-t border-slate-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">What’s next</p>
            <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">A system designed to keep evolving.</h2>
          </div>
          <div className="space-y-6">
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              As products and constraints change, review patterns against real usage, retire redundant variants, and document new decisions where teams need them. Visual examples can show how the same foundations support different workflows without flattening their differences.
            </p>
            <div className="rounded-2xl bg-slate-950 p-7 text-white md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">The principle behind the work</p>
              <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">A useful system makes good design easier to repeat.</p>
            </div>
          </div>
        </div>
        <a href="#top" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
          Back to the top <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </SectionReveal>

    {nextStudy && onSelectCaseStudy && (
      <section className="border-t border-slate-200 bg-[#fbfbfb] py-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Next Project</span>
          <ProjectCard study={nextStudy} onSelectCaseStudy={onSelectCaseStudy} compactCorners transitionOnSelect />
        </div>
      </section>
    )}
  </div>
);
