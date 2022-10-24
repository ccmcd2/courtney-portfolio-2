import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import Test from "../img/royal-connor.jpg";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/tcph-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro";
import UserFlow from "../img/tcph-user-flow.pdf";

const TCPH = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.TCPHTitle} description={description.TCPHDescription} type={description.TCPHType} link="https://3350.ccm9483.uta.cloud/tarrant-county-vaccine-website/" date="Fall 2021" tools="Adobe XD, HTML, CSS, JavaScript"></ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 20}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="Read FAQs" description="The user navigates to the FAQ and reads answers in various categories."><p>1</p></Step>
                <Step color={palette.color2} title="Read about misinformation" description="The user visits the misinformation page and reads about common misconceptions and how to recognize misinformation"><p>2</p></Step>
                <Step color={palette.color3} title="Schedule vaccine appointment" description="The user visits a third-party site and sets up an appointment to receive the vaccine."><p>3</p></Step>
                <Step color={palette.color4} title="Get vaccine" description="After making an appointment, the user receives their vaccine."><p>4</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Unvaccinated person">
                    <ul>
                        <li>Follows link to sign up to get a vaccine</li>
                        <li>Browses the home page to see common misconceptions about COVID-19 vaccines debunked</li>
                        <li>Visits the CDC website to find more information</li>
                        <li>Reads the misinformation section to help them determine which of the rumors they have been hearing are misinformation</li>
                        <li>Visits the FAQ section to get some of their questions about vaccines answered</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Vaccinated person">
                    <ul>
                        <li>Shares website with their unvaccinated friends to help them find trustworthy information about the COVID-19 vaccie</li>
                        <li>Reads misinformation section to confirm their beliefs about the COVID-19 vaccine</li>
                        <li>Studies the side effects of the vaccine to determine if what they are experiencing is normal</li>
                        <li>Follows the link to the CDC's website to find more information about vaccines</li>
                    </ul>
                </Accordion>
            </section>
            <section>
                <h2>Wireframes</h2>
                <StyledLink>View on Figma</StyledLink>
                <StyledLink>Download as PDF</StyledLink>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink href="https://3350.ccm9483.uta.cloud/tarrant-county-vaccine-website/" alt="View live product" target="_blank">View live product</StyledLink>
                <StyledLink href="https://github.com/ccmcd2/tcph-vaccine-hesitancy" target="_blank" alt="Inspect code">Inspect code</StyledLink>
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

export default TCPH;