import React from 'react'
import { Story, Meta } from '@storybook/react'
import { RegisteredSuccessfull } from './RegisteredSuccessfull'
export default {
  title: 'Components/RegisteredSuccessfull',
  component: RegisteredSuccessfull,
} as Meta

const RegistrationUser: Story = (args) => <RegisteredSuccessfull {...args} />

export const ValidForm = RegistrationUser.bind({})
