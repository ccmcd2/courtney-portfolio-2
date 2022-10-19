import React from "react";
import * as palette from "../Variables";
import Portrait from "../img/portrait.jpg";
import StyledLink from "../components/StyledLink";

var content = "";

const mediaQuery = window.matchMedia('(min-width: 768px)')

if (mediaQuery.matches) {
    var content = "on the right";
} else {
    var content = "down below";
}


const About = () => {
    return (
        <main>
            <section>
                <h1>Headline goes here</h1>
                <div className="row">
                    <div className="col-xs-12 col-md-7">
                        <p>I am passionate about creating engaging and exciting websites that users love and understand. I have professional and academic experience in web development and web, user experience, and graphic design for restaurants, stores, governments, weddings, schools, and personal portfolios.</p>
                        <p>I am graduating from the University of Texas at Arlington in December 2022 with bachelor’s degrees in communication technology, advertising, and public relations; a minor in business administration; and a certificate in digital media. (That's me in the silly square cap {content}.) Although my education has provided me with a varied skillset, I plan to focus my career on web design and development.</p>
                        <p>Of course, technologies in this field are ever-changing, so I strive to continue learning. I've come a long way since <a href="https://ctec2350.ccm9483.uta.cloud/termproject/about.html" alt="my first website" target="_blank">my first website</a>&mdash;which is plagued with unoptimized images, awkward stylistic choices, poorly written copy, and the most uninspiring fonts known to man&mdash;and I am always looking for opportunities to improve.</p>
                        <p>I love working with teammates and clients who are driven, enthusiastic about their work, and eager to try new things. If you think we would be a good fit for each other, or you want to learn more about me, I’d love to <a href="/contact" alt="contact">hear from you</a>.</p>
                        <StyledLink href="/contact" alt="contact me">Contact me</StyledLink>
                        <StyledLink href="https://www.linkedin.com/in/c-mcd/" alt="connect with me" target="_blank">Connect with me</StyledLink>
                    </div>
                    <div className="col-xs-12 col-md-5" style={{height: "auto", width: "100%"}}>
                        <img src={Portrait}></img>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;