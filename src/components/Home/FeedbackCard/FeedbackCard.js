import React from 'react';

const FeedbackCard = ({feedback}) => {
    return (
        <div className="col-md-3 offset-md-1  feedback-container">
            
            <div className="d-flex justify-content-center">
            <img src={require(`../../../images/${feedback.img}.png`)} alt="" style={{width:"80px"}}/>
             <div className="ml-5">
             <h4>{feedback.name}</h4>
            <h5>{feedback.title}</h5>
             </div>
            
            </div>
            
            <p className="text-center mt-3 text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet adipisci aut illum, voluptatibus doloribus error.</p>
        
            
        </div>
    );
};

export default FeedbackCard;