import React ,{useState , useContext} from "react"; 
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import FooterContainer from "../containers/footerContainer";
import { Form } from "../components";
import logo from "../fundital-logo.svg"
import * as ROUTES from "../constants/routes"

export default function SignUpPage(){
    const {firebaseApp} = useContext(FirebaseContext);
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();


    const isInvalid = password==='' || emailAdress ==='' || passwordConfirm ==='' || username ==='';

    const handleSignUp = (event) => {
        event.preventDefault();

        if (password === passwordConfirm) {
            //Firebase Create New user
            firebaseApp
                .auth().createUserWithEmailAndPassword(emailAdress, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    //create user profile
                    // ...
                 }).then(() => {
                     //Go back to sign in page
                     history.goBack();
                  })

                .catch((error) => {
                    setError(error.message);
                    setPassword('');
                    setPasswordConfirm('');
                });
        } else {
            //passwords do not match

            setError('Passwords do not match!');
            setPassword('');
            setPasswordConfirm('');
        }
        

        
        

        
    }


    return(
        <>
            <Form>

                <Form.Wraper>

                    <Form.Pane>

                        <Form.LogoImage alt= 'Fundital logo' src ={logo}/>

                        <Form.Title>Sign up to Fundital</Form.Title>

                    </Form.Pane>

                    

                    <Form.Frame>


                        {error && <Form.Error>{error}</Form.Error>} 
                    
                        
                        <Form.Base onSubmit = {handleSignUp} method="POST">


                            <Form.Text>Email</Form.Text>
                            <Form.Input 
                                type= "email"
                                placeholder='Enter Email'
                                value = {emailAdress}
                                autoComplete="on"
                                onChange = {({target}) => setEmailAdress(target.value)}
                            />

                            <Form.Text>Full Name</Form.Text>
                            <Form.Input 
                                type= "username"
                                placeholder='Enter Fullname'
                                value = {emailAdress}
                                onChange = {({target}) => setUsername(target.value)}
                            />
                            
                            <Form.Text>Password</Form.Text>
                            <Form.Input 
                                type="password"
                                autoComplete="off"
                                placeholder="Password"
                                value = {password}
                                onChange = {({target}) => setPassword(target.value)}
                            />

                            <Form.Text>Confirm Password</Form.Text>
                            <Form.Input 
                                type="password"
                                autoComplete="off"
                                placeholder="Re-enter Password"
                                value = {password}
                                onChange = {({target}) => setPasswordConfirm(target.value)}
                            />

                            


                            <Form.Button  disabled={isInvalid} type="submit">Sign Up</Form.Button>

                            <Form.TextSmall>Already have an account? <Form.Link to="/signin" >Sign In</Form.Link></Form.TextSmall>

                            
                            

                            

                        </Form.Base>

                    </Form.Frame>

                    <Form.Frame>

                        
                        
                        <Form.TextSmall>By Signing up to this platform you agree to our <Form.Link>Terms Of Service</Form.Link></Form.TextSmall>


                    </Form.Frame>

                    


                </Form.Wraper>

                
                
            </Form>
            <FooterContainer/>
        </>
    );
}