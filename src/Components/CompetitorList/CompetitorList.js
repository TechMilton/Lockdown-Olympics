import React, { Component } from "react";
import sports from '../../../src/imgs/sports.jpg';
import Alert from 'react-bootstrap/Alert'

import PageHeading from '../../Components/PageHeading';

const CompetitorList = (
    {
        competitors,
    }
) => (

        <div className="backgroundImage">
            <PageHeading>Competitors</PageHeading>
            <div className="competitorList"> {
                competitors.map((competitor, index) =>
                    <div key={index} className="competitorListItem">
                        <h2 className="titleFont">{competitor.name}</h2>
                    </div>
                )}
            </div>
        </div>

    )



export default CompetitorList;