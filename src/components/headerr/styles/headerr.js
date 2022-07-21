import styled from "styled-components/macro"
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    left: 0;
    padding: 16px 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100; 

    ${({background}) => background && `background-color: ${background}`};
    
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    min-height: 100%;
    max-width: 1128px;

    .profile-stuff{
        position: absolute;
        right: 5%;
        
        
        

        & > a{

            

            span{
                opacity: 1;
            }
    
            img{
                opacity: 1;
                width:25px;
                height: 25px;
                border-radius: 50%;
                
            }
            span,img{
                &:hover{
                    opacity: 0.7;
                }
            }

        }

        @media (max-width: 900px) {
            display: none;
        
        }
    }


`;

export const Logo = styled(ReactRouterLink)`
    
    margin-right: 16px !important;
    img{
        
        width:35px;
        height: 35px;
        border:none;
    }
    

`;




export const Search = styled.div`

    position:relative;
    flex-grow: 0.1;
    & > div{
        max-width : 480px;
        
        

        input{
            

            min-height: 20px;
            width:400px ;
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
            
        }
    }
`;

export const Nav = styled.nav`
    
    display: block;

    @media(max-width: 768px){

        position:fixed;
        left: 0;
        bottom: 0;
        
        width: 100%;
        background-color: #080a0e;
        
    }

    .menus{
        @media (max-width: 768px) {
            display: none;
        
        }
    }

    .icons{
        display:none;
        @media (max-width: 768px) {
            display: flex;
        
        }
    }
`;

export const NavMenu = styled.div`
    font-weight: 600;
    color: #f0f6fc;
    align-items: center;
    background:transparent;
    direction:column;
    display:flex;
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

export const MenuIcons = styled(ReactRouterLink)`
    
    align-items: center;
    background:transparent;
    display:flex;
    flex-direction:column;
    font-weight:400;
    position:relative;
    line-height: 1.5;
    justify-content: center;
    font-size:12px;
    text-decoration: none;
    padding: 12px 0;
    
    img{
        
        width:35px;
        height: 35px;
        border:none;
        opacity: 0.6;
        padding: 0 45px;
        
        
        
    }

    .rounded{
        border-radius: 50%;
    }

    span{

        color: #f0f6fc;
        opacity: 0.6;
        display: flex;
        align-items: center;

        & > img{
            
            border:none;
            padding: 0;
            font-size:14px;
            display:inline-block;
            
        }
        
        
    }

    @media(max-width: 768px){
       

        
    }

    &:hover,&:active{
        span{
            opacity: 1;
        }

        img{
            opacity: 1;
        }
    }

    

    

`;


export const NavlistWrap = styled.ul`
    display:flex;
    flex-wrap: nowrap;
    list-style-type: none;
    margin: 0;
    padding: 0 0;

    @media(max-width: 768px){
        
        
        width: 100%;
        justify-content: space-evenly;
        

        
    }

    .active{
        span:after{
            content: '';
            transform: scale(1);
            border-bottom: 2px solid black;
            bottom: 0;
            left: 0;
            position: absolute;
            transition: .2s ease-in-out;
            border-color: white;
            width:100%;
        }
    }

    

    

`;

export const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    border-bottom: 1px solid #585d62;

    

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

export const Dropdown = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: #141c2c;
  width: 180px;
  top: 60px;
  right: 20px;
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



  
`;

export const LabButton = styled(ReactRouterLink)`
    border-radius: 6px;
    color: #f0f6fc ;
    text-decoration: none;
    background-color: inherit;
    padding: 4px 8px;
    margin-bottom: 0.3rem!important;
    margin-top: 0rem;
    font-size: 14px ;
    line-height:20px;
    margin-right: 20px;
    border: 1px solid #d0d7de;

    
`;

export const Navlist = styled.li`
    display:flex;
    align-items: center;
    color: #f0f6fc;

    &:hover > ${Dropdown} {
        display: flex;
        
        
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

export const Pane = styled.div`
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

export const Column = styled.div`
  dixplay:flex;
  flex-direction: column;
`
