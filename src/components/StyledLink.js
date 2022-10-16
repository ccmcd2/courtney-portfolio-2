import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import {keyframes} from "styled-components";

const wiggleAnimation = keyframes`
  0% {transform: rotate(5deg);}
  20% {transform: rotate(-5deg);}
  40% {transform: rotate(4deg);}
  60% {transform: rotate(-3deg);}
  80% {transform: rotate(2deg);}
  100% {transform: rotate(0deg);}
`;

const StyledLink = styled.a`
  padding: 13px 25px;
  border-radius: 100px;
  background-color: ${palette.pink};
  color: ${palette.white};
  font-weight: 700;
  transition: background-color 250ms ease;
  filter: ${palette.standardDropShadow};
  text-decoration: none;
  max-height: 49px;
  display: inline-block;

  &:active, &:visited, &:link {
    color: ${palette.white};
    text-decoration: none;
  }

  &:hover {
    transition: background-color 250ms ease;
    background-color: ${palette.yellow};
    cursor: pointer;
    color: ${palette.white};
    animation: ${wiggleAnimation} 700ms;
  }
`;

export default StyledLink;