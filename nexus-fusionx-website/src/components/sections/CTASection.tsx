'use client';

import { useState } from 'react';
import { ctaContent } from '@/lib/constants';
import { ContactFormData } from '@/types';
import { isValidEmail, isValidPhone } from '@/lib/utils';
import Container from '../layout/Container';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import ScrollReveal from '../animations/ScrollReveal';

export default function CTASection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual API integration later
    setTimeout(() => {
      console.log('Contact form submission:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-[#0A0E27]">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <ScrollReveal animation="animate-fade-in-up" threshold={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {ctaContent.headline}
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              {ctaContent.subheadline}
            </p>
          </ScrollReveal>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="name"
                label="Name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </div>
            <Input
              type="tel"
              name="phone"
              label="Phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />
            <Textarea
              name="message"
              label="Message"
              placeholder="Tell us about your project..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              required
            />
            {isSubmitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                Thank you! We&apos;ll get back to you soon.
              </div>
            )}
            <Button type="submit" size="lg" fullWidth disabled={isSubmitting || isSubmitted}>
              {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted!' : 'CREATE A PLAN'}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

