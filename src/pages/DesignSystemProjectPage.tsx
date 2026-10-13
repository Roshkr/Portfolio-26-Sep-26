import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../types';
import { ProjectCard } from '../components/ProjectCard';

interface DesignSystemProjectPageProps {
  onBack: () => void;
  nextStudy?: CaseStudy | null;
  onSelectCaseStudy?: (study: CaseStudy) => void;
}

const projectFacts = [
  ['My role', 'Project details to be added'],
  ['In collaboration', 'Project details to be added'],
  ['Timeframe', 'Project details to be added'],
  ['Focus', 'Design systems · Components · Iconography'],
];

const approachItems = [
  ['01', 'Foundations', 'Color, typography, spacing, and the visual rules that hold the system together.'],
  ['02', 'Components', 'Reusable interface patterns, with their states and usage guidance.'],
  ['03', 'Iconography', 'A considered icon family designed to work as part of the wider system.'],
];

const outcomeItems = [
  ['What shipped', 'Project deliverables and implementation details will be added here.'],
  ['What changed', 'The observed effect on design and development workflows will be added here.'],
  ['What was learned', 'Evidence, limitations, and lessons from the work will be added here.'],
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
    <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-slate-200 px-6 py-5 md:px-10">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to projects
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
          A focused project exploring reusable interface components, a consistent design foundation, and a coherent icon family.
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
      <MediaPlaceholder label="Design system overview" className="aspect-[16/9]" />
      <p className="mt-3 text-xs text-slate-400">Design system overview</p>
    </section>

    <SectionReveal id="challenge" className="border-y border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">The challenge</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">One clear language for components and icons.</h2>
        </div>
        <div className="space-y-6">
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            This case study brings the design system, reusable components, and iconography work into one place. The project context and specific design challenge will be added as details become available.
          </p>
          <MediaPlaceholder label="Project context and challenge" className="aspect-[16/10]" />
        </div>
      </div>
    </SectionReveal>

    <SectionReveal id="approach" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">The approach</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Build the foundations, then make them usable.</h2>
        </div>
        <div>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            The work is organized around the core parts of a design system. Each area will show the decisions, examples, and guidance behind the finished work.
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
      <MediaPlaceholder label="Foundations, components, and iconography" className="mt-12 aspect-[16/8]" />
    </SectionReveal>

    <SectionReveal id="what-changed" className="border-y border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">What changed</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">A shared foundation for consistent product work.</h2>
        </div>
        <div className="space-y-5">
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            The project outcomes and examples of the system in use will be documented here. Specific results will be added when the supporting project details are available.
          </p>
          <MediaPlaceholder label="The system applied in context" className="aspect-[16/10]" />
        </div>
      </div>
    </SectionReveal>

    <SectionReveal id="outcomes" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Outcomes</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">What the system made reusable.</h2>
        </div>
        <div>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            The project’s shipped assets, adoption, and observed impact will be described here, with claims tied to the available evidence.
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

    <SectionReveal id="next" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">What’s next</p>
            <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">A system designed to keep evolving.</h2>
          </div>
          <div className="space-y-6">
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              The next step is to add the project decisions, visual examples, and outcomes so the full story is grounded in the work.
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
      <section className="border-t border-black/[0.04] bg-[#fbfbfb] py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Next Project</span>
          <ProjectCard study={nextStudy} onSelectCaseStudy={onSelectCaseStudy} compactCorners />
        </div>
      </section>
    )}
  </div>
);
