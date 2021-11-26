const path = require('path')
const webpack = require('webpack')
const withMDX = require('@next/mdx')()

module.exports = withMDX({
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    })

    return config
  },
})
