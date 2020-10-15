import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css';


const Services = () => {
    const serviceData = [
        {
            name : 'Web & Mobile design',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            img:'service1'
        },
        {
            name : 'Graphic Design',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            img:'service2'
        },
        {
            name : 'Web Development',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            img:'service3'
        },
    ]
    return (
        <section className="pt-5 mt-5">
            <h2 className="text-center">Provide Awesome <span className="text-brand">Services</span></h2>
             <div className="row container p-5 mt-4 ml-5">
                 {serviceData.map(service => <ServicesCard service={service} key={service.name}></ServicesCard>)}
             </div>
        </section>
    );
};

export default Services;