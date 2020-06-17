import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../../imgs/Logo.png';
import baseball from '../../imgs/baseball.png';

import PageHeading from '../PageHeading';

import Loading from '../Loading';

const CompetitorCard = (
    {
        competitor,
        handleCompetitorLoad,
    }
) => {
    useEffect(() => {
        handleCompetitorLoad()
    }, [])

    console.log(competitor);
    return (<div className="backgroundImage">
        <PageHeading>Competitor Name</PageHeading>
        <div>
            {competitor === undefined ? <Loading loaded={false} /> :
                <Card className="competitorCard">
                    <Card.Img
                        variant="top"
                        src={baseball}
                        style={{
                            width: '150px',
                        }} />

                    <Card.Body className="m-auto">
                        <h1 className='p-2 titleFont'>{competitor.name}</h1>
                        <p className='p-3 italicFont'>{competitor.bio}</p>
                        <h6 className="titleFont">Date Of Birth:</h6>
                        <p className="italicFont">{competitor.dob}</p>
                        <h6 className="titleFont">Competing in:</h6>
                        <p className="italicFont">{competitor.sport}</p>
                    </Card.Body>
                    <div className="competitorListItem">
                        <Link to={`/competitors`}>
                            <h2 className="titleFont">Back to competitors</h2>
                        </Link>
                    </div>
                </Card>
            }
        </div>
    </div>

    );


}




export default CompetitorCard;
