import React, {useState, useEffect} from "react";
import StyledLink from "../components/StyledLink";
import Test from "../img/royal-connor.jpg";
import Accordion from "../components/Accordion";
import * as palette from "../Variables";
import Phone from "../components/Phone";
import Step from "../components/Step";
import Glasses from "../img/glasses-icon.svg";
import Brain from "../img/brain-icon.svg";
import Paintbrush from "../img/paintbrush-icon.svg";
import Wrench from "../img/wrench-icon.svg";
import Checkmark from "../img/checkmark-icon.svg";
import IntranetWireframeMobile from "../img/intranet-wireframe-mobile.png";
import GPPublicWireframeMobile from "../img/gp-public-wireframe-mobile.png";
import CourtneyAndCaleWireframeMobile from "../img/courtney-and-cale-wireframe-mobile.png";
import DavidsBarbequeWireframeMobile from "../img/davids-barbeque-wireframe-mobile.png";
import Portfolio1WireframeMobile from "../img/portfolio-1-wireframe-mobile.png";
import RealeatherWireframeMobile from "../img/realeather-wireframe-mobile.png";
import TCPHWireframeMobile from "../img/tcph-wireframe-mobile.png";
import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import JobDescription from "../components/JobDescription";
import * as description from "../03-work/ProjectDescriptions";
import { HashLink as Link } from "react-router-hash-link";
import Portrait2 from "../img/portrait-2.jpg";

const Index = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const links = {
        [0]: <a href="/work/city-of-grand-prairie-intranet" alt="City of Grand Prairie intranet redesign">the City of Grand Prairie's intranet</a>,
        [1]: <a href="/work/davids-barbeque" alt="David's Barbeque website redesign">David's Barbeque</a>,
        [2]: <a href="/work/courtney-and-cale" alt="Courtney + Cale website design">Courtney + Cale</a>,
        [3]: <a href="/work/portfolio-1" alt="My first portfolio website design">my first portfolio website</a>,
        [4]: <a href="/work/city-of-grand-prairie-public" alt="City of Grand Prairie website design &amp; management">the City of Grand Prairie's public website</a>,
        [5]: <a href="/work/tarrant-county-public-health" alt="Tarrant County Public Health vaccine website design">Tarrant County Public Health</a>,
        [6]: <a href="/work/portfolio-2" alt="My current portfolio website design">my current portfolio website</a>,
        [7]: <a href="/work/realeather" alt="Realeather website redesign">Realeather</a>
    };

    return (
        <main>
            <section>
                <h1>Creating websites users love</h1>
                <p style={{maxWidth: 657, zIndex: 2}}>I’m <strong>Courtney</strong>, a UX/UI designer and developer with experience implementing innovative solutions for {links[currentIndex]}.</p>
                <StyledLink style={{zIndex: 2}}href="/work" alt="View my work">View my work</StyledLink>
                </section>
                <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                    <Phone href="/work/city-of-grand-prairie-intranet" alt="City of Grand Prairie intranet redesign" image={IntranetWireframeMobile} projectTitle={description.GPIntranetTitle}></Phone>
                    <Phone href="/work/davids-barbeque" alt="David's Barbeque website redesign" image={DavidsBarbequeWireframeMobile} projectTitle={description.DavidsBarbequeTitle}></Phone>
                    <Phone href="/work/courtney-and-cale" alt="Courtney + Cale website design" image={CourtneyAndCaleWireframeMobile} projectTitle={description.CourtneyAndCaleTitle}></Phone>
                    <Phone href="/work/portfolio-1" alt="My first portfolio website design" image={Portfolio1WireframeMobile} projectTitle={description.Portfolio1Title}></Phone>
                    <Phone href="/work/city-of-grand-prairie-public" alt="City of Grand Prairie website design &amp; management" image={GPPublicWireframeMobile} projectTitle={description.GPPublicTitle}></Phone>
                    <Phone href="/work/tarrant-county-public-health" alt="Tarrant County Public Health vaccine website design" image={TCPHWireframeMobile} projectTitle={description.TCPHTitle}></Phone>
                    <Phone href="/work/portfolio-2" alt="My second portfolio website design" image={Test} projectTitle={description.Portfolio2Title}></Phone>
                    <Phone href="/work/realeather" alt="Realeather website redesign" image={RealeatherWireframeMobile} projectTitle={description.RealeatherTitle}></Phone>
                </Carousel>
            <section>
                <h1>What I bring to the table</h1>
                <h2>My strengths:</h2>
                <Accordion color={palette.color1} panelText="Prototyping">
                    <p>I create functional, high-fidelity wireframes and prototypes so that my designs are ideated, laid out, and approved before I touch my code editor. This ensures that I am able to write efficient code and produce a product with a strong, unified brand.</p>
                </Accordion>
                <Accordion color={palette.color2} panelText="Responsive, mobile-first design">
                    <p>In 2022, there is no reason why people should have to turn their phones sideways to properly view a website. I design and develop with the mobile user in mind&mdash;they shouldn't have to wait, endlessly scroll, hunt, pinch, or squint to understand or enjoy my products. <Link to="/about#design-philosophy">Read my full design philosophy.</Link></p>
                </Accordion>
                <Accordion color={palette.color3} panelText="Problem solving">
                    <p>Like most problems, issues that I face when coding often require some extra imaginiation (and some good old-fashioned trial and error) to fix. Luckily, I enjoy challenges. I try not to let myself design based on what I do or don't know how to code, so when it comes time to develop, I often get to learn something new.</p>
                </Accordion>
                <Accordion color={palette.color4} panelText="Attention to detail">
                    <p>I take pride in my work, so it is important to me that it is free from errors. I make an effort to keep track of the small details, including the seemingly minute ones that can take a design to the next level.</p>
                </Accordion>
                <h2 style={{marginTop: 40}}>My favorite tools:</h2>
                <p>I use lots of programs and technologies to see my projects through from start to finish. For design, I love to use Figma, Axure RP, Adobe XD, Adobe Illustrator, and Adobe Photoshop. For development, I use HTML, CSS, Javascript, and React.</p>
                <h2>Inspect my work</h2>
                <p><StyledLink href="https://github.com/ccmcd2" alt="My code on GitHub" target="_blank">My code on Github</StyledLink></p>
            </section>
            <section>
                <h1>My creative process</h1>
                <Step color={palette.color1} title="Research" description={["To create the most effective product, it is necessary for me to research competitors, primary and secondary users, and the client’s goals.",<br/>,<br/>, "I also look for examples of what has been done before, other products that target users are used to, and real or potential problems that will need to be solved. I am then able to synthesize this information to write user flows and jobs-to-be-done for the product."]}>
                    <img src={Glasses} alt="glasses icon"></img>
                </Step>
                <Step color={palette.color2} title="Brainstorm" description={["My research serves as a guide for the planning phase—I rank tasks by importance (from both the user’s and client’s point of view). I know that the most important tasks need to be have the biggest role on the website.",<br/>,<br/>, "Sometimes, if I am stuck during brainstorming, it helps me to use the worst possible idea method, in which I imagine the worst possible solution and think through how I would fix it."]}>
                    <img src={Brain} alt="brain icon"></img>
                </Step>
                <Step color={palette.color3} title="Create" description="This is my favorite part! I enjoy getting to put together all of my ideas and visualizations in a way that is meaningful, useful, and engaging.">
                    <img src={Paintbrush} alt="paintbrush icon"></img>
                </Step>
                <Step color={palette.color4} title="Modify" description="The process of creating something new from start to finish is never linear. After stepping away from my work, I go back and look for ways it can be refined. I also make changes based on feedback from clients or users who have tested the product.">
                    <img src={Wrench} alt="wrench icon"></img>
                </Step>
                <Step color={palette.color5} title="Deliver" description="Once all the changes have been made, I tie up any loose ends and either send the finished product to the client or publish it myself.">
                    <img src={Checkmark} alt="checkmark icon"></img>
                </Step>
            </section>
            <section>
                <h1>What I've done before</h1>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <JobDescription color={palette.color1} jobTitle="Web Developer &amp; Designer" companyDate="City of Grand Prairie, TX &#x2022; Jan 2022 - Present" jobDescription="Manage content and design of 1,100+ pages across 3 websites."></JobDescription>
                        <JobDescription color={palette.color2} jobTitle="Front End Web Developer" companyDate="UT Arlington &#x2022; March - Aug 2021" jobDescription="Made daily updates to 5 department sites to maximize accessibility and user experience."></JobDescription>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <JobDescription color={palette.color3} jobTitle="Digital Marketing Intern" companyDate="Children's Lighthouse &#x2022; May - Dec 2021" jobDescription="Created effective web and social media content for 60+ franchisees."></JobDescription>
                        <JobDescription color={palette.color4} jobTitle="Graphic Designer" companyDate="American Advertising Federation &#x2022; Aug - Dec 2021" jobDescription="Designed weekly graphics for social media channels and distribution to speakers."></JobDescription>
                    </div>
                </div>
                <StyledLink href="/work" alt="View my work">View my work</StyledLink>
            </section>
            <section>
                <h1>Let's chit-chat!</h1>
                <div className="row">
                    <div className="col-xs-12 col-md-7" style={{marginBottom: 20}}>
                        <p>I’m always eager to start another project, solve another problem, or make another friend. Let me know how I can help!</p>
                        <ContactForm></ContactForm>
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <img src={Portrait2} style={{height: 592.5}}alt="Portrait of me. I am smiling at the camera"></img>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Index;