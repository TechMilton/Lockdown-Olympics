import React, { useEffect } from "react";

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

    return (<div className="backgroundImage">
        <PageHeading>Competitor Name</PageHeading>
        <div>
            <Loading loaded={competitor !== undefined}>
                <Card className="competitorCard">
                    <Card.Img
                        variant="top"
                        src={baseball}
                        style={{
                            width: '150px',
                        }} />

                    <Card.Body className="m-auto">
                        <h1 className='p-2 titleFont'>Competitor Name</h1>
                        <h4 className='p-3 italicFont'>This is the bio of said competitor</h4>
                        <h6 className="titleFont">Date Of Birth:</h6>
                        <p className="italicFont">04/05/1995</p>
                    </Card.Body>
                </Card>
            </Loading>
        </div>
    </div>

    );
                    

}




export default CompetitorCard;
