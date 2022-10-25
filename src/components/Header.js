import React, {useState} from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import {useLocation} from "react-router-dom";
import {keyframes} from "styled-components";

const navOpenAnimation = keyframes`
    from {left: -100vw;}
    to {left: 0;}
`;

const navClosedAnimation = keyframes`
    from {left: 0;}
    to {left: -100vw;}
`;

const logoCAnimation = keyframes`
    0% {transform: rotate(0deg); font-size: 32px;}
    50% {font-size: 40px;}
    100% {transform: rotate(-360deg); font-size: 32px;}
`;

const logoCAnimationWhite = keyframes`
    0% {transform: rotate(0deg); font-size: 32px; color: ${palette.white};}
    50% {font-size: 40px;}
    100% {transform: rotate(-360deg); font-size: 32px; color: ${palette.white};}
`;

const logoAnimation = keyframes`
    0% {background-color: ${palette.pink};}
    50% {background-color: ${palette.yellow};}
    100% {background-color: ${palette.pink};}
`;

const logoAnimationWhite = keyframes`
    0% {background-color: ${palette.white};}
    50% {background-color: ${palette.yellow};}
    100% {background-color: ${palette.white};}
`;

const Nav = styled.nav`
    width: 100%;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    visibility: hidden;
    background-color: ${palette.navy};
    width: 100vw;
    padding: 0 ${palette.standardPadding};
    z-index: 3;

    &.white {
        ul li a {
            color: ${palette.white};
        }

        .bars-container div {
            background-color: ${palette.white};
        }
    }

    a {
        text-decoration: none;
    }

    @media (min-width: 1198px) {
        padding: 0;
    }

    div.bars-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        height: 18px;
        visibility: visible;

        &:hover {
            cursor: pointer;

            div {
                background-color: ${palette.orange};
                transition: background-color 250ms ease;
            }
        }

        @media (min-width: 768px) {
        display: none;
        }

        div {
            width: 30px;
            height: 4px;
            border-radius: 2px;
            background-color: ${palette.navy};
            transition: background-color 250ms ease;
        }
    }

    div.x-container {
        height: 24px;
        width: 24px;

        &:hover {
            cursor: pointer;
        }

        @media (min-width: 768px) {
            display: none;
        }

        div.positive, div.negative {
            width: 30px;
            height: 4px;
            border-radius: 2px;
            background-color: ${palette.white};
            transform: rotate(-45deg);
            position: absolute;
            top: 0;
            right: 0;
            margin-top: 12px;
            transition: background-color 250ms ease;
        }

        div.negative {
            transform: rotate(45deg);
        }

        &:hover div {
            background-color: ${palette.orange};
            transition: background-color 250ms ease;
        }
    }

    ul {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-end;
        visibility: hidden;
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        right: 0;
        padding: ${palette.standardPadding};
        z-index: 1;
        background-color: ${palette.navy};
        animation-name: ${navClosedAnimation};
        animation-duration: 250ms;
        list-style-type: none;
        margin-top: 0px;

        @media (min-width: 768px) {
            flex-flow: row nowrap;
            justify-content: flex-end;
            align-items: center;
            width: 700px;
            height: auto;
            position: relative;
            background: none;
            visibility: visible;
            padding: 0;
            animation: none;
        }

        &.open {
            visibility: visible;
            animation-name: ${navOpenAnimation};
            animation-duration: 250ms;
            position: fixed;

            @media (min-width: 768px) {
                animation: none;
            }
        }

        li {
            margin-top: calc(2 * ${palette.standardMargin});

            @media (min-width: 768px) {
                margin-top: 0;
            }

            a {
                color: ${palette.white};
                text-decoration: none;
                font-size: 25px;
    
                @media (min-width: 768px) {
                    color: ${palette.navy};
                    margin: 0 0 0 40px;
                    font-size: 1rem;
                }
    
                &:hover {
                    color: ${palette.orange};
                }
            }
        }
    }
`;

const Logo = styled.div`
    width: 49px;
    height: 70px;
    background-color: ${palette.pink};
    color: ${palette.white};
    font-family: ${palette.headerFont};
    font-size: 32px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    visibility: visible;

    &.white {
        background-color: ${palette.white};
        color ${palette.pink};
        transition: color 250ms ease;

        &:hover {

            animation-name: ${logoAnimationWhite};

            p {
                animation-name: ${logoCAnimationWhite};
            }
        }
    }

    &:hover {
        animation-name: ${logoAnimation};
        animation-duration: 600ms;

        p {
            animation-name: ${logoCAnimation};
            animation-duration: 600ms;
        }
    }

    p {
        margin: 0;
        text-decoration: none;
    }
`;

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const whiteNav = ["/work/davids-barbeque", "/work/c-and-w-antiques", "/work/city-of-grand-prairie-intranet", "/work/city-of-grand-prairie-public", "/work/courtney-and-cale", "/work/portfolio-1", "/work/portfolio-2", "/work/realeather", "/work/tarrant-county-public-health"]

    return (
        <header>
            <Nav className={whiteNav.includes(location.pathname) ? "white" : ""}>
                <a href="/" alt="Home"><Logo className={whiteNav.includes(location.pathname) ? "white" : ""}><p>C</p></Logo></a>
                <div className="bars-container" onClick={() => setMenuOpen(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <div className="x-container" onClick={() => setMenuOpen(false)}>
                        <div className="positive"></div>
                        <div className="negative"></div>
                    </div>
                    <li><a href="/work" alt="My Work">My Work</a></li>
                    <li><a href="/about" alt="About">About</a></li>
                    <li><a href="/contact" alt="Contact">Contact</a></li>
                </ul>
            </Nav>
        </header>
    )
}

export default Header;