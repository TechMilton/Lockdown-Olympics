import React from 'react';
import { Navbar, Nav } from "react-bootstrap";


class NavBar extends Comment {

    render() {
        return (
            <>
                <NavBar>
                    <Navbar className="main-nav">
                        <Navbar.Brand className="nav-logo">  </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end" />
                        <Nav.Link className="justify-content-end nav-text">Home </Nav.Link>
                    </Navbar>
                </NavBar>
            </>
        )
    }
}

export default NavBar;