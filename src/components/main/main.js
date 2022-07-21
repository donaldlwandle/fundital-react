import React from "react";
import styled from "styled-components/macro"
import Player from "../player/player";

export default function Main({children , ...restProps}){

    return(
        <Container>
            <Player>

            </Player>
        </Container>
    )
}

export const Container = styled.div`
    grid-area: main;
    .video-container.paused .controls-container{
        opacity: 1;
    }
    
    border-radius: 5px;

    .video-container.paused .pause-icon{
        display: none;
    }

    .video-container:not(.paused) .play-icon{
        display: none;
    }

    .controls-container.full-screen .open{
        display: none;
    }

    .controls-container:not(.full-screen) .close{
        display: none;
    }



    
`;
