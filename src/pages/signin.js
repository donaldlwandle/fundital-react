import React ,{useState , useContext} from "react"; 
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import FooterContainer from "../containers/footerContainer";
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

        if(isInvalid){
            setError("Please fill in all the forms.")
        }else{

            //Firebase Sign in authantication

            
            
            firebaseApp
                .auth()
                .signInWithEmailAndPassword(emailAdress, password)
                .then(() => {

                    // if(firebaseApp.auth().currentUser.emailVerified)

                    //Go back to the previous page
                    history.goBack();

                })
                .catch((error) => {
                    setEmailAdress('');
                    setPassword('');
                    setError(error.message);
                });

        }
        

        

        
    }

    return(
        <>
            <Form>

                <Form.Wraper>

                    <Form.Pane>

                        <Form.LogoImage alt= 'Fundital logo' src ={logo}/>

                        <Form.Title>Sign in to Fundital</Form.Title>

                    </Form.Pane>

                    <Form.Frame>

                        

                        {error && <Form.Error>{error}</Form.Error>} 
                    
                        
                        <Form.Base onSubmit = {handleSignIn} method="POST">


                            <Form.Text>Email address</Form.Text>
                            <Form.Input 
                                type= "email"
                                placeholder='Enter Email'
                                value = {emailAdress}
                                autoComplete="on"
                                onChange = {({target}) => setEmailAdress(target.value)}
                            />


                            <Form.FrameRight>
                                <Form.Text>Password</Form.Text>
                                <Form.Link to="/reset">Forgot Password?</Form.Link>

                            </Form.FrameRight>
                            <Form.Input 
                                type="password"
                                autoComplete="off"
                                placeholder="Password"
                                value = {password}
                                onChange = {({target}) => setPassword(target.value)}
                            />


                            <Form.Button   type="submit">Sign In</Form.Button>

                            
                            <Form.TextSmall>Don't have an account? <Form.Link to="/signup" >Sign Up</Form.Link></Form.TextSmall>

                            <Form.PaneSpace>

                                <Form.Line/>
                                <Form.TextSmallOr>Or</Form.TextSmallOr>
                                <Form.Line/>
                            </Form.PaneSpace>

                            <Form.ButtonGoogle><img alt="Google" src="https://img.icons8.com/color/16/000000/google-logo.png"/>  Sign Up With Google</Form.ButtonGoogle>

                            

                        </Form.Base>
                    </Form.Frame>

                    <Form.Frame >

                        <Form.TextSmall>By login in to this platform you agree to our <Form.Link>Terms Of Service</Form.Link></Form.TextSmall>


                    </Form.Frame>


                </Form.Wraper>

                
                
            </Form>
            <FooterContainer/>
        </>
    );
}