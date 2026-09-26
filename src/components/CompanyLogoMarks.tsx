import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface CompanyLogoProps {
  company: string;
  logoUrl?: string;
  websiteUrl?: string;
  className?: string;
  fitMode?: 'cover' | 'contain';
}

export const CompanyLogoMark: React.FC<CompanyLogoProps> = ({
  company,
  logoUrl,
  websiteUrl,
  className = 'w-full h-48 sm:h-52',
  fitMode,
}) => {
  const [hasError, setHasError] = useState(false);

  // By default, full photos use 'cover', whereas explicit vector logos or webp/svg look best with contain if needed
  const isSvgOrWebp = logoUrl?.endsWith('.svg') || logoUrl?.endsWith('.webp') || logoUrl?.includes('logo');
  const resolvedFit = fitMode || (isSvgOrWebp ? 'contain' : 'cover');

  const content = (
    <div
      className={`${className} rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs flex items-center justify-center shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:border-slate-300 relative ${resolvedFit === 'contain' ? 'p-3 sm:p-3.5' : ''}`}
    >
      {logoUrl && !hasError ? (
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${resolvedFit === 'contain' ? 'object-contain' : 'object-cover'}`}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-slate-900 text-white font-bold flex items-center justify-center rounded-xl text-base shadow-xs">
          {company.slice(0, 3).toUpperCase()}
        </div>
      )}
    </div>
  );

  if (websiteUrl) {
    return (
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visit ${company} website`}
        className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b35ee] rounded-2xl group/logo"
      >
        {content}
      </a>
    );
  }

  return content;
};

// Company Logo Ribbon banner for the HomePage with full logos & website links
export const CompanyLogoBanner: React.FC = () => {
  return (
    <div className="py-14 border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50/70">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2b35ee]">
              Work History & Clients
            </p>
            <h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-950 mt-1">
              Companies I’ve designed for
            </h3>
          </div>
          <p className="text-xs text-slate-500 font-normal">
            Click any company to visit their official website
          </p>
        </div>

        {/* Clean Full-Logo Grid with Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-stretch">
          {EXPERIENCES.map((exp, idx) => {
            const cardContent = (
              <div className="flex flex-col items-center justify-between text-center p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-300 group h-full">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50/80 p-2.5 border border-slate-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200 relative">
                  {exp.logoUrl ? (
                    <img
                      src={exp.logoUrl}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-sm font-bold text-slate-700">
                      {exp.company.slice(0, 3)}
                    </span>
                  )}
                  {exp.websiteUrl && (
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-white/90 shadow-2xs border border-slate-200/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-2.5 h-2.5 text-[#2b35ee]" />
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <p className="text-xs font-semibold text-slate-800 leading-snug group-hover:text-[#2b35ee] transition-colors truncate">
                    {exp.company}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-normal truncate">
                    {exp.role.split('(')[0].trim()}
                  </p>
                </div>
              </div>
            );

            if (exp.websiteUrl) {
              return (
                <a
                  key={idx}
                  href={exp.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b35ee] rounded-2xl"
                  title={`Visit ${exp.company} website`}
                >
                  {cardContent}
                </a>
              );
            }

            return <div key={idx}>{cardContent}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
