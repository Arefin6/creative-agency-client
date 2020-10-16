import React from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AdminAddServiceForm from '../AdminAddServiceForm/AdminAddServiceForm';

const AdminAddService = () => {
    return (
        <div>
            <div>
                <DashboardHeader></DashboardHeader>
            </div>
           <div className="row">
             <div className="col-md-3">
                 <Sidebar></Sidebar>
             </div>
            <div className="col-md-8">
              <AdminAddServiceForm></AdminAddServiceForm>
            </div>   
            </div> 
        </div>
    );
};

export default AdminAddService;