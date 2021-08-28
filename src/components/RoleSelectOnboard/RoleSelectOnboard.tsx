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

export interface RoleSelectorProps {
  handleClick: (userRole: USER_ROLE) => void,
}

export enum USER_ROLE {
  SELLER = 'seller',
  BUYER = 'buyer',
  UNSELECTED = ''
}

export const RoleSelectOnboard: React.FC<RoleSelectorProps> = ({handleClick}) => {
  return (
    <MainContainer>
      <ImageContainer>
        <LeftSide backgroundImage='Baobab' />
      </ImageContainer>
      <RoleOptionContainer>
        <AccountContainer>
          <LoginReminder isSignedUp={true} href='./' />
        </AccountContainer>
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
        <BuyerOption onClick={() => handleClick(USER_ROLE.BUYER)}>
          <Option
            label='Buyer'
            text='Personal account to manage all you activities.'
            src={userIcon}
            alt='User icon'
          />
        </BuyerOption>
        <SellerOption onClick={() => handleClick(USER_ROLE.SELLER)}>
          <Option
            label='Seller'
            text='Own or belong to a company, this is for you.'
            src={briefcaseIcon}
            alt='Briefcase icon'
          />
        </SellerOption>
      </RoleOptionContainer>
    </MainContainer>
  )
}
