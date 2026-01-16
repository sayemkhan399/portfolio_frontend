import React from 'react';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Faq from './Faq';
import Account from './Account';
import Tools from './Tool/Tools';
import Experience from './ Experience';
import Hobby from './Hobby';
import Contact from './Contact';
import ServiceCarousel from './ServiceCarousel';
import TechProficiency from './TechProficiency';

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>           
            <Tools/>
            <ServiceCarousel/>
            <TechProficiency/>
            <Hobby/>
            <Work/>
            <Experience/>
            <Faq/>
            <Account/>
            <Contact/>
        </div>
    );
};

export default Home;