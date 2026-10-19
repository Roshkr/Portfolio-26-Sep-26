import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenChat }) => (
  <section
    id="contact"
    className="sticky top-0 z-10 mx-auto flex w-[calc(100%-24px)] max-w-[calc(72rem-24px)] flex-col justify-start gap-8 px-6 pt-0 pb-24 [container-type:inline-size] sm:gap-10 sm:px-10 sm:pt-0 sm:pb-28 lg:gap-12 lg:px-16 lg:pt-0 lg:pb-32"
  >
    <div className="-translate-y-2 flex items-center justify-between gap-4">
      <h2 className="m-0 min-w-0 flex-1 whitespace-nowrap text-[clamp(2rem,13.5cqw,9.5rem)] font-black leading-[0.82] tracking-[-0.04em] text-[#111111]">
        <button
          type="button"
          onClick={onOpenChat}
          aria-label="Open Let’s talk chat"
          className="whitespace-nowrap border-0 bg-transparent p-0 text-left font-semibold cursor-pointer no-underline transition-colors duration-200 hover:text-neutral-800"
        >
          Let’s talk
        </button>
      </h2>
      <button
        type="button"
        onClick={onOpenChat}
        aria-label="Open Let’s talk chat"
        className="inline-flex shrink-0 border-0 bg-transparent p-0 text-[#111111] transition-transform hover:translate-x-1 hover:-translate-y-1"
      >
        <ArrowUpRight className="h-10 w-10 stroke-[1.5] sm:h-14 sm:w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20" aria-hidden="true" />
      </button>
    </div>
  </section>
);
