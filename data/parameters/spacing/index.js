import { marginFields } from './margin'
import { paddingFields } from './padding'
import { dimensionFields } from './dimensions'

// export * from './margin'
// export * from './padding'
// export * from './dimensions'

export const spacingParams = ({
  margins = false,
  paddings = false,
  dimensions = false,
}) => {
  let fields = []

  if (dimensions) {
    fields = [
      { type: 'separator', label: 'Dimensions', first: true },
      ...dimensionFields,
    ]
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
    name: 'Spacing',
    fields,
  }
}
