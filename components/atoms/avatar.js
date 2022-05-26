import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Avatar as ThemeUIAvatar } from 'theme-ui'

export const Avatar = ({
  src = '/img/logo/spotify.svg',
  alt = 'Image',
  sx = {},
  variant = 'atoms.avatar',
  className = 'h-10 w-10 rounded-full',
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeUIAvatar
      src={src}
      alt={alt}
      className={`duration-200 ${className}`}
      sx={{
        variant,
        ...sx,
      }}
    />
  )
}
