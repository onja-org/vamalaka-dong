import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './InputName'

export default {
  title: 'Input/Input Name',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const largeInput = Template.bind({})
largeInput.args = {
  name: 'large',
  onChange: () => null,
  inputType: 'text',
  inputId: 'name',
  inputValue: '',
  label: 'Your full name',
  placeholder: 'Invictus Innocent',
}

export const smallInput = Template.bind({})
smallInput.args = {
  name: 'small',
  onChange: () => null,
  inputType: 'text',
  inputId: 'name',
  inputValue: '',
  label: 'Your full name',
  placeholder: 'Invictus Innocent',
}
