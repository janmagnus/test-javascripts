import {
    CLEAR_STATE,
    SET_LINK_LIST,
    SET_LINK_LIST_ERROR,
    SET_PRINCIPAL,
    SET_PRINCIPAL_ERROR,
    SET_VERSION,
    SET_VERSION_ERROR
} from "../actions/types";

const initial = () => ({});
const linkList = (state = initial(), action) => {
    switch (true) {
        case action.type === CLEAR_STATE:
            return initial();
        case action.type === SET_LINK_LIST: {
            let newState = Object.assign({}, state);
            delete newState['linkListError'];
            return newState;
        }
        case action.type === SET_LINK_LIST_ERROR:
            return Object.assign({}, state, {linkListError: action.payload});
        case action.type === SET_VERSION: {
            let newState = Object.assign({}, state);
            delete newState['versionError'];
            return newState;
        }
        case action.type === SET_VERSION_ERROR:
            return Object.assign({}, state, {versionError: action.payload});
        case action.type === SET_PRINCIPAL: {
            let newState = Object.assign({}, state);
            delete newState['principalError'];
            return newState;
        }
        case action.type === SET_PRINCIPAL_ERROR:
            return Object.assign({}, state, {principalError: action.payload});
        default:
            return state
    }
};

export default linkList;