import { connect } from "react-redux";

import SportsCard from "./SportsCard";
import { getSports } from "../../data/actions/api";

const mapStateToProps = ({ sports }) => {
  return {
    sports
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSportsLoad: () => dispatch(getSports(ownProps.categoryId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SportsCard);