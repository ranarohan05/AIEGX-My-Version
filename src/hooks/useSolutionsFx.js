import { useEffect, useRef } from 'react';

export default function useSolutionsFx(enabled) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;

    const root = rootRef.current;
    if (!root) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      root.classList.add('is-revealed');
      return () => root.classList.remove('is-revealed');
    }

    const revealObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        root.classList.add('is-revealed');
        revealObserver.disconnect();
      }
    }, { threshold: 0.12 });
    revealObserver.observe(root);

    return () => {
      revealObserver.disconnect();
      root.classList.remove('is-revealed');
    };
  }, [enabled]);

  return rootRef;
}
