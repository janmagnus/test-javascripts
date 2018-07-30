import React from 'react';
import PropTypes from 'prop-types'
import translate from 'redux-polyglot/translate';

const HelpDeskView = ({p}) => (
    <div class="agate-p-help-desk">
        <h2 class="agate-t-typography--display-2 mb-2 mt-2">
            Helpdesk Agate
        </h2>
        <dl class="agate-p-help-desk__contact-data">
            <dt class="sr-only">Öffnungszeiten</dt>
            <dd class="mb-2 mt-2">{p.t("helpdesk.opening.days")}</dd>
            <dd class="mb-2 mt-2">{p.t("helpdesk.opening.time")}</dd>
            <dt class="sr-only">Telefonnummer</dt>
            <dd class="mb-2 mt-2"><a href="tel:0848222400">0848 222 400</a></dd>
            <dt class="sr-only">E-Mail Adresse</dt>
            <dd class="mb-0 mt-2"><a href="mailto:info@agatehelpdesk.ch">info@agatehelpdesk.ch</a></dd>
        </dl>
    </div>
);

HelpDeskView.propTypes = {
    p: PropTypes.object.isRequired
};


export default translate(HelpDeskView);
