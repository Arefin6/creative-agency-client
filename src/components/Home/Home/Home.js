import React from 'react';
import Brands from '../Brands/Brands';
import Contact from '../Caontact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Heder/Header';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Brands></Brands>
            <Services></Services>
            <Portfolio></Portfolio>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;