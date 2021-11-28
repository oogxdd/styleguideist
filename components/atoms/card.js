/** @jsxImportSource theme-ui */
import { Card as ThemeUICard, Text, Image } from 'theme-ui'

export const Card = () => (
  <ThemeUICard
    sx={{
      maxWidth: 256,
    }}
  >
    <Image src="https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" />
  </ThemeUICard>
)
