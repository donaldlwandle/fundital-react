import React from "react";  
import {BrowserRouter as Router, Route} from "react-router-dom"
import { HomePage , SignInPage ,SignUpPage , ResetPage ,CoursesPage ,CourseLab} from "./pages";
import * as ROUTES from "./constants/routes"

export default function App() {
  return (
    <Router>

      <Route exact path= {ROUTES.HOME}>
        <HomePage/>
      </Route>

      <Route exact path= {ROUTES.SIGN_IN}>
        <SignInPage/>
      </Route>

      <Route exact path= {ROUTES.SIGN_UP}>
        <SignUpPage/>
      </Route>

      <Route exact path={ROUTES.RESET}>
        <ResetPage/>

      </Route>

      <Route exact path={ROUTES.COURSES}>
        <CoursesPage/>
      </Route>

      <Route exact path={ROUTES.COURSELAB}>
        <CourseLab/>
      </Route>
      
    </Router>
    
  );
}


