import React from "react";
import {Card} from '../components'
import { useContent } from "../hooks/use-content"
import coursesFilter from "../utils/courses-filter";

export default  function CoursesContainer(){

    const {series} = useContent('series');
    const courses = coursesFilter(series);
    console.log(series)
    console.log(courses.courses);
    console.log(courses);


    
    return (

        


        <Card.Group>
            {courses.courses.map((genreItem) =>(

                <Card key={`${'courses'}-${genreItem.title.toLowerCase()}`}>
                    <Card.Title>{genreItem.title}</Card.Title>

                    <Card.Courses>
                        {genreItem.data.map((item) =>(
                            <Card.CourseItem key={item.docId} item={item}>
                                <Card.CourseImage src={`/images/${'series'}/${item.genre}/${item.slug}/small.jpg`}/>
                                <Card.CourseTitle>{item.title}</Card.CourseTitle>
                                <Card.CourseProvider>{item.slug}</Card.CourseProvider>
                                <Card.CourseRating>{item.maturity}</Card.CourseRating>
                            </Card.CourseItem>
                        ))}
                    </Card.Courses>
                </Card>
            ))}

        </Card.Group>
    )
}