import {connect} from 'react-redux'
import FooterView from "./FooterView";

const mapStateToProps = state => {
    return {
        version: state.frontend.version,
        error: state.frontend.error
    }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(FooterView);
