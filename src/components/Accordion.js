import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const AccordionPanel = styled.div`
    width: 100%;
    border-radius: ${palette.standardBorderRadius};
    padding: ${palette.standardPadding};
    font-weight: 700;
    background-color: ${({color}) => color};
    color: ${palette.white};
    filter: ${palette.standardDropShadow};
    margin-bottom: 10px;

    p {
        margin: 0;
    }
`;

const Accordion = ({panelText, color}) => {
    return (
        <AccordionPanel color={color}>
            <p>{panelText}</p>
        </AccordionPanel>
    )
}

export default Accordion;