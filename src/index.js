import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Header } from './shared/header/Header';
import store from "./redux/redux-store"

let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Header />
            <App 
                state={store.getState().ImageReducer}
                dispatch={store.dispatch}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    reRender(state);
})