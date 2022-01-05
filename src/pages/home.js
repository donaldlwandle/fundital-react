import React from "react";
import { JumbotronContainer } from "../containers/jumbotronContainer";
import { AccordionContainer } from "../containers/accordionContainer";
import { FooterContainer } from "../containers/footerContainer";
import HeaderContainer from "../containers/headerContainer";


export default function HomePage(){

    return(

        <>
          <HeaderContainer>

          </HeaderContainer>

          <JumbotronContainer/> 
          <AccordionContainer/>
          <FooterContainer/>
        </>


    );

}