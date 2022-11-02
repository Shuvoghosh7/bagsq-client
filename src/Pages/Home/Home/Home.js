import React from 'react';
import Banner from '../Banner/Banner';
import CorporateClient from '../CorporateClient/CorporateClient';
import Faciliteis from '../Faciliteis/Faciliteis';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Faciliteis/>
            <CorporateClient/>
        </div>
    );
};

export default Home;