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
        categoryId,
    }
) => {
    useEffect(() => {
        handleSportsLoad()
    }, [])

    let titlePicker = (category) => {
        switch (category) {
            case "1": return "Extreme";
            case "2": return "Home";
            case "3": return "Garden";
            case "4": return "Food"
        }
    }

    return (
        <div className="backgroundImage">

            <PageHeading>{titlePicker(categoryId) + " Events"}</PageHeading>
            <Loading loaded={sports.length}>
                <div className="sportCardGroup">
                    {sports.map((sport, index) =>
                        <Card key={index} className="sportCard">
                            <Card.Img
                                variant="top"
                                src={baseball}
                                style={{
                                    width: '150px',
                                    marginTop: 30
                                }} />

                            <Card.Body className="m-auto">
                                <h1 className='p-2 titleFont'>{sport.name}</h1>
                                <p className='p-3 italicFont'>{sport.description}</p>
                                <h5 className='titleFont'>{`Start Time: ${sport.start_time}`}</h5>
                                <h5 className='titleFont'>{`Location: ${sport.arena} Arena`}</h5>
                            </Card.Body>
                        </Card>
                    )}
                </div>
                <Link
                    to={`/categories`}
                    className="backBtn"
                    style={{ textDecoration: "none" }}
                >
                    <i class="fas fa-arrow-left" style={{ marginRight: 12 }}></i>Back to categories
                </Link>
            </Loading>
        </div>
    )
}


export default SportsCard;