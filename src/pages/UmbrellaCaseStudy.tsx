import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import type { CaseStudy } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectMockup } from '../components/PhoneMockup';
import { CharacterRevealText } from '../components/CharacterRevealText';
import { TradeoffsSection } from '../components/TradeoffsSection';

interface UmbrellaCaseStudyProps {
  caseStudy: CaseStudy;
  onBack: () => void;
  nextStudy?: CaseStudy | null;
  onSelectCaseStudy?: (study: CaseStudy) => void;
}

export const UmbrellaCaseStudy: React.FC<UmbrellaCaseStudyProps> = ({
  caseStudy,
  onBack,
  nextStudy,
  onSelectCaseStudy,
}) => {
  const problem = caseStudy.storySections?.find((section) => section.eyebrow === 'Problem');
  const research = caseStudy.storySections?.find((section) => section.eyebrow === 'Research process');
  const feedback = caseStudy.storySections?.find((section) => section.eyebrow === 'Participant feedback');
  const reflection = caseStudy.storySections?.find((section) => section.eyebrow === 'Reflection');

  const summary = [
    { label: 'Problem', text: problem?.body ?? caseStudy.overview.split('\n\n')[0] },
    { label: 'Research', text: caseStudy.interviewsText },
    { label: 'What changed', text: caseStudy.designText },
    { label: 'Outcome', text: caseStudy.impactText },
    { label: 'What I learned', text: reflection?.body ?? caseStudy.learnings[0] },
  ];

  return (
    <article className="case-study-page w-full bg-[#fbfbfb] text-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <span className="rounded-full bg-[#eef0f3] px-3 py-1 text-xs font-medium text-slate-600">{caseStudy.status || caseStudy.category}</span>
      </div>

      <header className="mx-auto max-w-6xl px-6 pb-12 pt-12 md:px-10 md:pb-16 md:pt-20">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{caseStudy.category}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-8xl">{caseStudy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl">{caseStudy.subtitle}</p>
          <div className="mt-10 grid gap-x-8 gap-y-6 border-y border-slate-200 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'My role', value: caseStudy.role },
              { label: 'In collaboration', value: caseStudy.team },
              { label: 'Timeframe', value: caseStudy.timeline },
              { label: 'Focus', value: caseStudy.tags?.slice(0, 3).join(' · ') || caseStudy.category },
            ].map((fact) => <div key={fact.label}><p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{fact.label}</p><p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{fact.value}</p></div>)}
          </div>
        </div>
        <figure className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-[#f2f3f6] p-3 shadow-[0_24px_80px_-44px_rgba(15,23,42,.35)] md:mt-16 md:p-6">
          <img src={caseStudy.heroImage} alt={`${caseStudy.title} onboarding form`} className="mx-auto max-h-[720px] w-full rounded-xl object-contain" />
        </figure>
      </header>

      <section className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
          <div className="roushani-summary-sticky"><SectionHeading eyebrow="The short version" title="A clearer path through third-party onboarding." /></div>
          <ol className="divide-y divide-slate-200">
            {summary.map(({ label, text }, index) => <li key={label} className="grid gap-2 py-4 sm:grid-cols-[3rem_1fr] sm:gap-5"><span className="text-xs font-medium text-slate-400">0{index + 1}</span><div className="text-sm leading-relaxed text-slate-600"><p className="mb-1 inline-flex rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-900">{label}</p><p className="mt-1">{text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
          <div className="roushani-summary-sticky"><SectionHeading eyebrow="The challenge" title={problem?.title ?? 'A fragmented onboarding experience'} /></div>
          <div className="space-y-6"><p className="text-lg leading-relaxed text-slate-600 md:text-xl">{problem?.body}</p><p className="whitespace-pre-line text-base leading-relaxed text-slate-600 md:text-lg">{caseStudy.overview}</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div className="roushani-summary-sticky"><SectionHeading eyebrow="Research & feedback" title={research?.title ?? 'Testing the moments where users hesitated'} /></div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl">{caseStudy.interviewsText}</p>
            <ul className="space-y-3">{caseStudy.interviewBullets.map((item) => <Bullet key={item} text={item} />)}</ul>
            <div className="grid gap-3 pt-2">{caseStudy.keyInsights.map((insight) => <article key={insight.title} className="rounded-xl border border-slate-200 bg-white p-5"><RevealCopy text={insight.title} className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500" /><RevealCopy text={insight.desc} className="mt-3 text-sm leading-relaxed text-slate-600" /></article>)}</div>
            {research?.bullets?.length ? <ul className="space-y-3 border-t border-slate-200 pt-5">{research.bullets.map((item) => <Bullet key={item} text={item} />)}</ul> : null}
            {feedback && <div className="border-t border-slate-200 pt-5"><h3 className="text-lg font-semibold tracking-tight">{feedback.title}</h3><ul className="mt-4 space-y-3">{feedback.bullets?.map((item) => <Bullet key={item} text={item} />)}</ul></div>}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div className="roushani-summary-sticky"><SectionHeading eyebrow="The approach" title="Map, test, and refine the onboarding flow." /></div>
          <div><p className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl">{caseStudy.designText}</p><div className="divide-y divide-slate-200 border-y border-slate-200">{caseStudy.designBullets.map((item, index) => <div key={item} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"><span className="text-xs font-medium text-slate-400">0{index + 1}</span><p className="text-sm leading-relaxed text-slate-700 md:text-base">{item}</p></div>)}</div><div className="mt-10 grid gap-5">{caseStudy.designScreens.map((screen) => <figure key={screen.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3">{screen.fit === 'natural' ? <img src={screen.image} alt={screen.title} className="block h-auto w-full rounded-lg" loading="lazy" /> : <ProjectMockup imageSrc={screen.image} device={screen.device || 'desktop'} ariaLabel={screen.title} className="mx-auto w-full" />}<figcaption className="px-2 pb-1 pt-3"><span className="text-sm font-semibold text-slate-900">{screen.title}</span><p className="mt-1 text-sm text-slate-500">{screen.note}</p></figcaption></figure>)}</div></div>
        </div>
      </section>

      <TradeoffsSection
        title="Reduce friction without breaking the enterprise workflow."
        intro="Participant feedback called for fewer fields, but the product still had to collect information required by the business. I pushed back on shortening the form before validating which fields were genuinely optional."
        items={[
          {
            title: 'Fewer fields vs. complete third-party records',
            decision: 'Kept the required information in place and improved grouping, company and individual paths, and required-field cues so users could understand the form more easily.',
            constraint: 'The information supported an established enterprise onboarding process; field removal needed review with business and compliance owners.',
          },
          {
            title: 'A clearer experience vs. a full platform rebuild',
            decision: 'Focused the redesign on hierarchy, row relationships, and visual consistency within the current product, then documented the implemented changes with the development team.',
            constraint: 'The work had to fit the existing enterprise system and its implementation context.',
          },
          {
            title: 'Label comprehension vs. overall usability',
            decision: 'The five participants understood the field labels, yet still rated the experience 3.5 out of 5. I prioritized scan order and grouping over rewriting labels that users already understood.',
            constraint: 'The research sample was small; completion time, error rate, and any field reduction still need validation after implementation.',
          },
        ]}
      />

      <section className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
          <div className="roushani-summary-sticky"><SectionHeading eyebrow="What changed" title="A more organized onboarding form." /></div>
          <div className="space-y-6"><p className="text-lg leading-relaxed text-slate-600 md:text-xl">{caseStudy.impactText}</p><figure className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3"><img src="/projects/umbrella-changes.png" alt="Form improvements: clearer tab and checkbox identification, required field markers, consistent dropdowns, icons, typography, input fields, and button placement." loading="lazy" className="block h-auto w-full rounded-lg" /></figure></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div className="roushani-summary-sticky"><SectionHeading eyebrow="Outcomes" title="What the research and redesign clarified." /></div>
          <div><p className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl">{caseStudy.usabilityText}</p><div className="grid gap-4">{caseStudy.metrics.map((metric) => <article key={metric.label} className="rounded-xl bg-[#eef0f3] p-6 md:p-7"><p className="text-3xl font-medium tracking-tight text-slate-950 md:text-4xl">{metric.value}</p><h3 className="mt-3 text-sm font-semibold text-slate-700">{metric.label}</h3>{metric.context && <p className="mt-2 text-xs leading-relaxed text-slate-500">{metric.context}</p>}</article>)}</div></div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#eef0f3] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="max-w-3xl"><SectionHeading eyebrow="Reflection" title={reflection?.title ?? 'Keep detailed forms focused'} /><p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">{reflection?.body}</p></div>
          <div className="mt-10 grid gap-8 border-t border-slate-300 pt-6 md:grid-cols-2 md:gap-12">
            <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">What I learned</p><ul className="mt-4 space-y-4">{caseStudy.learnings.map((item) => <Bullet key={item} text={item} />)}</ul></div>
            <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Next steps</p><ul className="mt-4 space-y-4">{caseStudy.nextSteps.map((item) => <Bullet key={item} text={item} />)}</ul></div>
          </div>
        </div>
      </section>

      {nextStudy && onSelectCaseStudy && <section className="border-t border-black/[0.04] bg-[#fbfbfb] py-12 md:py-16"><div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Next Project</span><ProjectCard study={nextStudy} onSelectCaseStudy={onSelectCaseStudy} compactCorners /></div></section>}
    </article>
  );
};

const SectionHeading: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{eyebrow}</p><h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">{title}</h2></div>;
const Bullet: React.FC<{ text: string }> = ({ text }) => <li className="flex gap-3 text-sm leading-relaxed text-slate-700 md:text-base"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />{text}</li>;
const RevealCopy: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.p
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.004, delayChildren: 0.05 } } }}
    >
      <span className="sr-only">{text}</span>
      <CharacterRevealText text={text} />
    </motion.p>
  );
};
