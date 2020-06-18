import { connect } from "react-redux";

import Registration from "./Registration";
import { postCompetitor } from "../../data/actions/api";


const mapDispatchToProps = dispatch => {
    return {
        handleRegistration: data => {
            dispatch(postCompetitor(data));            
        },
    }; 
};

export default connect(null, mapDispatchToProps)(Registration);