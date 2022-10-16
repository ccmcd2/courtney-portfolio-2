import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const PhoneImage = styled.img`
    width: 50%;
    aspect-ratio: 9/19.5;
    max-width: 245px;
    min-width: 206px;
    max-height: 531px;
    border: 8px solid ${palette.black};
    border-radius: 25px;
    margin: 0 ${palette.standardMargin};

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 768px) {
        margin: 0 40px;
        min-width: 245px;
    }
`;

const Phone = ({image}) => {
    return (
        <PhoneImage src={image}></PhoneImage>
    )
}

export default Phone;