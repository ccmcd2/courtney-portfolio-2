import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import LeftArrow from "../img/left-arrow.svg";
import RightArrow from "../img/right-arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'infinite-react-carousel';

const SliderContainer = styled.div`
    div div button {
        display: none;
    }
`;

const Carousel = ({children}) => {

    return (
        <SliderContainer>
            <Slider slidesToShow="4" autoplay="true" autoplaySpeed="4000">
                {children}
            </Slider>
        </SliderContainer>
    )
}

export default Carousel;