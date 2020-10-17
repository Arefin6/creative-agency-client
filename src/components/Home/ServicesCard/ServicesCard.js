import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    return (
        <div className="col-md-4 service-card-container mt-3">             
                 <img src={`data:image/png;base64,${service.image.img}`} alt="" className="img-fluid service-img"/>
                <Link className="link-service "  to="/dashboard/order"><h4 className="mt-3 mb-3 ml-4">{service.title}</h4></Link>
                 <p style={{textAlign:'justify w-75 ml-3'}}
                 >{service.description}</p>                          
        </div>
    );
};

export default ServicesCard;