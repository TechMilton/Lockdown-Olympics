import { connect } from "react-redux";

import CompetitorList from "./CompetitorList";
import { getCompetitors } from "../../data/actions/api";

const mapStateToProps = ({ competitors }) => {
  return {
    competitors
    };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     handleIncrement: () => dispatch(patchScoreP1()),
//   };
// };

export default connect(mapStateToProps)(CompetitorList);