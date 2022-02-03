import { applyMiddleware, combineReducers, createStore } from "redux";
import ImageReducer from "./imageReducer"
import thunk from "redux-thunk"

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')) : {}

let reducers = combineReducers(
    {
        ImageReducer
    });

let store = createStore(reducers, persistedState, applyMiddleware(thunk));

export default store;