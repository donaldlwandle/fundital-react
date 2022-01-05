import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html , body {

        background-color: #f7f8fc;
        font-family: 'Open Sans', sans-serif;
        color: #141c2c;
        -webkit-font-smoothing: antialised;
        -moz-osx-smoothing: grayscale;
    }
    
    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

`;
