import { faCartPlus,faCommentAlt, faListAlt, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const location= useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
     
        <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                
                <li>
                    <NavLink to="/dashboard/order" activeClassName={location.pathname === "/dashboard/order" ? "is-active" : ""} className="link-style">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/service" 
                    activeClassName={location.pathname === "/dashboard/service" ? "is-active" : ""}
                    className="link-style">
                        <FontAwesomeIcon icon={faListAlt}  /> <span>Service List</span>
                    </NavLink>
                </li>
                   <li>
                        <NavLink to="/dashboard/review"  
                         activeClassName={location.pathname === "/dashboard/review" ? "is-active" : ""}
                        className="link-style" >
                            <FontAwesomeIcon icon={faCommentAlt}  /> <span>Review</span>
                        </NavLink>
                    </li>
                
                  <div>
                    <li>
                        <NavLink to="/admin/serviceList"
                         className="link-style"
                         activeClassName={location.pathname === "/admin/serviceList" ? "is-active" : ""}
                        >
                            <FontAwesomeIcon icon={faListAlt}  /> <span>ServiceList</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/addService"
                          className="link-style"
                          activeClassName={location.pathname === "/admin/addService" ? "is-active" : ""}
                        >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/makeAdmin"
                         className="link-style"
                         activeClassName={location.pathname === "/admin/makeAdmin" ? "is-active" : ""}
                        >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make admin</span>
                        </NavLink>
                    </li>
                   
                    
                </div>
            </ul>
        </div>
           
    );
};

export default Sidebar;