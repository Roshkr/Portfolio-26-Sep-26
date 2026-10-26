import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Expand, X } from 'lucide-react';
import { submitContactInquiry } from '../lib/contactService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  from: 'visitor' | 'portfolio' | 'system';
  text: string;
}

const suggestions = [
  'About Roushan',
  'Career & experience',
  'Where should I start?',
  'Check my fit for a role',
];

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<'idle' | 'sent' | 'failed'>('idle');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<ChatMessage[]>(messages);
  const sendingRef = useRef(false);
  const respondingRef = useRef(false);
  const emailSentRef = useRef(false);
  const closeChatRef = useRef<() => void>(() => undefined);
  messagesRef.current = messages;

  const closeChat = async () => {
    if (sendingRef.current || respondingRef.current) return;
    const transcript = messagesRef.current;
    if (transcript.length === 0 || emailSentRef.current) {
      onClose();
      return;
    }

    sendingRef.current = true;
    setIsSending(true);
    setDeliveryStatus('idle');
    const transcriptText = transcript
      .map(({ from, text }) => `${from === 'visitor' ? 'Visitor' : from === 'system' ? 'Chat status' : 'Roushan'}: ${text}`)
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
      setIsResponding(false);
      respondingRef.current = false;
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
    if (!value || isSending || respondingRef.current) return;
    const conversation = [...messagesRef.current, { from: 'visitor' as const, text: value }];
    messagesRef.current = conversation;
    setMessages(conversation);
    setQuestion('');
    setDeliveryStatus('idle');
    respondingRef.current = true;
    setIsResponding(true);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 27_000);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: conversation.map(({ from, text }) => ({ role: from === 'visitor' ? 'user' : 'model', text })),
        }),
      });
      let result: { reply?: unknown; error?: unknown };
      try {
        result = await response.json() as { reply?: unknown; error?: unknown };
      } catch {
        if (response.status === 404) {
          throw new Error('The chat service is missing from this deployment. Please try again later.');
        }
        throw new Error(response.status >= 500
          ? 'The chat service failed before returning a reply. Please try again in a moment.'
          : 'The chat service returned an unreadable response. Please try again.');
      }
      if (!response.ok || typeof result.reply !== 'string') {
        throw new Error(typeof result.error === 'string' ? result.error : 'Roushan could not reply just now. Please try again.');
      }
      setMessages((current) => [...current, { from: 'portfolio', text: result.reply as string }]);
    } catch (error) {
      const message = error instanceof DOMException && error.name === 'AbortError'
        ? 'Roushan took too long to reply. Please try again.'
        : error instanceof TypeError
        ? 'Could not reach the chat service. Check the deployment and try again.'
        : error instanceof Error ? error.message : 'Chat is temporarily unavailable. Please try again.';
      setMessages((current) => [...current, { from: 'system', text: message }]);
    } finally {
      window.clearTimeout(timeoutId);
      respondingRef.current = false;
      setIsResponding(false);
    }
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
          <button type="button" onClick={() => closeChatRef.current()} disabled={isSending || isResponding} aria-label="Close dialog" className="rounded-xl p-2 transition-colors hover:bg-slate-100 hover:text-black disabled:cursor-wait disabled:opacity-50">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <header className="shrink-0">
          <h2 id="contact-chat-title" className="m-0 max-w-full text-[clamp(1.9rem,7vw,3.625rem)] font-semibold leading-[1.05] tracking-[-0.055em]">
            Let's talk product design.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#656565] sm:mt-3 sm:text-base lg:text-lg">
            Ask about Roushan's work, process, or career. If you'd like a direct follow-up, share your email in the chat. The conversation is emailed to Roushan when you close it.
          </p>
        </header>

        <div aria-live="polite" className="my-3 min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain py-2 sm:my-5">
          {messages.length === 0 && (
            <div className="flex h-full min-h-32 flex-col items-center justify-center px-4 text-center">
              <div className="h-11 w-11 overflow-hidden rounded-full bg-[#2b35ee]/10">
                <video
                  src="/line-profile-picture.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Roushan profile video"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mb-1 mt-3 text-sm font-semibold text-slate-800 sm:text-base">What would you like to know?</p>
              <p className="m-0 max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">Choose a topic below or write a question.</p>
            </div>
          )}
          {messages.map((message, index) => (
            <div key={`${index}-${message.from}`} className={`flex flex-col ${message.from === 'visitor' ? 'items-end' : 'items-start'}`}>
              <span className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">{message.from === 'visitor' ? 'You' : message.from === 'system' ? 'Chat status' : 'Roushan'}</span>
              <div className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[80%] sm:text-base ${message.from === 'visitor' ? 'rounded-br-md bg-[#2b35ee] text-white' : 'rounded-bl-md border border-slate-200 bg-white text-slate-700'}`}>
                {message.text}
              </div>
            </div>
          ))}
          {isResponding && (
            <div role="status" aria-label="Roushan is typing" className="flex flex-col items-start">
              <span className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Roushan</span>
              <div className="inline-flex items-center gap-1 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3">
                {[0, 1, 2].map((dot) => (
                  <span key={dot} className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-500" style={{ animationDelay: `${dot * 180}ms` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex shrink-0 flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-4 sm:flex-wrap sm:gap-2.5 sm:overflow-visible sm:pb-6">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              disabled={isResponding || isSending}
              onClick={() => submitQuestion(suggestion)}
              className="min-h-10 shrink-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-xs leading-tight text-slate-800 transition-colors hover:bg-slate-100 disabled:cursor-wait disabled:opacity-60 sm:px-4 sm:py-3 sm:text-sm"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <form className="shrink-0" onSubmit={(event) => { event.preventDefault(); submitQuestion(question); }}>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 transition-colors focus-within:border-[#2b35ee] focus-within:ring-2 focus-within:ring-[#2b35ee]/15">
            <textarea
              ref={inputRef}
              rows={1}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  submitQuestion(question);
                }
              }}
              placeholder="Ask a question or paste a job description..."
              aria-label="Ask a question or paste a job description"
              className="max-h-32 min-h-6 min-w-0 flex-1 resize-y border-0 bg-transparent text-base leading-relaxed text-slate-800 outline-none placeholder:text-slate-400"
            />
            <button type="submit" aria-label="Send question" disabled={!question.trim() || isSending || isResponding} className="rounded-lg p-1.5 text-slate-400 transition-colors enabled:text-[#2b35ee] enabled:hover:bg-[#2b35ee]/5">
              <ArrowUp className={`h-6 w-6 ${isSending || isResponding ? 'animate-pulse' : ''}`} aria-hidden="true" />
            </button>
          </div>
        </form>
        <p className="mt-3 shrink-0 text-[10px] leading-relaxed text-[#686868] sm:mt-4 sm:text-xs">
          {isSending ? 'Sending chat transcript to email...' : deliveryStatus === 'failed' ? 'Email delivery failed. Close to retry.' : ''}
        </p>
      </section>
    </div>
  );
};
