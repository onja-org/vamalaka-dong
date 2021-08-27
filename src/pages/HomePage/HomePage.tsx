import React from 'react'
import styled from 'styled-components'

import { Header } from '../../components/Header'
import { LearnMore } from '../../components/LearnMore/LearnMore'
import { DiscoverBanner } from '../../components/DiscoveBanner/DiscoverBanner'
import { PageFooter } from '../../components/PageFooter/PageFooter'
import { loggeOut } from '../../components/HeaderNavLink/HeaderNavLink'
import imageUrl from '../../components/LearnMore/image/peer.svg'

const HomePageStyled = styled('div')`
  background: linear-gradient(
    rgba(255, 245, 241, 1),
    rgba(254, 234, 227, 1),
    rgba(255, 219, 204, 1)
  );
  background-repeat: no-repeat;

  article {
    button:first-child::after {
      content: '→';
      font-size: 32px;
      vertical-align: middle;
      margin-inline-start: 12px;
    }

    button:not(:first-child) {
      display: none;
    }
  }
`

const footerLinks = [
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
]

export const HomePage: React.FC = () => {
  return (
    <HomePageStyled>
      <Header item={loggeOut} />
      <LearnMore
        isPrimary={true}
        learnMoreButton='Learn how it works'
        imageUrl={imageUrl}
      />
      <DiscoverBanner
        title='Discover amazing products and profit from a truly fair market:'
        subTitle='This is a subtitle that is very informative'
        primaryButton='Discover Products'
        secondaryButton='Become a member'
        isPrimary={true}
      />
      <PageFooter footerLinks={footerLinks} />
    </HomePageStyled>
  )
}
