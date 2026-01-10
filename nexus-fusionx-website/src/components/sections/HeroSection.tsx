'use client';

import Image from 'next/image';
import { heroContent } from '@/lib/constants';
import Button from '../ui/Button';
import Container from '../layout/Container';
import FadeIn from '../animations/FadeIn';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background.svg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0A0E27]/70" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center">
        <FadeIn direction="up" delay={200}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-3xl mx-auto">
            {heroContent.headline}
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={400}>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {heroContent.ctaText}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}

