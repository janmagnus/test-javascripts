import React from 'react';
import LinkElement from './LinkElement'
import translate from 'redux-polyglot/translate';
import PropTypes from "prop-types";
import ErrorBox from "../error_box/ErrorBox";

const LinkListView = ({links, language, p}) => (
    <main className="agate-l-main-content">
        <ErrorBox/>
        <h2 id="page-title" className="agate-l-heading-1">{p.t("link-list.title")}</h2>
        <p>
            {p.t("link-list.intro")}
        </p>
        {links.map((link, i) => (
            <ul className="agate-c-action-list">
                <li className="nav-item">
                    <LinkElement key={i} link={link} language={language}/>
                </li>
            </ul>))}
    </main>
);


LinkListView.propTypes = {
    links: PropTypes.object,
    language: PropTypes.string.isRequired,
    p: PropTypes.object
};


export default translate(LinkListView);
