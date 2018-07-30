import "babel-polyfill";
import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import App from './App';
import {initializeMiddleware, initializeStore} from "./initializers"

import './css/agate-ui.css'

const middleware = initializeMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware));

initializeStore(store);

render(
    <Provider store={store}>
        <BrowserRouter basename="/portal">
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
