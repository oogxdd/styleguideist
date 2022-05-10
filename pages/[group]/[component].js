import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { group, component } = router.query

  return (
    <div className="flex flex-col">
      <p>Group: {group}</p>
      <p>Component: {component}</p>
    </div>
  )
}

export default Post
