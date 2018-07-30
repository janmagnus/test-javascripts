import VersionAPI from '../api/VersionAPI'
import LinksAPI from '../api/LinksAPI'
import {
    CLEAR_STATE,
    SET_LANGUAGE,
    SET_LINK_LIST,
    SET_LINK_LIST_ERROR,
    SET_PRINCIPAL,
    SET_PRINCIPAL_ERROR,
    SET_VERSION,
    SET_VERSION_ERROR
} from "./types";
import PrincipalAPI from "../api/PrincipalAPI";

export function fetchVersion() {
    return dispatch => {
        VersionAPI.get()
            .then(response => response.json())
            .then(data => dispatch(
                {
                    type: SET_VERSION,
                    payload: data
                }
            ))
            .catch(error => dispatch(
                {
                    type: SET_VERSION_ERROR,
                    payload: {communicationError: error}
                }
            ))
    }
}

export function fetchLinkList() {
    return dispatch => {
        LinksAPI.getAll()
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    dispatch(
                        {
                            type: SET_LINK_LIST_ERROR,
                            payload: data.errors
                        }
                    )
                }
                else {
                    dispatch(
                        {
                            type: SET_LINK_LIST,
                            payload: data
                        }
                    )
                }
            })
            .catch(error => dispatch(
                {
                    type: SET_LINK_LIST_ERROR,
                    payload: {communicationError: error}
                }
            ))
    }
}

export function fetchPrincipal() {
    return dispatch => {
        PrincipalAPI.get()
            .then(response => response.json())
            .then(data => {
                    dispatch({
                            type: SET_PRINCIPAL,
                            payload: data
                        }
                    );
                    if (!localStorage.getItem('language')) {
                        dispatch(setLanguage(data.language));
                    }
                }
            )
            .catch(error => dispatch(
                {
                    type: SET_PRINCIPAL_ERROR,
                    payload: {communicationError: error}
                }
            ))
    }
}

export function setLanguage(language) {
    return {
        type: SET_LANGUAGE,
        payload: {
            locale: language
        }
    }
}

export function logout() {
    localStorage.clear();
    return dispatch => {
        dispatch({
            type: CLEAR_STATE
        });
    }
}