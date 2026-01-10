'use client';

import { useEffect } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useIntersection } from '@/hooks/useIntersection';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function Counter({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: CounterProps) {
  const { elementRef, hasIntersected } = useIntersection({ triggerOnce: true, threshold: 0.5 });
  const { count, start } = useCounter(value, { duration, startValue: 0 });

  useEffect(() => {
    if (hasIntersected) {
      start();
    }
  }, [hasIntersected, start]);

  const formatValue = (num: number): string => {
    return num.toFixed(decimals);
  };

  return (
    <span ref={elementRef as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}
      {formatValue(count)}
      {suffix}
    </span>
  );
}

