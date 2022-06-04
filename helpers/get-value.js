// molecules.blogpost.heading.ml
// atoms.heading.ml
//
// molecules.blogpost.usercard.heading.h4.ml

function resolve(path, obj = self, separator = '.') {
  var properties = Array.isArray(path) ? path : path.split(separator)
  return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

export const value = (theme, paths, defaultValue) => {
  let returnValue
  // iterate through each path
  // when first value is get -> return this value
  for (const path of paths) {
    // for each path, iterate through deep object until you get the key
    const returnValue = resolve(path, theme)
    if (returnValue !== undefined) return returnValue
  }
  return defaultValue
}
