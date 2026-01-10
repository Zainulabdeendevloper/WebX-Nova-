import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  showLabel?: boolean;
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  color = '#2563EB',
  showLabel = true,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="w-full">
      {showLabel && label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-white/80">{label}</span>
          <span className="text-sm font-medium text-white">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

