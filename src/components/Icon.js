import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const IconCircle = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background-color: ${props => props.color1 ? "pink" : "orange"};
    background-color: ${props => props.color2 ? "green" : "blue"};
    filter: ${palette.standardDropShadow};
    margin-bottom: 5px;
    color: ${palette.white};
    font-family: ${palette.headerFont};
    font-size: 23px;
`;

const Icon = ({image}) => {
    return (
        <IconCircle>
            <img src={image}></img>
        </IconCircle>
    )
}

export default Icon;