import React from 'react'
import { Story, Meta } from '@storybook/react'
import { HomePage } from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
} as Meta

const Template: Story = (args) => <HomePage {...args} />

export const HomePageStory = Template.bind({})
