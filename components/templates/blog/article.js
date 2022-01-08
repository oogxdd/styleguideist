import { MDXProvider } from '@mdx-js/react'
import Article from './article/sample.mdx'

export const ArticlePage = () => (
  <div className="flex flex-col max-w-2xl container prose prose-sm md:prose self-start pb-28">
    <MDXProvider>
      <Article />
    </MDXProvider>
  </div>
)
