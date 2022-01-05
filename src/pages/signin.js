import React ,{useState , useContext} from "react"; 
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footerContainer";
import { Form } from "../components";
import logo from "../fundital-logo.svg"


export default function SignInPage (){

    const {firebaseApp} = useContext(FirebaseContext);
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    //check if form inputs are valid(Email and Password)
    // function isInvalid(){
    //     if(password === '' || emailAdress === ''){
    //         return true;
    //     }
    //     return false;
    // }
    const isInvalid = password==='' || emailAdress ==='' ;

    const handleSignIn = (event) => {
        event.preventDefault();
        

        //Firebase Sign in authantication
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(emailAdress, password)
            .then(() => {

                //Go back to the previous page
                history.goBack();

            })
            .catch((error) => {
                setEmailAdress('');
                setPassword('');
                setError(error.message);
            });

        
    }

    return(
        <>
            <Form>

                <Form.Wraper>

                    <Form.Frame>

                        <Form.Title>Sign In</Form.Title>

                        {error && <Form.Error>{error}</Form.Error>} 
                    
                        
                        <Form.Base onSubmit = {handleSignIn} method="POST">


                            <Form.Text>Email</Form.Text>
                            <Form.Input 
                                type= "email"
                                placeholder='Enter Email'
                                value = {emailAdress}
                                autoComplete="on"
                                onChange = {({target}) => setEmailAdress(target.value)}
                            />
                            
                            <Form.Text>Password</Form.Text>
                            <Form.Input 
                                type="password"
                                autoComplete="off"
                                placeholder="Password"
                                value = {password}
                                onChange = {({target}) => setPassword(target.value)}
                            />

                            <Form.PaneSpace>

                                <Form.Pane>

                                    <Form.CheckBox type = "checkbox"/>
                                    <Form.TextSmall2>Remember me</Form.TextSmall2>
                                </Form.Pane>

                                <Form.Link>Forgot Password?</Form.Link>
                            </Form.PaneSpace>


                            <Form.Button  disabled={isInvalid} type="submit">Sign In</Form.Button>

                            
                            <Form.TextSmall2>Don't have an account? <Form.Link to="/signup" >Sign Up</Form.Link></Form.TextSmall2>

                            <Form.Pane>

                                <Form.Line/>
                                <Form.TextSmallOr>Or</Form.TextSmallOr>
                                <Form.Line/>
                            </Form.Pane>

                            <Form.ButtonGoogle><img alt="Google" src="https://img.icons8.com/color/16/000000/google-logo.png"/>  Sign Up With Google</Form.ButtonGoogle>

                            

                        </Form.Base>
                    </Form.Frame>

                    <Form.FrameRight >

                        <Form.LogoImage alt= 'Fundital logo' src ={logo}/>
                        <Form.Title2>Welcome to fundital</Form.Title2>
                        <Form.TextSmall>By login in to this platform you agree to our <Form.Link>Terms Of Service</Form.Link></Form.TextSmall>


                    </Form.FrameRight>


                </Form.Wraper>

                
                
            </Form>
            <FooterContainer/>
        </>
    );
}