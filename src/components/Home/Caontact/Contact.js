import React from 'react';

const Contact = () => {
    return (
        <section className="row contact-container">
             <div className="col-md-5 offset-1 mt-4">
                <h2 className="mb-3">Let us Handle your <br/> Project Professionally</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  maiores laudantium error porro neque? </p>
             </div>
    <div className="col-md-5 offset-1">
                <form>
                <div className="form-group">
                    <input type="email" className="form-control w-75" 
                    placeholder="your email"
                    />
                    
                </div>
                <div className="form-group">
                    <input type="text" className="form-control w-75"
                    placeholder="your name/company's name"
                    />
                </div>
                <div className="form-group">
                   <textarea name="message" className="form-control w-75" id="" cols="30" rows="10"
                   placeholder="your Message"
                   ></textarea>
                </div>
                
                
                <button type="submit" className="btn btn-brand">Send</button>
                </form>
             </div>
              <div>
              <p className="footer">Copyright Orange Labs 2020</p>
              </div>
             

        </section>
    );
};

export default Contact;