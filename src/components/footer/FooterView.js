import React from 'react';
import PropTypes from 'prop-types'
import translate from 'redux-polyglot/translate';

const FooterView = ({version, error, p}) => (
    <footer className="agate-p-site-footer">
        <p className="agate-p-site-footer__copyright">
            {p.t("footer.blw")}
        </p>
        <div className="text-center">
            {version}
            {error &&
            <span> ({error})</span>}
            <a href="">{p.t("footer.infos")}</a>
            <a href="">{p.t("footer.rechtlich")}</a>
        </div>
    </footer>
);

FooterView.propTypes = {
    version: PropTypes.string,
    error: PropTypes.string,
    p: PropTypes.object.isRequired
};

export default translate(FooterView);
