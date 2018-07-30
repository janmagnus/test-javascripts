import {connect} from "react-redux";
import ErrorBoxView from "./ErrorBoxView";

const mapStateToProps = state => {
    return {
        errors: state.errors
    }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoxView);
