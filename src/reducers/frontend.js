import {CLEAR_STATE, SET_VERSION} from "../actions/types";

const initial = () => ({version: 'loading'});
const frontend = (state = initial(), action) => {
    switch (true) {
        case action.type === CLEAR_STATE:
            return initial();
        case action.type === SET_VERSION:
            return action.payload;
        default:
            return state
    }
};

export default frontend;