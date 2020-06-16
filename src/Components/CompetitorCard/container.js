import { connect } from "react-redux";

import CompetitorCard from "./CompetitorCard";
import { getCompetitor } from "../../data/actions/api";

 const mapStateToProps = state => {
  return {

  };
};


const mapDispatchToProps = dispatch => {
    return {
        getCompetitor: (id) => dispatch(getCompetitor(id))
  
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CompetitorCard);