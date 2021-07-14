import React from 'react';
import styled from 'styled-components';

import {fonts} from '../../globalStyles/fonts';

import Button from '../Button/Button';

const LearnMoreContainer = styled.article`
    ${fonts}
    display: flex;
        flex-direction: column-reverse;
        padding-inline: 0;
        margin-block-start: 15px;
        margin-block-end: 27px;

        h3 {
            font-family: "Futura Std";
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            margin: 0;
            margin-block-start: 18px;
        }

        p {
            font-family: "Garamond";
            font-weight: 400;
            font-size: 20px;
            line-height: 22.5px;
            margin: 0;
            margin-block-start: 6px;
        }

        img {
            margin: 0;
        }

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-inline: 60px;
        margin-block-end: 93px;
        margin-block-start: 51px;

        h3 {
            font-family: "Futura Std";
            font-weight: 400;
            font-size: 50px;
            line-height: 60px;
            color: #041D42;
            margin: 0;
        }

        p {
            font-family: "Garamond";
            font-weight: 400;
            font-size: 35px;
            line-height: 39.38px;
            color: #041D42;
            margin: 0;
            margin-block-start: 35px;
        }

        img {
            max-width: 100%;
            margin-inline-start: 25px;
        }
    }

    @media (min-width: 1000px) and (max-width: 1300px) {
        padding-inline: 0;
        h3 {
            font-size: 40px;
        }

        p {
            font-size: 25px;
        }
    }
`;

const ButtonContainer = styled.div`
    display: none;
    
    @media (min-width: 1000px) {
        display: block;
        margin-block-start: 45px;

        button {
            font-family: "Futura Std";
            font-weight: 400;

            ::after {
                content: '→';
                font-size: 32px;
                vertical-align: middle;
                margin-inline-start: 12px;
            }
        }
    }

    @media (min-width: 1000px) and (max-width: 1300px) {
        button {
            font-size: 18px;
        }
    }
`;

export interface LearnMoreProps {
    learnMoreHeading: string,
    learnMoreDescription: string,
    isPrimary?: boolean
    onClick?: () => void
    learnMoreButton: string
    imageDescription: string
    imageUrl: string
}


export const LearnMore: React.FC<LearnMoreProps> = ({
    learnMoreHeading, 
    learnMoreDescription,
    onClick,
    isPrimary,
    learnMoreButton,
    imageDescription,
    imageUrl
}) => {
        
    return (
        <LearnMoreContainer>
            <div>
                <header>
                    <h3>{learnMoreHeading}</h3>
                </header>
                <div>
                    <p>
                        {learnMoreDescription}
                    </p>
                    <ButtonContainer>
                        <Button isPrimary={isPrimary} label={learnMoreButton} />
                    </ButtonContainer>
                </div>
            </div>
            <img src={imageUrl} alt={imageDescription} />
        </LearnMoreContainer>
    )
}