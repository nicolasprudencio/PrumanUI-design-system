import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@prumand-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/nicolasprudencio.png',
    alt: 'Nicolas Prudencio',
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
