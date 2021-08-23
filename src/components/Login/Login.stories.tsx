import React from 'react'
import { Login } from './Login'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Components/Login',
  component: Login,
} as Meta

const Template: Story = (args) => <Login {...args} />

export const LoginOnboardStory = Template.bind({})
