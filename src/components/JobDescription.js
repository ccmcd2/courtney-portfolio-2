import React from "react";
import styled from "styled-components";
import * as palette from "../Variables";

const JobDescriptionContainer = styled.div`

    margin-bottom: 30px;

    h4 {
        margin-bottom: 5px;
    }

    p.company-date {
        color: ${({color}) => color};
        font-weight: 700;
        margin-bottom: 10px;

        @media (min-width: 768px) {
            margin-bottom: 20px;
        }
    }
`;

const JobDescription = ({jobTitle, jobDescription, companyDate, color}) => {
    return (
        <JobDescriptionContainer color={color}>
            <h4>{jobTitle}</h4>
            <p className="company-date">{companyDate}</p>
            <p>{jobDescription}</p>
        </JobDescriptionContainer>
    )
}

export default JobDescription;