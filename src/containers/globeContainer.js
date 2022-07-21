import React from "react";
import { Globe } from "../components";
import * as ROUTES from "../constants/routes"
import logo from "../images/icons/profile.png"
import {ReactComponent as  Logo }from "../fundital-logo.svg"

export default function GlobeContainer({bg ,page, children , ...restProps}){

    return(

        
        <Globe bg={bg}>

            {page ==="home" &&
                <div>
                    <Globe.Pane>

                        <Globe.Title w={"795"} s={"75px"}>Welcome to skill development space</Globe.Title>
                        <Globe.SubTitle w={"450"} s={"26px"}>Get the most out of the best skill potral , top notch Courses and skills across the globe for everyone</Globe.SubTitle>

                    </Globe.Pane>


                    <Globe.Pane>
                        <Globe.Image src = {`/images/icons/globe.png`} alt ="globe connection image "/>

                    </Globe.Pane>
                </div>
                
            }

            {page ==="courses" &&
                <div className="courses-column">

                    <Globe.Pane  className="courses-pane">
                        <Globe.Title w={"400"} s={"45px"} className="lab-subtitle">Fundital learning space</Globe.Title>
                        <Globe.SubTitle w={"normal"} s={"18px"} className="lab-subtitle">grow your skills by completing fun, realistic
                        projects. Get advice and helpful feedback from our friendly Learning Lab bot.</Globe.SubTitle>
                        <Globe.LabButton to={ROUTES.SIGN_UP}> Sign up to fundital</Globe.LabButton>

                        <Globe.HomeLogo to={ROUTES.HOME}   > 
                            <Logo height="100px" width="100px"/>

                        </Globe.HomeLogo>
                    </Globe.Pane>
                </div>

            }
        </Globe>
        

    )
}