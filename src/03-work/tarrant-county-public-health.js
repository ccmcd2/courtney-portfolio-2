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
import Wireframes from "../img/tcph-wireframes.zip";
import Mobile from "../img/tcph-wireframe-mobile-full.png";
import Desktop from "../img/tcph-wireframe-desktop.png";
import WireframeDisplay from "../components/WireframeDisplay";
import CommPlan from "../img/tcph-communications-plan.pdf";

const TCPH = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.TCPHTitle} description={description.TCPHDescription} type={description.TCPHType} link="https://3350.ccm9483.uta.cloud/tarrant-county-vaccine-website/" date="Fall 2021" tools="Adobe XD, HTML, CSS, JavaScript">
                    <p>The comprehensive communications plan can be viewed <a href={CommPlan} alt="comprehensive communications plan" target="_blank">here</a>.</p>
                </ProjectIntro>
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
                <StyledLink href={Wireframes} target="_blank" alt="Download all pages as PDF">Download all pages as PDF</StyledLink>
                <WireframeDisplay mobile={Mobile} desktop={Desktop}></WireframeDisplay>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink style={{marginBottom: 20}} href="https://3350.ccm9483.uta.cloud/tarrant-county-vaccine-website/" alt="View live product" target="_blank">View live product</StyledLink>
                <StyledLink href="https://github.com/ccmcd2/tcph-vaccine-hesitancy" target="_blank" alt="Inspect code">Inspect code</StyledLink>
            </section>
            <section>
                <h2>Insights gained</h2>
                <h3>Challenges</h3>
                <p>If you compare the final product to the wireframes, you'll notice they don't match completely. I had trouble getting the white box on the desktop view to be the same height as the sum of the green and blue boxes.</p>
                <p>I also had trouble with the hover effect for the FAQ boxes&mdash;they are a bit glitchy.</p>
                <h3>What I would change</h3>
                <p>Other than my inefficent code, I would make some changes to the FAQ page. If I were doing this project again, I would keep the user on the same page rather than creating a new page for each question. I would also make sure to use the pointer cursor for all buttons and links, and I would not make all of the text center-aligned.</p>
                <h3>Accomplishments</h3>
                <p>I created a mock website that could be used to help residents of Tarrant County discern truths about the COVID-19 from falsehood and ultimately get vaccinated.</p>
                <h3>What I learned</h3>
                <p>I learned a lot about conducting primary research with this project. My team created a survey and conducted focus groups to learn more about Hispanic Tarrant County residents, our target audience. I used our findings about their preferred news sources, concerns about the vaccine, and trust in governments and medical professionals to tailor the user experience.</p>
            </section>
        </div>
    )
}

export default TCPH;