import React from "react";
import { Footer } from "../components";

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href ="#">About</Footer.Link>
                    
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href ="#">FAQ's</Footer.Link>
                    
                </Footer.Column >

                <Footer.Column>
                    <Footer.Link href ="#">Terms Of Service</Footer.Link>
                    
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href ="#">Privacy Policy</Footer.Link>
                    
                </Footer.Column>
            </Footer.Row> 

            <Footer.Row>
                <Footer.Text>© 2021 Fundital</Footer.Text>

            </Footer.Row>
        
        </Footer>
    )
}