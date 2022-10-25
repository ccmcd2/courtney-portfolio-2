import React from "react";
import * as palette from "../Variables";
import StyledLink from "../components/StyledLink";
import Project from "../components/Project";
import DavidsBarbequeHome from "../img/davids-barbeque-home.png";
import GrandPrairieIntranetHome from "../img/gp-intranet-home.png";
import GrandPrairiePublicHome from "../img/gp-public-home.png";
import CourtneyAndCaleHome from "../img/courtney-and-cale-home.png";
import Portfolio1Home from "../img/portfolio-1-home.png";
import RealeatherHome from "../img/realeather-home.png";
import TCPHHome from "../img/tcph-home.png";
import Portfolio2Home from "../img/portfolio-2-home.png";
import * as description from "../03-work/ProjectDescriptions";

const Work = () => {
    return (
        <main>
            <section>
                <h1 style={{marginBottom: -10}}>My work (made with love)</h1>
            </section>
            <section>
                <Project image={DavidsBarbequeHome} alt="home page of David's Barbeque website" title={description.DavidsBarbequeTitle} type={description.DavidsBarbequeType} color={palette.color1} className="left">
                    <p>{description.DavidsBarbequeDescription}</p>
                    <StyledLink href="/work/davids-barbeque" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={CourtneyAndCaleHome} alt="home page of Courtney &amp; Cale website" title={description.CourtneyAndCaleTitle} type={description.CourtneyAndCaleType}color={palette.color2} className="left">
                    <p>{description.CourtneyAndCaleDescription}</p>
                    <StyledLink href="/work/courtney-and-cale" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={GrandPrairiePublicHome} alt="home page of City of Grand Prairie's website" title={description.GPPublicTitle} type={description.GPPublicType} color={palette.color3} className="right">
                    <p>{description.GPPublicDescription}</p>
                    <StyledLink href="/work/city-of-grand-prairie-public" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={GrandPrairieIntranetHome} alt="home page of City of Grand Prairie's intranet" title={description.GPIntranetTitle} type={description.GPIntranetType}color={palette.color4} className="left">
                    <p>{description.GPIntranetDescription}</p>
                    <StyledLink href="/work/city-of-grand-prairie-intranet" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={Portfolio1Home} alt="home page of my first portfolio" title={description.Portfolio1Title} type={description.Portfolio1Type} color={palette.color5} className="right">
                    <p>{description.Portfolio1Description}</p>
                    <StyledLink href="/work/portfolio-1" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={RealeatherHome} alt="home page of Realeather's website" title={description.RealeatherTitle} type={description.RealeatherType} color={palette.color1} className="left">
                    <p>{description.RealeatherDescription}</p>
                    <StyledLink href="/work/realeather" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={TCPHHome} alt="home page of Tarrant County Public Health's vaccine website" title={description.TCPHTitle} type={description.TCPHType} color={palette.color2} className="right">
                    <p>{description.TCPHDescription}</p>
                    <StyledLink href="/work/tarrant-county-public-health" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={Portfolio2Home} alt="home page of this website" title={description.Portfolio2Title} type={description.Portfolio2Type} color={palette.color3} className="left">
                    <p>{description.Portfolio2Description}</p>
                    <StyledLink href="/work/portfolio-2" alt="View project" className="secondary">View project</StyledLink>
                </Project>
            </section>
        </main>
    )
}

export default Work;