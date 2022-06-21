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

import { pxToNum, numToPx, value } from 'helpers'

export const BlogPostVertical = ({ post, molecule }) => {
  const { theme } = useContext(ThemeContext)
  const { selectedComponent: comp, selectedComponentVariant } = useContext(
    AppContext,
  )

  return (
    <Card
      className="flex flex-col overflow-hidden flex-1 p-6 flex flex-col justify-between duration-200"
      style={{
        width:
          theme.molecules.blogpost.card.width ||
          theme.atoms.card.width ||
          theme.space.x[0] * 200,

        pl: value(
          theme,
          ['molecules.blogpost.card.pl', 'atoms.card.pl'],
          'x.5',
        ),
        pr: value(
          theme,
          ['molecules.blogpost.card.pr', 'atoms.card.pr'],
          'x.5',
        ),
        pt: value(
          theme,
          ['molecules.blogpost.card.pt', 'atoms.card.pt'],
          'y.5',
        ),
        pb: value(
          theme,
          ['molecules.blogpost.card.pb', 'atoms.card.pb'],
          'y.5',
        ),

        variant: 'molecules.blogpost.card',
      }}
    >
      {molecule.children
        .filter((c) => !!c.ordering)
        .map((c) => ({
          ...c,
          order: theme[comp.group][comp.value][c.value].order,
        }))
        .sort((a, b) => a.order - b.order)
        .map((Comp) => {
          // 1. image
          // 2. label
          // 3. heading
          // 4. paragraph
          // 5. usercard

          if (Comp.value === 'image') {
            return (
              <Image
                key={Comp.value}
                src={post.imageUrl}
                style={{
                  mb: value(
                    theme,
                    ['molecules.blogpost.image.mb', 'atoms.image.mb'],
                    'y.5',
                  ),
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
                  ml: value(
                    theme,
                    ['molecules.blogpost.label.ml', 'atoms.label.ml'],
                    'x.5',
                  ),
                  mr: value(
                    theme,
                    ['molecules.blogpost.label.mr', 'atoms.label.mr'],
                    'x.5',
                  ),
                  mb: value(
                    theme,
                    ['molecules.blogpost.label.mb', 'atoms.label.mb'],
                    'y.2',
                  ),
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
                  ml: value(
                    theme,
                    ['molecules.blogpost.heading.ml', 'atoms.heading.h2.ml'],
                    'x.5',
                  ),
                  mr: value(
                    theme,
                    ['molecules.blogpost.heading.mr', 'atoms.heading.h2.mr'],
                    'x.5',
                  ),
                  mb: value(
                    theme,
                    ['molecules.blogpost.heading.mb', 'atoms.heading.h2.mb'],
                    'y.3',
                  ),
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
                  ml: value(
                    theme,
                    ['molecules.blogpost.paragraph.ml', 'atoms.paragraph.ml'],
                    'x.5',
                  ),
                  mr: value(
                    theme,
                    ['molecules.blogpost.paragraph.mr', 'atoms.paragraph.mr'],
                    'x.5',
                  ),
                  mb: value(
                    theme,
                    ['molecules.blogpost.paragraph.mb', 'atoms.paragraph.mb'],
                    'y.5',
                  ),
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
                  ml: value(
                    theme,
                    ['molecules.blogpost.usercard.ml', 'atoms.usercard.ml'],
                    'x.5',
                  ),
                  mr: value(
                    theme,
                    ['molecules.blogpost.usercard.mr', 'atoms.usercard.mr'],
                    'x.5',
                  ),
                  mb: value(
                    theme,
                    ['molecules.blogpost.usercard.mb', 'atoms.usercard.mb'],
                    'y.2',
                  ),
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
    </Card>
  )
}
