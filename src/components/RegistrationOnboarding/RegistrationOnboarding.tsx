import React, {useState} from 'react';
import styled from 'styled-components';

import { LeftSide } from '../LeftSide/LeftSide';
import { Back } from '../Back/Back';
import { Input } from '../InputName/InputName';
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions';
import Button from '../Button/Button';
import { fonts } from '../../globalStyles/fonts';
import googleIcon from '../../assests/google.svg';
import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries';
import { USER_ROLE } from '../RoleSelectOnboard/RoleSelectOnboard';

const Container = styled("div")`
    ${fonts}
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 82%;
    margin-inline: auto;
    margin-bottom: -125px;

    & > div:first-child {
        margin: 0;

        ${mediaQueries(null, "lg")`
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
                max-width: 426px;
                margin-inline: auto;
            `}
    }

    ${mediaQueries(null, 'lg')`
            max-width: 320px;
            margin-inline: auto;
            padding-inline-start: 17px;
            padding-inline-end: 12px;
            padding-block-start: 18px;
            padding-block-end: 32px;
            position: relative;
            
            h3 {
                display: none;
            }
        `}
  }

    ${mediaQueries(null, "lg")`
        max-width: 90%;
        margin-inline: auto;
        display: block;
    `}
`;
const PasswordInputContainer = styled.div`
  color: #979797;
  position: relative;
`
const HidePasswordBtn = styled.span`
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 33px;
  right: 21px;
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #041d42;
`

export interface RegistrationOnboardingProps {
    isChecked: boolean,
    isPrimary: boolean,
    role: USER_ROLE
}

export const RegistrationOnboarding: React.FC<RegistrationOnboardingProps> = ({
    isChecked,
    isPrimary,
    role
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState('');

    const handleInputUserName = (e: any) => {
        setUserName(e.target.value);
    }
    const handleInputEmailAddress = (e: any) => {
        setEmailAddress(e.target.value);
    }
    const handleInputPassword = (e: any) => {
        setPassword(e.target.value);
    }

    return (
        <Container>
            <LeftSide backgroundImage="Baobab"/>
            <article>
                <header>
                    <h3>
                        Register your account
                    </h3>
                    <div>
                        <Back label="Back" href="/" />
                        <div>
                            <p>Step 01/02</p>
                        </div>
                    </div>
                </header>
                <form>
                    <Input 
                        label="Your username" 
                        placeholder="Username" 
                        name="large" 
                        inputType="text" 
                        inputValue={userName} 
                        onChange={handleInputUserName}
                     />
                    <Input 
                        label="Email address" 
                        placeholder="Enter email address" 
                        name="large" 
                        inputType="email" 
                        inputValue={emailAddress} 
                        onChange={handleInputEmailAddress}
                     />
                    <PasswordInputContainer>
                        <Input
                            name='large'
                            label='Create password'
                            inputValue={password}
                            onChange={handleInputPassword}
                            placeholder='Enter a password'
                            inputType={showPassword ? 'text' : 'password'}
                        />
                        <HidePasswordBtn onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? 'Hide' : 'Show'}
                        </HidePasswordBtn>
                        </PasswordInputContainer>
                    <TermsAndConditions termsLabel="I agree to the" href="/" serviceTerms="term & conditions" isChecked={isChecked} />
                    <div>
                        <Button isPrimary={isPrimary} label="Register account" />
                        <Button label="Register with Google" />
                    </div>
                </form>
            </article>
        </Container>
    )
}
