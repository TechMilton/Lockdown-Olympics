import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from '../imgs/Logo.png';
import { Link } from "react-router-dom";

const CustomNavBar = () => (

    <Nav className="customNavBar">
        <Navbar.Brand>
            <Link to={`/`}>
                <img
                    src={logo}
                    alt="Nav Bar Logo"
                    style={{
                        width: 130,
                        height: 60,
                        margin: 10
                    }} />
            </Link>
        </Navbar.Brand>
        <Nav className="nav-item">
            <Link
                to={`/registration`}
                className="heading backBtn registrationBtn"
                style={{ textDecoration: "none" }}
            >Register
            </Link>
        </Nav>
    </Nav >

)

export default CustomNavBar;