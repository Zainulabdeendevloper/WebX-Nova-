import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant, ButtonSize } from '@/types';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#2563EB] text-white hover:bg-[#1E3A8A] active:bg-[#1E40AF]',
  secondary: 'bg-[#3B82F6] text-white hover:bg-[#2563EB] active:bg-[#1E3A8A]',
  outline: 'border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white',
  ghost: 'text-[#2563EB] hover:bg-[#2563EB]/10 active:bg-[#2563EB]/20',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-semibold rounded-lg transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#0A0E27]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

