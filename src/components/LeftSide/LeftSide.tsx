import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import Baobab from '../LeftSide/images/baobab.png'
import Farmer from '../LeftSide/images/farmer.png'

const Container = styled.div`
  background-size: cover;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 583.5px;
  margin: auto;
  height: 100%;
`
const Content = styled.p`
  ${fonts};
  font-family: 'Futura Std', sans-serif;
  color: #ffffff;
  font-size: 40px;
  line-height: 48px;
  max-width: 528px;
  margin: auto;
  padding: 241px 4px 241px 4px;
`
export interface LeftSideProps {
  backgroundImage?: string
}

export const LeftSide: React.FC<LeftSideProps> = ({ backgroundImage }) => {
  const linearGradient = `linear-gradient(0deg, rgba(4, 29, 66, 0.1), rgba(4, 29, 66, 0.1))`
  const baobabBackground = `${linearGradient},url(${Baobab})`
  const farmerBackground = `${linearGradient},url(${Farmer})`
  const background =
    backgroundImage === 'Baobab' ? baobabBackground : farmerBackground

  return (
    <Container style={{ backgroundImage: background }}>
      <Content>
        Discover amazing products and profit from a truly fair market
      </Content>
    </Container>
  )
}
