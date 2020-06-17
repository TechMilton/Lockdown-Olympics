import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../../imgs/Logo.png';
import baseball from '../../imgs/baseball.png';

import PageHeading from '../PageHeading';

class CompetitorCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            competitor: [],

        }
    }

    componentDidMount() {
        let { id } = this.props;
        this.props.getCompetitor(id)
    }


    render() {
        let { competitor } = this.state;


        return (
            <div className="backgroundImage">
                <PageHeading>Competitor Name</PageHeading>
                <div>
                    <Card className="competitorCard">
                        <Card.Img
                            variant="top"
                            src={baseball}
                            style={{
                                width: '150px',
                            }} />

                        <Card.Body className="m-auto">
                            <h1 className='p-2 titleFont highlightText'>Competitor Name</h1>
                            <h4 className='p-3 italicFont'>This is the bio of said competitor</h4>
                            <h6 className="titleFont">Date Of Birth:</h6>
                            <p className="italicFont">04/05/1995</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>


            //     <h1>{competitor.name}</h1>
            //     <h4>{competitor.bio}</h4>
            //     <p>{competitor.dob}</p>

        )
    }
}

export default CompetitorCard;