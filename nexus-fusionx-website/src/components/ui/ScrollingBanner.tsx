'use client';

import { cn } from '@/lib/utils';

interface ScrollingBannerProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
}

export default function ScrollingBanner({
  text,
  speed = 50,
  direction = 'left',
}: ScrollingBannerProps) {
  // Duplicate text for seamless loop
  const duplicatedText = `${text} • `.repeat(5);

  return (
    <div className="relative overflow-hidden bg-[#0A0E27] py-4">
      <div
        className={cn(
          'flex whitespace-nowrap text-white/80 uppercase font-semibold tracking-wider',
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <span className="inline-block px-8">{duplicatedText}</span>
        <span className="inline-block px-8">{duplicatedText}</span>
      </div>
    </div>
  );
}

