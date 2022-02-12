export const Image = ({
  src = 'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  alt = '',
}) => (
  <img
    className="h-48 w-full object-cover m-auto"
    src={src}
    alt=""
    sx={{
      variant: 'atoms.image',
    }}
  />
)
