import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const PhoneImage = styled.img`
    width: 50%;
    aspect-ratio: 9/19.5;
    max-width: 245px;
    min-width: 206px;
    border: 12px solid ${palette.black};
    border-radius: 25px;
`;

const Phone = ({image}) => {
    return (
        <PhoneImage src={image}></PhoneImage>
    )
}

export default Phone;