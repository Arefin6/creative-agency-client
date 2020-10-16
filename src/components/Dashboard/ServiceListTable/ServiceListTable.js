import React from 'react';

const ServiceListTable = () => {
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
            <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th >3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>  
        
    );
};

export default ServiceListTable;