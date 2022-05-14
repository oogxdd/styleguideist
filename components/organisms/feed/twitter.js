import { FeedItem } from 'components/molecules'

export const FeedTwitter = ({ itemVar = 2 }) => {
  return (
    <div className="pt-24 pb-24">
      <div class="flex flex-col h-full border">
        <FeedItem itemVar={itemVar} />
        <hr />
        <FeedItem itemVar={itemVar} />
        <hr />
        <FeedItem itemVar={itemVar} />
      </div>
    </div>
  )
}
