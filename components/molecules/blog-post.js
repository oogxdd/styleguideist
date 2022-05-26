import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import {
  Card,
  Image,
  Heading,
  Paragraph,
  Label,
  UserCard,
} from 'components/atoms'

import { pxToNum, numToPx } from 'helpers'

export const BlogPost = ({ molecule }) => {
  const { theme } = useContext(ThemeContext)
  const { selectedComponent: comp, selectedComponentVariant } = useContext(
    AppContext,
  )
  const post = theme.molecules.blogpost.props || defaultPost

  let overrideHeading =
    theme[comp.group][comp.value]['heading'] &&
    theme[comp.group][comp.value]['heading'].override &&
    theme[comp.group][comp.value]['heading'].override.font

  // if (selectedComponentVariant === 2) {
  //   return (
  //     <Card
  //       className="flex flex-row overflow-hidden h-full w-full items-center"
  //       style={{
  //         // px: theme.space.base ? theme.space.base.x * 6.5 : undefined,
  //         // py: theme.space.base ? theme.space.base.y * 6.5 : undefined,
  //         borderRadius: pxToNum(theme.radii[2]) * 3,
  //         width: 'x.12',
  //         variant: 'molecules.blogpost.card',
  //       }}
  //     >
  //       <Image
  //         src={post.imageUrl}
  //         style={{ borderRadius: pxToNum(theme.radii[2]) * 2 }}
  //         className="flex-1"
  //       />
  //       <div
  //         className="flex-1 p-6 flex flex-col justify-between"
  //         sx={{
  //           py: theme.space.base ? theme.space.base.y * 6 : undefined,
  //         }}
  //       >
  //         <div className="flex-1">
  //           <Label>{post.label}</Label>
  //           <a
  //             href={post.href}
  //             className="block"
  //             sx={{
  //               marginTop: theme.space.base
  //                 ? theme.space.base.y * 2
  //                 : undefined,
  //             }}
  //           >
  //             <Heading
  //               as="h2"
  //               // sxx={{
  //               //   variant: overrideHeading
  //               //     ? 'molecules.blogpost.heading'
  //               //     : 'atoms.heading',
  //               // }}
  //               style={{
  //                 // variant: 'atoms.heading',
  //                 variant: 'molecules.blogpost.heading',

  //                 // variant: ['atoms.heading', 'molecules.blogpost.heading'],

  //                 // variant: overrideHeading
  //                 //   ? 'molecules.blogpost.heading'
  //                 //   : 'atoms.heading',
  //               }}
  //               // variant={
  //               //   overrideHeading
  //               //     ? 'molecules.blogpost.heading'
  //               //     : 'atoms.heading'
  //               // }
  //               // yo="'GOVBNo'"
  //             >
  //               {post.title}
  //             </Heading>
  //             <Paragraph
  //               style={{
  //                 marginTop: theme.space.base
  //                   ? theme.space.base.y * 3
  //                   : undefined,
  //               }}
  //             >
  //               {post.description}
  //             </Paragraph>
  //           </a>
  //         </div>
  //         <UserCard post={post} />
  //       </div>
  //     </Card>
  //   )
  // }

  // if value === image:
  // src
  //
  return (
    <Card
      className="flex flex-col overflow-hidden h-full w-full flex-1 p-6 flex flex-col justify-between duration-200"
      style={{
        borderRadius: pxToNum(theme.radii[2]) * 3,
        // width: '20px',
        width: theme.space.x[0] * 200,

        paddingTop: 'y.5',
        paddingBottom: 'y.5',
        paddingLeft: 'x.5',
        paddingRight: 'x.5',
        variant: 'molecules.blogpost.card',
        // width: theme.space.x[12],
        // maxWidth: 'x.9',
      }}
    >
      <div className="flex-1">
        {molecule.children
          .filter((c) => !!c.ordering)
          .map((c) => ({
            ...c,
            order: theme[comp.group][comp.value][c.value].order,
          }))
          .sort((a, b) => a.order - b.order)
          .map((Comp) => {
            // image
            // label
            // heading
            // paragraph
            // usercard

            if (Comp.value === 'image') {
              return (
                <Image
                  key={Comp.value}
                  src={post.imageUrl}
                  style={{
                    borderRadius: pxToNum(theme.radii[2]) * 2,
                    marginBottom: 'y.5',
                    variant: 'molecules.blogpost.image',
                  }}
                />
              )
            }

            if (Comp.value === 'label') {
              return (
                <Label
                  key={Comp.value}
                  style={{
                    marginBottom: 'y.2',
                    marginLeft: 'x.5',
                    marginRight: 'x.5',
                    variant: 'molecules.blogpost.label',
                  }}
                >
                  {post.label}
                </Label>
              )
            }

            if (Comp.value === 'heading') {
              return (
                <Heading
                  key={Comp.value}
                  as="h2"
                  style={{
                    marginLeft: 'x.5',
                    marginRight: 'x.5',
                    marginBottom: 'y.3',
                    variant: 'molecules.blogpost.heading',
                  }}
                >
                  {post.title}
                </Heading>
              )
            }

            if (Comp.value === 'paragraph') {
              return (
                <Paragraph
                  key={Comp.value}
                  style={{
                    marginLeft: 'x.5',
                    marginRight: 'x.5',
                    marginBottom: 'y.5',
                    variant: 'molecules.blogpost.paragraph',
                  }}
                >
                  {post.description}
                </Paragraph>
              )
            }

            if (Comp.value === 'usercard') {
              return (
                <UserCard
                  key={Comp.value}
                  style={{
                    marginLeft: 'x.5',
                    marginRight: 'x.5',
                    marginBottom: 'y.2',
                  }}
                  post={post}
                />
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
  title: 'Generative logo design',
  href: '#',
  label: 'Case Study',
  description:
    'Our instincts were to start with a simple form that could become more complex and technical over time as the project matures and grows. Eventually, the logo design could be informed or driven by data we’ve collected.',
  imageUrl: 'http://dc28c2r6oodom.cloudfront.net/notes/dice-lines.jpg',
  authorName: 'Elliot Jay Stocks',
  authorAvatar: '/img/avatar/elliot-jay-stocks.jpeg',
  caption: 'Feb 12, 2022  ·  11 min read',
}
