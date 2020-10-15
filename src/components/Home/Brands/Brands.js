import React from 'react';
import slack from'../../../images/logos/slack.png';
import google from'../../../images/logos/google.png';
import uber from'../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from'../../../images/logos/airbnb.png';

const Brands = () => {
    return (
        <section>
            <div className="row container pt-3">
                <div className="offset-md-2 col-md-2">
                   
                  <img src={slack} style={{width:"130px"}} alt=""/>
                </div>
                <div className="col-md-2">
                <img src={google} style={{width:"130px"}}  alt=""/>
                </div>
                <div className="col-md-2">
                <img src={uber} style={{width:"100px",marginBottom:"10px"}}  alt=""/>
                </div>
                <div className="col-md-2">
                <img src={netflix}  style={{width:"130px",marginBottom:"10px"}} alt=""/>
                </div>
                <div className="col-md-2"> 
                  <img src={airbnb} style={{width:"130px", marginTop:"10px"}}  alt=""/>
                </div>
               
            </div>
        </section>
    );
};

export default Brands;