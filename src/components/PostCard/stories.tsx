import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PostCard } from '.'

export default {
  title: 'components/PostCard',
  component: PostCard
} as ComponentMeta<typeof PostCard>

export const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
)

export const View: ComponentStory<typeof PostCard> = () => (
  <PostCard
    link="https://winnin.com"
    time={new Date().setHours(new Date().getHours() - 2) / 1000}
    title="Um título qualquer"
    userNickName="winnin"
  />
)
