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
    <header className="retro-header sticky top-0 z-40 w-full border-b-2 border-black">
      <div className="retro-header-inner flex h-16 w-full items-center justify-between gap-4 px-3 sm:h-[76px] sm:px-6">
        {/* Brand Wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="retro-button retro-brand text-left cursor-pointer transition-transform duration-100 active:translate-y-0.5"
        >
          <span className="text-lg font-bold tracking-tight text-black font-sans relative inline-block sm:text-xl">
            {DESIGNER_INFO.brandName}
          </span>
        </button>

        {/* Right Nav & Action Area */}
        <nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onNavigate('about')}
            aria-current={currentPage === 'about' ? 'page' : undefined}
            className={`retro-button px-3 py-2 text-sm sm:px-4 ${
              currentPage === 'about'
                ? 'bg-[#ffff00]'
                : ''
            }`}
          >
            About
          </button>

          <a
            href={DESIGNER_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button px-3 py-2 text-sm sm:px-4"
            title="Open Roushan's Resume"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
};
