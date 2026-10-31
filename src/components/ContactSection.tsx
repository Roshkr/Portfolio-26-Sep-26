import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenChat }) => (
  <section
    id="contact"
    className="retro-contact-window group sticky top-0 z-10 flex w-full flex-col justify-start [container-type:inline-size]"
  >
    <div className="pointer-events-none flex items-center justify-between gap-4">
      <h2 className="m-0 min-w-0 flex-1 whitespace-nowrap text-[clamp(2rem,13.5cqw,9.5rem)] font-black leading-none tracking-[-0.04em] text-[#111111] transition-colors duration-200 group-hover:text-neutral-800">
        Let’s talk
      </h2>
      <span className="inline-flex shrink-0 text-[#111111] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight className="h-10 w-10 stroke-[1.5] sm:h-14 sm:w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20" aria-hidden="true" />
      </span>
    </div>
    <button
      type="button"
      onClick={onOpenChat}
      aria-label="Open Let’s talk chat"
      className="absolute inset-0 z-20 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b35ee]"
    />
  </section>
);
