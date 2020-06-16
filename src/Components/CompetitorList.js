import React, { Component } from "react";
import sports from '../../src/imgs/sports.jpg';

import PageHeading from '../Components/PageHeading';

class CompetitorList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            competitors: [],

        }
    }

    render() {
        let { competitors } = this.state;


        return (
            <PageHeading>Competitors</PageHeading>

        )
}
}

export default CompetitorList;