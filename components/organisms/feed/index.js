// 1: separators
// 2. bubbles

import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import { FeedTwitter } from './twitter'
import { FeedQuora } from './quora'
import { FeedInstagram } from './instagram'

import * as Molecules from 'components/molecules'

export const Feed = () => {
  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)
  const { theme } = useContext(ThemeContext)

  const preferredFeedItemLayout = theme.organisms.feed.preferredFeedItemLayout

  // if (preferredFeedItemLayout === 1) {
  //   return <div>prefered feed item layout: 1</div>
  // }
  // if (preferredFeedItemLayout === 2) {
  //   return <div>prefered feed item layout: 2</div>
  // }
  // if (preferredFeedItemLayout === 3) {
  //   return <div>prefered feed item layout: 3</div>
  // }

  return (
    <div className="pt-24 pb-24">
      <div
        className="flex flex-col space-y-8 h-full"
        sx={{
          variant: 'organisms.feed.container',
        }}
      >
        {questions.map((question, index) => {
          return (
            <>
              <Molecules.FeedItem
                itemVar={selectedComponentVariant}
                item={question}
                key={question.id}
              />
              {index !== questions.length - 1 && <Separator />}
            </>
          )
        })}
      </div>
    </div>
  )
  // return <FeedQuora itemVar={selectedComponentVariant} />
}

const Separator = () => {
  const { theme } = useContext(ThemeContext)
  // return <hr sx={{ variant: 'organisms.feed.separator' }} />

  return (
    <div
      sx={{
        width: '100%',
        height: 1,
        // background: 'borderColor',
        background: '#e5e7eb',
        mt: 32,
        variant: 'organisms.feed.separator',
        marginBottom: theme.organisms.feed.separator.mb
          ? `${theme.organisms.feed.separator.mb}px !important`
          : null,
        marginTop: theme.organisms.feed.separator.mt
          ? `${theme.organisms.feed.separator.mt}px !important`
          : null,
      }}
    />
  )
}

const questions = [
  {
    id: '81611',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  {
    id: '81612',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  {
    id: '81613',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
