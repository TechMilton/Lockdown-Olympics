import { connect } from "react-redux";

import Category from "./Category";
import { getCategories } from "../../data/actions/api";

const mapStateToProps = ({ categories }) => {
    return {
        categories
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);