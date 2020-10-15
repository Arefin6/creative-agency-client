import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './Header.css';

const Header = () => {
    return (
        <main className="row header-container">
            <div className="col-md-5 offset-md-1">
               <div className="heder-content pt-5">
                   <h1>Let's Grow Your <br/>
                     Brand To The<br/>
                     Next Level
                   </h1>
                   <p className="w-75 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, beatae?
                   elit. Provident, beatae?elit. Provident, beatae?
                   elit. Provident, beatae?elit. Provident, beatae?    
                   </p>
                   <button className="btn-brand">Hire Us</button>
               </div>
            </div>
            <div className="col-md-5">
                <img src={frame} alt="" className="img-fluid p-4"/>
            </div>
        </main>
    );
};

export default Header;