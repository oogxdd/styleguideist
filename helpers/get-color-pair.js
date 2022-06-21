import randomColor from 'random-hex-color'
import contrast from 'get-contrast'

export const getColorPair = () => {
  // color A: background, card
  // color B: border
  // color C: text
  // color D: primary
  // color E: secondary

  const colorA = randomColor()
  let colorB = randomColor()
  let colorC = randomColor()
  let colorD = randomColor()
  let colorE = randomColor()

  while (!contrast.isAccessible(colorA, colorB)) {
    colorB = randomColor()
  }

  while (!contrast.isAccessible(colorA, colorC)) {
    colorC = randomColor()
  }

  while (!contrast.isAccessible(colorA, colorD)) {
    colorD = randomColor()
  }

  while (!contrast.isAccessible(colorA, colorE)) {
    colorE = randomColor()
  }

  return [colorA, colorB, colorC]
}
