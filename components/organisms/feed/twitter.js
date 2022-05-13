import { FeedItem } from 'components/molecules'

export const FeedTwitter = ({ itemVar = 2 }) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-4">
        <div
          id="feed"
          className="max-w-lg bg-white border border-b-0 border-gray-200 mx-auto"
        >
          <FeedItem itemVar={itemVar} />
          <FeedItem itemVar={itemVar} />
          <FeedItem itemVar={itemVar} />
        </div>
      </div>
    </div>
  )
}
