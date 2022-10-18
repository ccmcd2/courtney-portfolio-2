import React from "react";
import * as palette from "../Variables";
import StyledLink from "../components/StyledLink";
import Project from "../components/Project";
import DavidsBarbequeHome from "../img/davids-barbeque-home.png";
import CAndWAntiquesHone from "../img/c-and-w-antiques-home.png";
import GrandPrairieIntranetHome from "../img/gp-intranet-home.png";
import GrandPrairiePublicHome from "../img/gp-public-home.png";
import CourtneyAndCaleHome from "../img/courtney-and-cale-home.png";
import Portfolio1Home from "../img/portfolio-1-home.png";
import RealeatherHome from "../img/realeather-home.png";
import TCPHHome from "../img/tcph-home.png";
import Test from "../img/royal-connor.jpg";
import * as description from "../03-work/ProjectDescriptions";

const Work = () => {
    return (
        <main>
            <section>
                <h1>Headline goes here</h1>
                <p></p>
            </section>
            <section>
                <Project image={DavidsBarbequeHome} alt="home page of David's Barbeque website" title={description.DavidsBarbequeTitle} color={palette.color1} className="left">
                    <p>{description.DavidsBarbequeDescription}</p>
                    <StyledLink href="/work/davids-barbeque" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={CAndWAntiquesHone} alt="home page of C &amp; W Antiques website" title={description.CAndWAntiquesTitle} color={palette.color2} className="right">
                    <p>{description.CAndWAntiquesDescription}</p>
                    <StyledLink href="/work/c-and-w-antiques" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={CourtneyAndCaleHome} alt="home page of Courtney &amp; Cale website" title={description.CourtneyAndCaleTitle} color={palette.color3} className="left">
                    <p>{description.CourtneyAndCaleDescription}</p>
                    <StyledLink href="/work/courtney-and-cale" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={GrandPrairiePublicHome} alt="home page of City of Grand Prairie's website" title={description.GPPublicTitle} color={palette.color4} className="right">
                    <p>{description.GPPublicDescription}</p>
                    <StyledLink href="/work/city-of-grand-prairie-public" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={GrandPrairieIntranetHome} alt="home page of City of Grand Prairie's intranet" title={description.GPIntranetTitle} color={palette.color5} className="left">
                    <p>{description.GPIntranetDescription}</p>
                    <StyledLink href="/work/city-of-grand-prairie-intranet" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={Portfolio1Home} alt="home page of my first portfolio" title={description.Portfolio1Title} color={palette.color1} className="right">
                    <p>{description.Portfolio1Description}</p>
                    <StyledLink href="/work/portfolio-1" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={RealeatherHome} alt="home page of Realeather's website" title={description.RealeatherTitle} color={palette.color2} className="left">
                    <p>{description.RealeatherDescription}</p>
                    <StyledLink href="/work/realeather" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={TCPHHome} alt="home page of Tarrant County Public Health's vaccine website" title={description.TCPHTitle} color={palette.color3} className="right">
                    <p>{description.TCPHDescription}</p>
                    <StyledLink href="/work/tarrant-county-public-health" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={Test} alt="home page of this website" title={description.Portfolio2Title} color={palette.color4} className="left">
                    <p>{description.Portfolio2Description}</p>
                    <StyledLink href="/work/portfolio-2" alt="View project" className="secondary">View project</StyledLink>
                </Project>
            </section>
        </main>
    )
}

export default Work;