import { useEffect, useState, useRef, useCallback } from 'react';

interface UseCounterOptions {
  duration?: number;
  startValue?: number;
  easing?: (t: number) => number;
}

export function useCounter(
  targetValue: number,
  options: UseCounterOptions = {}
) {
  const { duration = 2000, startValue = 0, easing = (t) => t } = options;
  const [count, setCount] = useState(startValue);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const targetValueRef = useRef(targetValue);
  const startValueRef = useRef(startValue);
  const durationRef = useRef(duration);
  const easingRef = useRef(easing);

  // Update refs when values change
  useEffect(() => {
    targetValueRef.current = targetValue;
    startValueRef.current = startValue;
    durationRef.current = duration;
    easingRef.current = easing;
  }, [targetValue, startValue, duration, easing]);

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / durationRef.current, 1);
    const easedProgress = easingRef.current(progress);

    const currentCount = Math.floor(
      startValueRef.current + (targetValueRef.current - startValueRef.current) * easedProgress
    );

    setCount(currentCount);

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(targetValueRef.current);
      setIsAnimating(false);
      startTimeRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCount(startValueRef.current);
    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isAnimating, animate]);

  const reset = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setCount(startValueRef.current);
    setIsAnimating(false);
    startTimeRef.current = null;
  }, []);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return { count, start, reset, isAnimating };
}

