import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import logo from '../../imgs/Logo.png';

class Home extends Component {


    render() {
        return (
            <>
                <div>
                    <div className="landingBackground">
                        <Row className="justify-content-md-center text-center">
                            <Col xs={12} sm={10} md={10}>
                                <Image src={logo} style={{ width: 800, height: 400, marginTop: 50 }} />
                                <h1 className="header">Lockdown-Olympics</h1>
                            </Col>
                        </Row>
                    </div>

                    <div className="justify-content-md-center text-center">
                        <Jumbotron style={{ height: 50, marginBottom: 0, marginTop: 100, backgroundColor: "#FCB131", }}>
                            <a href="/"><h2><i>Categories</i></h2></a>
                        </Jumbotron>
                        <Jumbotron style={{ height: 50, marginBottom: 0, backgroundColor: "#f79800" }}>
                            <a href="/"><h2><i>Competitors</i></h2></a>
                        </Jumbotron>
                    </div>
                </div>




            </>
        );
    }

}




export default Home;