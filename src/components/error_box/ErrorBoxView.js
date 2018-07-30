import React from 'react';
import translate from 'redux-polyglot/translate';
import PropTypes from "prop-types";

const ErrorBoxView = ({errors, p, context, property}) => {
    if (errors && Object.keys(errors).length > 0) {
        let errorContexts = [];
        let filteredErrors = [];
        if (context) {
            if (errors[context]) {
                errorContexts.push(errors[context]);
            }
        } else {
            errorContexts.push(...Object.values(errors));
        }
        errorContexts.forEach(errorContext => {
            if (property) {
                if (errorContext[property]) {
                    filteredErrors.push(errorContext[property]);
                }
            } else {
                filteredErrors.push(...Object.values(errorContext))
            }
        });
        return <div className="container">
            {filteredErrors.filter(error => error).map((error, i) => (
                <div key={i} className="row">
                    <div className="col alert alert-danger" role="alert">{p.t(error)}</div>
                </div>
            ))}
        </div>
    } else {
        return <div/>
    }
};


ErrorBoxView.propTypes = {
    errors: PropTypes.object.isRequired,
    p: PropTypes.func.isRequired
};

export default translate(ErrorBoxView);
