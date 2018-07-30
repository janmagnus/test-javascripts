import React, {Component} from 'react';
import PropTypes from "prop-types";
import {fetchPrincipal} from "../../actions";
import {connect} from "react-redux";
import UserInfoBoxView from "./UserInfoBoxView";

class UserInfoBox extends Component {
    componentDidMount() {
        let {principal, fetchPrincipal} = this.props;
        if (!principal) {
            fetchPrincipal();
        }
    }

    render() {
        let {principal} = this.props;
        return (
            <UserInfoBoxView principal={principal}/>
        );
    }
}

UserInfoBox.propTypes = {
    principal: PropTypes.shape({
        loginId: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }),
    fetchPrincipal: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        principal: state.principal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPrincipal: () => {
            dispatch(fetchPrincipal())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoBox);
