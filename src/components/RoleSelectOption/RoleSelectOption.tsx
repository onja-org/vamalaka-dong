import React, { useState } from 'react'
import Buyer from '../RoleIcon/Buyer'
import styled from 'styled-components'
import Seller from '../RoleIcon/Seller'
import { fonts } from '../../globalStyles/fonts'
import darkPolygonBg from '../../stories/assets/dark-polygon.svg'
import arrowRightIcon from '../../stories/assets/arrow-right.svg'
import whitePolygonBg from '../../stories/assets/white-polygon.svg'
import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries'

export interface RoleSelectOption {
  src?: string
  alt?: string
  text?: string
  label?: string
}
const ArrowRightIcon = styled.img`
  display: none;
`
const RoleIcon = styled.div`
  background-image: url(${whitePolygonBg});
  background-repeat: no-repeat;
  padding: 16px;
`
const RoleSelectWrapper = styled.div`
  z-index: 1;
  padding: 28px;
  cursor: pointer;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
  ${mediaQueries(null, 'sm')`
    padding: 16px;
  `};
  :hover {
    background: #f5f9ff;
    border: 1px solid #041d42;
    padding: 27px;
    box-sizing: border-box;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    ${RoleIcon} {
      background-image: url(${darkPolygonBg});
    }
    ${ArrowRightIcon} {
      display: inline-block;
    }
  }
`
const SelectWrapper = styled.div`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`
const TextWrapper = styled.div`
  margin: auto;
  ${mediaQueries(null, 'sm')`
    max-width: 170px;
    margin: auto;
  `};
`
const RoleTitle = styled.h6`
  font-family: 'Futura Std';
  font-size: 16px;
  line-height: 19px;
  font-weight: normal;
  margin: 0;
  color: #041d42;
`
const RoleText = styled.p`
  color: #979797;
  font-size: 14px;
  max-width: 161px;
  line-height: 17px;
  margin: 0;
  margin-block-start: 4px;
  ${mediaQueries(null, 'sm')`
    max-width: 239px;
  `};
`

export const Option: React.FC<RoleSelectOption> = ({ label, text }) => {
  const [isMouseHover, setIsMouseHover] = useState(true)
  return (
    <RoleSelectWrapper
      onMouseOver={() => setIsMouseHover(false)}
      onMouseLeave={() => setIsMouseHover(true)}>
      <SelectWrapper>
        <RoleIcon>
          {label === 'Buyer' ? (
            <Buyer isMouseHover={isMouseHover} />
          ) : (
            <Seller isMouseHover={isMouseHover} />
          )}
        </RoleIcon>
        <TextWrapper>
          <RoleTitle>{label}</RoleTitle>
          <RoleText>{text}</RoleText>
        </TextWrapper>
        <ArrowRightIcon src={arrowRightIcon} alt='Arrow icon' />
      </SelectWrapper>
    </RoleSelectWrapper>
  )
}
