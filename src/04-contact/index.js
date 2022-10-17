import React from "react";
import * as palette from "../Variables";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <main>
            <section>
                <h1>Let's chit-chat!</h1>
                <p>I’m always eager to start another project, solve another problem, or make another friend. Let me know how I can help!</p>
                <ContactForm></ContactForm>
            </section>
        </main>
    )
}

export default Contact;