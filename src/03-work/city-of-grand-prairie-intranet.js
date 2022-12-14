import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import Test from "../img/royal-connor.jpg";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/gp-intranet-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro"
import UserFlow from "../img/gp-intranet-user-flow.pdf";
import Wireframe from "../img/gp-intranet-wireframe.pdf";
import Mobile from "../img/gp-intranet-wireframe-mobile.png";
import Desktop from "../img/gp-intranet-wireframe-desktop.png";
import WireframeDisplay from "../components/WireframeDisplay";
import OldVersion from "../img/gp-intranet-old.pdf";

const GrandPrairieIntranet = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro className="no-link" title={description.GPIntranetTitle} description={description.GPIntranetDescription} type={description.GPIntranetType} date="September 2022" tools="Figma">
                </ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 20}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="View pay stub" description="After logging in, the user enters their employee ID to view their pay stub."><p>1</p></Step>
                <Step color={palette.color2} title="View payroll calendar" description="After closing the pay stub popup, the uer clicks the link to view the payroll calendar."><p>2</p></Step>
                <Step color={palette.color3} title="Fill out Raving Fans form" description="After closing the payroll calendar popup, the user fills out a Raving Fans form (filling out this form is a way of commending another employee for quality work&mdash;the commended employee receives a gift card)."><p>3</p></Step>
                <Step color={palette.color4} title="Read news stories" description="The user browses the news stories and reads any that catch their eye."><p>4</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Full-time employee">
                    <ul>
                        <li>Reads news stories to keep up with the latest events and changes</li>
                        <li>Submits a service request to to get something in their office fixed</li>
                        <li>Enters employee ID to view pay stubs</li>
                        <li>Visits the Human Resources section to confirm some information about their benefits</li>
                        <li>Visits the Purchasing section to make sure they are following policies about credit card use</li>
                        <li>Completes a form to commend one of their coworkers for quality work</li>
                        <li>Searches the employee directory to find the phone number of a colleague</li>
                        <li>Views their personal leave calendar to see when they last used vacation time and to see how many vacation hours they currently have available</li>
                        <li>Downloads a leave request form to fill out and send to their supervisor</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Part-time employee">
                    <ul>
                        <li>Enters employee ID to view pay stubs</li>
                        <li>Reads news stories to keep up with the latest events and changes</li>
                        <li>Submits a service request to get IT to fix their computer</li>
                        <li>Completes a form to commend one of their coworkrs for quality work</li>
                        <li>Views the payroll calendar to find out when the next pay day is</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color3} panelText="Department director">
                    <ul>
                        <li>Completes a form to commend one of their employees for quality work</li>
                        <li>Visits their department's page to make sure all information is up to date</li>
                        <li>Submits a service request to have IT set up a computer for their new hire</li>
                        <li>Views top news to make sure their department's policy changes are being promoted properly</li>
                    </ul>
                </Accordion>
            </section>
            <section>
                <h2>Wireframes</h2>
                <StyledLink style={{marginBottom: 20}} href="https://www.figma.com/file/iw1HjE5Gra9uGao2bqjgK1/Raving-Fans-Wireframe-(Copy)?node-id=1%3A8" target="_blank" alt="View on Figma">View on Figma</StyledLink>
                <StyledLink href={Wireframe} target="_blank" alt="Download as PDF">Download as PDF</StyledLink>
                <WireframeDisplay mobile={Mobile} desktop={Desktop}></WireframeDisplay>
            </section>
            <section>
                <h2>Insights gained</h2>
                <h3>Challenges</h3>
                <p>The biggest challenge with this project was finding a way to streamline information&mdash;the <a href={OldVersion} target="_blank" alt="previous version">previous version</a> of the home page was too bulky. The visual hierarchy was lacking; there were so many different boxes that users had trouble figuring out where to look. I had to find a way to give a concise view of all of the necessary topics without leaving out any information.</p>
                <h3>What I would change</h3>
                <p>Most of the employees I talked to said their main use for Raving Fans was to either submit a service request, find a certain form, or check their pay stub. I would have moved the "Pay and Leave" section higher up on the page, since that is what users are looking for, but the city wanted to emphasize the slideshow and news section.</p>
                <p>I also don't love the categories of the secondary navigation, but I decided it was best not to change too much, since most users are already used to the navigation being the way it is.</p>
                <h3>Accomplishments</h3>
                <p>I produced a mobile-friendly design for the intranet's home page that Grand Prairie is going to implement in their redesign of the site. I also simplified the user experience by consolidating the mass of grey boxes that was present in the <a href={OldVersion} target="_blank" alt="previous version">previous version</a> of the site. Finally, I tweaked the color scheme and updated the text with the city's new typeface.</p>
                <h3>What I learned</h3>
                <p>This project helped me improve my client communication skills. It is one of the first projects that I did for non-academic, non-self-serving purposes. I appreciated talking back and forth with the client and getting feedback from current users.</p>
            </section>
        </div>
    )
}

export default GrandPrairieIntranet;