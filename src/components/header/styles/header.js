/* eslint-disable no-template-curly-in-string */
import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

 


export const Container = styled.div`
    display: flex;
    flex-direction:column;
    padding-top: 16px;
    padding-bottom: 20px;
    padding-right: 24px !important;
    padding-left: 24px !important;
    

    ${({background}) => background && `background-color: ${background}`};

      
`;



export const Pane
 = styled.div`
  width: 50%;
  margin-top: 30px;

  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  
  line-height: 1.0;
  margin-bottom: 8px;
  letter-spacing: -0.04em;
  
  font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  z-index: 2 !important;
  font-feature-settings: "ss02" on,"ss01" on;

  ${({weight}) => weight && `font-weight: ${weight}`};
  ${({size}) => size && `font-size: ${size}`};

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  
  
  line-height: normal;
  color:#8193b2;
  line-height: 32px

  @media (max-width: 600px) {
    font-size: 18px;
  }

  ${({weight}) => weight && `font-weight: ${weight}`};
  ${({size}) => size && `font-size: ${size}`};
`;

export const Image = styled.img`
  display: block;
  width: 600px;
  height: 600px;

  @media (max-width: 600px) {
    width: 400px;
    height: 400px;

  }

  object-fit: cover;
`;



export const Landscape = styled.div`
    z-index: 34;
    display: flex;
    width:100%;
    font-size: 16px;
    line-height: 1.5;
    color: white;

    .toggle-navigation{
        display:none;
    }

    .profile-cont{
        
        align-self:end;
        margin-left: auto;
        margin-right: 0px;
        
        

        
    }

    @media screen and (max-width : 886px){
        .toggle-navigation{
            display:flex;
        }

        .search,
        .navigation{
            display:none
        }

        .profile-logo{
            align-self:center;
            margin-left: auto;
        }
    }

`;

export const Potrait = styled.div`
    display: flex;
    flex-direction:column;
    margin-top:16px;
    padding-right: 16px;

    .nav-column{
        flex-direction: column;
    }

`;



export const HomeLogo = styled(ReactRouterLink)`

    font-weight: 500;
    white-space: nowrap;
    margin-right: 16px !important;

    @media (max-width: 400px){
        font-weight: 400;
    }

    

    
    
`;

export const HeaderSearch = styled.div`

    max-width: 100%;
    width : 400px;
    transition: .2s ease-in-out;
    transition-property: max-width,padding-bottom,padding-top;
    vertical-align: middle;

    @media (min-width: 768px){
        max-width: 290px;
        margin-right: 16px !important;
    }

`;

export const Column = styled.div`
    width:70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    margin-top: 50px;

    .lab-subtitle{
        text-align:center;
    }
    

`;

export const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    border-bottom: 1px solid #585d62;

    

`;

export const HeaderForm = styled.form`
    display: block;
    margin-top: 0em;
    color: white;
    align-self: auto !important;
    vertical-align: middle;
    

    
    

`;

export const HearderFormLabel = styled.label`
    min-height: 20px;
    min-width : 250px;
    display: table;
    color: white;
    
    background-color: #080a0e;
    border: 1px solid #585d62;
    border-radius: 6px;
    box-shadow: none;
    padding: 0 !important;
    position: relative !important;
    align-items: center !important;
    
    

`;


export const HeaderLabelInput = styled.input`
    
    min-height: 20px;
    max-width: 100%;
    width : 400px;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    display: block;
    color: #c9d1d9 ;
    background-color: #141c2c;
    border: 1px solid #585d62;
    border-radius: 6px;
    appearance: none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
    vertical-align: middle;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #c9d1d9;
        opacity: 1; /* Firefox */
      }
`;



export const HeaderNav = styled.nav`
    display: flex !important;
    align-self: stretch !important;
    justify-content: space-between !important;

    

`;

export const NavAnchor = styled.div`
    font-weight: 600;
    color: #f0f6fc;
    white-space: nowrap;
    padding-top: 8px! important;
    padding-bottom: 8px! important;
    margin-right: 25px;
    text-decoration: none;
    &:hover {
        color:rgb(240 246 252 / 70%);
    }

    @media (min-width: 768px) {
        
        
    }

`;

export const LabButton = styled(ReactRouterLink)`
    cursor: pointer;
    background-color: #2762eb;
    padding: 15px 20px;
    margin-bottom: 2rem!important;
    margin-top: 1.5rem;
    font-size: 12px
    line-height: 20px;
    border-radius: 6px;
    color: #f0f6fc ;
    text-decoration: none;
`;

export const ProfileText = styled.div`
    font-weight: 400;
    color: #f0f6fc;
    font-size : 14px;
    white-space: nowrap;
    padding-top: 8px! important;
    padding-bottom: 8px! important;
    margin-right: 10px !important;
    text-decoration: none;

    &:hover {
        color:rgb(240 246 252 / 70%);
    }

    @media (max-width: 400px){
        font-size:12px;
    }


`;

export const ProfileLogo = styled.img`
    width : 24px;
    height: 24px;
    align-self:center;

    @media (max-width: 400px){
        width :20px
        height: 20px;
    }

`;

export const ToggleNavigation = styled.button`
    font-weight: 600;
    background-color:#141c2c;
    border:none;
    outline :none;
    color: #f0f6fc;
    fill:currentColor;
    ${({tint}) => tint && `background-color: ${tint}`}

    @media (max-width: 400px){
        width :24px
        height: 24px;
    }

`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
    }

    .profile-sign-in{
        background-color: inherit;
        padding: 4px 8px;
        margin-bottom: 0.3rem!important;
        margin-top: 0rem;
        font-size: 14px
        line-height: 20px;
        border: 1px solid #d0d7de;

        @media (max-width: 400px){
            font-size:12px;
        }

    }

    
    
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #141c2c;
  width: 180px;
  top: 50px;
  right: 10px;
  border: 1px solid #585d62;
  border-radius: 6px;

  .sign-out {
    border-bottom: none;
  }

  

  

    ${Cont} {
        margin-bottom: 10px;
        &:last-of-type {
        margin-bottom: 0;
    }
    ${ProfileText} {
      cursor: pointer;
      
    }
    
  }
  
`;

export const Item = styled.div`
    display: flex;
    margin-right: 18px;
    align-self: stretch;
    align-items: center;
    flex-wrap: nowrap;
    
    margin-top: -4px !important;

    .profile-dropdown{
        &:hover > ${Dropdown} {
            display: flex;
            flex-direction: column;
            
        }

        &:click > ${Dropdown} {
            display: flex;
            flex-direction: column;
            
        }

    }

    


    
    
`;

