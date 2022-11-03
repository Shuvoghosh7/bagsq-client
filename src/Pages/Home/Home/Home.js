import React from 'react';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import CorporateClient from '../CorporateClient/CorporateClient';
import CountOurNumbers from '../CountOurNumbers/CountOurNumbers';
import Faciliteis from '../Faciliteis/Faciliteis';
import Strength from '../Strength/Strength';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Faciliteis/>
            <CorporateClient/>
            <Strength/>
            <CountOurNumbers/>
            <Benefits/>
        </div>
    );
};

export default Home;