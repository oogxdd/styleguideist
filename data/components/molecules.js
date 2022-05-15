import { BlogPost, FeedItem, Form, OrderTest } from 'components/molecules'

import {
  Card,
  Image,
  Label,
  Title,
  Heading,
  Paragraph,
  UserCard,
} from 'components/atoms'

import {
  spacingParams as spacing,
  fontParams as font,
  colorParams as color,
  borderParams as border,
  otherParams as other,
} from 'data/parameters'

export const molecules = [
  {
    label: 'Blog post',
    value: 'blogpost',
    component: BlogPost,
    group: 'molecules',
    className: 'max-w-xl',
    enabled: true,
    layoutVariants: [1, 2],
    params: [
      {
        type: 'props',
        fields: [
          {
            type: 'input',
            key: 'label',
            label: 'Label',
          },
          {
            type: 'input',
            key: 'title',
            label: 'Title',
          },
          {
            type: 'textarea',
            key: 'description',
            label: 'Paragraph',
          },
          {
            type: 'input',
            key: 'imageUrl',
            label: 'Image url',
          },
          {
            type: 'input',
            key: 'authorName',
            label: 'Author name',
          },
          {
            type: 'input',
            key: 'authorAvatar',
            label: 'Author avatar',
          },
          {
            type: 'input',
            key: 'caption',
            label: 'Caption',
          },
        ],
      },
      // other(),
    ],
    children: [
      {
        name: 'Card',
        value: 'card',
        component: Card,
        group: 'atoms',
        variant: 'molecules.blogpost.card',
      },
      {
        name: 'Image',
        value: 'image',
        component: Image,
        group: 'atoms',
        ordering: true,
      },
      {
        name: 'Label',
        value: 'label',
        group: 'atoms',
        component: Label,
        ordering: true,
        propsKey: 'label',
      },
      {
        name: 'Heading',
        value: 'heading',
        component: Title,
        group: 'atoms',
        ordering: true,
        propsKey: 'title',
        // variant: 'molecules.blogpost.heading',
      },
      {
        name: 'Paragraph',
        value: 'paragraph',
        component: Paragraph,
        group: 'atoms',
        ordering: true,
        propsKey: 'description',
      },
      {
        name: 'User card',
        value: 'usercard',
        component: UserCard,
        group: 'atoms',
        ordering: true,
        propsKey: '*',
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
      { name: 'Input', value: 'input', group: 'atoms' },
      {
        name: 'Button',
        value: 'button',
        group: 'atoms',
        // variant: 'primary',
      },
      // {
      //   name: 'Button [secondary]',
      //   value: 'button',
      //   group: 'atoms',
      //   variant: 'secondary',
      // },
    ],
  },
  {
    label: 'Feed item',
    value: 'feeditem',
    component: FeedItem,
    group: 'molecules',
    enabled: true,
    layoutVariants: [1, 2, 3],
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
        availableIn: [1, 2, 4],
      },
      {
        name: 'Username',
        value: 'text',
        group: 'atoms',
        variant: 'molecules.feeditem.username',
        availableIn: [2, 3, 4],
      },
      {
        name: 'Date',
        value: 'text',
        group: 'atoms',
        variant: 'molecules.feeditem.date',
      },
      {
        name: 'Title',
        value: 'text',
        group: 'atoms',
        variant: 'molecules.feeditem.title',
        availableIn: [1],
      },
      {
        name: 'Content',
        value: 'text',
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
  // {
  //   label: 'Order test',
  //   value: 'order-test',
  //   component: OrderTest,
  //   group: 'molecules',
  //   enabled: true,
  //   children: [],
  // },
]
