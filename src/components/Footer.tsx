import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { WindowControls } from './WindowControls';

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const clock = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  }).format(time);

  return (
    <footer className="about-footer w-full p-0">
      <div className="flex w-full flex-col justify-between min-h-[380px]">
        <div className="retro-window-titlebar retro-footer-titlebar">
          <span>CONTACT / LINKS</span>
          <span aria-hidden="true">END OF FILE</span>
          <WindowControls />
        </div>
        <div className="retro-footer-body">
          {/* Main CTA Heading */}
          <div className="max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-white">
            Let’s create something great together
          </h2>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Direct Resume Download */}
            <a
              href={DESIGNER_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button px-5 py-3 text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Compact WhatsApp link */}
            <a
              href="https://wa.me/918349933768?text=Hi%20Roushan!%0AI%20am%20reaching%20you%20out%20after%20revewing%20your%20portfolio.%0AI%20will%20share%20the%20details%20soon."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              className="retro-button h-11 w-11"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 transition-colors group-hover:text-[#25D366]" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.52 0 .18 5.33.18 11.9c0 2.1.55 4.16 1.6 5.98L.08 24l6.27-1.64a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.44ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.29c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.47-4.45 9.92-9.94 9.92Zm5.45-7.43c-.3-.15-1.77-.88-2.04-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.27 5.18 4.59.73.32 1.3.51 1.74.65.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Socials */}
        <div className="pt-8 mt-8 border-t border-slate-400 flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <span>© {DESIGNER_INFO.name} 2026</span>
            <span aria-hidden="true">·</span>
            <span>{DESIGNER_INFO.location}</span>
          </div>
          <time className="retro-footer-clock retro-metadata" dateTime={time.toISOString()} aria-label={`Current time in Ahmedabad: ${clock} IST`}>
            AHMEDABAD {clock} IST
          </time>

          {/* Social Links from Framer Portfolio */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={DESIGNER_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button px-4 py-2 text-sm"
            >
              LinkedIn
            </a>
            <a
              href={DESIGNER_INFO.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button px-4 py-2 text-sm"
            >
              Behance
            </a>
            <a
              href={DESIGNER_INFO.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button px-4 py-2 text-sm"
            >
              Dribbble
            </a>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' })}
            className="retro-button px-4 py-2 text-sm"
          >
            Back to top
            <ArrowRight className="h-4 w-4 -rotate-90" aria-hidden="true" />
          </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
