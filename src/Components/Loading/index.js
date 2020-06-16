import { connect } from "react-redux"; 

import Loading from "./Loading";
import { getCompetitors } from "../../data/actions/api";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getCompetitors()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Loading);