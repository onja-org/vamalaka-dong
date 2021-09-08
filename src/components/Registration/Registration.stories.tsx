import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Registration, RegistrationProps } from './Registration'
export default {
  title: 'Components/Registration',
  component: Registration,
} as Meta

const RegistrationUser: Story<RegistrationProps> = (args) => (
  <Registration {...args} />
)

export const ValidForm = RegistrationUser.bind({})
ValidForm.args = {
  accountRegistration: {
    username: 'Your username',
    emailAddress: 'name@gmail.com',
    password: 'aajdha',
  },
  termsAndConditionLink: '/',
  isChecked: true,
}

export const inValidForm = RegistrationUser.bind({})
inValidForm.args = {
  accountRegistration: {
    username: 'Your username',
    emailAddress: 'name@gmail',
    password: 'aajdha',
  },
  termsAndConditionLink: '/',
}
