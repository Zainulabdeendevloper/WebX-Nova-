'use client';

import { useState } from 'react';
import { FAQ } from '@/types';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  faq: FAQ;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(faq.defaultOpen || false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 px-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="text-lg font-semibold text-[#374151] pr-8">{faq.question}</span>
        <span
          className={cn(
            'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300',
            isOpen ? 'bg-[#2563EB] text-white rotate-45' : 'bg-gray-200 text-gray-600'
          )}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${faq.id}`}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="py-4 px-4 pb-6 text-[#374151] leading-relaxed">{faq.answer}</div>
      </div>
    </div>
  );
}

