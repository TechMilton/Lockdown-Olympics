import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import bgsport from '../../imgs/bgsport.jpg';
import colours from "../../data/colours.json";
import Loading from '../Loading';

const Category = ({
    categories,
    handleLoad
}) => {

    useEffect(() => {
        handleLoad()
    }, [])

    console.log(categories, handleLoad);


    return (
        <div className="backgroundImage backgroundImageCategories">
            <Loading loaded={categories.length}>
                <div className="catergoriesCards">
                    {categories.map((category, index) => {
                        return (<Link
                            key={index}
                            className="eventLink"
                            to={`/categories/${category.id}/sports`}
                        >
                            <Card className="categoryCard" >
                                {/* <Card.Img variant="top" src={category.img_pathway} /> */}
                                <i className={category.img_pathway}></i>
                                <Card.Body>
                                    <Card.Title className="eventName" style={{
                                        fontSize: "2rem", fontWeight: "500",
                                    }}>{category.name} Events</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                        )
                    })}
                </div>
            </Loading>
        </div>
    )
}

export default Category;