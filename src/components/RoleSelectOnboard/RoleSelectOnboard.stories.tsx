import { Story, Meta } from '@storybook/react'
import { RoleSelectOnboard, RoleSelectorProps } from './RoleSelectOnboard'

export default {
  title: 'Components/RoleSelectOnboard',
  component: RoleSelectOnboard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<RoleSelectorProps> = () => <RoleSelectOnboard handleClick={() => null} />

export const RoleSelectOnBoardStory = Template.bind({})
