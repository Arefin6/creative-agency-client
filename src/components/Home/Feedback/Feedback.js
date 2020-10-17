import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
    const [feedbackData,setFeedbackData] = useState([]);
     useEffect(()=>{
          fetch('https://frozen-headland-95173.herokuapp.com/allReview',{
            headers:{
                'Content-Type': 'application/json',
                // body: JSON.stringify({ email: loggedInUser.email })
            }
          })
          .then(res=> res.json())
          .then(data =>setFeedbackData(data))

     },[])  
    return (
        <section className="mb-5">
           <h3 className="text-center mt-5">Clients <span className="text-brand">Feedback</span></h3>
           {
             <div className="row mt-5 ">
                  {feedbackData.map(feedback => <FeedbackCard feedback={feedback} key={feedback.name}></FeedbackCard>)}
             </div>  
           }
        </section>
    );
};

export default Feedback;