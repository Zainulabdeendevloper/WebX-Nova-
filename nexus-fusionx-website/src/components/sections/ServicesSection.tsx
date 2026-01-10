import { services } from '@/lib/constants';
import Container from '../layout/Container';
import ServiceCard from '../ui/ServiceCard';
import FadeIn from '../animations/FadeIn';
import ScrollReveal from '../animations/ScrollReveal';

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-[#0A0E27] to-[#0D1220]">
      <Container>
        {/* Section Header */}
        <ScrollReveal animation="animate-fade-in-up" threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Creative Design and Strategic Branding
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              animation="animate-fade-in-up"
              threshold={0.1}
              className="transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

