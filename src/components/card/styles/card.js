import styled from "styled-components/macro";


export const Title = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-left: 7px;
    margin-right: 56px;


`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin bottom: 50px;
    box-sizing: border-box;
    margin-left: 20px;

`;



export const Courses= styled.div`
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    overflow: hidden;
    scroll-behavior: smooth;

    &:-webkit-scrollbar{
        display: none;
    }
    

`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;

`;

export const CourseItem = styled.div`
    width: 300px;
    cursor: pointer;
    background-color:#141c2c;
    border-radius: 10px;
    margin-left: 7px;
    margin-right: 7px;
    padding-bottom: 5px;
    box-shadow: 0 -1px 40px rgba(0,0,0, .12);
    display: inline-block;

    @media (max-width: 800px) {
        width: 200px;
        border-radius: 5px;
        
    }
`;

export const CourseImage = styled.img`
    width: 100%;
    height: 220px;
    border-radius: 10px 10px 0px 0px;
    object-fit: cover;

    @media (max-width: 1000px) {
        
    }

    @media (max-width: 800px) {
        height: 120px;
        border-radius: 5px 5px 0px 0px;
        
    }

`;

export const CourseTitle = styled.p`
    margin: 5px 0px 5px 10px;
    font-weight: 500;
    font-size:16px;

    @media (max-width: 1000px) {
        
    }

    @media (max-width: 800px) {
        
    }
`;

export const CourseProvider = styled.p`
    margin: 10px 0px 5px 10px;
    opacity: 0.7;
    font-size: 13px;
    
`;

export const CourseRating = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin: 10px 0px 5px 10px;
    
`;