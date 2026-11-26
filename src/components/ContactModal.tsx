import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Expand, MessageCircle, X } from 'lucide-react';
import { submitContactInquiry } from '../lib/contactService';
import { findChatAnswer } from '../data/chatAnswers';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  from: 'visitor' | 'portfolio' | 'system';
  text: string;
  whatsappUrl?: string;
}

const suggestions = [
  'Tell me about yourself',
  'What roles are you looking for?',
  'How do you approach design?',
  'How do you test your designs?',
];


export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<ChatMessage[]>(messages);
  const respondingRef = useRef(false);
  const requestControllerRef = useRef<AbortController | null>(null);
  const closedSessionRef = useRef(false);
  const closeChatRef = useRef<() => void>(() => undefined);
  messagesRef.current = messages;

  const closeChat = () => {
    if (closedSessionRef.current) return;
    closedSessionRef.current = true;

    const transcript = messagesRef.current;
    requestControllerRef.current?.abort();
    requestControllerRef.current = null;
    respondingRef.current = false;
    setIsResponding(false);
    onClose();

    if (transcript.length > 0) {
      const transcriptText = transcript
        .map(({ from, text }) => `${from === 'visitor' ? 'Visitor' : from === 'system' ? 'Chat status' : 'Roushan'}: ${text}`)
        .join('\n\n');
      void submitContactInquiry(
        {
          name: 'Portfolio chat visitor',
          email: '',
          message: `Chat transcript:\n\n${transcriptText}`,
        },
        'Portfolio chat transcript',
      ).catch((error) => console.error('Failed to email the portfolio chat transcript:', error));
    }
  };
  closeChatRef.current = closeChat;

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      messagesRef.current = [];
      return;
    }
    closedSessionRef.current = false;
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
    if (!value || respondingRef.current) return;
    const conversation = [...messagesRef.current, { from: 'visitor' as const, text: value }];

    messagesRef.current = conversation;
    setMessages(conversation);
    setQuestion('');
    respondingRef.current = true;
    setIsResponding(true);
    const controller = new AbortController();
    requestControllerRef.current = controller;
    const timeoutId = window.setTimeout(() => controller.abort(), 22_000);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: conversation
            .filter(({ from }) => from !== 'system')
            .map(({ from, text }) => ({ role: from === 'visitor' ? 'user' : 'model', text })),
        }),
      });
      const result = await response.json() as { reply?: unknown };
      if (!response.ok || typeof result.reply !== 'string') throw new Error('The AI reply was unavailable.');
      setMessages((current) => [...current, { from: 'portfolio', text: result.reply as string }]);
    } catch (error) {
      if (requestControllerRef.current !== controller) return;
      console.warn('AI chat unavailable; using the approved local answer fallback.', error);
      const approvedAnswer = findChatAnswer(value);
      const fallbackReply: ChatMessage = approvedAnswer
        ? { from: 'portfolio', text: approvedAnswer }
        : {
            from: 'portfolio',
            text: "I don't have an approved answer for that yet. You can ask Roushan directly on WhatsApp.",
            whatsappUrl: `${DESIGNER_INFO.whatsappUrl.split('?')[0]}?text=${encodeURIComponent(`Hi Roushan, I have a question from your portfolio: ${value}`)}`,
          };
      setMessages((current) => [...current, fallbackReply]);
    } finally {
      window.clearTimeout(timeoutId);
      if (requestControllerRef.current === controller) {
        requestControllerRef.current = null;
        respondingRef.current = false;
        setIsResponding(false);
      }
    }
  };
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2 backdrop-blur-md sm:p-4"
      onClick={(event) => { if (event.target === event.currentTarget) closeChatRef.current(); }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-chat-title"
        className={`retro-chat-modal relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-[#111111] shadow-2xl sm:rounded-3xl ${isExpanded ? 'h-[calc(100dvh-16px)] max-h-none max-w-none sm:h-[calc(100dvh-40px)]' : 'h-[min(774px,calc(100dvh-16px))] max-h-[calc(100dvh-16px)] sm:h-[min(774px,calc(100dvh-40px))] sm:max-h-[calc(100dvh-40px)] sm:max-w-[950px]'} px-4 pb-4 pt-16 sm:px-6 sm:pb-6 sm:pt-16 lg:px-6`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute right-4 top-3 flex items-center gap-3 text-[#666666] sm:right-6 sm:top-4 sm:gap-4">
          <button type="button" onClick={() => setIsExpanded((value) => !value)} aria-label={isExpanded ? 'Restore dialog size' : 'Expand dialog'} className="hidden rounded-xl p-2 transition-colors hover:bg-slate-100 hover:text-black sm:block">
            <Expand className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => closeChatRef.current()} aria-label="Close dialog" className="retro-chat-close rounded-xl p-2 transition-colors">
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

        <div aria-live="polite" className="retro-chat-messages my-3 min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain py-2 sm:my-6">
          {messages.length === 0 && (
            <div className="retro-chat-empty-state flex h-full min-h-0 flex-col items-center justify-center px-4 text-center">
              <div className="retro-chat-animation relative mb-3 grid place-items-center bg-white">
                <video
                  src="/line-profile-picture.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Roushan profile video"
                  title="Roushan Kumar profile video"
                  className="h-full w-full bg-white object-contain"
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
              {message.whatsappUrl && (
                <a href={message.whatsappUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb958]">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Message Roushan on WhatsApp
                </a>
              )}
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

        <div className="flex shrink-0 flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-4 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:pb-6">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              disabled={isResponding}
              onClick={() => submitQuestion(suggestion)}
              className="min-h-10 shrink-0 rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-xs leading-tight text-slate-800 transition-colors hover:bg-slate-100 disabled:cursor-wait disabled:opacity-60 sm:px-4 sm:py-3 sm:text-sm"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <form className="shrink-0" onSubmit={(event) => { event.preventDefault(); submitQuestion(question); }}>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 transition-colors focus-within:border-[#2b35ee] focus-within:ring-2 focus-within:ring-[#2b35ee]/15">
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
            <button type="submit" aria-label="Send question" disabled={!question.trim() || isResponding} className="rounded-lg p-2 text-slate-400 transition-colors enabled:text-[#2b35ee] enabled:hover:bg-[#2b35ee]/5">
              <ArrowUp className={`h-6 w-6 ${isResponding ? 'animate-pulse' : ''}`} aria-hidden="true" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
