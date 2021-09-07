import React from 'react'
import styled from 'styled-components'
import { LinkSection } from '../Footer/Footer'

import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries'

export const footerLinksShort = [
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
export interface Props {
  footerLinks: {
    summary: string
    links: { linkContent: string; linkUrl: string }[]
    id: string
  }[]
}

export const PageFooter: React.FC<Props> = ({ footerLinks }) => {
  return (
    <Footer>
      <FooterContainer>
        {footerLinks &&
          footerLinks.map((footerLink) => (
            <LinkSection key={footerLink.id} footerLink={footerLink} />
          ))}
      </FooterContainer>
    </Footer>
  )
}
const Footer = styled('footer')`
  width: 100%;
  margin: 0;
  background-color: #041d42;
`

const FooterContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  max-width: auto;
  padding-top: 267px;
  padding-bottom: 59px;
  padding-left: 15px;
  padding-right: 15px;
  gap: 82.5px;

  details {
    padding: 0;
  }
<<<<<<< HEAD
  ${mediaQueries(null, 'lg')`
=======
  @media(max-width: 640) {
>>>>>>> e13f3dfb5b31e6bf8ed631652ff7025f731bfd81
    flex-direction: column;
    gap: 21px;
  `}

<<<<<<< HEAD
=======

>>>>>>> e13f3dfb5b31e6bf8ed631652ff7025f731bfd81
  ${mediaQueries('lg', null)`
    max-width: 1167px;
    min-width: auto;
    padding-top: 293px;
    padding-bottom: 98px;
    padding-left: unset;
    padding-right: unset;
    margin: auto;
  `}
`
