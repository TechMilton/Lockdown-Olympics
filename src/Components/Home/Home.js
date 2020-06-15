import React, { Component } from 'react';

import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import logo from '../../imgs/Logo.png';
import grassHome from '../../imgs/grassHome.png';


class Home extends Component {


    render() {
        return (
            <>
                <div>
                    <div >
                        <Row className="homePageHeader">
                            <Col xs={12} sm={10} md={10} className="colClass">
                                <Image src={logo} style={{ width: 800, height: 400, }} />
                                <h1 className="header">THE <br />LOCKDOWN-OLYMPICS</h1>
                            </Col>
                        </Row>
                    </div>
                    <nav className="homePageCards">
                        <Image src={grassHome} className="grass" />
                        <div className="Links link1">
                            <a className="cardLinks" href="/"><h3>CATEGORIES</h3></a>
                        </div>
                        <div className="Links link2">
                            <a className="cardLinks" href="/"><h3>COMPETITORS</h3></a>
                        </div>

                    </nav >
                </div>

            </>
        );
    }

}

export default Home;