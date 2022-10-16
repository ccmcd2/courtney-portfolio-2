import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import {keyframes} from "styled-components";

const wiggleAnimation = keyframes`
0% {transform: rotate(5deg);}
20% {transform: rotate(-5deg);}
40% {transform: rotate(4deg);}
60% {transform: rotate(-3deg);}
80% {transform: rotate(2deg);}
100% {transform: rotate(0deg);}
`;

const StyledButton = styled.button`
    padding: 13px 25px;
    border-radius: 100px;
    border: 0;
    background-color: ${palette.pink};
    color: ${palette.white};
    font-weight: 700;
    transition: background-color 250ms ease;
    filter: ${palette.standardDropShadow};
    text-decoration: none;
    max-height: 49px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;

    &:hover {
    background-color: ${palette.yellow};
    transition: background-color 250ms ease;
    cursor: pointer;
    color: ${palette.white};
    animation-name: ${wiggleAnimation};
    animation-duration: 700ms;
    }
`;

const Button2 = ({type, text}) => {
    return (
        <StyledButton type={type}>{text}</StyledButton>
    )
}

export default Button2;