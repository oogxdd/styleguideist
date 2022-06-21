import { UserCard } from 'components/organisms'
import { Feed } from 'components/organisms'

export const organisms = [
  {
    label: 'Feed',
    value: 'feed',
    component: Feed,
    link: 'https://tailwindui.com/components/application-ui/lists/feeds',
    enabled: true,
    group: 'organisms',

    layoutVariants: [1, 2, 3],
    children: [
      // {
      //   name: 'Background',
      //   value: 'background',
      //   group: 'atoms',
      //   variant: 'organisms.feed.background',
      // },
      {
        name: 'Container',
        label: 'Container',
        value: 'container',
        group: 'atoms',
        variant: 'organisms.feed.container',
      },
      {
        name: 'Separator',
        label: 'Separator',
        value: 'separator',
        group: 'atoms',
        variant: 'organisms.feed.separator',
      },
      {
        name: 'Feed item',
        label: 'Feed item',
        value: 'feeditem',
        group: 'molecules',
        children: [
          {
            name: 'Card',
            label: 'Card',
            value: 'card',
            group: 'atoms',
            variant: 'molecules.feeditem.card',
            availableIn: [1, 2, 3],
          },
          {
            name: 'Avatar',
            label: 'Avatar',
            value: 'avatar',
            group: 'atoms',
            variant: 'molecules.feeditem.avatar',
          },
          {
            name: 'Name',
            label: 'Name',
            value: 'text',
            group: 'atoms',
            variant: 'molecules.feeditem.name',
            availableIn: [1, 2, 3],
          },
          {
            name: 'Username',
            label: 'Username',
            value: 'text',
            group: 'atoms',
            variant: 'molecules.feeditem.username',
            availableIn: [1],
          },
          {
            name: 'Date',
            label: 'Date',
            value: 'text',
            group: 'atoms',
            variant: 'molecules.feeditem.date',
          },
          {
            name: 'Heading',
            label: 'Heading',
            value: 'heading',
            subvalue: 'h3',
            group: 'atoms',
            variant: 'molecules.feeditem.heading',
            availableIn: [2],
          },
          {
            name: 'Content',
            label: 'Content',
            value: 'paragraph',
            group: 'atoms',
            variant: 'molecules.feeditem.paragraph',
          },
          {
            name: 'Actions',
            label: 'Actions',
            value: 'actions',
            group: 'atoms',
            variant: 'molecules.feeditem.actions',
          },
        ],
      },
    ],
  },
]
