import { ThemeProvider as ThemeUIProvider } from 'theme-ui'
import { createContext, useState } from 'react'
import { useImmer } from 'use-immer'
import { fonts } from 'data'
import * as themes from 'data/themes'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useImmer(themes.white)
  const [adThemes, setAdThemes] = useState([]) // this is additional user-created themes
  const [gfont, setGfont] = useState('system-ui')

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

  const borderRadius = theme.radii[2].substring(0, theme.radii[2].length - 2)
  const borderWidth = theme.borders.border
    .split(' ')[0]
    .substring(0, theme.borders.border.split(' ')[0].length - 2)

  const setBorderRadius = (value) => {
    const values = [
      value / 4 + 'px',
      value / 2 + 'px',
      value + 'px',
      value * 2 + 'px',
      // value * 3 + 'px',
      value * 4 + 'px',
      // value * 10 + 'px',
    ]
    setTheme((theme) => ({
      ...theme,
      radii: values,
    }))
  }

  const setBorderWidth = (value) =>
    setTheme((theme) => ({
      ...theme,
      borders: {
        ...theme.borders,
        border: `${value}px solid black`,
      },
    }))

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,

        adThemes,
        setAdThemes,

        setColor,
        setSpacing,
        setShadow,
        setBorder,
        setBorderWidth,
        setBorderRadius,

        borderWidth,
        borderRadius,

        setGfont,
        gfont,
      }}
    >
      <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            * { font-family: '${
              fonts.find((f) => f.label === theme.fonts.body)
                ? fonts.find((f) => f.label === theme.fonts.body).label
                : 'default'
            }'; }
          `,
        }}
      />
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
