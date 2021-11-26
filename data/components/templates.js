import {
  ArticlePage,
  LandingHomePage,
  DashboardHomePage,
  ContactPage,
  PricingPage,
  BlogHomePage,
  OrderHistoryPage,
  OrderDetailsPage,
  CheckoutPage,
  ShoppingCartPage,
  CategoryPage,
  ProductPage,
  StorefrontPage,
  DetailsPage,
  SettingsPage,
} from 'components/templates'

export const templates = [
  {
    label: 'E-commerce',
    value: 'ecommerce',
    pages: [
      {
        label: 'Storefront',
        value: 'storefront',
        component: StorefrontPage,
        link:
          'https://tailwindui.com/components/ecommerce/page-examples/storefront-pages',
      },
      {
        label: 'Product page',
        value: 'product-page',
        component: ProductPage,
        link:
          'https://tailwindui.com/components/ecommerce/page-examples/product-pages',
      },
      {
        label: 'Category page',
        value: 'category-page',
        component: CategoryPage,
        link:
          'https://tailwindui.com/components/ecommerce/page-examples/category-pages',
      },
      {
        label: 'Shopping cart',
        value: 'shopping-cart',
        component: ShoppingCartPage,
        link:
          'https://tailwindui.com/components/ecommerce/page-examples/shopping-cart-pages',
      },
      {
        label: 'Checkout page',
        value: 'checkout-page',
        component: CheckoutPage,
        link:
          'https://tailwindui.com/components/ecommerce/page-examples/checkout-pages',
      },
      {
        label: 'Order details page',
        value: 'order-details-page',
        component: OrderDetailsPage,
        link:
          'https://tailwindui.com/components/ecommerce/page-examples/order-detail-pages',
      },
      {
        label: 'Order history',
        value: 'order-history',
        component: OrderHistoryPage,
        link:
          'https://tailwindui.com/components/ecommerce/page-examples/order-history-pages',
      },
    ],
  },
  {
    label: 'Landing page',
    value: 'landing',
    pages: [
      {
        label: 'Home page',
        value: 'landing-home-page',
        component: LandingHomePage,
        link:
          'https://tailwindui.com/components/marketing/page-examples/landing-pages',
      },
      {
        label: 'Pricing page',
        value: 'pricing-page',
        component: PricingPage,
        link:
          'https://tailwindui.com/components/marketing/page-examples/pricing-pages',
      },
      {
        label: 'Contact page',
        value: 'contact-page',
        component: ContactPage,
        link:
          'https://tailwindui.com/components/marketing/page-examples/contact-pages',
      },
    ],
  },
  {
    label: 'Dashboard',
    value: 'dashboard',
    pages: [
      {
        label: 'Home page',
        value: 'dashboard-home-page',
        component: DashboardHomePage,
        link:
          'https://tailwindui.com/components/application-ui/page-examples/home-screens',
      },
      {
        label: 'Details page',
        value: 'details-page',
        component: DetailsPage,
        link:
          'https://tailwindui.com/components/application-ui/page-examples/detail-screens',
      },
      {
        label: 'Settings page',
        value: 'settings-page',
        component: SettingsPage,
        link:
          'https://tailwindui.com/components/application-ui/page-examples/settings-screens',
      },
    ],
  },
  {
    label: 'Blog',
    value: 'blog',
    pages: [
      {
        label: 'Home page',
        value: 'blog-home-page',
        component: BlogHomePage,
        link: 'https://demo.vercel.blog/posts',
      },
      {
        label: 'Article page',
        value: 'article-page',
        component: ArticlePage,
        link: 'https://demo.vercel.blog/posts/pages',
      },
      {
        label: 'About page',
        value: 'blog-about-page',
        component: BlogHomePage,
        link: 'https://demo.vercel.blog/',
      },
    ],
  },
]
