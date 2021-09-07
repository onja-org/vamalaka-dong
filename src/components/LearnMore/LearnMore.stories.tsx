import React from 'react'

import { Story, Meta } from '@storybook/react'

import { LearnMore, LearnMoreProps } from './LearnMore'

export default {
  title: 'Components/LearnMore',
  component: LearnMore,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<LearnMoreProps> = (args) => <LearnMore {...args} />

export const LearnMoreContainer = Template.bind({})
LearnMoreContainer.args = {
  isPrimary: true,
}
