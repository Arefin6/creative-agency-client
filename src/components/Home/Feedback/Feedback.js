import React from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
    const feedbackData = [
        {
            name : 'Nask Patrik',
            title : 'CEO,Manapol',
            img:'customer-1'
        },
        {
            name : 'Miriam Baron',
            title : 'CEO,Manapol',
            img:'customer-2'
        },
        {
            name : 'Bria Malon',
            title : 'CEO,Manapol',
            img:'customer-3'
        },
    ]
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