import React from "react";
import StyledLink from "../components/StyledLink";
import Icon from "../components/Icon";
import Test from "../img/royal-connor.jpg";
import Accordion from "../components/Accordion";
import * as palette from "../Variables";
import {FormField, TextArea} from "../components/FormField";
import Phone from "../components/Phone";
import Step from "../components/Step";
import Glasses from "../img/glasses-icon.svg";
import Brain from "../img/brain-icon.svg";
import Paintbrush from "../img/paintbrush-icon.svg";
import Wrench from "../img/wrench-icon.svg";
import Checkmark from "../img/checkmark-icon.svg";
import Button2 from "../components/Button";

const Index = () => {
    return (
        <div>
            <section></section>
            <section>
                <h1>Headline goes here</h1>
                <p>I’m <strong>Courtney</strong>, a UX/UI designer and developer with experience creating and implementing innovative solutions for David’s Barbeque.</p>
                <Phone image={Test}></Phone>
                <Phone image={Test}></Phone>
                <Phone image={Test}></Phone>
                <Phone image={Test}></Phone>
                <Phone image={Test}></Phone>
                <Phone image={Test}></Phone>
                <Phone image={Test}></Phone>
                <Phone image={Test}></Phone>
            </section>
            <section>
                <h1>How I can help</h1>
                <h2>My core skills:</h2>
                <Accordion color={palette.color1} panelText="Skill 1" dropdownText="Description of skill goes here."></Accordion>
                <Accordion color={palette.color2} panelText="Skill 2" dropdownText="Description of skill goes here."></Accordion>
                <Accordion color={palette.color3} panelText="Skill 3" dropdownText="Description of skill goes here."></Accordion>
                <Accordion color={palette.color4} panelText="Skill 4" dropdownText="Description of skill goes here."></Accordion>
                <h2>My favorite tools:</h2>
                <p>I use lots of programs and technologies to see my projects through from start to finish. For design, I love to use Figma, Axure RP, Adobe XD, Adobe Illustrator, and Adobe Photoshop. For development, I use HTML, CSS/Sass, Javascript, and React.</p>
                <h2>Inspect my work</h2>
                <p><StyledLink>My designs on Figma</StyledLink>&nbsp;&nbsp;&nbsp;<StyledLink>My code on Github</StyledLink></p>
            </section>
            <section>
                <h1>My creative process</h1>
                <Step color={palette.color1} title="Research" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.">
                    <img src={Glasses} alt="glasses icon"></img>
                </Step>
                <Step color={palette.color2} title="Brainstorm" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.">
                    <img src={Brain} alt="brain icon"></img>
                </Step>
                <Step color={palette.color3} title="Create" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.">
                    <img src={Paintbrush} alt="paintbrush icon"></img>
                </Step>
                <Step color={palette.color4} title="Modify" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.">
                    <img src={Wrench} alt="wrench icon"></img>
                </Step>
                <Step color={palette.color5} title="Deliver" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis.">
                    <img src={Checkmark} alt="checkmark icon"></img>
                </Step>
            </section>
            <section>
                <h1>What I've done before</h1>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <h4>Web Developer &amp; Designer</h4>
                        <p><span className="color1">City of Grand Prairie, TX &#x2022; Jan 2022 - Present</span></p>
                        <p>Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio.</p>
                        <h4>Front End Web Developer</h4>
                        <p><span className="color2">UT Arlington &#x2022; March - Aug 2021</span></p>
                        <p>Made daily updates to 5 department sites to maximize accessibility and user experience.</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <h4>Digital Marketing Intern</h4>
                        <p><span className="color3">Chilren's Lighthouse &#x2022; May - Dec 2021</span></p>
                        <p>Created effective web and social media content for 60+ franchisees.</p>
                        <h4>Graphic Designer</h4>
                        <p><span className="color4">American Advertising Federation &#x2022; Aug - Dec 2021</span></p>
                        <p>Created striking graphics for social media channels and distribution to speakers.</p>
                    </div>
                </div>
            </section>
            <section>
                <h1>Let's chit-chat!</h1>
                <p>I’m always eager to start another project, solve another problem, or make another friend. Let me know how I can help!</p>
                <form>
                    <FormField For="name" id="name" name="name" label="Your name" type="text" placeholder="Your name" color={palette.color1}></FormField>
                    <FormField For="email" id="email" name="email" label="Email address" type="text" placeholder="Email address" color={palette.color2}></FormField>
                    <FormField For="phone" id="phone" name="phone" label="Phone number" type="text" placeholder="Phone number" color={palette.color3}></FormField>
                    <TextArea For="message" label="Message" id="message" name="message" rows="5" placeholder="Message" color={palette.color4}></TextArea>
                    <Button2 type="submit" text="Send"></Button2>
                </form>
            </section>
        </div>
    )
}

export default Index;