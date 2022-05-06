import { textFields } from './text'
import { dimensionFields, marginFields, paddingFields } from './spacing'
import { borderFields } from './border'

export * from './text'
export * from './spacing'
export * from './border'

export const fontParams = () => ({
  type: 'font',
  fields: textFields,
})

export const spacingParams = ({
  margins = false,
  paddings = false,
  dimensions = false,
}) => {
  let fields = []

  if (dimensions) {
    fields = [...dimensionFields]
  }

  if (margins) {
    fields = [
      ...fields,
      { type: 'separator', label: 'Margin', first: !dimensions },
      ...marginFields,
    ]
  }

  if (paddings) {
    fields = [
      ...fields,
      { type: 'separator', label: 'Padding', first: !dimensions && !margins },
      ...paddingFields,
    ]
  }

  return {
    type: 'spacing',
    fields,
  }
}

export const colorParams = () => {
  let fields = []

  return {
    type: 'color',
    fields: [
      {
        type: 'colorpicker',
        key: 'color',
        label: 'Text',
      },
    ],
  }
}

export const borderParams = () => ({
  type: 'border',
  fields: borderFields,
})
