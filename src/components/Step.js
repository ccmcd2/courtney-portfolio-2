import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import Icon from "./Icon";

const StepContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

const IconWithLine = styled.div`
    height: 100%;
    margin-right: ${palette.standardMargin};
    width: 69px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    div.line {
        width: 3px;
        height: 75px;
        background-color: ${palette.navy};
    }

    div.dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${palette.navy};
    }
`;

const StepDescription = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: ${palette.standardMargin} 0;
`;

const Step = ({title, description, color, children}) => {
    return (
        <StepContainer>
            <IconWithLine>
                <Icon color={color}>{children}</Icon>
                <div className="line"></div>
                <div className="dot"></div>
            </IconWithLine>
            <StepDescription>
                <h2>{title}</h2>
                <p>{description}</p>
            </StepDescription>
        </StepContainer>
    )
}

export default Step;