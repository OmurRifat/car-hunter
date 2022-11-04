import React from 'react';
import About from '../About/About';
import AditionalInfo from '../AditionalInfo/AditionalInfo';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <AditionalInfo></AditionalInfo>
        </div>
    );
};

export default Home;