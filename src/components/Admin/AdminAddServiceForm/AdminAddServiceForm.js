import React from 'react';
import { useState } from 'react';

const AdminAddServiceForm = () => {
     const[serviceInfo,setServiceInfo] =useState({});
     const [file,setFile]=useState(null);
      
      const handleBlur=(e) =>{
         const newInfo ={...serviceInfo};
         newInfo[e.target.name]= e.target.value;
         setServiceInfo(newInfo);
      } 

      const handleSubmit=(e) =>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("Your service added!");
                }
            })
            .catch(error => {
                console.error(error)
            })

            e.preventDefault();

      }


     const handleFileChange =(e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
     }

    return (
        <div className="makeAdmin-container" style={{height:'400px'}}>
            <form onSubmit={handleSubmit}>
                    <div className="d-flex">

                        <div className="form-group">
                            <label htmlFor="serviceTitle">Service Title</label>
                            <input type="text" onBlur={handleBlur} name="title"  className="form-control mr-3" placeholder="serviceTitle"/>
                        </div>
                        <div  className="form-group">
                            <label htmlFor="icon">Icon</label>
                            <input name="file" onChange={handleFileChange} type="file"  className="form-control ml-3"/>
                        </div>
                    
                    </div>
                    <div className="form-group">
                            <label htmlFor="description">Description</label>
                             <textarea onBlur={handleBlur}name="description" id="" cols="10" rows="5" className="form-control"></textarea>
                    </div>
                    <input type="submit" className="btn btn-success mt-2"/>
            </form>
        </div>
    );
};

export default AdminAddServiceForm;