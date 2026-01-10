import { ReactNode } from 'react';
import { ContainerMaxWidth } from '@/types';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: ContainerMaxWidth;
}

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1280px]',
  '2xl': 'max-w-[1400px]',
};

export default function Container({ children, className, maxWidth = '2xl' }: ContainerProps) {
  return (
    <div className={cn('w-full mx-auto px-6 sm:px-8 lg:px-12', maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  );
}

