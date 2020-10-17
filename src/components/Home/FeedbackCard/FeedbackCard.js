import React from 'react';
import person1 from '../../../images/customer-2.png';


const FeedbackCard = ({feedback}) => {
    return (
        <div className="col-md-3 offset-md-1  feedback-container">
            
            <div className="d-flex justify-content-center">
            <img src={person1} alt="" style={{width:"80px"}}/>
             <div className="ml-5">
             <h4>{feedback.review.name}</h4>
            <h5>{feedback.review.designation}</h5>
             </div>
            
            </div>
            
            <p className="text-center mt-3 text-secondary">{feedback.review.details}.</p>
        
            
        </div>
    );
};

export default FeedbackCard;