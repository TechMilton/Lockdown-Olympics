import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../../imgs/1.png";

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

            <PageHeading><h1 className="heading competitorCardHeading ">{titlePicker(categoryId) + " Events"}</h1></PageHeading>
            <Loading loaded={sports.length}>
                <div className="sportCardGroup">
                    {sports.map((sport, index) =>
                        <Card key={index} className="sportCard">
                            <Card.Img
                                variant="top"
                                src={require(`../../imgs/${sport.id}.png`)}
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    marginTop: 30
                                }} />

                            <Card.Body className="m-auto">
                                <h1 className='p-2 cardTitleFont'>{sport.name}</h1>
                                <p className='p-3 italicFont'>{sport.description}</p>
                                <h5 className='cardTitleFont'>{`Start Time: ${sport.start_time}`}</h5>
                                <h5 className='cardTitleFont'>{`Location: ${sport.arena} Arena`}</h5>
                            </Card.Body>
                        </Card>
                    )}
                </div>
                <Link
                    to={`/categories`}
                    className="heading backBtn"
                    style={{ textDecoration: "none" }}
                >
                    <i class="fas fa-arrow-left"></i>Back to event categories
                    </Link>
            </Loading>
        </div>
    )
}


export default SportsCard;