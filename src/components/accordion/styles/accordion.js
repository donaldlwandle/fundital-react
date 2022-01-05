import styled from "styled-components/macro";


export const Container = styled.div`
    display: flex;
    

`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Item = styled.div`
    margin-bottom : 10px;
    max-width: 670px;
    &:first-of-type{
        margin-top:3em;
    }

`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding : 70px 45px;
    max-width : 815px;
    margin: auto;


`;

export const Title = styled.h1`
    font-size : 50px;
    line-height : 1.1;
    margin-top : 0px;
    margin-bottom : 8px;
    text-align : center;

    @media (max-width : 600px){
        font-size : 35px;
    }

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    padding: 0.8em 0.2em;
    font-weight: normal;
    user-select : none;
    align-items: center ;

    img {
        height: auto;
        width: 24px;

        @media(max-width : 600px){
            width: 16px;
        }
    }

    @media(max-width : 600px){
        font-size: 16px;
    }
  

`;


export const Body = styled.div`
    max-height: 1200px;
    font-size: 26px;
    font-weight: normal;
    background: #c8c8c8;
    line-height: normal;
    transition: max-height 0.25c cubic-bezier(0.5, 0 , 0.1 , 1);
    padding: 0.8em 0.2em;
    user-select : none;
    white-space: pre-wrap;

    @media(max-width : 600px){
        font-size: 16px;
    }
`;