import React from "react";
import { Container ,Group ,Title ,Courses ,CourseItem ,CourseImage , CourseTitle , CourseProvider , CourseRating} from "./styles/card";

export default function Card({children , ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    )
}

Card.Group = function CardGroup({children , ...restProps}){
    return<Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({children , ...restProps}){
    return<Title {...restProps}>{children}</Title>
}

Card.Courses = function CardCourses({children , ...restProps}){
    return<Courses {...restProps}>{children}</Courses>
}

Card.CourseItem = function CardGroup({children , ...restProps}){
    return<CourseItem{...restProps}>{children}</CourseItem>
}

Card.Group = function CardGroup({children , ...restProps}){
    return<Group {...restProps}>{children}</Group>
}

Card.CourseImage = function CardCourseImage({children , ...restProps}){
    return<CourseImage {...restProps}/>
}

Card.CourseTitle = function CardCourseTitle({children , ...restProps}){
    return<CourseTitle {...restProps}>{children}</CourseTitle>
}

Card.CourseProvider = function CardCourseProvider({children , ...restProps}){
    return<CourseProvider {...restProps}>{children}</CourseProvider>
}

Card.CourseRating = function CardCourseRating({children , ...restProps}){
    return<CourseRating {...restProps}>{children}</CourseRating>
}


