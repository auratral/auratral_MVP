import React from 'react';
import Hero from '../components/Home/Hero';
import ComplianceBar from '../components/Home/ComplianceBar';
import CategoryShowcase from '../components/Home/CategoryShowcase';
import FeaturedDatasets from '../components/Home/FeaturedDatasets';
import HowItWorks from '../components/Home/HowItWorks';
import TestimonialsNews from '../components/Home/TestimonialsNews';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <ComplianceBar />
            <CategoryShowcase />
            <FeaturedDatasets />
            <HowItWorks />
            <TestimonialsNews />
        </div>
    );
};

export default Home;
