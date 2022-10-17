import React from "react";
import * as palette from "../Variables";
import {FormField, TextArea} from "../components/FormField";
import Button2 from "./Button";

const ContactForm = () => {
    return (
        <form>
            <FormField For="name" id="name" name="name" label="Your name" type="text" placeholder="Your name" color={palette.color1}></FormField>
            <FormField For="email" id="email" name="email" label="Email address" type="text" placeholder="Email address" color={palette.color2}></FormField>
            <FormField For="phone" id="phone" name="phone" label="Phone number" type="text" placeholder="Phone number" color={palette.color3}></FormField>
            <TextArea For="message" label="Message" id="message" name="message" rows="5" placeholder="Message" color={palette.color4}></TextArea>
            <Button2 type="submit" text="Send"></Button2>
        </form>
    )
}

export default ContactForm;