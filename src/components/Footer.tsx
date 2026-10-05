import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="about-footer w-full bg-[#030303] text-white pt-24 pb-16 px-6 relative z-20 overflow-hidden rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] shadow-[0_-10px_30px_rgba(0,0,0,0.06)]">
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[380px]">
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
              className="px-6 py-3.5 bg-white text-black hover:bg-slate-100 rounded-full font-medium text-sm transition-all flex items-center gap-2 group cursor-pointer shadow-lg shadow-white/5 active:scale-95"
            >
              <FileText className="w-4 h-4 text-slate-800" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Compact WhatsApp link */}
            <a
              href="https://wa.me/918349933768?text=Hi%20Roushan!%0AI%20am%20reaching%20you%20out%20after%20revewing%20your%20portfolio.%0AI%20will%20share%20the%20details%20soon."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              className="group h-[52px] w-10 bg-white/10 text-white rounded-full transition-all flex items-center justify-center border border-white/10 active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 transition-colors group-hover:text-[#25D366]" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.52 0 .18 5.33.18 11.9c0 2.1.55 4.16 1.6 5.98L.08 24l6.27-1.64a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.44ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.29c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.47-4.45 9.92-9.94 9.92Zm5.45-7.43c-.3-.15-1.77-.88-2.04-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.27 5.18 4.59.73.32 1.3.51 1.74.65.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Socials */}
        <div className="pt-20 mt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <span>© {DESIGNER_INFO.name} 2026</span>
            <span aria-hidden="true">·</span>
            <span>{DESIGNER_INFO.location}</span>
          </div>

          {/* Social Links from Framer Portfolio */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={DESIGNER_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={DESIGNER_INFO.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Behance
            </a>
            <a
              href={DESIGNER_INFO.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Dribbble
            </a>
            <a
              href={DESIGNER_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 font-medium text-white/90"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
