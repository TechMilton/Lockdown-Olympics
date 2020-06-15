import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from '../../axios';

import logo from '../../imgs/Logo.png';

class CompetitorCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            competitor: [],

        }
    }

    componentDidMount() {
        let { id } = this.props;
        axios.get(`/games/api/competitors/${id}`).then(({ data }) => {
            this.setState({
                competitor: data.data,
            });
        })
    }


    render() {
        let { competitor } = this.state;


        return (
            <Card style={{ width: '18rem', margin: '2rem' }}>
                <Card.Img variant="top" src={logo} />
                
                <Card.Body>
                    <Card.Title>Competitor Name </Card.Title>
                    <Card.Text>
                        This is the bio of the competitor
                    </Card.Text>
                    <Button variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
            // <div className="d-flex flex-column align-items-center p-4">
            //     <h2>{competitor.name}</h2>
            //     <p>{competitor.bio}</p>
            //     <p>{competitor.dob}</p>
            // </div>
        )
    }
}

export default CompetitorCard;