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
      },
      {
        label: 'Product page',
        value: 'product-page',
        component: ProductPage,
      },
      {
        label: 'Category page',
        value: 'category-page',
        component: CategoryPage,
      },
      {
        label: 'Shopping cart',
        value: 'shopping-cart',
        component: ShoppingCartPage,
      },
      {
        label: 'Checkout page',
        value: 'checkout-page',
        component: CheckoutPage,
      },
      {
        label: 'Order details page',
        value: 'order-details-page',
        component: OrderDetailsPage,
      },
      {
        label: 'Order history',
        value: 'order-history',
        component: OrderHistoryPage,
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
      },
      {
        label: 'Pricing page',
        value: 'pricing-page',
        component: PricingPage,
      },
      {
        label: 'Contact page',
        value: 'contact-page',
        component: ContactPage,
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
      },
      {
        label: 'Details page',
        value: 'details-page',
        component: DetailsPage,
      },
      {
        label: 'Settings page',
        value: 'settings-page',
        component: SettingsPage,
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
      },
      {
        label: 'Article page',
        value: 'article-page',
        component: ArticlePage,
      },
    ],
  },
]
