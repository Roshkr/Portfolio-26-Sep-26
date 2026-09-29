import { useEffect } from 'react';

const PROTECTED_ROOT = '.portfolio-protected';
const EDITABLE_CONTENT = 'input, textarea, select, [contenteditable="true"]';

const isElement = (target: EventTarget | null): target is Element =>
  target instanceof Element;

const isProtectedTarget = (target: EventTarget | null) =>
  isElement(target) && target.closest(PROTECTED_ROOT) !== null;

const isProtectedPageTarget = (target: EventTarget | null) =>
  isProtectedTarget(target)
  || (target === document.body && document.querySelector(PROTECTED_ROOT) !== null);

const isEditableTarget = (target: EventTarget | null) =>
  isElement(target) && target.closest(EDITABLE_CONTENT) !== null;

export const useContentProtection = () => {
  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => {
      if (isProtectedTarget(event.target) && !isEditableTarget(event.target)) {
        event.preventDefault();
      }
    };

    const preventClipboardAction = (event: ClipboardEvent) => {
      const selectionAnchor = window.getSelection()?.anchorNode;
      const selectedProtectedContent = selectionAnchor
        ? document.querySelector(PROTECTED_ROOT)?.contains(selectionAnchor) ?? false
        : false;

      if (
        !isEditableTarget(event.target)
        && (isProtectedTarget(event.target) || selectedProtectedContent)
      ) {
        event.preventDefault();
      }
    };

    const preventMediaDrag = (event: DragEvent) => {
      if (isProtectedTarget(event.target)) event.preventDefault();
    };

    const preventBrowserShortcuts = (event: KeyboardEvent) => {
      if (!isProtectedPageTarget(event.target) || isEditableTarget(event.target)) return;

      const key = event.key.toLowerCase();
      const isBrowserShortcut = (event.ctrlKey || event.metaKey)
        && ['c', 'x', 'p', 's'].includes(key);
      const isScreenshotKey = event.key === 'PrintScreen';

      if (isBrowserShortcut || isScreenshotKey) event.preventDefault();
    };

    document.addEventListener('contextmenu', preventContextMenu, true);
    document.addEventListener('copy', preventClipboardAction, true);
    document.addEventListener('cut', preventClipboardAction, true);
    document.addEventListener('dragstart', preventMediaDrag, true);
    document.addEventListener('keydown', preventBrowserShortcuts, true);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu, true);
      document.removeEventListener('copy', preventClipboardAction, true);
      document.removeEventListener('cut', preventClipboardAction, true);
      document.removeEventListener('dragstart', preventMediaDrag, true);
      document.removeEventListener('keydown', preventBrowserShortcuts, true);
    };
  }, []);
};
