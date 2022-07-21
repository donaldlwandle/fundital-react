import React from "react";
import FooterContainer from "../containers/footerContainer";
import { Form } from "../components";
import logo from "../fundital-logo.svg"

export default function ResetPage(){


    return (
        <>
            <Form>

                <Form.Wraper>

                    <Form.Pane>

                        <Form.LogoImage alt= 'Fundital logo' src ={logo}/>

                        <Form.Title>Reset Password</Form.Title>

                    </Form.Pane>

                    <Form.Frame>

                    <Form.Base>

                        <Form.TextSmall>Enter the email adress you used when creating an acount we'll send you a link to reset your password</Form.TextSmall>
                        <Form.Input 
                            type= "email"
                            placeholder='Enter Email'
                                
                            autoComplete="on"
                                
                        />

                        <Form.Button   type="submit">Submit</Form.Button>
                        
                    </Form.Base>
                </Form.Frame>

                </Form.Wraper>

                

            </Form>

            <FooterContainer/>
        
        </>

    )
}