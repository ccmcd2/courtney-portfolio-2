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

// const mod = (n, m) => {
//     return ((n % m) + m) % m;
// }

// const nthChildFunc = (currentIndex, childCount, offset) => {
//     return 1 + mod(currentIndex + offset, childCount);
// };

// const carouselTrackOverride = ({ duration, displayCount, currentIndex, childCount }) => {
//     let css = "";

//     for(let i = -1; i < displayCount + 1; i++) {
//         css += `
//             .carousel-track .carousel-item:nth-child(${nthChildFunc(currentIndex, childCount, i)}) {
//                 margin-top: ${(displayCount - i)*42}px;
//                 transition: margin-top ${DURATION}ms ease-out;
//             }
//         `;
//     }

//     return css;
// };

// const SliderContainer = styled.div`

//     width: 100vw;
//     max-width: 1350px;
//     margin: -175px auto 60px auto;

//     div .carousel-track {
//         height: 800px !important;
//     }

//     div div button {
//         display: none;
//     }

//     div div svg {
//         height: 31px;
//         margin-top: 750px;
//     }

//     ${carouselTrackOverride}
// `;

// const ArrowContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 300px;
// `;

const DISPLAY_COUNT = 4.6;
const DURATION = 300;
const AUTOPLAY_SPEED = 3300;
var AUTOPLAY = true;

const Carousel = ({ children, currentIndex, setCurrentIndex }) => {

    return (
        <>
            <SliderContainer duration={DURATION} displayCount={DISPLAY_COUNT} currentIndex={currentIndex} childCount={React.Children.count(children)}>
                <Slider prevArrow={<LeftArrow />} nextArrow={<RightArrow />} duration={DURATION} slidesToShow={DISPLAY_COUNT} autoplay={AUTOPLAY} pauseOnHover={false} autoplaySpeed={AUTOPLAY_SPEED} beforeChange={(_oldIndex, newIndex) => {
                    setCurrentIndex(newIndex);
                }}>
                    {children}
                </Slider>
            </SliderContainer>
        </>
    )
}

export default Carousel;