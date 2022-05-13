import { FeedItem } from 'components/molecules'

export const FeedInstagram = ({ itemVar = 3 }) => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container mx-auto px-4 py-4">
        <div id="feed" className="max-w-lg mx-auto">
          <FeedItem itemVar={itemVar} />
          <FeedItem itemVar={itemVar} />
          <FeedItem itemVar={itemVar} />
        </div>
      </div>
    </div>
  )
}
