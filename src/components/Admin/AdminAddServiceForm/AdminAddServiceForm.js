import React from 'react';

const AdminAddServiceForm = () => {
    return (
        <div className="makeAdmin-container" style={{height:'400px'}}>
            <form>

                    <div className="d-flex">

                        <div className="form-group">
                            <label htmlFor="serviceTitle">Service Title</label>
                            <input type="text"  className="form-control mr-3" placeholder="serviceTitle"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="icon">Icon</label>
                            <input type="file"  className="form-control ml-3"/>
                        </div>
                    
                    </div>
                    <div className="form-group">
                            <label htmlFor="description">Description</label>
                             <textarea name="description" id="" cols="10" rows="5" className="form-control"></textarea>
                    </div>
                    <input type="submit" className="btn btn-success mt-2"/>
            </form>
        </div>
    );
};

export default AdminAddServiceForm;