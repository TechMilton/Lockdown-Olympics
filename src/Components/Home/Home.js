import React from 'react';

import Image from 'react-bootstrap/Image';

import logo from '../../imgs/Logo.png';
import grass from '../../imgs/grass.png';

const Home = () => (
    <>
        <div class="backgroundLanding">
            <Image src={logo} className="homePageImage" />
            <h1 className="homePageheaderText">THE <br />LOCKDOWN-OLYMPICS</h1>
        </div>

        <nav className="homePageCards">
            <Image src={grass} className="grass" />
            <div className="Links link1">
                <a className="cardLinks" href="/categories"><h3 className="landingPageLink">EVENT CATEGORIES</h3></a>
            </div>
            <div className="Links link2">
                <a className="cardLinks" href="/competitors"><h3 className="landingPageLink">COMPETITORS</h3></a>
            </div>
        </nav >
    </>
)

export default Home;