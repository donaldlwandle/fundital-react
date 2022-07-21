import React from "react";

import { Container ,Item,Card ,Slider ,Image , Title ,SubTitle , Heading ,HeadingColumn,Link } from "./styles/carousel";

export default function Carousel({children , ...restProps}){

    return (
        <Container {...restProps}>{children} </Container>
    )
}

Carousel.Item = function CarouselItem({children , ...restProps}){
    return<Item {...restProps}>{children}</Item>
}

Carousel.Card = function CarouselCard({children , ...restProps}){
    return<Card {...restProps}>{children}</Card>
}

Carousel.Slider = function CarouselSlider({children , ...restProps}){
    return<Slider{...restProps}>{children}</Slider>
}

Carousel.Image = function CarouselImage({url , ...restProps}){
    return<Image image={url} {...restProps} />
}

Carousel.SubTitle = function CarouselSubTitle({children , ...restProps}){
    return<SubTitle{...restProps}>{children}</SubTitle>
}

Carousel.Title = function CarouselTitle({children , ...restProps}){
    return<Title{...restProps}>{children}</Title>
}

Carousel.Heading = function CarouselHeading({children , ...restProps}){
    return<Heading{...restProps}>{children}</Heading>
}

Carousel.HeadingColumn = function CarouselHeadingColumn({children , ...restProps}){
    return<HeadingColumn{...restProps}>{children}</HeadingColumn>
}

Carousel.Link = function CarouselLink({children , ...restProps}){
    return<Link{...restProps}>{children}</Link>
}