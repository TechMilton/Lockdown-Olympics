import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import bgsport from '../../imgs/bgsport.jpg';

class Category extends Component {

    render() {
        return (
            <>
                <div style={{
                    height: '60rem',
                    backgroundImage: `url(${bgsport})`
                }}>
                    <div className="catergoriesCards">
                        {/* Home Events */}
                        <a className="homeLink" href="/">
                            <Card className="homeEvents" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://img.icons8.com/pastel-glyph/64/000000/home.png" />
                                <Card.Body>
                                    <Card.Title style={{
                                        fontSize: "2rem", fontWeight: "500",
                                    }}>Home Events</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Go Hard <span className="line">or Go Home</span> and Stay Home!
                                    </Card.Text>
                                    <hr />
                                </Card.Body>
                            </Card>
                        </a>

                        {/* Garden Events */}
                        <a className="gardenLink" href="/">
                            <Card className="gardenEvents" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://img.icons8.com/ios-filled/50/000000/spade.png" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "2rem", fontWeight: "500", }}>Garden Events</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Donec vitae velit a arcu ultrices pulvinar in quis orci.
                                    </Card.Text>
                                    <hr />
                                </Card.Body>
                            </Card>
                        </a>

                        {/* Mental Events */}
                        <a className="mentalLink" href="/">
                            <Card className="mentalEvents" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://img.icons8.com/ios-filled/50/000000/brain.png" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "2rem", fontWeight: "500", }}>Mental Events</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Donec vitae velit a arcu ultrices pulvinar in quis orci.
                            </Card.Text>
                                    <hr />
                                </Card.Body>
                            </Card>
                        </a>

                        {/* Food Events */}
                        <a className="foodLink" href="/">
                            <Card className="foodEvents" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://img.icons8.com/material/24/000000/hamburger--v1.png" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "2rem", fontWeight: "500", }}>Food Events</Card.Title>
                                    <hr />
                                    <Card.Text>
                                        Donec vitae velit a arcu ultrices pulvinar in quis orci.
                                    </Card.Text>
                                    <hr />
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                </div>
            </>

        )
    }


}

export default Category;