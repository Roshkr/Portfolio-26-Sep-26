import React from 'react';
import {
  FileText,
  Download,
  ArrowUpRight,
  Sparkles,
  Linkedin,
} from 'lucide-react';
import {
  DESIGNER_INFO,
  CREATIVE_TOOLKIT,
  EXPERIENCES,
  EDUCATIONS,
  TESTIMONIALS,
} from '../data/portfolioData';
import { CompanyLogoMark } from '../components/CompanyLogoMarks';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page w-full">
      {/* Hero Bio Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Text Column */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#2b35ee] font-semibold">
                About Me
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-950 leading-tight">
                Hi, I'm Roushan Kumar
              </h1>
              <p className="text-base font-normal text-slate-500">
                UX/UI Designer • based in Ahmedabad, Gujarat, India
              </p>
            </div>

            <div className="space-y-5 text-lg md:text-xl font-light text-slate-800 leading-relaxed">
              <p>
                I'm a seasoned UX/UI designer specializing in mobile and desktop designs, creating user-friendly and visually appealing digital experiences that drive engagement and growth.
              </p>
              <p>
                My focus lies in SaaS and B2B products, turning complex workflows into intuitive experiences through research, cross-functional collaboration, and AI-assisted engineering tools. Currently pursuing research on interface design ethics, dark patterns, and invisible UI.
              </p>
            </div>

            {/* Resume Download Callout */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={DESIGNER_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black hover:bg-neutral-800 text-white rounded-2xl font-medium text-sm transition-all shadow-md active:scale-95 group cursor-pointer"
              >
                <Download className="w-4 h-4 text-white/80 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-200 shadow-xl border border-black/5 relative group">
              <img
                src={DESIGNER_INFO.portraitImage}
                alt={DESIGNER_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white pointer-events-none">
                <span className="text-xs uppercase tracking-wider text-slate-300">Roushan Kumar</span>
                <p className="text-sm font-medium">UX/UI Designer • Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-12 border-y border-black/[0.06] bg-[#fbfbfb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {DESIGNER_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1 sm:pl-4 sm:border-l border-slate-200 first:border-0 first:pl-0">
                <span className="text-4xl md:text-5xl font-light text-slate-950 tracking-tight">
                  {stat.value}
                </span>
                <p className="text-sm text-slate-500 font-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Toolkit Section (Exact from Framer) */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
        <div className="mb-12 space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#2b35ee] font-semibold">
            Tools & Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950">
            My creative toolkit!
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl">
            A battle-tested stack of design systems, AI engineering agents, and product strategy software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CREATIVE_TOOLKIT.map((tool, idx) => (
            <div
              key={idx}
              className="bg-[#eef0f3] rounded-[24px] p-6 flex flex-col justify-between hover:bg-[#e6e9ef] transition-colors group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {tool.category}
                </span>
                <h3 className="text-lg font-medium text-slate-950 group-hover:text-[#2b35ee] transition-colors">
                  {tool.name}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-500 mt-4">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 border-t border-black/[0.04] space-y-20">
        {/* Experience Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#2b35ee] font-semibold">
              Career History
            </span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950">
              Experience
            </h2>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  '--stack-offset': `${idx * 54}px`,
                  '--stack-offset-sm': `${idx * 58}px`,
                  '--stack-offset-md': `${idx * 61}px`,
                  zIndex: idx + 1,
                } as React.CSSProperties}
                className={`about-stack-card bg-[#eef0f3] rounded-[22px] overflow-hidden p-3.5 sm:p-4 md:p-4.5 flex flex-row items-start sm:items-center gap-3.5 sm:gap-4 md:gap-5 hover:bg-[#e7eaf0] transition-colors group/card ${exp.company === 'UID' ? 'min-h-[180px]' : ''}`}
              >
                {/* Left side: Logo/Image with compact reduced height */}
                {exp.logoUrl && (
                  <div className={`w-16 sm:w-36 md:w-40 ${exp.company === 'UID' ? 'h-16 sm:h-36' : 'h-16 sm:h-28 md:h-28'} shrink-0 self-start sm:self-center`}>
                    <CompanyLogoMark
                      company={exp.company}
                      logoUrl={exp.logoUrl}
                      websiteUrl={exp.websiteUrl}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Right side: Next to logo, all details */}
                <div className="flex-1 min-w-0 w-full flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex flex-row items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-medium text-slate-950">
                          {exp.role}
                        </h3>
                        <div className="flex items-center flex-wrap gap-2 mt-1">
                          {exp.websiteUrl ? (
                            <a
                              href={exp.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#2b35ee] hover:text-blue-700 transition-colors group/link"
                            >
                              <span className="group-hover/link:underline">{exp.company}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          ) : (
                            <p className="text-xs sm:text-sm font-semibold text-[#2b35ee]">
                              {exp.company}
                            </p>
                          )}
                          {exp.workMode && (
                            <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/95 text-slate-700 border border-slate-200/90 shadow-2xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2b35ee] shrink-0"></span>
                              <span>{exp.workMode}</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="whitespace-nowrap text-[11px] sm:text-xs font-semibold px-2.5 py-1 bg-white/80 rounded-lg text-slate-700 self-start shrink-0 shadow-2xs">
                        {exp.year}
                      </span>
                    </div>

                    {exp.description && (
                      <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#2b35ee] font-semibold">
              Academic Background
            </span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950">
              Education
            </h2>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {EDUCATIONS.map((edu, idx) => (
              <div
                key={idx}
                style={{
                  '--stack-offset': `${idx * 54}px`,
                  '--stack-offset-sm': `${idx * 58}px`,
                  '--stack-offset-md': `${idx * 61}px`,
                  zIndex: idx + 1,
                } as React.CSSProperties}
                className="about-stack-card bg-[#eef0f3] rounded-[22px] overflow-hidden p-3.5 sm:p-4 md:p-4.5 flex flex-row items-start sm:items-center gap-3.5 sm:gap-4 md:gap-5 hover:bg-[#e7eaf0] transition-colors group/card"
              >
                {/* Left side: Logo with compact reduced height */}
                {edu.logoUrl && (
                  <div className="w-16 sm:w-36 md:w-40 h-16 sm:h-28 md:h-28 shrink-0 self-start sm:self-center">
                    <CompanyLogoMark
                      company={edu.institution}
                      logoUrl={edu.logoUrl}
                      websiteUrl={edu.websiteUrl}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Right side: Next to logo, all details */}
                <div className="flex-1 min-w-0 w-full flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex flex-row items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-medium text-slate-950">
                          {edu.degree}
                        </h3>
                        {edu.websiteUrl ? (
                          <a
                            href={edu.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2b35ee] hover:text-blue-700 transition-colors group/link mt-0.5"
                          >
                            <span className="group-hover/link:underline">
                              {edu.institution}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm font-semibold text-[#2b35ee] mt-0.5">
                            {edu.institution}
                          </p>
                        )}
                      </div>
                      <span className="whitespace-nowrap text-[11px] sm:text-xs font-semibold px-2.5 py-1 bg-white/80 rounded-lg text-slate-700 self-start shrink-0 shadow-2xs">
                        {edu.year}
                      </span>
                    </div>

                    {edu.details && (
                      <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Others Said (Testimonials) */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 border-t border-black/[0.04]">
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950">
            What others said
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl">
            Read insights and praises from mentors, engineering leads, and peers who have worked with Roushan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#eef0f3] rounded-[28px] p-8 flex flex-col justify-between space-y-6"
            >
              <p className="text-base md:text-lg font-normal text-slate-800 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                {t.linkedinUrl ? (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors group"
                    title={`View ${t.author} on LinkedIn`}
                  >
                    <span className="group-hover:underline underline-offset-2">{t.author}</span>
                    <Linkedin className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                )}
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};
