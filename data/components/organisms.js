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
  Form,
} from 'components/organisms'

export const organisms = [
  {
    label: 'Hero section',
    value: 'hero-section',
    component: HeroSection,
    link: 'https://tailwindui.com/components/marketing/sections/heroes',
  },
  {
    label: 'Features section',
    value: 'features-section',
    component: FeaturesSection,
    link:
      'https://tailwindui.com/components/marketing/sections/feature-sections',
  },
  {
    label: 'CTA section',
    value: 'cta-section',
    component: CTASection,
    link: 'https://tailwindui.com/components/marketing/sections/cta-sections',
  },
  {
    label: 'Pricing section',
    value: 'pricing-section',
    component: PricingSection,
    link: 'https://tailwindui.com/components/marketing/sections/pricing',
  },
  {
    label: 'Testimonials',
    value: 'testimonials',
    component: Testimonials,
    link: 'https://tailwindui.com/components/marketing/sections/testimonials',
  },
  {
    label: 'Blog list',
    value: 'blog-list',
    component: BlogList,
    link: 'https://tailwindui.com/components/marketing/sections/blog-sections',
  },
  {
    label: 'Contact section',
    value: 'contact-section',
    component: ContactSection,
    link:
      'https://tailwindui.com/components/marketing/sections/contact-sections',
  },
  {
    label: 'Team section',
    value: 'team-section',
    component: TeamSection,
    link: 'https://tailwindui.com/components/marketing/sections/team-sections',
  },
  {
    label: 'Grid',
    value: 'grid',
    component: Grid,
    link: 'https://tailwindui.com/components/application-ui/lists/grid-lists',
  },
  {
    label: 'Feed',
    value: 'feed',
    component: Feed,
    link: 'https://tailwindui.com/components/application-ui/lists/feeds',
  },
  {
    label: 'FAQ',
    value: 'faq',
    component: FAQ,
    link: 'https://tailwindui.com/components/marketing/sections/faq-sections',
  },
  {
    label: 'Stats',
    value: 'stats',
    component: Stats,
    link: 'https://tailwindui.com/components/marketing/sections/stats-sections',
  },
  {
    label: 'Form',
    value: 'form',
    component: Form,
    enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/form-layouts',
  },
]
