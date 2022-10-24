import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import Test from "../img/royal-connor.jpg";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/c-and-w-antiques-hero2.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro";
import UserFlow from "../img/c-and-w-antiques-user-flow.pdf";
import Wireframes from "../img/c-and-w-antiques-wireframes.zip";
import Mobile from "../img/c-and-w-antiques-wireframe-mobile-full.png";
import Desktop from "../img/c-and-w-antiques-wireframe-desktop.png";
import WireframeDisplay from "../components/WireframeDisplay";

const CAndWAntiques = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.CAndWAntiquesTitle} description={description.CAndWAntiquesDescription} type={description.CAndWAntiquesType} link="https://3350.ccm9483.uta.cloud/c-and-w-redesign/" date="Fall 2021" tools="Adobe XD, HTML, CSS, JavaScript"></ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 20}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="Find items to purchase" description="After browsing items, the user picks out something they would like to purchase"><p>1</p></Step>
                <Step color={palette.color2} title="Reserve item" description="The user calls the store to reserve the item for pickup."><p>2</p></Step>
                <Step color={palette.color3} title="Get directions to store" description="The user navigates to the directions page to get directions to the store."><p>3</p></Step>
                <Step color={palette.color4} title="Pick up item" description="The user drives to the store, pays for the item, and takes it home with them."><p>4</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Potential customer">
                    <ul>
                        <li>Views listings to see what items are available for purchase</li>
                        <li>Reads store hours to plan a good time to visit</li>
                        <li>Reads the contact page to find a good number to call with specific questions</li>
                        <li>Browses the FAQ section to get more information on the buying process</li>
                        <li>Studies the map page to determine the fastest way to get to the store</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Potential seller">
                    <ul>
                        <li>Reads listing to compare what the the antique store currently sells to what they want to sell</li>
                        <li>Reads store hours to plan a good time to visit</li>
                        <li>eads the contact page to find a good number to call with specific questions</li>
                        <li>Studies the map page to determine how far they will have to drive to sell their antiques</li>
                        <li>Browses the FAQ section to get more information on the selling process</li>
                    </ul>
                </Accordion>
            </section>
            <section>
                <h2>Wireframes</h2>
                <StyledLink href={Wireframes} target="_blank" alt="Download all pages as PDF">Download all pages as PDF</StyledLink>
                <WireframeDisplay mobile={Mobile} desktop={Desktop}></WireframeDisplay>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink href="https://3350.ccm9483.uta.cloud/c-and-w-redesign/" target="_blank" alt="View live product">View live product</StyledLink>
                <StyledLink href="https://github.com/ccmcd2/c-and-w-antiques" alt="Inspect code" target="_blank">Inspect code</StyledLink>
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

export default CAndWAntiques;