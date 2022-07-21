import React from "react";
import styled from "styled-components/macro"
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 16px 24px;

    div{
      display:flex;
      margin-top: 20px;

      @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        margin-top: 50px;
      }

      .courses-pane{
        width:100%;
      }

    }

    .courses-column{
      justify-content:center;
      text-align: center;
      margin-top: 100px;
      padding: 10px 5px;
    }

    ${({background}) => background && `background-color: ${background}`};

    

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

export const Content = styled.div`
    
`;

export const Pane = styled.div`
  width: 50%;
  display:flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 50px;
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

export const LabButton = styled(ReactRouterLink)`
    border-radius: 6px;
    text-align: center;
    align-self: center;
    color: #fff ;
    text-decoration: none;
    background-color: #0361cc;
    background-image: linear-gradient(-180deg, #0679fc 0%, #0361cc 90%);
    padding: 1em 1.5em;
    margin-bottom: 0.3rem;
    margin-top: 1rem;
    font-size: 16px ;
    font-weight: 600;
    line-height: 20px;
    white-space: nowrap;
    border: 1px solid rgba(27,31,35,.2);
     
`;

export const HomeLogo = styled(ReactRouterLink)`

    font-weight: 500;
    white-space: nowrap;
    margin-right: 16px ;
    margin-top: 10px ;

    @media (max-width: 400px){
        font-weight: 400;
    }

    

    
    
`;
