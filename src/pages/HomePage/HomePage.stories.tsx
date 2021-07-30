import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HomePage, HomePageProps } from './HomePage';
import { loggeOut } from '../../components/HeaderNavLink/HeaderNavLink';

import peerImage from '../../components/LearnMore/image/peer.svg';

export default {
    title: "Pages/HomePage",
    component: HomePage,
} as Meta;

const Template: Story<HomePageProps> = (args) => <HomePage {...args} />

export const HomePageStory = Template.bind({});
HomePageStory.args = {
    item: loggeOut,
    isPrimary: true,
    learnMoreButton: "Learn how it works",
    imageUrl: peerImage,
    footerLinks: [
        {
          summary: 'Madamada',
          links: [
            { linkContent: 'about', linkUrl: '#about' },
            { linkContent: 'careers', linkUrl: '#careers' },
            { linkContent: 'pricing', linkUrl: '#pricing' },
            { linkContent: 'FAQ', linkUrl: '#faq' },
            { linkContent: 'About', linkUrl: '#about' },
          ],
          id: '1',
        },
        {
          summary: 'Vamalaka',
          links: [
            { linkContent: 'about', linkUrl: '#about' },
            { linkContent: 'careers', linkUrl: '#careers' },
            { linkContent: 'pricing', linkUrl: '#pricing' },
            { linkContent: 'FAQ', linkUrl: '#faq' },
          ],
          id: '2',
        },
        {
          summary: 'LearnGasy',
          links: [
            { linkContent: 'about', linkUrl: '#about' },
            { linkContent: 'careers', linkUrl: '#careers' },
            { linkContent: 'pricing', linkUrl: '#pricing' },
            { linkContent: 'FAQ', linkUrl: '#faq' },
            { linkContent: 'Others', linkUrl: '#others' },
          ],
          id: '3',
        },
        {
          summary: 'Vamalaka Developers',
          links: [
            { linkContent: 'about', linkUrl: '#about' },
            { linkContent: 'careers', linkUrl: '#careers' },
            { linkContent: 'pricing', linkUrl: '#pricing' },
            { linkContent: 'FAQ', linkUrl: '#faq' },
          ],
          id: '4',
        },
        {
          summary: 'Others',
          links: [
            { linkContent: 'about', linkUrl: '#about' },
            { linkContent: 'careers', linkUrl: '#careers' },
            { linkContent: 'pricing', linkUrl: '#pricing' },
            { linkContent: 'FAQ', linkUrl: '#faq' },
          ],
          id: '5',
        },
      ],
      title: "Discover amazing products and profit from a truly fair market:",
      subTitle: "This is a subtitle that is very informative",
      primaryButton: "Discover Products",
      secondaryButton: "Become a member",
}