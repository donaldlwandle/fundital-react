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
    width: 100%;
    &:first-of-type{
        margin-top:3em;
    }

`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding : 100px 45px;
    max-width : 815px;
    margin: auto;


`;

export const Title = styled.h1`
    font-feature-settings: "ss02" on,"ss01" on;
    font-weight: 800;
    letter-spacing: -0.01em ;
    text-align: center;

    @media (min-width: 768px){
        font-size: 48px;
        line-height: 52px;
        letter-spacing: -0.03em;
    }

    @media (min-width: 1020px){
        font-size: 64px ;
        line-height: 68px ;
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
    font-size: 20px;
    font-weight: normal;
    background: #141c2c;
    line-height: normal;
    transition: max-height 0.25c cubic-bezier(0.5, 0 , 0.1 , 1);
    padding: 0.8em 0.2em;
    user-select : none;
    white-space: pre-wrap;

    @media(max-width : 600px){
        font-size: 16px;
    }
`;



