import React, { useState } from 'react'
import { Back } from '../Back/Back'
import Button from '../Button/Button'
import { Input } from '../InputName/InputName'
import { LeftSide } from '../LeftSide/LeftSide'
import styled, { css } from 'styled-components'
import googleIcon from '../../assests/google.svg'
import { useAppDispatch } from '../../redux/hooks'
import { LoginReminder } from '../LoginReminder/LoginReminder'
import { incrementByAmount } from '../../redux/slices/adsSlice'
import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries'
import { ImageContainer } from '../RoleSelectOnboard/RoleSelectOnboardStyles'

const FlexLayout = css`
  display: flex;
  flex-direction: column;
`
const MainContainer = styled.article`
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
const LoginContainer = styled.div`
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-style: normal;
  padding: 54px 13px 34px 13px;
  position: relative;
  background-color: #fff;
  ${mediaQueries('lg', null)`
    padding: 21px 18px 99px 18px;
  `};
`
const Header = styled.div`
  display: none;
  ${mediaQueries('lg', null)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 47px;
  `};
`
const HeaderContent = styled.div`
  ${FlexLayout}
  align-items: flex-end;
  gap: 4px;
`
const LoginForm = styled.form`
  ${FlexLayout}
  max-width: 426px;
  margin: auto;
  ${mediaQueries('lg', null)`
    align-self: center;
    max-width: 85%;
    margin: auto;
  `};
`
const LoginFormContent = styled.div`
  ${FlexLayout}
  gap: 14px;
  margin-bottom: 200px;
  ${mediaQueries('lg', null)`
    margin-bottom: 91px;
  `};
`
const LoginFormHeading = styled.h2`
  text-align: left;
  margin: 0;
  display: none;
  font-size: 30px;
  line-height: 36px;
  color: #041d42;
  ${mediaQueries('lg', null)`
    display: block;
    padding-bottom: 90px;
  `};
`
const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  ${mediaQueries('sm', null)`
    display: flex;
    flex-direction: row;
  `};
  button {
    :last-child {
      background-image: url(${googleIcon});
      background-repeat: no-repeat;
      background-position: 5% 50%;
      padding-inline-start: 35px;
    }
  }
`
const PasswordInputContainer = styled.div`
  color: #979797;
  position: relative;
`
const HidePasswordBtn = styled.span`
  padding: 10px 0;
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

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const dispatch = useAppDispatch()
  function handlePassword(e: any) {
    setPasswordValue(e.target.value)
  }
  function handleEmail(e: any) {
    setEmailValue(e.target.value)
  }
  function handleLogin() {
    dispatch(incrementByAmount(200))
  }

  return (
    <MainContainer>
      <ImageContainer>
        <LeftSide backgroundImage='Farmer' />
      </ImageContainer>
      <LoginContainer>
        <Header>
          <Back href='/' label='Back' />
          <HeaderContent>
            <LoginReminder isSignedUp={false} href='./registration' />
          </HeaderContent>
        </Header>
        <LoginForm>
          <LoginFormHeading>Login</LoginFormHeading>
          <LoginFormContent>
            <Input
              name='large'
              inputType='email'
              label='Email address'
              onChange={handleEmail}
              inputValue={emailValue}
              placeholder='Enter email address'
            />
            <PasswordInputContainer>
              <Input
                name='large'
                label='Create password'
                onChange={handlePassword}
                inputValue={passwordValue}
                placeholder='Enter a password'
                inputType={showPassword ? 'password' : 'text'}
              />
              <HidePasswordBtn onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Show' : 'Hide'}
              </HidePasswordBtn>
            </PasswordInputContainer>
          </LoginFormContent>
          <LoginButtonContainer>
            <Button isPrimary={true} label='Login' onClick={handleLogin} />
            <Button label='Login with Google' />
          </LoginButtonContainer>
        </LoginForm>
      </LoginContainer>
    </MainContainer>
  )
}
