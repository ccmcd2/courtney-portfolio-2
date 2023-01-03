import React from "react";
import * as palette from "../Variables";
import {FormField, TextArea} from "../components/FormField";
import Button2 from "./Button";

const ContactForm = () => {
    return (
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScfkEFEMTNsE-PgF5gJYPnO-ggD4TN3s1EZPQX9gStHWMX85Q/formResponse" target="_self" method="POST">
            <FormField For="entry.80257374" id="entry.80257374" name="entry.80257374" label="Your name" type="text" placeholder="Your name" color={palette.color1}></FormField>
            <FormField For="entry.1210988473" id="entry.1210988473" name="entry.1210988473" label="Email address" type="text" placeholder="Email address" color={palette.color2}></FormField>
            <FormField For="entry.1766523192" id="entry.1766523192" name="entry.1766523192" label="Phone number" type="text" placeholder="Phone number" color={palette.color3}></FormField>
            <TextArea For="entry.1697901963" label="Message" id="entry.1697901963" name="entry.1697901963" rows="5" placeholder="Message" color={palette.color4}></TextArea>
            <Button2 type="submit" text="Send"></Button2>
        </form>
    )
}

export default ContactForm;