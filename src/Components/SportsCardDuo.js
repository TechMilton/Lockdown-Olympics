import React, { Component } from "react";
import SportsCard from "../Components/SportsCard/SportsCard";
import PageHeading from "../Components/PageHeading";
import sports from "../imgs/sports.jpg";


class SportsCardDuo extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <>
             <div style={{
                    height: '60rem',
                    backgroundImage: `url(${sports})`
                }}>
                    
                <PageHeading>Sports Catgeory</PageHeading>
                <div className="sportCardGroup">
                    <SportsCard />
                    <SportsCard />
                </div>
            </div>
            </>
        )
    }
}

export default SportsCardDuo;