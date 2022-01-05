import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    margin: auto;
    padding : 40px ;
    justify-content : space-between;
    flex-direction : column;
    border-top : 2px solid  #c8c8c8;

    @media(max-with : 1000px){
        padding : 60px 20px ;

    }

 `;

 export const Column = styled.div`
    display : flex ;
    flex-direction : column;
    text-align : start;
    
 
 `;

 export const Row = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;

    @media (max-width : 1000px){
        grid-template-colums : repeat(auto-fill , minmax(150px ,1fr));
    }

    @media (max-width : 400px){
      flex-direction: column;
  }


 `;

 export const Link = styled.a`
    margin-bottom : 20px;
    font-size : 13px;
    color: #141c2c;
    font-weight: 400;
    margin : 20px;
    text-decoration : none;
 `;

 export const Text = styled.p`
    font-size : 14px ;
    margin-bottom : 40px;
 `;

 export const Title = styled.p`
    font-size : 16px ;
    margin-bottom : 40px;
    align-text : center;
 `;

 export const Break = styled.p`
    flex-basis : 100%;
    height : 0;
 `;