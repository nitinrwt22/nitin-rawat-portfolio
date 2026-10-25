import { useEffect, useState } from 'react';

export function usePerformance() {
  const [isDegraded, setIsDegraded] = useState(false);

  useEffect(() => {
    // 1. Check user browser settings for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsDegraded(true);
      document.documentElement.classList.replace('perf-mode-default', 'perf-mode-degraded');
      return;
    }

    // 2. Profile CPU speed by timing a standardized mathematical loop
    const start = performance.now();
    for (let i = 0; i < 500000; i++) {
      Math.sqrt(i);
    }
    const elapsed = performance.now() - start;

    // 3. Retrieve processor thread count (fallback to standard 4 cores)
    const cores = navigator.hardwareConcurrency || 4;

    // If loop takes > 25ms, or thread count is low, trigger fallback rendering paths
    const isSlowDevice = elapsed > 25 || cores < 4;

    if (isSlowDevice) {
      setIsDegraded(true);
      document.documentElement.classList.add('perf-mode-degraded');
      document.documentElement.classList.remove('perf-mode-default');
    } else {
      setIsDegraded(false);
      document.documentElement.classList.add('perf-mode-default');
      document.documentElement.classList.remove('perf-mode-degraded');
    }
  }, []);

  return { isDegraded };
}
export default usePerformance;
