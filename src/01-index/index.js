import React from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Test from "../img/royal-connor.jpg";
import Accordion from "../components/Accordion";
import * as palette from "../Variables";
import FormField from "../components/FormField";
import Phone from "../components/Phone";
import Step from "../components/Step";

const Index = () => {
    return (
        <div>
            <section>
                <p>This is my index page.</p>
                <Button>Link text</Button>
                <Icon color={palette.color1}><p>1</p></Icon>
                <Icon color={palette.color2}><p>1</p></Icon>
                <Icon color={palette.color3}><p>1</p></Icon>
                <Icon color={palette.color4}><p>1</p></Icon>
                <Icon color={palette.color5}><p>1</p></Icon>
                <Accordion panelText="Text goes here" color={palette.color1}></Accordion>
                <Accordion panelText="Text goes here" color={palette.color2}></Accordion>
                <Accordion panelText="Text goes here" color={palette.color3}></Accordion>
                <Accordion panelText="Text goes here" color={palette.color4}></Accordion>
                <Accordion panelText="Text goes here" color={palette.color5}></Accordion>
                <FormField color={palette.color1}></FormField>
                <FormField color={palette.color2}></FormField>
                <FormField color={palette.color3}></FormField>
                <FormField color={palette.color4}></FormField>
                <FormField color={palette.color5}></FormField>
                <Phone image={Test}></Phone>
                <Step title="Research" description="Nullam a consectetur purus, at feugiat quam. Vivamus sed luctus nulla, nec condimentum odio. Donec feugiat eros non ex interdum, nec facilisis magna lobortis." color={palette.color1}><p>1</p></Step>
            <p><br></br><br></br></p>
            </section>
        </div>
    )
}

export default Index;