import {
  Feed,
  BlogList,
  ProfileSettings,
  FinanceCoinPage,
} from 'components/organisms'

export const organisms = [
  {
    label: 'Feed',
    value: 'feed',
    component: Feed,
    link: 'https://tailwindui.com/components/application-ui/lists/feeds',
    enabled: true,
    group: 'organisms',

    layoutVariants: [1, 2],
    children: [
      {
        name: 'Background',
        value: 'background',
        group: 'atoms',
        variant: 'organisms.feed.background',
      },
      {
        name: 'Container',
        value: 'card',
        group: 'atoms',
        variant: 'organisms.feed.container',
      },
      {
        name: 'Card',
        value: 'card',
        group: 'atoms',
        variant: 'organisms.feed.card',
      },
      {
        name: 'Feed item',
        value: 'feeditem',
        group: 'molecules',
        children: [
          {
            name: 'Content card',
            value: 'card',
            group: 'atoms',
            variant: 'molecules.feeditem.card',
          },
          {
            name: 'Avatar',
            value: 'avatar',
            group: 'atoms',
            variant: 'molecules.feeditem.avatar',
          },
          {
            name: 'Name',
            value: 'name',
            group: 'atoms',
            variant: 'molecules.feeditem.name',
          },
          {
            name: 'Username',
            value: 'username',
            group: 'atoms',
            variant: 'molecules.feeditem.username',
          },
          {
            name: 'Date',
            value: 'date',
            group: 'atoms',
            variant: 'molecules.feeditem.date',
          },
          {
            name: 'Content',
            value: 'paragraph',
            group: 'atoms',
            variant: 'molecules.feeditem.paragraph',
          },
          { name: 'Actions', value: 'actions', group: 'actions' },
        ],
      },
    ],
  },
  // {
  //   label: 'Profile settings',
  //   value: 'profile-settings',
  //   component: ProfileSettings,
  //   enabled: true,
  // },
  // {
  //   label: 'Blog list',
  //   value: 'blog-list',
  //   component: BlogList,
  //   link: 'https://tailwindui.com/components/marketing/sections/blog-sections',
  //   enabled: true,
  //   group: 'organisms',
  //   children: [],
  // },
  // {
  //   label: 'FinanceCoinPage',
  //   value: 'financecoinpage',
  //   component: FinanceCoinPage,
  //   enabled: true,
  // },
]
