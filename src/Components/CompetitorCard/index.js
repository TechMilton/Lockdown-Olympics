import { connect } from "react-redux";

import CompetitorCard from "./CompetitorCard";
import { getCompetitor } from "../../data/actions/api";

const mapStateToProps = ({ competitors }, { competitorId }) => {
  return {
    competitor: competitors.find(({ id }) => id === +competitorId)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleCompetitorLoad: () => dispatch(getCompetitor(ownProps.competitorId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompetitorCard);