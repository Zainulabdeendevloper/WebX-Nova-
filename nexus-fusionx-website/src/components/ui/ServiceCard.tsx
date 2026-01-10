'use client';

import Image from 'next/image';
import { Service } from '@/types';
import Button from './Button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8 relative overflow-hidden transform transition-all duration-300',
        'hover:scale-105 hover:shadow-2xl active:scale-100',
        'flex flex-col h-full'
      )}
      style={{
        backgroundColor: service.bgColor,
      }}
    >
      {/* Accent stripe (if applicable) */}
      {service.accentColor && (
        <div
          className="absolute bottom-0 left-0 right-0 h-2"
          style={{ backgroundColor: service.accentColor }}
        />
      )}

      {/* Illustration */}
      <div className="mb-4 md:mb-6 relative h-32 md:h-48 flex items-center justify-center">
        <Image
          src={service.illustration}
          alt={`${service.title} illustration`}
          width={200}
          height={200}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{service.title}</h3>
        <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6 flex-1">{service.description}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-auto border-white/30 text-white hover:bg-white hover:text-gray-900"
          onClick={() => {
            // Scroll to contact or services section
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          {service.buttonText || 'View Our Work'}
        </Button>
      </div>
    </div>
  );
}

