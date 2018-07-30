import {CLEAR_STATE, SET_LINK_LIST} from "../actions/types";

const initial = () => ([]);
const linkList = (state = initial(), action) => {
    switch (true) {
        case action.type === CLEAR_STATE:
            return initial();
        case action.type === SET_LINK_LIST:
            return [...action.payload];
        default:
            return state
    }
};

export default linkList;