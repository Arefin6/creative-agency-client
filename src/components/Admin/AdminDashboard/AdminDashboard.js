import React from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import ServiceListTable from '../../Dashboard/ServiceListTable/ServiceListTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AdminDashboard = () => {
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
                 <ServiceListTable></ServiceListTable>
            </div>    
            </div>
            
        </div>
    );
};

export default AdminDashboard;