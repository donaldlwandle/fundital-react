import React, { createContext, useState ,useContext } from "react";
import {Title , Frame ,Item , Header , Inner , Container ,Body} from "../accordion/styles/accordion"

const ToggleContext = createContext();

export default function Accordion({children , ...restProps}){

    return (

        <Container {...restProps} >
            <Inner>
                {children}
            </Inner>
        </Container>
    )
};


Accordion.Title = function AccordionTitle ({children , ...restProps}){
    return <Title {...restProps}>{children}</Title>
};

Accordion.Frame = function AccordionFrame ({children , ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
};

Accordion.Item = function AccordionItem ({children , ...restProps}){
    const [toggleShow, setToggleShow] = useState(false)
    return (
        <ToggleContext.Provider value = {{toggleShow ,setToggleShow}}>
                <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>

    );
        
};

Accordion.Header = function AccordionHeader ({children , ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return (
        <Header onClick = {() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
            {children}
            
            { toggleShow ? (
                <img  src= "/images/icons/down-arrow.png" alt = "Close" />
            ) :(
                <img  src= "/images/icons/right-arrow.png" alt = "Open" />
            )}
        </Header>
    );
};

Accordion.Body = function AcordionBody({children , ...restProps}){
    const {toggleShow} = useContext(ToggleContext)

    if (toggleShow) {
        return <Body {...restProps}>{children}</Body>
    } 
    return null;
};

