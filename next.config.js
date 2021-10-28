const path = require('path')
const webpack = require('webpack')
const withMDX = require('@next/mdx')()

module.exports = withMDX({
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
})
