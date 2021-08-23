import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const ButtonStory: Story<ButtonProps> = (args) => <Button {...args} />
export const PrimaryButton = ButtonStory.bind({})
PrimaryButton.args = {
  isPrimary: true,
  label: 'Learn more',
}
export const LearnDisabled = ButtonStory.bind({})
LearnDisabled.args = {
  isPrimary: true,
  disabled: true,
  label: 'Learn more',
}
export const Trust = ButtonStory.bind({})
Trust.args = {
  isPrimary: false,
  label: 'Can you trust us?',
}
