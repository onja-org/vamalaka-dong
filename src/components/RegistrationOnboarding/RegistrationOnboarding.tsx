import React, { useState } from 'react'
import styled from 'styled-components'

import { LeftSide } from '../LeftSide/LeftSide'
import { Back } from '../Back/Back'
import { Input } from '../InputName/InputName'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'
import Button from '../Button/Button'
import { fonts } from '../../globalStyles/fonts'
import googleIcon from '../../assests/google.svg'
import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries'

const Container = styled('div')`
  ${fonts}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 82%;
  margin-inline: auto;

  & > div:first-child {
    margin: 0;

    ${mediaQueries(null, 'lg')`
            display: none;
        `}
  }

  article {
    padding-inline-start: 5%;
    padding-inline-end: 5%;
    background-color: #ffffff;

    header {
      display: flex;
      flex-direction: column-reverse;

      h3 {
        font-family: 'Futura Std';
        color: #041d42;
        font-size: 30px;
        line-height: 36px;
        margin: 0;
        margin-block-start: 30px;
        padding-inline: 10%;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        a {
          margin-block-start: 19px;
        }

        div {
          font-family: 'Futura Std';
          display: flex;
          flex-direction: column;

          p:first-child {
            margin-block-end: 0;
            color: #bdbdbd;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
          }

          p:last-child {
            margin: 0;
            color: #979797;
            font-size: 16px;
            line-height: 19px;
          }
        }

        ${mediaQueries(null, 'lg')`
                    display: none;
                `}
      }
    }

    form {
      padding-inline: 10%;

      div:not(:first-child, :last-child) {
        margin-block-start: 14px;
      }

      & > label {
        margin-block-start: 22px;
      }

      div:last-child {
        margin-block-start: 40px;
        display: flex;
        flex-direction: row;

        button {
          font-size: 16px;
          line-height: 19px;

          :last-child {
            margin-inline-start: 15px;
            background-image: url(${googleIcon});
            background-repeat: no-repeat;
            background-position: 7% 50%;
            padding-inline-start: 36px;
          }
        }

        ${mediaQueries(null, 'lg')`
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    button {
                        font-size: 24px;
                        line-height: 28px;

                        :first-child {
                            max-width: 200px;
                        }

                        :last-child {
                            margin-block-start: 10px;
                            margin-inline-start: 0;
                            max-width: 275px;
                        }
                    }
                `}
      }

      ${mediaQueries(null, 'lg')`
                padding-inline: 0;
            `}
    }

    ${mediaQueries(null, 'lg')`
            max-width: 320px;
            margin-inline: auto;
            padding-inline-start: 17px;
            padding-inline-end: 12px;
            padding-block-start: 18px;
            padding-block-end: 32px;
            
            h3 {
                display: none;
            }
        `}
  }

  ${mediaQueries(null, 'lg')`
        display: block;
    `}
`

const PasswordField = styled('div')`
    ${fonts}
    font-family: 'Futura Std';

    label {
        font-size: 16px;
        line-height: 19.2px;
        color: #979797;
    }

    fieldset {
        ${fonts}
        font-family: 'Futura Std';
        display flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid #979797;
        border-radius: 6px;
        margin-block-start: 10px;
        padding-block-start: 17px;
        padding-block-end: 16px;
        margin-inline: 0;

        input {
            border: none;
            outline: none;
            font-size: 14px;
            line-height: 16.8px;
            margin-inline-start: 16px;

            ::placeholder {
                font-family: 'Futura Std';
            }
        }

        button {
            font-family: 'Futura Std';
            font-size: 12px;
            line-height: 14.4px;
            color: #041D42;
            border: none;
            outline: none;
            background-color: #ffffff;
        }
    }
}
`

export interface RegistrationOnboardingProps {
  background: string
  label: string
  href: string
  userNameLabel: string
  userNamePlaceholder: string
  addressLabel: string
  addressPlaceholder: string
  passwordLabel: string
  passwordPlaceholder: string
  termsLabel: string
  serviceTerms: string
  termHref: string
  isChecked: boolean
  isPrimary: boolean
  registerButton: string
  registerWithGoogleButton: string
}

export const RegistrationOnboarding: React.FC<RegistrationOnboardingProps> = ({
  background,
  label,
  href,
  userNameLabel,
  userNamePlaceholder,
  addressLabel,
  addressPlaceholder,
  passwordLabel,
  passwordPlaceholder,
  termsLabel,
  serviceTerms,
  termHref,
  isChecked,
  isPrimary,
  registerButton,
  registerWithGoogleButton,
}) => {
  const [isClicked, setIsClicked] = useState(false)

  function handleButtonClick() {
    setIsClicked(!isClicked)
  }

  return (
    <Container>
      <LeftSide backgroundImage={background} />
      <article>
        <header>
          <h3>Register your account</h3>
          <div>
            <Back label={label} href={href} />
            <div>
              <p>Step 01/02</p>
              <p>Personal info.</p>
            </div>
          </div>
        </header>
        <form>
          <Input
            label={userNameLabel}
            placeholder={userNamePlaceholder}
            name='large'
          />
          <Input
            label={addressLabel}
            placeholder={addressPlaceholder}
            name='large'
          />
          <PasswordField>
            <label>{passwordLabel}</label>
            <fieldset>
              <input
                type='password'
                placeholder={passwordPlaceholder}
                required
              />
              <button type='button' onClick={handleButtonClick}>
                {isClicked ? 'Hide' : 'Show'}
              </button>
            </fieldset>
          </PasswordField>
          <TermsAndConditions
            termsLabel={termsLabel}
            href={termHref}
            serviceTerms={serviceTerms}
            isChecked={isChecked}
          />
          <div>
            <Button isPrimary={isPrimary} label={registerButton} />
            <Button label={registerWithGoogleButton} />
          </div>
        </form>
      </article>
    </Container>
  )
}
