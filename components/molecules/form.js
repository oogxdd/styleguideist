import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import { Card, InputField, Button, Heading } from 'components/atoms'

export const Form = () => {
  const { theme } = useContext(ThemeContext)

  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)

  if (selectedComponentVariant === 2) {
    return (
      <Card
        className="flex flex-col px-8 py-12 w-96"
        sx={{
          // borderColor: 'borderColor',
          variant: theme.molecules.form.card
            ? 'molecules.form.card'
            : undefined,
        }}
      >
        <Heading
          as="h1"
          style={{
            variant: 'molecules.form.heading',
            textTransform: 'uppercase',
            fontSize: 39,
            marginBottom: 21,
          }}
        >
          Sign up
        </Heading>
        <InputField name="nickname" placeholder="Email" />
        <InputField name="email" placeholder="Password" type="email" />
        <Button>Continue</Button>
      </Card>
    )
  }

  return (
    <Card
      className="flex flex-col px-8 py-12 w-96"
      sx={{
        // borderColor: 'borderColor',
        variant: theme.molecules.form.card ? 'molecules.form.card' : undefined,
      }}
    >
      <Heading
        as="h1"
        style={{
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
      />
      <InputField
        name="email"
        label="Email"
        placeholder=""
        type="email"
        hint="Make sure you are using real email. We will contact you regarding the payment"
        variant="molecules.form"
      />
      <InputField
        name="password"
        label="Password"
        placeholder=""
        type="password"
        variant="molecules.form"
      />
      <InputField
        name="country"
        label="Country"
        placeholder=""
        type="text"
        variant="molecules.form"
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
