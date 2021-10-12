export const Avatar = ({
  src = '',
  sm = false,
  md = false,
  lg = false,
  alt = 'img',
  rounded = true,
}) => {
  if (sm) {
    return <img className="h-8 w-8 rounded-full" src={src} alt={alt} />
  }

  if (md) {
    return <img className="h-10 w-10 rounded-full" src={src} alt={alt} />
  }

  if (lg) {
    return <img className="h-16 w-16 rounded-full" src={src} alt={alt} />
  }

  return <img className="h-10 w-10 rounded-full" src={src} alt={alt} />
}
