import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import {fonts} from '../../globalStyles/fonts';

import { mediaQueries } from '../../globalStyles/mediaQueries/mediaQueries';

const DiscoverBannerStyled = styled("div")`
    ${fonts}
    max-width: 1167px;
    margin-inline: auto;
    text-align: center;
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(50%);

    header {
        display: flex;
        flex-direction: column-reverse;
        padding-inline-start: 176px;
        padding-inline-end: 140px;

        h3 {
            font-family: "Futura Std";
            font-size: 50px;
            line-heigth: 60px;
            color: #041D42;
            margin: 0;
            margin-block-start: 10px;
        }

        p {
            font-family: "Garamond";
            font-size: 30px;
            line-heigth: 33.75px;
            color: #979797;
            margin: 0;
            margin-block-start: 63px;
        }
    }

    ${mediaQueries("lg", "xl")`
        max-width: 950px;
        margin-inline: auto;
    `}

    ${mediaQueries(null, "lg")`
        transform: translateY(60%);
        margin-inline-start: 11px;
        margin-inline-end: 14px;
        header {
            padding-inline: 0;

            h3 {
                font-size: 30px;
                line-height: 36px;
                margin-block-start: 14px;
            }

            p {
                font-size: 20px;
                line-height: 22.5px;
                margin-block-start: 29px;
            }
        }
    `}
`;

const ButtonContainer = styled('div')`
    padding-inline-start: 176px;
    padding-inline-end: 140px;
    margin-block-start: 41.24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-block-end: 71.19px;

    button {
        font-family: "Garamond";
        font-size: 24px;
        line-height: 27px;
    }

    button:last-child {
        margin-inline-start: 45px;
    }


    @media (max-width: 900px) {
        padding-inline: 0;
        display: flex;
        flex-direction: column;
        margin-block-start: 32px;
        padding-block-end: 33px;

        button:last-child {
            margin-block-start: 16px;
            margin-inline-start: 0;
        }
    }
`;

export interface DiscoverBannerProps {
    subTitle: string
    title: string
    primaryButton: string
    isPrimary: boolean
    secondaryButton: string
}

export const DiscoverBanner: React.FC<DiscoverBannerProps> = ({subTitle, title, isPrimary, primaryButton, secondaryButton}) => {
    return (
        <DiscoverBannerStyled>
            <header>
                <h3>{title}</h3>
                <p>{subTitle}</p>
            </header>
            <ButtonContainer>
                <Button isPrimary={isPrimary} label={primaryButton} />
                <Button label={secondaryButton} />
            </ButtonContainer>
        </DiscoverBannerStyled>
    )
}
