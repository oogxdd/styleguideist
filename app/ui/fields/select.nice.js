/** @jsxImportSource theme-ui */
import { useState, useContext, Fragment, useEffect, Component } from 'react'
import { AppContext } from 'context'
import ReactSelect, { components } from 'react-select'
import { FixedSizeList as List } from 'react-window'
import { googleFonts } from 'data/fonts/google'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const options = []
for (let i = 0; i < 10000; i = i + 1) {
  options.push({ value: i, label: `Option ${i}` })
}

const height = 35

const Option = (props) => {
  if (props.isSelected) {
    return (
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: props.data.value,
            background: 'yellow',
          }}
        >
          {props.value}
        </span>
        <CheckIcon
          className="h-5 w-5"
          aria-hidden="true"
          sx={{ color: 'text' }}
        />
      </div>
    )
  }
  return (
    <div
      onClick={() => {
        props.selectOption(props.data)
        props.setValue(props.data)
      }}
      style={{
        fontFamily: props.data.value,
        background: 'black',
      }}
      {...props}
    >
      <span
        style={{
          fontFamily: props.data.value,
        }}
      >
        {props.value}
      </span>
    </div>
  )
}

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectorIcon
        className="w-5 h-5"
        aria-hidden="true"
        sx={{ color: 'text' }}
      />
    </components.DropdownIndicator>
  )
}

class MenuList extends Component {
  render() {
    const { options, children, maxHeight, getValue, cx, getStyles } = this.props
    const [value] = getValue()
    const initialOffset = options.indexOf(value) * height

    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    )
  }
}

export const Select = () => {
  const { theme, setTheme, setGfont } = useContext(AppContext)
  useEffect(() => {
    // add all google font styles to the head
    googleFonts.map((font) => {
      var newStyle = document.createElement('style')
      newStyle.appendChild(
        document.createTextNode(
          '\
@font-face {\
    font-family: ' +
            font.family +
            ";\
    src: url('" +
            font.files[Object.keys(font.files)[0]] +
            "');\
}\
",
        ),
      )

      document.head.appendChild(newStyle)
    })
  }, [])

  return (
    <ReactSelect
      options={googleFonts.map((f) => ({ value: f.family, label: f.family }))}
      sx={{ bg: 'background', borderColor: 'borderColor' }}
      className="mb-6"
      minMenuHeight={600}
      onChange={(font) => {
        setGfont(font.value)
        setTheme((theme) => ({
          ...theme,
          fonts: { ...theme.fonts, body: font.value, heading: font.value },
        }))
      }}
      styles={{
        menu: (provided, state) => ({
          ...provided,
          background: theme.colors.background,
          border: `1px solid ${theme.colors.borderColor}`,
        }),
        control: (provided, state) => ({
          ...provided,
          background: theme.colors.background,
          borderColor: theme.colors.borderColor,
          // background: 'red',
        }),
        // singleValue: (provided, state) => ({
        //   ...provided,
        //   background: 'blue',
        // }),
      }}
      components={{
        MenuList,
        DropdownIndicator,
        IndicatorSeparator: () => <div />,
        Option,
      }}
    />
  )
}
