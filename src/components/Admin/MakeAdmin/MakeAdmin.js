import React from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div>
            <div>
                <DashboardHeader></DashboardHeader>
            </div>
           <div className="row">
             <div className="col-md-3">
                 <Sidebar></Sidebar>
                </div> 
                <div className="col-md-8 makeAdmin-container">
                    <form>
                    <label htmlFor="Email">Email</label>
                        <div className="d-flex">
                        <input type="email"  className="form-control w-50 mr-3" placeholder="email"/>
                          <input type="submit" className=" btn btn-success"/>
                        </div>
                    </form>
                
                </div>  
            </div>
        </div>
    );
};

export default MakeAdmin;