import React from 'react';
import { Navbar } from "react-bootstrap";
import logo from '../imgs/Logo.png';

const CustomNavBar = () => (

    <nav className="customNavBar">
        <Navbar.Brand>
            <a href="/">
                <img
                    src={logo}
                    alt="Nav Bar Logo"
                    style={{
                        width: 110,
                        height: 50,
                    }} /> Home
            </a>
        </Navbar.Brand>
    </nav>

)

export default CustomNavBar;