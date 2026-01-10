'use client';

import { ReactNode, CSSProperties } from 'react';
import { useIntersection } from '@/hooks/useIntersection';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: string;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ScrollReveal({
  children,
  animation = 'animate-fade-in-up',
  threshold = 0.1,
  className,
  style,
}: ScrollRevealProps) {
  const { elementRef, hasIntersected } = useIntersection({ triggerOnce: true, threshold });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(hasIntersected ? animation : 'opacity-0', className)}
      style={style}
    >
      {children}
    </div>
  );
}

