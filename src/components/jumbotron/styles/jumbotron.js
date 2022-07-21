import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  
  }
  
  


  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
   display : flex ;
   padding : 55px 5%;
   overflow : hidden ;
   


`;



export const Pane = styled.div`
  width: 50%;
  padding: 50px;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }

  svg{
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 2.75px 2.21px rgb(0 0 0 / 7%), 0 6.65px 5.32px rgb(0 0 0 / 4%), 0 12.5px 10px rgb(0 0 0 / 3%), 0 22px 18px rgb(0 0 0 / 3%), 0 42px 33.4px rgb(0 0 0 / 2%), 0 100px 80px rgb(0 0 0 / 2%) !important;
  }
`;

export const Title = styled.h2`
  line-height: 1.0;
  margin-bottom: 8px;
  letter-spacing: -0.04em;
  color:#0a102a;
  font-size: 64px;
  line-height: 60px 
  
  font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  z-index: 2 !important;
  font-feature-settings: "ss02" on,"ss01" on;
  font-weight: 800;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color:#627597 ;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.svg`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div`
  background-color: #ffffff;

  @media (max-width : 1000px){

    ${Item} : last-of-type h2{
      margin-bottom : 50px;
      
    }
  }

`;


