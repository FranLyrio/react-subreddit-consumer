import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from '.'

export default {
  title: 'components/Spinner',
  component: Spinner
} as ComponentMeta<typeof Spinner>

export const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
)
