import { createContext, useState, useEffect } from 'react'
import { ThemeProvider as ThemeUIProvider } from 'theme-ui'
import { useImmer } from 'use-immer'

import { defaultPreset, one, another, anan, greenPurple } from 'data/presets'
import { fonts } from 'data/fonts'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useImmer(greenPurple)

  // set button spacing
  const setSpacing = (type, value) => {
    if (type === 'vertical') {
      setTheme((theme) => ({
        ...theme,
        buttons: {
          ...theme.buttons,
          primary: {
            ...theme.buttons.primary,
            py: value,
          },
        },
      }))
    }
    if (type === 'horizontal') {
      setTheme((theme) => ({
        ...theme,
        buttons: {
          ...theme.buttons,
          primary: {
            ...theme.buttons.primary,
            px: value,
          },
        },
      }))
    }
  }

  const setColor = (color, value) => {
    setTheme((theme) => ({
      ...theme,
      colors: { ...theme.colors, [color]: value },
    }))
  }

  const setShadow = (index) => {
    setTheme((theme) => ({
      ...theme,
      buttons: {
        ...theme.buttons,
        primary: { ...theme.buttons.primary, boxShadow: index },
      },
    }))
  }

  const setBorder = (index) => {
    setTheme((theme) => ({
      ...theme,
      buttons: {
        ...theme.buttons,
        primary: { ...theme.buttons.primary, borderRadius: index },
      },
    }))
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,

        setColor,
        setSpacing,
        setShadow,
        setBorder,
      }}
    >
      <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            * { font-family: '${
              fonts.find((f) => f.label === theme.fonts.body).label
            }' !important; }
          `,
        }}
      />
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
