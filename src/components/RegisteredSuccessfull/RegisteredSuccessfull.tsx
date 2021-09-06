import React from 'react'

import { Back } from '../Back/Back'
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
  ${mediaQueries(null, 'lg')`
    padding: 17px 26px;
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
  > div:first-og-type {
    display: none;
  }
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

export const RegisteredSuccessfull: React.FC = () => {
  return (
    <Container>
      <LeftSide backgroundImage='Baobab' />
      <RegistrationContainer>
        <Header>
          <HeaderContent>
            <Back label='Back' href='/' />
            <FirstStep>Step 03/03</FirstStep>
          </HeaderContent>
          <Title>Registration successfull!</Title>
        </Header>
      </RegistrationContainer>
    </Container>
  )
}
