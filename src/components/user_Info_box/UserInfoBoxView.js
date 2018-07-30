import React from 'react';
import translate from 'redux-polyglot/translate';
import PropTypes from "prop-types";
import LogoutLink from "../logout/LogoutLink";
import {CHANGE_PASSWORD_URL, USER_ADMIN_URL} from "../../constants";

const UserInfoBoxView = ({principal, p}) => (
    <div className="agate-c-user-menu">
        <div className="agate-c-user-menu__content">
            <h2 className="agate-c-user-menu__title agate-l-heading-2">Aktueller Benutzer</h2>
            <p className="h2 agate-c-user-menu__username agate-l-heading-2">
                {principal.firstName} {principal.lastName}
            </p>
            <p class="agate-c-user-menu__agate-nr">
                {p.t("principal.agateNr", {agateNr: principal.loginId})}
            </p>
            <nav className="agate-c-user-menu__option-nav">
                <h3 className="sr-only">Optionen</h3>
                <ul className="agate-c-user-menu__option-list">
                    <li className="nav-item">
                        <a href={USER_ADMIN_URL}>
                            {p.t("principal.userDataLink")}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={CHANGE_PASSWORD_URL}>
                            {p.t("principal.changePassword")}
                        </a>
                    </li>
                    <li className="nav-item nav-item--logout">
                        <LogoutLink/>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
);


UserInfoBoxView.propTypes = {
    principal: PropTypes.shape({
        loginId: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }),
    p: PropTypes.object.isRequired
};

export default translate(UserInfoBoxView);
