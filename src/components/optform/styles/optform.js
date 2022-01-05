import styled from "styled-components/macro";

export const Container = styled.div`
    display : flex ;
    justify-content : center ;
    height : 100%;
    
    flex-wrap : wrap;

    @media(max-width : 1000px){
        flex-direction : column;
        align-items: center;
        margin:20px 20px;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    boarder: 0;
    padding: 10px;
    height: 60px;

    box-sizing : border-box;

    @media(max-width: 1000px){
        height: 50px;
    
    }

`;

export const Button = styled.div`
    display: flex;
    align-items: center;
    height: 100 px;
    background: #e50914;
    color: #141c2c;
    boarder: 0;
    padding: 0 32px;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;

    @media(max-width: 1000px){
        height: 50px;
        padding: 32 0;
        margin-top:20px;
    
    }


    img {
        height: auto;
        width: 16px;
        padding-left: 10px;

        @media(max-width : 600px){
            width: 16px;
        }
    }
`;

export const Text = styled.text`
    font-size: 20px;
    margin-top:20px;
    text-align: center;

    @media(max-width : 600px){
        font-size: 16px;
        line-height: 22px;
    }
`;

export const Break = styled.div`

    flex-basis: 100%;
    height: 0;

`;