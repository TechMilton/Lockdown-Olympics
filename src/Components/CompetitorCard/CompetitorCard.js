import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import baseball from '../../imgs/baseball.png';
import CustomNavBar from '../CustomNavBar';
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


    return (
        <>
            <CustomNavBar />
            <div className="backgroundImage">
                <PageHeading><h1 className="heading competitorCardHeading ">Competitor</h1></PageHeading>

                <div className="centered">
                    {competitor === undefined ? <Loading loaded={false} /> :
                        <>
                            <Card className="competitorCard">
                                <Card.Img
                                    className="align-items-center"
                                    variant="top"
                                    src={baseball}
                                    style={{
                                        width: '150px',
                                    }} />

                                <Card.Body className="m-auto">
                                    <h2 className='p-2 cardTitleFont'>{competitor.name}</h2>
                                    <p className='p-3 italicFont'>{competitor.bio}</p>
                                    <h6 className="cardTitleFont">Date Of Birth:</h6>
                                    <p className="italicFont">{competitor.dob}</p>
                                    <h6 className="cardTitleFont">Competing in:</h6>
                                    <p className="italicFont">{competitor.sport}</p>
                                </Card.Body>
                            </Card>
                            <Link
                                to={`/competitors`}
                                className="heading backBtn"
                                style={{ textDecoration: "none" }}
                            >
                                <i class="fas fa-arrow-left"></i>Back to competitors
                    </Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default CompetitorCard;