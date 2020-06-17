import React, { useEffect } from "react";

import sports from '../../../src/imgs/sports.jpg';
import Alert from 'react-bootstrap/Alert'

import PageHeading from '../../Components/PageHeading';
import Loading from '../Loading';

const CompetitorList = (
    {
        competitors,
        handleLoad,
    }
) => {
    useEffect(() => {
        handleLoad()
    }, [])

    return (
        <div className="backgroundImage">
            <PageHeading>Competitors</PageHeading>
            <Loading loaded={competitors.length}>
                <div className="competitorList"> {
                    competitors.map((competitor, index) =>
                        <div key={index} className="competitorListItem">
                            <a href="/competitor"><h2 className="titleFont">{competitor.name}</h2></a>
                        </div>
                    )}
                </div>
            </Loading>
        </div>
    )
}


export default CompetitorList;