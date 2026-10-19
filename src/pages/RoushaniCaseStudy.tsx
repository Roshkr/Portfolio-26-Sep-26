import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import type { CaseStudy } from '../types';
import { LazyVideo } from '../components/PhoneMockup';
import { ProjectCard } from '../components/ProjectCard';
import { CharacterRevealText } from '../components/CharacterRevealText';
import { TradeoffsSection } from '../components/TradeoffsSection';

interface RoushaniCaseStudyProps {
  caseStudy: CaseStudy;
  onBack: () => void;
  nextStudy?: CaseStudy | null;
  onSelectCaseStudy?: (study: CaseStudy) => void;
}

const RevealSection: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = '', children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
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

export const RoushaniCaseStudy: React.FC<RoushaniCaseStudyProps> = ({
  caseStudy,
  onBack,
  nextStudy,
  onSelectCaseStudy,
}) => {
  const challenge = caseStudy.storySections?.find((section) => section.eyebrow === 'Problem statement');
  const approachSections = caseStudy.storySections?.filter((section) =>
    ['Business goals', 'Research insight', 'Core features', 'Accessibility'].includes(section.eyebrow ?? ''),
  ) ?? [];
  const reflection = caseStudy.storySections?.find((section) => section.eyebrow === 'Reflection');

  return (
    <article className="case-study-page w-full bg-[#fbfbfb] text-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to work
        </button>
        <span className="rounded-full bg-[#eef0f3] px-3 py-1 text-xs font-medium text-slate-600">
          {caseStudy.status || caseStudy.category}
        </span>
      </div>

      <header className="mx-auto max-w-6xl px-6 pb-12 pt-12 md:px-10 md:pb-16 md:pt-20">
        <div className="max-w-5xl">
          <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-8xl">
            {caseStudy.title}
          </h1>
          <HeroSubtitle text={caseStudy.subtitle} />
          <div className="mt-10 grid gap-x-8 gap-y-6 border-y border-slate-200 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'My role', value: caseStudy.role },
              { label: 'In collaboration', value: caseStudy.team },
              { label: 'Timeframe', value: caseStudy.timeline },
              { label: 'Focus', value: caseStudy.tags?.slice(0, 3).join(' · ') || 'Mobile-first web app' },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{fact.label}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <MediaFrame caseStudy={caseStudy} />
      </header>

      <RevealSection className="border-y border-slate-200 bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
          <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="The short version" title="Five lines. The full story follows." />
          </div>
          </div>
          <ol className="divide-y divide-slate-200">
            {[
              { label: 'Problem', text: 'Service businesses repeated invoice work in spreadsheets and outdated tools.' },
              { label: 'Approach', text: 'Research-led workflows, saved customer details, and simple branding controls.' },
              { label: 'What changed', text: 'Invoice creation became a faster, clearer workflow.' },
              { label: 'Outcomes', text: 'A live MVP with branded invoices, PDF export, and reusable customer and service details.' },
              { label: 'What I carry forward', text: 'Simplicity matters more than features.' },
            ].map(({ label, text }, index) => (
              <li key={label} className="grid gap-2 py-4 sm:grid-cols-[3rem_1fr] sm:gap-5">
                <span className="text-xs font-medium text-slate-400">0{index + 1}</span>
                <div className="text-sm leading-relaxed text-slate-600">
                  <p className="mb-1 inline-flex rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-900">{label}</p>
                  <div className="mt-1 text-sm leading-relaxed text-slate-600">
                    <CharacterRevealInline text={text} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="The challenge" title={challenge?.title || 'Why this product was needed'} />
          </div>
          <div className="space-y-6">
            {challenge?.body && <CharacterRevealBlock text={challenge.body} className="text-lg leading-relaxed text-slate-600 md:text-xl" />}
            <CharacterRevealBlock text={caseStudy.overview} className="text-base leading-relaxed text-slate-600 md:text-lg" />
            {challenge?.bullets?.length ? (
              <ul className="space-y-3">
                {challenge.bullets.map((item) => <RevealListItem key={item} text={item} />)}
              </ul>
            ) : null}
            <CharacterRevealBlock text={caseStudy.interviewsText} className="pt-2 text-base leading-relaxed text-slate-600 md:text-lg" />
            <div className="space-y-3">
              {caseStudy.interviewBullets.slice(0, 3).map((item) => <RevealListItem key={item} text={item} />)}
            </div>
            {caseStudy.keyInsights.length > 0 && (
              <div className="grid gap-3 pt-2">
                {caseStudy.keyInsights.map((insight, index) => (
                  <article key={insight.title} className="rounded-xl border border-slate-200 bg-[#fbfbfb] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">0{index + 1} / {insight.title}</p>
                    <CharacterRevealBlock text={insight.desc} className="mt-3 text-sm leading-relaxed text-slate-600" />
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="The approach" title="From research to a simpler workflow." />
          </div>
          <div>
            <CharacterRevealBlock text={caseStudy.designText} className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl" />
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {approachSections.map((section, index) => (
                <article key={section.eyebrow} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="text-xs font-medium text-slate-400">0{index + 1}</span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{section.eyebrow}</p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">{section.title}</h3>
                    {section.body && <CharacterRevealBlock text={section.body} className="mt-3 text-sm leading-relaxed text-slate-600" />}
                    {section.bullets?.length ? (
                      <ul className="mt-4 space-y-2">
                        {section.bullets.map((item) => <RevealListItem key={item} text={item} />)}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
              {caseStudy.designBullets.map((item, index) => (
                <article key={item} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="text-xs font-medium text-slate-400">{String(approachSections.length + index + 1).padStart(2, '0')}</span>
                  <div className="flex gap-3 text-sm leading-relaxed text-slate-700 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                    <CharacterRevealInline text={item} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <TradeoffsSection
        title="Keep the invoice job simple and credible."
        intro="The MVP had to make routine billing faster without turning into another accounting suite. I pushed back on scope that added setup or choice without helping users send a correct, professional invoice."
        items={[
          {
            title: 'A focused invoicing tool vs. a full accounting suite',
            decision: 'Kept the core around creating invoices, reusing customer and service details, and sharing a polished PDF. Advanced accounting and reporting stayed out of the MVP.',
            constraint: 'A four-week, 200-hour solo build and research that showed most advanced ledger features were unnecessary for the target users.',
          },
          {
            title: 'Professional branding vs. a page-builder burden',
            decision: 'Limited customization to a logo and a small set of color controls so non-designers could produce a credible invoice quickly.',
            constraint: 'The interface needed to stay approachable for service businesses already relying on spreadsheets or outdated tools.',
          },
          {
            title: 'Tax flexibility vs. fast, confident entry',
            decision: 'When stacked tax and currency inputs made users pause, I replaced the dense controls with preset choices, an inline toggle, and a live calculation summary.',
            constraint: 'The workflow needed to support different billing needs without hiding how totals were calculated; broader tax edge cases remain a validation priority.',
          },
        ]}
      />

      <RevealSection className="border-y border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="What changed" title="Less time making invoices. More time running a business." />
          </div>
          <div className="space-y-6">
            <CharacterRevealBlock text={caseStudy.impactText} className="text-lg leading-relaxed text-slate-600 md:text-xl" />
            <div className="grid gap-4">
              <BeforeAfterMedia label={caseStudy.beforeLabel || 'Before'} src={caseStudy.beforeScreen} />
              <BeforeAfterMedia label={caseStudy.afterLabel || 'After'} src={caseStudy.afterScreen} videoSrc={caseStudy.afterVideo} />
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="Outcomes" title="What changed after the work shipped." />
          </div>
          <div>
            <CharacterRevealBlock text={caseStudy.usabilityText} className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl" />
            <div className="grid gap-4">
              {caseStudy.metrics.map((metric) => (
                <article key={metric.label} className="rounded-xl bg-[#eef0f3] p-6 md:p-7">
                  <p className="text-3xl font-medium tracking-tight text-slate-950 md:text-4xl">{metric.value}</p>
                  <h3 className="mt-3 text-sm font-semibold text-slate-700">{metric.label}</h3>
                  {metric.context && <p className="mt-2 text-xs leading-relaxed text-slate-500">{metric.context}</p>}
                </article>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-slate-200 bg-[#eef0f3] py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-6 md:px-10">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="What’s next" title="Keep making the everyday feel easier." />
            {reflection?.body && <CharacterRevealBlock text={reflection.body} className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg" />}
          </div>
          <div className="border-t border-slate-300 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">The principle I carry forward</p>
            <CharacterRevealBlock text={caseStudy.learnings[0] || 'Simplicity matters more than features.'} className="mt-3 max-w-3xl text-xl font-medium leading-snug tracking-tight text-slate-900 md:text-2xl" />
          </div>
          <div className="border-t border-slate-300 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Next steps</p>
            <ul className="mt-4 max-w-3xl space-y-4">
              {caseStudy.nextSteps.slice(0, 3).map((item) => <RevealListItem key={item} text={item} />)}
            </ul>
            {caseStudy.liveUrl && (
              <a href={caseStudy.liveUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
                Explore Roushani <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </RevealSection>

      {nextStudy && onSelectCaseStudy && (
        <section className="border-t border-black/[0.04] bg-[#fbfbfb] py-16 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Next Project</span>
            <ProjectCard study={nextStudy} onSelectCaseStudy={onSelectCaseStudy} compactCorners />
          </div>
        </section>
      )}
    </article>
  );
};

const MediaFrame: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-[#f2f3f6] p-3 shadow-[0_24px_80px_-44px_rgba(15,23,42,.35)] md:mt-16 md:p-6">
    {caseStudy.heroVideo ? (
      <div className="mx-auto aspect-video w-full max-w-6xl max-h-[720px]">
        <LazyVideo
          src={caseStudy.heroVideo}
          poster={caseStudy.heroImage}
          ariaLabel={`${caseStudy.title} product preview`}
          objectFit="contain"
          frameClassName="overflow-hidden rounded-xl bg-white"
        />
      </div>
    ) : (
      <img src={caseStudy.heroImage} alt={`${caseStudy.title} product`} className="mx-auto max-h-[720px] w-full rounded-xl object-contain" />
    )}
  </div>
);

const SectionHeading: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{eyebrow}</p>
    <CharacterRevealHeading text={title} className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl" />
  </div>
);

const BeforeAfterMedia: React.FC<{ label: string; src: string; videoSrc?: string }> = ({ label, src, videoSrc }) => (
  <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
    {videoSrc ? (
      <div className="mx-auto aspect-[9/16] w-full max-w-[420px] rounded-[2.5rem] bg-black p-3 shadow-xl ring-1 ring-black/15 sm:p-4">
        <div className="h-full w-full overflow-hidden rounded-[2rem] bg-slate-950">
          <LazyVideo src={videoSrc} poster={src} ariaLabel={`${label} product demo`} objectFit="contain" frameClassName="bg-slate-950" />
        </div>
      </div>
    ) : (
      <img src={src} alt={label} loading="lazy" className="max-h-80 w-full rounded-lg object-contain" />
    )}
    <figcaption className="px-2 pb-1 pt-3 text-xs font-medium text-slate-500">{label}</figcaption>
  </figure>
);

const HeroSubtitle: React.FC<{ text: string }> = ({ text }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.p
      data-text-reveal
      className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl"
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

const CharacterRevealBlock: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`whitespace-pre-line ${className}`}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.004, delayChildren: 0.05 } } }}
    >
      <span className="sr-only">{text}</span>
      <CharacterRevealText text={text} />
    </motion.div>
  );
};

const RevealListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex gap-3 text-sm leading-relaxed text-slate-700 md:text-base">
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
    <CharacterRevealInline text={text} />
  </li>
);

const CharacterRevealInline: React.FC<{ text: string }> = ({ text }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      data-text-reveal
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.004, delayChildren: 0.05 } } }}
    >
      <span className="sr-only">{text}</span>
      <CharacterRevealText text={text} />
    </motion.span>
  );
};

const CharacterRevealHeading: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.h2
      data-text-reveal
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.004, delayChildren: 0.05 } } }}
    >
      <span className="sr-only">{text}</span>
      <CharacterRevealText text={text} />
    </motion.h2>
  );
};
