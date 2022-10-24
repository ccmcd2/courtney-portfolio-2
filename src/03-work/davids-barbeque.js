import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import Test from "../img/royal-connor.jpg";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/davids-barbeque-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro";
import UserFlow from "../img/davids-barbeque-user-flow.pdf";
import Wireframes from "../img/davids-barbeque-wireframes.zip"
import Mobile from "../img/davids-barbeque-wireframe-mobile-full.png";
import Desktop from "../img/davids-barbeque-wireframe-desktop.png";
import WireframeDisplay from "../components/WireframeDisplay";

const DavidsBarbeque = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.DavidsBarbequeTitle} description={description.DavidsBarbequeDescription} type={description.DavidsBarbequeType} date="Spring 2022" tools="Figma, HTML, CSS, PHP" link="https://ctec4309.ccm9483.uta.cloud/term-project/"></ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 20}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="Browse menu" description="The user navigates to the menu page and browses the menu."><p>1</p></Step>
                <Step color={palette.color2} title="Order online" description="The user adds desired items to the cart, goes to the checkout page, enters their information, and submits the order."><p>2</p></Step>
                <Step color={palette.color3} title="Pick up order" description="After getting directions on the website, the user drives to the restaurant and retreives their order."><p>3</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Potential customer">
                    <ul>
                        <li>Studies menu to determine if they want to try the restaurant</li>
                        <li>Observes restaurant hours to decide if they have enough time to visit today</li>
                        <li>Observes restaurant hours to plan a future visit</li>
                        <li>Reads reviews to see what past customers have said about the restaurant</li>
                        <li>Signs up for newsletter to get alerts on discounts and events</li>
                        <li>Read the about page to learn more about the restaurant’s past</li>
                        <li>Browses information on the homepage to see what is most important about the restaurant</li>
                        <li>Reads the FAQs to find information about catering</li>
                        <li>Browses the contact page to find a phone number for the restaurant</li>
                        <li>Visits social media pages to see if any of their friends follow the restaurant</li>
                        <li>Visits social media pages to view more pictures of the food</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Community group leader">
                    <ul>
                        <li>Studies menu to ensure that there are enough options for everyone to have something to eat regardless of diet</li>
                        <li>Signs up for newsletter to stay up to date on discounts and other news</li>
                        <li>Observes restaurant hours to make sure their party comes when the restaurant is open</li>
                        <li>Browses the FAQs to find information about catering</li>
                        <li>Browses the FAQs to find out if there are discounts offered for large groups</li>
                        <li>Looks at pictures of the restaurant on to see if there is a separate space inside for large groups</li>
                        <li>Looks for the restaurant's phone number to call before arriving for dinner with a group</li>
                        <li>Visits social media pages to see if there are any exclusive discounts offered</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color3} panelText="Third-party delivery driver">
                    <ul>
                        <li>Views directions to the restaurant to find the fastest way there</li>
                        <li>Calls the restaurant to ask if the DoorDash order is ready yet</li>
                        <li>Reads menu to find something to order while waiting to pick up someone’s food for a delivery</li>
                        <li>Studies the FAQs to see if there are special rules for DoorDash drivers</li>
                    </ul>
                </Accordion>
            </section>
            <section>
                <h2>Wireframes</h2>
                <StyledLink href="https://www.figma.com/file/naNhx0WdKyXx6m07es6RSy/David's-Barbeque?node-id=0%3A1" target="_blank" alt="View all pages on Figma">View all pages on Figma</StyledLink>
                <StyledLink href={Wireframes} target="_blank" alt="Download all pages as PDF">Download all pages as PDF</StyledLink>
                <WireframeDisplay mobile={Mobile} desktop={Desktop}></WireframeDisplay>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink href="https://ctec4309.ccm9483.uta.cloud/term-project/" target="_blank" alt="View live product">View live product</StyledLink>
                <StyledLink href="https://github.com/ccmcd2/davids-barbeque" target="_blank" alt="Inspect code">Inspect code</StyledLink>
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

export default DavidsBarbeque;