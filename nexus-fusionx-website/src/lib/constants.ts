import { Service, FAQ, Stat, NavItem, SocialLink, FooterColumn, CompanyInfo } from '@/types';

// Navigation Menu Items
export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

// Services Data
export const services: Service[] = [
  {
    id: 'wordpress',
    title: 'WordPress Development',
    description: 'We create powerful, responsive WordPress websites that drive results. From custom themes to WooCommerce solutions, we build sites that convert.',
    illustration: '/images/services/wordpress-illustration.svg',
    bgColor: '#1E3A8A',
    accentColor: '#FBBF24',
    buttonText: 'View Our Work',
  },
  {
    id: 'shopify',
    title: 'Shopify Website Designs',
    description: 'Premium Shopify store designs that stand out. We create unique, conversion-focused e-commerce experiences that help you sell more.',
    illustration: '/images/services/shopify-illustration.svg',
    bgColor: '#EA580C',
    buttonText: 'View Our Work',
  },
  {
    id: 'management',
    title: 'Website and Social Media Management',
    description: 'Comprehensive digital management services. We handle your website updates, social media strategy, and content creation so you can focus on your business.',
    illustration: '/images/services/management-illustration.svg',
    bgColor: '#14B8A6',
    buttonText: 'View Our Work',
  },
  {
    id: 'ads',
    title: 'Meta & Google Ads Services',
    description: 'Data-driven paid advertising campaigns that deliver ROI. We optimize your Meta and Google Ads to maximize conversions and minimize costs.',
    illustration: '/images/services/ads-illustration.svg',
    bgColor: '#0EA5E9',
    buttonText: 'View Our Work',
  },
];

// FAQ Data
export const faqs: FAQ[] = [
  {
    id: 'timeline',
    question: 'How long does it take to build a WordPress or WooCommerce website?',
    answer: 'The timeline for a WordPress or WooCommerce website typically ranges from 4-8 weeks, depending on the complexity of the project. A simple informational site can be completed in 4-6 weeks, while a complex e-commerce site with custom features may take 6-8 weeks. We\'ll provide you with a detailed timeline after our initial consultation.',
  },
  {
    id: 'management',
    question: 'Do you offer ongoing site/website management with your social media updates for consistency?',
    answer: 'Yes, absolutely! We offer comprehensive website and social media management packages that ensure consistency across all your digital channels. Our packages include regular website updates, content creation, social media posting, engagement management, and monthly performance reports. This integrated approach helps maintain a cohesive brand presence online.',
  },
  {
    id: 'shopify-custom',
    question: 'I want my Shopify store design to be not only unique and premium, but also compatible with ready-made themes, or can you create a custom design as well?',
    answer: 'We offer both options! We can work with premium Shopify themes and customize them to match your unique brand, or we can create a completely custom design from scratch. Custom designs give you complete creative control and a truly unique store, while theme-based designs are faster to implement and cost-effective. During our consultation, we\'ll discuss your goals, budget, and timeline to recommend the best approach for your business.',
  },
  {
    id: 'ads-platforms',
    question: 'Do you run paid ad campaigns on both Meta (Facebook/Instagram) and Google?',
    answer: 'Yes, we manage paid advertising campaigns on both Meta (Facebook and Instagram) and Google platforms. We create, optimize, and manage campaigns across Search, Display, Shopping, and Video on Google, as well as campaigns on Facebook and Instagram. Our team analyzes performance data to continuously optimize campaigns for maximum ROI, and we provide detailed monthly reports showing results and insights.',
  },
  {
    id: 'differentiator',
    question: 'What makes Nexus FusionX different from other digital agencies?',
    answer: 'Nexus FusionX stands out through our integrated approach to digital transformation. We don\'t just build websites or run ads—we create cohesive digital ecosystems that work together seamlessly. Our team combines technical expertise with strategic thinking, ensuring every project drives real business results. We\'re committed to transparency, regular communication, and building long-term partnerships with our clients. Plus, our full-service approach means you can get everything you need from one trusted partner, simplifying your digital marketing efforts.',
  },
];

// Statistics Section Data
export const statisticsData: Stat[] = [
  {
    id: 'users-acquisition',
    title: 'Users Acquisition',
    variant: 'metrics',
    icon: '/images/statistics/users-acquisition.svg',
    metrics: [
      { label: 'SEO', value: 85 },
      { label: 'PPC', value: 70 },
      { label: 'Social', value: 65 },
      { label: 'Email', value: 60 },
      { label: 'Affiliate', value: 55 },
    ],
  },
  {
    id: 'methodologies',
    title: 'Methodologies',
    variant: 'number',
    number: '5',
  },
  {
    id: 'satisfied-users',
    title: 'Satisfied Users',
    variant: 'icon',
    icon: '/images/statistics/satisfied-users.svg',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    variant: 'metrics',
    icon: '/images/statistics/engagement.svg',
    metrics: [
      { label: 'CTR', value: 3.5 },
      { label: 'Bounce Rate', value: 25 },
      { label: 'Time on Site', value: 2.5 },
      { label: 'Conversion Rate', value: 87 },
    ],
  },
  {
    id: 'global-reach',
    title: 'Global Reach',
    variant: 'icon',
    icon: '/images/statistics/global-reach.svg',
  },
];

// Results Section Data
export const resultsData: Stat[] = [
  {
    id: 'conversion-rate',
    title: 'Conversion Rate',
    number: '87%',
    description: 'Our full-service web and marketing solutions optimize websites for maximum conversions, turning visitors into customers with data-driven strategies.',
  },
  {
    id: 'customer-loyalty',
    title: 'Customer Loyalty',
    number: '47%',
    description: 'We build strong customer relationships through consistent engagement, personalized experiences, and exceptional service that keeps clients coming back.',
  },
  {
    id: 'brand-growth',
    title: 'Brand Growth',
    number: '95%',
    description: 'Our comprehensive approach enhances brand visibility and recognition across all digital channels, driving sustainable growth and market presence.',
  },
  {
    id: 'reduced-bounce',
    title: 'Reduced Bounce Rate',
    number: '25%',
    description: 'By improving user experience, site speed, and content relevance, we significantly reduce bounce rates and keep visitors engaged with your brand.',
  },
];

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/nexusfusionx',
    icon: '/icons/social/facebook.svg',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/nexusfusionx',
    icon: '/icons/social/instagram.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/nexusfusionx',
    icon: '/icons/social/linkedin.svg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/nexusfusionx',
    icon: '/icons/social/twitter.svg',
  },
];

// Footer Links
export const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'WordPress Development', href: '#services' },
      { label: 'Shopify Designs', href: '#services' },
      { label: 'Website Management', href: '#services' },
      { label: 'Social Media Management', href: '#services' },
      { label: 'Meta & Google Ads', href: '#services' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#about' },
      { label: 'Case Studies', href: '#about' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Get in Touch', href: '#contact' },
      { label: 'Support', href: '#contact' },
      { label: 'Partnerships', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
];

// Company Information
export const companyInfo: CompanyInfo = {
  name: 'Nexus FusionX',
  logo: '/images/logo/nexus-fusionx-logo.svg',
  address: '123 Digital Street, Tech City, TC 12345, United States',
  email: 'info@nexusfusionx.com',
  phone: '+1 (555) 123-4567',
};

// Hero Section Content
export const heroContent = {
  headline: 'You deserve a stunning portfolio',
  ctaText: 'GET STARTED',
  ctaHref: '#contact',
};

// About Section Content
export const aboutContent = {
  mission: 'Nexus FusionX is your digital transformation partner, offering comprehensive website development, SEO management, ad management, and social media management services. We create responsive, scalable websites that drive growth and engagement. With innovative strategies and cutting-edge technology, we help businesses establish a strong online presence and achieve their digital goals. At Nexus Fusion X, we shape the future of digital, one project at a time.',
};

// Success Section Content
export const successContent = {
  headline: 'Your Business Success Starts with Nexus FusionX',
};

// Results Section Content
export const resultsContent = {
  headline: 'Turn Clicks into Clients With Seamless Web and Marketing Experience.',
  subheadline: 'Our full-service web and marketing solutions are designed to generate leads, drive conversions, and maximize your ROI.',
};

// CTA Section Content
export const ctaContent = {
  headline: "Let's Build Your Next Big Success",
  subheadline: "Ready to grow? Let's collaborate! We'll craft unique solutions leveraging our expert experience.",
};

// Scrolling Banner Text
export const scrollingBannerText = 'GROWTH STRATEGY SMART AND RESPONSIVE FUTURE READY WEBSITE CREATIVE AND RESPONSIVE';

