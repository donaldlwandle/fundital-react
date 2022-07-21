import React from "react";
import CoursesContainer from "../containers/coursesContainer";
import HeaderrContainer from "../containers/HeaderrContainer";
import FooterContainer from "../containers/footerContainer";
import GlobeContainer from "../containers/globeContainer";


export default function CoursesPage(){

    
    
    return(
        <>
            
            <HeaderrContainer  bg={"#080a0e"} page={'courses'}/>
            <GlobeContainer bg={"#080a0e"}  page={"courses"}/>
            <CoursesContainer />
            <FooterContainer/>
        </>
    );
}