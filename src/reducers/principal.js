import {CLEAR_STATE, SET_PRINCIPAL} from "../actions/types";

const initial = () => ({});
const principal = (state = {}, action) => {
    switch (true) {
        case action.type === CLEAR_STATE:
            return initial();
        case action.type === SET_PRINCIPAL:
            return action.payload;
        default:
            return state
    }
};

export default principal;