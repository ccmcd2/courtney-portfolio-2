import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import Button from "./Button";
import Icon from "./Icon";
import LinkedIn from "../img/linkedin-logo.svg";
import Github from "../img/github-logo.svg";
import Figma from "../img/figma-logo.svg";
import {keyframes} from "styled-components";

const rotateAnimation = keyframes`
0% {transform: rotate(0deg); width: 49px; height: 49px; margin: 0;}
50% {width: 54px; height: 54px; margin: -2.5px 0 0 -2.5px;}
100% {transform: rotate(-360deg); width: 49px; height: 49px; margin: 0;}
`;

const Prefooter = styled.div`
    background-color: ${palette.blue};
    padding: ${palette.standardPadding};

    div.content {
        max-width: 1140px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        margin-left: auto;
        margin-right: auto;

        p {
            color: ${palette.white};
            text-align: center;
            max-width: 300px;
    
            @media (min-width: 576px) {
                flex-direction: column;
                max-width: 100%;
            }
        }
    }
`;

const FooterMain = styled.div`
    background-color: ${palette.navy};
    padding: ${palette.standardPadding} ${palette.standardPadding} 0 ${palette.standardPadding};

    div.content {
        max-width: 1140px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: auto;
        margin-right: auto;

        div.col-xs-12 {
            margin-bottom: ${palette.standardPadding};
        }

        div h3, div p, div div a {
            color: ${palette.white};
        }

        div div.links {
            height: 7em;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;

            a {
                text-decoration: none;
                display: inline-block;

                &:hover {
                    color: ${palette.yellow};
                    cursor: pointer;
                }
            }
        }

        div div.icons {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            a {
                width: 69px;
                border-radius: 50%;

                &:hover {
                    cursor: pointer;

                    div {
                        animation-name: ${rotateAnimation};
                        animation-duration: 600ms;
                    }
                }
            }
        }
    }
`;

const Footer = () => {
    return (
        <footer>
            <Prefooter>
                <div className="content">
                    <p>Get all of the nitty gritty details in a printer-friendly fashion.</p>
                    <Button>Download resume</Button>
                </div>
            </Prefooter>
            <FooterMain>
                <div className="content">
                    <div className="col-xs-12 col-md-4">
                        <h3>Quick links</h3>
                        <div className="links">
                            <a href="/" alt="Home">Home</a>
                            <a href="/about" alt="About">About</a>
                            <a href="/work" alt="My Work">My Work</a>
                            <a href="/contact" alt="Contact">Contact</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h3>Keep up with me</h3>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/c-mcd/" alt="My LinkedIn" target="_blank">
                                <Icon color={palette.color1} className="link">
                                    <img src={LinkedIn} alt="LinkedIn logo"></img>
                                </Icon>
                            </a>
                            <a>
                                <Icon color={palette.color2} className="link">
                                    <img src={Github} alt="Github logo"></img>
                                </Icon>
                            </a>
                            <a>
                                <Icon color={palette.color3} className="link">
                                    <img src={Figma} alt="Figma logo"></img>
                                </Icon>
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <p>This site was designed and developed with love by me.</p>
                        <p>&copy; 2022 Courtney McDonald</p>
                    </div>
                </div>
            </FooterMain>
        </footer>
    )
}

export default Footer;