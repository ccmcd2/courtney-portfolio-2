import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import { ReactComponent as LeftArrow } from "../img/left-arrow.svg";
import { ReactComponent as RightArrow } from "../img/right-arrow.svg";
import Slider from 'infinite-react-carousel';

const SliderContainer = styled.div`

    width: 1350px;
    margin: -50px auto -75px auto;
    transform: rotate(7deg);

    .slider {

        overflow: visible;

        .carousel-track {
            height: 800px !important;
        }

        .phone {
            transform: rotate(14deg);
        }

        div {
            overflow: visible;
            transform: rotate(-7deg);

            button {
                display: none;
            }

            svg {
                height: 31px;
                margin-top: 750px;
            }
        }
    }
`;

const ArrowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

var DISPLAY_COUNT = 4.6;

/*const mediaQuery576 = window.matchMedia('(min-width: 576px)')

if (mediaQuery576.matches) {
    var DISPLAY_COUNT = 2.5;
}

const mediaQuery768 = window.matchMedia('(min-width: 768px)')

if (mediaQuery768.matches) {
    var DISPLAY_COUNT = 2.8;
}

const mediaQuery992 = window.matchMedia('(min-width: 992px)')

if (mediaQuery768.matches) {
    var DISPLAY_COUNT = 3.5;
}

const mediaQuery1200 = window.matchMedia('(min-width: 1200px)')

if (mediaQuery1200.matches) {
    var DISPLAY_COUNT = 4;
}*/

const DURATION = 300;
const AUTOPLAY_SPEED = 3300;
var AUTOPLAY = false;

const CarouselTest = ({ children, currentIndex, setCurrentIndex }) => {

    return (
        <>
            <SliderContainer duration={DURATION} displayCount={DISPLAY_COUNT} currentIndex={currentIndex} childCount={React.Children.count(children)}>
                <Slider className="slider" prevArrow={<LeftArrow />} nextArrow={<RightArrow />} duration={DURATION} slidesToShow={DISPLAY_COUNT} arrowsBlock={false} wheel={false} swipe={false} autoplay={AUTOPLAY} pauseOnHover={true} autoplaySpeed={AUTOPLAY_SPEED} beforeChange={(_oldIndex, newIndex) => {
                    setCurrentIndex(newIndex);
                }}>
                    {children}
                </Slider>
            </SliderContainer>
        </>
    )
}

export default CarouselTest;