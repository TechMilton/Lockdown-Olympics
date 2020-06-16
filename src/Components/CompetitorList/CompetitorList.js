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
            <div class="competitorList"> {
                competitors.map((competitor, index) =>
                    <div class="competitorListItem">
                        <h2 className="titleFont">{competitors.name}</h2>
                    </div>
                )}
            </div>
        </div>

    )



export default CompetitorList;