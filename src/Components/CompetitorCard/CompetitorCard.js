import React, { Component } from "react";


class CompetitorCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            competitor: [],

        }
    }

    componentDidMount() {
        let { id } = this.props;
        axios.get(`/games/api/competitors/${competitor_id}`).then(({ data }) => {
            this.setState({
                competitor: data.data,
            });
        })
    }


    render() {
        let { competitor } = this.state;


        return (
            <div className="d-flex flex-column align-items-center p-4">
                <h2>{competitor.name}</h2>
                <p>{competitor.bio}</p>
                <p>{competitor.dob}</p>
            </div>
        )
    }
} 

export default CompetitorCard;