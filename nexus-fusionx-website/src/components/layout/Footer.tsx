'use client';

import { useState } from 'react';
import { footerColumns, socialLinks, companyInfo } from '@/lib/constants';
import { isValidEmail, scrollToElement } from '@/lib/utils';
import Container from './Container';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual API integration later
    setTimeout(() => {
      console.log('Newsletter signup:', { email });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      scrollToElement(elementId);
    }
  };

  return (
    <footer className="bg-[#0A0E27] border-t border-white/10">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 space-y-8 md:space-y-12">
          {/* Newsletter Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Let&apos;s Talk</h2>
            <div className="max-w-md mx-auto px-4">
              <p className="text-white/80 mb-4 md:mb-6 uppercase tracking-wider text-xs md:text-sm font-medium">
                SIGN UP TO OUR NEWSLETTER
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  className="flex-1"
                />
                <Button type="submit" disabled={isSubmitting || isSubmitted} className="w-full sm:w-auto">
                  {isSubmitting ? 'Submitting...' : isSubmitted ? 'Subscribed!' : 'Submit'}
                </Button>
              </form>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Company Logo and Info */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{companyInfo.name}</h3>
              <p className="text-sm md:text-base text-white/70 mb-3 md:mb-4">{companyInfo.address}</p>
              <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6">
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors break-all">
                  {companyInfo.email}
                </a>
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-white/70 hover:text-white transition-colors p-2"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Columns */}
            {footerColumns.map((column) => (
              <div key={column.title} className="text-center lg:text-left">
                <h4 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{column.title}</h4>
                <ul className="space-y-2 md:space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            handleLinkClick(link.href);
                          }
                        }}
                        className="text-white/70 hover:text-white transition-colors text-xs md:text-sm block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

