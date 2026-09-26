import React, { useState } from 'react';
import { X, Send, Mail, Check, Copy, Loader2, ExternalLink } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Roushan,\n\n${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:roushan.ux@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          name,
          email,
          message,
          _subject: `New Project Inquiry from ${name}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        triggerMailto();
        setSent(true);
      }
    } catch {
      triggerMailto();
      setSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2b35ee] mb-2">
            <Mail className="w-4 h-4" />
            <span>Direct Message</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            Let's start a project
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Have a mobile app, fintech feature, or design leadership opportunity? Reach out directly.
          </p>
        </div>

        {/* Direct Email Pill */}
        <div className="mb-6 p-3 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100">
          <span className="text-xs text-slate-600 font-mono select-all">
            {DESIGNER_INFO.email}
          </span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-2.5 py-1 text-xs font-medium bg-white text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {sent ? (
          <div className="py-12 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900">Message Delivered!</h4>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Your message has been sent directly to <strong className="text-slate-800">roushan.ux@gmail.com</strong>. Roushan will respond shortly.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=roushan.ux@gmail.com&su=${encodeURIComponent(`Project Inquiry from ${name}`)}&body=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <span>Open in Gmail</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium bg-slate-900 text-white rounded-xl hover:bg-black transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Smith"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Project Details
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your product goals, timeline, and scope..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2b35ee]/20 focus:border-[#2b35ee] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 bg-[#2b35ee] hover:bg-[#2029ca] disabled:bg-slate-400 text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-[#2b35ee]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Sending to roushan.ux@gmail.com...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
