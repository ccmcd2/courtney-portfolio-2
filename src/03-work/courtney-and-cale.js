import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/courtney-and-cale-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro";
import UserFlow from "../img/courtney-and-cale-user-flow.pdf";
import Wireframes from "../img/courtney-and-cale-wireframes.zip";
import Mobile from "../img/courtney-and-cale-wireframe-mobile-full.png";
import Desktop from "../img/courtney-and-cale-wireframe-desktop.png";
import WireframeDisplay from "../components/WireframeDisplay";

const CourtneyAndCale = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.CourtneyAndCaleTitle} description={description.CourtneyAndCaleDescription} link="https://courtneyandcale.com" date="Summer 2022" tools="React, HTML, CSS, Figma" type={description.CourtneyAndCaleType}></ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 25}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="Find important wedding information" description="The user reads key information for the wedding, including the date, location, and dress code."><p>1</p></Step>
                <Step color={palette.color2} title="RSVP" description="The user navigates to the RSVP page, fills out the RSVP form, and submits it."><p>2</p></Step>
                <Step color={palette.color3} title="Buy a gift" description="After RSVPing, the user visits the Registry page. They click the link to view the Amazon registry and buy a gift via Amazon."><p>3</p></Step>
                <Step color={palette.color4} title="Read our story" description="The user navigates to the Our Story page to learn more about our history as a couple."><p>4</p></Step>
                <Step color={palette.color5} title="Browse FAQs" description="The user visits the FAQ page and reads the available answers."><p>5</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Wedding guest">
                    <ul>
                        <li>Completes RSVP form to ensure their party gets seats and meals at the wedding</li>
                        <li>Reads frequently asked questions to make sure they’re prepared</li>
                        <li>Looks for directions to the venue to make sure they don’t get lost</li>
                        <li>Browses dress code to determine what they will wear</li>
                        <li>Visits details page to verify information about the wedding</li>
                        <li>Browses the registry to find a gift to purchase for the couple</li>
                        <li>Reads love story to learn more about the couple's history</li>
                        <li>Views photos of the couple to see where they got engaged</li>
                        <li>Checks the home page to remember what day the wedding is on</li>
                        <li>Looks at wedding info page to see pictures of the wedding venue</li>
                        <li>Reads the contact section of the website to get in touch with the bride and groom</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Wedding party member">
                    <ul>
                        <li>Completes RSVP form to make sure their plus-one is accounted for at the wedding</li>
                        <li>Looks for directions to the venue to decide when to leave to get to the rehearsal dinner on time</li>
                        <li>Browses dress code to get ideas for what their family can wear</li>
                        <li>Reads love story to verify when the couple started dating</li>
                        <li>Studies FAQs to find out if they can take pictures at the ceremony</li>
                        <li>Reads FAQs to see who will be at the bachelor/bachelorette party</li>
                        <li>Visits detials page to make sure they understood the rules for plus-ones</li>
                        <li>Browses registry to purchase a gift for the couple</li>
                        <li>Browses the wedding info page to see if there is information about the rehearsal dinner</li>
                        <li>Reads the contact section to get the couple’s shared email address</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color3} panelText="Vendor">
                    <ul>
                        <li>Reads the wedding information to find directions to the venue</li>
                        <li>Studies the FAQs to determine where they should go on the wedding day</li>
                        <li>Examines pictures of the venue to determine where to set up</li>
                        <li>Looks at pictures of the couple to be able to recognize the bride and groom on the wedding day</li>
                        <li>Browses the details page to find the dress code for the event</li>
                        <li>Reads the contact section to record contact info for the couple</li>
                    </ul>
                </Accordion>
            </section>
            <section>
                <h2>Wireframes</h2>
                <StyledLink style={{marginBottom: 20}} href="https://www.figma.com/file/guH9kJwjBDAv5RTDKuY4zn/Courtney-%2B-Cale?node-id=2%3A22" target="_blank" alt="View all pages on Figma">View all pages on Figma</StyledLink>
                <StyledLink href={Wireframes}>Download all pages as PDF</StyledLink>
                <WireframeDisplay mobile={Mobile} desktop={Desktop}></WireframeDisplay>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink style={{marginBottom: 20}} href="https://courtneyandcale.com" target="_blank" alt="View live product">View live product</StyledLink>
                <StyledLink href="https://github.com/ccmcd2/courtney-and-cale" target="_blank" alt="Inspect code">Inspect code</StyledLink>
            </section>
            <section>
                <h2>Insights gained</h2>
                <h3>Challenges</h3>
                <p>The hardest part of this project for me was actually coming up with the information to put on the page. Since I didn't have a strict deadline, I very much enjoyed taking my time designing and developing it.</p>
                <h3>What I would change</h3>
                <p>I mostly have the site how I want it, so there is not much I would change. I plan on adding an RSVP page and call to action when the day of the wedding gets closer.</p>
                <h3>Accomplishments</h3>
                <p>I created a website that users can navigate to learn more about my wedding. This is also my first project that I built in React, and I am proud of it.</p>
                <h3>What I learned</h3>
                <p>Since this was my first time using React, I learned a lot about it in the making of this project. Some firsts include: building reusable components (goodbye copy and paste!), creating a countdown component, and creating a tabbed component using a state hook.</p>
            </section>
        </div>
    )
}

export default CourtneyAndCale;