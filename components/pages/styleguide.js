import { useContext } from 'react'
import { ThemeContext, UIContext } from 'context'
import * as Atoms from 'components/atoms'

import { pxToNum } from 'helpers'
// import { Heading, Paragraph, Caption, Text }

export const Styleguide = () => {
  const { fullscreen } = useContext(UIContext)

  return (
    <div
      className={`grid ${
        fullscreen ? 'grid-cols-2' : 'grid-cols-1'
      } justify-center w-full`}
      sx={{
        marginTop: 'y.8',
        marginBottom: 'y.10',
        marginLeft: 'x.6',
        marginRight: 'x.6',
        columnGap: 'x.6',
      }}
    >
      <Typography />
      <Colors />
      <Components />
    </div>
  )
}

// Heading (1)
// Heading (2)
// Heading (3)
// Paragraph
// Caption
// Text (small)
const Typography = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="w-full flex justify-center" sx={{ marginBottom: 'y.6' }}>
      <Atoms.Card
        className="flex flex-col"
        style={{
          variant: 'pages.styleguide.card',
          paddingLeft: 'x.8',
          paddingRight: 'x.8',
          paddingTop: 'y.8',
          paddingBottom: 'y.8',
          width: theme.space.x[0] * 360,
          borderRadius: pxToNum(theme.radii[2]) * 3,
        }}
      >
        <Atoms.Heading as="h1" style={{ marginLeft: 0, marginBottom: 'y.7' }}>
          Typography
        </Atoms.Heading>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph
            style={{ margin: 0, color: 'text', minWidth: 'fit-content' }}
          >
            Heading 1
          </Atoms.Paragraph>
          <Atoms.Heading as="h1">Sign up</Atoms.Heading>
        </div>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph
            style={{ margin: 0, color: 'text', minWidth: 'fit-content' }}
          >
            Heading 2
          </Atoms.Paragraph>
          <Atoms.Heading as="h2" style={{ margin: 0, textAlign: 'end' }}>
            Amprove your customer experience
          </Atoms.Heading>
        </div>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph
            style={{ margin: 0, color: 'text', minWidth: 'fit-content' }}
          >
            Heading 3
          </Atoms.Paragraph>
          <Atoms.Heading as="h3">Lewis Lloyd</Atoms.Heading>
        </div>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph
            style={{ margin: 0, color: 'text', minWidth: 'fit-content' }}
          >
            Paragraph
          </Atoms.Paragraph>
          <Atoms.Paragraph
            className="text-end"
            style={{ textAlign: 'end', margin: 0, width: '75%' }}
          >
            Our instincts were to start with a simple form that could become
            more complex and technical over time as the project matures and
            grows.
          </Atoms.Paragraph>
        </div>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph
            style={{ margin: 0, color: 'text', minWidth: 'fit-content' }}
          >
            Caption
          </Atoms.Paragraph>
          <Atoms.Caption
            className="text-end"
            style={{ textAlign: 'end', margin: 0 }}
          >
            Make sure you are using real email. We will contact you regarding
            the payment
          </Atoms.Caption>
        </div>
        {/*
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph style={{ margin: 0 }}>Small</Atoms.Paragraph>
          <Atoms.Text className="text-end" sx={{ textAlign: 'end', margin: 0 }}>
            Small
          </Atoms.Text>
        </div>
*/}
      </Atoms.Card>
    </div>
  )
}

const Colors = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="w-full flex justify-center" sx={{ marginBottom: 'y.6' }}>
      <Atoms.Card
        className="flex flex-col"
        style={{
          variant: 'pages.styleguide.card',
          paddingLeft: 'x.8',
          paddingRight: 'x.8',
          paddingTop: 'y.8',
          paddingBottom: 'y.8',
          width: theme.space.x[0] * 360,
          borderRadius: pxToNum(theme.radii[2]) * 3,
        }}
      >
        <Atoms.Heading size="h1" style={{ marginLeft: 0, marginBottom: 'y.7' }}>
          Colors
        </Atoms.Heading>
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <div
              className="w-24 h-24 mb-2"
              sx={{
                background: 'primary',

                borderRadius: pxToNum(theme.radii[2]) * 2,
              }}
            />
            <Atoms.Paragraph style={{ margin: 0, color: 'text2' }}>
              Primary
            </Atoms.Paragraph>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="mb-2 w-24 h-24"
              sx={{
                // width: theme.space.x[0] * 36,
                // height: theme.space.x[0] * 36,
                background: 'secondary',
                borderRadius: pxToNum(theme.radii[2]) * 2,
              }}
            />
            <Atoms.Paragraph style={{ margin: 0, color: 'text2' }}>
              Secondary
            </Atoms.Paragraph>
          </div>
        </div>
      </Atoms.Card>
    </div>
  )
}

const Components = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="w-full flex justify-center">
      <Atoms.Card
        className="flex flex-col"
        style={{
          variant: 'pages.styleguide.card',
          paddingLeft: 'x.8',
          paddingRight: 'x.8',
          paddingTop: 'y.8',
          paddingBottom: 'y.8',
          width: theme.space.x[0] * 360,
          borderRadius: pxToNum(theme.radii[2]) * 3,
        }}
      >
        <Atoms.Heading size="h1" style={{ marginLeft: 0, marginBottom: 'y.7' }}>
          Components
        </Atoms.Heading>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph style={{ margin: 0, color: 'text' }}>
            Button
          </Atoms.Paragraph>
          <div className="flex w-1/2 justify-end items-end">
            <Atoms.Button>Button</Atoms.Button>
          </div>
        </div>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph style={{ margin: 0, color: 'text' }}>
            Input
          </Atoms.Paragraph>
          <div className="flex w-1/2 justify-end items-end">
            <Atoms.Input>Input</Atoms.Input>
          </div>
        </div>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph style={{ margin: 0, color: 'text' }}>
            Avatar
          </Atoms.Paragraph>
          <div className="flex w-1/2 justify-end items-end">
            <Atoms.Avatar>Avatar</Atoms.Avatar>
          </div>
        </div>
        <div
          className="flex justify-between items-center"
          sx={{ marginBottom: 'y.5' }}
        >
          <Atoms.Paragraph style={{ margin: 0, color: 'text' }}>
            Image
          </Atoms.Paragraph>
          <div className="flex w-1/2 justify-end items-end">
            <Atoms.Image
              style={{
                borderRadius: pxToNum(theme.radii[2]) * 2,
              }}
            >
              Image
            </Atoms.Image>
          </div>
        </div>
      </Atoms.Card>
    </div>
  )
}
