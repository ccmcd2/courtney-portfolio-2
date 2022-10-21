import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import StyledLink from "./StyledLink";

const PhoneContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h3 {
        text-align: center;
        width: 50%;
        min-width: 206px;
        max-width: 245px;
        height: calc(2 * 1.778rem);

        a {
            color: ${palette.navy};
            text-decoration: none;
            transition: color 250ms ease;

            &:hover {
                color: ${palette.orange};
                transition: color 250ms ease;
            }
        }
    }

    a.button {
        margin-bottom: 10px;
        margin-right: 0;
    }
`;

const PhoneImage = styled.img`
    width: 50%;
    aspect-ratio: 9/19.5;
    max-width: 245px;
    min-width: 206px;
    max-height: 531px;
    border: 8px solid ${palette.black};
    border-radius: 25px;
    transition: all 250ms ease;

    &:hover {
        cursor: pointer;
        border: 8px solid ${palette.orange};
        transition: all 250ms ease;
    }

    @media (min-width: 768px) {
        min-width: 245px;
    }
`;

const Phone = ({image, href, alt, projectTitle, color}) => {
    return (
        <PhoneContainer color={color}>
            <a href={href} alt={alt}>
                <PhoneImage src={image}></PhoneImage>
            </a>
            <h3><a href={href} alt={alt}>{projectTitle}</a></h3>
        </PhoneContainer>
    )
}

export default Phone;