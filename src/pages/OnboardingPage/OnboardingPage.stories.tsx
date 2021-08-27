import React from 'react'
import { Story, Meta } from '@storybook/react'

import { OnboardingPage } from './OnboardingPage'

export default {
  title: 'Pages/OnboardingPage',
  component: OnboardingPage,
} as Meta

const Template: Story = (args) => <OnboardingPage {...args} />

export const OnboardingPageStory = Template.bind({})
