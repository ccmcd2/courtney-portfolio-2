import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const FormInput = styled.input`
    width: 100%;
    border: 3px solid;
    border-color: ${({color}) => color};
    border-radius: ${palette.standardBorderRadius};
    padding: ${palette.standardPadding};
    color: ${palette.black};
    filter: ${palette.standardDropShadow};
    margin-bottom: 10px;
`;

const FormField = ({for2, label, type, id, name, color}) => {
    return (
        <div>
            <label for={for2}>{label}</label>
            <FormInput type={type} id={id} name={name} color={color}></FormInput>
        </div>
    )
}

export default FormField;