import React from 'react'

import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

const inputStyles = css`
  ${fonts}
  'Futura Std', Arial, Helvetica, sans-serif
  background: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16.8px;
  display: flex;
  align-items: center;
  color: #979797;
  outline: none;
  border: 1px solid #979797;
  border-radius: 6px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .large {
    padding-top: 15px;
    padding-left: 30px;
    padding-bottom: 16px;
    padding-right: 60px;
    ${inputStyles}

    :hover {
      box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
      border: 1px solid #041d42;
    }
  }
  .small {
    max-width: 240px;
    padding-top: 12px;
    padding-left: 14px;
    padding-bottom: 12px;
    padding-right: 34px;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
    ${inputStyles}
  }
`
const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: #979797;
  padding-bottom: 6px;
  align-items: start;
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
`
const InputElement = styled.input`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;

  &::-webkit-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }

  &:-ms-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }

  &::placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }
`
export interface InputProps {
  name?: string
  label?: string
  inputType?: string
  inputValue?: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  onChange,
  inputType,
  inputValue,
  placeholder,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputElement
        className={name}
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete='off'
      />
    </InputContainer>
  )
}
