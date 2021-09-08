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
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: #979797;
  padding-bottom: 6px;
`
const InputElement = styled.input<{ errorMessage: string | undefined }>`
  ${fonts}

  border: ${({ errorMessage }) =>
    errorMessage ? '1px solid red' : '1px solid #979797'};
  color: ${({ errorMessage }) => (errorMessage ? '#FC462B' : '#979797')};

  &::-webkit-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    color: ${({ errorMessage }) => (errorMessage ? '#FC462B' : '#979797')};
  }

  &:-ms-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    color: ${({ errorMessage }) => (errorMessage ? '#FC462B' : '#979797')};
  }

  &::placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    color: ${({ errorMessage }) => (errorMessage ? '#FC462B' : '#979797')};
  }

  &:focus {
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
    border: 1px solid #041d42;
    color: #979797;
  }
`
const ToggleError = styled.span`
  color: #fc462b;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`
export interface InputProps {
  name?: string
  label?: string
  inputId?: string
  inputType?: string
  inputValue?: string
  placeholder?: string
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  inputId,
  onChange,
  inputType,
  inputValue,
  placeholder,
  errorMessage,
}) => {
  return (
    <InputContainer>
      <Label htmlFor={inputId}>
        {label}
        {errorMessage && <ToggleError>{errorMessage}</ToggleError>}
      </Label>
      <InputElement
        id={inputId}
        className={name}
        type={inputType}
        value={inputValue}
        autoComplete='off'
        onChange={onChange}
        placeholder={placeholder}
        errorMessage={errorMessage}
      />
    </InputContainer>
  )
}
