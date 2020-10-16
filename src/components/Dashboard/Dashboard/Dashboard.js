import React from 'react';
import { useContext } from 'react';
import logo from '../../../images/logos/logo.png';
import { userContext } from '../../../App';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import OrderForm from '../OrderForm/OrderForm';

const Dashboard = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    return (
        <div>
           <div className="dash-header">
               <img src={logo} alt="" style={{width:"100px"}}/>
               <h4>Orders</h4>
               <p>{loggedInUser.name}</p> 
               
           </div>
            <div className="row ">
               <div className="col-md-3 ">
                   <Sidebar></Sidebar>
               </div>
                <div className="col-md-4">
                     <OrderForm></OrderForm>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;