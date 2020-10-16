import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-main pt-3">
    <a className="navbar-brand" href="#"><img src={logo} alt="" style={{width:'150px'}}/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <a className="nav-link pr-4" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link pr-4" href="#">Our Portfolio</a>
        </li>
        <li className="nav-item ">
            <a className="nav-link pr-4" href="#">Our Team</a>
        </li>
        <li className="nav-item ">
            <a className="nav-link pr-4" href="#">Contact Us</a>
        </li>
        
        </ul>
        <Link className="btn btn-brand pr-4 mr-5" to="/dashboard/order">Login</Link>
    </div>
    </nav>
    );
};

export default Navbar;