import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
const OrderForm = () => {
   const { register, handleSubmit, watch, errors } = useForm();
   const [file,setFile]= useState(null);

   const handleFileChange =(e) =>{
      const newFile = e.target.files[0];
      setFile(newFile);
   }

   const onSubmit = data => {
    const formData = new FormData();
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('price', data.price);
        formData.append('description', data.description);
        formData.append('serviceName', data.serviceName);
       
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("Your Order Recived!");
                }
            })
            .catch(error => {
                console.error(error)
            })
    
   };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="form-group">
            <input name="name" ref={register({ required: true })}
            className="form-control" placeholder="your name" type="text"
            />
            {errors.name && <span className="text-danger">This field is required</span>}
        </div>  
        <div className="form-group">
            <input name="email" ref={register({ required: true })}
            className="form-control" placeholder="your email" type="email"
            />
            {errors.email && <span className="text-danger">This field is required</span>}
        </div> 
        <div className="form-group">
            <input name="serviceName" ref={register({ required: true })}
            className="form-control" placeholder="service name" type="text"
            />
    
            {errors.serviceName && <span className="text-danger">This field is required</span>}
        </div> 

        <div className="form-group">
           <textarea name="details" ref={register({ required: true })} className="form-control" placeholder="projectDetails" id="" cols="30" rows="10"></textarea>
           {errors.details && <span className="text-danger">This field is required</span>}
        </div>
         
        <div className="d-flex">
           <input name="price" ref={register({ required: true })}
            className="form-control mr-2" placeholder="price" type="text"
            />
            {errors.price && <span className="text-danger">This field is required</span>}

            <input name="file" required="true"
             onChange={handleFileChange}
            className="form-control" placeholder="uploadImg" type="file"
            />
            
        </div> 
      
      <input type="submit" value="send" className="btn-brand mt-3" />
    </form>
    );
};

export default OrderForm;