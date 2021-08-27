import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Registration } from './Registration'
export default {
  title: 'Components/Registration',
  component: Registration,
} as Meta

const Template: Story = (args) => <Registration {...args} />

export const RegistrationPageStory = Template.bind({})
