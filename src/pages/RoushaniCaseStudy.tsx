import React from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types';
import { LazyVideo } from '../components/PhoneMockup';
import { ProjectCard } from '../components/ProjectCard';

interface RoushaniCaseStudyProps {
  caseStudy: CaseStudy;
  onBack: () => void;
  nextStudy?: CaseStudy | null;
  onSelectCaseStudy?: (study: CaseStudy) => void;
}

const projectFacts = (caseStudy: CaseStudy) => [
  { label: 'Role', value: caseStudy.role },
  { label: 'Team', value: caseStudy.team },
  { label: 'Timeline', value: caseStudy.timeline },
  { label: 'Platform', value: 'Mobile-first web app' },
];

export const RoushaniCaseStudy: React.FC<RoushaniCaseStudyProps> = ({
  caseStudy,
  onBack,
  nextStudy,
  onSelectCaseStudy,
}) => (
  <article className="w-full bg-[#fbfbfb] text-slate-950">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to work
      </button>
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        Case study / 01
      </span>
    </div>

    <header className="mx-auto max-w-6xl px-6 pb-12 pt-12 md:px-10 md:pb-16 md:pt-20">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b35ee]">
          {caseStudy.category}
        </span>
        <h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-8xl">
          {caseStudy.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl">
          {caseStudy.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {caseStudy.tags?.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-[#f2f3f6] p-3 shadow-[0_24px_80px_-44px_rgba(15,23,42,.35)] md:mt-16 md:rounded-[36px] md:p-6">
        {caseStudy.heroVideo ? (
          <div className="mx-auto aspect-video w-full max-w-6xl max-h-[720px]">
            <LazyVideo
              src={caseStudy.heroVideo}
              poster={caseStudy.heroImage}
              ariaLabel={`${caseStudy.title} product preview`}
              objectFit="contain"
              frameClassName="overflow-hidden rounded-2xl bg-white md:rounded-[28px]"
            />
          </div>
        ) : (
          <img src={caseStudy.heroImage} alt={`${caseStudy.title} product`} className="mx-auto max-h-[720px] w-full rounded-2xl object-contain md:rounded-[28px]" />
        )}
      </div>
    </header>

    <section id="about" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-12 md:px-10 md:py-20">
        <div className="md:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b35ee]">About the project</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">A calmer way to get paid.</h2>
        </div>
        <div className="md:col-span-8">
          <p className="whitespace-pre-line text-lg leading-relaxed text-slate-600 md:text-xl">{caseStudy.overview}</p>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-slate-200 pt-8 md:grid-cols-4">
            {projectFacts(caseStudy).map((fact) => (
              <div key={fact.label}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-400">{fact.label}</span>
                <p className="mt-2 text-sm leading-relaxed text-slate-800">{fact.value}</p>
              </div>
            ))}
          </div>
          {caseStudy.liveUrl && (
            <a href={caseStudy.liveUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2b35ee] hover:underline">
              View MVP <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b35ee]">The opportunity</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">Make invoicing feel less like admin.</h2>
        </div>
        <div className="space-y-6 md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-slate-600">{caseStudy.interviewsText}</p>
          <ul className="space-y-3">
            {caseStudy.interviewBullets.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2b35ee]" />{item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3">
        {caseStudy.keyInsights.map((insight, index) => (
          <div key={insight.title} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">0{index + 1} / {insight.title}</span>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">{insight.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {caseStudy.storySections?.slice(0, 4).map((section, index) => {
      const screen = caseStudy.designScreens[index % caseStudy.designScreens.length];
      return (
        <section key={section.title} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#f3f4f7]'} border-y border-slate-200/70`}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
            <div className={`${index % 2 === 1 ? 'md:order-2' : ''} space-y-5`}>
              {section.eyebrow && <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b35ee]">{section.eyebrow}</span>}
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">{section.title}</h2>
              {section.body && <p className="whitespace-pre-line text-base leading-relaxed text-slate-600 md:text-lg">{section.body}</p>}
              {section.bullets && <ul className="space-y-3 pt-1">{section.bullets.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700 md:text-base"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2b35ee]" />{item}</li>)}</ul>}
            </div>
            <figure className={`${index % 2 === 1 ? 'md:order-1' : ''} overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 md:rounded-[36px] md:p-5`}>
              {screen ? <img src={screen.image} alt={screen.title} loading="lazy" className="max-h-[560px] w-full rounded-2xl object-contain md:rounded-[26px]" /> : <div className="flex min-h-72 items-center justify-center rounded-2xl bg-slate-100 text-sm text-slate-400">Product screen placeholder</div>}
              {screen && <figcaption className="px-2 pb-1 pt-4 text-xs text-slate-500">{screen.note}</figcaption>}
            </figure>
          </div>
        </section>
      );
    })}

    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b35ee]">What changed</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">Less time making invoices. More time running a business.</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg leading-relaxed text-slate-600">{caseStudy.impactText}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl bg-[#eef0f3] p-6 md:p-7">
                <span className="text-3xl font-medium tracking-tight text-slate-950 md:text-4xl">{metric.value}</span>
                <p className="mt-3 text-sm font-semibold text-slate-700">{metric.label}</p>
                {metric.context && <p className="mt-2 text-xs leading-relaxed text-slate-500">{metric.context}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Looking back</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">What I learned</h2>
          <ul className="mt-7 space-y-4">{caseStudy.learnings.slice(0, 3).map((item) => <li key={item} className="border-t border-white/15 pt-4 text-sm leading-relaxed text-white/75">{item}</li>)}</ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Next on the roadmap</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">Where it goes next</h2>
          <ul className="mt-7 space-y-4">{caseStudy.nextSteps.slice(0, 3).map((item) => <li key={item} className="border-t border-white/15 pt-4 text-sm leading-relaxed text-white/75">{item}</li>)}</ul>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-8">
          <p className="text-xl font-medium md:text-2xl">Have a workflow that could feel this simple?</p>
          <a href={caseStudy.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100">
            Explore Roushani <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    {nextStudy && onSelectCaseStudy && (
      <section className="border-t border-black/[0.04] bg-[#fbfbfb] py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Next Project
          </span>
          <ProjectCard
            study={nextStudy}
            onSelectCaseStudy={onSelectCaseStudy}
          />
        </div>
      </section>
    )}
  </article>
);
