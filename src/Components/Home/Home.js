import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import logo from '../../imgs/Logo.png';

class Home extends Component {


    render() {
        return (
            <>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="home">Home</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div>
                    <Image src={logo} fluid />
                    <h1>Lockdown-Olympics</h1>
                </div>

                <div>
                    <h2>Categories</h2>
                    <h2>Competitor</h2>
                </div>


            </>
        );
    }

}




export default Home;