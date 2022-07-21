import React from "react";
import {Carousel} from '../components'
import { MdChevronLeft ,MdChevronRight ,MdEast} from 'react-icons/md';
import * as ROUTES from "../constants/routes"
import CarouselData from "../fixtures/carousel.json"

export default function CarouselContainer(){
    const slideLeft = () =>{

        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500 ;

    }

    const slideRight = () =>{

        var slider = document.getElementById("slider");
        slider.scrollLeft= slider.scrollLeft + 500 ;
        
    }

    return(

        <Carousel>
            <Carousel.HeadingColumn>
                <Carousel.Heading>
                    What to learn on fundital 
                    <span > LearningSpace.</span>
                    
                </Carousel.Heading>
                <div >
                    <Carousel.Link to={ROUTES.COURSELAB}>Go to fundital learning space  <MdEast/></Carousel.Link>
                </div>
                
            </Carousel.HeadingColumn>
            <Carousel.Item>
              <MdChevronLeft onClick={slideLeft}  size={40} className="left-icon"/>

              <Carousel.Slider id="slider">
                  { CarouselData.map((item) => (

                      <Carousel.Card key={item.id}>
                          <Carousel.Image url={item.image}/>
                          <Carousel.Title>{item.title}</Carousel.Title>
                          <Carousel.SubTitle>{item.subtitle}</Carousel.SubTitle>
                      </Carousel.Card>
                    
                  
                  ))}
              </Carousel.Slider>

              <MdChevronRight onClick={slideRight} size={40} className="right-icon"/>

            </Carousel.Item>

            <Carousel.HeadingColumn>
                
            </Carousel.HeadingColumn>
            
          </Carousel>
    )

}