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
    background: "Baobab",
    label: "Back",
    href: "/",
    userNameLabel: "Your username",
    userNamePlaceholder: "Username",
    addressLabel: "Email address",
    addressPlaceholder: "Enter email address",
    passwordLabel: "Create password",
    passwordPlaceholder: "Enter a password",
    termsLabel: "I agree to the",
    serviceTerms: "terms & conditions",
    termHref: "/",
    isChecked: true,
    registerButton: "Register account",
    registerWithGoogleButton: "Register with Google",
    isPrimary: true,
}