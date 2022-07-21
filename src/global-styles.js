import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html , body {

        background-color: #080a0e;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        color: #f0f6fc;
        -webkit-font-smoothing: antialised;
        -moz-osx-smoothing: grayscale;
        overflow-x: hidden;
        margin:0;
        
    }
    
    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    ::-webkit-scrollbar{
        width: 0.5em;
    }

    ::-webkit-scrollbar-track{
        background:inherit;
    }

    ::-webkit-scrollbar-thumb{
        background:#c9d1d9;
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb:hover{
        
    }

    

    @supports(scrollbar-color: yellow red){
        *{
            scrollbar-color: #c9d1d9 #080a0e;
            scrollbar-width: thin;
            
            
        }
    }

    // input[type=range]{
    //     margin: 0;
    //     padding: 0;
    //     width: 52px;
    //     height: 1.5em;
    //     background: transparent;
    //     outline: none;
        
    // }

    // input[type=range], input[type=range] ::-webkit-slider-thumb {
    //     -webkit-appearance: none;
        
    // }

    // input[type=range] ::-moz-range-thumb {
    //     box-sizing: border-box;
    //     border:none;
    //     width: 12px;
    //     height: 12px;
    //     border-radius: 50%;
    //     background: #fff;
        
    // }

    // input[type=range] ::-webkit-slider-thumb {
    //     box-sizing: border-box;
    //     border:none;
    //     width: 12px;
    //     height: 12px;
    //     border-radius: 50%;
    //     background: #fff;
        
    // }
    
    

    

`;
