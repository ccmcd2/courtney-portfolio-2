import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/courtney-and-cale-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro";

const CourtneyAndCale = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.CourtneyAndCaleTitle} description={description.CourtneyAndCaleDescription} link="https://courtneyandcale.com" date="Summer 2022" tools="React, HTML, CSS, Figma"></ProjectIntro>
            </section>
            <section>
                <h2>User Flows</h2>
                <StyledLink style={{marginBottom: 25}}>View full user flows</StyledLink>
                <Step color={palette.color1} title="First" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color2} title="Second" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color3} title="Third" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color4} title="Fourth" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="User title" dropdownText="text goes here"></Accordion>
                <Accordion color={palette.color2} panelText="User title" dropdownText="text goes here"></Accordion>
                <Accordion color={palette.color3} panelText="User title" dropdownText="text goes here"></Accordion>
            </section>
            <section>
                <h2>Wireframes</h2>
                <StyledLink>View on Figma</StyledLink>
                <StyledLink>Download as PDF</StyledLink>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink href="https://courtneyandcale.com" target="_blank" alt="View live product">View live product</StyledLink>
                <StyledLink>Inspect code</StyledLink>
            </section>
            <section>
                <h2>Insights gained</h2>
                <h3>Challenges</h3>
                <p>Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.</p>
                <h3>My solutions</h3>
                <p>Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.</p>
                <h3>What I would change</h3>
                <p>Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.</p>
                <h3>Accomplishments</h3>
                <p>Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.</p>
                <h3>What I learned</h3>
                <p>Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.</p>
            </section>
        </div>
    )
}

export default CourtneyAndCale;