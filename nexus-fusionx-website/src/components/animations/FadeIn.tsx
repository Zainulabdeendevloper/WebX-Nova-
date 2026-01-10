'use client';

import { ReactNode } from 'react';
import { useIntersection } from '@/hooks/useIntersection';
import { AnimationDirection } from '@/types';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: AnimationDirection;
  className?: string;
}

const directionClasses: Record<AnimationDirection, string> = {
  up: 'animate-fade-in-up',
  down: 'animate-fade-in-down',
  left: 'animate-fade-in-left',
  right: 'animate-fade-in-right',
};

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
}: FadeInProps) {
  const { elementRef, hasIntersected } = useIntersection({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        hasIntersected ? directionClasses[direction] : 'opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

