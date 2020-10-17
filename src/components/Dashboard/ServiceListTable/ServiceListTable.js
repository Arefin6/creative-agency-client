import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ServiceListTable = () => {
  
     const [serviceData,setServiceData] = useState([]);
     useEffect(()=>{
          fetch('https://frozen-headland-95173.herokuapp.com/orderList')
          .then(res=> res.json())
          .then(data =>setServiceData(data))

     },[])

    return (
        
    <table className="table table-borderless bg-light mt-4 ">
        <thead>
            <tr>
             <th>Name</th>
             <th>EmailId</th>
             <th>Service</th>
             <th>ProjectDetails</th>
            </tr>
        </thead>
        <tbody>
           {
            serviceData.map(data =>
              
           <tr>
                <th>{data.name}</th>
                 <td>{data.email}</td>
                  <td>{data.serviceName}</td>
                  <td>{data.description}</td>
            </tr>

            )   
           }
                      
        </tbody>
        </table>  
        
    );
};

export default ServiceListTable;