import { Box } from 'theme-ui'
import * as Atoms from 'components/atoms'
import {
  Input,
  Button,
  Checkbox,
  Label,
  Link,
  Heading,
  Paragraph,
} from 'components/atoms'

export const Form = () => (
  <Atoms.Card
    className="flex flex-col px-8 py-12 border space-y-4 w-96"
    sx={{
      borderColor: 'borderColor',
    }}
  >
    <Heading>
      Account
      <br />
      registration
    </Heading>
    <Paragraph>Is your team already using Calmpaper? </Paragraph>
    <Input placeholder="Email" />
    <Input placeholder="Password" type="password" />
    <div className="flex items-center">
      <Checkbox />
      <Label>
        By registering, you agree to our <Link href="#">privacy police</Link> &
        <Link href="#"> terms</Link>
      </Label>
    </div>
    <Button>Register</Button>
  </Atoms.Card>
)

// <Atoms.Input placeholder="Email" />
// <Atoms.Input placeholder="Password" type="password" />
// <Atoms.Button>Register</Atoms.Button>
