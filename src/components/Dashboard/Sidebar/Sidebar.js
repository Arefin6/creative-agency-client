import { faCartPlus,faCommentAlt, faListAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/order" className="link-style">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="link-style">
                        <FontAwesomeIcon icon={faListAlt}  /> <span>Service List</span>
                    </Link>
                </li>
                 <div>
                    <li>
                        <Link to="/allPatients" className="link-style" >
                            <FontAwesomeIcon icon={faCommentAlt}  /> <span>Review</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/patient" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li> */}
                </div>
            </ul>
           
        </div> 
        </div>
    );
};

export default Sidebar;