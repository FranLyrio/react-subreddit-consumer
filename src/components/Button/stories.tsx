import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'components/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

export const WithLoading = () => (
  <Button color="primary" isLoading>
    Button
  </Button>
)

export const Selected = () => <Button isSelected>Button</Button>
