import {
  Stats,
  FAQ,
  Feed,
  Grid,
  TeamSection,
  ContactSection,
  BlogList,
  Testimonials,
  PricingSection,
  CTASection,
  FeaturesSection,
  HeroSection,
} from 'components/organisms'

export const organisms = [
  {
    label: 'Hero section',
    value: 'hero-section',
    component: HeroSection,
  },
  {
    label: 'Features section',
    value: 'features-section',
    component: FeaturesSection,
  },
  {
    label: 'CTA section',
    value: 'cta-section',
    component: CTASection,
  },
  {
    label: 'Pricing section',
    value: 'pricing-section',
    component: PricingSection,
  },
  {
    label: 'Testimonials',
    value: 'testimonials',
    component: Testimonials,
  },
  {
    label: 'Blog list',
    value: 'blog-list',
    component: BlogList,
  },
  {
    label: 'Contact section ',
    value: 'contact-section ',
    component: ContactSection,
  },
  {
    label: 'Team section',
    value: 'team-section',
    component: TeamSection,
  },
  {
    label: 'Grid',
    value: 'grid',
    component: Grid,
  },
  {
    label: 'Feed',
    value: 'feed',
    component: Feed,
  },
  {
    label: 'FAQ',
    value: 'faq',
    component: FAQ,
  },
  {
    label: 'Stats',
    value: 'stats',
    component: Stats,
  },
]
