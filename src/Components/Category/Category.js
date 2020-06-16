import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';


class Category extends Component {

    render() {
        return (
            <>
                <div class="catergoriesCards">
                    <h1>Events</h1>
                    {/* Home Events */}
                    <Card className="homeEvents" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.icons8.com/pastel-glyph/64/000000/home.png" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem" }}>Home Events</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>
                    {/* Garden Events */}
                    <Card className="gardenEvents" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.icons8.com/ios-filled/50/000000/spade.png" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem" }}>Garden Events</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>

                    {/* Mental Events */}
                    <Card className="mentalEvents" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.icons8.com/ios-filled/50/000000/brain.png" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "2rem" }}>Mental Events</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
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