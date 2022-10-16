import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const DiagonalCarousel = ({children}) => {
    return (
        <CarouselContainer>{children}</CarouselContainer>
    )
}

export default DiagonalCarousel;