import React from 'react';
import './Banner.css'
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";
const Banner = () => {
    return (
        <div className="banner-content">
            <div className="banner">
                <div className="inside-banner px-5">
                    <Zoom top>
                        <h1>Wellcome To BagsQ</h1>
                        <Link to="/aboutus">About Us</Link>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default Banner;