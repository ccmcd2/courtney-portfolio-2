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
            margin-bottom: 10px;
        }
    }
`;

const ProjectIntro = ({title, description, link, date, tools}) => {
    return (
        <ProjectIntroContainer>
            <h1>{title}</h1>
            <p className="info">
                <span className="color5">{date}</span><br/>
                <span className="color2">Tools used: {tools}</span>
            </p>
            <p>{description}</p>
            <StyledLink href={link} target="_blank" alt="View live product">View live product</StyledLink>
        </ProjectIntroContainer>
    )
}

export default ProjectIntro;