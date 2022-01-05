/* eslint-disable no-template-curly-in-string */
import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
 
export const Background = styled.div`
    display: flex;
    flex-direction: column;
    
    // eslint-disable-next-line 
    background: url(${({src}) => (src ? '..images/misc/${src}.jpg' : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 56px;
    pdding: 18px 0;

    a {
        display: flex;
    }

    @media (max-width : 1000px){
        margin: 0 30px;
    }
`;

export const Frame = styled.div``;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 40px;

    @media (max-width : 600px){
        width: 60px;
        height: 60px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block ;
    background-color: #141c2c;
    width: 84px;
    height : fit-content;
    boarder : 0;
    color: white;
    font-size : 15px ;
    border-radius : 3px;
    padding: 8px 17px;
    cursor: pointer;
    box-sizing: border-box ;
    text-decoration: none;

    &:hover{
        background-color : #f40612;
    }

`;