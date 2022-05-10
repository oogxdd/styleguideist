export const shadowParams = ({ field = 'boxShadow' } = {}) => ({
  type: 'shadow',
  field,
  fields: [
    {
      type: 'slider',
      key: 'offsetX',
      label: 'X',
    },
    {
      type: 'slider',
      key: 'offsetY',
      label: 'Y',
    },
    {
      type: 'slider',
      key: 'spread',
      label: 'Spread',
    },
    {
      type: 'slider',
      key: 'blur',
      label: 'Blur',
    },
  ],
})
