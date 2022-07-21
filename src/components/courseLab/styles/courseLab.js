import styled from "styled-components/macro"
import { Link as ReactRouterLink } from "react-router-dom";


export const Container = styled.div`
    padding-top: 75px;
    max-width:100%;

`;

export const Section = styled.div`
`;

export const Title = styled.p`
`;

export const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main";
    grid-template-columns: 35% 65%;
    column-gap: 30px;
    row-gap:20px;
    grid-template-row: auto;
    margin: 25px 0px;
    margin-left: 25px;
    
    

    

    @media(max-width: 1000px){
        display: flex;
        flex-direction: column-reverse;
        
        margin-left: 0px;
    }
`;

export const LeftSide = styled.div``;

export const Main = styled.div``;