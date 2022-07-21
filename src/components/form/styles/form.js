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
    padding: 60px 0px;
    background-color: #080a0e;
    width: 100%;
    
    margin: auto;

    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        
        flex-direction: column;
    }

    @media (max-width: 545px) {
        background-color: #141c2c;
    }
    

`;

export const Title = styled.h1`

    text-align:center;
    margin-top: 20px;
    font-size: 24px;
    color: #c9d1d9 ;
    font-weight: 300;
    letter-spacing: -0.5px;

    @media (max-width: 600px) {
        margin-top: 16px;
        font-size: 20px;
    }
    

`;

export const Title2 = styled.h2`

    text-align:center;
    color: #c9d1d9 ;
    font-size: calc(1.325rem + .9vw);
    

`;

export const Text = styled.label`
    display: block;
    margin-bottom: 7px;
    font-weight: 400;
    text-align: left;
    color: #c9d1d9 ;

    
    
    

`;

export const TextSmall = styled.p`
    color: #c9d1d9 ;
    margin-top: .5rem!important;
    margin-bottom: .5rem!important;
    text-align: center;

    
    

    

`;

export const TextSmall2 = styled.p`
    

    

`;


export const TextSmallOr = styled.p`
    padding: 0px 20px;
    color: #c9d1d9 ;
    

`;



export const Frame = styled.div`
    width: 30%;
    display: auto;
    padding: 20px;
    font-size: 14px;
    margin-top:1em;
    background-color: #141c2c;
    border: 1px solid #585d62;
    border-radius: 6px;
   
    @media (max-width: 600px) {
        width: 70%;
        font-size: 12px;
    }
    
    

`;


export const FrameRight = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const Pane = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    
`;

export const PaneSpace = styled.div`

    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Line = styled.div`
    background-color: #585d62;
    flex-grow: 5;
    height: 1px;
`;


export const Wraper = styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   align-items: center;
   max-width: 1060px;
   margin: auto;
   width: 100%;


   @media (max-width: 1000px) {
    max-width: 650px;
   }

`;

export const Base = styled.form`
    display: flex;
    flex-direction : column;
    margin-top: 0.5em;

    

`;

export const Input = styled.input`
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom:20px;
    margin-top: 5px;
    display: block;
    color: #c9d1d9 ;
    background-color: #080a0e;
    border: 1px solid #585d62;
    border-radius: 6px;
    appearance: none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out

    @media (max-width: 600px) {
        
        font-size: 12px;
    }
   
    

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
    background-color: #ffa30c;
    border-color: #141c2c;
    width: 100%;
    padding: 5px 12px;
    margin-bottom: 1rem!important;
    margin-top: 1rem;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    border-radius: 6px;
    color: white ;

    
    

`;

export const ButtonGoogle = styled.button`
    cursor: pointer;
    background-color: #fff;
    border-color: #ecf2ff;
    width: 100%;
    padding: 5px 12px;
    margin-bottom: 1rem!important;
    font-size: 14px;
    line-height: 20px;
    border-radius: 6px;
    color: #141c2c;
    

`;

export const LogoImage = styled.img`
    width: 20%;
    align-self: center;

`;

export const Error = styled.div`
    background: #e87c03;
    
    border-radius: 5px;
    font-size: 16px;
    color: white;
    padding: 15px 20px;
    margin: 0 0 16px;
    

`;