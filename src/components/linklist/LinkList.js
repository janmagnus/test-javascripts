import React, {Component} from 'react';
import {fetchLinkList} from "../../actions";
import {connect} from "react-redux";
import LinkListView from "./LinkListView";

class LinkList extends Component {
    componentDidMount() {
        this.props.updateLinks();
    }

    render() {
        return (
            <LinkListView {...this.props}/>
        );
    }
}


const mapStateToProps = state => {
    return {
        links: state.linkList,
        language: state.polyglot.locale
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateLinks: () => {
            dispatch(fetchLinkList())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
