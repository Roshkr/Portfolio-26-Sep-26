import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import type { CaseStudy, ProjectDevice, SelectCaseStudy } from '../types';
import { LazyVideo, ProjectMockup } from '../components/PhoneMockup';
import { ProjectCard } from '../components/ProjectCard';
import { CharacterRevealText } from '../components/CharacterRevealText';
import createInvoiceImage from '../assets/images/Roushani create invoice.png';
import defaultInvoiceImage from '../assets/images/Roushani default invoice.png';
import calculationImage from '../assets/images/Roushani calculation.png';
import previewInvoiceImage from '../assets/images/Roushani preview invoice.png';
import clientHistoryImage from '../assets/images/Roushani Client and History.png';
import recallUserDataImage from '../assets/images/Roushani recall user data.png';
import phoneEditsImage from '../assets/images/Phone edits.png';
import shareInvoiceImage from '../assets/images/Roushani Share invoice.png';
import invoiceImage from '../assets/images/Roushani Invoice.jpeg';

interface RoushaniCaseStudyProps {
  caseStudy: CaseStudy;
  onBack: () => void;
  nextStudy?: CaseStudy | null;
  onSelectCaseStudy?: SelectCaseStudy;
}

const RevealSection: React.FC<React.PropsWithChildren<{ className?: string; elementRef?: React.Ref<HTMLElement> }>> = ({ className = '', elementRef, children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      ref={elementRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

const staggeredReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.04 } },
};

const riseIn = {
  hidden: { opacity: 0, y: -24, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

interface ShowcaseFeature {
  title: string;
  description: string;
  imageSrc: string;
  videoSrc?: string;
  device?: ProjectDevice;
  aspectRatio?: number;
}

interface ShowcaseMoment {
  label: string;
  features: ShowcaseFeature[];
}

const MomentShowcase: React.FC<{
  moment: ShowcaseMoment;
  activeIndex: number;
}> = ({ moment, activeIndex }) => {
  const activeFeature = moment.features[activeIndex];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 sm:gap-4">
      <div className="border-2 border-slate-900 bg-white px-4 py-3 sm:px-6 sm:py-4">
        <h3 className="text-base font-semibold leading-snug text-slate-950 sm:text-lg">{activeFeature.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">{activeFeature.description}</p>
      </div>
      <div className="overflow-hidden rounded-xl bg-[#e9e7e2] p-2 shadow-[0_24px_70px_-38px_rgba(15,23,42,.35)] sm:rounded-2xl sm:p-4">
        <div
          className={`relative flex w-full ${activeFeature.aspectRatio ? 'h-auto' : 'h-[min(38svh,300px)] sm:h-[min(54svh,440px)]'} items-center justify-center overflow-hidden rounded-lg bg-white sm:rounded-xl`}
          style={activeFeature.aspectRatio ? { aspectRatio: activeFeature.aspectRatio } : undefined}
        >
          {activeFeature.videoSrc ? (
            <LazyVideo
              src={activeFeature.videoSrc}
              poster={activeFeature.imageSrc}
              ariaLabel={`${moment.label}: ${activeFeature.title}`}
              objectFit="contain"
              frameClassName="rounded-xl bg-white"
            />
          ) : activeFeature.device === 'phone' ? (
            <ProjectMockup
              imageSrc={activeFeature.imageSrc}
              device="phone"
              ariaLabel={`${moment.label}: ${activeFeature.title}`}
              className="h-full max-w-[220px]"
            />
          ) : (
            <img
              src={activeFeature.imageSrc}
              alt={`${moment.label}: ${activeFeature.title}`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-full w-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
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
  const shouldReduceMotion = useReducedMotion();
  const [activeMomentIndex, setActiveMomentIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [momentDirection, setMomentDirection] = useState(1);
  const workflowStages = [
    { title: 'Start an invoice', detail: 'Put the frequent billing task first.' },
    { title: 'Reuse details', detail: 'Select saved customers and services.' },
    { title: 'Review totals', detail: 'Use presets and live calculations.' },
    { title: 'Make it yours', detail: 'Add a logo and choose brand colors.' },
    { title: 'Send it', detail: 'Preview, export, share, or print the PDF.' },
  ];
  const showcaseMoments: ShowcaseMoment[] = [
    {
      label: 'It starts',
      features: [
        { title: 'Live invoice canvas', description: caseStudy.designScreens[0]?.note ?? 'A live preview connects invoice details to the final document.', imageSrc: createInvoiceImage, aspectRatio: 1857 / 869 },
        { title: 'Start with useful defaults', description: 'The most common invoice tasks come before specialist accounting controls.', imageSrc: caseStudy.designScreens[0]?.image ?? caseStudy.heroImage },
        { title: 'Useful defaults', description: 'Large targets and clear hierarchy keep the frequent invoice tasks easy to reach.', imageSrc: defaultInvoiceImage, aspectRatio: 1843 / 871 },
      ],
    },
    {
      label: 'It calculates',
      features: [
        { title: 'Tax and discount logic', description: caseStudy.designBullets[0] ?? 'Tax and discounts calculate automatically.', imageSrc: calculationImage },
        { title: 'Preview the final document', description: caseStudy.designScreens[0]?.note ?? 'See calculations and invoice styling update live.', imageSrc: previewInvoiceImage },
      ],
    },
    {
      label: 'It remembers',
      features: [
        { title: 'Client and history hub', description: caseStudy.designScreens[1]?.note ?? 'Reuse saved customer and service details.', imageSrc: clientHistoryImage },
        { title: 'Reuse services and line items', description: 'Previous invoice details reduce repetitive data entry.', imageSrc: recallUserDataImage },
      ],
    },
    {
      label: 'On the go',
      features: [
        { title: 'Quick mobile edits', description: caseStudy.designBullets[3] ?? 'Make quick invoice edits on mobile.', imageSrc: phoneEditsImage, device: caseStudy.designScreens[2]?.device },
        { title: 'Ready-to-send PDF', description: caseStudy.designScreens[2]?.note ?? 'Preview and export invoices from a smartphone.', imageSrc: shareInvoiceImage, device: caseStudy.designScreens[2]?.device },
        { title: 'A professional customer touchpoint', description: 'Branded PDFs give small businesses a consistent, professional invoice to share.', imageSrc: invoiceImage },
      ],
    },
  ];
  const totalShowcaseSteps = showcaseMoments.reduce((total, moment) => total + moment.features.length, 0);
  const navigateShowcaseStep = (step: number) => {
    const nextStep = Math.max(0, Math.min(totalShowcaseSteps - 1, step));
    let remaining = nextStep;
    const momentIndex = showcaseMoments.findIndex((moment) => {
      if (remaining < moment.features.length) return true;
      remaining -= moment.features.length;
      return false;
    });
    const nextMomentIndex = Math.max(0, momentIndex);
    const currentStep = showcaseMoments.slice(0, activeMomentIndex).reduce((total, moment) => total + moment.features.length, 0) + activeFeatureIndex;
    setMomentDirection(nextStep >= currentStep ? 1 : -1);
    setActiveMomentIndex(nextMomentIndex);
    setActiveFeatureIndex(remaining);
  };
  const activeMoment = showcaseMoments[activeMomentIndex];
  const activeShowcaseStep = showcaseMoments.slice(0, activeMomentIndex).reduce((total, moment) => total + moment.features.length, 0) + activeFeatureIndex;
  const moreWorkImageByKeyword: Record<string, string> = {
    'Hero Canvas': createInvoiceImage,
    'Client Directory': clientHistoryImage,
    'Mobile View': phoneEditsImage,
    'Export & Share': shareInvoiceImage,
    'Template System': defaultInvoiceImage,
  };
  const moreWorkScreens = caseStudy.finalScreens.map((screen) => ({
    ...screen,
    image: moreWorkImageByKeyword[screen.title] ?? screen.image,
  }));

  useEffect(() => {
    const preloadShowcaseImages = () => {
      const sources = new Set(showcaseMoments.flatMap((moment) => moment.features.map((feature) => feature.imageSrc)));
      sources.forEach((source) => {
        const image = new Image();
        image.src = source;
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      preloadShowcaseImages();
      return;
    }

    preloadShowcaseImages();
  }, [totalShowcaseSteps]);

  return (
    <article className="case-study-page roushani-case-study w-full bg-[#fbfbfb] text-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <button
          type="button"
          onClick={onBack}
          className="retro-button inline-flex items-center gap-2 px-4 py-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
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

      <RevealSection className="bg-[#fbfbfb] py-6 md:py-10">
        <div className="mx-auto max-w-6xl space-y-3 px-6 md:px-10">
          {[
            {
              label: 'The problem',
              title: 'A broken billing workflow cost small businesses time and credibility.',
            },
            {
              label: 'The decision',
              title: 'Make the invoice flow fast, familiar, and trustworthy.',
            },
            {
              label: 'What shipped',
              title: 'A live invoicing MVP with reusable details and branded PDFs.',
            },
            {
              label: 'What changed',
              title: 'Invoice creation and export fell from 18 minutes to under 3.',
            },
            {
              label: 'What I carry forward',
              title: 'Simplicity matters more than features.',
            },
          ].map(({ label, title }, index) => (
            <motion.section
              key={label}
              className="sticky flex items-center overflow-hidden rounded-sm border border-slate-200 bg-white px-7 py-10 text-slate-950 shadow-[0_24px_80px_-48px_rgba(15,23,42,.28)] sm:px-10 md:px-14 md:py-14"
              style={{
                zIndex: index + 1,
                top: `calc(4rem + ${index * 12}px)`,
                minHeight: `calc(100svh - 5rem - ${index * 12}px)`,
              }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="max-w-5xl">
                <p className="mb-6 text-sm font-medium tracking-[-0.01em] text-slate-500 md:mb-8 md:text-base">{label}</p>
                <CharacterRevealHeading
                  text={title}
                  className="max-w-5xl text-[clamp(2.75rem,6.1vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.065em] text-slate-950"
                />
              </div>
            </motion.section>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="flex min-h-[calc(100svh-4rem)] items-center border-y border-slate-200 bg-white py-4 sm:min-h-[calc(100svh-76px)] sm:py-6">
        <div className="mx-auto w-full max-w-7xl px-6 py-2 md:px-10">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeMoment.label}-${activeFeatureIndex}`}
                initial={shouldReduceMotion ? false : { opacity: 0, x: momentDirection * 56 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, x: momentDirection * -56 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <MomentShowcase
                  moment={activeMoment}
                  activeIndex={activeFeatureIndex}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-5 flex items-center justify-between gap-3 sm:mt-7 sm:gap-6 md:mt-9">
            <div className="flex items-center gap-0.5 sm:gap-2" role="group" aria-label="Choose an image in the invoice workflow">
              {showcaseMoments.flatMap((moment) => moment.features).map((feature, index) => (
                <button
                  key={`${feature.title}-${index}`}
                  type="button"
                  aria-label={`Show image ${index + 1} of ${totalShowcaseSteps}: ${feature.title}`}
                  aria-current={index === activeShowcaseStep ? 'step' : undefined}
                  onClick={() => navigateShowcaseStep(index)}
                  className="grid h-8 w-3.5 place-items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b35ee] focus-visible:ring-offset-2 sm:w-5"
                >
                  <span className={`h-2 w-2 rounded-full transition-all duration-300 sm:h-2.5 sm:w-2.5 ${index === activeShowcaseStep ? 'scale-110 bg-[#2b35ee]' : 'border border-slate-400 bg-transparent hover:bg-slate-300'}`} />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => navigateShowcaseStep(activeShowcaseStep - 1)}
                disabled={activeShowcaseStep === 0}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-slate-950 hover:text-slate-950 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-300 sm:h-12 sm:w-12 md:h-16 md:w-16"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => navigateShowcaseStep(activeShowcaseStep + 1)}
                disabled={activeShowcaseStep === totalShowcaseSteps - 1}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-400 text-slate-950 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-300 sm:h-12 sm:w-12 md:h-16 md:w-16"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="The decision" title="One decision: make invoicing feel simple." />
          </div>
          <div>
            <CharacterRevealBlock text={caseStudy.designText} className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl" />
            <motion.div
              className="grid gap-3"
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggeredReveal}
            >
              {[
                { title: 'Keep the invoice job focused', text: 'Make invoice creation, reusable customer and service details, and a polished PDF the core of the MVP. Keep advanced accounting controls out of the everyday flow.' },
                { title: 'Make repeat work familiar', text: 'Use saved clients, services, and history to reduce repeat entry while keeping the interface approachable for businesses moving from spreadsheets.' },
                { title: 'Give people confidence in totals', text: 'Replace stacked tax and currency controls with presets, an inline toggle, and a live itemized summary.' },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={riseIn}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">0{index + 1}</p>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <CharacterRevealBlock text={item.text} className="mt-2 text-sm leading-relaxed text-slate-600" />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-slate-200 bg-[#eef0f3] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-10 max-w-3xl md:mb-12">
            <SectionHeading eyebrow="Connected moments" title="From an empty invoice to a document ready to send." />
          </div>
          <div className="relative">
            <motion.div
              aria-hidden="true"
              className="absolute left-9 right-9 top-9 hidden h-px origin-left bg-[#2b35ee]/50 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.15 }}
            />
            <motion.ol
              className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } } }}
            >
            {workflowStages.map((stage, index) => (
              <motion.li
                key={stage.title}
                variants={riseIn}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                className="group relative rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg"
              >
                <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-xs font-semibold text-white ring-4 ring-white transition-colors group-hover:bg-[#2b35ee]">0{index + 1}</span>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{stage.detail}</p>
              </motion.li>
            ))}
            </motion.ol>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="The challenge" title={challenge?.title || 'Why this product was needed'} />
          </div>
          <div className="space-y-6">
            {challenge?.body && <CharacterRevealBlock text={challenge.body} className="text-lg leading-relaxed text-slate-600 md:text-xl" />}
            {caseStudy.keyInsights.length > 0 && (
              <motion.div
                className="grid gap-3 pt-2"
                initial={shouldReduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggeredReveal}
              >
                {caseStudy.keyInsights.map((insight, index) => (
                  <motion.article
                    key={insight.title}
                    variants={riseIn}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    className="rounded-xl border border-slate-200 bg-[#fbfbfb] p-5 transition-colors hover:border-[#2b35ee]/40"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">0{index + 1} / {insight.title}</p>
                    <CharacterRevealBlock text={insight.desc} className="mt-3 text-sm leading-relaxed text-slate-600" />
                  </motion.article>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-slate-200 bg-[#fbfbfb] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-10 max-w-3xl md:mb-14">
            <SectionHeading eyebrow="More of the work" title="The supporting screens and behaviors." />
          </div>
          <motion.div
            className="mb-12 grid gap-4 md:grid-cols-2"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
            variants={staggeredReveal}
          >
            {approachSections.map((section) => (
              <motion.article
                key={section.eyebrow}
                variants={riseIn}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{section.eyebrow}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">{section.title}</h3>
                {section.body && <CharacterRevealBlock text={section.body} className="mt-3 text-sm leading-relaxed text-slate-600" />}
                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((item) => <RevealListItem key={item} text={item} />)}
                  </ul>
                ) : null}
              </motion.article>
            ))}
          </motion.div>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={staggeredReveal}
          >
            {moreWorkScreens.map((screen) => (
              <motion.figure
                key={screen.title}
                variants={riseIn}
                whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-xl"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectMockup
                    imageSrc={screen.image}
                    videoSrc={screen.videoSrc}
                    device={screen.device || 'desktop'}
                    ariaLabel={screen.title}
                    className={`mx-auto w-full ${screen.device === 'phone' ? 'max-w-[220px]' : 'max-w-[520px]'}`}
                  />
                </motion.div>
                <figcaption className="px-2 pb-1 pt-4 text-sm font-medium text-slate-700">{screen.title}</figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:px-10">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="What changed" title="Less time making invoices. More time running a business." />
          </div>
          <div className="space-y-6">
            <CharacterRevealBlock text={caseStudy.impactText} className="text-lg leading-relaxed text-slate-600 md:text-xl" />
            <div className="grid gap-4 md:grid-cols-2">
              <BeforeAfterMedia label={caseStudy.beforeLabel || 'Before'} src={caseStudy.beforeScreen} />
              <BeforeAfterMedia label={caseStudy.afterLabel || 'After'} src={caseStudy.afterScreen} videoSrc={caseStudy.afterVideo} />
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div className="roushani-summary-sticky">
            <SectionHeading eyebrow="Evidence and limits" title="What the pilot measured—and what still needs validation." />
          </div>
          <div>
            <CharacterRevealBlock text={caseStudy.usabilityText} className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl" />
            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={staggeredReveal}
            >
              {caseStudy.metrics.map((metric) => (
                <motion.article
                  key={metric.label}
                  variants={riseIn}
                  whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.015 }}
                  className="rounded-xl bg-[#eef0f3] p-6 transition-shadow hover:shadow-lg md:p-7"
                >
                  <p className="text-3xl font-medium tracking-tight text-slate-950 md:text-4xl">{metric.value}</p>
                  <h3 className="mt-3 text-sm font-semibold text-slate-700">{metric.label}</h3>
                  {metric.context && <p className="mt-2 text-xs leading-relaxed text-slate-500">{metric.context}</p>}
                </motion.article>
              ))}
            </motion.div>
            {reflection?.body && (
              <motion.aside
                initial={shouldReduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={riseIn}
                className="mt-5 rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-sm font-semibold text-slate-900">What I would validate next</h3>
                <CharacterRevealBlock text={reflection.body} className="mt-3 text-sm leading-relaxed text-slate-600" />
              </motion.aside>
            )}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-slate-200 bg-[#eef0f3] py-16 text-slate-950 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-6 md:px-10">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="What’s next" title="Keep making the everyday feel easier." />
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
        <section className="border-t border-slate-200 bg-[#fbfbfb] py-12 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Next Project</span>
            <ProjectCard study={nextStudy} onSelectCaseStudy={onSelectCaseStudy} compactCorners transitionOnSelect />
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
          eager
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

const BeforeAfterMedia: React.FC<{ label: string; src: string; videoSrc?: string }> = ({ label, src, videoSrc }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.figure
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={riseIn}
      whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
      className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-xl"
    >
      {videoSrc ? (
        <div className="mx-auto aspect-[9/16] w-full max-w-[420px] rounded-[2.5rem] bg-black p-3 shadow-xl ring-1 ring-black/15 sm:p-4">
          <div className="h-full w-full overflow-hidden rounded-[2rem] bg-slate-950">
            <LazyVideo src={videoSrc} poster={src} ariaLabel={`${label} product demo`} objectFit="contain" frameClassName="bg-slate-950" />
          </div>
        </div>
      ) : (
        <img src={src} alt={label} loading="lazy" className="max-h-80 w-full rounded-lg object-contain" />
      )}
      <figcaption className="mt-4 px-2 pb-1 text-xs font-medium text-slate-500">{label}</figcaption>
    </motion.figure>
  );
};

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
