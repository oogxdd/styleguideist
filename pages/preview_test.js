import { lazy, useEffect, useState, Suspense } from 'react'
import { useRouter } from 'next/router'

const PreviewTest = () => {
  const router = useRouter()
  const [Component, setComponent] = useState(undefined)

  useEffect(() => {
    if (router && router.query) {
      console.log(router.query)
      const group = Object.keys(router.query)[0]
      const comp = Object.values(router.query)[0]
      console.log(group)

      if (group && comp) {
        const cc = lazy(() => import(`components/${group}/${comp}`))
        setComponent(cc)
      }

      // const cc = lazy(() => import(`components/${group}/${comp}`))
    }
  }, [router])

  return (
    <div>
      {Component && (
        <Suspense fallback={<div>loading</div>}>
          <Component />
        </Suspense>
      )}
      <span />
    </div>
  )
}

export default PreviewTest
