import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  children?: ReactNode;
}

export default function Icon({ name, size = 24, className, children }: IconProps) {
  // If children is provided (SVG content), render it
  if (children) {
    return (
      <svg
        className={cn('inline-block', className)}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={name}
      >
        {children}
      </svg>
    );
  }

  // Otherwise, try to load from public/icons
  // For now, we'll use a placeholder. In production, you'd use Next.js Image or dynamic import
  return (
    <span className={cn('inline-block', className)} aria-label={name}>
      {/* Placeholder - replace with actual icon loading logic */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    </span>
  );
}

