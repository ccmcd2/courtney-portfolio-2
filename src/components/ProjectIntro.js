import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";
import StyledLink from "./StyledLink";

const ProjectIntroContainer = styled.div`

    h1 {
        margin-bottom: 10px;
    }
    
    p.info {

        span.color5 {
            display: inline-block;
            margin-bottom: 5px;
        }
    }

    &.no-link .button {
        display: none;
    }
`;

const ProjectIntro = ({title, description, link, date, tools, type, children, className}) => {
    return (
        <ProjectIntroContainer className={className}>
            <h1>{title}</h1>
            <p className="info">
                <span className="color3">{type} &#x2022; {date}</span><br/>
                <span className="color5">Tools used: {tools}</span>
            </p>
            <p>{description}</p>
            {children}
            <StyledLink href={link} className="button" target="_blank" alt="View live product">View live product</StyledLink>
        </ProjectIntroContainer>
    )
}

export default ProjectIntro;