import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import {keyframes} from "styled-components";

const focusAnimation = keyframes`
    0% {width: 100%; margin-left: 0;}
    50% {width: calc(100% + 20px); margin-left: -10px;}
    100% {width: 100%; margin-left: 0;}
`;

const FormInput = styled.input`
    width: 100%;
    border: 3px solid;
    border-color: ${({color}) => color};
    border-radius: ${palette.standardBorderRadius};
    padding: ${palette.standardPadding};
    color: ${palette.black};
    filter: ${palette.standardDropShadow};
    margin-bottom: ${palette.standardMargin};
    font-size: 1rem;
    color: ${palette.black};
    font-family: ${palette.mainFont};

    &::placeholder {
        color: ${palette.black};
        font-family: ${palette.mainFont};
    }

    &:focus {
        border: 6px solid ${({color}) => color};
        outline: 0;
        animation: ${focusAnimation} 600ms ease;
    }
`;

const FormLabel = styled.label`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

const TextAreaInput = styled.textarea`
    width: 100%;
    border: 3px solid;
    border-color: ${({color}) => color};
    border-radius: ${palette.standardBorderRadius};
    padding: ${palette.standardPadding};
    color: ${palette.black};
    filter: ${palette.standardDropShadow};
    margin-bottom: ${palette.standardMargin};
    font-size: 1rem;
    color: ${palette.black};
    font-family: ${palette.mainFont};

    &::placeholder {
        color: ${palette.black};
        font-family: ${palette.mainFont};
    }

    &:focus {
        border: 6px solid ${({color}) => color};
        outline: 0;
        animation: ${focusAnimation} 600ms ease;
    }
`;

const FormField = ({For, label, type, id, name, placeholder, color}) => {
    return (
        <div>
            <FormLabel for={For}>{label}</FormLabel>
            <FormInput type={type} id={id} name={name} color={color} placeholder={placeholder}></FormInput>
        </div>
    )
}

const TextArea = ({For, label, id, name, rows, cols, placeholder, color}) => {
    return (
        <div>
            <FormLabel for={For}>{label}</FormLabel>
            <TextAreaInput id={id} name={name} rows={rows} cols={cols} placeholder={placeholder} color={color}></TextAreaInput>
        </div>
    )
}

export {FormField, TextArea};