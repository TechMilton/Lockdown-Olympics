import { connect } from "react-redux";

import CompetitorList from "./CompetitorList";
import { getCompetitors } from "../../data/actions/api";

const mapStateToProps = ({ competitors }) => {
  return {
    competitors
    };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoad: () => dispatch(getCompetitors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompetitorList);