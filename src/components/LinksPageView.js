import React from 'react'
import LinkList from "./linklist/LinkList";
import PropTypes from "prop-types";
import UserInfoBox from "./user_Info_box/UserInfoBox";
import HelpDesk from "./helpdesk/HelpDesk";

const LinksPageView = ({principal}) => (
    <div className="agate-l-main-group">
        <LinkList/>
        <aside className="agate-l-main-content-aside">
            {principal && Object.keys(principal).length !== 0 &&
            <UserInfoBox/>
            }
            <HelpDesk/>
        </aside>
    </div>
);


LinksPageView.propTypes = {
    principal: PropTypes.object
};


export default LinksPageView;