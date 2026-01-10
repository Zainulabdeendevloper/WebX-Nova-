import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersection(options: UseIntersectionOptions = {}) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    triggerOnce = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        setIsIntersecting(isCurrentlyIntersecting);

        if (isCurrentlyIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }

        if (triggerOnce && hasIntersected && !isCurrentlyIntersecting) {
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce, hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
}

