import React from 'react'
import {
  MainContainer,
  RoleOptionContainer,
  BuyerOption,
  SellerOption,
  AccountContainer,
  ImageContainer,
  JoinUsHeader,
  SubHeadingWrapper,
  DescriptionOfferWrapper,
} from './RoleSelectOnboardStyles'

import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { Option } from '../RoleSelectOption/RoleSelectOption'
import userIcon from '../../stories/assets/user.svg'
import briefcaseIcon from '../../stories/assets/briefcase.svg'
import { LoginReminder } from '../LoginReminder/LoginReminder'
import { LeftSide } from '../LeftSide/LeftSide'

export const RoleSelectOnboard: React.FC = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <LeftSide backgroundImage='Baobab' />
      </ImageContainer>
      <RoleOptionContainer>
        <SubHeadingWrapper>
          <JoinUsHeader>Join us</JoinUsHeader>
          <DescriptionOfferWrapper>
            <DescriptionOffer
              text={
                "To begin this story, tell us what kind of account you'd be opening "
              }
            />
          </DescriptionOfferWrapper>
        </SubHeadingWrapper>
        <BuyerOption>
          <Option
            label='Buyer'
            text='Personal account to manage all you activities.'
            src={userIcon}
            alt='User icon'
          />
        </BuyerOption>
        <SellerOption>
          <Option
            label='Seller'
            text='Own or belong to a company, this is for you.'
            src={briefcaseIcon}
            alt='Briefcase icon'
          />
        </SellerOption>
        <AccountContainer>
          <LoginReminder isSignedUp={true} href='./' />
        </AccountContainer>
      </RoleOptionContainer>
    </MainContainer>
  )
}
