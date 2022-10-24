import React from "react";
import * as palette from "../Variables";
import styled from "styled-components";

const WireframesContainer = styled.div`
    margin-top: ${palette.standardMargin};
    
    .mobile {
        margin-bottom: ${palette.standardMargin};
        max-width: 390px;
    }

    div p {
        margin-bottom: 10px;
    }

    div img {
        filter: drop-shadow(0 0 5px #555);
    }

    @media (min-width: 768px) {
        .mobile {
            margin-bottom: 0;
        }
    }
`;

const WireframeDisplay = ({mobile, desktop}) => {
    
    return (
        <WireframesContainer className="row">
            <div className="col-xs-12 col-md-3 mobile">
                <p><span>Mobile</span></p>
                <img src={mobile} alt="Mobile wireframe"></img>
            </div>
            <div className="col-xs-12 col-md-9 desktop">
                <p><span>Desktop</span></p>
                <img src={desktop} alt="Desktop wireframe"></img>
            </div>
        </WireframesContainer>
    )
}

export default WireframeDisplay;