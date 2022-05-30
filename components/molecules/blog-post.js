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

const checkValue = (variant, key, defaultValue, theme) => {
  if (
    theme[variant.split('.')[0]][variant.split('.')[1]][variant.split('.')[2]][
      key
    ] ||
    theme[variant.split('.')[0]][variant.split('.')[1]][variant.split('.')[2]][
      key
    ] === 0
  ) {
    // alert('checked')
    return (
      theme[variant.split('.')[0]][variant.split('.')[1]][
        variant.split('.')[2]
      ][key] + 'px' ||
      theme[variant.split('.')[0]][variant.split('.')[1]][
        variant.split('.')[2]
      ][key] +
        'px' ===
        0
    )
  }
  if (theme['atoms'][variant.split('.')[2]][key]) {
    return theme['atoms'][variant.split('.')[2]][key] + 'px'
  }
  return defaultValue
}

// marginLeft: checkValue(
//   'molecules.blogpost.heading',
//   'ml',
//   'x.5',
//   theme,
// ),

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

  if (selectedComponentVariant === 2) {
    return (
      <Card
        className="flex flex-row overflow-hidden h-full w-full items-center"
        style={{
          borderRadius: theme.molecules.blogpost.card.borderRadius
            ? `${theme.molecules.blogpost.card.borderRadius}px`
            : theme.atoms.card.borderRadius
            ? `${theme.atoms.card.borderRadius}px`
            : pxToNum(theme.radii[2]) * 3,
          width:
            theme.molecules.blogpost.card.width ||
            theme.atoms.card.width ||
            theme.space.x[0] * 400,
          paddingTop: theme.molecules.blogpost.card.pt
            ? `${theme.molecules.blogpost.card.pt}px`
            : theme.atoms.card.pt
            ? `${theme.atoms.card.pt}px`
            : 'y.5',
          paddingBottom: theme.molecules.blogpost.card.pb
            ? `${theme.molecules.blogpost.card.pb}px`
            : theme.atoms.card.pb
            ? `${theme.atoms.card.pb}px`
            : 'y.5',
          paddingLeft: theme.molecules.blogpost.card.pl
            ? `${theme.molecules.blogpost.card.pl}px`
            : theme.atoms.card.pl
            ? `${theme.atoms.card.pl}px`
            : 'x.5',
          paddingRight: theme.molecules.blogpost.card.pr
            ? `${theme.molecules.blogpost.card.pr}px`
            : theme.atoms.card.pr
            ? `${theme.atoms.card.pr}px`
            : 'x.5',
          // paddingBottom: 'y.5',
          // paddingLeft: 'x.5',
          // paddingRight: 'x.5',
          variant: 'molecules.blogpost.card',
        }}
      >
        <Image
          src={post.imageUrl}
          style={{
            borderRadius: pxToNum(theme.radii[2]) * 2,
            variant: 'molecules.blogpost.image',
          }}
        />
        <div
          className="flex flex-col justify-between"
          sx={{
            py: theme.space.base ? theme.space.base.y * 6 : undefined,
          }}
        >
          <div className="flex-1">
            <Label
              style={{
                marginBottom: 'y.2',
                marginLeft: 'x.5',
                marginRight: 'x.5',
                variant: 'molecules.blogpost.label',
              }}
            >
              {post.label}
            </Label>
            <a
              href={post.href}
              className="block"
              sx={{
                marginTop: theme.space.base
                  ? theme.space.base.y * 2
                  : undefined,
              }}
            >
              <Heading
                as="h2"
                style={{
                  marginLeft: checkValue(
                    'molecules.blogpost.heading',
                    'ml',
                    'x.5',
                    theme,
                  ),
                  // marginLeft: 'x.5',
                  marginRight: 'x.5',
                  marginBottom: 'y.3',
                  variant: 'molecules.blogpost.heading',
                }}
              >
                {post.title}
              </Heading>
              <Paragraph
                style={{
                  marginLeft: 'x.5',
                  marginRight: 'x.5',
                  marginBottom: 'y.5',
                  variant: 'molecules.blogpost.paragraph',
                }}
              >
                {post.description}
              </Paragraph>
            </a>
          </div>
          <UserCard
            style={{
              marginLeft: 'x.5',
              marginRight: 'x.5',
              marginBottom: 'y.2',
            }}
            post={post}
            variant="molecules.blogpost.usercard"
          />
        </div>
      </Card>
    )
  }

  // if value === image:
  // src
  //
  return (
    <Card
      className="flex flex-col overflow-hidden h-full w-full flex-1 p-6 flex flex-col justify-between duration-200"
      style={{
        borderRadius: theme.molecules.blogpost.card.borderRadius
          ? `${theme.molecules.blogpost.card.borderRadius}px`
          : theme.atoms.card.borderRadius
          ? `${theme.atoms.card.borderRadius}px`
          : pxToNum(theme.radii[2]) * 3,
        width:
          theme.molecules.blogpost.card.width ||
          theme.atoms.card.width ||
          theme.space.x[0] * 200,

        paddingTop: theme.molecules.blogpost.card.pt
          ? `${theme.molecules.blogpost.card.pt}px`
          : theme.atoms.card.pt
          ? `${theme.atoms.card.pt}px`
          : 'y.5',
        paddingBottom: theme.molecules.blogpost.card.pb
          ? `${theme.molecules.blogpost.card.pb}px`
          : theme.atoms.card.pb
          ? `${theme.atoms.card.pb}px`
          : 'y.5',
        paddingLeft: theme.molecules.blogpost.card.pl
          ? `${theme.molecules.blogpost.card.pl}px`
          : theme.atoms.card.pl
          ? `${theme.atoms.card.pl}px`
          : 'x.5',
        paddingRight: theme.molecules.blogpost.card.pr
          ? `${theme.molecules.blogpost.card.pr}px`
          : theme.atoms.card.pr
          ? `${theme.atoms.card.pr}px`
          : 'x.5',
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
                    marginLeft: checkValue(
                      'molecules.blogpost.heading',
                      'ml',
                      'x.5',
                      theme,
                    ),
                    // marginLeft: 'x.5',
                    marginRight: checkValue(
                      'molecules.blogpost.heading',
                      'mr',
                      'x.5',
                      theme,
                    ),
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
                    marginLeft: checkValue(
                      'molecules.blogpost.paragraph',
                      'ml',
                      'x.5',
                      theme,
                    ),
                    // marginLeft: 'x.5',
                    marginRight: checkValue(
                      'molecules.blogpost.paragraph',
                      'mr',
                      'x.5',
                      theme,
                    ),
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
                    marginLeft: checkValue(
                      'molecules.blogpost.usercard',
                      'ml',
                      'x.5',
                      theme,
                    ),
                    // marginLeft: 'x.5',
                    marginRight: 'x.5',
                    marginBottom: 'y.2',
                  }}
                  post={post}
                  variant="molecules.blogpost.usercard"
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
