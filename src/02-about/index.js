import React, { useState, useEffect, useRef } from 'react'
import * as palette from "../Variables";
import Portrait from "../img/portrait.jpg";
import StyledLink from "../components/StyledLink";
import { SizeMe } from 'react-sizeme'

var content = "";

const mediaQuery = window.matchMedia('(min-width: 768px)')

if (mediaQuery.matches) {
    var content = "on the right";
} else {
    var content = "down below";
}

const About = () => {

    const [height, setHeight] = useState(0);

    return (
        <main>
            <section>
                <h1>Creative. Driven. Educated.</h1>
                <div className="row">
                    <SizeMe monitorHeight={true}>{({ size }) => {
                        if(size.height !== height){
                            setHeight(size.height);
                        }
                        console.log(size);
                        return (
                            <div className="col-xs-12 col-md-7" style={{marginBottom: 20}}>
                                <p>I am passionate about creating engaging and exciting websites that users love and understand. I have professional and academic experience in web development and web, user experience, and graphic design for restaurants, stores, governments, weddings, schools, and personal portfolios.</p>
                                <p>I am graduating from the University of Texas at Arlington in December 2022 with bachelor’s degrees in communication technology, advertising, and public relations; a minor in business administration; and a certificate in digital media. (That's me in the silly square cap {content}.)</p>
                                <p>Although my education has provided me with a varied skillset, I plan to focus my career on web design and development.</p>
                                <p>Of course, technologies in this field are ever-changing, so I strive to continue learning. I've come a long way since <a href="https://ctec2350.ccm9483.uta.cloud/termproject/about.html" alt="my very first website" target="_blank">my first website</a>&mdash;which is plagued with unoptimized images, awkward stylistic choices, poorly written copy, and the most uninspiring fonts known to man&mdash;and I am always looking for opportunities to improve.</p>
                                <p>I love working with teammates and clients who are driven, enthusiastic about their work, and eager to try new things. If you think we would be a good fit for each other, or you want to learn more about me, I’d love to <a href="/contact" alt="contact">hear from you</a>.</p>
                                <StyledLink style={{marginBottom: 20}} href="/contact" alt="contact me">Contact me</StyledLink>
                                <StyledLink href="https://www.linkedin.com/in/c-mcd/" alt="connect with me" target="_blank">Connect on LinkedIn</StyledLink>
                            </div>
                        );
                    }}</SizeMe>
                    
                    <div className="col-xs-12 col-md-5" style={{overflow: "hidden"}} id="col2">
                        <img src={Portrait} style={{height: height}}></img>
                    </div>
                </div>
            </section>
            <section id="design-philosophy">
                <h1>My design philosophy</h1>
                <h2>Build things to last</h2>
                <p>Whether it's furniture, cars, or electronics, getting new products is often annoying and cumbersome. Everything should be designed with the intention that it will be used for a long time, even if technologies change.</p>
                <h2>Think like the user</h2>
                <p>If everything was made just for me, all food would be dairy free, women's pants would have deep pockets, and this website would contain a lot more pink. Unfortunately, that is not the case. Designers must consider the end user of a product and design around their needs, skills, and knowledge. Products should be tested along the way to make sure they are meeting expectations.</p>
                <h2>Make it work</h2>
                <p>Prioritizing beauty over usability often leads to products that are confusing, annoying, and ultimately unusable. Make sure that the function of your product is recognizable and accessible right off the bat.</p>
                <h2>Stay consistent</h2>
                <p>Users expect consistency in all aspects of a product. They also rely on it working similarly to other products they have used, and they hate being frustrated by unpredictability.</p>
                <h2>Be nice!</h2>
                <p>Nobody wants to be yelled at, manipulated, stalked, blamed, interrupted, or made to feel stupid, especially by something they paid money for. Be respectful by designing your product with gentle language, sounds, and visuals.</p>
            </section>
        </main>
    )
}

export default About;