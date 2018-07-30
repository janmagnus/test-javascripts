import React from 'react';
import PropTypes from 'prop-types'
import translate from 'redux-polyglot/translate';

const LogoutLink = ({p, logout}) => (
    <a className="logoutLink" onClick={() => logout()} href="?logout&LLO=true">{p.t('logout')}</a>
);

LogoutLink.propTypes = {
    p: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};


export default translate(LogoutLink);
