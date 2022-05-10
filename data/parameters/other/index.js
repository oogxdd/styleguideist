export const otherParams = () => ({
  type: 'other',
  fields: [
    {
      type: 'input',
      key: 'display',
      label: 'Display',
      // type: 'checkbox',
      // options: ['block', 'none'],
    },
    {
      type: 'input',
      key: 'flexDirection',
      label: 'Flex direction',
      // type: 'select',
      // options: ['row', 'column'],
    },
    {
      type: 'input',
      key: 'alignItems',
      label: 'Flex align',
      // type: 'select',
      // options: ['items-center', 'items-start', 'items-end'],
    },
    {
      type: 'input',
      key: 'textAlign',
      label: 'Text align',
      // type: 'select',
      // options: ['left', 'center', 'right'],
    },
    {
      type: 'input',
      // type: 'number',
      key: 'order',
      label: 'Order',
    },
  ],
})
