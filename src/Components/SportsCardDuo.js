import React, { Component } from "react";
import SportsCard from "../Components/SportsCard/SportsCard";
import PageHeading from "../Components/PageHeading";


class SportsCardDuo extends Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (
            <>
                <PageHeading>Sports Catgeory</PageHeading>
                <div className="sportCardGroup">
                    <SportsCard />
                    <SportsCard />
                </div>
            </>
        )
    }
}

export default SportsCardDuo;