import { ThemeProvider } from 'theme-ui'
import { jsx, Themed, components } from 'theme-ui'
import { ThemeContext } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'
import { useState } from 'react'
import Head from 'next/head'
import * as presets from '@theme-ui/presets'
import {
  TypeScale,
  TypeStyle,
  HeadingStyle,
  ColorPalette,
  FontFamily,
} from '@theme-ui/style-guide'

export default function PresetsDemo() {
  const [theme, setTheme] = useState('base')
  const preset = presets[theme]

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:400,700,900|Roboto:400,600|Architects+Daughter"
        />
      </Head>
      <div
        sx={{
          '*': {
            transition: 'all .2s ease-out',
          },
        }}
      >
        <label
          htmlFor="theme"
          sx={{
            display: 'block',
            mb: 4,
          }}
        >
          Preset:
          <select
            id="theme"
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value)
            }}
          >
            {Object.keys(presets).map((key) => (
              <option key={key} children={key} />
            ))}
          </select>
        </label>

        <ThemeContext.Provider value={preset}>
          <Themed.root sx={{ bg: 'background', color: 'text', p: 3 }}>
            {/*
            <Themed.h2>Colors</Themed.h2>
            <ColorPalette omit={['modes', 'header']} />
            */}
            <Themed.h2>Typography</Themed.h2>
            <TypeStyle fontSize={7}>
              {/*
              Body: <FontFamily name="body" />
              */}
            </TypeStyle>
            <HeadingStyle
              fontFamily="heading"
              fontWeight="heading"
              lineHeight="heading"
              fontSize={7}
            >
              {/*
              Heading: <FontFamily name="heading" />
              */}
            </HeadingStyle>
            <Themed.h2>Type Scale</Themed.h2>
            <TypeScale />
            <Themed.h2 id="json">Raw JSON</Themed.h2>
            <textarea
              value={JSON.stringify(preset, null, 2)}
              rows={16}
              readOnly
              aria-labelledby="json"
              sx={{
                width: '100%',
                fontFamily: 'monospace',
                bg: 'muted',
                border: 0,
                borderRadius: 4,
              }}
            />
          </Themed.root>
        </ThemeContext.Provider>
      </div>
    </div>
  )
}
