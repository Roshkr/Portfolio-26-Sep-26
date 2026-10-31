import React, { useLayoutEffect, useState } from 'react';
import { Square } from 'lucide-react';
import { createPortal } from 'react-dom';

interface MinimizedWindow {
  id: string;
  title: string;
  element: HTMLElement;
}

export const RetroWindowManager: React.FC = () => {
  const [minimizedWindows, setMinimizedWindows] = useState<MinimizedWindow[]>([]);

  useLayoutEffect(() => {
    const handleMinimize = (event: Event) => {
      const detail = (event as CustomEvent<MinimizedWindow>).detail;
      if (!detail?.element?.isConnected) return;
      setMinimizedWindows((windows) => [
        ...windows.filter((item) => item.id !== detail.id),
        detail,
      ]);
    };

    window.addEventListener('retro-window:minimize', handleMinimize);
    return () => window.removeEventListener('retro-window:minimize', handleMinimize);
  }, []);

  const restoreWindow = (item: MinimizedWindow) => {
    if (item.element.isConnected) {
      delete item.element.dataset.retroMinimized;
      delete item.element.dataset.retroShrunk;
      window.dispatchEvent(new CustomEvent('retro-window:restore', { detail: { id: item.id, element: item.element } }));
      requestAnimationFrame(() => item.element.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'center',
      }));
    }
    setMinimizedWindows((windows) => windows.filter((windowItem) => windowItem.id !== item.id));
  };

  return minimizedWindows.length > 0 ? createPortal(
    <aside className="retro-window-dock" aria-label="Minimized sections">
      <div className="retro-window-titlebar">
        <span>MINIMIZED WINDOWS</span>
        <span aria-hidden="true">CLICK TO MAXIMIZE</span>
      </div>
      <div className="retro-window-dock-items">
        {minimizedWindows.map((item) => (
          <button key={item.id} type="button" className="retro-button retro-window-dock-item" onClick={() => restoreWindow(item)} aria-label={`Maximize ${item.title}`}>
            <Square className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{item.title}</span>
            <span className="retro-window-dock-action">MAXIMIZE</span>
          </button>
        ))}
      </div>
    </aside>,
    document.body,
  ) : null;
};
