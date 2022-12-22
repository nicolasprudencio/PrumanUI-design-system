import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: 'inline-radio',
    },
  },

  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heding sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
} as Meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}
