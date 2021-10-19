import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Organism() {
  const {
    query: { organism },
    back,
  } = useRouter()

  return (
    <div className="flex flex-col">
      <a className="cursor-pointer" onClick={back}>
        Back
      </a>
      <span>Organism: {organism}</span>
    </div>
  )
}
