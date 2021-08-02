import { Story, Meta } from '@storybook/react'
import { Option, RoleSelectOption } from './RoleSelectOption'

export default {
  title: 'Components/Role Select Option',
  component: Option,
} as Meta

const Template: Story<RoleSelectOption> = (args) => <Option {...args} />

export const Buyer = Template.bind({})
Buyer.args = {
  label: 'Buyer',
  text: 'Personal account to manage all you activities.',
  alt: 'User icon',
}

export const Seller = Template.bind({})
Seller.args = {
  label: 'Seller',
  text: 'Own or belong to a company, this is for you.',
  alt: 'Briefcase icon',
}
