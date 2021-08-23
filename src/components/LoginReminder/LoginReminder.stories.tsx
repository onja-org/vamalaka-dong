import React from 'react'
import { Story, Meta } from '@storybook/react'

import { LoginReminder, LoginReminderProps } from './LoginReminder'

export default {
  title: 'LoginReminder/LoginReminder',
  component: LoginReminder,
} as Meta

const LoginStoryBook: Story<LoginReminderProps> = (args) => (
  <LoginReminder {...args} />
)

export const AlreadyHaveAnAccount = LoginStoryBook.bind({})
AlreadyHaveAnAccount.args = {
  isSignedUp: true,
  href: './',
}

export const NotUser = LoginStoryBook.bind({})
NotUser.args = {
  isSignedUp: false,
  href: './',
}
