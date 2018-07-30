import {connect} from "react-redux";
import LinksPageView from "./LinksPageView";

const mapStateToProps = state => {
    return {
        principal: state.principal
    }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(LinksPageView);