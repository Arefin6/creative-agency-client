import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import Login from './components/Loign/Login';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
export const userContext = createContext();


function App() 
{
  const [loggedInUser,setLoggedInUser] = useState({});  
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
       
       <Router>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route  path='/login'>
           <Login></Login>
         </Route>
         <PrivateRoute  path='/dashboard'>
           <Dashboard></Dashboard>
         </PrivateRoute>
       </Switch>
     </Router>

    </userContext.Provider>
     
  );
}

export default App;
