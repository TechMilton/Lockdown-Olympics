import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';


class Category extends Component {

    render() {
        return (
            <>
                <h1 className="catergoriesTitle">Events</h1>
                <div className="catergoriesCards">

                    {/* Home Events */}
                    <Card className="homeEvents" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.icons8.com/pastel-glyph/64/000000/home.png" />
                        <Card.Body>
                            <Card.Title style={{
                                fontSize: "2rem", fontWeight: "500",
                            }}>Home Events</Card.Title>
                            < Card.Text >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ut quam eu malesuada.
                    </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>
                    {/* Garden Events */}
                    <Card className="gardenEvents" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.icons8.com/ios-filled/50/000000/spade.png" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem", fontWeight: "500", }}>Garden Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ut quam eu malesuada.
                    </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>

                    {/* Mental Events */}
                    <Card className="mentalEvents" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.icons8.com/ios-filled/50/000000/brain.png" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem", fontWeight: "500", }}>Mental Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ut quam eu malesuada.
                    </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>


                    <Card className="foodEvents" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem", fontWeight: "500", }}>Mental Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ut quam eu malesuada.
                    </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>
                </div>
            </>

        )
    }


}

export default Category;