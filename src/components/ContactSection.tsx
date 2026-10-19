import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenChat }) => (
  <section
    id="contact"
    className="sticky top-0 z-10 mx-auto flex w-[calc(100%-24px)] max-w-[calc(72rem-24px)] flex-col justify-start gap-8 px-6 pt-10 pb-10 [container-type:inline-size] sm:gap-10 sm:px-10 sm:pt-12 sm:pb-12 lg:gap-12 lg:px-16 lg:pt-14 lg:pb-14"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="m-0 min-w-0 flex-1 whitespace-nowrap text-[clamp(2rem,13.5cqw,9.5rem)] font-black leading-[0.82] tracking-[-0.04em] text-[#111111]">
        <button
          type="button"
          onClick={onOpenChat}
          aria-label="Open Let’s talk chat"
          className="whitespace-nowrap border-0 bg-transparent p-0 text-left font-semibold cursor-pointer no-underline transition-opacity hover:opacity-70"
        >
          Let’s talk
        </button>
      </h2>
      <button
        type="button"
        onClick={onOpenChat}
        aria-label="Open Let’s talk chat"
        className="mt-1 inline-flex shrink-0 border-0 bg-transparent p-0 text-[#111111] transition-transform hover:translate-x-1 hover:-translate-y-1 sm:mt-3"
      >
        <ArrowUpRight className="h-10 w-10 stroke-[1.5] sm:h-14 sm:w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20" aria-hidden="true" />
      </button>
    </div>

    <p className="m-0 text-base font-normal text-[#111111] sm:text-lg">
      Or{' '}
      <a
        href={DESIGNER_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 border-b border-[#111111] pb-1 text-[#111111] no-underline transition-colors hover:text-[#2b35ee] hover:border-[#2b35ee]"
      >
        WhatsApp me.
        <ArrowUpRight className="h-3.5 w-3.5 text-[#2b35ee]" aria-hidden="true" />
      </a>
    </p>
  </section>
);
