import React from "react";
import { Story, Meta } from "@storybook/react";

import { OnboardingPage, OnboardingPageProps } from "./OnboardingPage";

export default {
    title: "Pages/OnboardingPage",
    component: OnboardingPage,
} as Meta;

const Template: Story<OnboardingPageProps> = (args) => <OnboardingPage {...args} />

export const OnboardingPageStory = Template.bind({});
OnboardingPageStory.args = {
      isPrimary: true,
}