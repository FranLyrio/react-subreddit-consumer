import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from '.'

export default {
  title: 'components/Header',
  component: Header
} as ComponentMeta<typeof Header>

export const Template: ComponentStory<typeof Header> = () => <Header />
