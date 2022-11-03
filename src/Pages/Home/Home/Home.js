import React from 'react';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;