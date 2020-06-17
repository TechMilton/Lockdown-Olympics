import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import baseball from '../../imgs/baseball.png';

import PageHeading from '../PageHeading';

import Loading from "../Loading";

const SportsCard = (
    {
        sports,
        handleSportsLoad,
    }
) => {
    useEffect(() => {
        handleSportsLoad()
    }, [])


    return (
        <div className="backgroundImage">

            <PageHeading>Sports Category</PageHeading>
            <Loading loaded={sports.length}>
                <div className="sportCardGroup">
                    {sports.map((sport, index) =>
                        <Card key={index} className="sportCard">
                            <Card.Img
                                variant="top"
                                src={baseball}
                                style={{
                                    width: '150px',
                                }} />

                            <Card.Body className="m-auto">
                                <h1 className='p-2 titleFont'>Sports Name</h1>
                                <h4 className='p-3 italicFont'>Description of said sport</h4>
                                <h5 className='titleFont'>Start Time: 1900hr </h5>
                                <h5 className='titleFont'>Arena: The Downs</h5>
                            </Card.Body>
                        </Card>
                    )}
                </div>

            </Loading>
        </div>
    )
}


export default SportsCard;