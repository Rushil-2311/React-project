import React from 'react'
import { BrowserRouter, Switch,Redirect, Route } from 'react-router-dom';
import Loginss from './login';
import AddEmployees from './AddingEmployess';
const App=()=>{
  return(
    <>
    {/* <Loginss/> */}
    <BrowserRouter>
       <Switch>
         <Route
         exact
           path="/"
           render={()=><Redirect to="/login"/>}
         />
         <Route
           path="/login"
           component={Loginss}
         />
         <Route
           path="/AddingEmployess"
           component={AddEmployees}
         />
       </Switch>
    </BrowserRouter>
    </>
  );
}
export default App;