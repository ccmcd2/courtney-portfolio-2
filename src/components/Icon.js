import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const IconContainer = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    filter: ${palette.standardDropShadow};
    margin-bottom: 5px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: ${({color}) => color};

    img {
        width: 80%;
        height: 80%;
        border-radius: 50%;
    }

    p {
        color: ${palette.white};
        font-family: ${palette.headerFont};
        font-size: 23px;
        margin: 0;
    }
`;

const Icon = ({children, color}) => {
    return (
        <IconContainer color={color}>
            {children}
        </IconContainer>
    )
}

export default Icon;