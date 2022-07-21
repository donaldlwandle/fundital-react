import React ,{useState , useEffect , useRef}from "react";
import styled from "styled-components/macro"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Slider , Grid} from "@mui/material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";






export default function Player(){

    const [isPlay , setIsPlay] = useState(true);
    const [isFullScreen , setIsFullScreen] = useState(false);
    const [sliderValue , setSliderValue] = useState(1);

    // Reference to acces react DOM elements;
    const videoRef = useRef();
    const sliderRef = useRef();
    const volumeMuteRef = useRef();
    const videoContainerRef = useRef();


    

    //Toogle full screen
    const toggleFullScreen = () =>{
        // setIsFullScreen(!isFullScreen);
        

        document.fullscreenElement == null ? videoContainerRef.current.requestFullscreen() : document.exitFullscreen() ;
        


    }


    // Play and pause fuctionality
    // When user click pause and play
    const togglePlay = () => {
        setIsPlay(!isPlay);
        videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause() ;
        


    }

    //Mute and unmute functionality
    const toggleMute = () =>{
        videoRef.current.muted = !videoRef.current.muted ;

        videoRef.current.muted ? setSliderValue(0): setSliderValue(1);


        
    }

    //slider toogle method
    // update slider value and volume change when user toogles the slider UI
    const toggleSlider = (event, newValue) =>{
        setSliderValue(newValue);
        videoRef.current.volume = sliderValue ;
        videoRef.current.muted = sliderValue === 0;
        
    }

    const keyDownHandler = (event) =>{

        if(event.key.toLocaleLowerCase === " "){
            togglePlay();
        }else if (event.key.toLocaleLowerCase ==="m") {
            toggleMute();
        }

    }

    const changeFullScreenState =() =>{
        setIsFullScreen(!isFullScreen);
    }

    

    // for auto play when the page is lauched and activace space key pause and play
    useEffect(() => {
        
        videoRef.current.play();

        document.body.addEventListener("keydown" , keyDownHandler);
        

        
        return () =>{
            document.body.removeEventListener("keydown" , keyDownHandler);
            
        }

    }, []);

    useEffect( () =>{

        document.body.addEventListener("fullscreenchange", changeFullScreenState);

        return () =>{
            
            document.body.removeEventListener("fullscreenchange", changeFullScreenState);
        }

    });

    


    

    

    
    return(
        <Container ref={videoContainerRef} className={`${ isPlay ?"video-container" :"video-container paused"  }` } id="video-container" data-volume-level="low"> 
            <Video className="video"  
                ref={videoRef}  
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"   
                onClick={togglePlay} 
                />
            <VideoControlsContainer  className={`${isFullScreen ? "controls-container full-screen" : "controls-container"}`}>
                <TimeLineContainer>

                </TimeLineContainer>
                <Controls>
                    <Button onClick={togglePlay}  className="pause-play-btn">
                        <PlayArrowRoundedIcon className="play-icon" />
                        <PauseIcon  className="pause-icon"  />
                    </Button>

                    <div className="volume-control-container" >
                        <Button onClick={toggleMute}  ref={volumeMuteRef}   className={`${ sliderValue <= 0.5 && sliderValue > 0 ? "volume-control-btn volume-low" : "volume-control-btn"   } 
                        ${sliderValue > 0.5 ? "volume-control-btn volume-high" : "volume-control-btn"}  
                        ${sliderValue === 0 ? "volume-control-btn volume-muted" : "volume-control-btn"}`}>
                        
                            
                            <VolumeUpIcon className="volume-high-icon"/>

                            <VolumeDown className="volume-low-icon" />

                            <VolumeOffIcon className="volume-muted-icon" />

                        </Button>

                        <Grid className="volume-slider-container">
                            <Slider 
                                value={sliderValue}
                                onChange={toggleSlider}
                                ref={sliderRef}
                                defaultValue={100} 
                                size="small" 
                                className="volume-slider" 
                                min={0} 
                                max={1}
                                step={0.1}/>

                        </Grid>

                        
                        
                    </div>

                    

                    <Button>
                        
                    </Button>

                    <Button onClick={toggleFullScreen} className="full-screen-btn">
                        <Fullscreen className="open"/>

                        <FullscreenExit className="close" />
                        
                    </Button>
                    
                </Controls>

            </VideoControlsContainer>
        
        </Container>
    )
}









export const VideoControlsContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    opacity: 0;
    transition: opacity 150ms ease-in-out;

    &:before{
        content: "";
        position: absolute;
        bottom: 0;
        background: linear-gradient(to top , rgba( 0, 0, 0, .75) , transparent);
        width: 100%;
        aspect-ratio: 6/1;
        z-index : -1;
        pointer-events: none;
    }

    '&::after' :{

    }

    
`;


export const Container = styled.div`
    width:93%;
    position:relative;
    
    height:20em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
    margin-right:25px;
    
    

    &:hover ${VideoControlsContainer}{
        opacity:1;
    }

    &:focus-within ${VideoControlsContainer}{
        opacity:1;
    }

    

    @media(max-width: 1000px){
        height:25em;
        width: 100%;
    }

    @media(max-width: 500px){
        height:13em;
    }

    
`;



export const Video = styled.video`
    width:100%;
    height:100%;
    background: black;
    border-radius: 5px;
    

    
    
`;



export const TimeLineContainer = styled.div`
`;

export const Controls =styled.div`
    display:flex;
    gap: .5rem;
    padding: .5rem 1.5rem;
    align-items: center;

    .volume-control-btn.volume-high .volume-high-icon{
        display: block;
    }

    .volume-control-btn:not(volume-high) .volume-high-icon{
        display: none;
    }

    .volume-control-btn.volume-low .volume-low-icon{
        display: block;
    }

    .volume-control-btn:not(volume-low) .volume-low-icon{
        display: none;
    }

    .volume-control-btn.volume-muted .volume-muted-icon{
        display: block;
    }

    .volume-control-btn:not(volume-muted) .volume-muted-icon{
        display: none;
    }



    
    .volume-control-container:hover .volume-slider{
        width: 50px;
        transform: scaleX(1);
        
    }

    .volume-control-container{
        display: flex;
        align-items: center;

        * .MuiSlider-root {
            
            transition: width 150ms ease-in-out ,transform 150ms ease-in-out ;
            transform: scaleX(0);
            transform-origin: left;
            width:0;
            color: white;
            
        }  
        
    }

    .volume-slider-container{
        padding: 0px 0.5em;
    }

    
    
`;

export const Button = styled.button`
    
    color:inherit;
    background:none;
    border:none;
    padding: 0;
    height: 30px;
    width: 30px;
    font-size: 1.1rem;
    cursor:pointer;
    opacity: 1;
    transition: opacity 150ms ease-in-out;

    &:hover {
        opacity:0.75;
    }

    .volume-high-icon , .volume-low-icon , .volume-muted-icon{
        display:none;
    }

    

    
`;

// export const Slider = styled.input`
//     cursor: pointer;
    
    
// `;