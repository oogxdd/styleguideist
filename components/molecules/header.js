/** @jsxImportSource theme-ui */
import { Themed, Link } from 'theme-ui'
export const Header = () => (
  <header
    className="w-full"
    sx={{
      display: 'flex',
      alignItems: 'center',
      variant: 'styles.header',
    }}
  >
    <Link
      to="/"
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}
    >
      Hello
    </Link>
    <div sx={{ mx: 'auto' }} />
    <Link
      to="/blog"
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}
    >
      Blog
    </Link>
    <Link
      to="/about"
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}
    >
      About
    </Link>
  </header>
)
