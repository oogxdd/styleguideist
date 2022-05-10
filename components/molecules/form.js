import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import {
  Card,
  Input,
  Button,
  Checkbox,
  Label,
  Link,
  Heading,
  Paragraph,
} from 'components/atoms'

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
          sxx={{
            variant: 'atoms.heading',
            textTransform: 'uppercase',
            fontSize: 39,
            marginBottom: 21,
          }}
        >
          Sign up
        </Heading>
        <Field name="nickname" placeholder="Email" />
        <Field name="email" placeholder="Password" type="email" />
        <Button>Continue</Button>
      </Card>
    )
  }

  return (
    <Card
      className="flex flex-col px-8 py-12 space-y-4 w-96"
      sx={{
        // borderColor: 'borderColor',
        variant: theme.molecules.form.card ? 'molecules.form.card' : undefined,
      }}
    >
      <Heading variant="atoms.heading">Sign up</Heading>
      <Field name="nickname" label="Username" placeholder="" />
      <Field
        name="email"
        label="Email"
        placeholder=""
        type="email"
        hint="Make sure you are using real email. We will contact you regarding the payment"
      />
      <Field name="password" label="Password" placeholder="" type="password" />
      <Field name="country" label="Country" placeholder="" type="text" />
      <Button>Continue</Button>
      <Button secondary>Already have an account? Sign in</Button>
    </Card>
  )
}

const Field = ({
  label,
  placeholder = 'Placeholder',
  type = 'text',
  hint,
  value,
  onChange = () => {},
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1 relative">
        <Input
          className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
      {hint && (
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          {hint}
        </p>
      )}
    </div>
  )
}

// <Atoms.Input placeholder="Email" />
// <Atoms.Input placeholder="Password" type="password" />
// <Atoms.Button>Register</Atoms.Button>
