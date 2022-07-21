import React from "react";
import {Container, Section , Title , Layout , LeftSide , Main} from "./styles/courseLab";

export default function CourseLab({children , ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    )
}

CourseLab.Section = function CourseLabSection({children , ...restProps}){
    return <Section {...restProps}>{children}</Section>
}

CourseLab.Main = function CourseLabMain({children , ...restProps}){
    return <Main {...restProps}>{children}</Main>
}

CourseLab.LeftSide = function CourseLabLeftSide({children , ...restProps}){
    return <Main {...restProps}>{children}</Main>
}

CourseLab.Layout = function CourseLabLayout ({children , ...restProps}){
    return <Layout {...restProps}>{children}</Layout>
}

