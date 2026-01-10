import { faqs } from '@/lib/constants';
import Container from '../layout/Container';
import FAQItem from '../ui/FAQItem';
import ScrollReveal from '../animations/ScrollReveal';

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <Container>
        <ScrollReveal animation="animate-fade-in-up" threshold={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="animate-fade-in-up"
                >
                  <FAQItem faq={faq} />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

