import React from 'react';
import PropTypes from 'prop-types'
import LanguageSwitch from "./LanguageSwitch";


const LanguageSwitchBarView = ({setLanguage, currentLanguage}) => {
    let languages = [];
    languages.push({code: 'de', label: 'Deutsch'});
    languages.push({code: 'fr', label: 'Français'});
    languages.push({code: 'it', label: 'Italiano'});
    return (
        <ul className="agate-c-language-switcher__language-list">
            {languages.map((language, i) => (
                    <LanguageSwitch key={i} onClick={() => setLanguage(language.code)}
                                    selected={currentLanguage === language.code}
                                    label={language.label}
                                    id={"language-" + language.code}/>
                )
            )}
        </ul>)
};

LanguageSwitchBarView.propTypes = {
    setLanguage: PropTypes.func.isRequired,
    currentLanguage: PropTypes.string
};

export default LanguageSwitchBarView;
