import React from 'react'
import {
  TopContainerStyles,
  Container,
  HeaderContainer,
  FooterContainer,
} from '../components/RoleSelectOnboard/RoleSelectOnboardStyles'

import { PageFooter } from '../components/PageFooter/PageFooter'
import { Header } from '../components/Header'
import { loggedIn } from '../components/HeaderNavLink/HeaderNavLink'

export const footerLinks = [
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '1',
  },
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '2',
  },
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '3',
  },
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '4',
  },
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '5',
  },
]

const GenericPage: React.FC = ({ children }) => {
  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggedIn} />
        </HeaderContainer>
        {children}
      </TopContainerStyles>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
export default GenericPage
