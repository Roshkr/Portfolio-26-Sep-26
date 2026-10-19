import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Expand, X } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { submitContactInquiry } from '../lib/contactService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  from: 'visitor' | 'portfolio';
  text: string;
}

const suggestions = [
  'About Roushan',
  'Career & experience',
  'Project case studies',
  'Where should I start?',
];

function portfolioReply(question: string): string {
  const q = question.toLowerCase();
  if (q.includes('career') || q.includes('experience') || q.includes('background')) {
    return 'Roushan is a product designer based in Ahmedabad, with 12+ years designing digital products. His experience spans enterprise compliance, SaaS, healthcare, and design systems. You can explore the About page for his full career history.';
  }
  if (q.includes('about') || q.includes('who')) {
    return 'Roushan Kumar is a product designer in Ahmedabad who works across B2B SaaS, enterprise workflows, and design systems. His approach combines research, systems thinking, and practical product judgment.';
  }
  if (q.includes('project') || q.includes('mylow') || q.includes('work') || q.includes('case')) {
    return 'Start with the Recent Work section to explore detailed case studies, including Roushani and Umbrella. They cover the problem, research, design decisions, constraints, and outcomes.';
  }
  if (q.includes('start') || q.includes('where')) {
    return "Start with Recent Work to read the case studies, or visit About to see Roushan's experience and skills. For a project conversation, contact him on WhatsApp.";
  }
  return "Explore Recent Work for project stories and About for Roushan's experience, or contact him on WhatsApp. This guide uses preset replies; the full chat is emailed when you close the popup.";
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<'idle' | 'sent' | 'failed'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<ChatMessage[]>(messages);
  const sendingRef = useRef(false);
  const emailSentRef = useRef(false);
  const closeChatRef = useRef<() => void>(() => undefined);
  messagesRef.current = messages;

  const closeChat = async () => {
    if (sendingRef.current) return;
    const transcript = messagesRef.current;
    if (transcript.length === 0 || emailSentRef.current) {
      onClose();
      return;
    }

    sendingRef.current = true;
    setIsSending(true);
    setDeliveryStatus('idle');
    const transcriptText = transcript
      .map(({ from, text }) => `${from === 'visitor' ? 'Visitor' : 'Portfolio'}: ${text}`)
      .join('\n\n');
    try {
      await submitContactInquiry(
        {
          name: 'Portfolio chat visitor',
          email: '',
          message: `Chat transcript:\n\n${transcriptText}`,
        },
        'Portfolio chat transcript',
      );
      emailSentRef.current = true;
      setDeliveryStatus('sent');
      onClose();
    } catch {
      setDeliveryStatus('failed');
    } finally {
      sendingRef.current = false;
      setIsSending(false);
    }
  };
  closeChatRef.current = () => { void closeChat(); };

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      messagesRef.current = [];
      setDeliveryStatus('idle');
      emailSentRef.current = false;
      sendingRef.current = false;
      setIsSending(false);
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeChatRef.current();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const submitQuestion = async (text: string) => {
    const value = text.trim();
    if (!value || isSending) return;
    const reply = portfolioReply(value);
    setMessages((current) => [
      ...current,
      { from: 'visitor', text: value },
      { from: 'portfolio', text: reply },
    ]);
    setQuestion('');
    setDeliveryStatus('idle');
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2 backdrop-blur-md sm:p-5"
      onClick={(event) => { if (event.target === event.currentTarget) closeChatRef.current(); }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-chat-title"
        className={`relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfbfb] text-[#111111] shadow-2xl sm:rounded-3xl ${isExpanded ? 'h-[calc(100dvh-16px)] max-h-none max-w-none sm:h-[calc(100dvh-40px)]' : 'h-[min(774px,calc(100dvh-16px))] max-h-[calc(100dvh-16px)] sm:h-[min(774px,calc(100dvh-40px))] sm:max-h-[calc(100dvh-40px)] sm:max-w-[950px]'} px-5 pb-5 pt-16 sm:px-8 sm:pb-7 sm:pt-20 lg:px-10`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute right-4 top-3 flex items-center gap-3 text-[#666666] sm:right-7 sm:top-5 sm:gap-5">
          <button type="button" onClick={() => setIsExpanded((value) => !value)} aria-label={isExpanded ? 'Restore dialog size' : 'Expand dialog'} className="hidden rounded-xl p-2 transition-colors hover:bg-slate-100 hover:text-black sm:block">
            <Expand className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => closeChatRef.current()} disabled={isSending} aria-label="Close dialog" className="rounded-xl p-2 transition-colors hover:bg-slate-100 hover:text-black disabled:cursor-wait disabled:opacity-50">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <header className="shrink-0">
          <h2 id="contact-chat-title" className="m-0 max-w-full text-[clamp(1.9rem,7vw,3.625rem)] font-semibold leading-[1.05] tracking-[-0.055em]">
            Let's talk product design.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#656565] sm:mt-3 sm:text-base lg:text-lg">
            Explore Roushan's projects, process, and experience. This guide uses preset replies; the full conversation is emailed when you close the chat.
          </p>
        </header>

        <div aria-live="polite" className="my-3 min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain py-2 sm:my-5">
          {messages.length === 0 && (
            <div className="flex h-full min-h-32 flex-col items-center justify-center px-4 text-center">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#2b35ee]/10 text-sm font-semibold text-[#2b35ee]">RK</span>
              <p className="mb-1 mt-3 text-sm font-semibold text-slate-800 sm:text-base">What would you like to know?</p>
              <p className="m-0 max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">Choose a topic below or write a question. The full conversation is sent when you close this window.</p>
            </div>
          )}
          {messages.map((message, index) => (
            <div key={`${index}-${message.from}`} className={`flex flex-col ${message.from === 'visitor' ? 'items-end' : 'items-start'}`}>
              <span className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">{message.from === 'visitor' ? 'You' : 'Roushan'}</span>
              <div className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[80%] sm:text-base ${message.from === 'visitor' ? 'rounded-br-md bg-[#2b35ee] text-white' : 'rounded-bl-md border border-slate-200 bg-white text-slate-700'}`}>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex shrink-0 flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-4 sm:flex-wrap sm:gap-2.5 sm:overflow-visible sm:pb-6">
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => submitQuestion(index === 0 ? 'Tell me a little about Roushan and his work.' : suggestion)}
              className="min-h-10 shrink-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-xs leading-tight text-slate-800 transition-colors hover:bg-slate-100 disabled:cursor-wait disabled:opacity-60 sm:px-4 sm:py-3 sm:text-sm"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <form className="shrink-0" onSubmit={(event) => { event.preventDefault(); submitQuestion(question); }}>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 transition-colors focus-within:border-[#2b35ee] focus-within:ring-2 focus-within:ring-[#2b35ee]/15">
            <input
              ref={inputRef}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="What’s on your mind?"
              aria-label="Ask a question about the portfolio"
              className="min-w-0 flex-1 border-0 bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
            />
            <button type="submit" aria-label="Send question" disabled={!question.trim() || isSending} className="rounded-lg p-1.5 text-slate-400 transition-colors enabled:text-[#2b35ee] enabled:hover:bg-[#2b35ee]/5">
              <ArrowUp className={`h-6 w-6 ${isSending ? 'animate-pulse' : ''}`} aria-hidden="true" />
            </button>
          </div>
        </form>
        <p className="mt-3 shrink-0 text-[10px] leading-relaxed text-[#686868] sm:mt-4 sm:text-xs">
          <a href={DESIGNER_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[#222222] underline underline-offset-2">Message Roushan on WhatsApp</a>
          {' · '}{isSending ? 'Sending chat transcript to email...' : deliveryStatus === 'failed' ? 'Email delivery failed. Close to retry, or use WhatsApp.' : 'Your chat transcript is emailed when you close this window.'}
        </p>
      </section>
    </div>
  );
};
