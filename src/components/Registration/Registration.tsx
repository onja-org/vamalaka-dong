import React, { useState } from 'react'

import { Back } from '../Back/Back'
import Button from '../Button/Button'
import styled from 'styled-components'
import { Input } from '../InputName/InputName'
import { LeftSide } from '../LeftSide/LeftSide'
import { fonts } from '../../globalStyles/fonts'
import googleIcon from '../../assests/google.svg'
import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'

export interface RegistrationProps {
  errorMessages?: {
    username: string
    email: string
    password: string
  }
  accountRegistration?: {
    username: string
    emailAddress: string
    password: string
  }
  termsAndConditionLink?: any
  isChecked?: boolean
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeEmail: (e: any) => void
  onChangeUserName: (e: any) => void
  onChangePassword: (e: any) => void
  onChangeCheckbox: (e: any) => void
  onClickRegister: () => void
}

const Container = styled('article')`
  ${fonts}
  max-width: 90%;
  margin: auto;
  margin-bottom: -125px;
  ${mediaQueries('lg', null)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 85%;
    margin: auto;
    margin-bottom: -125px;
  `};
  ${mediaQueries(null, 'lg')`
    & > div:nth-child(1) {
      display: none;
    }
  `};
`
const RegistrationContainer = styled.div`
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-style: normal;
  padding: 21px 18px 34px 18px;
  position: relative;
  background-color: #fff;
  ${mediaQueries(null, 'lg')`
    padding: 21px 18px 89px 18px;
  `};
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
`
const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-block-end: 47px;
  ${mediaQueries(null, 'lg')`
    display: none;
  `}
`
const Title = styled.h3`
  font-family: 'Futura Std';
  color: #041d42;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  padding-inline: 10%;
  text-align: left;
  padding-block-end: 17px;
  ${mediaQueries(null, 'lg')`
    display: none;
  `}
`
const FirstStep = styled.p`
  margin: 0;
  color: #bdbdbd;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`
const Form = styled.form`
  div:not(:first-child, :last-child) {
    margin-block-start: 14px;
  }
  & > label {
    margin-block-start: 22px;
  }
  ${mediaQueries('lg', null)`
    max-width: 85%;
    margin: auto;
  `}
  ${mediaQueries(null, 'lg')`
    display: flex;
    flex-direction: column;
    max-width: 426px;
    margin: auto;
  `}
`
const PasswordInputContainer = styled.div`
  color: #979797;
  position: relative;
`
const HidePasswordBtn = styled.span`
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 33px;
  right: 21px;
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #041d42;
`
const RegistrationButtonContainer = styled.div`
  margin-block-start: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  ${mediaQueries('lg', null)`
    display: flex;
    flex-direction: row;
    aling-item: center;
  `};
  button {
    white-space: nowrap;
    :last-child {
      background-image: url(${googleIcon});
      background-repeat: no-repeat;
      background-position: 5% 50%;
      padding-inline-start: 35px;
    }
  }
`

export const Registration: React.FC<RegistrationProps> = ({
  isChecked,
  accountRegistration,
  termsAndConditionLink,
  onSubmit,
  onChangeUserName,
  onChangeEmail,
  onChangePassword,
  onChangeCheckbox,
  onClickRegister,
  errorMessages,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container>
      <LeftSide backgroundImage='Baobab' />
      <RegistrationContainer>
        <Header>
          <HeaderContent>
            <Back label='Back' href='/' />
            <FirstStep>Step 02/03</FirstStep>
          </HeaderContent>
          <Title>Register your account</Title>
        </Header>
        <Form onSubmit={onSubmit}>
          <Input
            label='Your username'
            name='large'
            inputType='text'
            inputValue={accountRegistration?.username}
            placeholder='Username'
            onChange={onChangeUserName}
            errorMessage={errorMessages?.username}
          />
          <Input
            name='large'
            inputType='email'
            label='Email address'
            inputValue={accountRegistration?.emailAddress}
            placeholder='Enter email address'
            onChange={onChangeEmail}
            errorMessage={errorMessages?.email}
          />
          <PasswordInputContainer>
            <Input
              name='large'
              inputValue={accountRegistration?.password}
              label='Create password'
              onChange={onChangePassword}
              placeholder='Enter a password'
              inputType={showPassword ? 'text' : 'password'}
              errorMessage={errorMessages?.password}
            />
            <HidePasswordBtn onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </HidePasswordBtn>
          </PasswordInputContainer>
          <TermsAndConditions
            termsLabel='I agree to the'
            href={termsAndConditionLink}
            serviceTerms='terms & conditions'
            isChecked={isChecked}
            onChange={onChangeCheckbox}
          />
          <RegistrationButtonContainer>
            <Button
              isPrimary={true}
              label='Register account'
              onClick={onClickRegister}
            />
            <Button label='Register with Google' />
          </RegistrationButtonContainer>
        </Form>
      </RegistrationContainer>
    </Container>
  )
}
