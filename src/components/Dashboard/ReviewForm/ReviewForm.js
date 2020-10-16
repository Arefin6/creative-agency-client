import React from 'react';
import { useForm } from "react-hook-form";
const ReviewForm = () => {
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
            <input name="designation" ref={register({ required: true })}
            className="form-control" placeholder="company designation" type="text"
            />
            {errors.designation && <span className="text-danger">This field is required</span>}
        </div> 
        
        <div className="form-group">
           <textarea name="details" ref={register({ required: true })} className="form-control" placeholder="Description" id="" cols="30" rows="10"></textarea>
           {errors.details && <span className="text-danger">This field is required</span>}
        </div>
         
      <input type="submit"  className="btn-brand mt-3" />
    </form>
    );
};

export default ReviewForm;