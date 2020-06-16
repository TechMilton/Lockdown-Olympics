import React, { Component } from 'react';

import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import logo from '../../imgs/Logo.png';
import grass from '../../imgs/grass.png';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClickEvent(e) {

    }

    handleClickCompetitors(e) {

    }

    render() {
        return (
            <>
                <div class="backgroundLanding">
                    <div>
                        <Row className="homePageHeader">
                            <Col xs={12} sm={10} md={10} className="colClass">
                                <Image src={logo} style={{ width: 800, height: 400, }} />
                                <h1 className="header">THE <br />LOCKDOWN-OLYMPICS</h1>
                            </Col>
                        </Row>
                    </div>
                    <nav className="homePageCards">
                        <Image src={grass} className="grass" />
                        <div className="Links link1">
                            <a className="cardLinks" href="/" onClick={this.handleClickEvent} ><h3>EVENT CATEGORIES</h3></a>
                        </div>
                        <div className="Links link2">
                            <a className="cardLinks" href="/" onClick={this.handleClickCompetitors} ><h3>COMPETITORS</h3></a>
                        </div>
                    </nav >
                </div>

            </>
        );
    }

}

export default Home;