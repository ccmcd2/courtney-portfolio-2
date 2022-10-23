import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import Test from "../img/royal-connor.jpg";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/realeather-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro"

const Realeather = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.RealeatherTitle} description={description.RealeatherDescription} type={description.RealeatherType} link="" date="Fall 2021" tools="Adobe XD"></ProjectIntro>
            </section>
            <section>
                <h2>User Flows</h2>
                <StyledLink style={{marginBottom: 20}}>View full user flows</StyledLink>
                <Step color={palette.color1} title="First" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color2} title="Second" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color3} title="Third" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color4} title="Fourth" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Etsy seller">
                    <ul>
                        <li>Browses product listings to see what is available for purchase</li>
                        <li>Follows the link to the Amazon store to purchase leather products</li>
                        <li>Searches store locations to find the closest store to them</li>
                        <li>Finds contact information to get in touch with the Realeather corporate team</li>
                        <li>Signs up for the newsletter to stay up to date on the leather working industry</li>
                        <li>Browses the Realeather newsletter for new ideas for leather crafts</li>
                        <li>Reads the education section to learn tips and tricks about using realeather products</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Beginning crafter">
                    <ul>
                        <li>Studies product information to compare different products before making a selection</li>
                        <li>Follows the link to the Amazon store to purchase leather products</li>
                        <li>Signs up for the newsletter to gain more knowledge about leather crafting</li>
                        <li>Visits the contact us page to find a phone number and office hours to get a representative to answer a question</li>
                        <li>Reads the education section to find projects and patterns to try</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color3} panelText="Advanced crafter">
                    <ul>
                        <li>Purchases new leather products on the products page to complete their projects</li>
                        <li>Studies the map to find the closest brick-and-mortar seller of Realeather products</li>
                        <li>Signs up for the newsletter to find inspiration for new leatherworking projects</li>
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
                <StyledLink>View live product</StyledLink>
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

export default Realeather;