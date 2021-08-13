import React from 'react'
import styled from 'styled-components'

import { Header } from '../../components/Header'
import { LearnMore } from '../../components/LearnMore/LearnMore'
import { DiscoverBanner } from '../../components/DiscoveBanner/DiscoverBanner'
import { PageFooter } from '../../components/PageFooter/PageFooter'
import { ItemType } from '../../components/HeaderNavLink/HeaderNavLink'

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

export interface HomePageProps {
  item: Array<ItemType>
  isPrimary: boolean
  learnMoreButton: string
  imageUrl: string
  footerLinks: {
    summary: string
    links: { linkContent: string; linkUrl: string }[]
    id: string
  }[]
  title: string
  subTitle: string
  primaryButton: string
  secondaryButton: string
}

export const HomePage: React.FC<HomePageProps> = ({
  item,
  isPrimary,
  learnMoreButton,
  imageUrl,
  footerLinks,
  title,
  subTitle,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <HomePageStyled>
      <Header item={item} />
      <LearnMore
        isPrimary={isPrimary}
        learnMoreButton={learnMoreButton}
        imageUrl={imageUrl}
      />
      <DiscoverBanner
        title={title}
        subTitle={subTitle}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        isPrimary={isPrimary}
      />
      <PageFooter footerLinks={footerLinks} />
    </HomePageStyled>
  )
}
