import {
  Button,
  Input,
  Select,
  Textarea,
  RadioGroup,
  Checkbox,
  Toggle,
  Avatar,
  Donut,
  Badge,
  Heading,
  Paragraph,
  Label,
  Progress,
  Slider,
  Switch,
  Card,
  Image,
  Name,
  Caption,
} from 'components'

import {
  textFields,
  marginFields,
  dimensionFields,
  paddingFields,
} from '../params'

export const atoms = [
  {
    label: 'Name',
    value: 'name',
    component: Name,
    group: 'atoms',
    params: [
      {
        type: 'color',
        fields: [
          {
            type: 'colorpicker',
            key: 'color',
            label: 'Text',
          },
        ],
      },
      {
        type: 'font',
        fields: textFields,
      },
      {
        type: 'spacing',
        fields: [
          { type: 'separator', label: 'Margin', first: true },
          ...marginFields,
        ],
      },
    ],
  },
  {
    label: 'Caption',
    value: 'caption',
    component: Caption,
    group: 'atoms',
    params: [
      {
        type: 'color',
        fields: [
          {
            type: 'colorpicker',
            key: 'color',
            label: 'Text',
          },
        ],
      },
      {
        type: 'font',
        fields: textFields,
      },
      {
        type: 'spacing',
        fields: [
          { type: 'separator', label: 'Margin', first: true },
          ...marginFields,
        ],
      },
    ],
  },
  {
    label: 'Button',
    value: 'button',
    component: Button,
    enabled: true,
    link: 'https://tailwindui.com/components/application-ui/elements/buttons',
    group: 'atoms',
  },
  {
    label: 'Input',
    value: 'input',
    component: Input,
    enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/input-groups',
    group: 'atoms',
  },
  {
    label: 'Select',
    value: 'select',
    component: Select,
    // enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/select-menus',
    group: 'atoms',
  },
  {
    label: 'Textarea',
    value: 'textarea',
    component: Textarea,
    // enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/textareas',
    group: 'atoms',
  },
  {
    label: 'Radio group',
    value: 'radio-group',
    component: RadioGroup,
    // enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/radio-groups',
    group: 'atoms',
  },
  {
    label: 'Checkbox',
    value: 'checkbox',
    component: Checkbox,
    enabled: true,
    link: 'https://tailwindui.com/components/application-ui/forms/checkboxes',
    group: 'atoms',
  },
  // {
  //   label: 'Toggle',
  //   value: 'toggle',
  //   component: Toggle,
  //   link: 'https://tailwindui.com/components/application-ui/forms/toggles',
  // group: 'atoms'
  // },
  {
    label: 'Slider',
    value: 'slider',
    component: Slider,
    link: 'https://tailwindui.com/components/application-ui/forms/toggles',
    // enabled: true,
    group: 'atoms',
  },
  {
    label: 'Avatar',
    value: 'avatar',
    component: Avatar,
    link: 'https://tailwindui.com/components/application-ui/elements/avatars',
    // enabled: true,
    group: 'atoms',
    params: [
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
        ],
      },
    ],
  },
  {
    label: 'Badge',
    value: 'badge',
    component: Badge,
    link: 'https://tailwindui.com/components/application-ui/elements/badges',
    // enabled: true,
    group: 'atoms',
  },
  {
    label: 'Donut',
    value: 'donut',
    component: Donut,
    link: 'https://tailwindui.com/components/application-ui/elements/avatars',
    // enabled: true,
    group: 'atoms',
  },
  {
    label: 'Progress',
    value: 'progress',
    component: Progress,
    link: 'https://tailwindui.com/components/application-ui/elements/avatars',
    // enabled: true,
    group: 'atoms',
  },
  {
    label: 'Heading',
    value: 'heading',
    component: Heading,
    link: '',
    enabled: true,
    group: 'atoms',
    // params: ['font', 'color', 'spacing'],
    params: [
      {
        type: 'color',
        fields: [
          {
            type: 'colorpicker',
            key: 'color',
            label: 'Text',
          },
        ],
      },
      {
        type: 'font',
        fields: textFields,
      },
      {
        type: 'spacing',
        fields: [
          { type: 'separator', label: 'Margin', first: true },
          ...marginFields,
        ],
      },
    ],
  },
  {
    label: 'Paragraph',
    value: 'paragraph',
    component: Paragraph,
    link: '',
    enabled: true,
    group: 'atoms',
    params: [
      {
        type: 'color',
        fields: [
          {
            type: 'colorpicker',
            key: 'color',
            label: 'Text',
          },
        ],
      },
      {
        type: 'font',
        fields: textFields,
      },
      {
        type: 'spacing',
        fields: [
          { type: 'separator', label: 'Margin', first: true },
          ...marginFields,
        ],
      },
    ],
  },
  {
    label: 'Label',
    value: 'label',
    component: Label,
    link: '',
    enabled: true,
    group: 'atoms',
    // params: ['font', 'color', 'spacing'],
    params: [
      {
        type: 'color',
        fields: [
          {
            type: 'colorpicker',
            key: 'color',
            label: 'Text',
          },
        ],
      },
      {
        type: 'font',
        fields: textFields,
      },
      {
        type: 'spacing',
        fields: [
          { type: 'separator', label: 'Margin', first: true },
          ...marginFields,
        ],
      },
    ],
  },
  {
    label: 'Switch',
    value: 'Switch',
    component: Switch,
    link: 'https://tailwindui.com/components/application-ui/forms/toggles',
    // enabled: true,
    group: 'atoms',
  },
  {
    label: 'Card',
    value: 'card',
    component: Card,
    link: '',
    enabled: true,
    group: 'atoms',
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
          { type: 'separator', label: 'Padding' },
          ...paddingFields,
        ],
      },
    ],
    // params: ['color', 'border', 'shadow', 'spacing'],
  },
  {
    label: 'Image',
    value: 'image',
    component: Image,
    link: '',
    // enabled: true,
    group: 'atoms',
    params: [
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
        ],
      },
    ],
    // params: ['border', 'shadow', 'spacing'],
  },
]
