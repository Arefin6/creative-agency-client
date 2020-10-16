import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import OrderForm from '../OrderForm/OrderForm';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const Dashboard = () => {
    
    return (
        <div>
           <div>
              <DashboardHeader></DashboardHeader>
               
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