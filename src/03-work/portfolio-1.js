import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import Test from "../img/royal-connor.jpg";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/portfolio-1-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro";
import UserFlow from "../img/portfolio-1-user-flow.pdf";

const Portfolio1 = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.Portfolio1Title} description={description.Portfolio1Description} type={description.Portfolio1Type} link="https://3350.ccm9483.uta.cloud/portfolio/index.html" date="Fall 2021" tools="Adobe XD, HTML, CSS, JavaScript"></ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 20}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="Read about me" description="The user follows a link to the about page and reads more about me."><p>1</p></Step>
                <Step color={palette.color2} title="View projects" description="The user visits the projects page, clicks the link to each project page, and reads more about each project."><p>2</p></Step>
                <Step color={palette.color3} title="Contact me" description="After visiting the project page, the user fills out the contact form and submits it."><p>3</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Potential employer">
                    <ul>
                        <li>Browses case studies to get a feel for my work</li>
                        <li>Reads descriptions of each case study to find out more about my work processes</li>
                        <li>Reads my about page to assess culture fit</li>
                        <li>Completes the contact form to request an interview and learn more about me</li>
                        <li>Reads work history to see how much experience I have</li>
                        <li>Views projects to find out what challenges are my favorite to tackle</li>
                        <li>Downloads resume to prepare for job interview</li>
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
                <StyledLink href="https://3350.ccm9483.uta.cloud/portfolio/index.html" target="_blank" alt="View live product">View live product</StyledLink>
                <StyledLink href="https://github.com/ccmcd2/courtney-portfolio-1" target="_blank" alt="Inspect code">Inspect code</StyledLink>
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

export default Portfolio1;