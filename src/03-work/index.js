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

const Work = () => {
    return (
        <main>
            <section>
                <h1>Headline goes here</h1>
                <p>Intro paragraph goes here. Fusce congue, diam eu elementum luctus, mi magna mollis purus, et malesuada purus arcu eget quam. Quisque iaculis vitae augue ut euismod.</p>
            </section>
            <section>
                <Project image={DavidsBarbequeHome} alt="home page of David's Barbeque website" title="David's Barbeque website redesign" color={palette.color1} className="left">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/davids-barbeque" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={CAndWAntiquesHone} alt="home page of C &amp; W Antiques website" title="C &amp; W Antiques website redesign" color={palette.color2} className="right">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/c-and-w-antiques" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={CourtneyAndCaleHome} alt="home page of Courtney &amp; Cale website" title="Courtney + Cale website design" color={palette.color3} className="left">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/courtney-and-cale" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={GrandPrairiePublicHome} alt="home page of City of Grand Prairie's website" title="City of Grand Prairie website design &amp; management" color={palette.color4} className="right">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/city-of-grand-prairie-public" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={GrandPrairieIntranetHome} alt="home page of City of Grand Prairie's intranet" title="City of Grand Prairie intranet redesign" color={palette.color5} className="left">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/city-of-grand-prairie-intranet" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={Portfolio1Home} alt="home page of my first portfolio" title="My first portfolio website" color={palette.color1} className="right">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/portfolio-1" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={RealeatherHome} alt="home page of Realeather's website" title="Realeather website redesign" color={palette.color2} className="left">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/realeather" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={TCPHHome} alt="home page of Tarrant County Public Health's vaccine website" title="Tarrant County Public Health vaccine website design" color={palette.color3} className="right">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/tarrant-county-public-health" alt="View project" className="secondary">View project</StyledLink>
                </Project>
                <Project image={Test} alt="home page of this website" title="My second (and current) portfolio website design" color={palette.color4} className="left">
                    <p>Fusce mattis, ex id ultricies blandit, metus ex accumsan nunc, ut gravida neque nisi molestie dui. Donec varius, metus at semper imperdiet, ante tortor auctor purus, faucibus consectetur nulla arcu id lacus.</p>
                    <StyledLink href="/work/portfolio-2" alt="View project" className="secondary">View project</StyledLink>
                </Project>
            </section>
        </main>
    )
}

export default Work;