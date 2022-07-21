import React from "react";
import { Headerr } from "../components";
import * as ROUTES from "../constants/routes"

export default function HeaderrContainer({bg , page , children}){

    return (
        <Headerr bg={bg}>

            
            
            <Headerr.Content>

                <Headerr.Logo to= {ROUTES.HOME}>
                    <img src="/images/icons/fundital-logo.svg" alt="Fundital logo"/>
                </Headerr.Logo>

                <Headerr.Search>
                    <div>
                        <input type={"text"} placeholder="Search or find..."/>
                    </div>
                </Headerr.Search>

                <Headerr.Nav>
                    <Headerr.NavlistWrap className="menus">
                        <Headerr.Navlist >

                            <Headerr.NavMenu>Courses</Headerr.NavMenu>
                            


                        </Headerr.Navlist>

                        <Headerr.Navlist >

                            
                            <Headerr.NavMenu>FAQ's</Headerr.NavMenu>
                            


                        </Headerr.Navlist>

                        <Headerr.Navlist >

                            
                            <Headerr.NavMenu>About</Headerr.NavMenu>


                        </Headerr.Navlist>

                        
                    </Headerr.NavlistWrap>

                    <Headerr.NavlistWrap className="icons">
                        <Headerr.Navlist  className="active">

                    

                            <Headerr.MenuIcons to={ROUTES.HOME}>
                                <img src="/images/icons/home-icon.svg"/>
                                <span>Home</span>
                            </Headerr.MenuIcons>


                        </Headerr.Navlist>

                        <Headerr.Navlist >


                            <Headerr.MenuIcons to={ROUTES.COURSES}>
                                <img src="/images/icons/fundital-logo.svg"/>
                                <span>Learning</span>
                            </Headerr.MenuIcons>


                        </Headerr.Navlist>

                        <Headerr.Navlist >

                            <Headerr.MenuIcons>
                                <img className="rounded" src="/images/icons/user.png"/>
                                <span>Profile</span>
                                
                            </Headerr.MenuIcons>

                        </Headerr.Navlist>

                    </Headerr.NavlistWrap>

                    
                    
                </Headerr.Nav>

                <Headerr.Navlist className="profile-stuff">

                    <Headerr.MenuIcons>
                        <img src="/images/icons/user.png"/>
                        <span>
                            Profile
                            <img className="drop-down rounded" src="/images/icons/dropdown.svg"/>

                        </span>
                    
                    </Headerr.MenuIcons>

                    <Headerr.Dropdown>
                        <Headerr.Cont>
                            <Headerr.ProfileText>Your profile</Headerr.ProfileText>
                            <Headerr.ProfileText>your subsriptions</Headerr.ProfileText>

                        </Headerr.Cont>

                        <Headerr.Cont className="sign-out">
                            <Headerr.ProfileText>Sign out</Headerr.ProfileText>

                        </Headerr.Cont>
                    </Headerr.Dropdown>

                    

                </Headerr.Navlist>


                <Headerr.Navlist className="profile-stuff profile-lab">

                    <Headerr.LabButton to={ROUTES.SIGN_IN}>Sign in</Headerr.LabButton>

                    

                </Headerr.Navlist>

                
            </Headerr.Content>
            
            
        </Headerr>
    )
}