import React from 'react';

import { Story, Meta } from '@storybook/react';

import { DiscoverBanner, DiscoverBannerProps } from './DiscoverBanner';

export default {
    title: "Components/DiscoverBanner",
    component: DiscoverBanner,
} as Meta;

const Template: Story<DiscoverBannerProps> = (args) => <DiscoverBanner {...args} />

export const DiscoverBannerStory = Template.bind({});
DiscoverBannerStory.args = {
    subTitle: "This is a subtitle that is very informative",
    title: "Discover amazing products and profit from a truly fair market:",
    isPrimary: true,
    primaryButton: "Discover Products",
    secondaryButton: "Become a member"

}
