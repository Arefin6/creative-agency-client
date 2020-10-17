import React from 'react';
import { useForm } from "react-hook-form";
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values,e) =>{
          
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(data => {
           if(data){
             alert("congratulations!! You are admin now");
           }
        })
              

        e.preventDefault();
    }   



   

    return (
        <div>
            <div>
                <DashboardHeader></DashboardHeader>
            </div>
           <div className="row">
             <div className="col-md-3">
                 <Sidebar></Sidebar>
                </div> 
                <div className="col-md-8 makeAdmin-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="Email">Email</label>
                        <div className="d-flex">
                        <input type="email" name="email"
                         ref={register({ required: true })}
                        className="form-control w-50 mr-3" placeholder="email"/>
                          {errors.email && <span className="text-danger">This field is required</span>}  
                          <input type="submit" className=" btn btn-success"/>
                        </div>
                    </form>
                
                </div>  
            </div>
        </div>
    );
};

export default MakeAdmin;