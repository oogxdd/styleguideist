import {
  // interactive
  Button,
  Input,
  Select,
  Textarea,
  Checkbox,

  // typography
  Heading,
  Title,
  Paragraph,
  Label,
  Link,

  // presentational
  Card,
  Image,
  Name,
  Caption,
  Avatar,
  Badge,
} from 'components/atoms'

import { spacingParams, fontParams, colorParams, borderParams } from '../fields'

export const atoms = [
  {
    label: 'Name',
    value: 'name',
    component: Name,
    group: 'atoms',
    params: [colorParams(), fontParams(), spacingParams({ margins: true })],
  },
  {
    label: 'Caption',
    value: 'caption',
    component: Caption,
    group: 'atoms',
    params: [colorParams(), fontParams(), spacingParams({ margins: true })],
  },
  {
    label: 'Button',
    value: 'button',
    component: Button,
    group: 'atoms',
    params: [
      colorParams(),
      fontParams(),
      spacingParams({ margins: true, paddings: true, dimensions: true }),
    ],
  },
  {
    label: 'Input',
    value: 'input',
    component: Input,
    group: 'atoms',
    params: [
      colorParams(),
      fontParams(),
      spacingParams({ margins: true, paddings: true, dimensions: true }),
    ],
  },
  {
    label: 'Select',
    value: 'select',
    component: Select,
    group: 'atoms',
  },
  {
    label: 'Textarea',
    value: 'textarea',
    component: Textarea,
    group: 'atoms',
  },
  {
    label: 'Checkbox',
    value: 'checkbox',
    component: Checkbox,
    group: 'atoms',
  },
  {
    label: 'Avatar',
    value: 'avatar',
    component: Avatar,
    group: 'atoms',
    params: [
      borderParams(),
      spacingParams({ dimensions: true, margins: true }),
    ],
  },
  {
    label: 'Badge',
    value: 'badge',
    component: Badge,
    group: 'atoms',
  },
  {
    label: 'Heading',
    value: 'heading',
    component: Heading,
    group: 'atoms',
    // params: ['font', 'color', 'spacing'],
    params: [colorParams(), fontParams(), spacingParams({ margins: true })],
  },
  {
    label: 'Paragraph',
    value: 'paragraph',
    component: Paragraph,
    group: 'atoms',
    params: [colorParams(), fontParams(), spacingParams({ margins: true })],
  },
  {
    label: 'Label',
    value: 'label',
    component: Label,
    group: 'atoms',
    // params: ['font', 'color', 'spacing'],
    params: [colorParams(), fontParams(), spacingParams({ margins: true })],
  },
  {
    label: 'Card',
    value: 'card',
    component: Card,
    group: 'atoms',
    params: [
      colorParams(),
      borderParams(),
      spacingParams({ dimensions: true, paddings: true }),
    ],
  },
  {
    label: 'Image',
    value: 'image',
    component: Image,
    group: 'atoms',
    params: [
      borderParams(),
      spacingParams({ dimensions: true, margins: true }),
    ],
    // params: ['border', 'shadow', 'spacing'],
  },
  {
    label: 'Title',
    value: 'title',
    component: Title,
    group: 'atoms',
  },
]
