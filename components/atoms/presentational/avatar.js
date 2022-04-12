import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Avatar as ThemeUIAvatar } from 'theme-ui'

export const Avatar = ({
  src = '/img/logo/spotify.svg',
  alt = 'Image',
  sx,
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeUIAvatar
      src={src}
      alt={alt}
      className="h-10 w-10 rounded-full"
      sx={{ variant: 'atoms.avatar', ...sx }}
    />
  )
}
