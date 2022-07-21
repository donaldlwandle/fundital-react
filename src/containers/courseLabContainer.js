import React from "react";
import { CourseLab , Main } from "../components";
import LeftSide from "../components/leftside/leftside";


export default function CourseLabContainer(){
    return(
        <CourseLab>
            <CourseLab.Section>
                
            </CourseLab.Section>

            <CourseLab.Layout>
                <LeftSide/>
                <Main/>
            </CourseLab.Layout>
        </CourseLab>
    );
}