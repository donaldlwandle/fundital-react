import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";


export const Link = styled(ReactRouterLink)`
    color: #2762eb;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 0px;
    width: 100%;
    
    margin: auto;

    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        
        flex-direction: column;
    }
    

`;

export const Title = styled.h2`

    text-align:center;
    margin-top: 50px;
    font-size: calc(1.325rem + .9vw);
    

`;

export const Title2 = styled.h2`

    text-align:center;
    color:white ;
    font-size: calc(1.325rem + .9vw);
    

`;

export const Text = styled.label`
    font-weight: bold;
    
    

`;

export const TextSmall = styled.p`
    color: white;
    text-align:center;
    margin-top: .5rem!important;
    margin-bottom: .5rem!important;

    

`;

export const TextSmall2 = styled.p`
    

    

`;


export const TextSmallOr = styled.p`
    padding: 0px 20px;
    

`;



export const Frame = styled.div`
   display: flex;
   width: 50%;
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
   background-color: white;
   flex-direction: column; 
   padding: 4rem!important;

   @media (max-width: 600px) {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
   }
    

`;

export const FrameRight = styled.div`
   display: flex;
   width: 50%;
   border-top-right-radius: 10px;
   justify-content:center;
   border-bottom-right-radius: 10px;
   background-color: #141c2c;
   flex-direction: column; 
   padding: 4rem!important;
   

   @media (max-width: 600px) {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
   }
`;

export const Pane = styled.div`

    display: flex;
    align-items: center;
    
`;

export const PaneSpace = styled.div`

    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 1rem;
`;

export const Line = styled.div`
    background-color: #ccc;
    flex-grow: 5;
    height: 1px;
`;


export const Wraper = styled.div`
   display: flex;
   flex-direction: row;
   border-radius: 10px;
   max-width: 1060px;
   border-color: #f8f9fa!important;
   box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
   margin: auto;
   width: 100%;

   @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items:center;
   }

   @media (max-width: 1000px) {
    max-width: 650px;
   }

`;

export const Base = styled.form`
    display: flex;
    flex-direction : column;
    margin-top: 30px

    

`;

export const Input = styled.input`
    margin-bottom:20px;
    margin-top: 5px;
    display: block;
    padding: .370rem .65rem;
    font-size: 1rem;
    font-weight: 350;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 2px solid #ecf2ff;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
   
    

`;

export const CheckBox = styled.input`
    
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-right: 0.3em;
    width: 1em;
    height: 1em;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 2px solid #ecf2ff;
    appearance: none;
    float: left;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &:checked[type=checkbox]{
        background-color: #0d6efd;
        border-color: #0d6efd;
        background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e);
    }
   
    

`;


export const Button = styled.button`
    cursor: pointer;
    background-color: #141c2c;
    border-color: #141c2c;
    width: 100%;
    margin-bottom: 1rem!important;
    margin-top: 1rem;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    border-radius: .3rem;
    color: #fff;

    &:disabled {
        opacity:0.8;
        cursor: none;
    }
    

`;

export const ButtonGoogle = styled.button`
    cursor: pointer;
    background-color: #fff;
    border-color: #ecf2ff;
    width: 100%;
    margin-bottom: 1rem!important;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    border-radius: .3rem;
    color: #141c2c;
    

`;

export const LogoImage = styled.img`
    width: 55%;
    align-self: center;
    margin-bottom: 2rem;

`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    padding: 15px 20px;
    margin: 0 0 16px;
    

`;