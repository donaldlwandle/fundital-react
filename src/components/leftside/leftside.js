import React from "react";
import styled from "styled-components/macro"
import { SubTitle } from "../jumbotron/styles/jumbotron";

export default function LeftSide({children , ...restProps}){

    return(
        <Container>
            <Item>
                <div>
                    <h2>Overview</h2>
                </div>
            </Item>

            <Item>
                
                <div>
                    <span>
                        <img src="/images/icons/group.png" alt=""/>
                        <ItemTitle>Instructors</ItemTitle>
                    </span>

                    <InstructorsContainer>
                        <div>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/opal-tometi-1608579975.jpg" alt=""/>
                            <span>Gabriela Moisture</span>
                           
                            

                        </div>

                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJlTyVFbu3O8U3GG39kVT0lPLcW4_UTYN7w&usqp=CAU" alt="" width={72} height={72}/>
                            <span>Samson Mapompi</span>

                        </div>
                        
                    </InstructorsContainer>
                    
                </div>
            </Item>

            <Item>
                <div>
                    <span>
                        <img src="/images/icons/info-button.png" alt=""/>
                        <ItemTitle>About course</ItemTitle>
                    </span>

                    <SubText>It is a long established fact that a reader will be distracted by the readable content of
                         a page when looking at its layout. The point of using Lorem Ipsum is that it has 
                         a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                         content here', making it look like readable English. 
                         Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                         default model text, and a search for 'lorem ipsum' will uncover many web sites still 
                         in their infancy. Various versions have evolved over the years, sometimes by accident, 
                         sometimes on purpose (injected humour and the like).

                    </SubText>
                    
                </div>
                
            </Item>

            <Item>
                <div>
                    <span>
                        <img src="/images/icons/skills-icon.png" alt=""/>
                        <ItemTitle>Skills</ItemTitle>
                    </span>

                    <SubText>At the end of this course you will gain the following skills:</SubText>
                    
                </div>



                
                
                
                
                
            </Item>


            <Item>

                <div>
                    <span>
                        <img src="/images/icons/global.png" alt=""/>
                        <ItemTitle>Languages</ItemTitle>
                    </span>

                    <SubText>This course is offered in the folllowing languages:</SubText>
                    <Text>Isindebele , Setswana and english.</Text>
                    
                </div>
                
            </Item>

            <Item>

             <ItemTitle>Course reviews</ItemTitle>
                
            </Item>
        </Container>
    )
}

export const Container = styled.div`
    grid-area: leftside;
    overflow-y: scroll;
    
    max-height: calc(100vh - 80px);
    border: 1px solid #585d62;
    border-radius:5px;
    

    

`;

export const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom : 50px;

`;

export const Item = styled.div`
    padding:20px 20px;

    div{
        
        font-weight: 400;
        

        h2{
            font-size: 2rem;
        }

        span{
            display:flex;
            align-items:center;

            
            img{
                width: 1.6rem;
                height: 1.6rem;
            }
            
        }

       

    
    }

    &:first-child{
        

    }


`;


export const ItemTitle = styled.h3`
    font-weight: 400;
    font-size: 1.5rem;
    padding:  5px 10px;
    margin-top:10px;
    line-height: 1.4;
    color:#f0f6fc;

`;

export const Text = styled.div`
    font-weight: 400;
    
    font-size: 16px;
    color: #c9d1d9;
    line-height: 1.5;
    background: transparent:


    @media(max-width: 768px){
        font-size:14px;
    }
`;

export const SubText = styled.div`
    font-weight: 400;
    
    font-size: 14px;
    color: #9aa0a6;
    line-height: 1.6;
    background: transparent:


    @media(max-width: 768px){
        font-size:12px;
    }
`;

export const InstructorsContainer = styled.div`
    display:flex;
    padding: 20px 0px;
    

    div{
        background:transparent;
        display:flex;
        flex-direction:column;
        text-align:center;
        padding-right: 20px;
        align-items:center;
        position:relative;
        line-height: 2;
        font-size:14px;

        span{
            color: #9aa0a6;
            font-size:16px;
        }

    

        img{
            width:72px;
            height:72px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #f0f6fc;

            @media(max-width: 768px){
                width:40px;
                height:40px;
                border: 1px solid #f0f6fc;
            }
        }
        
    }
    
`;



