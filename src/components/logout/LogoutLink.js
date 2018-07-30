import {logout} from "../../actions/index";
import {connect} from "react-redux";
import LogoutLinkView from "./LogoutLinkView";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutLinkView);
