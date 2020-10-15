import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png' ;
import carousel3 from '../../../images/carousel-3.png' ;
import './Portfolio.css';

const Portfolio = () => {
    return (
<section className="portfolio-container">

<h2 className="text-center text-white">Here Are Some of <span className="text-brand">Our Works</span>   </h2>

<div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block  carousel-img" alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block  carousel-img" alt="..."/>
    
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block  carousel-img" alt="..."/>
      
    </div>
  </div>
  
 </div>
 
</section>
    );
};

export default Portfolio;