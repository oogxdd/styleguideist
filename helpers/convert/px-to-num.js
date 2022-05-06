export const pxToNum = (string = '') => {
  if (!string) return
  if (typeof string === 'number') return string

  return parseInt(string.substring(0, string.length - 2))
}

// '2px' -> 2
