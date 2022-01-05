import React from "react";

import {Accordion, Optform} from "../components"
import faqsData from "../fixtures/faqs.json"

export function AccordionContainer(){

    return(

        <Accordion>

            <Accordion.Title>Frequently asked questions</Accordion.Title>

            <Accordion.Frame>

                {faqsData.map(item => 
                    <Accordion.Item key = {item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                    
                )}


            </Accordion.Frame>

            

            <Optform>

                <Optform.Input placeholder = 'Enter your Email' />
                <Optform.Button>Try it Now</Optform.Button>

                <Optform.Break/>

                <Optform.Text>Ready to watch? enter your email to create or restart your membership</Optform.Text>
            </Optform>
        </Accordion>
    );
}