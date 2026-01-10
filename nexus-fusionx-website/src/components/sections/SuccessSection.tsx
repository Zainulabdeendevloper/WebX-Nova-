import { successContent } from '@/lib/constants';
import Container from '../layout/Container';
import ScrollReveal from '../animations/ScrollReveal';

export default function SuccessSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <ScrollReveal animation="animate-fade-in-up" threshold={0.2}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#374151]">
              {successContent.headline}
            </h2>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

