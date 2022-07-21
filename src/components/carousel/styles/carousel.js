import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 30px;
    flex-direction:column;
    
    justify-content:center;
    align-items:center;
    
    color: #627597;
    background-color: #ffffff;

    scrollbar-width:none
    

    
`;

export const Item =styled.div`
    width:90%;
    display: flex;
    height:400px;
    margin-top:60px;
    position: relative;
    align-items: center;

    .left-icon,.right-icon{
        background-color:white;
        border-radius: 100%;
        position:absolute;
        opacity: 0.4;
        cursor:pointer;

        &:hover {
            opacity: 1;
        }
        
        top: 140px;

    }

    .left-icon{
        left: 50px;

    }

    .right-icon{
        right:50px;

    }

`;

export const Card = styled.div`
    width: 300px;
    height: 300px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%),
     0 2.75px 2.21px rgb(0 0 0 / 7%),
     0 6.65px 5.32px rgb(0 0 0 / 4%), 
     0 12.5px 10px rgb(0 0 0 / 3%), 
     0 22px 18px rgb(0 0 0 / 3%), 
     0 42px 33.4px rgb(0 0 0 / 2%), 
     0 80px 60px rgb(0 0 0 / 2%) !important;
    
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;

`;

export const Slider = styled.div`
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    overflow: hidden;
    background-color: white;
    scroll-behavior: smooth;

    &:-webkit-scrollbar{
        display: none;
    }
    
    
    
`;

export const Image = styled.div`
    width: 100%;
    height: 220px;
    background-color: rgb(240 240 240/ 80%);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-size: cover;
    ${({image}) => image && `background-image: url(${image})`}

`;

export const Title = styled.p`
    margin: 5px 0px 5px 10px;
    font-weight: 500;
    color:black;

`;

export const HeadingColumn = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    margin-top: 50px;
    

`;


export const Heading = styled.h2`
    
    font-feature-settings: "ss02" on,"ss01" on;
    font-weight: 800;
    letter-spacing: -0.01em ;
    text-align: center;
    color: #0a102a;
    margin-bottom: 20px;

    @media (min-width: 768px){
        font-size: 48px;
        line-height: 52px;
        letter-spacing: -0.03em;
    }

    @media (min-width: 1020px){
        font-size: 64px ;
        line-height: 68px ;
    }

    span{
        background: -webkit-linear-gradient(
            -70deg
            , #db469f 0%, #2188ff 100%);
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        -webkit-background-clip: text;
        
    }

`;




export const SubTitle = styled.p`
    margin: 10px 0px 5px 10px;
    width: 90%;
    color:black;
    opacity: 0.5;
    font-size: 13px;
    
    

`;

export const Link = styled(ReactRouterLink)`
    font-feature-settings: "ss02" on,"ss01" on;
    font-weight: 500 ;
    font-size: 20px;
    color: #0a102a;
    opacity: 0.6;
    display: flex;
    align-items : center;
    

    &:hover {
        opacity: 1;
    }

    svg{
        margin-left: 5px;
        margin-top: 5px;

    }

`;