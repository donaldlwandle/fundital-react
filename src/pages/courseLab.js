import React from 'react'
import HeaderrContainer from "../containers/HeaderrContainer";
import FooterContainer from "../containers/footerContainer";
import CourseLabContainer from '../containers/courseLabContainer';

export default function CourseLab(){

    return(
        <>
            <HeaderrContainer  bg={"#080a0e"} page={''}/>
            <CourseLabContainer/>
            <FooterContainer/>
        </>
    );
}
