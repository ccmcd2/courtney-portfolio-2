import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import Carrot from "../img/carrot-icon.svg";
import Measure from "react-measure";

const AccordionPanel = styled.div`
    width: 100%;
    border-radius: ${palette.standardBorderRadius};
    padding: ${palette.standardPadding};
    font-weight: 700;
    background-color: ${({color}) => color};
    color: ${palette.white};
    filter: ${palette.standardDropShadow};
    z-index: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    &:hover {
        cursor: pointer;

        p {
            font-size: 1.15em;
            transition: font-size 250ms ease;
        }
    }

    p {
        margin: 0;
        width: calc(100% - (1em + ${palette.standardMargin}));
        transition: font-size 250ms ease;
    }

    img.down {
        width: 1em;
        height: auto;
        margin-left: ${palette.standardMargin};
    }

    img.up {
        width: 1em;
        height: auto;
        margin-left: ${palette.standardMargin};
        transform: rotate(180deg);
    }
`;

const AccordionDropdown = styled.div`
    width: 100%;
    border-radius: ${palette.standardBorderRadius};
    padding: calc(10px + ${palette.standardPadding}) ${palette.standardPadding} ${palette.standardPadding} ${palette.standardPadding};
    background-color: ${palette.white};
    border: 3px solid ${palette.navy};
    margin-bottom: 20px;
    margin-top: -10px;

    p {
        margin: 0;
    }
`;

const Accordion = ({panelText, color, dropdownText}) => {

    const [open, setOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState(0);

    return (
        <div>
            <AccordionPanel onClick={() => setOpen(!open)} color={color}>
                <p>{panelText}</p>
                <img className={open ? "up" : "down"} src={Carrot}></img>
            </AccordionPanel>
            <AccordionDropdown>
                <p>{dropdownText}</p>
            </AccordionDropdown>
        </div>
    )
}

export default Accordion;