import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Expand, Mic, X } from 'lucide-react';
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
  'Just talk to me',
  'What does your career look like',
  'How your projects came together',
  'Where to start',
];

function portfolioReply(question: string): string {
  const q = question.toLowerCase();
  if (q.includes('career') || q.includes('experience') || q.includes('background')) {
    return 'Roushan is a product designer based in Ahmedabad, with 12+ years designing digital products. His experience spans enterprise compliance, SaaS, healthcare, and design systems. You can explore the About page for his full career history.';
  }
  if (q.includes('project') || q.includes('mylow') || q.includes('work') || q.includes('case')) {
    return 'Start with the Recent Work section to explore detailed case studies, including Roushani and Umbrella. They cover the problem, research, design decisions, constraints, and outcomes.';
  }
  if (q.includes('start') || q.includes('where')) {
    return 'A good place to start is Recent Work for case studies, or About for Roushan’s background, skills, and experience. If you have a project in mind, send him a message on WhatsApp.';
  }
  return 'I can point you around the portfolio: explore Recent Work for project stories, About for Roushan’s experience, or use the WhatsApp link to ask him directly. This portfolio guide uses preset answers and does not send your message anywhere.';
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
        className={`relative flex w-full flex-col overflow-hidden rounded-lg bg-[#f1f0ec] text-[#111111] shadow-2xl sm:rounded-[5px] ${isExpanded ? 'h-[calc(100dvh-16px)] max-h-none max-w-none sm:h-[calc(100dvh-40px)]' : 'h-[min(774px,calc(100dvh-16px))] max-h-[calc(100dvh-16px)] sm:h-[min(774px,calc(100dvh-40px))] sm:max-h-[calc(100dvh-40px)] sm:max-w-[950px]'} px-5 pb-5 pt-16 sm:px-8 sm:pb-7 sm:pt-20 lg:px-10`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute right-4 top-3 flex items-center gap-3 text-[#666666] sm:right-7 sm:top-5 sm:gap-5">
          <button type="button" onClick={() => setIsExpanded((value) => !value)} aria-label={isExpanded ? 'Restore dialog size' : 'Expand dialog'} className="rounded p-2 transition-colors hover:bg-black/5 hover:text-black">
            <Expand className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => closeChatRef.current()} disabled={isSending} aria-label="Close dialog" className="rounded p-2 transition-colors hover:bg-black/5 hover:text-black disabled:cursor-wait disabled:opacity-50">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <header className="shrink-0">
          <h2 id="contact-chat-title" className="m-0 max-w-full text-[clamp(1.9rem,7vw,3.625rem)] font-semibold leading-[1.05] tracking-[-0.055em]">
            Fresh start. Ask away.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#656565] sm:mt-3 sm:text-base lg:text-lg">
            Projects, process, design systems, and career. Explore Roushan’s portfolio or get in touch directly.
          </p>
        </header>

        <div aria-live="polite" className="my-3 min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain py-2 sm:my-5">
          {messages.map((message, index) => (
            <div key={`${index}-${message.from}`} className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed sm:text-base ${message.from === 'visitor' ? 'ml-auto bg-[#7054f5] text-white' : 'bg-white/80 text-[#333333]'}`}>
              {message.text}
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
              className={`${index === 0 ? 'border-[#7054f5] bg-[#7054f5] font-medium text-white hover:bg-[#6045e8]' : 'border-[#b8b6b0] bg-transparent text-[#1c1c1c] hover:bg-black/5'} min-h-10 shrink-0 rounded-[5px] border px-3 py-2.5 text-left text-xs leading-tight transition-colors disabled:cursor-wait disabled:opacity-60 sm:px-4 sm:py-3 sm:text-sm`}
            >
              {index === 0 && <Mic className="mr-2 inline h-4 w-4 align-[-3px]" aria-hidden="true" />}
              {suggestion}
            </button>
          ))}
        </div>

        <form className="shrink-0" onSubmit={(event) => { event.preventDefault(); submitQuestion(question); }}>
          <div className="flex items-center gap-3 border-b border-[#7054f5] pb-3">
            <input
              ref={inputRef}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="What’s on your mind?"
              aria-label="Ask a question about the portfolio"
              className="min-w-0 flex-1 border-0 bg-transparent text-base text-[#222222] outline-none placeholder:text-[#777777]"
            />
            <button type="button" aria-label="Voice input is unavailable" title="Voice input is unavailable" className="text-[#777777]" disabled>
              <Mic className="h-6 w-6" aria-hidden="true" />
            </button>
            <button type="submit" aria-label="Send question" disabled={!question.trim() || isSending} className="pl-2 text-[#aaa9a5] transition-colors enabled:text-[#7054f5]">
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
