import React from 'react'

import styled from 'styled-components'
import { LeftSide } from '../LeftSide/LeftSide'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries'

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
  padding: 17px 26px;
  position: relative;
  background-color: #fff;
  height: 592px;
  ${mediaQueries(null, 'lg')`
    padding: 17px 26px;
  `};
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
`
const FirstStep = styled.p`
  margin: 0;
  color: #bdbdbd;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  display: flex;
  margin-block-end: 50px;
  flex-direction: row;
  margin-block-end: 50px;
  align-self: flex-end;
  ${mediaQueries(null, 'lg')`
    display: none;
  `}
`
const HeaderContent = styled.div`
  text-align: left;
  padding-inline: 10%;
  ${mediaQueries(null, 'lg')`
    padding-block-start: 20px;
    padding-inline: 0;
    text-align: center;
  `};
`
const Title = styled.h3`
  font-family: 'Futura Std';
  color: #041d42;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  margin-bottom: 110px;
  ${mediaQueries(null, 'lg')`
    padding-block-start: 50px;
  `}
`
const LinkToLogin = styled.a`
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  text-decoration-line: underline;
  color: #979797;
`

export const RegisteredSuccessfull: React.FC = () => {
  return (
    <Container>
      <LeftSide backgroundImage='Baobab' />
      <RegistrationContainer>
        <Header>
          <FirstStep>Step 03/03</FirstStep>
          <HeaderContent>
            <Title>Registration successfull !</Title>
            <LinkToLogin href='/login'>Go to login page</LinkToLogin>
          </HeaderContent>
        </Header>
      </RegistrationContainer>
    </Container>
  )
}
