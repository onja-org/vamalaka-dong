import React from 'react';

import { Story, Meta } from '@storybook/react';

import { RegistrationOnboarding, RegistrationOnboardingProps } from './RegistrationOnboarding';

export default {
    title: "Components/RegistrationOnboarding",
    component: RegistrationOnboarding
} as Meta;

const Template: Story<RegistrationOnboardingProps> = (args) => <RegistrationOnboarding {...args} />

export const RegistrationPageStory = Template.bind({});
RegistrationPageStory.args = {
    isChecked: true,
    isPrimary: true,
}