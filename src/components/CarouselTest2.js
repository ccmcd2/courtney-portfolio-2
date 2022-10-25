import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import { ReactComponent as LeftArrow } from "../img/left-arrow.svg";
import { ReactComponent as RightArrow } from "../img/right-arrow.svg";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

const SliderContainer = styled.div`

    width: 100vw;
    max-width: 1350px;
    margin: 0 auto 60px auto;

    @media (min-width: 992px) {
        margin-top: -50px;
    }
`;

const ArrowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

var DISPLAY_COUNT = 1.6;
const DURATION = 300;
const AUTOPLAY_SPEED = 4000;
var AUTOPLAY = true;

const CarouselTest2 = ({ children }) => {

    return (
        <>
            <SliderContainer>
                <Carousel infiniteLoop={true} autoPlay={true} centerMode={true} centerSlidePercentage={10} axis='horizontal'>
                    {children}
                </Carousel>
            </SliderContainer>
        </>
    )
}

export default CarouselTest2;