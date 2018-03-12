import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

import './style.scss';
import allReducers from './reducers';
import AppContainer from './containers/AppContainer';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelector('#root')
)