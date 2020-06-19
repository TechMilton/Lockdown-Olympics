import React from 'react';

import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

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
                <Link
                    to={`/categories`}
                    className="cardLinks"
                    style={{ textDecoration: "none" }}>
                        <h3 className="landingPageLink">EVENT CATEGORIES</h3>
                    </Link>
            </div>
            <div className="Links link2">
                <Link
                    to={`/competitors`}
                    className="cardLinks"
                    style={{ textDecoration: "none" }}>
                        <h3 className="landingPageLink">COMPETITORS</h3>
                    </Link>
            </div>
        </nav >
    </>
)

export default Home;