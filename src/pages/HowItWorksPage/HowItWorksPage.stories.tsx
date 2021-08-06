import React from 'react'
import { HowItWorksPage } from './HowItWorksPage'
import { HowItWorksPageProps } from './HowItWorksPage'
import { loggeOut } from '../../components/HeaderNavLink/HeaderNavLink'
import { Story, Meta } from '@storybook/react'

import peerImage from '../../components/LearnMore/image/peer.svg'

export default {
  title: 'Pages/HowItWorksPage',
  component: HowItWorksPage,
} as Meta

const Template: Story<HowItWorksPageProps> = (args) => (
  <HowItWorksPage {...args} />
)
export const howItWorksPage = Template.bind({})
howItWorksPage.args = {
  item: loggeOut,
  learnMore: 'Learn more',
  trustButton: 'Can you trust us?',
  imageUrl: peerImage,
  isPrimary: true,
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
  title: 'Discover amazing products and profit from a truly fair market:',
  subTitle: 'This is a subtitle that is very informative',
  primaryButton: 'Discover Products',
  secondaryButton: 'Become a member',
}
