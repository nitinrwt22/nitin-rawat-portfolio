import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  const register = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
      // If observer is already active, start observing immediately
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  };

  useEffect(() => {
    // Set up standard IntersectionObserver with rootMargin offsets
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            // Unobserve element once it is active to prevent toggle flashes
            if (observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px', // Trigger reveal slightly before it meets viewport top
      }
    );

    // Observe all currently registered elements
    elementsRef.current.forEach((el) => {
      el.classList.add('reveal-item');
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { register };
}

export default useScrollReveal;
