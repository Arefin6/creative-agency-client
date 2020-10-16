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
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import AdminAddService from './components/Admin/AdminAddService/AdminAddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
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
         <PrivateRoute  path='/dashboard/order'>
           <Dashboard></Dashboard>
         </PrivateRoute>
         <PrivateRoute  path='/dashboard/service'>
           <ServiceList></ServiceList>
         </PrivateRoute>
         <PrivateRoute  path='/dashboard/review'>
           <Review></Review>
         </PrivateRoute>
         <PrivateRoute  path='/admin/serviceList'>
           <AdminDashboard></AdminDashboard>
         </PrivateRoute>
         <PrivateRoute path="/admin/addService">
           <AdminAddService></AdminAddService> 
         </PrivateRoute>
         <PrivateRoute path="/admin/makeAdmin">
           <MakeAdmin>
             </MakeAdmin> 
         </PrivateRoute>
       </Switch>
     </Router>

    </userContext.Provider>
     
  );
}

export default App;
