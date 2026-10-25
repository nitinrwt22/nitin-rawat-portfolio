import { useLayoutEffect } from 'react';

// Module-scoped buffer to store coordinate states across component lifecycles
let firstRectsBuffer: Record<string, DOMRect> = {};

export const captureFLIPFirst = () => {
  const elements = document.querySelectorAll('[data-flip-id]');
  const rects: Record<string, DOMRect> = {};
  elements.forEach((el) => {
    const id = el.getAttribute('data-flip-id');
    if (id) {
      rects[id] = el.getBoundingClientRect();
    }
  });
  firstRectsBuffer = rects;
};

export function useFLIP(triggerState: any) {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll('[data-flip-id]');
    if (Object.keys(firstRectsBuffer).length === 0) return;

    elements.forEach((el) => {
      const id = el.getAttribute('data-flip-id');
      if (!id) return;

      const firstRect = firstRectsBuffer[id];
      if (!firstRect) return;

      const lastRect = el.getBoundingClientRect();

      // Invert calculation
      const deltaX = firstRect.left - lastRect.left;
      const deltaY = firstRect.top - lastRect.top;
      
      const deltaW = lastRect.width > 0 ? firstRect.width / lastRect.width : 1;
      const deltaH = lastRect.height > 0 ? firstRect.height / lastRect.height : 1;

      // Skip elements that haven't shifted
      if (deltaX === 0 && deltaY === 0 && deltaW === 1 && deltaH === 1) return;

      const htmlEl = el as HTMLElement;

      // Lock element into "First" position immediately (Transitions disabled)
      htmlEl.style.transition = 'none';
      htmlEl.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${deltaW}, ${deltaH})`;
      htmlEl.style.transformOrigin = 'top left';

      // Force a browser reflow/repaint
      void htmlEl.offsetHeight;

      // Play transition by resetting transform styles
      requestAnimationFrame(() => {
        htmlEl.style.transition = 'transform 1200ms cubic-bezier(0.76, 0, 0.24, 1), opacity 1200ms ease';
        htmlEl.style.transform = 'translate3d(0, 0, 0) scale(1, 1)';
      });

      // Remove transition styles to clean up DOM overrides
      const timer = setTimeout(() => {
        htmlEl.style.transition = '';
        htmlEl.style.transform = '';
        htmlEl.style.transformOrigin = '';
      }, 1250);

      return () => clearTimeout(timer);
    });

    // Clear buffer rects after matching morph targets
    firstRectsBuffer = {};
  }, [triggerState]);

  return { captureFirst: captureFLIPFirst };
}

export default useFLIP;
