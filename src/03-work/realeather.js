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
import UserFlow from "../img/realeather-user-flow.pdf";
import Wireframes from "../img/realeather-wireframe.pdf";
import Mobile from "../img/realeather-wireframe-mobile-full.png";
import Desktop from "../img/realeather-wireframe-desktop.png";
import WireframeDisplay from "../components/WireframeDisplay";
import Plan from "../img/realeather-marketing-plan.pdf";

const Realeather = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro className="no-link" title={description.RealeatherTitle} description={description.RealeatherDescription} type={description.RealeatherType} date="Fall 2021" tools="Adobe XD">
                    <p>The full marketing communications plan created by my team can be viewed <a href={Plan} alt="marketing communications plan" target="_blank">here</a>. You can also view an archive of Realeather's <a href="https://web.archive.org/web/20211201235139/https://www.realeather.com/" alt="old website" target="_blank">website at the time</a>.</p>
                </ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 20}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="Read projects and ideas" description="The user follows a link to the Projects &amp; Ideas page and views project inspiration."><p>1</p></Step>
                <Step color={palette.color2} title="Shop for products" description="The user searches for a specific item or browses all items to find what they're looking for."><p>2</p></Step>
                <Step color={palette.color3} title="Check out" description="After adding things to the cart, the user goes through the check out process."><p>3</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Etsy seller">
                    <ul>
                        <li>Browses product listings to see what is available for purchase</li>
                        <li>Follows the link to the Amazon store to purchase leather products</li>
                        <li>Searches store locations to find the closest store to them</li>
                        <li>Finds contact information to get in touch with the Realeather corporate team</li>
                        <li>Browses the Realeather newsletter for new ideas for leather crafts</li>
                        <li>Reads the education section to learn tips and tricks about using realeather products</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Beginning crafter">
                    <ul>
                        <li>Studies product information to compare different products before making a selection</li>
                        <li>Follows the link to the Amazon store to purchase leather products</li>
                        <li>Visits the contact us page to find a phone number and office hours to get a representative to answer a question</li>
                        <li>Reads the education section to find projects and patterns to try</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color3} panelText="Advanced crafter">
                    <ul>
                        <li>Purchases new leather products on the products page to complete their projects</li>
                        <li>Studies the map to find the closest brick-and-mortar seller of Realeather products</li>
                    </ul>
                </Accordion>
            </section>
            <section>
                <h2>Wireframes</h2>
                <StyledLink href={Wireframes} target="_blank" alt="Download as PDF">Download as PDF</StyledLink>
                <WireframeDisplay mobile={Mobile} desktop={Desktop}></WireframeDisplay>
            </section>
            <section>
                <h2>Insights gained</h2>
                <h3>Challenges</h3>
                <p>Organizing the site in a way that made sense was challenging. The <a href="https://web.archive.org/web/20211201235139/https://www.realeather.com/" alt="old website" target="_blank">old website</a> had three different navigations that were very confusing, so I had to come up with a way to fix it. The site was also just too busy visually, so I tried to simplify it some in my redesign.</p>
                <h3>What I would change</h3>
                <p>Looking back at the project now, I would add a space for users to sign up for a newsletter to keep them coming back to the site. I would also create a rotating banner at the top of the page rather than using a static image.</p>
                <h3>Accomplishments</h3>
                <p>I created a new home page design to make it easier for potential Realeather users to get inspiration for new projects, find the products they're looking for, and have their work promoted.</p>
                <h3>What I learned</h3>
                <p>Other than learning more about the leather industry than I ever wanted to know, I learned a lot about secondary research. Since we didn't have members of the target audience available to conduct primary research, my team had to find other ways of learning about Realeather consumers. Our research is detailed in the full <a href={Plan} target="_blank" alt="marketing communications plan">marketing communications plan</a>.</p>
            </section>
        </div>
    )
}

export default Realeather;