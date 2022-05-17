import * as Atoms from 'components/atoms'
// import { Heading, Paragraph, Caption, Text }

export const Styleguide = () => {
  return (
    <div className="flex flex-col w-full self-start mt-16 mb-16">
      <div className="flex justify-between">
        <Typography />
        <Colors />
      </div>
      <div className="flex justify-between mt-12">
        <Components />
      </div>
    </div>
  )
}

// Heading (1)
// Heading (2)
// Heading (3)
// Paragraph
// Caption
// Text (small)
const Typography = () => (
  <Atoms.Card
    className="flex flex-col w-5/12 py-10 px-10 space-y-6"
    sx={{ width: '48%' }}
  >
    <Atoms.Heading size="h1">Typography</Atoms.Heading>
    <div className="flex justify-between items-center">
      <span>Heading 1</span>
      <Atoms.Heading size="h1">Sign up</Atoms.Heading>
    </div>
    <div className="flex justify-between items-center">
      <span>Heading 2</span>
      <Atoms.Heading size="h2">Amprove your customer experience</Atoms.Heading>
    </div>
    <div className="flex justify-between items-center">
      <span>Heading 3</span>
      <Atoms.Heading size="h3">Lewis Lloyd</Atoms.Heading>
    </div>
    <div className="flex justify-between items-center">
      <span>Paragraph</span>
      <Atoms.Paragraph
        className="text-end"
        sxx={{ textAlign: 'end', margin: 0 }}
      >
        Our instincts were to start with a simple form that could become more
        complex and technical over time as the project matures and grows.
        Eventually, the logo design could be informed or driven by data we’ve
        collected.
      </Atoms.Paragraph>
    </div>
    <div className="flex justify-between items-center">
      <span>Caption</span>
      <Atoms.Caption className="text-end" sxx={{ textAlign: 'end', margin: 0 }}>
        Make sure you are using real email. We will contact you regarding the
        payment
      </Atoms.Caption>
    </div>
    <div className="flex justify-between items-center">
      <span>Small</span>
      <Atoms.Text className="text-end" sx={{ textAlign: 'end', margin: 0 }}>
        Small
      </Atoms.Text>
    </div>
  </Atoms.Card>
)

// Color (primary)
// Color (secondary)
const Colors = () => (
  <Atoms.Card
    className="flex flex-col w-5/12 py-10 px-10 space-y-6"
    sx={{ width: '48%' }}
  >
    <Atoms.Heading size="h1">Colors</Atoms.Heading>
    <div className="flex space-x-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-2" sx={{ background: 'primary' }} />
        <span>Primary</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-2" sx={{ background: 'secondary' }} />
        <span>Secondary</span>
      </div>
    </div>
  </Atoms.Card>
)

// Button
// Field (input)
// Avatar
// Image
const Components = () => (
  <Atoms.Card
    className="flex flex-col w-5/12 py-10 px-10 space-y-6"
    sx={{ width: '48%' }}
  >
    <Atoms.Heading size="h1">Components</Atoms.Heading>
    <div className="flex justify-between items-center">
      <span>Button</span>
      <Atoms.Button>Button</Atoms.Button>
    </div>
    <div className="flex justify-between items-center">
      <span>Input</span>
      <Atoms.Input>Input</Atoms.Input>
    </div>
    <div className="flex justify-between items-center">
      <span>Avatar</span>
      <Atoms.Avatar>Avatar</Atoms.Avatar>
    </div>
    <div className="flex justify-between items-center">
      <span>Image</span>
      <Atoms.Image>Image</Atoms.Image>
    </div>
  </Atoms.Card>
)
