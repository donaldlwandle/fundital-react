import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    margin: auto;
    padding : 40px ;
    justify-content : space-between;
    flex-direction : column;
    background-color: inherit;
    border-top: 1px solid #585d62;
    padding : 20px 20px ;
    margin-right:30px;
    margin-left:30px;
    

    @media(max-with : 1000px){
        

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
    color: inherit;
    font-weight: 400;
    margin-right : 20px;
    text-decoration : none;
 `;

 export const Text = styled.p`
    font-size : 14px ;
    margin-bottom : 10px;
    color:#585d62;
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