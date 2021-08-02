import styled from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries'

export const TopContainerStyles = styled.div`
  background: linear-gradient(
    180deg,
    #fff5f1 0%,
    #feeae3 45.27%,
    #ffdbcc 94.31%
  );
  width: 100%;
  min-height: calc(318px + 164px + 59px);
  ${mediaQueries(null, 'lg')`
    min-height: 444px;
  `};
  ${mediaQueries(null, 'sm')`
    min-height: 644px;
  `};
`
export const MainContainer = styled.div`
  max-width: 95%;
  margin: auto;
  ${mediaQueries('lg', null)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 82%;
    margin: auto;
  `};
  ${mediaQueries(null, 'lg')`
    & > div:nth-child(1) {
      display: none;
    }
  `};
`
export const RoleOptionContainer = styled.div`
  position: relative;
  background-color: #fff;
  ${mediaQueries('lg', null)`
    padding: 85px 0;
    margin: 0 5%;
  `};
`
export const BuyerOption = styled.div`
  max-width: 426px;
  margin: auto;
  padding: 14px;
  margin-bottom: 28px;
`
export const SellerOption = styled.div`
  max-width: 426px;
  margin: auto;
  padding: 14px;
`
export const Container = styled.div`
  position: relative;
  footer > div {
    margin-top: 0;
    padding-top: 220px;
  }
  ${mediaQueries(null, 'lg')`
    footer > div {
      padding: 0;
      min-height: 184px;
    }
  `};
`
export const AccountContainer = styled.div`
  color: #979797;
  max-width: 426px;
  margin: auto;
  margin-top: 16px;
  padding-bottom: 14px;
  ${mediaQueries('lg', null)`
    p {
      position: absolute;
      margin: 0;
      top: 22px;
      right: 27px;
    }
  `};
`
export const HeaderContainer = styled.div`
  padding: 10px 16px 11px 10px;
`
export const ImageContainer = styled.div`
  background-color: #041d42;
  margin: 0;
  padding: 0;
  max-width: 583px;
  ${mediaQueries(null, 'lg')`
    flex-basis: 50%;
  `};
  p {
    margin: 0;
  }
`
export const JoinUsHeader = styled.h3`
  font-family: Futura Std;
  font-style: normal;
  font-weight: 650;
  font-size: 30px;
  line-height: 36px;
  align-items: center;
  color: #041d42;
  margin: 0;
  text-align: left;
`
export const DescriptionOfferWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 0;
  max-width: 300px;
  margin-right: auto;
  ${mediaQueries('lg', null)`
    margin-bottom: 35px;
  `};
`
export const SubHeadingWrapper = styled.div`
  padding-top: 27px;
  max-width: 432px;
  margin: auto;
  padding: 16px;
`
export const FooterContainer = styled.div`
  footer > div {
    max-width: 90%;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  ${mediaQueries('lg', null)`
    footer > div {
      max-width: 1126px;
      margin: auto;
    }
  `};
`