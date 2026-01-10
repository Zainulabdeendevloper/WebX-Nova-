import Image from 'next/image';
import { Stat } from '@/types';
import ProgressBar from './ProgressBar';
import Counter from '../animations/Counter';
import { cn } from '@/lib/utils';

interface StatCardProps {
  stat: Stat;
  variant?: 'default' | 'large';
}

export default function StatCard({ stat, variant = 'default' }: StatCardProps) {
  const isLarge = variant === 'large';
  
  // Extract number from stat.number (could be "87%" or "87")
  const extractNumber = (numStr: string | undefined): number | null => {
    if (!numStr) return null;
    const match = numStr.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  };

  const numberValue = extractNumber(stat.number);
  const hasPercentage = stat.number?.includes('%');

  return (
    <div
      className={cn(
        'rounded-xl p-6 bg-[#0D1220]/50 border border-white/10',
        'flex flex-col items-center text-center',
        isLarge && 'p-8 md:p-10'
      )}
    >
      {/* Icon */}
      {stat.icon && (
        <div className={cn('mb-4', isLarge && 'mb-6')}>
          <Image
            src={stat.icon}
            alt={stat.title}
            width={isLarge ? 80 : 60}
            height={isLarge ? 80 : 60}
            className="object-contain"
          />
        </div>
      )}

      {/* Number (large) */}
      {stat.number && (
        <div className={cn('mb-4', isLarge && 'mb-6')}>
          {numberValue !== null ? (
            <span
              className={cn(
                'font-bold text-white',
                isLarge ? 'text-5xl md:text-6xl' : 'text-4xl'
              )}
            >
              <Counter
                value={numberValue}
                suffix={hasPercentage ? '%' : ''}
                duration={2000}
              />
            </span>
          ) : (
            <span
              className={cn(
                'font-bold text-white',
                isLarge ? 'text-5xl md:text-6xl' : 'text-4xl'
              )}
            >
              {stat.number}
            </span>
          )}
        </div>
      )}

      {/* Title */}
      <h3
        className={cn(
          'font-semibold text-white mb-4',
          isLarge ? 'text-xl md:text-2xl' : 'text-lg'
        )}
      >
        {stat.title}
      </h3>

      {/* Description */}
      {stat.description && (
        <p className={cn('text-white/80 mb-4', isLarge && 'text-lg')}>{stat.description}</p>
      )}

      {/* Metrics with Progress Bars */}
      {stat.metrics && stat.metrics.length > 0 && (
        <div className="w-full space-y-4 mt-4">
          {stat.metrics.map((metric, index) => (
            <ProgressBar
              key={index}
              label={metric.label}
              value={metric.value || 0}
              max={metric.max || 100}
              color={metric.color}
            />
          ))}
        </div>
      )}
    </div>
  );
}

