import React from "react";
import { Header , Optform ,Feature} from "../components";
import * as ROUTES from "../constants/routes"
import logo from "../fundital-logo.svg"

export default function HeaderContainer ({children}){

    return(
        <Header>
            <Header.Frame>

                <Header.Logo to={ROUTES.HOME} alt="Fundital" src={logo}/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
                
                {children}

            </Header.Frame>

            

            <Feature>

                <Feature.Title>Unlimited Movies, TV Series and More</Feature.Title>
                <Feature.Subtitle>Watch anywhere, cancel anytime</Feature.Subtitle>

                <Optform>

                    <Optform.Input placeholder = 'Enter your Email' />
                    <Optform.Button>Try it Now</Optform.Button>

                    <Optform.Break/>

                    <Optform.Text>Ready to watch? enter your email to create or restart your membership</Optform.Text>
                </Optform>


            </Feature>
        </Header>
    )
}