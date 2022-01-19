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
  UserCard,
} from 'components/molecules'

import {
  // textFields,
  dimensionFields,
  marginFields,
  paddingFields,
} from '../params'

export const molecules = [
  {
    label: 'User card',
    value: 'usercard',
    component: UserCard,
    group: 'molecules',
    params: [
      {
        type: 'color',
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Container',
          },
        ],
      },
      {
        type: 'border',
        fields: [
          {
            type: 'slider',
            key: 'borderRadius',
            label: 'Radius',
          },
          {
            type: 'slider',
            key: 'borderWidth',
            label: 'Width',
          },
          {
            type: 'colorpicker',
            key: 'borderColor',
            label: 'Color',
          },
        ],
      },
      {
        type: 'spacing',
        fields: [
          ...dimensionFields,
          { type: 'separator', label: 'Margin' },
          ...marginFields,
          { type: 'separator', label: 'Padding' },
          ...paddingFields,
        ],
      },
    ],
  },
  {
    label: 'Blog post',
    value: 'blogpost',
    component: BlogPost,
    group: 'molecules',
    className: 'max-w-xl',
    enabled: true,
  },
  {
    label: 'Sign up form',
    value: 'signupform',
    component: SignUpForm,
    group: 'molecules',
    enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/form-layouts',
  },
  {
    label: 'Field',
    value: 'field',
    component: Field,
    group: 'molecules',
    // enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/form-layouts',
  },
  {
    label: 'Field',
    value: 'field',
    component: Field,
    group: 'molecules',
    // enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/form-layouts',
  },

  {
    label: 'Header',
    value: 'header',
    component: Header,
    group: 'molecules',
    link: 'https://tailwindui.com/components/marketing/elements/headers',
    // enabled: true,
  },

  {
    label: 'Footer',
    value: 'footer',
    component: Footer,
    group: 'molecules',
    link: 'https://tailwindui.com/components/marketing/sections/footers',
    // enabled: true,
  },

  {
    label: 'Sidebar',
    value: 'sidebar',
    component: Sidebar,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/navigation/sidebar-navigation',
  },

  {
    label: 'Page heading',
    value: 'pageheading',
    component: PageHeading,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/headings/page-headings',
  },

  {
    label: 'Section heading',
    value: 'sectionheading',
    component: SectionHeading,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/headings/section-headings',
  },

  {
    label: 'Data list',
    value: 'datalist',
    component: DataList,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/data-display/description-lists',
  },

  {
    label: 'Data table',
    value: 'datatable',
    component: DataTable,
    group: 'molecules',
    link: 'https://tailwindui.com/components/application-ui/lists/tables',
  },

  // {
  //   label: 'Sign up form',
  //   value: 'signup-form',
  //   component: SignUpForm,
  //   group: 'molecules',
  //   link:
  //     'https://tailwindui.com/components/application-ui/forms/sign-in-forms',
  // },

  {
    label: 'Action form',
    value: 'actionform',
    component: ActionForm,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/forms/action-panels',
  },

  {
    label: 'Alert',
    value: 'alert',
    component: Alert,
    group: 'molecules',
    link: 'https://tailwindui.com/components/application-ui/feedback/alerts',
    // enabled: true,
  },

  {
    label: 'Banner',
    value: 'banner',
    component: Banner,
    group: 'molecules',
    link: 'https://tailwindui.com/components/marketing/elements/banners',
  },

  {
    label: 'Dropdown menu',
    value: 'dropdownmenu',
    component: DropdownMenu,
    group: 'molecules',
    link: 'https://tailwindui.com/components/application-ui/elements/dropdowns',
  },

  {
    label: 'Empty state',
    value: 'empty-state',
    component: EmptyState,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/feedback/empty-states',
  },

  {
    label: 'Pagination',
    value: 'pagination',
    component: Pagination,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/navigation/pagination',
  },

  {
    label: 'Tabs',
    value: 'tabs',
    component: Tabs,
    group: 'molecules',
    link: 'https://tailwindui.com/components/application-ui/navigation/tabs',
  },

  {
    label: 'Breadcrumbs',
    value: 'breadcrumbs',
    component: Breadcrumbs,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/navigation/breadcrumbs',
  },

  {
    label: 'Steps',
    value: 'steps',
    component: Steps,
    group: 'molecules',
    link: 'https://tailwindui.com/components/application-ui/navigation/steps',
  },

  {
    label: 'Modal',
    value: 'modal',
    component: Modal,
    group: 'molecules',
    link: 'https://tailwindui.com/components/application-ui/overlays/modals',
  },

  {
    label: 'Slide-over',
    value: 'slideover',
    component: SlideOver,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/overlays/slide-overs',
  },

  {
    label: 'Notification',
    value: 'notification',
    component: Notification,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/application-ui/overlays/notifications',
  },

  {
    label: 'Filters',
    value: 'filters',
    component: Filters,
    group: 'molecules',
    link:
      'https://tailwindui.com/components/ecommerce/components/category-filters',
  },
]
