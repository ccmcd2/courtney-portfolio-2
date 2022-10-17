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
  margin-bottom: 5px;

  &:active, &:visited, &:link {
    color: ${palette.white};
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid ${palette.white};
    background-color: ${palette.yellow};
    animation: ${wiggleAnimation} 700ms;
}

  &:hover {
    transition: background-color 250ms ease;
    background-color: ${palette.yellow};
    cursor: pointer;
    color: ${palette.white};
    animation: ${wiggleAnimation} 700ms;
  }

  &.secondary {
    background-color: ${palette.white};
    color: ${palette.blue};

    &:active, &:visited, &:link {
      color: ${palette.blue};
      transition: all 250ms ease;
    }

    &:hover {
      background-color: ${palette.blue};
      color: ${palette.white};
      transition: all 250ms ease;
    }

    &:focus {
      outline: 3px solid ${palette.white};
      background-color: ${palette.blue};
      color: ${palette.white};
      animation: ${wiggleAnimation} 700ms;
  }
  }
`;

export default StyledLink;