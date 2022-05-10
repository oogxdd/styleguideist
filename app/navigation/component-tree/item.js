const Item = ({
  level = 0,
  children,
  underline,
  onClick = () => {},
  ...props
}) => {
  return (
    <span
      style={{
        marginLeft: level * 16,
      }}
      onClick={onClick}
      className={`flex items-center cursor-pointer hover:underline w-max ${
        underline ? 'underline' : ''
      }`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Item
