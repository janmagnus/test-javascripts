import {combineReducers} from 'redux'
import frontend from './frontend'
import linkList from './linkList'
import principal from "./principal";
import {polyglotReducer} from 'redux-polyglot';
import errors from "./errors";

export default combineReducers({
    frontend,
    linkList,
    principal,
    errors,
    polyglot: polyglotReducer
})