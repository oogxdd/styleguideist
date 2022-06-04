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
      {
        name: 'Background',
        value: 'background',
        group: 'atoms',
        variant: 'organisms.feed.background',
      },
      {
        name: 'Container',
        value: 'container',
        group: 'atoms',
        variant: 'organisms.feed.container',
      },
      {
        name: 'Separator',
        value: 'separator',
        group: 'atoms',
        variant: 'organisms.feed.separator',
      },
      {
        name: 'Feed item',
        value: 'feeditem',
        group: 'molecules',
        children: [
          {
            name: 'Card',
            value: 'card',
            group: 'atoms',
            variant: 'molecules.feeditem.card',
            // availableIn: [1, 2, 3, 4],
          },
          {
            name: 'Avatar',
            value: 'avatar',
            group: 'atoms',
            variant: 'molecules.feeditem.avatar',
            // availableIn: [1, 2, 3, 4],
          },
          {
            name: 'Name',
            value: 'text',
            group: 'atoms',
            variant: 'molecules.feeditem.name',
            availableIn: [2, 2, 4],
          },
          {
            name: 'Username',
            value: 'text',
            group: 'atoms',
            variant: 'molecules.feeditem.username',
            availableIn: [1, 3, 4],
          },
          {
            name: 'Date',
            value: 'text',
            group: 'atoms',
            variant: 'molecules.feeditem.date',
          },
          {
            name: 'Heading',
            value: 'heading',
            subvalue: 'h3',
            group: 'atoms',
            variant: 'molecules.feeditem.heading',
            availableIn: [2],
          },
          {
            name: 'Content',
            value: 'paragraph',
            group: 'atoms',
            variant: 'molecules.feeditem.paragraph',
          },
          {
            name: 'Actions',
            value: 'actions',
            group: 'atoms',
            variant: 'molecules.feeditem.actions',
          },
        ],
      },
    ],
  },
]
