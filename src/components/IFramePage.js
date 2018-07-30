import React, {Component} from "react";
import {connect} from "react-redux";
import IFramePageView from "./IFramePageView";
import {fetchLinkList} from "../actions";

class IFramePage extends Component {
    componentDidMount() {
        this.props.updateLinks();
    }

    render() {
        const {match: {params: {linkId}}, linkList, language} = this.props;

        let link = linkList.find(x => x.linkId === linkId);
        let src = '';
        if (link && language) {
            let queryString = "lang=" + language;
            if (link.href.includes('?')) {
                queryString = `&${queryString}`;
            } else {
                queryString = `?${queryString}`;
            }
            src = link.href + queryString;
        }
        return (
            <IFramePageView src={src}/>
        );
    }
}


const mapStateToProps = state => {
    return {
        linkList: state.linkList,
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

export default connect(mapStateToProps, mapDispatchToProps)(IFramePage);