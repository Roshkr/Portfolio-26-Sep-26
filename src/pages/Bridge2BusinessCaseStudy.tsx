import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../types';
import { LazyVideo, ProjectMockup } from '../components/PhoneMockup';
import { ProjectCard } from '../components/ProjectCard';

interface Bridge2BusinessCaseStudyProps {
  caseStudy: CaseStudy;
  nextStudy: CaseStudy | null;
  onBack: () => void;
  onSelectCaseStudy?: (caseStudy: CaseStudy) => void;
}

const eyebrowClass =
  'text-xs font-semibold uppercase tracking-[0.18em] text-[#2b35ee]';

export const Bridge2BusinessCaseStudy: React.FC<Bridge2BusinessCaseStudyProps> = ({
  caseStudy,
  nextStudy,
  onBack,
  onSelectCaseStudy,
}) => {
  const clientProblem = caseStudy.storySections?.[0];
  const approach = caseStudy.storySections?.[1];
  const research = caseStudy.storySections?.[2];
  const concept = caseStudy.storySections?.[3];
  const reflection = caseStudy.storySections?.[4];
  const articleRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const article = articleRef.current;
        if (!article) return;

        const articleTop = article.getBoundingClientRect().top + window.scrollY;
        const scrollableDistance = article.offsetHeight - window.innerHeight;
        const progress = scrollableDistance <= 0
          ? 100
          : ((window.scrollY - articleTop) / scrollableDistance) * 100;

        setScrollProgress(Math.min(100, Math.max(0, progress)));
      });
    };

    const article = articleRef.current;
    const resizeObserver = article ? new ResizeObserver(updateProgress) : null;

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    if (article && resizeObserver) resizeObserver.observe(article);
    updateProgress();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <article ref={articleRef} className="w-full bg-[#fbfbfb] text-slate-950">
      <div
        className="fixed left-0 top-0 z-50 h-1 w-full bg-slate-950/10"
        role="progressbar"
        aria-label="Case study reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuetext={`${Math.round(scrollProgress)}% of case study read`}
      >
        <div
          className="h-full bg-[#2b35ee]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <button
          onClick={onBack}
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to projects</span>
        </button>
        {caseStudy.status && (
          <span className="rounded-full bg-[#eef0f3] px-3 py-1 text-xs font-medium text-slate-600">
            {caseStudy.id === 'bridge2business' ? 'Redesign Proposal' : caseStudy.status}
          </span>
        )}
      </div>

      <header className="bg-[#eef0f3] text-slate-950">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-10 md:pb-16 md:pt-16">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-slate-500">{caseStudy.category}</p>
            <h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-6xl md:text-8xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl">
              {caseStudy.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {caseStudy.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {caseStudy.heroVideo && (
            <figure className="mt-12 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 md:mt-16">
              <div className="aspect-[16/9]">
                <LazyVideo
                  src={caseStudy.heroVideo}
                  poster={caseStudy.heroImage}
                  ariaLabel={`${caseStudy.title} website redesign preview`}
                  objectFit="contain"
                  frameClassName="h-full w-full bg-[#e2e4e8]"
                />
              </div>
            </figure>
          )}
        </div>
      </header>

      <section className="border-b border-black/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-12 md:gap-16 md:py-20">
          <div className="md:col-span-4">
            <p className={eyebrowClass}>The project</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              Make a complex offer easier to understand.
            </h2>
          </div>
          <div className="space-y-8 md:col-span-8">
            <p className="whitespace-pre-line text-lg leading-relaxed text-slate-600 md:text-xl">
              {caseStudy.overview}
            </p>
            {caseStudy.projectDetails && (
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-black/10 pt-6 sm:grid-cols-3">
                {caseStudy.projectDetails.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-xs uppercase tracking-wider text-slate-400">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium leading-relaxed text-slate-800">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className={eyebrowClass}>The challenge</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              {clientProblem?.title ?? 'A clearer story for a complex business'}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
              {clientProblem?.body}
            </p>
            <p className="mt-8 max-w-3xl text-2xl font-medium leading-snug tracking-tight text-slate-950 md:text-3xl">
              The goal was to help prospective clients quickly understand the offer, trust the business, and know what to do next.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f1f4] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className={eyebrowClass}>Listen before redesigning</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
              Clarity, credibility, and speed shaped the experience.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              {caseStudy.interviewsText}
            </p>
            {research?.body && (
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {research.body}
              </p>
            )}
          </div>

          <div className="mt-10 grid gap-8 border-y border-black/10 py-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Questions that guided discovery</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 md:text-base">
                {caseStudy.interviewBullets.map((bullet) => (
                  <li key={bullet} className="border-t border-black/10 pt-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            {research?.bullets && (
              <div>
                <h3 className="text-sm font-semibold text-slate-900">What the research pointed to</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {research.bullets.map((bullet) => (
                    <li key={bullet} className="border-t border-black/10 pt-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {caseStudy.keyInsights.map((insight) => (
              <article key={insight.title} className="rounded-2xl bg-white p-6 md:p-7">
                <h3 className="text-sm font-semibold text-slate-950">{insight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{insight.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className={eyebrowClass}>Before and after</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
              From hard to scan to easier to explore.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-500 md:text-base">
            The redesign replaces the legacy experience with a more structured presentation of services and proof.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              image: caseStudy.beforeScreen,
              label: caseStudy.beforeLabel ?? 'Before',
              device: caseStudy.beforeDevice,
            },
            {
              image: caseStudy.afterScreen,
              label: caseStudy.afterLabel ?? 'After',
              device: caseStudy.afterDevice,
            },
          ].map((screen) => (
            <figure key={screen.label}>
              <div className="rounded-2xl bg-[#eef0f3] p-4 sm:p-7 md:p-9">
                <ProjectMockup
                  imageSrc={screen.image}
                  device={screen.device}
                  ariaLabel={`${screen.label} website design`}
                  className="mx-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm font-medium text-slate-700">
                {screen.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y border-black/[0.06] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className={eyebrowClass}>The design response</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                {concept?.title ?? 'A modular system for exploration'}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
                {caseStudy.designText}
              </p>
              {concept?.body && (
                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  {concept.body}
                </p>
              )}
            </div>
          </div>

          {approach?.bullets && (
            <div className="mt-12 border-t border-black/10 pt-8">
              <h3 className="text-sm font-semibold text-slate-900">What I did</h3>
              <ul className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {approach.bullets.map((bullet, index) => (
                  <li key={bullet} className="flex gap-4 border-b border-black/10 pb-4">
                    <span className="text-xs font-semibold text-[#2b35ee]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600 md:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {caseStudy.designBullets.map((bullet) => (
              <li key={bullet} className="rounded-xl bg-[#f4f5f7] p-5 text-sm leading-relaxed text-slate-700">
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {caseStudy.designScreens.map((screen, index) => (
              <figure key={screen.title} className={index === 0 && caseStudy.designScreens.length % 2 !== 0 ? 'md:col-span-2' : ''}>
                <div className="overflow-hidden rounded-2xl bg-[#eef0f3] p-4 sm:p-7 md:p-9">
                  <ProjectMockup
                    imageSrc={screen.image}
                    videoSrc={screen.videoSrc}
                    device={screen.device}
                    ariaLabel={screen.title}
                    className="mx-auto w-full"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className="text-sm font-semibold text-slate-900">{screen.title}</span>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{screen.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className={eyebrowClass}>Test and refine</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            Make the next step easier to find.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            {caseStudy.usabilityText}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { item: caseStudy.problem1, label: 'The friction' },
            { item: caseStudy.solution1, label: 'The response' },
          ].map(({ item, label }) => (
            <article key={item.title} className="overflow-hidden rounded-2xl bg-[#f0f1f4]">
              <div className="p-4 sm:p-7 md:p-9">
                <ProjectMockup
                  imageSrc={item.screen}
                  videoSrc={item.videoSrc}
                  device={item.device}
                  ariaLabel={item.title}
                  className="mx-auto w-full"
                />
              </div>
              <div className="bg-white p-6 md:p-7">
                <p className={eyebrowClass}>{label}</p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/[0.06] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className={eyebrowClass}>The finished experience</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
              A connected journey from first impression to inquiry.
            </h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {caseStudy.finalScreens.map((screen, index) => (
              <figure
                key={screen.title}
                className={index === caseStudy.finalScreens.length - 1 && caseStudy.finalScreens.length % 2 !== 0 ? 'md:col-span-2' : ''}
              >
                <div className="rounded-2xl bg-[#eef0f3] p-4 sm:p-7 md:p-9">
                  <ProjectMockup
                    imageSrc={screen.image}
                    videoSrc={screen.videoSrc}
                    device={screen.device}
                    ariaLabel={screen.title}
                    className="mx-auto w-full"
                  />
                </div>
                <figcaption className="mt-4 text-sm font-medium text-slate-700">
                  {screen.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0f3] py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">The outcome</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
                A clearer path from first visit to conversation.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-slate-600 md:text-xl">{caseStudy.impactText}</p>
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-slate-300 sm:grid-cols-3">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white p-6 md:p-7">
                    <p className="text-4xl font-medium tracking-tight text-slate-950 md:text-5xl">{metric.value}</p>
                    <p className="mt-3 text-sm font-medium text-slate-800">{metric.label}</p>
                    {metric.context && (
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">{metric.context}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-slate-300 pt-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">What I learned</p>
              {reflection?.body && (
                <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">{reflection.title}</h3>
              )}
              <ul className="mt-6 space-y-4">
                {caseStudy.learnings.map((learning) => (
                  <li key={learning} className="border-t border-slate-300 pt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {learning}
                  </li>
                ))}
              </ul>
              {reflection?.body && (
                <p className="mt-5 text-sm leading-relaxed text-slate-500">{reflection.body}</p>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">What comes next</p>
              <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">Build on the clearer foundation.</h3>
              <ul className="mt-6 space-y-4">
                {caseStudy.nextSteps.map((step) => (
                  <li key={step} className="border-t border-slate-300 pt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
            >
              Visit the live project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </section>

      {nextStudy && onSelectCaseStudy && (
        <section className="border-t border-black/[0.06] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className={eyebrowClass}>Next project</p>
            <div className="mt-5">
              <ProjectCard study={nextStudy} onSelectCaseStudy={onSelectCaseStudy} />
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
