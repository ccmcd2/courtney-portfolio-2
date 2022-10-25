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
import UserFlow from "../img/portfolio-2-user-flow.pdf";
import Wireframes from "../img/portfolio-2-wireframes.zip";
import Mobile from "../img/portfolio-2-wireframe-mobile-full.png";
import Desktop from "../img/portfolio-2-wireframe-desktop.png";
import WireframeDisplay from "../components/WireframeDisplay";

const Portfolio2 = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
            <ProjectIntro className="no-link"title={description.Portfolio2Title} description={description.Portfolio2Description} date="Fall 2022" tools="React, HTML, CSS, Figma" type={description.Portfolio2Type}></ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 20}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="View project pages" description="After reading the information on the home page, the user navigates to the individual project pages and views the available information about them."><p>1</p></Step>
                <Step color={palette.color2} title="Read about me" description="The user navigates to the about page and reads about me and my design philosophy."><p>2</p></Step>
                <Step color={palette.color3} title="Contact me" description="If the user is so inclined, they fill out and submit the form on my contact page."><p>3</p></Step>
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
                <StyledLink href="https://www.figma.com/file/zru6aoc1bE82k6UJg2wBA1/Portfolio-Website?node-id=1%3A84" target="_blank" alt="View all pages on Figma">View all pges on Figma</StyledLink>
                <StyledLink href={Wireframes} alt="Download all pages as PDF" target="_blank">Download all pages as PDF</StyledLink>
                <WireframeDisplay mobile={Mobile} desktop={Desktop}></WireframeDisplay>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink href="https://github.com/ccmcd2/courtney-portfolio-2" target="_blank" alt="Inspect code">Inspect code</StyledLink>
            </section>
            <section>
                <h2>Insights gained</h2>
                <h3>Challenges</h3>
                <p>One of the challenges I encountered while creating this website was picking the order in which to display my work. On one hand, my more recent work is generally better (the code is more efficient, the design is more intentional, the user experience makes more sense, etc.), but on the other hand, some of my earlier work shows off how far I have come in my web design/development journey!</p>
                <h3>What I would change</h3>
                <p>Eventually, I would like to find a way to make my carousel flow diagonally, like I designed it in my wireframes.</p>
                <h3>Accomplishments</h3>
                <p>I built a portfolio site that shows off all of my work in a way that I feel is true to myself and my personality, which is not something I have been able to say before.</p>
                <h3>What I learned</h3>
                <p>Since this was only my second project created with React, I had a lot to learn. The biggest thing that I learned was how to use the styled-components library. In previous projects, I have always just used a CSS behemoth document that I never really liked. The styled-components library offered the push I needed to finally get away from that habit.</p>
            </section>
        </div>
    )
}

export default Portfolio2;