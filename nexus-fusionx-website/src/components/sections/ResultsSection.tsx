import { resultsContent, resultsData, scrollingBannerText } from '@/lib/constants';
import Container from '../layout/Container';
import StatCard from '../ui/StatCard';
import ScrollingBanner from '../ui/ScrollingBanner';
import ScrollReveal from '../animations/ScrollReveal';

export default function ResultsSection() {
  return (
    <section className="section-padding bg-[#0A0E27]">
      <Container>
        {/* Section Header */}
        <ScrollReveal animation="animate-fade-in-up" threshold={0.2}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {resultsContent.headline}
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">{resultsContent.subheadline}</p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {resultsData.map((stat, index) => (
            <ScrollReveal
              key={stat.id}
              animation="animate-fade-in-up"
              threshold={0.1}
              className="transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StatCard stat={stat} variant="large" />
            </ScrollReveal>
          ))}
        </div>

        {/* Scrolling Banner */}
        <ScrollingBanner text={scrollingBannerText} speed={60} direction="left" />
      </Container>
    </section>
  );
}

