import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import {
  Card,
  Image,
  Label,
  Title,
  Paragraph,
  UserCard,
  Heading,
} from 'components/atoms'

import { pxToNum, numToPx } from 'helpers'

export const BlogPost = ({ molecule }) => {
  const { theme } = useContext(ThemeContext)
  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)
  const post = theme.molecules.blogpost.props || defaultPost

  let overrideHeading =
    theme[selectedComponent.group][selectedComponent.value]['heading'] &&
    theme[selectedComponent.group][selectedComponent.value]['heading']
      .override &&
    theme[selectedComponent.group][selectedComponent.value]['heading'].override
      .font

  if (selectedComponentVariant === 2) {
    return (
      <Card
        className="flex flex-row overflow-hidden h-full w-full items-center"
        sx={{
          px: theme.space.base ? theme.space.base.x * 6.5 : undefined,
          py: theme.space.base ? theme.space.base.y * 6.5 : undefined,
          borderRadius: pxToNum(theme.radii[2]) * 3,
          variant: theme.molecules.blogpost.card
            ? 'molecules.blogpost.card'
            : undefined,
        }}
      >
        <Image
          src={post.imageUrl}
          style={{ borderRadius: pxToNum(theme.radii[2]) * 2 }}
          className="flex-1"
        />
        <div
          className="flex-1 p-6 flex flex-col justify-between"
          sx={{
            py: theme.space.base ? theme.space.base.y * 6 : undefined,
          }}
        >
          <div className="flex-1">
            <Label>{post.label}</Label>
            <a
              href={post.href}
              className="block"
              sx={{
                marginTop: theme.space.base
                  ? theme.space.base.y * 2
                  : undefined,
              }}
            >
              <Title
                as="h2"
                // sxx={{
                //   variant: overrideHeading
                //     ? 'molecules.blogpost.heading'
                //     : 'atoms.heading',
                // }}
                style={{
                  // variant: 'atoms.heading',
                  variant: 'molecules.blogpost.heading',

                  // variant: ['atoms.heading', 'molecules.blogpost.heading'],

                  // variant: overrideHeading
                  //   ? 'molecules.blogpost.heading'
                  //   : 'atoms.heading',
                }}
                // variant={
                //   overrideHeading
                //     ? 'molecules.blogpost.heading'
                //     : 'atoms.heading'
                // }
                // yo="'GOVBNo'"
              >
                {post.title}
              </Title>
              <Paragraph
                style={{
                  marginTop: theme.space.base
                    ? theme.space.base.y * 3
                    : undefined,
                }}
              >
                {post.description}
              </Paragraph>
            </a>
          </div>
          <UserCard post={post} />
        </div>
      </Card>
    )
  }

  if (selectedComponentVariant === 3) {
    return <div>3</div>
  }

  // if value === image:
  // src
  //
  return (
    <Card
      className="flex flex-col overflow-hidden h-full w-full flex-1 p-6 flex flex-col justify-between"
      sx={{
        px: theme.space.base ? theme.space.base.x * 6.5 : undefined,
        py: theme.space.base ? theme.space.base.y * 6.5 : undefined,
        borderRadius: pxToNum(theme.radii[2]) * 3,
        variant: theme.molecules.blogpost.card
          ? 'molecules.blogpost.card'
          : undefined,
      }}
    >
      <div className="flex-1">
        {molecule.children
          .filter((c) => !!c.ordering)
          .map((c) => {
            const order =
              theme[selectedComponent.group][selectedComponent.value][c.value]
                .order
            return {
              ...c,
              order,
            }
          })
          .sort((a, b) => a.order - b.order)
          .map((Comp) => {
            if (Comp.value === 'image') {
              return (
                <Image
                  src={post.imageUrl}
                  style={{ borderRadius: pxToNum(theme.radii[2]) * 2 }}
                />
              )
            }

            if (Comp.value === 'usercard') {
              return <Comp.component post={post} />
            }

            if (Comp.value === 'paragraph') {
              return (
                <Paragraph
                  style={{
                    marginTop: theme.space.base
                      ? theme.space.base.y * 3
                      : undefined,
                  }}
                >
                  {post.description}
                </Paragraph>
              )
            }

            return (
              <>
                <Comp.component children={post[Comp.propsKey]} />
              </>
            )
          })}
      </div>
    </Card>
  )
}

const defaultPost = {
  title: 'Improve your customer experience',
  href: '#',
  label: 'Case Study',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  imageUrl: '/img/burn.jpeg',

  authorName: 'Daniela Metz',
  authorAvatar:
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  caption: 'Feb 12, 2020  ·  11 min read',

  // imageUrl: '/img/avatar/3.jpeg',
  // imageUrl:
  //   'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
}
