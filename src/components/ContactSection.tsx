import React, { useState } from 'react';
import {
  ArrowUpRight, Mail, MapPin, Check, Copy, Send, Loader2,
} from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import {
  copyTextToClipboard,
  createContactMailto,
  submitContactInquiry,
} from '../lib/contactService';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await copyTextToClipboard(DESIGNER_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const inquiry = { name: contactName, email: contactEmail, message: contactMessage };

    try {
      await submitContactInquiry(inquiry, `New Portfolio Inquiry from ${contactName}`);
      setFormSent(true);
    } catch {
      window.location.href = createContactMailto(inquiry, `Project Inquiry from ${contactName}`);
      setFormSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section
        id="contact"
        className="about-contact-sticky py-20 md:py-28 max-w-6xl mx-auto px-6 border-t border-black/[0.04]"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Info & Availability */}
          <div className="about-contact-info lg:col-span-5 space-y-8">
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
          <div className="about-contact-form lg:col-span-7 bg-[#eef0f3] rounded-[32px] p-5 sm:p-8 md:p-10">
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

                <div className="flex items-center justify-center pt-2">
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
                  className="about-contact-submit w-full py-3.5 bg-black hover:bg-neutral-800 disabled:bg-slate-400 text-white font-medium text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
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
  );
};
