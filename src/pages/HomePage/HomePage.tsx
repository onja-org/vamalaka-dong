import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Header } from '../../components/Header'
import { LearnMore } from '../../components/LearnMore/LearnMore'
import { DiscoverBanner } from '../../components/DiscoveBanner/DiscoverBanner'
import {
  footerLinksShort,
  PageFooter,
} from '../../components/PageFooter/PageFooter'
import TopCategories from '../../components/TopCategories/TopCategories'

import {
  categoriesSelector,
  fetchCategories,
} from '../../redux/slices/categoriesSlice'
import { useAppDispatch } from '../../redux/hooks'
import { useSelector } from 'react-redux'
import { loggedOut } from '../../components/HeaderNavLink/HeaderNavLink'
const HomePageStyled = styled('div')`
  background: linear-gradient(
    rgba(255, 245, 241, 1),
    rgba(254, 234, 227, 1),
    rgba(255, 219, 204, 1)
  );
  background-repeat: no-repeat;

  article {
    button:first-child {
      font-size: 24px;
      vertical-align: middle;
      margin-inline-start: 12px;
    }

    button:not(:first-child) {
      display: none;
    }
  }
`

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const categories = useSelector(categoriesSelector)

  useEffect(() => {
    dispatch(fetchCategories([]))
  }, [dispatch])

  return (
    <HomePageStyled>
      <Header item={loggedOut} />
      <LearnMore isPrimary={true} />
      <TopCategories title='Top categories' categories={categories} />
      <DiscoverBanner
        title='Discover amazing products and profit from a truly fair market:'
        subTitle='This is a subtitle that is very informative'
        primaryButton='Discover Products'
        secondaryButton='Become a member'
        isPrimary={true}
      />
      <PageFooter footerLinks={footerLinksShort} />
    </HomePageStyled>
  )
}
