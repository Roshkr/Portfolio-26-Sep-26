import React from 'react';
import { Mail, ArrowUpRight, Copy, Check, FileText } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#030303] text-white pt-24 pb-16 px-6 relative overflow-hidden rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] shadow-[0_-10px_30px_rgba(0,0,0,0.06)]">
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

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium text-sm transition-all flex items-center gap-2 cursor-pointer border border-white/10 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white/70" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
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
