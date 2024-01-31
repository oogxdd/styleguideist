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
    abrv: 'BTN',
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
    abrv: 'INPT',
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
    abrv: 'IMG',
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
    abrv: 'AV',
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
    abrv: 'H',
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
    abrv: 'P',
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
  // {
  //   label: 'Text',
  //   value: 'text',
  //   abrv: '',
  //   // component: Text,
  //   group: 'atoms',
  //   params: [
  //     color(),
  //     font(),
  //     spacing({ margins: true }),
  //     shadow({ field: 'textShadow' }),
  //     other(),
  //   ],
  // },
  {
    label: 'Label',
    value: 'label',
    abrv: 'LAB',
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
    abrv: 'CAP',
    component: Caption,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
    ],
  },
  // {
  //   label: 'Section',
  //   value: 'section',
  //   abrv: '',
  //   group: 'atoms',
  // },
  {
    label: 'Card',
    value: 'card',
    abrv: 'CRD',
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
  // {
  //   label: 'User card',
  //   value: 'usercard',
  //   abrv: '',
  //   component: UserCard,
  //   group: 'atoms',
  //   params: [
  //     color({
  //       fields: [
  //         {
  //           type: 'colorpicker',
  //           key: 'background',
  //           label: 'Background',
  //         },
  //       ],
  //     }),
  //     spacing({ margins: true, paddings: true, dimensions: true }),
  //     border(),
  //     shadow(),
  //     other(),
  //   ],
  // },
  // {
  //   label: 'Actions',
  //   value: 'actions',
  //   abrv: '',
  //   group: 'atoms',
  //   params: [
  //     color({
  //       fields: [
  //         {
  //           type: 'colorpicker',
  //           key: 'textColor',
  //           label: 'Text color',
  //         },
  //         {
  //           type: 'colorpicker',
  //           key: 'iconColor',
  //           label: 'Icon color',
  //         },
  //         {
  //           type: 'colorpicker',
  //           key: 'activeIconColor',
  //           label: 'Active icon color',
  //         },
  //       ],
  //     }),
  //     spacing({ margins: true, paddings: true, dimensions: true }),
  //   ],
  // },
  // {
  //   label: 'Background',
  //   value: 'background',
  //   abrv: '',
  //   group: 'atoms',
  //   params: [
  //     color({
  //       fields: [
  //         {
  //           type: 'colorpicker',
  //           key: 'background',
  //           label: 'Background',
  //         },
  //       ],
  //     }),
  //   ],
  // },
  {
    label: 'Separator',
    value: 'separator',
    abrv: 'SPRT',
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
    abrv: 'CNT',
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
    abrv: 'FLD',
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
