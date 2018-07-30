import React from 'react';
import PropTypes from 'prop-types'


const LanguageSwitch = ({onClick, label, selected, id}) => (
    <li className="nav-item">
        <div id={id}
             className={"nav-link btn" + (selected ? " active" : "")}
             onClick={() => !selected && onClick()}>{label}</div>
    </li>
);

LanguageSwitch.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
};
export default LanguageSwitch;
