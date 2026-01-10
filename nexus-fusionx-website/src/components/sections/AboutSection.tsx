import { aboutContent } from '@/lib/constants';
import Container from '../layout/Container';
import ScrollReveal from '../animations/ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding gradient-blue-purple">
      <Container>
        <ScrollReveal animation="animate-fade-in-up" threshold={0.2}>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              {aboutContent.mission}
            </p>
            {/* Duplicated text for visual effect (as mentioned in plan) */}
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed">
              {aboutContent.mission}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

