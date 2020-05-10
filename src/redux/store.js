import {addReducer,favoriteReducer} from './reducer';
import {combineReducers ,createStore, applyMiddleware} from 'react-redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    addReducer,
    favoriteReducer

});

export const store = createStore(reducers, createStore ,applyMiddleware(thunk));