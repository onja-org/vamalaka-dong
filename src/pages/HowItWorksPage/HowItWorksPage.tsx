import React from 'react'
import { Header } from '../../components/Header'
import { LearnMore } from '../../components/LearnMore/LearnMore'
import { PageFooter } from '../../components/PageFooter/PageFooter'
import styled from 'styled-components'
import { DiscoverBanner } from '../../components/DiscoveBanner/DiscoverBanner'

const HowItWorksPageStyles = styled.article`
  background: linear-gradient(
    180deg,
    #fff5f1 0%,
    #feeae3 45.27%,
    #ffdbcc 94.31%
  );
  button:first-child {
    display: none;
  }
  button:nth-of-type(2) {
    margin-left: 0px;
  }
`

export interface HowItWorksPageProps {
  item: any
  imageUrl: string
  isPrimary: true
  learnMoreButton: string
  learnMore: string
  trustButton: string
  footerLinks: {
    summary: string
    links: { linkContent: string; linkUrl: string }[]
    id: string
  }[]
  links: any
  summary: string
  title: string
  subTitle: string
  primaryButton: string
  secondaryButton: string
}
export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  item,
  imageUrl,
  isPrimary,
  footerLinks,
  learnMoreButton,
  learnMore,
  trustButton,
  title,
  subTitle,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <HowItWorksPageStyles>
      <Header item={item} />
      <LearnMore
        imageUrl={imageUrl}
        isPrimary={isPrimary}
        learnMoreButton={learnMoreButton}
        learnMore={learnMore}
        trustButton={trustButton}
      />

      <DiscoverBanner
        title={title}
        subTitle={subTitle}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        isPrimary={isPrimary}
      />
      <PageFooter footerLinks={footerLinks} />
    </HowItWorksPageStyles>
  )
}
