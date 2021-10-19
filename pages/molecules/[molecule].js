import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Molecule() {
  const {
    query: { molecule },
    back,
  } = useRouter()

  return (
    <div className="flex flex-col">
      <a className="cursor-pointer" onClick={back}>
        Back
      </a>
      <span>Molecule: {molecule}</span>
    </div>
  )
}
