import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
export interface ButtonProps {
  label?: string
  isPrimary?: boolean
  disabled?: boolean
  onClick?: () => void
}
const FirstWrapper = styled.div`
  display: inline-flex;
  background: rgba(252, 70, 43, 0.3);
`
const SecondWrapper = styled.div`
  transform: translate(-6px, 6px);
  background: rgba(21, 140, 177, 0.3);
`
const ButtonStyled = styled.button<ButtonProps>`
  ${fonts}
  transform: translate(3px, -3px);
  outline: none;
  font-size: 24px;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Garamond';
  color: ${(props) => (props.isPrimary ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.isPrimary ? '#041d42' : '#FFFFFF')};
  padding: ${(props) =>
    props.isPrimary ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  border: ${(props) => (props.isPrimary ? 'none' : '2px solid #041d42')};
    props.isPrimary ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  cursor: pointer;
  &:disabled {
    color: '#FFFFFF';
    cursor: not-allowed;
    background-color: gray;
  }
`
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  isPrimary,
  ...props
}) => {
  return (
    <FirstWrapper>
      <SecondWrapper>
        <ButtonStyled
          type='button'
          isPrimary={isPrimary ? true : false}
          disabled={disabled}
          onClick={() => ''}
          {...props}>
          {label}
        </ButtonStyled>
      </SecondWrapper>
    </FirstWrapper>
  )
}
export default Button