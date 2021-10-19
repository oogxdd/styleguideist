import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Atom() {
  const {
    query: { atom },
    back,
  } = useRouter()

  return (
    <div className="flex flex-col">
      <a className="cursor-pointer" onClick={back}>
        Back
      </a>
      <span>Atom: {atom}</span>
    </div>
  )
}
