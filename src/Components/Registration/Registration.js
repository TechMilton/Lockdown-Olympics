import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import PageHeading from '../PageHeading';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            bio: "",
            dob: "",
            sportId: "1",
        };

        this.handleName = this.handleName.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleDob = this.handleDob.bind(this);
        this.handleSportId = this.handleSportId.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(e) {
        this.setState({ name: e.currentTarget.value });
    }

    handleBio(e) {
        this.setState({ bio: e.currentTarget.value });
    }

    handleDob(e) {
        this.setState({ dob: e.currentTarget.value });
    }

    handleSportId(e) {
        this.setState({ sportId: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleRegistration({ ...this.state })
    }

    render() {
        let { name,
            bio,
            dob,
            sportId, } = this.state;

        return (
            <div className="backgroundImage">
                <PageHeading><h1 className="heading competitorCardHeading">Competitor Registration</h1></PageHeading>
                <Container className="registrationCard" style={{ textAlign: "left" }} >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name.ControlInput">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={this.handleName}
                                required />
                        </Form.Group>
                        <Form.Group controlId="bio.ControlInput">
                            <Form.Label>Bio:</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={bio}
                                onChange={this.handleBio}
                                required />
                        </Form.Group>
                        <Form.Group controlId="dob.ControlInput">
                            <Form.Label>Date of Birth:</Form.Label>
                            <Form.Control
                                type="date"
                                value={dob}
                                onChange={this.handleDob}
                                required />
                        </Form.Group>
                        <Form.Group controlId="sportId.ControlInput">
                            <Form.Label>Sport</Form.Label>
                            <Form.Control
                                as="select"
                                value={sportId}
                                required
                                onChange={this.handleSportId}>
                                <option value="1">Bog Snorkelling</option>
                                <option value="2">Giant Pumpkin Kayaking</option>
                                <option value="3">Self-inflicted Hairdressing</option>
                                <option value="4">Stair Togogganing</option>
                                <option value="5">Worm Fighting</option>
                                <option value="6">Competitive Plant Watering</option>
                                <option value="7">The Banana Bread Cup</option>
                                <option value="8">Pea Shooting</option>
                            </Form.Control>
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
                <Link
                    to={`/`}
                    className="heading backBtn formBtn"
                    style={{ textDecoration: "none", zIndex: 5 }}
                ><i class="fas fa-arrow-left"></i>Back to homepage
                </Link>
            </div>
        );
    }
}

export default Registration;