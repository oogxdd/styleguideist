import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import { Card, InputField, Button, Heading } from 'components/atoms'

import { pxToNum, numToPx, value } from 'helpers'

export const Form = () => {
  const { theme } = useContext(ThemeContext)

  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)

  if (selectedComponentVariant === 2) {
    return (
      <Card
        className="flex flex-col px-8 py-12 w-96"
        sx={{
          // borderColor: 'borderColor',
          // borderRadius: theme.molecules.blogpost.card.borderRadius
          //   ? `${theme.molecules.blogpost.card.borderRadius}px`
          //   : theme.atoms.card.borderRadius
          //   ? `${theme.atoms.card.borderRadius}px`
          //   : pxToNum(theme.radii[2]) * 3,
          variant: theme.molecules.form.card
            ? 'molecules.form.card'
            : undefined,
        }}
      >
        <Heading
          as="h1"
          style={{
            textTransform: 'uppercase',
            fontSize: 39,
            marginBottom: 21,
            variant: 'molecules.form.heading',
          }}
        >
          Sign up
        </Heading>
        <InputField name="nickname" placeholder="Email" />
        <InputField name="email" placeholder="Password" type="email" />
        <Button>CONTINUE</Button>
      </Card>
    )
  }

  return (
    <Card
      className="flex flex-col px-8 py-12 w-96"
      sx={{
        // pl: value(theme, ['molecules.form.card.pl', 'atoms.card.pl'], 'x.5'),
        // pr: value(theme, ['molecules.form.card.pr', 'atoms.card.pr'], 'x.5'),
        // pt: value(theme, ['molecules.form.card.pt', 'atoms.card.pt'], 'y.5'),
        // pb: value(theme, ['molecules.form.card.pb', 'atoms.card.pb'], 'y.5'),
        variant: theme.molecules.form.card ? 'molecules.form.card' : undefined,
      }}
    >
      <Heading
        as="h1"
        style={{
          mb: value(
            theme,
            ['molecules.form.heading.mb', 'atoms.heading.h1.mb'],
            'y.5',
          ),
          variant: 'molecules.form.heading',
        }}
      >
        Sign up
      </Heading>
      <InputField
        name="nickname"
        label="Username"
        placeholder=""
        variant="molecules.form"
        style={{
          mb: value(
            theme,
            ['molecules.form.field.mb', 'atoms.field.mb'],
            'y.3',
          ),
        }}
      />
      <InputField
        name="email"
        label="Email"
        placeholder=""
        type="email"
        hint="Make sure you are using real email. We will contact you regarding the payment"
        variant="molecules.form"
        style={{
          mb: value(
            theme,
            ['molecules.form.field.mb', 'atoms.field.mb'],
            'y.3',
          ),
        }}
      />
      <InputField
        name="password"
        label="Password"
        placeholder=""
        type="password"
        variant="molecules.form"
        style={{
          mb: value(
            theme,
            ['molecules.form.field.mb', 'atoms.field.mb'],
            'y.3',
          ),
        }}
      />
      <InputField
        name="country"
        label="Country"
        placeholder=""
        type="text"
        variant="molecules.form"
        style={{
          mb: value(
            theme,
            ['molecules.form.field.mb', 'atoms.field.mb'],
            'y.3',
          ),
        }}
      />
      <Button
      // variant="molecules.form.button.primary"
      >
        Continue
      </Button>
      <Button
      // variant="molecules.form.button.secondary"
      >
        Already have an account? Sign in
      </Button>
    </Card>
  )
}

// <Atoms.Input placeholder="Email" />
// <Atoms.Input placeholder="Password" type="password" />
// <Atoms.Button>Register</Atoms.Button>
