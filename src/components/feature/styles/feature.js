import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 165px 45px;
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px ;
    font-size: 50px;
    font-weight:bold;
    margin: auto;

    @media(max-width: 600px){
        font-size: 30px;
    }
`;

export const Subtitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight:normal;
    margin: 16;

    @media(max-width: 600px){
        font-size: 18px;
    }

`;