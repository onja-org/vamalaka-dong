import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  TermsAndConditions,
  TermsAndConditionsProps,
} from './TermsAndConditions'

export default {
  title: 'Components/TermsAndConditions',
  component: TermsAndConditions,
} as Meta

const Template: Story<TermsAndConditionsProps> = (args) => (
  <TermsAndConditions {...args} />
)

export const UnChecked = Template.bind({})
UnChecked.args = {
  href: '/',
  termsLabel: 'I agree to the',
  serviceTerms: 'terms & conditions',
}

export const Checked = Template.bind({})
Checked.args = {
  href: '/',
  isChecked: true,
  termsLabel: 'I agree to the',
  serviceTerms: 'terms & conditions',
}
