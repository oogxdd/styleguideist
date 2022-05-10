export const borderFields = [
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
]

export const borderParams = () => ({
  type: 'border',
  fields: borderFields,
})
