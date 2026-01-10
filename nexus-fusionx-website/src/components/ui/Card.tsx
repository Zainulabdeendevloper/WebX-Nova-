import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-[#0D1220] border border-[#1E3A8A]/30 p-6',
        hover && 'hover:border-[#2563EB] hover:shadow-lg hover:shadow-[#2563EB]/20 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}

