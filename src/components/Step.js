import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import Icon from "./Icon";

const StepContainer = styled.div`
    width: calc(100% - 24px);
    border-left: 4px solid ${palette.navy};
    margin-bottom: 20px;
    margin-left: 23px;

    div.dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${palette.navy};
        position: absolute;
        bottom: 0;
        left: -8px;
    }

    div.icon {
        position: absolute;
        top: 0;
        left: calc((-49px / 2) - 2px)
    }

    div.description {
        margin-left: 40px;
        padding: 10px 0;

        p {
            margin: 0;
        }

        h2 {
            margin-top: 0;
        }
    }
`;

const Step = ({title, description, color, children}) => {

    return (
        <StepContainer>
            <Icon className="icon" color={color}>{children}</Icon>
            <div className="dot"></div>
            <div className="description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </StepContainer>
    )
}

export default Step;