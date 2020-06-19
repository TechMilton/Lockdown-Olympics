import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from '../imgs/Logo.png';

const CustomNavBar = () => (

    <Nav className="customNavBar">
        <Navbar.Brand>
            <a href="/">
                <img
                    src={logo}
                    alt="Nav Bar Logo"
                    style={{
                        width: 110,
                        height: 50,
                        margin: 10
                    }} />
            </a>
        </Navbar.Brand>
        <Nav className="nav-item">
            <Nav.Item>
                <Nav.Link href="/">Catergories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Competitors</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link href="/">Registration</Nav.Link>
            </Nav.Item>
        </Nav>
    </Nav >

)

export default CustomNavBar;