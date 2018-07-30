import {setLanguage} from "../../actions";
import {connect} from "react-redux";
import LanguageSwitchBarView from "./LanguageSwitchBarView";

const mapStateToProps = state => {
    return {
        currentLanguage: state.polyglot.locale
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setLanguage: language => {
            dispatch(setLanguage(language))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitchBarView);
