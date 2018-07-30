import {createPolyglotMiddleware} from "redux-polyglot";
import StringsAPI from "./api/StringsAPI";
import {createLogger} from "redux-logger";
import {SET_LANGUAGE} from "./actions/types";
import {fetchPrincipal, fetchVersion, setLanguage} from "./actions";
import thunk from "redux-thunk";

export const initializeMiddleware = () => {

    const middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }

    const languagesCache = {};

    middleware.push(createPolyglotMiddleware(
        SET_LANGUAGE,
        action => action.payload.locale,
        locale => new Promise((resolve, reject) => {
            localStorage.setItem('language', locale);
            if (languagesCache[locale]) {
                resolve(languagesCache[locale])
            } else {
                StringsAPI.get(locale)
                    .then(response => response.json())
                    .then(data => {
                        languagesCache[locale] = data;
                        resolve(data)
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    });
            }
        })
    ));
    return middleware;
};


export const initializeStore = (store) => {
    store.dispatch(fetchVersion());
    store.dispatch(fetchPrincipal());
    if (localStorage.getItem('language')) {
        store.dispatch(setLanguage(localStorage.getItem('language')))
    }
};