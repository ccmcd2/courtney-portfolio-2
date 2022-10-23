import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import Test from "../img/royal-connor.jpg";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/portfolio-2-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro";

const Portfolio2 = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
            <ProjectIntro title={description.Portfolio2Title} description={description.Portfolio2Description} link="" date="Fall 2022" tools="React, HTML, CSS, Figma"></ProjectIntro>
            </section>
            <section>
                <h2>User Flows</h2>
                <StyledLink>View full user flows</StyledLink>
                <Step color={palette.color1} title="First" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color2} title="Second" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color3} title="Third" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
                <Step color={palette.color4} title="Fourth" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis."><p>1</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Potential employer">
                    <ul>
                        <li>Browses case studies to get a feel for my work</li>
                        <li>Reads descriptions of each case study to find out more about my work processes</li>
                        <li>Reads my about page to assess culture fit</li>
                        <li>Resizes their browser window to see if my work is responsive</li>
                        <li>Views my GitHub to see code for my project</li>
                        <li>Inspects my code to see if I follow best practices</li>
                        <li>Completes the contact form to request an interview and learn more about me</li>
                        <li>Reads work history to see how much experience I have</li>
                        <li>Views projects to find out what challenges are my favorite to tackle</li>
                        <li>Views wireframes on Figma to see if I am proficient in using the platform</li>
                        <li>Views wireframes to compare them to the final products</li>
                        <li>Downloads resume to prepare for job interview</li>
                        <li>Views my GitHub to see how active I am on the platform</li>
                        <li>Visits my Linkedin page to learn more about me and see how I interact with others online</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Interested client">
                    <ul>
                        <li>Browses case studies to confirm if I can perform the job</li>
                        <li>Browses case studies to view work I've done for similar clients</li>
                        <li>Completes the contact form to inquire about my services</li>
                        <li>Views my about page to verify credibility</li>
                        <li>Visits my Linkedin page to see if we have any mutual connections</li>
                        <li>Resizes their browser window to see if my work is responsive</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color3} panelText="Colleague">
                    <ul>
                        <li>Views my case studies to verify what I am able to do</li>
                        <li>Views my Linkedin page to add me as a connection</li>
                        <li>Shares my portfolio to recommend me to someone else</li>
                        <li>Reads my about page to see if we would make good collaborators for a project</li>
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

export default Portfolio2;