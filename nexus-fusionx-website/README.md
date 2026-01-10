# Nexus FusionX Website

A modern, responsive frontend-only website for Nexus FusionX digital agency built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 16+ with App Router, TypeScript, and Tailwind CSS v4
- **Fully Responsive**: Mobile-first design with breakpoints for all screen sizes
- **Smooth Animations**: Scroll-triggered animations, counter animations, and fade-in effects
- **Accessible**: WCAG AA compliant with semantic HTML and ARIA labels
- **Performance Optimized**: Next.js Image optimization, code splitting, and lazy loading
- **Form Validation**: Client-side validation ready for backend integration
- **Type-Safe**: Full TypeScript coverage with comprehensive type definitions

## 📁 Project Structure

```
nexus-fusionx-website/
├── public/
│   ├── images/          # Images and illustrations
│   └── icons/           # SVG icons
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Homepage
│   │   └── globals.css  # Global styles
│   ├── components/
│   │   ├── layout/      # Layout components (Navbar, Footer, Container)
│   │   ├── sections/    # Page sections (Hero, Services, About, etc.)
│   │   ├── ui/          # Reusable UI components
│   │   └── animations/  # Animation components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and constants
│   └── types/           # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nexus-fusionx-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary Dark**: `#0A0E27` / `#0D1220`
- **Accent Blue**: `#2563EB`
- **Service Colors**: WordPress (Blue), Shopify (Orange), Management (Teal), Ads (Cyan)
- **Text**: White, Light Gray, Dark Gray

### Typography
- **Font Family**: Inter (via Google Fonts)
- **Headings**: 36-64px, bold
- **Body**: 16-18px, regular
- **Small**: 14px, regular

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables

Currently, no environment variables are required. For future backend integration, you may need:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

### Next.js Config

The project is configured for:
- Image optimization
- TypeScript
- Tailwind CSS v4

## 📦 Components Overview

### Layout Components
- `Navbar` - Sticky navigation with mobile menu
- `Footer` - Footer with newsletter, links, and social media
- `Container` - Max-width wrapper component

### Section Components
- `HeroSection` - Full-screen hero with CTA
- `ServicesSection` - 4 service cards grid
- `AboutSection` - Mission statement
- `StatisticsSection` - 5-column statistics grid
- `SuccessSection` - Success headline
- `FAQSection` - Accordion FAQ
- `ResultsSection` - Impact statistics
- `CTASection` - Contact form

### UI Components
- `Button` - Variant-based button component
- `Input` / `Textarea` - Form inputs with validation
- `Card` - Base card component
- `ServiceCard` - Service-specific card
- `StatCard` - Statistics display card
- `FAQItem` - FAQ accordion item
- `ProgressBar` - Animated progress bars
- `ScrollingBanner` - Infinite scroll banner

### Animation Components
- `Counter` - Animated number counter
- `FadeIn` - Fade-in animation wrapper
- `ScrollReveal` - Scroll-triggered animations

## 🎯 Future Backend Integration

The project is structured to easily integrate with a backend:

### Form Submissions
- Contact form: Ready for `/api/contact` endpoint
- Newsletter: Ready for `/api/newsletter` endpoint

### API Structure (Example)
```typescript
// Contact Form
POST /api/contact
Body: { name, email, phone, message }

// Newsletter
POST /api/newsletter  
Body: { email }
```

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

- **Mobile**: 320px - 640px (single column layouts)
- **Tablet**: 640px - 1024px (2-3 column layouts)
- **Desktop**: 1024px+ (4-5 column layouts)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- WCAG AA color contrast compliance

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting platform's Next.js deployment guide.

## 📄 License

This project is proprietary software for Nexus FusionX.

## 👥 Development

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add to `src/app/page.tsx`
3. Update constants if needed in `src/lib/constants.ts`

### Adding New UI Components

1. Create component in `src/components/ui/`
2. Export from component file
3. Add TypeScript types if needed in `src/types/index.ts`

## 📞 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using Next.js and TypeScript
