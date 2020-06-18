import { connect } from "react-redux";

import Registration from "./Registration";
import { postCompetitor } from "../../data/actions/api";
import history from "../../history";

const mapStateToProps = ({ name, bio, dob, sportId }) => {
    return {
        name,
        bio,
        dob,
        sportId,
      };
  };


const mapDispatchToProps = dispatch => {
    return {
        handleRegistration: data => {
            dispatch(postCompetitor(data));

            history.push("/");
        },
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);