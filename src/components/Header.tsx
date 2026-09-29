import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeaderProps {
  currentPage: 'home' | 'about' | 'case-study';
  onNavigate: (page: 'home' | 'about') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbfbfb]/90 backdrop-blur-md border-b border-black/[0.04] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="text-left focus-visible:outline-none cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
        >
          <span className="text-xl font-bold tracking-tight text-black font-sans relative inline-block transition-colors duration-200 group-hover:text-neutral-700">
            {DESIGNER_INFO.brandName}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black rounded-full transition-all duration-300 ease-out group-hover:w-full" />
          </span>
        </button>

        {/* Right Nav & Action Area */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('about')}
            className={`text-sm font-medium transition-colors hover:text-black py-1 relative cursor-pointer ${
              currentPage === 'about'
                ? 'text-black font-semibold'
                : 'text-slate-600'
            }`}
          >
            About
            {currentPage === 'about' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black rounded-full" />
            )}
          </button>

          <a
            href={DESIGNER_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-neutral-800 active:scale-[0.98] rounded-xl transition-all shadow-sm cursor-pointer group"
            title="Open Roushan's Resume"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
