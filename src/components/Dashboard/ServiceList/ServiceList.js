import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ServiceListCard from '../ServiceListCard/ServiceListCard';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    
    return (
        <div>
            <div>
              <DashboardHeader></DashboardHeader>
               
           </div>
           <div className="row">
               <div className="col-md-3">
                   <Sidebar></Sidebar>
               </div>
                  <div className="col-md-4">
                    
                    
                    <ServiceListCard></ServiceListCard>

                  </div>
    
                   
                  
                
          </div>
        </div>
    );
};

export default ServiceList;