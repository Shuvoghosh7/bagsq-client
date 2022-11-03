import React from 'react';
import Banner from '../Banner/Banner';
import CorporateClient from '../CorporateClient/CorporateClient';
import Faciliteis from '../Faciliteis/Faciliteis';
import Strength from '../Strength/Strength';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Faciliteis/>
            <CorporateClient/>
            <Strength/>
        </div>
    );
};

export default Home;