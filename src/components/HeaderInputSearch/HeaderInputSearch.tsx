import React, { FC } from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface InputType {
  placeholderText: string
  icon?: string
  alt: string
}

const Input: FC<InputType> = ({ placeholderText, alt, icon }) => {
  return (
    <Label>
      <img src={icon} alt={alt} />
      <input type='text' placeholder={placeholderText} />
    </Label>
  )
}

export default Input

const Label = styled.label`
  padding-bottom: 4px;
  border-bottom: 1px solid #041d42;
  display: flex;
  width: 100%;
  position: relative;
  gap: 12px;

  @media (min-width: 1200px) {
    width: 70%;
  }

  input {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    width: 98%;
    font-size: 27px;
    line-height: 32px;
    color: #979797;
    background: transparent;
    border: none;
    outline: none;
    &:focus {
      border: none;
    }
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
  }

  @media (max-width: 900px) {
    display: none;
  }
`
