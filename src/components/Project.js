import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 40px;
    padding: ${palette.standardPadding};
    background-color: ${({color}) => color};
    border-radius: ${palette.standardBorderRadius};

    img {
        width: 100%;
        height: auto;
        max-width: 768px;
        aspect-ratio: 1440/1024;
        margin-bottom: ${palette.standardMargin};
        filter: drop-shadow(0 0 5px #555);
    }

    div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;

        h2 {
            color: ${palette.white};
        }

        p {
            color: ${palette.white};
        }
    }

    @media (min-width: 768px) {
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        margin-bottom: 80px;

        img {
            margin-bottom: 0;
            filter: drop-shadow(0 0 15px #555);
            max-width: 350px;
        }

        &.left {
            img {
                order: 0;
                margin-right: 40px;
            }

            div {
                order: 1;
            }
        }

        &.right {
            img {
                order: 1;
                margin-left: 40px;
            }

            div {
                order: 0;
            }
        }
    }

    @media (min-width: 992px) {
        img {
            max-width: 500px;
        }
    }

    @media (min-width: 1200px) {
        img {
            max-width: 650px;
        }
    }
`;

const Project = ({image, children, color, title, className}) => {
    return (
        <ProjectContainer color={color} className={className}>
            <img src={image}></img>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
        </ProjectContainer>
    )
}

export default Project;