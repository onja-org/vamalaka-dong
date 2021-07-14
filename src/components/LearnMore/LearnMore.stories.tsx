import React from 'react';

import {Story, Meta} from '@storybook/react';

import {LearnMore, LearnMoreProps} from './LearnMore';
import PeerImage from '../LearnMore/image/peer.svg';

export default {
    title: "Components/LearnMore",
    component: LearnMore,
    argTypes: {
		backgroundColor: { control: 'color' }
	}
} as Meta;

const Template: Story<LearnMoreProps>  = (args) => <LearnMore {...args} />

export const LearnMoreContainer = Template.bind({});
LearnMoreContainer.args = {
    learnMoreHeading: "Madagascars peer-to-peer e-commerce platform",
    learnMoreDescription: "Purchase high-quality products made by the people that sell them. By cutting out middlemen, you know exactly where your purchase is from and how it was made.",
    learnMoreButton: "Learn how it works",
    isPrimary: true,
    imageUrl: PeerImage,
    imageDescription: "Peer-to-peer image"
}


