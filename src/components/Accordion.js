import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import Measure from 'react-measure';
import Carrot from "../img/carrot-icon.png";

const AccordionContainer = styled.div`
    width: 100%;
    margin-bottom: 25px;

    .panel {
        background-color: ${({color}) => color};
        position: relative;
        padding: ${palette.standardPadding};
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-radius: ${palette.standardBorderRadius};
        font-weight: 700;
        color: ${palette.white};
        filter: ${palette.standardDropShadow};
        z-index: 1;
        margin-bottom: -5px;
        transition: font-size 250ms ease;

        &:hover {
            cursor: pointer;
            font-size: 1.15em;
            transition: font-size 250ms ease;
        }
    }

    .dropdown {
        width: 100%;
        border-radius: ${palette.standardBorderRadius};
        padding: calc(10px + ${palette.standardPadding}) ${palette.standardPadding} ${palette.standardPadding} ${palette.standardPadding};
        background-color: ${palette.white};
        border: 3px solid ${palette.navy};
        margin-top: -10px;

        p {
            margin: 0;
        }
    }
`;

const StyledCarrot = styled.img`
    transform: rotate(${({open}) => open ? '-180deg' : '0deg'});
    transform-origin: center;
    width: 20px;
    height: auto;
    transition: transform 250ms ease;
`;

const Accordion = ({ panelText, children, color }) => {
    const [open, setOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState(0);

    return (
        <AccordionContainer color={color}>
            <div onClick={() => setOpen(!open)} className="panel">{panelText}<span><StyledCarrot src={Carrot} alt="arrow" open={open}/></span></div>
            <div style={{ height: open ? answerHeight : 0, overflowY: 'hidden', transition: 'all 250ms ease' }}>
                <Measure scroll onResize={(content) => {
                    setAnswerHeight(content.scroll.height);
                }}>{({ measureRef }) => (
                    <div className="dropdown" ref={measureRef}>{children}</div>
                )}</Measure>
            </div>
        </AccordionContainer>
    );
}

export default Accordion;