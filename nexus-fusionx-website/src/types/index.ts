// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  illustration: string;
  bgColor: string;
  accentColor?: string;
  buttonText?: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

// Statistics Types
export interface Stat {
  id: string;
  icon?: string;
  number?: string;
  title: string;
  description?: string;
  metrics?: Metric[];
  variant?: 'icon' | 'number' | 'metrics';
}

export interface Metric {
  label: string;
  value?: number;
  max?: number;
  color?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Footer Types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Company Info Types
export interface CompanyInfo {
  name: string;
  logo: string;
  address: string;
  email: string;
  phone?: string;
}

// Button Variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Container Max Width
export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Animation Directions
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

