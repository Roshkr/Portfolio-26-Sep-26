import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface DesignSystemProjectPageProps {
  onBack: () => void;
}

const projectSections = [
  { number: '01', title: 'The challenge', id: 'challenge' },
  { number: '02', title: 'The approach', id: 'approach' },
  { number: '03', title: 'The system', id: 'system' },
  { number: '04', title: 'Components & icons', id: 'components' },
  { number: '05', title: 'Evidence & outcomes', id: 'outcome' },
  { number: '06', title: "What's next", id: 'next' },
];

const galleryChapters = [
  { id: 'foundations', label: 'Foundations', title: 'The foundations behind the system' },
  { id: 'components', label: 'Components', title: 'Reusable components and their states' },
  { id: 'icons', label: 'Iconography', title: 'A coherent icon family' },
  { id: 'product', label: 'In a product', title: 'The system applied in context' },
];

const ContentPlaceholder: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 md:p-8 ${className}`}>
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Content to be added</p>
    <div className="mt-4 space-y-2" aria-hidden="true">
      <div className="h-2 w-full max-w-lg rounded-full bg-slate-200" />
      <div className="h-2 w-11/12 max-w-md rounded-full bg-slate-200" />
      <div className="h-2 w-3/4 max-w-sm rounded-full bg-slate-200" />
    </div>
  </div>
);

const MediaPlaceholder: React.FC<{ label: string; className?: string }> = ({ label, className = '' }) => (
  <div className={`relative grid aspect-[16/10] place-items-center overflow-hidden rounded-xl border border-slate-200 bg-[#eef0f3] ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(#cbd0d8_0.7px,transparent_0.7px)] [background-size:16px_16px] opacity-50" />
    <div className="relative mx-5 text-center">
      <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-xl border border-slate-300 bg-white text-slate-500">
        <span className="text-lg leading-none">+</span>
      </div>
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className="mt-1 text-xs text-slate-400">Image or video can be added here</p>
    </div>
  </div>
);

const scrollToProjectSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const DesignSystemProjectPage: React.FC<DesignSystemProjectPageProps> = ({ onBack }) => {
  const [activeGalleryChapter, setActiveGalleryChapter] = useState(galleryChapters[0].id);
  const activeChapter = galleryChapters.find((chapter) => chapter.id === activeGalleryChapter) ?? galleryChapters[0];

  return (
  <div id="top" className="case-study-page w-full bg-[#fbfbfb] text-slate-950">
    <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-black/[0.06] px-6 py-5">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to projects
      </button>
      <span className="text-xs font-medium text-slate-400">Selected work / Design systems</span>
    </div>

    <header className="mx-auto max-w-6xl px-6 pb-14 pt-14 md:pb-20 md:pt-20">
      <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Design systems / Components / Iconography</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl md:text-7xl">
          Design system, components & icons
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
          A project space for the design system, reusable components, and icon work. The project story and visual examples are being prepared.
        </p>
      </div>

      <div className="mt-10 grid gap-6 border-y border-slate-200 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['My role', 'To be added'],
          ['In collaboration', 'To be added'],
          ['Timeframe', 'To be added'],
          ['Focus', 'Design system / Components / Icons'],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{label}</p>
            <p className="mt-2 text-sm font-medium text-slate-800">{value}</p>
          </div>
        ))}
      </div>
    </header>

    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <MediaPlaceholder label="Project overview visual" className="aspect-[16/9]" />
      <p className="mt-3 text-xs text-slate-400">Project overview / image or video to be added</p>
    </section>

    <section className="border-y border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">The design logic</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">A closer look at the work</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">A short account of the key design decision and the reasoning behind it will go here.</p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {[
            ['01', 'Foundations', 'The visual foundations and rules that define the system. Project-specific details to be added.'],
            ['02', 'Components', 'Reusable interface pieces, patterns, and their documented states. Examples to be added.'],
            ['03', 'Iconography', 'The approach to a consistent icon family and its use across the product. Details to be added.'],
          ].map(([number, title, description]) => (
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
    </section>

    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-col gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">A closer look</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Inside the design system</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-slate-500">Explore the main parts of the work. Screens and project-specific notes can be added to each view.</p>
      </div>
      <div className="flex flex-wrap gap-2 py-6" role="group" aria-label="Design system gallery views">
        {galleryChapters.map((chapter) => (
          <button
            key={chapter.id}
            type="button"
            aria-pressed={activeGalleryChapter === chapter.id}
            onClick={() => setActiveGalleryChapter(chapter.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${activeGalleryChapter === chapter.id ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-950'}`}
          >
            {chapter.label}
          </button>
        ))}
      </div>
      <div aria-label={activeChapter.label} aria-live="polite" className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{activeChapter.label}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{activeChapter.title}</h3>
          <div className="mt-5"><ContentPlaceholder /></div>
        </div>
        <MediaPlaceholder label={`${activeChapter.label} image or video`} className="aspect-[16/10]" />
      </div>
      <p className="mt-3 text-right text-xs text-slate-400">Gallery media / to be added</p>
    </section>

    <div className="border-t border-slate-200 bg-white">
    <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[13rem_1fr] md:gap-20 md:py-24">
      <nav aria-label="Project sections" className="h-fit md:sticky md:top-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Inside the project</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-3">
          {projectSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} onClick={(event) => scrollToProjectSection(event, section.id)} className="text-sm text-slate-500 transition-colors hover:text-slate-950">
              <span className="mr-2 text-xs text-slate-400">{section.number}</span>{section.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="space-y-20 md:space-y-28">
        <section id="challenge" className="scroll-mt-28 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">The challenge</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">The context, constraints, and opportunity.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">Set up the problem this system needed to solve and who it was designed to support.</p>
          <ContentPlaceholder />
        </section>

        <section id="approach" className="scroll-mt-28 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">The approach</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">From principles to a system people can use.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">Describe the process, key decisions, and how the system was validated with its users.</p>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {[
              ['01', 'Understand the need', 'Research inputs, constraints, and goals to be added.'],
              ['02', 'Define the foundations', 'The system principles and visual foundations to be added.'],
              ['03', 'Build and refine', 'How components and icons were created, tested, and refined to be added.'],
            ].map(([number, title, description]) => (
              <article key={number} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
                <span className="text-xs font-medium text-slate-400">{number}</span>
                <div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="system" className="scroll-mt-28 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">The system</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">A shared foundation for consistent product experiences.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">Show the system structure, principles, tokens, and guidance. The specific content will be added later.</p>
          <ContentPlaceholder />
          <MediaPlaceholder label="Design tokens and foundations" />
          <div className="grid gap-4 sm:grid-cols-3">
            {['Foundations', 'Patterns', 'Guidance'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-[#f7f8f9] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">System layer</p>
                <h3 className="mt-3 font-semibold">{item}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">Details and examples to be added.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="components" className="scroll-mt-28 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Components & icons</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">The components and icons that bring it to life.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">Document the library, important states, usage guidance, and examples from the shipped interface.</p>
          <ContentPlaceholder />
          <div className="grid gap-4 sm:grid-cols-2">
            <MediaPlaceholder label="Component library" />
            <MediaPlaceholder label="Icon set" />
          </div>
        </section>

        <section id="outcome" className="scroll-mt-28 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Evidence & outcomes</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">What the system made possible.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">Add what shipped, how the team used the system, and evidence of its effect. Keep any claims tied to the available evidence.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['What shipped', 'Deliverables and implementation details to be added.'],
              ['What changed', 'Observed results and team feedback to be added.'],
              ['What we learned', 'Limits, trade-offs, and learnings to be added.'],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-[#f7f8f9] p-5 md:p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="next" className="scroll-mt-28 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">What's next</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">A system designed to keep evolving.</h2>
          <ContentPlaceholder />
          <div className="rounded-2xl bg-slate-950 p-7 text-white md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">The principle I carry forward</p>
            <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">A closing thought from the project will go here.</p>
          </div>
          <a href="#top" onClick={(event) => scrollToProjectSection(event, 'top')} className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-slate-700 hover:text-slate-950">
            Back to the top <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>
      </div>
    </div>
    </div>
  </div>
  );
};
