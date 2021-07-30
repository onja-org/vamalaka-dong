import React from 'react'
import styled from 'styled-components'
import { LinkSection } from '../Footer/Footer'

import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries'

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
  ${mediaQueries(null, 'md')`
    flex-direction: column;
    gap: 21px;
  `}

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
