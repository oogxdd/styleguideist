import {
  //
  Heading,
  Paragraph,
  Label,
  Caption,
  Text,

  //
  Card,
  Image,
  Avatar,
  Actions,
  UserCard,
  Section,
  Separator,

  //
  Button,
  Input,
} from 'components/atoms'

import {
  spacingParams as spacing,
  fontParams as font,
  colorParams as color,
  borderParams as border,
  shadowParams as shadow,
  otherParams as other,
} from 'data/parameters'

export const atoms = [
  {
    label: 'Button',
    value: 'button',
    component: Button,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
          {
            type: 'colorpicker',
            key: 'color',
            label: 'Text',
          },
        ],
      }),
      font(),
      spacing({
        margins: true,
        paddings: true,
        dimensions: true,
      }),
      border(),
      shadow(),
    ],
  },
  {
    label: 'Input',
    value: 'input',
    component: Input,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
          {
            type: 'colorpicker',
            key: 'color',
            label: 'Text',
          },
        ],
      }),
      font(),
      spacing({ margins: true, paddings: true, dimensions: true }),
      border(),
      shadow(),
    ],
  },
  {
    label: 'Image',
    value: 'image',
    component: Image,
    group: 'atoms',
    params: [
      spacing({ dimensions: true, margins: true }),
      border(),
      shadow(),
      other(),
    ],
  },
  {
    label: 'Avatar',
    value: 'avatar',
    component: Avatar,
    group: 'atoms',
    params: [
      spacing({ dimensions: true, margins: true }),
      border(),
      shadow(),
      other(),
    ],
  },
  {
    label: 'Heading',
    value: 'heading',
    component: Heading,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'Paragraph',
    value: 'paragraph',
    component: Paragraph,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'Text',
    value: 'text',
    // component: Text,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'Label',
    value: 'label',
    component: Label,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
          {
            type: 'colorpicker',
            key: 'color',
            label: 'Text',
          },
        ],
      }),
      font(),
      spacing({ dimensions: true, paddings: true, margins: true }),
      border(),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'Caption',
    value: 'caption',
    component: Caption,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
    ],
  },
  {
    label: 'Section',
    value: 'section',
    group: 'atoms',
  },
  {
    label: 'Card',
    value: 'card',
    component: Card,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
        ],
      }),
      spacing({ dimensions: true, paddings: true, margins: true }),
      border(),
      shadow(),
      other(),
    ],
  },
  {
    label: 'User card',
    value: 'usercard',
    component: UserCard,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
        ],
      }),
      spacing({ margins: true, paddings: true, dimensions: true }),
      border(),
      shadow(),
      other(),
    ],
  },
  {
    label: 'Actions',
    value: 'actions',
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'textColor',
            label: 'Text color',
          },
          {
            type: 'colorpicker',
            key: 'iconColor',
            label: 'Icon color',
          },
          {
            type: 'colorpicker',
            key: 'activeIconColor',
            label: 'Active icon color',
          },
        ],
      }),
      spacing({ margins: true, paddings: true, dimensions: true }),
    ],
  },
  {
    label: 'Background',
    value: 'background',
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
        ],
      }),
    ],
  },
  {
    label: 'Separator',
    value: 'separator',
    // component: Actions,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Color',
          },
        ],
      }),
      spacing({ margins: true, dimensions: true }),
      border(),
      shadow(),
    ],
  },
  {
    label: 'Container',
    value: 'container',
    component: Actions,
    group: 'atoms',
    params: [
      // color(),
      // font(),
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
        ],
      }),
      spacing({ margins: true, paddings: true, dimensions: true }),
      border(),
      shadow(),
      // shadow(),
      // other(),
    ],
  },
  {
    label: 'Field',
    value: 'field',
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Color',
          },
        ],
      }),
      spacing({ margins: true, paddings: true }),
      border(),
      shadow(),
    ],
  },
]
