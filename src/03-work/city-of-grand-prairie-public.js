import React from "react";
import * as palette from "../Variables";
import {Hero, HeroSpacer} from "../components/Hero";
import Test from "../img/royal-connor.jpg";
import StyledLink from "../components/StyledLink";
import Step from "../components/Step";
import Accordion from "../components/Accordion";
import HeroImage from "../img/gp-public-hero.jpg";
import * as description from "../03-work/ProjectDescriptions";
import ProjectIntro from "../components/ProjectIntro";
import UserFlow from "../img/gp-public-user-flow.pdf";

const GrandPrairiePublic = () => {
    return (
        <div>
            <Hero image={HeroImage}></Hero>
            <HeroSpacer></HeroSpacer>
            <section>
                <ProjectIntro title={description.GPPublicTitle} description={description.GPPublicDescription} type={description.GPPublicType} link="https://www.gptx.org" date="January 2022 - Present" tools="OpenCities (CMS), OpenForms, HTML, CSS, JavaScript"></ProjectIntro>
            </section>
            <section>
                <h2>User Flow</h2>
                <StyledLink style={{marginBottom: 20}} href={UserFlow} target="_blank">View full user flow</StyledLink>
                <Step color={palette.color1} title="Report an issue" description="After finding a specific department's page, the user fills out a form to report an issue."><p>1</p></Step>
                <Step color={palette.color2} title="Read news stories" description="The user navigates back to the home page and reads any news stories that catch their eye."><p>2</p></Step>
                <Step color={palette.color3} title="Browse upcoming events" description="The user looks for any upcoming events that may be interesting."><p>3</p></Step>
                <Step color={palette.color4} title="Pay bill" description="The user fills out an online form to pay their water bill."><p>4</p></Step>
            </section>
            <section>
                <h2>Jobs to be done</h2>
                <Accordion color={palette.color1} panelText="Resident">
                    <ul>
                        <li>Searches for the department or page they need</li>
                        <li>Completes a form on the "Report an Issue" page to solve a proble they are facing</li>
                        <li>Reads the contact page to find the main phone number for the city</li>
                        <li>Visits a department's page to find a specific phone number to call to get help</li>
                        <li>Views list of adoptable pets to find their next furry friend</li>
                        <li>Enters their address to find events and popular locations in their neighborhood</li>
                        <li>Searches the library catalog for a book they want to read</li>
                        <li>Reads information on the water department's pages to find out how they can pay their water bill</li>
                        <li>Fills out a form to pay the traffic citation online</li>
                        <li>Browses job listings to see if they are qualified for any jobs with the city</li>
                        <li>Reads top news stories to stay up to date on the happenings in their community</li>
                        <li>Browses upcoming events to find something to do in the coming week</li>
                        <li>Completes an online form to contact their local City Council member</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color2} panelText="Business owner">
                    <ul>
                        <li>Fills out a form to apply for a permit for construction at their business</li>
                        <li>Calls the water department to get more information about applying for commercial water service</li>
                        <li>Reads about Clean Prairie to see if their business qualifies as a Clean Prairie company</li>
                        <li>Views event listings on the City Counil page to find the date and location of the next City Council meeting</li>
                        <li>Completes a form to apply for commercial garbage collection</li>
                        <li>Watches a video to learn how to become a vendor for the city</li>
                        <li>Browses available commercial properties to find a new property to purchase</li>
                        <li>Apply to be a vendor at the Farmers Market to sell their products to local residents</li>
                    </ul>
                </Accordion>
                <Accordion color={palette.color3} panelText="City employee">
                    <ul>
                        <li>Searches the website to find a link to the employee intranet</li>
                        <li>Visits their department's page to make sure information is up to date</li>
                        <li>Reads contact information on another department's page to find a phone number for a specific colleague</li>
                        <li>Searches the Commmunity Calendar to find out when the next public meeting is happening</li>
                        <li>Reads the latest news stories to stay up to date on what is happening in the city</li>
                        <li>Browses upcoming events to see if there is anything their families might enjoy doing on the weekend</li>
                    </ul>
                </Accordion>
            </section>
            <section>
                <h2>Product</h2>
                <StyledLink href="https://www.gptx.org" target="_blank" alt="View live product">View live product</StyledLink>
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

export default GrandPrairiePublic;