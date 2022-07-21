import React from "react";

import AccordionContainer from "../containers/accordionContainer";
import HeaderContainer from "../containers/headerContainer";
import FooterContainer from "../containers/footerContainer";
import JumbotronContainer from "../containers/jumbotronContainer";
import CarouselContainer from "../containers/carouselContainer";
import HeaderrContainer from "../containers/HeaderrContainer";
import GlobeContainer from "../containers/globeContainer";





export default function HomePage(){

    return(

        <>

          <HeaderrContainer  bg={"#0a102a"} page={"home"}/>
          {/* <HeaderContainer bg={"#0a102a"} page={"home"}/> */}

          <GlobeContainer bg={"#0a102a"}  page={"home"}/>
          

          <CarouselContainer/>

          <JumbotronContainer/>

          <AccordionContainer/>
          
          <FooterContainer/>
          
        </>


    );

}