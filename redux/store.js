import React from 'react';
import {createStore} from 'redux';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

export const store = createStore(rootReducer, applyMiddleware(thunk));
