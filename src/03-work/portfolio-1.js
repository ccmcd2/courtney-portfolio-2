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
import Wireframes from "../img/portfolio-1-wireframes.zip";
import Mobile from "../img/portfolio-1-wireframe-mobile-full.png";
import Desktop from "../img/portfolio-1-wireframe-desktop.png";
import WireframeDisplay from "../components/WireframeDisplay";

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
                <StyledLink href={Wireframes} target="_blank" alt="Download all pages as PDF">Download all pages as PDF</StyledLink>
                <WireframeDisplay mobile={Mobile} desktop={Desktop}></WireframeDisplay>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink style={{marginBottom: 20}} href="https://3350.ccm9483.uta.cloud/portfolio/index.html" target="_blank" alt="View live product">View live product</StyledLink>
                <StyledLink href="https://github.com/ccmcd2/courtney-portfolio-1" target="_blank" alt="Inspect code">Inspect code</StyledLink>
            </section>
            <section>
                <h2>Insights gained</h2>
                <h3>Challenges</h3>
                <p>This is what I consider to be my first real website, and it took a lot of trial and error to get it to a point that I was comfortable with it. Everything was a challenge, from establishing a design that made sense, to branding, to writing efficient and effective code.</p>
                <h3>What I would change</h3>
                <p>First and foremost, I would switch the order of the about section and the projects section, both on the home page and in the navigation. On a portfolio site, I think information about me should have been second to examples of my work.</p>
                <p>There are also lots of stylistic choices that could be improved upon, including hover effects, animations, backgrounds, and font sizes. Obviously, I have a new portfolio website for a reason.</p>
                <h3>Accomplishments</h3>
                <p>Though it's not perfect by any means, creating my first real website was a big accomplishment for me. And, it helped me land a job, so it did exactly what it was intended to do.</p>
                <h3>What I learned</h3>
                <p>I learned so much with this project and had so much fun along the way. I mastered the art of the flexbox, learned how to work with imported fonts, used a little bit of JavaScript for the first time, and learned how to host a website on a custom domain.</p>
            </section>
        </div>
    )
}

export default Portfolio1;