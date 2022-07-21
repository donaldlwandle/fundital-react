import React ,{useState} from "react";
import { Header , Optform ,Feature} from "../components";
import { HeaderForm } from "../components/header/styles/header";
import * as ROUTES from "../constants/routes"
import {ReactComponent as  Logo }from "../fundital-logo.svg"
import logo from "../images/icons/profile.png"

export default function HeaderContainer ({bg ,page,children}){

    const [isOpen ,setIsOpen] = useState(false) ;

    return(
        <Header bg={bg}>

            <Header.Landscape>

                <Header.Item className="toggle-navigation">

                    <Header.ToggleNavigation bg={bg} onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <svg aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" >
                            <path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
                        </svg>
                    </Header.ToggleNavigation>

                </Header.Item>

                <Header.Item className="profile-logo">

                    

                    <Header.HomeLogo to={ROUTES.HOME}   > 
                        <Logo height="34" width="34"/>

                    </Header.HomeLogo>

                    

                </Header.Item>

                <Header.Item className="search">

                    <HeaderForm>

                        <Header.HeaderLabelInput type="text" placeholder="Search or find..."/>

                    </HeaderForm>

                </Header.Item>

                <Header.Item className="navigation">

                        

                    <Header.HeaderNav>

                        <Header.NavAnchor >Courses</Header.NavAnchor>
                        <Header.NavAnchor>FAQ's</Header.NavAnchor>
                        <Header.NavAnchor>About fundital</Header.NavAnchor>

                    </Header.HeaderNav>
                </Header.Item>

                <Header.Item className="profile-cont">

                    

                    <Header.Group className="profile-dropdown">

                        <Header.LabButton to={ROUTES.SIGN_IN} className="profile-sign-in"> Sign in</Header.LabButton>

                        {/* <Header.ProfileText to={ROUTES.SIGN_IN}>Sign in  </Header.ProfileText>
                        <Header.ProfileLogo to={ROUTES.SIGN_IN} alt="Fundital" src={logo}/>     */}

                        <Header.Dropdown>
                            <Header.Cont>
                                <Header.ProfileText>Your profile</Header.ProfileText>
                                <Header.ProfileText>your subsriptions</Header.ProfileText>

                            </Header.Cont>

                            <Header.Cont className="sign-out">
                                <Header.ProfileText>Sign out</Header.ProfileText>

                            </Header.Cont>
                        </Header.Dropdown>


                    </Header.Group>

                        
                        

                </Header.Item>

                    


            </Header.Landscape>

            {isOpen &&
                <Header.Potrait>
                    <HeaderForm>

                        <Header.HeaderLabelInput type="text" placeholder="Search or find..."/>

                    </HeaderForm>

                    <Header.HeaderNav className="nav-column">

                        <Header.NavAnchor to={ROUTES.COURSES}>Courses</Header.NavAnchor>
                        <Header.NavAnchor>FAQ's</Header.NavAnchor>
                        <Header.NavAnchor>About fundital</Header.NavAnchor>
                        <Header.NavAnchor>your profile</Header.NavAnchor>
                        <Header.NavAnchor>your subsriptions</Header.NavAnchor>
                        <Header.NavAnchor>Sign out</Header.NavAnchor>

                    </Header.HeaderNav>



                </Header.Potrait>
                
            }

            {page==='home' &&
            
            
                <Header.Group >
                    <Header.Pane>

                        <Header.Title w={"795"} s={"75px"}>Welcome to skill development space</Header.Title>
                        <Header.SubTitle w={"450"} s={"26px"}>Get the most out of the best skill potral , top notch Courses and skills across the globe for everyone</Header.SubTitle>

                    </Header.Pane>


                    <Header.Pane>
                        <Header.Image src = {`/images/icons/globe.png`} alt ="globe connection image "/>

                    </Header.Pane>
                </Header.Group>
            
            }

            {page ==="courses" &&
                <Header.Group >

                    <Header.Column className="courses-column">
                        <Header.Title w={"400"} s={"45px"} className="lab-subtitle">Fundital learning space</Header.Title>
                        <Header.SubTitle w={"normal"} s={"18px"} className="lab-subtitle">grow your skills by completing fun, realistic
                        projects. Get advice and helpful feedback from our friendly Learning Lab bot.</Header.SubTitle>
                        <Header.LabButton to={ROUTES.SIGN_UP}> Sign up to fundital</Header.LabButton>

                        <Header.HomeLogo to={ROUTES.HOME}   > 
                            <Logo height="100px" width="100px"/>

                        </Header.HomeLogo>
                    </Header.Column>
                </Header.Group>

            }
        </Header>
    )
}