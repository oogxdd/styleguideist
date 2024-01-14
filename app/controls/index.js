import {
  // Logo,
  // Caption,
  Textarea,
  Button,
  Separator,
} from 'components/atoms'
import { ParametersGrid } from './parameters-grid'

const linebreakCharacter = '&#10;'

const Controls = () => {
  return (
    <div
      className="flex flex-col justify-between w-1/3 border-r h-screen p-6 pb-3"
      sx={{
        borderColor: 'borderColor',
      }}
    >
      <div className="flex flex-col">
        {/* 1. Prompt generation */}
        <div className="flex flex-col items-start">
          <Logo />
          <Description>
            generate ui for your next
            <br />
            thing
          </Description>
          <Textarea
            placeholder="type in anything you want to build &#10;eg “e-commerce shop for the kids”"
            className="text-sm p-2 bg-red text-red w-72 bg-gray-100 bg-opacity-60 border-gray-200 resize-none mb-2"
          />
          <Button
            primary
            className=""
            sx={{
              height: 32,
              pl: 14,
              pr: 14,
              fontSize: 2,
            }}
          >
            Generate
          </Button>
        </div>
        {/* */}

        <Separator style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          or
        </Separator>

        {/* 2. Manual parameters grid */}
        <div className="flex flex-col items-end mx-2">
          <ParametersGrid />
          <Button secondary style={{ background: '#8d8d8d' }}>
            Randomize
          </Button>
        </div>
        {/* */}
      </div>

      {/* 3. Footer */}
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <FooterItem>FAQ</FooterItem>
          <FooterItem>Documentation</FooterItem>
          <FooterItem>About</FooterItem>
        </div>
        <FooterItem>2024</FooterItem>
      </div>
      {/* */}
    </div>
  )
}

const Logo = () => (
  <span className="text-2xl tracking-wide">
    <span className="opacity-60 font-extralight">make</span>
    <span className="font-regular">
      ui<span>.ai</span>
    </span>
  </span>
)

const Description = ({ children }) => (
  <span className="text-regular mt-0.5 opacity-60 mb-2">{children}</span>
)
const FooterItem = ({ children }) => (
  <span className="text-xs opacity-60 font-light">{children}</span>
)

export default Controls
