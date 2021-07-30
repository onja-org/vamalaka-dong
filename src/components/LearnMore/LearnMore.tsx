import React from 'react';
import styled from 'styled-components';

import {fonts} from '../../globalStyles/fonts';

import Button from '../Button/Button';
import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries';

const LearnMoreContainer = styled.article`
    ${fonts}
    display: flex;
    flex-direction: column-reverse;
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

    ${mediaQueries("lg", null)`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-inline: 80px;
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
    `}

    ${mediaQueries("lg", "xl")`
        padding-inline: 0;
        h3 {
            font-size: 40px;
        }

        p {
            font-size: 25px;
        }
    `}

    ${mediaQueries(null, "lg")`
        padding-inline-start: 21px;
        padding-inline-end: 17px;
        gap: 0;
    `}
`;

const ButtonContainer = styled.div`
    display: none;
    
    ${mediaQueries("lg", null)`
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
    `}

    ${mediaQueries("lg", "xl")`
        button {
            font-size: 18px;
        } 
    `}
`;

export interface LearnMoreProps {
    isPrimary?: boolean
    onClick?: () => void
    learnMoreButton: string
    imageUrl: string
}


export const LearnMore: React.FC<LearnMoreProps> = ({
    onClick,
    isPrimary,
    learnMoreButton,
    imageUrl
}) => {
        
    return (
        <LearnMoreContainer>
            <div>
                <header>
                    <h3>Madagascars peer-to-peer e-commerce platform</h3>
                </header>
                <div>
                    <p>
                        Purchase high-quality products made by the people that sell them. By cutting out middlemen, you know exactly where your purchase is from and how it was made.
                    </p>
                    <ButtonContainer>
                        <Button isPrimary={isPrimary} label={learnMoreButton} />
                    </ButtonContainer>
                </div>
            </div>
            <img src={imageUrl} alt="Peer-to-peer image" />
        </LearnMoreContainer>
    )
}