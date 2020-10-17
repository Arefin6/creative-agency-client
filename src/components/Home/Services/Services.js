import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css';


const Services = () => {
    
    const [serviceData,setServiceData] = useState([]);
     useEffect(()=>{
          fetch('https://frozen-headland-95173.herokuapp.com/allService',{
            headers:{
                'Content-Type': 'application/json',
                // body: JSON.stringify({ email: loggedInUser.email })
            }
          })
          .then(res=> res.json())
          .then(data =>setServiceData(data))

     },[])  

    return (
        <section className="pt-5 mt-5">
            <h2 className="text-center">Provide Awesome <span className="text-brand">Services</span></h2>
             <div className="row container p-5 mt-4 ml-5">
                 {serviceData.map(service => <ServicesCard service={service} key={service.title}></ServicesCard>)}
             </div>
        </section>
    );
};

export default Services;