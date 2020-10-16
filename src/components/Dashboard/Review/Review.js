import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import OrderForm from '../OrderForm/OrderForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div>
            <div>
               <DashboardHeader></DashboardHeader> 
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4">
                     <ReviewForm></ReviewForm>
                </div>

            </div>
        </div>
    );
};

export default Review;