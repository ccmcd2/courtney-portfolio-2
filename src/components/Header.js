import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
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
`;

const BarsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    height: 18px;
`;

const Bar = styled.div`
    width: 30px;
    height: 4px;
    border-radius: 2px;
    background-color: ${palette.navy};
`;

const Header = () => {
    return (
        <header>
            <Nav>
                <Logo>C</Logo>
                <BarsContainer>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </BarsContainer>
            </Nav>
        </header>
    )
}

export default Header;