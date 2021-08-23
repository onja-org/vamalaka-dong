import { Story, Meta } from '@storybook/react'
import { RoleSelectOnboard } from './RoleSelectOnboard'
import { Props } from '../PageFooter/PageFooter'

export default {
  title: 'Components/RoleSelectOnboard',
  component: RoleSelectOnboard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<Props> = () => <RoleSelectOnboard />

export const RoleSelectOnBoardStory = Template.bind({})
