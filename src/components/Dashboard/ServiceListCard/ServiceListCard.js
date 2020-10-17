import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { userContext } from '../../../App';

const ServiceListCard = () => {
    const [serviceCard,setServiceCard] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
     useEffect(()=>{
          fetch('https://frozen-headland-95173.herokuapp.com/serviceList?email='+ loggedInUser.email,{ 
            headers:{
                'Content-Type': 'application/json',
                // body: JSON.stringify({ email: loggedInUser.email })
            }
          })
          .then(res=> res.json())
          .then(data =>setServiceCard(data))

     },[])  
   
    return (
        <div>
             {serviceCard.length === 0 && <p>loading...</p>}

             {
                 serviceCard.map(service =>
                   
                <div className="service-card-container mt-3">
                     
                 <img  alt="" className="img-fluid service-img" src={`data:image/png;base64,${service.image.img}`}/>
                 <h4 className="mt-2 ">{service.serviceName}</h4>
            
                 <p className="">{service.description}</p>               
                </div>
                 )
             }

                 
        </div>
    );
};

export default ServiceListCard;