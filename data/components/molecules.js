import { BlogPost, FeedItem, Form } from 'components/molecules'

export const molecules = [
  {
    label: 'Blog post',
    value: 'blogpost',
    component: BlogPost,
    group: 'molecules',
    className: 'max-w-xl',
    enabled: true,
    children: [
      { name: 'Card', value: 'card', group: 'atoms' },
      { name: 'Image', value: 'image', group: 'atoms' },
      { name: 'Label', value: 'label', group: 'atoms' },
      { name: 'Heading', value: 'heading', group: 'atoms' },
      { name: 'Paragraph', value: 'paragraph', group: 'atoms' },
      {
        name: 'User card',
        value: 'usercard',
        group: 'molecules',
        children: [
          {
            name: 'Avatar',
            value: 'avatar',
            group: 'atoms',
          },
          {
            name: 'Name',
            value: 'name',
            group: 'atoms',
          },
          {
            name: 'Caption',
            value: 'caption',
            group: 'atoms',
          },
        ],
      },
    ],
  },
  {
    label: 'Form',
    value: 'form',
    component: Form,
    group: 'molecules',
    enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/form-layouts',
    children: [
      {
        name: 'Card',
        value: 'card',
        group: 'atoms',
        variant: 'molecules.form.card',
      },
      { name: 'Title', value: 'title', group: 'atoms' },
      { name: 'Paragraph', value: 'paragraph', group: 'atoms' },
      { name: 'Input', value: 'input', group: 'atoms' },
      { name: 'Checkbox', value: 'checkbox', group: 'atoms' },
      { name: 'Button', value: 'button', group: 'atoms' },
    ],
  },
  {
    label: 'Feed item',
    value: 'feed-item',
    component: FeedItem,
    group: 'molecules',
    enabled: true,
    children: [
      {
        name: 'User card',
        value: 'usercard',
        group: 'molecules',
        children: [
          {
            name: 'Avatar',
            value: 'avatar',
            group: 'atoms',
          },
          {
            name: 'Name',
            value: 'name',
            group: 'atoms',
          },
          {
            name: 'Caption',
            value: 'caption',
            group: 'atoms',
          },
        ],
      },
      { name: 'Heading', value: 'heading', group: 'atoms' },
      { name: 'Paragraph', value: 'paragraph', group: 'atoms' },

      {
        name: 'Actions',
        value: 'actions',
        group: 'molecules',
        children: [
          {
            name: 'Icon',
            value: 'icon',
            group: 'atoms',
          },
          {
            name: 'Text',
            value: 'text',
            group: 'atoms',
          },
        ],
      },
    ],
  },
]
