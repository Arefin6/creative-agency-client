import React from 'react';
import { useForm } from "react-hook-form";
const OrderForm = () => {
   const { register, handleSubmit, watch, errors } = useForm();
   const onSubmit = data => console.log(data);
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

            <input name="image" ref={register({ required: true })}
            className="form-control" placeholder="uploadImg" type="file"
            />
            {errors.image && <span className="text-danger">This field is required</span>}
        </div> 
      
      <input type="submit" value="send" className="btn-brand mt-3" />
    </form>
    );
};

export default OrderForm;