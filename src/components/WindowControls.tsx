import React, { useEffect, useId, useRef, useState } from 'react';
import { Minus, Square, X } from 'lucide-react';
import { createPortal } from 'react-dom';

const WINDOW_SELECTOR = '.retro-window, .retro-project-window, .retro-contact-window, .about-footer, .about-page > section, .case-study-page > section';

const getWindowElement = (controls: Element | null) => controls?.closest<HTMLElement>(WINDOW_SELECTOR) ?? null;

const getWindowTitle = (element: HTMLElement) =>
  element.querySelector<HTMLElement>('.retro-window-titlebar > span:first-child')?.textContent?.trim() || 'Portfolio window';

const getWindowId = (element: HTMLElement) => {
  if (!element.dataset.retroWindowId) {
    element.dataset.retroWindowId = window.crypto?.randomUUID?.() ?? `window-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
  return element.dataset.retroWindowId;
};

export const WindowControls: React.FC = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [closeAttempt, setCloseAttempt] = useState<{ title: string; attempt: number; trigger: HTMLButtonElement } | null>(null);
  const controlsRef = useRef<HTMLSpanElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();
  const dialogDescriptionId = useId();

  useEffect(() => {
    if (!closeAttempt) return;
    noButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const { trigger } = closeAttempt;
        setCloseAttempt(null);
        requestAnimationFrame(() => trigger.focus());
        return;
      }

      if (event.key === 'Tab') {
        const buttons = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])') ?? []);
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeAttempt]);

  useEffect(() => {
    const handleRestore = (event: Event) => {
      const detail = (event as CustomEvent<{ element?: HTMLElement }>).detail;
      const target = getWindowElement(controlsRef.current);
      if (target && target === detail?.element) setIsShrunk(false);
    };

    window.addEventListener('retro-window:restore', handleRestore);
    return () => window.removeEventListener('retro-window:restore', handleRestore);
  }, []);

  const minimize = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const target = getWindowElement(event.currentTarget.closest('.retro-window-controls'));
    if (!target) return;

    const id = getWindowId(target);
    const title = getWindowTitle(target);
    target.dataset.retroMinimized = 'true';
    window.dispatchEvent(new CustomEvent('retro-window:minimize', { detail: { id, title, element: target } }));
  };

  const toggleShrink = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const target = getWindowElement(event.currentTarget.closest('.retro-window-controls'));
    if (!target) return;

    const nextValue = target.dataset.retroShrunk !== 'true';
    target.dataset.retroShrunk = String(nextValue);
    setIsShrunk(nextValue);
  };

  const requestClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const target = getWindowElement(event.currentTarget.closest('.retro-window-controls'));
    setCloseAttempt({
      title: target ? getWindowTitle(target) : 'Portfolio window',
      attempt: 1,
      trigger: event.currentTarget,
    });
  };

  return (
    <span ref={controlsRef} className="retro-window-controls">
      <button className="retro-window-control" type="button" onClick={minimize} aria-label="Minimize this section" title="Minimize">
        <Minus />
      </button>
      <button className="retro-window-control" type="button" onClick={toggleShrink} aria-label={isShrunk ? 'Restore section size' : 'Shrink this section'} aria-pressed={isShrunk} title={isShrunk ? 'Restore size' : 'Shrink'}>
        <Square />
      </button>
      <button className="retro-window-control" type="button" onClick={requestClose} aria-label="Close this section" title="Close">
        <X />
      </button>
      {closeAttempt && createPortal(
        <div className="retro-dialog-backdrop">
          <section
            ref={dialogRef}
            key={closeAttempt.attempt}
            className="retro-window retro-confirm-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            aria-describedby={dialogDescriptionId}
          >
            <div className="retro-window-titlebar">
              <span>CLOSE REQUEST / CONFIRMATION</span>
              <span aria-hidden="true">{String(closeAttempt.attempt).padStart(2, '0')}</span>
            </div>
            <div className="retro-confirm-body">
              <p className="retro-metadata">{closeAttempt.title}</p>
              <h2 id={dialogTitleId}>Are you sure? <span role="img" aria-label="smiling face">{String.fromCodePoint(0x1f642)}</span></h2>
              <p id={dialogDescriptionId}>Do you want to close this section?</p>
              <div className="retro-confirm-actions">
                <button type="button" className="retro-button px-5 py-3" onClick={() => setCloseAttempt((request) => request ? { ...request, attempt: request.attempt + 1 } : null)}>
                  Yes
                </button>
                <button ref={noButtonRef} type="button" className="retro-button px-5 py-3" onClick={() => {
                  const { trigger } = closeAttempt;
                  setCloseAttempt(null);
                  requestAnimationFrame(() => trigger.focus());
                }}>
                  No
                </button>
              </div>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </span>
  );
};
