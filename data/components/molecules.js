import {
  Filters,
  Notification,
  SlideOver,
  Modal,
  Steps,
  Breadcrumbs,
  Tabs,
  Pagination,
  EmptyState,
  DropdownMenu,
  Banner,
  Alert,
  ActionForm,
  Field,
  SignUpForm,
  DataTable,
  DataList,
  SectionHeading,
  PageHeading,
  Sidebar,
  Footer,
  Header,
  BlogPost,
} from 'components/molecules'

export const molecules = [
  {
    label: 'Blog post',
    value: 'blogpost',
    component: BlogPost,
    className: 'max-w-xl',
    enabled: true,
  },
  {
    label: 'Sign up form',
    value: 'signupform',
    component: SignUpForm,
    enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/form-layouts',
  },
  {
    label: 'Field',
    value: 'field',
    component: Field,
    // enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/form-layouts',
  },
  {
    label: 'Field',
    value: 'field',
    component: Field,
    // enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/form-layouts',
  },

  {
    label: 'Header',
    value: 'header',
    component: Header,
    link: 'https://tailwindui.com/components/marketing/elements/headers',
    // enabled: true,
  },

  {
    label: 'Footer',
    value: 'footer',
    component: Footer,
    link: 'https://tailwindui.com/components/marketing/sections/footers',
    // enabled: true,
  },

  {
    label: 'Sidebar',
    value: 'sidebar',
    component: Sidebar,
    link:
      'https://tailwindui.com/components/application-ui/navigation/sidebar-navigation',
  },

  {
    label: 'Page heading',
    value: 'pageheading',
    component: PageHeading,
    link:
      'https://tailwindui.com/components/application-ui/headings/page-headings',
  },

  {
    label: 'Section heading',
    value: 'sectionheading',
    component: SectionHeading,
    link:
      'https://tailwindui.com/components/application-ui/headings/section-headings',
  },

  {
    label: 'Data list',
    value: 'datalist',
    component: DataList,
    link:
      'https://tailwindui.com/components/application-ui/data-display/description-lists',
  },

  {
    label: 'Data table',
    value: 'datatable',
    component: DataTable,
    link: 'https://tailwindui.com/components/application-ui/lists/tables',
  },

  // {
  //   label: 'Sign up form',
  //   value: 'signup-form',
  //   component: SignUpForm,
  //   link:
  //     'https://tailwindui.com/components/application-ui/forms/sign-in-forms',
  // },

  {
    label: 'Action form',
    value: 'actionform',
    component: ActionForm,
    link:
      'https://tailwindui.com/components/application-ui/forms/action-panels',
  },

  {
    label: 'Alert',
    value: 'alert',
    component: Alert,
    link: 'https://tailwindui.com/components/application-ui/feedback/alerts',
    // enabled: true,
  },

  {
    label: 'Banner',
    value: 'banner',
    component: Banner,
    link: 'https://tailwindui.com/components/marketing/elements/banners',
  },

  {
    label: 'Dropdown menu',
    value: 'dropdownmenu',
    component: DropdownMenu,
    link: 'https://tailwindui.com/components/application-ui/elements/dropdowns',
  },

  {
    label: 'Empty state',
    value: 'empty-state',
    component: EmptyState,
    link:
      'https://tailwindui.com/components/application-ui/feedback/empty-states',
  },

  {
    label: 'Pagination',
    value: 'pagination',
    component: Pagination,
    link:
      'https://tailwindui.com/components/application-ui/navigation/pagination',
  },

  {
    label: 'Tabs',
    value: 'tabs',
    component: Tabs,
    link: 'https://tailwindui.com/components/application-ui/navigation/tabs',
  },

  {
    label: 'Breadcrumbs',
    value: 'breadcrumbs',
    component: Breadcrumbs,
    link:
      'https://tailwindui.com/components/application-ui/navigation/breadcrumbs',
  },

  {
    label: 'Steps',
    value: 'steps',
    component: Steps,
    link: 'https://tailwindui.com/components/application-ui/navigation/steps',
  },

  {
    label: 'Modal',
    value: 'modal',
    component: Modal,
    link: 'https://tailwindui.com/components/application-ui/overlays/modals',
  },

  {
    label: 'Slide-over',
    value: 'slideover',
    component: SlideOver,
    link:
      'https://tailwindui.com/components/application-ui/overlays/slide-overs',
  },

  {
    label: 'Notification',
    value: 'notification',
    component: Notification,
    link:
      'https://tailwindui.com/components/application-ui/overlays/notifications',
  },

  {
    label: 'Filters',
    value: 'filters',
    component: Filters,
    link:
      'https://tailwindui.com/components/ecommerce/components/category-filters',
  },
]
