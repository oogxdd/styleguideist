export const colorParams = ({
  fields = [
    {
      type: 'colorpicker',
      key: 'color',
      label: 'Text',
    },
  ],
} = {}) => {
  return {
    type: 'color',
    name: 'Color',
    fields: fields,
  }
}
