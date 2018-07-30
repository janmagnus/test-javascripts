import React from 'react';
import PropTypes from 'prop-types'

const LinkElement = ({link: {linkId, label, iframe, href}, language}) => {
    let linkUrl = (iframe) ? "/portal/i/" + linkId : href;
    let queryString = "lang=" + language;
    if (linkUrl.includes('?')) {
        queryString = `&${queryString}`;
    } else {
        queryString = `?${queryString}`;
    }
    return (
        <a className="nav-link"
           target="_blank"
           href={linkUrl + queryString}>{label}</a>)
};


LinkElement.propTypes = {
    link: PropTypes.shape({
        linkId: PropTypes.string,
        href: PropTypes.string,
        label: PropTypes.string,
        iframe: PropTypes.bool
    }),
    language: PropTypes.string.isRequired
};


export default LinkElement;
