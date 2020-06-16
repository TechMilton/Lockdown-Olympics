import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../../imgs/Logo.png';
import sports from '../../imgs/sports.jpg';
import baseball from '../../imgs/baseball.png';

import PageHeading from '../PageHeading';

class SportsCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sport: [],

        }
    }

    componentDidMount() {
        let { id } = this.props;
        // this.props.getSport(id)
    }


    render() {
        let { sport } = this.state;


        return (
            <>
                <div>
                    <Card className="sportCard">
                        <Card.Img
                            variant="top"
                            src={baseball}
                            style={{
                                width: '150px',
                            }} />

                        <Card.Body className="m-auto">
                            <h1 className='p-2 titleFont'>Sports Name</h1>
                            <h4 className='p-3'>Description of said sport</h4>
                            <h6>Start Time: 1900hr </h6>
                            <p>Arena</p>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}

export default SportsCard;