import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
const DashboardHeader = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
  
    return (
        <div className="dash-header">
             <img src={logo} alt="" style={{width:"100px"}}/>
               <p>{loggedInUser.name}</p> 
        </div>
    );
};

export default DashboardHeader;