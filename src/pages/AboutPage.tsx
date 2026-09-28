import React, { useState } from 'react';
import {
  FileText,
  Download,
  ArrowUpRight,
  Mail,
  MapPin,
  Check,
  Copy,
  Send,
  Sparkles,
  ExternalLink,
  Loader2,
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
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerDirectMail = () => {
    const subject = encodeURIComponent(`Project Inquiry from ${contactName}`);
    const body = encodeURIComponent(
      `Hi Roushan,\n\n${contactMessage}\n\nFrom: ${contactName}\nEmail: ${contactEmail}`
    );
    window.location.href = `mailto:roushan.ux@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/roushan.ux@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
          _subject: `New Portfolio Inquiry from ${contactName}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setFormSent(true);
      } else {
        triggerDirectMail();
        setFormSent(true);
      }
    } catch {
      triggerDirectMail();
      setFormSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
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
                className={`bg-[#eef0f3] rounded-[22px] overflow-hidden p-3.5 sm:p-4 md:p-4.5 flex flex-col sm:flex-row items-center sm:items-center gap-3.5 sm:gap-4 md:gap-5 hover:bg-[#e7eaf0] transition-colors group/card ${exp.company === 'UID' ? 'min-h-[180px]' : ''}`}
              >
                {/* Left side: Logo/Image with compact reduced height */}
                {exp.logoUrl && (
                  <div className={`w-full sm:w-36 md:w-40 ${exp.company === 'UID' ? 'h-36' : 'h-24 sm:h-28 md:h-28'} shrink-0 self-center`}>
                    <CompanyLogoMark
                      company={exp.company}
                      logoUrl={exp.logoUrl}
                      websiteUrl={exp.websiteUrl}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Right side: Next to logo, all details */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5">
                      <div>
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
                      <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 bg-white/80 rounded-lg text-slate-700 self-start shrink-0 shadow-2xs">
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
                className="bg-[#eef0f3] rounded-[22px] overflow-hidden p-3.5 sm:p-4 md:p-4.5 flex flex-col sm:flex-row items-center sm:items-center gap-3.5 sm:gap-4 md:gap-5 hover:bg-[#e7eaf0] transition-colors group/card"
              >
                {/* Left side: Logo with compact reduced height */}
                {edu.logoUrl && (
                  <div className="w-full sm:w-36 md:w-40 h-24 sm:h-28 md:h-28 shrink-0 self-center">
                    <CompanyLogoMark
                      company={edu.institution}
                      logoUrl={edu.logoUrl}
                      websiteUrl={edu.websiteUrl}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Right side: Next to logo, all details */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
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
                      <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 bg-white/80 rounded-lg text-slate-700 self-start shrink-0 shadow-2xs">
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

      {/* Dedicated Contact Section on About Page (Requested) */}
      <section
        id="contact"
        className="py-20 md:py-28 max-w-6xl mx-auto px-6 border-t border-black/[0.04]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#2b35ee] font-semibold">
                Contact & Collaboration
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950">
                Let's chat
              </h2>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                Currently open for collaboration and freelance projects, contract consulting, and product design advisory.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{DESIGNER_INFO.location}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Mail className="w-4 h-4 text-slate-400" />
                <a
                  href={DESIGNER_INFO.socials.email}
                  className="hover:text-[#2b35ee] transition-colors"
                >
                  {DESIGNER_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-400 hover:text-black rounded-lg transition-colors cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links List */}
            <div className="space-y-3 pt-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Connect Online
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={DESIGNER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/60 rounded-xl text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                </a>
                <a
                  href={DESIGNER_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#eef0f3] hover:bg-[#e4e7ed] text-slate-800 rounded-xl text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={DESIGNER_INFO.socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#eef0f3] hover:bg-[#e4e7ed] text-slate-800 rounded-xl text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Behance</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={DESIGNER_INFO.socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#eef0f3] hover:bg-[#e4e7ed] text-slate-800 rounded-xl text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7 bg-[#eef0f3] rounded-[32px] p-8 md:p-10">
            {formSent ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Message Sent to Roushan!
                </h3>
                <p className="text-sm text-slate-600 max-w-md">
                  Thank you for reaching out, <span className="font-medium text-slate-900">{contactName || 'there'}</span>. Your message has been sent directly to <strong className="text-slate-950 font-semibold">roushan.ux@gmail.com</strong>. I'll get back to you shortly.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=roushan.ux@gmail.com&su=${encodeURIComponent(`Project Inquiry from ${contactName}`)}&body=${encodeURIComponent(contactMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-medium bg-white hover:bg-slate-50 text-slate-800 rounded-xl border border-slate-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Also open in Gmail</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <button
                    onClick={() => {
                      setFormSent(false);
                      setContactMessage('');
                    }}
                    className="px-4 py-2 text-xs font-medium bg-black hover:bg-neutral-800 text-white rounded-xl transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="space-y-0.5">
                  <h3 className="text-xl font-medium text-slate-950">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    Have a project or design inquiry? Send a note directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Tell me about your product, timeline, or open role..."
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-black hover:bg-neutral-800 disabled:bg-slate-400 text-white font-medium text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending to roushan.ux@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Roushan</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
