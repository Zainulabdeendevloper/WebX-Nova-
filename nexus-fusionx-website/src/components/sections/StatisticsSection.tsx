import { statisticsData } from '@/lib/constants';
import Container from '../layout/Container';
import StatCard from '../ui/StatCard';
import ScrollReveal from '../animations/ScrollReveal';

export default function StatisticsSection() {
  return (
    <section className="section-padding bg-[#0A0E27]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {statisticsData.map((stat, index) => (
            <ScrollReveal
              key={stat.id}
              animation="animate-fade-in-up"
              threshold={0.1}
              className="transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StatCard stat={stat} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

