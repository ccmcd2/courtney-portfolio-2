import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const HeroContainer = styled.div`
    width: 100vw;
    height: 50vh;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -70px;

    @media (min-width: 768px) {
        height: 60vh;
    }
`;

const HeroSpacer = styled.div`
    width: 100vw;
    height: calc(50vh - 70px);
    margin-bottom: 40px;

    @media (min-width: 768px) {
        height: calc(60vh - 70px);
    }
`;

const Hero = ({image}) => {
    return (
        <HeroContainer>
            <img src={image}></img>
        </HeroContainer>
    )
}

export {Hero, HeroSpacer};