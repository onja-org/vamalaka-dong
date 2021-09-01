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
    username: 'username',
    emailAddress: 'name@gmail.com',
    password: 'aajdha',
  },
  termsAndConditionLink: '/',
  isChecked: true,
  onChangeCheckbox: () => null,
  onChangeUserName: () => null,
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onClickRegister: () => null,
  onSubmit: () => null,
}

export const inValidForm = RegistrationUser.bind({})
inValidForm.args = {
  accountRegistration: {
    username: 'username',
    emailAddress: 'name@gmail',
    password: 'aajdha',
  },
  errorMessage: {
    username: 'Invalid username',
    emailAddress: 'Invalid email',
    password: 'Password must be at least 8 character',
  },
  termsAndConditionLink: '/',
  onChangeUserName: () => null,
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onClickRegister: () => null,
  onSubmit: () => null,
}
