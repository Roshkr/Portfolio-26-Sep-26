import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import {
  DESIGNER_INFO,
  CREATIVE_TOOLKIT,
  EXPERIENCES,
  EDUCATIONS,
} from '../data/portfolioData';
import { CompanyLogoMark } from '../components/CompanyLogoMarks';
import { WindowControls } from '../components/WindowControls';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page w-full">
      {/* Hero Bio Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 max-w-6xl mx-auto px-6">
        <div className="retro-window-titlebar">
          <span>PROFILE.TXT</span>
          <span aria-hidden="true">01 / BIO</span>
          <WindowControls />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Text Column */}
          <div className="about-hero-copy-content md:col-span-12 space-y-8">
            <div className="space-y-3">
              <span className="inline-block border-2 border-black bg-[#ff00b8] px-3 py-1 text-sm uppercase tracking-wider text-black font-bold">
                About Me
              </span>
              <h1 className="text-[clamp(3rem,7vw,6.25rem)] font-extrabold tracking-[-0.06em] text-slate-950 leading-[1.02]">
                Hi, I'm Roushan Kumar
              </h1>
              <p className="inline-block border-2 border-black bg-[#000080] px-3 py-2 text-base sm:text-xl font-bold text-white">
                UX/UI &amp; Product Designer &#8226; based in Ahmedabad, Gujarat, India
              </p>
            </div>

            <div className="about-hero-copy-list space-y-4">
              <p className="about-hero-copy about-hero-copy-primary">
                With 6+ years of experience, I design complex B2B and SaaS products, turning messy enterprise workflows into clear, efficient experiences. My work combines research, systems thinking, and practical product judgment to reduce cognitive load and deliver products people can use with confidence.
              </p>
              <p className="about-hero-copy about-hero-copy-secondary">
                I'm currently pursuing research on interface design ethics, dark patterns, and invisible UI, and I apply those principles when designing real products.
              </p>
            </div>

            {/* Social Profile */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={DESIGNER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Roushan Kumar's LinkedIn profile"
                className="retro-button inline-flex items-center gap-2.5 px-6 py-3.5 text-sm"
              >
                <svg className="h-4 w-4 fill-[#0a66c2]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.564V9H3.555v11.452Z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-12 border-y border-slate-200 bg-[#fbfbfb]">
        <div className="retro-window-titlebar">
          <span>AT A GLANCE</span>
          <span aria-hidden="true">02 / FACTS</span>
          <WindowControls />
        </div>
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

      {/* More About Me */}
      <section className="about-personal-section">
        <div className="retro-window-titlebar">
          <span>ABOUT.ROUSHAN</span>
          <span aria-hidden="true">03 / BEYOND THE WORK</span>
          <WindowControls />
        </div>
        <div className="about-personal-body">
          <div className="about-personal-intro">
            <span className="about-personal-kicker">A little more about me</span>
            <h2>Thanks for visiting Roushan.in—my portfolio.</h2>
            <p>Here’s a little more about what drives me, how I connect with people, and what you can expect when we work together.</p>
          </div>
          <div className="about-personal-grid">
            <article className="about-personal-card about-personal-card-growth">
              <span>01 / GROWTH</span>
              <h3>I keep learning—and learn from others.</h3>
              <p>I believe in hard work, consistency, and continuous learning. I seek out people who challenge and inspire me, because learning from others is one of the best ways to grow. My background in communication, learning, and development informs my interest in human behavior and personal growth.</p>
            </article>
            <article className="about-personal-card about-personal-card-optimism">
              <span>02 / MINDSET</span>
              <h3>I stay optimistic through challenges.</h3>
              <p>I try to meet challenges with optimism, adapt to new situations, and take something useful from every experience.</p>
            </article>
            <article className="about-personal-card about-personal-card-connection">
              <span>03 / CONNECTION</span>
              <h3>I value conversation and reflection.</h3>
              <p>I’m an extrovert who is also introspective. I enjoy meaningful conversations and connecting with people, while making time for solitude to reflect and recharge. I aim to be kind, reliable, creative, empathetic, and ambitious.</p>
            </article>
            <article className="about-personal-card about-personal-card-teamwork">
              <span>04 / TEAMWORK</span>
              <h3>I bring a positive, collaborative attitude.</h3>
              <p>I’m adaptable and enjoy solving creative challenges with a team. If we work together, you can count on me to approach my responsibilities with positivity and commitment.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Creative Toolkit Section (Exact from Framer) */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
        <div className="retro-window-titlebar">
          <span>TOOLS &amp; SKILLS</span>
          <span aria-hidden="true">04 / TOOLKIT</span>
          <WindowControls />
        </div>
        <div className="mb-12 space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#2b35ee] font-semibold">
            Tools & Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950">
            My creative toolkit!
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl">
            A focused stack for research, systems, rapid prototyping, and AI-assisted delivery.
          </p>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {CREATIVE_TOOLKIT.map((tool, idx) => (
            <div
              key={idx}
              style={{
                '--stack-offset': `${idx * 40}px`,
                '--stack-offset-sm': `${idx * 40}px`,
                '--stack-offset-md': `${idx * 40}px`,
                zIndex: idx + 1,
              } as React.CSSProperties}
              className="about-stack-card bg-[#eef0f3] rounded-[22px] overflow-hidden p-3.5 sm:p-4 md:p-4.5 flex flex-row items-center gap-3.5 sm:gap-4 md:gap-5 hover:bg-[#e7eaf0] transition-colors group/card"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs sm:h-20 sm:w-20 sm:p-4">
                {tool.iconUrl ? (
                  <img
                    src={tool.iconUrl}
                    alt={`${tool.name} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                      event.currentTarget.nextElementSibling?.removeAttribute('hidden');
                    }}
                  />
                ) : (
                  <Sparkles className="h-7 w-7 text-[#2b35ee]" aria-hidden="true" />
                )}
                {tool.iconUrl && <span hidden><Sparkles className="h-7 w-7 text-[#2b35ee]" aria-hidden="true" /></span>}
              </div>
              <div className="min-w-0 flex-1 space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {tool.category}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-slate-950 group-hover/card:text-[#2b35ee] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 border-t border-slate-200 space-y-20">
        <div className="retro-window-titlebar">
          <span>EXPERIENCE.LOG</span>
          <span aria-hidden="true">05 / EXPERIENCE</span>
          <WindowControls />
        </div>
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
                              className="retro-button mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm group/link"
                            >
                              <span>{exp.company}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          ) : (
                            <span className="retro-button mt-1 inline-flex px-3 py-1.5 text-xs sm:text-sm">
                              {exp.company}
                            </span>
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
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 border-t border-slate-200 space-y-20">
        <div className="retro-window-titlebar">
          <span>EDUCATION.LOG</span>
          <span aria-hidden="true">06 / EDUCATION</span>
          <WindowControls />
        </div>
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



    </div>
  );
};
